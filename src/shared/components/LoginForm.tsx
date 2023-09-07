import { useRef, useState } from 'react';

import { useForm } from '../hooks/useForm';

export const LoginForm = () => {
  const [isShowPassWord, setIsShowPassWord] = useState(false);

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const { formData, errors, handleInputChange, handleSubmit, handleBlur, handleInput } = useForm();

  const handleShowPassWord = () => {
    setIsShowPassWord(!isShowPassWord);
  };

  return (
    <form className="modal-form" onSubmit={handleSubmit}>
      <div className="modal-email">
        <label htmlFor="email" className="modal-label">
          Email
        </label>
        <input
          type="text"
          ref={emailInputRef}
          id="email"
          name="email"
          className="modal-input"
          placeholder="Enter your email..."
          value={formData.email}
          onChange={handleInputChange}
          onBlur={handleBlur}
          onInput={handleInput}
        />
        <p className="login-error text-danger" style={{ height: '24px' }}>
          {errors.email ? errors.email : ''}
        </p>
      </div>
      <div className="modal-password">
        <label htmlFor="password" className="modal-label">
          Password
        </label>
        <input
          type={isShowPassWord ? 'text' : 'password'}
          ref={passwordInputRef}
          id="password"
          name="password"
          className="modal-input"
          placeholder="Enter your password..."
          value={formData.password}
          onChange={handleInputChange}
          onBlur={handleBlur}
          onInput={handleInput}
        />
        <p className="login-error text-danger">{errors.password ? errors.password : ''}</p>
        <span className="modal-toggle-show-btn" onClick={handleShowPassWord}>
          {isShowPassWord ? 'Hide' : 'Show'}
        </span>
      </div>

      <button className="btn btn-primary" type="submit">
        Login
      </button>
    </form>
  );
};
