import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/user';

interface FormErrorProps {
  email: string | boolean;
  password: string | boolean;
}

export const useForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState<FormErrorProps>({ email: '', password: '' });

  const dispatch = useDispatch<any>();

  const validateEmail = (email: string, isRequired = false) => {
    if (isRequired && !email) {
      return 'Email là trường bắt buộc';
    }
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return emailRegex.test(email) || 'Email không hợp lệ';
  };

  const validatePassword = (password: string, isRequired = false) => {
    if (isRequired && !password) {
      return 'Password là trường bắt buộc';
    }
    return password.length >= 8 || 'Mật khẩu phải có ít nhất 8 ký tự';
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
    const emailError: string | boolean = validateEmail(formData.email);
    const passwordError: string | boolean = validatePassword(formData.password);

    setErrors({
      email: emailError,
      password: passwordError,
    });

    if (emailError === '' && passwordError === '') {
      dispatch(login(formData.email, formData.password));
    }
  };

  const handleBlur = (event: { target: HTMLInputElement }) => {
    const { name, value } = event.target;
    let error: string | boolean = '';

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
