export const filter = (value, flag) => {
  if (value === 'all' && flag) return { type: 'ALL-FALSE' };
  if (value === 'all' && !flag) return { type: 'ALL-TRUE' };
  if (value !== 'all') return { type: 'FILTER', item: { [value]: !flag }, flag: !flag };
};
