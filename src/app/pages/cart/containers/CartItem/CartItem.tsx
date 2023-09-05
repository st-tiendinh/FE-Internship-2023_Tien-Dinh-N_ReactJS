import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { changeCartItemQuantity, deleteCartItem } from '../../../../../redux/actions/cart';

enum CartItemQuantityLimit {
  MIN = 1,
  MAX = 1000,
}

interface CartItemPropTypes {
  id: number;
  name: string;
  price: number;
  discount: number;
  imageUrl: string;
  quantity: number;
  discountPrice: number;
  productTotalPrice: number;
}

export const CartItem = ({
  id,
  name,
  price,
  discount,
  imageUrl,
  quantity,
  discountPrice,
  productTotalPrice,
}: CartItemPropTypes) => {
  const [inputQuantity, setInputQuantity] = useState(quantity);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    if (window.confirm('Do you want to delete this product?!!')) {
      dispatch(deleteCartItem(id));
    }
    setInputQuantity(quantity);
  };

  const handleChangeQuantity = (id: number, newQuantity: number) => {
    setInputQuantity(newQuantity);
    if (newQuantity < CartItemQuantityLimit.MIN) {
      handleDelete(id);
    } else if (newQuantity < CartItemQuantityLimit.MAX) {
      dispatch(changeCartItemQuantity(id, newQuantity));
    }
  };

  const handleChangeInput = () => {
    if (
      !Number.isNaN(+inputRef.current!.value) &&
      +inputRef.current!.value < CartItemQuantityLimit.MAX
    ) {
      setInputQuantity(+inputRef.current!.value);
    }
  };

  const handleSubmitByEnter = (e: React.KeyboardEvent<HTMLInputElement>, id: number) => {
    if (e.key === 'Enter') {
      handleChangeQuantity(id, inputQuantity);
    }
  };

  return (
    <li className="product-cart-item" key={id}>
      <div className="product-cart">
        <div className="row">
          <div className="col col-6 col-sm-8">
            <div className="product-cart-info">
              <img src={imageUrl} alt="" className="product-cart-img" />
              <div className="product-cart-desc">
                <h4 className="product-cart-name">{name}</h4>
                <div className="product-cart-prices">
                  <span className={'sale-price ' + (discount ? 'active' : '')}>
                    ${discountPrice}
                  </span>
                  <span className="original-price">{discount ? '$' + price : ''}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col col-6 col-sm-4">
            <div className="row">
              <div className="col col-6 col-sm-12">
                <div className="product-cart-action">
                  <div className="product-cart-quantity-wrapper">
                    <button
                      className="decrease btn btn-step-outline"
                      onClick={() => handleChangeQuantity(id, quantity - 1)}
                    >
                      -
                    </button>
                    <input
                      className="product-cart-quantity-input"
                      type="text"
                      ref={inputRef}
                      name="number"
                      value={inputQuantity}
                      onChange={handleChangeInput}
                      onKeyUp={(e) => handleSubmitByEnter(e, id)}
                      onBlur={() => handleChangeQuantity(id, inputQuantity)}
                    />
                    <button
                      className="increase btn btn-step-outline"
                      onClick={() => handleChangeQuantity(id, quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <span className="btn btn-delete-outline" onClick={() => handleDelete(id)}>
                    Delete
                  </span>
                </div>
              </div>

              <div className="col col-6 col-sm-12">
                <div className="product-cart-total">
                  <p className="product-cart-total-price text-center">${productTotalPrice}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
