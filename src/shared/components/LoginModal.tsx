import { useSelector } from 'react-redux';
import { useState } from 'react';

import { Spinner } from './Spinner';

import { useForm } from '../hooks/useForm';

import { RootState } from '../../redux/reducers/root';

export const LoginModal = () => {
  const [isShowPassWord, setIsShowPassWord] = useState(false);
  const { formData, errors, handleInputChange, handleSubmit, handleBlur, handleInput } = useForm();
  const isLoading = useSelector((state: RootState) => state.user.isLoading);

  const handleShowPassWord = () => {
    setIsShowPassWord(!isShowPassWord);
  };

  return (
    <div className="login-wrapper">
      <div className="login">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-form-group">
            <label htmlFor="email" className="login-label">
              Email <span className="login-required-label text-danger">(*)</span>
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="login-input"
              placeholder="Enter your email..."
              value={formData.email}
              onChange={handleInputChange}
              onBlur={handleBlur}
              onInput={handleInput}
            />
            <p className="login-error-message text-danger">{errors.email ? errors.email : ''}</p>
          </div>
          <div className="login-form-group">
            <label htmlFor="password" className="login-label">
              Password <span className="login-required-label text-danger">(*)</span>
            </label>
            <input
              type={isShowPassWord ? 'text' : 'password'}
              id="password"
              name="password"
              className="login-input"
              placeholder="Enter your password..."
              value={formData.password}
              onChange={handleInputChange}
              onBlur={handleBlur}
              onInput={handleInput}
            />
            <p className="login-error-message text-danger">
              {errors.password ? errors.password : ''}
            </p>
            <span className="login-toggle-show-btn" onClick={handleShowPassWord}>
              {isShowPassWord ? 'Hide' : 'Show'}
            </span>
          </div>

          <button className="btn btn-rounded-primary" type="submit">
            Login
          </button>
        </form>

        {isLoading && <Spinner />}
      </div>
    </div>
  );
};
