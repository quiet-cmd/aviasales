import React from 'react';

import './filter-transfers.scss';

const FilterTransfers = () => {
  return (
    <aside className="filter-transfers">
      <p className="filter-transfers__name">Количество пересадок</p>
      <label className="check">
        <input className="check__input" type="checkbox" />
        <span className="check__box"></span>
        Все
      </label>
      <label className="check">
        <input className="check__input" type="checkbox" />
        <span className="check__box"></span>
        Без пересадок
      </label>
      <label className="check">
        <input className="check__input" type="checkbox" />
        <span className="check__box"></span>1 пересадка
      </label>
      <label className="check">
        <input className="check__input" type="checkbox" />
        <span className="check__box"></span>2 пересадки
      </label>
      <label className="check">
        <input className="check__input" type="checkbox" />
        <span className="check__box"></span>3 пересадки
      </label>
    </aside>
  );
};

export default FilterTransfers;
