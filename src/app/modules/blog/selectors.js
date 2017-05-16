// import { createSelector } from 'reselect';
// import _ from 'lodash';
import { NAME } from './constants';

const getAll = state => state[NAME];

export const getAllEntries = state => getAll(state).entries;
export const getCurrentEntry = state => getAll(state).currentEntry;
export const getEditBlogEntryForm = state => getAll(state).editBlogEntryForm;