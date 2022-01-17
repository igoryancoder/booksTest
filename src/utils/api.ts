/* eslint-disable max-len */
// @flow

import Request from '../utils/request';
import {ENDPOINTS_LIST, BASE_URL} from '../constants';
import {ID, postValuesT, bookT, bookReducerT} from '../types';

export const Requests = {
  ITEMS_LIST_POST: ({values}: {values: postValuesT}): Promise<bookReducerT[]> =>
    Request.post({url: `${BASE_URL}${ENDPOINTS_LIST.itemsList}`, body: values}),
  ITEMS_BY_ID_GET: ({id}: any): Promise<bookT> =>
    Request.get({url: `${BASE_URL}${ENDPOINTS_LIST.item}/${id}`}),
};
