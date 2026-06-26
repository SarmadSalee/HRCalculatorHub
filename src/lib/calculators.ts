import type { CalculatorResult } from "@/types";

export function calculateSalary(inputs: {
  basicSalary: number;
  allowances: number;
  bonuses: number;
  commission: number;
  deductions: number;
}): CalculatorResult[] {
  const gross = inputs.basicSalary + inputs.allowances + inputs.bonuses + inputs.commission;
  const net = gross - inputs.deductions;
  return [
    { label: "Gross Salary", value: `$${gross.toFixed(2)}`, highlight: true },
    { label: "Net Salary", value: `$${net.toFixed(2)}`, highlight: true },
    { label: "Basic Salary", value: `$${inputs.basicSalary.toFixed(2)}` },
    { label: "Allowances", value: `$${inputs.allowances.toFixed(2)}` },
    { label: "Bonuses", value: `$${inputs.bonuses.toFixed(2)}` },
    { label: "Commission", value: `$${inputs.commission.toFixed(2)}` },
    { label: "Deductions", value: `$${inputs.deductions.toFixed(2)}` },
  ];
}

export function calculatePayroll(inputs: {
  salary: number;
  overtime: number;
  bonus: number;
  tax: number;
  deductions: number;
}): CalculatorResult[] {
  const gross = inputs.salary + inputs.overtime + inputs.bonus;
  const net = gross - inputs.tax - inputs.deductions;
  return [
    { label: "Net Payroll", value: `$${net.toFixed(2)}`, highlight: true },
    { label: "Total Payroll Cost", value: `$${gross.toFixed(2)}`, highlight: true },
    { label: "Base Salary", value: `$${inputs.salary.toFixed(2)}` },
    { label: "Overtime", value: `$${inputs.overtime.toFixed(2)}` },
    { label: "Bonus", value: `$${inputs.bonus.toFixed(2)}` },
    { label: "Tax Withheld", value: `$${inputs.tax.toFixed(2)}` },
    { label: "Other Deductions", value: `$${inputs.deductions.toFixed(2)}` },
  ];
}

const PAKISTAN_TAX_SLABS: { min: number; max: number; rate: number }[] = [
  { min: 0, max: 600000, rate: 0 },
  { min: 600001, max: 1200000, rate: 0.05 },
  { min: 1200001, max: 2200000, rate: 0.15 },
  { min: 2200001, max: 3200000, rate: 0.25 },
  { min: 3200001, max: 4100000, rate: 0.3 },
  { min: 4100001, max: Infinity, rate: 0.35 },
];

export function calculatePakistanTax(inputs: {
  monthlySalary: number;
  annualSalary: number;
}): {
  results: CalculatorResult[];
  taxSlabs: { min: number; max: number; rate: number; tax: number }[];
} {
  const annual = inputs.annualSalary || inputs.monthlySalary * 12;
  let totalTax = 0;
  const taxSlabs = PAKISTAN_TAX_SLABS.map((slab) => {
    const taxableInSlab = Math.max(0, Math.min(annual, slab.max) - Math.max(slab.min - 1, 0));
    const tax = taxableInSlab * slab.rate;
    totalTax += tax;
    return { ...slab, tax };
  });
  const monthlyTax = totalTax / 12;
  const effectiveRate = annual > 0 ? (totalTax / annual) * 100 : 0;
  return {
    results: [
      { label: "Annual Tax", value: `PKR ${totalTax.toFixed(2)}`, highlight: true },
      { label: "Monthly Tax", value: `PKR ${monthlyTax.toFixed(2)}`, highlight: true },
      { label: "Taxable Income", value: `PKR ${annual.toFixed(2)}` },
      { label: "Effective Tax Rate", value: `${effectiveRate.toFixed(2)}%` },
    ],
    taxSlabs,
  };
}

export function calculateGratuity(inputs: {
  basicSalary: number;
  joiningDate: string;
  leavingDate: string;
  contractType: "limited" | "unlimited";
}): CalculatorResult[] {
  const join = new Date(inputs.joiningDate);
  const leave = new Date(inputs.leavingDate);
  const years = (leave.getTime() - join.getTime()) / (365.25 * 24 * 60 * 60 * 1000);
  const dailyWage = inputs.basicSalary / 30;
  let gratuity = 0;
  if (years < 1) {
    gratuity = 0;
  } else if (inputs.contractType === "limited") {
    if (years < 5) {
      gratuity = dailyWage * 21 * years;
    } else {
      gratuity = dailyWage * 30 * years;
    }
  } else {
    if (years < 3) {
      gratuity = dailyWage * 21 * years;
    } else if (years < 5) {
      gratuity = dailyWage * 21 * years * 2;
    } else {
      gratuity = dailyWage * 30 * years;
    }
  }
  return [
    { label: "Estimated Gratuity", value: `AED ${gratuity.toFixed(2)}`, highlight: true },
    { label: "Years of Service", value: `${years.toFixed(2)} years` },
    { label: "Basic Salary", value: `AED ${inputs.basicSalary.toFixed(2)}` },
  ];
}

export function calculateOvertime(inputs: {
  hourlyRate: number;
  overtimeHours: number;
  multiplier: number;
}): CalculatorResult[] {
  const pay = inputs.hourlyRate * inputs.overtimeHours * inputs.multiplier;
  return [
    { label: "Overtime Pay", value: `$${pay.toFixed(2)}`, highlight: true },
    { label: "Hourly Rate", value: `$${inputs.hourlyRate.toFixed(2)}` },
    { label: "Overtime Hours", value: `${inputs.overtimeHours}` },
    { label: "Multiplier", value: `${inputs.multiplier}x` },
  ];
}

export function calculateAttendance(inputs: {
  presentDays: number;
  absentDays: number;
  totalDays: number;
}): CalculatorResult[] {
  const total = inputs.totalDays || inputs.presentDays + inputs.absentDays;
  const percentage = total > 0 ? (inputs.presentDays / total) * 100 : 0;
  return [
    { label: "Attendance Percentage", value: `${percentage.toFixed(2)}%`, highlight: true },
    { label: "Present Days", value: `${inputs.presentDays}` },
    { label: "Absent Days", value: `${inputs.absentDays}` },
    { label: "Total Days", value: `${total}` },
  ];
}

export function calculateLeaveEncashment(inputs: {
  salary: number;
  unusedLeaveDays: number;
}): CalculatorResult[] {
  const dailyRate = inputs.salary / 30;
  const amount = dailyRate * inputs.unusedLeaveDays;
  return [
    { label: "Encashment Amount", value: `$${amount.toFixed(2)}`, highlight: true },
    { label: "Daily Rate", value: `$${dailyRate.toFixed(2)}` },
    { label: "Unused Leave Days", value: `${inputs.unusedLeaveDays}` },
  ];
}

export function calculateWorkingDays(inputs: {
  startDate: string;
  endDate: string;
}): CalculatorResult[] {
  const start = new Date(inputs.startDate);
  const end = new Date(inputs.endDate);
  let count = 0;
  const current = new Date(start);
  while (current <= end) {
    const day = current.getDay();
    if (day !== 0 && day !== 6) count++;
    current.setDate(current.getDate() + 1);
  }
  const totalDays = Math.round((end.getTime() - start.getTime()) / (24 * 60 * 60 * 1000)) + 1;
  return [
    { label: "Working Days", value: `${count}`, highlight: true },
    { label: "Total Days (incl. weekends)", value: `${totalDays}` },
    { label: "Weekends Excluded", value: `${totalDays - count}` },
  ];
}

export function calculateShiftHours(inputs: {
  startTime: string;
  endTime: string;
  breakTime: number;
}): CalculatorResult[] {
  const [sh, sm] = inputs.startTime.split(":").map(Number);
  const [eh, em] = inputs.endTime.split(":").map(Number);
  const startMin = sh * 60 + sm;
  const endMin = eh * 60 + em;
  const totalMin = endMin > startMin
    ? endMin - startMin - inputs.breakTime
    : 24 * 60 - startMin + endMin - inputs.breakTime;
  const hours = Math.floor(totalMin / 60);
  const mins = totalMin % 60;
  return [
    { label: "Total Hours Worked", value: `${hours}h ${mins}m`, highlight: true },
    { label: "Total Minutes", value: `${totalMin}` },
    { label: "Break Time", value: `${inputs.breakTime} min` },
  ];
}

export function calculateAnnualLeave(inputs: {
  leaveEarnedPerMonth: number;
  employmentDuration: number;
}): CalculatorResult[] {
  const total = inputs.leaveEarnedPerMonth * inputs.employmentDuration;
  return [
    { label: "Total Leave Balance", value: `${total.toFixed(1)} days`, highlight: true },
    { label: "Leave Earned Per Month", value: `${inputs.leaveEarnedPerMonth} days` },
    { label: "Employment Duration", value: `${inputs.employmentDuration} months` },
  ];
}

export function calculateSalaryIncrement(inputs: {
  currentSalary: number;
  incrementPercentage: number;
}): CalculatorResult[] {
  const increase = inputs.currentSalary * (inputs.incrementPercentage / 100);
  const newSalary = inputs.currentSalary + increase;
  return [
    { label: "New Salary", value: `$${newSalary.toFixed(2)}`, highlight: true },
    { label: "Increase Amount", value: `$${increase.toFixed(2)}`, highlight: true },
    { label: "Current Salary", value: `$${inputs.currentSalary.toFixed(2)}` },
    { label: "Increment Percentage", value: `${inputs.incrementPercentage}%` },
  ];
}

export function calculateHourlyWage(inputs: {
  monthlySalary: number;
  workingHours: number;
}): CalculatorResult[] {
  const hourly = inputs.monthlySalary / inputs.workingHours;
  return [
    { label: "Hourly Wage", value: `$${hourly.toFixed(2)}`, highlight: true },
    { label: "Monthly Salary", value: `$${inputs.monthlySalary.toFixed(2)}` },
    { label: "Monthly Working Hours", value: `${inputs.workingHours}` },
  ];
}

export function calculateNoticePeriod(inputs: {
  resignationDate: string;
  noticePeriodDays: number;
}): CalculatorResult[] {
  const date = new Date(inputs.resignationDate);
  date.setDate(date.getDate() + inputs.noticePeriodDays);
  const lastDay = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return [
    { label: "Last Working Day", value: lastDay, highlight: true },
    {
      label: "Resignation Date",
      value: new Date(inputs.resignationDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    },
    { label: "Notice Period", value: `${inputs.noticePeriodDays} days` },
  ];
}

export function calculateUSTax(inputs: {
  salary: number;
  state: string;
  filingStatus: string;
}): CalculatorResult[] {
  const federalRate =
    inputs.salary > 600000
      ? 0.37
      : inputs.salary > 243725
        ? 0.35
        : inputs.salary > 191950
          ? 0.32
          : inputs.salary > 100525
            ? 0.24
            : inputs.salary > 47150
              ? 0.22
              : inputs.salary > 11600
                ? 0.12
                : 0.1;
  const federalTax = inputs.salary * federalRate;
  const standardDeduction = inputs.filingStatus === "married" ? 29200 : 14600;
  const taxableIncome = Math.max(0, inputs.salary - standardDeduction);
  return [
    { label: "Estimated Federal Tax", value: `$${federalTax.toFixed(2)}`, highlight: true },
    { label: "Taxable Income", value: `$${taxableIncome.toFixed(2)}` },
    { label: "Effective Tax Rate", value: `${((federalTax / inputs.salary) * 100).toFixed(2)}%` },
    { label: "Standard Deduction", value: `$${standardDeduction}` },
    { label: "Filing Status", value: inputs.filingStatus === "married" ? "Married Filing Jointly" : "Single" },
  ];
}

export function calculateUAETax(inputs: { salary: number }): CalculatorResult[] {
  return [
    { label: "Personal Income Tax", value: "0% (No Tax)", highlight: true },
    { label: "Monthly Salary", value: `AED ${inputs.salary.toFixed(2)}` },
    { label: "Annual Salary", value: `AED ${(inputs.salary * 12).toFixed(2)}` },
    { label: "VAT (on goods/services)", value: "5%" },
    { label: "Social Security (employee)", value: `${(inputs.salary * 0.05).toFixed(2)} AED/mo` },
  ];
}