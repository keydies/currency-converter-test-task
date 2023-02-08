import { IRatesActions, IRatesState, RatesActionEnum } from './types';

const initialState: IRatesState = {
    base_code: 'UAH',
    conversion_result: 0,
    currency_codes: {},
    converted_rates: [],
};

export const ratesReducer = (state = initialState, action: IRatesActions) => {
    switch (action.type) {
        case RatesActionEnum.SET_RATES: {
            return {
                ...state,
                conversion_result: action.payload,
            };
        }
        case RatesActionEnum.SET_CURRENCY_CODES: {
            return {
                ...state,
                currency_codes: action.payload,
            };
        }
        case RatesActionEnum.SET_BASE_CODE: {
            return {
                ...state,
                base_code: action.payload,
            };
        }
        case RatesActionEnum.SET_CONVERTED_RATES: {
            return {
                ...state,
                converted_rates: Object.entries(action.payload).map((rate) => rate[1] + ' ' + rate[0]) as [],
            };
        }
        default:
            return state;
    }
};
