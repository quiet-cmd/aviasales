import React from 'react';

import FilterItem from '../filter-item/filter-item';

import classes from './filter-transfers.module.scss';

const FilterTransfers = () => {
  const filters = [
    { name: 'Все', action: 'all' },
    { name: 'Без пересадок', action: 'without' },
    { name: '1 пересадка', action: 'once' },
    { name: '2 пересадки', action: 'twice' },
    { name: '3 пересадки', action: 'thrice' },
  ];

  const filtersItemList = filters.map(({ ...props }) => <FilterItem key={props.name} {...props} />);
  return (
    <aside className={classes.filters}>
      <p className={classes.name}>Количество пересадок</p>
      {filtersItemList}
    </aside>
  );
};

export default FilterTransfers;
