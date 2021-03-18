export const range = (start, end, step = 1) => {
  const range = [];
  for (let element = start; element < end; element += step) {
    range.push(element);
  }
  return range;
};
