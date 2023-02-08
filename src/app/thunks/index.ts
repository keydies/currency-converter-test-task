import { AxiosError } from 'axios';

import { AppDispatch } from '../store';
import { RatesActionCreators } from './../actions/rates-ac';
import { Api } from './agent';

export const RatesThunks = {
    pairConversion: (baseCode: string, targetCode: string, amount: number) => {
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
    getCurrencyCodes: (selectedCode: string) => {
        return async (dispatch: AppDispatch) => {
            try {
                await Api.fetchCurrencyCodes(selectedCode).then((response) => {
                    dispatch(RatesActionCreators.setCurrencyCodes(response));
                });
            } catch (e: unknown | AxiosError) {
                if (e instanceof AxiosError) {
                    console.log(e.message);
                }
            }
        };
    },
    getConvertedRates: (baseCode: string) => {
        return async (dispatch: AppDispatch) => {
            try {
                await Api.getConvertedRates(baseCode).then((response) => {
                    dispatch(RatesActionCreators.setConvertedRates(response));
                });
            } catch (e: unknown | AxiosError) {
                if (e instanceof AxiosError) {
                    console.log(e.message);
                }
            }
        };
    },
};
