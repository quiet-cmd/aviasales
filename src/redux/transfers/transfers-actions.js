export const filter = (value, flag) => {
  if (value === 'all' && flag) return { type: 'ALL-FALSE-FILTER' };
  if (value === 'all' && !flag) return { type: 'ALL-TRUE-FILTER' };
  if (value !== 'all') return { type: 'FILTER', item: { [value]: !flag }, flag: !flag };
};
