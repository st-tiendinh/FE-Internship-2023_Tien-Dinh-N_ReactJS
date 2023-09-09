import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/user';

type EmailType = string | boolean;
type PasswordType = string | boolean;
type ErrorType = string | boolean;

interface FormProps {
  email: string;
  password: string;
}

interface FormErrorProps {
  email: EmailType;
  password: PasswordType;
}

export const useForm = () => {
  const [formData, setFormData] = useState<FormProps>({ email: '', password: '' });
  const [errors, setErrors] = useState<FormErrorProps>({ email: '', password: '' });

  const dispatch = useDispatch<any>();

  const validateEmail = (email: string, isRequired = false) => {
    if (isRequired && !email) {
      return 'Email is a required field';
    }
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email) ? false : 'Invalid email';
  };

  const validatePassword = (password: string, isRequired = false) => {
    if (isRequired && !password) {
      return 'Password is a required field';
    }
    return password.length >= 8 ? false : 'Password must be at least 8 characters';
  };

  const handleInputChange = (event: { target: HTMLInputElement }) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value.trim(),
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const emailError: ErrorType = validateEmail(formData.email, true);
    const passwordError: ErrorType = validatePassword(formData.password, true);

    setErrors({
      email: emailError,
      password: passwordError,
    });

    if (!emailError && !passwordError) {
      dispatch(login(formData.email, formData.password));
    }
  };

  const handleBlur = (event: { target: HTMLInputElement }) => {
    const { name, value } = event.target;
    let error: ErrorType = '';

    if (name === 'email') {
      error = validateEmail(value, true);
    } else if (name === 'password') {
      error = validatePassword(value, true);
    }

    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;
    setErrors({ ...errors, [name]: false });
  };

  return {
    formData,
    errors,
    handleInputChange,
    handleSubmit,
    handleBlur,
    handleInput,
  };
};
