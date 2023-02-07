import { NavLink } from 'react-router-dom';
import { RouteNames, RouteTitles } from '../../router';

import './styles/style.scss';

export const Header = () => {
    return (
        <header className='header'>
            <div className='header__logo'>Currency Converter</div>
            <div className='header__links'>
                <NavLink className='header__link' to={RouteNames.CONVERTER}>
                    {RouteTitles.CONVERTER}
                </NavLink>
                <NavLink className='header__link' to={RouteNames.ALL_EXCHANGE_RATES}>
                    {RouteTitles.ALL_EXCHANGE_RATES}
                </NavLink>
            </div>
        </header>
    );
};
