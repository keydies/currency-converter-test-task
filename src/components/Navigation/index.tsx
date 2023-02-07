import { Link } from 'react-router-dom';
import { RouteNames, RouteTitles } from '../../router';

import './styles/style.scss';

export const Navigation = () => {
    return (
        <nav className='navigation'>
            <Link className='navigation__link' to={RouteNames.CONVERTER}>
                {RouteTitles.CONVERTER}
            </Link>
            <Link className='navigation__link' to={RouteNames.ALL_EXCHANGE_RATES}>
                {RouteTitles.ALL_EXCHANGE_RATES}
            </Link>
        </nav>
    );
};
