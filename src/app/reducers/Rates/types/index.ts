export interface IRatesState {
    base_code: string;
    conversion_result: number;
}

export const enum RatesActionEnum {
    SET_RATES = 'SET_RATES',
}

export interface setRatesAction {
    type: RatesActionEnum.SET_RATES;
    payload: number;
}

export type IRatesActions = setRatesAction;
