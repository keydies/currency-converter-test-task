import { AppDispatch } from './../app/store';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import type { RootState } from '../app/store';

export const useAppDispatch: () => AppDispatch | any = useDispatch;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
