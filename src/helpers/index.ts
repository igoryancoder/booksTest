import {bookListT} from '../types';

const JS_ESCAPE_SYMBOLS: RegExp = /[\[\]?*+|{}\\()@.\n\r]/;

export function searchByFieldNames({
  data,
  text,
  searchFields,
}: {
  data: bookListT[];
  text: string;
  searchFields: string[];
}): bookListT[] {
  if (text.search(JS_ESCAPE_SYMBOLS) !== -1) {
    return [];
  }

  return data.filter(
    (elem: bookListT) =>
      searchFields.reduce(
        (accum, fieldName) =>
          `${elem[fieldName]}`.search(new RegExp(text, 'ig'))
            ? accum
            : accum + 1,
        0,
      ) > 0,
  );
}
