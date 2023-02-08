import {
    RatesActionEnum,
    setRatesAction,
    setCurrencyCodes,
    setBaseCode,
    setConvertedRates,
} from './../reducers/Rates/types/index';

export const RatesActionCreators = {
    setRates: (payload: number): setRatesAction => ({
        type: RatesActionEnum.SET_RATES,
        payload,
    }),
    setCurrencyCodes: (payload: Object): setCurrencyCodes => ({
        type: RatesActionEnum.SET_CURRENCY_CODES,
        payload,
    }),
    setBaseCode: (payload: string): setBaseCode => ({
        type: RatesActionEnum.SET_BASE_CODE,
        payload,
    }),
    setConvertedRates: (payload: []): setConvertedRates => ({
        type: RatesActionEnum.SET_CONVERTED_RATES,
        payload,
    }),
};
