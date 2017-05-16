import { NAME } from './constants';


export const getAll = state => state[NAME];
export const getForm = state => getAll(state).loginForm;