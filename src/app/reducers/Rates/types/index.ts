export interface IRatesState {
    base_code: string;
    conversion_result: number;
    currency_codes: Object;
    converted_rates: [];
}

export const enum RatesActionEnum {
    SET_RATES = 'SET_RATES',
    SET_CURRENCY_CODES = 'SET_CURRENCY_CODES',
    SET_BASE_CODE = 'SET_BASE_CODE',
    SET_CONVERTED_RATES = 'SET_CONVERTED_RATES',
}

export interface setRatesAction {
    type: RatesActionEnum.SET_RATES;
    payload: number;
}

export interface setCurrencyCodes {
    type: RatesActionEnum.SET_CURRENCY_CODES;
    payload: Object;
}

export interface setBaseCode {
    type: RatesActionEnum.SET_BASE_CODE;
    payload: string;
}

export interface setConvertedRates {
    type: RatesActionEnum.SET_CONVERTED_RATES;
    payload: [];
}

export type IRatesActions = setRatesAction | setCurrencyCodes | setBaseCode | setConvertedRates;
