import StockData from "../StockData";
import CandlestickFinder from "./CandlestickFinder";
export default class BearishHarami extends CandlestickFinder {
    constructor() {
        super();
        this.requiredCount  = 2;
        this.name = "BearishHarami";
    }
    public logic(data: StockData) {
        const firstdaysOpen   = data.open[0];
        const firstdaysClose  = data.close[0];
        const firstdaysHigh   = data.high[0];
        const firstdaysLow    = data.low[0];
        const seconddaysOpen  = data.open[1];
        const seconddaysClose = data.close[1];
        const seconddaysHigh  = data.high[1];
        const seconddaysLow   = data.low[1];

		      const isBearishHaramiPattern = ((firstdaysOpen < seconddaysOpen) &&
		(firstdaysClose > seconddaysOpen) &&
		(firstdaysClose > seconddaysClose) &&
		(firstdaysOpen  < seconddaysLow) &&
                               (firstdaysHigh  > seconddaysHigh));

        return (isBearishHaramiPattern);

   }
}

export function bearishharami(data: StockData) {
    return new BearishHarami().hasPattern(data);
}
