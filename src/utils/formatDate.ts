const formatDate = (value: Date): string =>
  Intl.DateTimeFormat('en-GB').format(value); // TODO

export default formatDate;
