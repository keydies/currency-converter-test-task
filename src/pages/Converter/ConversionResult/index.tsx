import { useTypedSelector } from '../../../hooks/redux';

import './styles/style.scss';

interface ConversionResultProps {
    baseCodeInput: string;
    targetCodeInput: string;
}

export const ConversionResult = ({ baseCodeInput, targetCodeInput }: ConversionResultProps) => {
    const conversionResult = useTypedSelector((state) => state.ratesReducer.conversion_result);
    return (
        <div className='conversion-result'>{`${baseCodeInput.toUpperCase()} = ${conversionResult} ${targetCodeInput.toUpperCase()}`}</div>
    );
};
