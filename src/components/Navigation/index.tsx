import { Dispatch, SetStateAction } from 'react';

import { Link } from 'react-router-dom';
import { RouteNames, RouteTitles } from '../../router';
import { CodeDropdown } from '../CodeDropdown';

import CloseIcon from '../../assets/CloseIcon.svg';
import './styles/style.scss';

interface NavigationProps {
    burger?: string;
    isActive?: boolean;
    setIsActive?: Dispatch<SetStateAction<boolean>>;
}

export const Navigation = ({ burger, isActive, setIsActive }: NavigationProps) => {
    return (
        <nav className={`navigation ${isActive && burger}`}>
            {isActive && (
                <div className='navigation__close-button' onClick={() => setIsActive!(false)}>
                    <img src={CloseIcon} alt='close icon' />
                </div>
            )}
            <CodeDropdown />
            <Link className='navigation__link' to={RouteNames.CONVERTER}>
                {RouteTitles.CONVERTER}
            </Link>
            <Link className='navigation__link' to={RouteNames.ALL_EXCHANGE_RATES}>
                {RouteTitles.ALL_EXCHANGE_RATES}
            </Link>
        </nav>
    );
};
