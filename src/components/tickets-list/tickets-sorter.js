const transferCounter = (cntStop, arr) => {
  return arr.filter((el) => Math.max(el.segments[0].stops.length, el.segments[1].stops.length) === cntStop);
};

export const PriceSorter = (price, arr) => {
  if (price === 'CHEAP') return arr.sort((a, b) => a.price - b.price);
  if (price === 'FAST')
    return arr.sort((a, b) =>
      a.segments[0].duration + a.segments[1].duration > b.segments[0].duration + b.segments[1].duration ? 1 : -1
    );
  if (price === 'OPTIMAL') return arr;
};

export const TransferSorter = (filters, arr) => {
  let result = [];
  if (filters.all) return arr;
  if (filters.without) result = [...result, ...transferCounter(0, arr)];
  if (filters.once) result = [...result, ...transferCounter(1, arr)];
  if (filters.twice) result = [...result, ...transferCounter(2, arr)];
  if (filters.thrice) result = [...result, ...transferCounter(3, arr)];
  return result;
};
