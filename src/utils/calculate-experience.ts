interface Experience {
  range: string;
}

interface Duration {
  years: number;
  months: number;
}

interface DateRange {
  start: Date;
  end: Date;
}

export const calculateDuration = (startDate: string, endDate: Date | string = new Date()): Duration => {
  const start = new Date(startDate);
  const end = endDate === "Present" ? new Date() : new Date(endDate);

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months };
};

const parseExperienceRange = (range: string): DateRange => {
  const [startPart, endPart] = range.split(" - ");
  const [startMonth, startYear] = startPart.split(" ");
  
  const start = new Date(`${startMonth} 1, ${startYear}`);
  
  let end: Date;
  if (endPart === "Present") {
    end = new Date();
  } else {
    const [endMonth, endYear] = endPart.split(" ");
    end = new Date(`${endMonth} 1, ${endYear}`);
    // Set to end of month
    end.setMonth(end.getMonth() + 1);
    end.setDate(0);
  }
  
  return { start, end };
};

const mergeOverlappingRanges = (ranges: DateRange[]): DateRange[] => {
  if (ranges.length === 0) return [];

  const sorted = ranges.sort((a, b) => a.start.getTime() - b.start.getTime());
  const merged: DateRange[] = [sorted[0]];
  
  for (let i = 1; i < sorted.length; i++) {
    const current = sorted[i];
    const lastMerged = merged[merged.length - 1];

    if (current.start <= lastMerged.end) {
      // Merge by extending the end date if necessary
      lastMerged.end = new Date(Math.max(lastMerged.end.getTime(), current.end.getTime()));
    } else {
      // No overlap, add as new range
      merged.push(current);
    }
  }
  
  return merged;
};

const calculateRangeDuration = (range: DateRange): number => {
  const start = range.start;
  const end = range.end;
  
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  
  if (months < 0) {
    years--;
    months += 12;
  }
  
  return years * 12 + months;
};

export const calculateTotalExperience = (experiences: Experience[]): Duration => {
  const ranges = experiences.map(exp => parseExperienceRange(exp.range));
  const mergedRanges = mergeOverlappingRanges(ranges);
  const totalMonths = mergedRanges.reduce((total, range) => {
    return total + calculateRangeDuration(range);
  }, 0);

  return {
    years: Math.floor(totalMonths / 12),
    months: totalMonths % 12,
  };
};

export const formatDuration = (duration: Duration): string => {
  const yearsText =
    duration.years > 0
      ? `${duration.years} ${duration.years === 1 ? "year" : "years"}`
      : "";
  const monthsText =
    duration.months > 0
      ? `${duration.months} ${duration.months === 1 ? "month" : "months"}`
      : "";
  const separator = yearsText && monthsText ? " " : "";

  if (!yearsText && !monthsText) return "Less than a month";
  return `${yearsText}${separator}${monthsText}`;
};
