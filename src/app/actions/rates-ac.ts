import { RatesActionEnum, setRatesAction } from './../reducers/Rates/types/index';

export const RatesActionCreators = {
    setRates: (payload: number): setRatesAction => ({
        type: RatesActionEnum.SET_RATES,
        payload,
    }),
};
