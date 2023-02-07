import { IRatesActions, IRatesState, RatesActionEnum } from './types';

const initialState: IRatesState = {
    base_code: 'UAH',
    conversion_result: 0,
};

export const ratesReducer = (state = initialState, action: IRatesActions) => {
    switch (action.type) {
        case RatesActionEnum.SET_RATES: {
            return {
                ...state,
                conversion_result: action.payload,
            };
        }
        default:
            return state;
    }
};
