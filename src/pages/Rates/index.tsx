import { useEffect } from 'react';
import { uid } from 'uid';
import { RatesThunks } from '../../app/thunks';
import { useAppDispatch, useTypedSelector } from '../../hooks/redux';

import './styles/style.scss';

export const Rates = () => {
    const baseCode = useTypedSelector((state) => state.ratesReducer.base_code);
    const convertedRates = useTypedSelector((state) => state.ratesReducer.converted_rates);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(RatesThunks.getConvertedRates(baseCode));
    }, []);

    return (
        <div className='rates'>
            {convertedRates &&
                convertedRates.map((rate: string) => (
                    <div className='rates__value' key={uid()}>
                        {`1 ${rate.split(' ')[1]} = ${(1 / Number(rate.split(' ')[0])).toFixed(2)} ${baseCode}`}
                    </div>
                ))}
        </div>
    );
};
