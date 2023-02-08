import axios from 'axios';

const API_KEY = 'b27846292f20456e1a575f53';
const apiUrl = `https://v6.exchangerate-api.com/v6/${API_KEY}/`;

export const instance = axios.create({
    baseURL: apiUrl,
});

export const Api = {
    PairConversion(baseCode: string, targetCode: string, amount: number) {
        return instance
            .get(`pair/${baseCode}/${targetCode}/${amount}`)
            .then((response) => response.data.conversion_result);
    },
    fetchCurrencyCodes(selectedCode: string) {
        return instance.get(`/latest/${selectedCode}`).then((response) => response.data.conversion_rates);
    },
    getConvertedRates(baseCode: string) {
        return instance.get(`/latest/${baseCode}`).then((response) => response.data.conversion_rates);
    },
};
