import { useEffect } from 'react';
import { RatesThunks } from '../../app/thunks';
import { useAppDispatch, useTypedSelector } from '../../hooks/redux';
import { AppRouter } from '../../router/AppRouter';
import { Header } from '../Header';

import './styles/style.scss';

export const App = () => {
    const dispatch = useAppDispatch();
    const defaultCode = useTypedSelector((state) => state.ratesReducer.base_code);

    useEffect(() => {
        dispatch(RatesThunks.getCurrencyCodes(defaultCode));
    }, []);

    return (
        <div>
            <Header />
            <AppRouter />
        </div>
    );
};
