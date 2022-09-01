import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import { CartItem, Button } from "../components";
import {
  clearCart,
  removeCartItem,
  plusCartItem,
  minusCartItem,
} from "..//redux/actions/cart";
import cartEmptyImage from "../assets/img/empty-cart.png";

function Cart() {
  const dispatch = useDispatch();
  const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart);

  const addedPizzas = Object.keys(items).map((key) => {
    return items[key].items[0];
  });

  const onClearCart = () => {
    if (window.confirm("Вы действительно хотите очистить корзину?")) {
      dispatch(clearCart());
    }
  };

  const onRemoveItem = (id) => {
    if (window.confirm("Вы действительно хотите удалить пиццу из корзины?")) {
      dispatch(removeCartItem(id));
    }
  };

  const onPlusItem = (id) => {
    dispatch(plusCartItem(id));
  };

  const onMinusItem = (id) => {
    dispatch(minusCartItem(id));
  };

  const onClickOrder = () => {
    console.log("ВАШ ЗАКАЗ", items);
    Swal.fire({
      title: "Упссс... этот функционал еще на стадии разработки",
      imageUrl:
        "data:image/jpeg;base64,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",
      imageAlt: "Custom Image",
      imageWidth: "80%",
      confirmButtonText: "ждуссс...",
      confirmButtonColor: "#232323",
    });
  };

  return (
    <div className="content">
      <div className="container container--cart">
        {totalCount ? (
          <div className="cart">
            <div className="cart__top">
              <h2 className="content__title">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Корзина
              </h2>
              <div className="cart__clear">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 5H4.16667H17.5"
                    stroke="#B6B6B6"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z"
                    stroke="#B6B6B6"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.33337 9.16667V14.1667"
                    stroke="#B6B6B6"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.6666 9.16667V14.1667"
                    stroke="#B6B6B6"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span onClick={onClearCart}>Очистить корзину</span>
              </div>
            </div>
            <div className="content__items">
              {addedPizzas.map((obj) => (
                <CartItem
                  key={obj.id}
                  id={obj.id}
                  name={obj.name}
                  type={obj.type}
                  size={obj.size}
                  totalPrice={items[obj.id].totalPrice}
                  totalCount={items[obj.id].items.length}
                  onRemove={onRemoveItem}
                  onMinus={onMinusItem}
                  onPlus={onPlusItem}
                />
              ))}
            </div>
            <div className="cart__bottom">
              <div className="cart__bottom-details">
                <span>
                  Всего пицц: <b>{totalCount} шт.</b>
                </span>
                <span>
                  Сумма заказа: <b>{totalPrice} ₽</b>
                </span>
              </div>
              <div className="cart__bottom-buttons">
                <a
                  href="/"
                  className="button button--outline button--add go-back-btn"
                >
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 13L1 6.93015L6.86175 1"
                      stroke="#D3D3D3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLnejoin="round"
                    />
                  </svg>

                  <Link to="/">
                    <span>Вернуться назад</span>
                  </Link>
                </a>
                <Button onClick={onClickOrder} className="pay-btn">
                  <span>Оплатить сейчас</span>
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="cart cart--empty">
            <h2>
              Корзина пустая <i>😕</i>
            </h2>
            <p>
              Вероятней всего, вы не заказывали ещё пиццу.
              <br />
              Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <img src={cartEmptyImage} alt="Empty cart" />
            <Link to="/" className="button button--black">
              <span>Вернуться назад</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
