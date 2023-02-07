import { uid } from 'uid';
import { Converter } from '../pages/Converter';
import { NotFound } from '../pages/NotFound';
import { Rates } from '../pages/Rates';

export interface AppRoute {
    path: string;
    element: () => JSX.Element;
    title: string;
    id: string;
}

export const enum RouteTitles {
    CONVERTER = 'Converter',
    ALL_EXCHANGE_RATES = 'All exchange rates',
    NOT_FOUND = 'Oops, page not found...',
}

export const enum RouteNames {
    CONVERTER = '/',
    ALL_EXCHANGE_RATES = '/rates',
    NOT_FOUND = '*',
}

export const routes: AppRoute[] = [
    {
        id: uid(),
        path: RouteNames.CONVERTER,
        element: Converter,
        title: RouteTitles.CONVERTER,
    },
    {
        id: uid(),
        path: RouteNames.ALL_EXCHANGE_RATES,
        element: Rates,
        title: RouteTitles.ALL_EXCHANGE_RATES,
    },
    {
        id: uid(),
        path: RouteNames.NOT_FOUND,
        element: NotFound,
        title: RouteTitles.NOT_FOUND,
    },
];
