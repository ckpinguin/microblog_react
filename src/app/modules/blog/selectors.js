// import { createSelector } from 'reselect';
// import _ from 'lodash';
import { NAME } from './constants';

const getAll = state => state[NAME];

export const getAllEntries = state => getAll(state).entries; 
