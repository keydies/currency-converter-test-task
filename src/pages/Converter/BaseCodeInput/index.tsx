interface BaseCodeInputProps {
    baseCodeInput: string;
    setBaseCodeInput: (e: string) => void;
}

export const BaseCodeInput = ({ baseCodeInput, setBaseCodeInput }: BaseCodeInputProps) => {
    return (
        <input
            className='converter__input'
            type='text'
            placeholder='15 USD'
            value={baseCodeInput}
            onChange={(e) => setBaseCodeInput(e.target.value)}
        />
    );
};
