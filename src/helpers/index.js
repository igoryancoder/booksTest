const JS_ESCAPE_SYMBOLS = /[\[\]?*+|{}\\()@.\n\r]/;

export function searchByFieldNames({data, text, searchFields}) {
  if (text.search(JS_ESCAPE_SYMBOLS) !== -1) {
    return [];
  }

  return data.filter(
    elem =>
      searchFields.reduce(
        (accum, fieldName) =>
          `${elem[fieldName]}`.search(new RegExp(text, 'ig'))
            ? accum
            : accum + 1,
        0,
      ) > 0,
  );
}
