// utils/calculateExperience.js
export const calculateDuration = (startDate, endDate = new Date()) => {
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

export const calculateTotalExperience = (experiences) => {
  let totalMonths = 0;

  experiences.forEach((exp) => {
    const [startMonth, startYear] = exp.range.split(" - ")[0].split(" ");
    const [endMonth, endYear] =
      exp.range.split(" - ")[1] === "Present"
        ? [
            new Date().toLocaleString("default", { month: "long" }),
            new Date().getFullYear(),
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

export const formatDuration = (duration) => {
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
