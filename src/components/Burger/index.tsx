import { useState } from 'react';

import { BurgerMenu } from './BurgerMenu';

import BurgerIcon from '../../assets/burger.svg';
import './styles/style.scss';

export const Burger = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className='burger' onClick={() => setIsActive(!isActive)}>
            <img src={BurgerIcon} alt='burger' />
            {isActive && <BurgerMenu isActive={isActive} setIsActive={setIsActive} />}
        </div>
    );
};
