import { Link } from 'react-router-dom';

import { RouteNames, RouteTitles } from '../../router';

import './styles/style.scss';

export const NotFound = () => {
    return (
        <div className='not-found'>
            <div className='not-found__notification-container'>{RouteTitles.NOT_FOUND}</div>
            <div className='not-found__link_container'>
                <Link className='not-found__link' to={RouteNames.CONVERTER}>
                    Back to site
                </Link>
            </div>
        </div>
    );
};
