Development Brief — GP Forecast Calculator (Next.js + TypeScript)
Objective
Build a simple front-end calculator in Next.js that forecasts Gross Profit (GP) for a garage business based on four input variables:
Bookings


Hours Available


Efficiency


Rate (£/hour)


The calculator will apply a fixed regression formula to compute a GP forecast and display the result in real time.

Requirements
1. Stack
Next.js (App Router)


TypeScript


Tailwind CSS for styling


No backend required (all logic is client-side)



2. Regression Calculation
Create a reusable function in:
 /lib/gpModel.ts
Use this formula:
GP = -20229.466 
    + 196.214 * rate
    + 1165.185 * efficiency
    + 53.474 * hoursAvailable
    + 7.632 * bookings

Where:
efficiency is a decimal (e.g. 0.82 for 82%)


bookings represents bookings for the relevant period (already lagged by ~3 weeks)


All inputs are numbers


Output GP is a number


Function interface
export interface GpInputs {
  bookings: number;
  hoursAvailable: number;
  efficiency: number; // decimal e.g., 0.84
  rate: number;
}

export function forecastGrossProfit(inputs: GpInputs): number;


3. UI Requirements

Title 

GP weekly Predictor

Subtitle

This data will explain 87% of what will happen in the branch this week
Create a page:
 /app/gp-calculator/page.tsx
Inputs (all controlled inputs):
Bookings (number input)


Hours Available (number input)


Efficiency (number input, decimal or percentage — we will decide based on simplest handling)


Rate (£/hour) (number input)


Render them in a simple form using Tailwind.
Output:
A large, bold GP forecast value below the form, updated live as the user changes inputs:
Example:
Forecast Gross Profit: £46,623

Format using toLocaleString().

4. Interaction
Forecast should update automatically whenever any input changes.


Provide basic validation: if an input is blank or invalid, treat it as zero.


No API calls required.



5. Styling
Use clean, simple UI:
Centre the calculator


Card-style container with padding & rounded corners


Labels above each input


Large GP output at the bottom



6. Acceptance Criteria
Page loads correctly on Vercel


User can enter all four inputs


GP updates immediately and correctly


Formula matches exactly the regression provided


Code is well structured:


Model logic in /lib/gpModel.ts


UI in /app/gp-calculator/page.tsx

