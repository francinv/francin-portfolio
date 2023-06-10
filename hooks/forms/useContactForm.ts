'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import { ContactForm } from '@/types';
import { ContactFormDefaultValues } from '@/lib';
import { EMAIL_REGEX } from '@/constants';

const useContactForm = () => {
  const [form, setForm] = useState<ContactForm>(ContactFormDefaultValues);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const reset = () => {
    setForm(ContactFormDefaultValues);
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    const res = await fetch('/api/form', {
      method: 'POST',
      body: JSON.stringify(form),
    });
    const data = await res.json();

    if (!res.ok) {
      setIsError(true);
      setErrorMessage(data.message || 'Something went wrong');
      return;
    }

    setIsSuccess(true);

    reset();
    setIsLoading(false);
  };

  const validateForm = (formToValidate: ContactForm) =>
    Object.values(formToValidate).every((value) => value !== '') &&
    EMAIL_REGEX.test(formToValidate.from.toLowerCase());

  useEffect(() => {
    setIsFormValid(validateForm(form));
  }, [form]);

  return {
    form,
    isFormValid,
    handleChange,
    handleSubmit,
    isLoading,
    isError,
    errorMessage,
    isSuccess,
  };
};

export default useContactForm;
