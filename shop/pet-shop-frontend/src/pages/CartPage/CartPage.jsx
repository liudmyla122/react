import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
  clearCart,
} from '../../store/cartSlice'
import OrderSuccessModal from '../../components/OrderSuccessModal/OrderSuccessModal'
import styles from './CartPage.module.css'

const BASE_URL = 'http://localhost:3333'

// ⭐ ДОБАВЬТЕ ЭТУ ФУНКЦИЮ ДЛЯ ОБРАБОТКИ ИЗОБРАЖЕНИЙ
const getImageUrl = (imagePath) => {
  if (!imagePath) {
    return 'https://placehold.co/100x100/AAAAAA/FFFFFF?text=No+Image'
  }

  if (typeof imagePath === 'string') {
    return imagePath.startsWith('http') ? imagePath : `${BASE_URL}${imagePath}`
  }

  return 'https://placehold.co/100x100/AAAAAA/FFFFFF?text=No+Image'
}

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  }

  const totalAmount = calculateTotal()

  const handleIncrement = (id) => dispatch(incrementQuantity(id))
  const handleDecrement = (id) => dispatch(decrementQuantity(id))
  const handleRemove = (id) => dispatch(removeItem(id))

  const onSubmit = async (data) => {
    if (cartItems.length === 0) {
      console.warn('Корзина пуста. Добавьте товары перед оформлением.')
      return
    }

    setIsSubmitting(true)

    const orderData = {
      ...data,
      products: cartItems.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
      })),
      total: totalAmount,
    }

    try {
      await axios.post(`${BASE_URL}/order/send`, orderData)
      setIsModalOpen(true)
      dispatch(clearCart())
      reset()
    } catch (error) {
      console.error(
        'Ошибка при оформлении заказа. Попробуйте снова. Подробности:',
        error
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  if (cartItems.length === 0) {
    return (
      <div className={styles.emptyCartContainer}>
        <h1 className={styles.cartTitle}>Shopping cart</h1>
        <Link to="/" className={styles.backToStoreBtn}>
          Back to the store
        </Link>
        <hr className={styles.separator} />
        <p className={styles.emptyMessage}>
          Looks like you have no items in your basket currently.
        </p>
        <Link to="/products" className={styles.continueShoppingBtn}>
          Continue Shopping
        </Link>
        {isModalOpen && (
          <OrderSuccessModal onClose={() => setIsModalOpen(false)} />
        )}
      </div>
    )
  }

  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.cartTitle}>Shopping cart</h1>
      <Link to="/" className={styles.backToStoreBtn}>
        Back to the store
      </Link>
      <hr className={styles.separator} />

      <div className={styles.cartContentWrapper}>
        {/* === ЛЕВАЯ ЧАСТЬ: СПИСОК ТОВАРОВ === */}
        <div className={styles.itemListSection}>
          {cartItems.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              {/* ⭐ ИСПОЛЬЗУЕМ ФУНКЦИЮ getImageUrl ДЛЯ ПРАВИЛЬНОГО URL */}
              <img
                src={getImageUrl(item.image)}
                alt={item.title}
                className={styles.itemImage}
                onError={(e) => {
                  e.target.onerror = null
                  e.target.src =
                    'https://placehold.co/100x100/AAAAAA/FFFFFF?text=No+Image'
                }}
              />

              <div className={styles.itemDetails}>
                <h2 className={styles.itemTitle}>{item.title}</h2>
                <div className={styles.priceAndQuantity}>
                  <div className={styles.quantityControl}>
                    <button onClick={() => handleDecrement(item.id)}>-</button>
                    <input type="text" value={item.quantity} readOnly />
                    <button onClick={() => handleIncrement(item.id)}>+</button>
                  </div>

                  <p className={styles.totalItemPrice}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>

                  <div className={styles.unitPriceContainer}>
                    <p className={styles.unitPrice}>
                      ${item.price.toFixed(2)} / шт.
                    </p>
                  </div>
                </div>
              </div>

              <button
                className={styles.removeItemBtn}
                onClick={() => handleRemove(item.id)}
                aria-label="Удалить товар"
              >
                &times;
              </button>
            </div>
          ))}
        </div>

        {/* === ПРАВАЯ ЧАСТЬ: СУММА И ФОРМА ЗАКАЗА === */}
        <div className={styles.orderSection}>
          <div className={styles.orderDetailsBox}>
            <h2 className={styles.orderDetailsTitle}>Order details</h2>
            <p className={styles.orderSummary}>{cartItems.length} items</p>
            <div className={styles.totalLine}>
              <span className={styles.totalLabel}>Total</span>
              <span className={styles.totalPrice}>
                ${totalAmount.toFixed(2)}
              </span>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className={styles.orderForm}
            >
              <input
                type="text"
                placeholder="Name"
                className={styles.formInput}
                {...register('name', { required: 'Имя обязательно' })}
              />
              {errors.name && (
                <p className={styles.errorText}>{errors.name.message}</p>
              )}

              <input
                type="tel"
                placeholder="Phone number"
                className={styles.formInput}
                {...register('phone', {
                  required: 'Телефон обязателен',
                  pattern: {
                    value: /^\+?[\d\s()-]{7,}\d$/,
                    message: 'Некорректный номер телефона (минимум 8 цифр)',
                  },
                })}
              />
              {errors.phone && (
                <p className={styles.errorText}>{errors.phone.message}</p>
              )}

              <input
                type="email"
                placeholder="Email"
                className={styles.formInput}
                {...register('email', {
                  required: 'Email обязателен',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: 'Некорректный Email',
                  },
                })}
              />
              {errors.email && (
                <p className={styles.errorText}>{errors.email.message}</p>
              )}

              <button
                type="submit"
                className={styles.orderButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Оформление...' : 'Order'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <OrderSuccessModal onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  )
}

export default CartPage
