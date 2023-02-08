import Dropdown from 'react-dropdown';

import { useAppDispatch, useTypedSelector } from '../../hooks/redux';

import { RatesThunks } from '../../app/thunks';
import { RatesActionCreators } from '../../app/actions/rates-ac';

import 'react-dropdown/style.css';
import './styles/style.scss';

export const CodeDropdown = () => {
    const currencyRates = useTypedSelector((state) => state.ratesReducer.currency_codes);
    const currencyCodes = Object.keys(currencyRates);
    const baseCode = useTypedSelector((state) => state.ratesReducer.base_code);
    const dispatch = useAppDispatch();

    const selectBaseCode = (code: string) => {
        dispatch(RatesActionCreators.setBaseCode(code));
        dispatch(RatesThunks.getConvertedRates(code));
    };

    return (
        <Dropdown
            className='dropdown'
            arrowClassName='dropdown__arrow'
            menuClassName='dropdown__menu'
            options={currencyCodes}
            onChange={(e) => selectBaseCode(e.value)}
            value={baseCode}
            placeholder='Select an option'
        />
    );
};
