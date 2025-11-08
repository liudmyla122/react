import React from 'react'
import styles from './Filters.module.css'

const Filters = ({
  priceRange,
  setPriceRange,
  discountedOnly,
  setDiscountedOnly,
  sortType,
  setSortType,
}) => {
  const handlePriceChange = (e) => {
    const { name, value } = e.target

    if (/^\d*$/.test(value) || value === '') {
      setPriceRange((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSortChange = (e) => {
    setSortType(e.target.value)
  }

  return (
    <div className={styles.filterBar}>
      <div className={styles.filterGroup}>
        <label className={styles.label}>Price</label>
        <div className={styles.priceInputs}>
          <input
            type="text"
            name="from"
            placeholder="from"
            className={styles.priceInput}
            value={priceRange.from}
            onChange={handlePriceChange}
          />
          <input
            type="text"
            name="to"
            placeholder="to"
            className={styles.priceInput}
            value={priceRange.to}
            onChange={handlePriceChange}
          />
        </div>
      </div>

      <div className={styles.filterGroup}>
        <label className={styles.labelCheckbox}>
          <input
            type="checkbox"
            checked={discountedOnly}
            onChange={(e) => setDiscountedOnly(e.target.checked)}
          />
          Discounted items
        </label>
      </div>

      <div className={styles.filterGroup}>
        <label className={styles.label}>Sorted by</label>
        <select
          className={styles.selectInput}
          value={sortType}
          onChange={handleSortChange}
        >
          <option value="default">by default</option>
          <option value="title-asc">Name (A-Z)</option>
          <option value="price-asc">Price (Low to High)</option>
          <option value="price-desc">Price (High to Low)</option>
        </select>
      </div>
    </div>
  )
}

export default Filters
