import { Link } from 'react-router-dom';

import { RouteNames } from '../../router';
import { Burger } from '../Burger';

import { Navigation } from '../Navigation';

import './styles/style.scss';

export const Header = () => {
    return (
        <header className='header'>
            <div className='header__logo'>
                <Link className='header__logo-link' to={RouteNames.CONVERTER}>
                    Currency Converter
                </Link>
            </div>
            <Burger />
            <Navigation />
        </header>
    );
};
