interface Experience {
  range: string;
}

interface Duration {
  years: number;
  months: number;
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

export const calculateTotalExperience = (experiences: Experience[]): Duration => {
  let totalMonths = 0;

  experiences.forEach((exp) => {
    const [startMonth, startYear] = exp.range.split(" - ")[0].split(" ");
    const [endMonth, endYear] =
      exp.range.split(" - ")[1] === "Present"
        ? [
            new Date().toLocaleString("default", { month: "long" }),
            new Date().getFullYear().toString(),
          ]
        : exp.range.split(" - ")[1].split(" ");

    const duration = calculateDuration(
      `${startMonth} 1, ${startYear}`,
      endYear === "Present" ? "Present" : `${endMonth} 1, ${endYear}`
    );
    totalMonths += duration.years * 12 + duration.months;
  });

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
