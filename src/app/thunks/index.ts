import { RatesActionCreators } from './../actions/rates-ac';
import { AxiosError } from 'axios';
import { AppDispatch } from '../store';
import { Api } from './agent';

export const RatesThunks = {
    PairConversion: (baseCode: string, targetCode: string, amount: number) => {
        return async (dispatch: AppDispatch) => {
            try {
                await Api.PairConversion(baseCode, targetCode, amount).then((response) => {
                    dispatch(RatesActionCreators.setRates(response));
                });
            } catch (e: unknown | AxiosError) {
                if (e instanceof AxiosError) {
                    console.log(e.message);
                }
            }
        };
    },
};
