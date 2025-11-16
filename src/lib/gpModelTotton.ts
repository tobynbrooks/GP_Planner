export interface GpInputs {
  bookings: number;
  hoursAvailable: number;
  efficiency: number; // decimal (e.g., 0.564 for 56.4%)
  rate: number;
}

/**

 *
 * Formula:
 * GP = -//Gross Profit = -29335.402 + 195.979*Efficiency + 211.282*Average rate  + 3.881*Booking +2 + 69.586*Hours Available

 *
 * @param inputs - The input variables for the forecast
 * @returns The forecasted Gross Profit
 */
export function forecastGrossProfit(inputs: GpInputs): number {
  const { bookings, hoursAvailable, efficiency, rate } = inputs;

  const gp = -29335.402
    + 211.282 * rate
    + 195.979 * efficiency
    + 69.586 * hoursAvailable
    + 3.881 * bookings;

  return gp;
}

