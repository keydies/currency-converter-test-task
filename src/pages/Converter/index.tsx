import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';

import { RatesThunks } from '../../app/thunks';

import { BaseCodeInput } from './BaseCodeInput';
import { ConversionResult } from './ConversionResult';
import { TargetCodeInput } from './targetCodeInput';

import './styles/style.scss';

export const Converter = () => {
    const dispatch = useAppDispatch();

    const [baseCodeInput, setBaseCodeInput] = useState<string>('');
    const [targetCodeInput, setTargetCodeInput] = useState<string>('');
    const [isResultVisible, setIsResultVisible] = useState(false);

    const convertCurrency = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (!baseCodeInput || !targetCodeInput) return;
        const amountOfBaseCode = Number(baseCodeInput.split(' ')[0]);
        const baseCode = baseCodeInput.split(' ').at(-1)?.toUpperCase();
        const targetCode = targetCodeInput.toUpperCase();
        dispatch(RatesThunks.PairConversion(baseCode!, targetCode, amountOfBaseCode));
        setIsResultVisible(true);
    };

    useEffect(() => {
        if (!baseCodeInput || !targetCodeInput) setIsResultVisible(false);
    }, [baseCodeInput, targetCodeInput]);

    return (
        <section className='converter'>
            <div className='converter__instruction'>Enter your request in format "1 USD" in "EUR":</div>
            <form className='converter__form'>
                <div className='converter__input__container'>
                    <BaseCodeInput baseCodeInput={baseCodeInput} setBaseCodeInput={setBaseCodeInput} />
                    <div className='converter__in'>in</div>
                    <TargetCodeInput targetCodeInput={targetCodeInput} setTargetCodeInput={setTargetCodeInput} />
                </div>
                <div className='converter__button__container'>
                    <button
                        className='converter__button'
                        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => convertCurrency(e)}>
                        Convert
                    </button>
                </div>
            </form>
            {isResultVisible && <ConversionResult baseCodeInput={baseCodeInput} targetCodeInput={targetCodeInput} />}
        </section>
    );
};
