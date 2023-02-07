interface BaseCodeInputProps {
    targetCodeInput: string;
    setTargetCodeInput: (e: string) => void;
}

export const TargetCodeInput = ({ targetCodeInput, setTargetCodeInput }: BaseCodeInputProps) => {
    return (
        <input
            className='converter__input'
            type='text'
            placeholder='EUR'
            value={targetCodeInput}
            onChange={(e) => setTargetCodeInput(e.target.value)}
        />
    );
};
