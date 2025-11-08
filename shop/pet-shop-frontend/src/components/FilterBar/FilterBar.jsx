import React, { useCallback } from 'react'
import styles from './FilterBar.module.css'

const FilterBar = ({ filter, onFilterChange }) => {
  const handleChange = useCallback(
    (e) => {
      const { name, value, type, checked } = e.target

      let newValue = value
      if (type === 'number') {
        newValue = value === '' ? '' : parseFloat(value)
      } else if (type === 'checkbox') {
        newValue = checked
      }

      onFilterChange({ [name]: newValue })
    },
    [onFilterChange]
  )

  return (
    <div className={styles.filterBar}>
      <div className={styles.filterGroup}>
        <label className={styles.label}>Price</label>
        <div className={styles.priceInputs}>
          <input
            type="number"
            name="priceFrom"
            placeholder="from"
            value={filter.priceFrom}
            onChange={handleChange}
            className={styles.input}
          />
          <input
            type="number"
            name="priceTo"
            placeholder="to"
            value={filter.priceTo}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.filterGroup}>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            name="discountedOnly"
            checked={filter.discountedOnly}
            onChange={handleChange}
            className={styles.checkbox}
          />
          Discounted items
        </label>
      </div>

      <div className={styles.filterGroup}>
        <label htmlFor="sortBy" className={styles.label}>
          Sorted by
        </label>
        <select
          id="sortBy"
          name="sortBy"
          value={filter.sortBy}
          onChange={handleChange}
          className={styles.select}
        >
          <option value="default">by default</option>
          <option value="new">Newest</option>
          <option value="price_asc">Price Ascending</option>
          <option value="price_desc">Price Descending</option>
        </select>
      </div>
    </div>
  )
}

export default FilterBar
