export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  author: string;
  publishedAt: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-calculate-salary-in-pakistan",
    title: "How to Calculate Salary in Pakistan",
    description:
      "Complete guide to calculating salary in Pakistan including basic pay, allowances, tax deductions, and net salary calculation.",
    category: "Salary",
    author: "HRCalculatorHub Team",
    publishedAt: "2025-01-15",
    content: `
## Understanding Salary Structure in Pakistan

Salary calculation in Pakistan involves several components. The basic salary is the foundation, followed by various allowances and deductions.

### Components of Salary

1. **Basic Salary** - The core pay that forms the basis for other calculations
2. **House Rent Allowance (HRA)** - Typically 45% of basic salary
3. **Medical Allowance** - Usually a fixed amount
4. **Conveyance Allowance** - Transport-related payments
5. **Utility Allowance** - For electricity, gas, etc.

### Tax Deductions

Pakistan uses a progressive tax system with the following slabs for tax year 2025:
- Up to PKR 600,000: 0%
- PKR 600,001 - 1,200,000: 5%
- PKR 1,200,001 - 2,200,000: 15%
- PKR 2,200,001 - 3,200,000: 25%
- PKR 3,200,001 - 4,100,000: 30%
- Above PKR 4,100,000: 35%

### Net Salary Calculation

Net Salary = Gross Salary - Tax Deductions - Other Deductions

Use our [Pakistan Tax Calculator](/pakistan-tax-calculator) to compute your exact tax liability.
    `,
  },
  {
    slug: "payroll-processing-guide",
    title: "Payroll Processing Guide for Small Businesses",
    description:
      "Step-by-step guide to processing payroll for small businesses including calculations, deductions, and compliance requirements.",
    category: "Payroll",
    author: "HRCalculatorHub Team",
    publishedAt: "2025-01-20",
    content: `
## Complete Payroll Processing Guide

Processing payroll correctly is essential for business compliance and employee satisfaction.

### Step 1: Collect Employee Information

### Step 2: Calculate Gross Pay
- Regular hours × hourly rate (or salary)
- Overtime hours × overtime rate
- Bonuses and commissions

### Step 3: Calculate Deductions
- Federal and state income tax
- Social Security and Medicare
- Health insurance premiums
- Retirement contributions

### Step 4: Calculate Net Pay
Net Pay = Gross Pay - Total Deductions

### Step 5: Process Payments
- Direct deposit or checks
- Pay stubs with detailed breakdown

Use our [Payroll Calculator](/payroll-calculator) to estimate payroll costs.
    `,
  },
  {
    slug: "what-is-leave-encashment",
    title: "What Is Leave Encashment - Complete Guide",
    description:
      "Understanding leave encashment rules, calculation methods, tax implications, and how to claim unused leave days.",
    category: "Leave",
    author: "HRCalculatorHub Team",
    publishedAt: "2025-02-01",
    content: `
## What Is Leave Encashment?

Leave encashment is the monetary compensation an employee receives for unused leave days upon resignation, retirement, or per company policy.

### How Leave Encashment Is Calculated

**Encashment Amount = (Monthly Salary / 30) × Unused Leave Days**

### Example:
If your monthly salary is $5,000 and you have 10 unused leave days:
- Daily Rate = $5,000 / 30 = $166.67
- Encashment Amount = $166.67 × 10 = $1,666.70

Use our [Leave Encashment Calculator](/leave-encashment-calculator) to compute your encashment amount.
    `,
  },
  {
    slug: "how-uae-gratuity-is-calculated",
    title: "How UAE Gratuity Is Calculated - UAE Labor Law",
    description:
      "Detailed explanation of UAE end-of-service gratuity calculation under UAE labor law for limited and unlimited contracts.",
    category: "Gratuity",
    author: "HRCalculatorHub Team",
    publishedAt: "2025-02-10",
    content: `
## UAE End-of-Service Gratuity Guide

Under UAE labor law, employees completing at least one year of continuous service are entitled to gratuity.

### Limited Contract:
- Less than 5 years: 21 days' basic salary per year
- More than 5 years: 30 days' basic salary per year

### Unlimited Contract:
- 1-3 years: 21 days' basic salary per year
- 3-5 years: 21 days' basic salary per year × 2
- More than 5 years: 30 days' basic salary per year

Use our [UAE Gratuity Calculator](/uae-gratuity-calculator) to estimate your gratuity.
    `,
  },
  {
    slug: "overtime-rules-explained",
    title: "Overtime Rules Explained - FLSA and International Standards",
    description:
      "Comprehensive guide to overtime rules under FLSA and international labor standards. Understand overtime eligibility, rates, and calculations.",
    category: "Overtime",
    author: "HRCalculatorHub Team",
    publishedAt: "2025-02-20",
    content: `
## Overtime Rules Explained

### FLSA Overtime Rules (US)
- Non-exempt employees: overtime pay for hours over 40/week
- Standard overtime rate: 1.5x regular pay

### International Standards
- **UK**: 1.5x for most overtime
- **UAE**: 1.25x normal, 1.5x night shifts
- **Pakistan**: 2x for overtime hours

Use our [Overtime Calculator](/overtime-calculator) to compute your overtime pay.
    `,
  },
  {
    slug: "attendance-tracking-best-practices",
    title: "Attendance Tracking Best Practices for HR Professionals",
    description:
      "Learn best practices for employee attendance tracking, including tools, methods, and how to calculate attendance percentage accurately.",
    category: "Attendance",
    author: "HRCalculatorHub Team",
    publishedAt: "2025-03-01",
    content: `
## Attendance Tracking Best Practices

### Why Attendance Tracking Matters
- Ensures fair payroll processing
- Helps identify attendance patterns
- Supports compliance with labor laws

### Calculating Attendance Percentage
**Attendance % = (Present Days / Total Working Days) × 100**

Use our [Attendance Percentage Calculator](/attendance-percentage-calculator) to track attendance rates.
    `,
  },
];