import React from 'react';

import FilterItem from '../filter-item/filter-item';

import './filter-transfers.scss';

const FilterTransfers = () => {
  const filters = [
    { name: 'Все', action: 'all' },
    { name: 'Без пересадок', action: 'without' },
    { name: '1 пересадка', action: 'once' },
    { name: '2 пересадки', action: 'twice' },
    { name: '3 пересадки', action: 'thrice' },
  ];

  const filtersItemList = filters.map(({ ...props }, i) => <FilterItem key={i} {...props} />);
  return (
    <aside className="filter-transfers">
      <p className="filter-transfers__name">Количество пересадок</p>
      {filtersItemList}
    </aside>
  );
};

export default FilterTransfers;
