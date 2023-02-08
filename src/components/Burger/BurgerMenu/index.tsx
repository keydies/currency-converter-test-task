import { Navigation } from '../../Navigation';

import CloseIcon from '../../../assets/CloseIcon.svg';

import { Dispatch, SetStateAction } from 'react';

interface BurgerMenuProps {
    isActive: boolean;
    setIsActive: Dispatch<SetStateAction<boolean>>;
}

export const BurgerMenu = ({ isActive, setIsActive }: BurgerMenuProps) => {
    return (
        <>
            <div className='close-button'>
                <img src={CloseIcon} alt='close icon' />
            </div>
            <Navigation burger='burger' isActive={isActive} setIsActive={setIsActive} />
        </>
    );
};
