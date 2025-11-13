export interface GpInputs {
  bookings: number;
  hoursAvailable: number;
  efficiency: number; // decimal e.g., 0.84
  rate: number;
}

/**
 * Forecasts Gross Profit based on regression model
 *
 * Formula:
 * GP = -20229.466
 *     + 196.214 * rate
 *     + 1165.185 * efficiency
 *     + 53.474 * hoursAvailable
 *     + 7.632 * bookings
 *
 * @param inputs - The input variables for the forecast
 * @returns The forecasted Gross Profit
 */
export function forecastGrossProfit(inputs: GpInputs): number {
  const { bookings, hoursAvailable, efficiency, rate } = inputs;

  const gp = -20229.466
    + 196.214 * rate
    + 1165.185 * efficiency
    + 53.474 * hoursAvailable
    + 7.632 * bookings;

  return gp;
}

