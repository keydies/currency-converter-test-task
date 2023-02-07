import { AppRouter } from '../../router/AppRouter';
import { Header } from '../Header';

import './styles/style.scss';

export const App = () => {
    return (
        <div>
            <Header />
            <AppRouter />
        </div>
    );
};
