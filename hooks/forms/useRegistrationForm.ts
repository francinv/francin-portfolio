"use client"

import { ChangeEvent, useEffect, useState } from "react"
import { RegistrationForm } from "@/types"
import { RegistrationDefaultValues } from "@/lib"
import { EMAIL_REGEX } from "@/constants"

const useRegistrationForm = () => {
  const [form, setForm] = useState<RegistrationForm>(RegistrationDefaultValues)
  const [isFormValid, setIsFormValid] = useState<boolean>(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = () => {
    console.log(form)
    console.log("Implement me!")
    reset()
  }

  const reset = () => {
    setForm(RegistrationDefaultValues)
  }

  const validateForm = (formToValidate: RegistrationForm) =>
    Object.values(formToValidate).every((value) => value !== "") &&
    EMAIL_REGEX.test(formToValidate.from.toLowerCase())

  useEffect(() => {
    setIsFormValid(validateForm(form))
  }, [form])

  return {
    form,
    isFormValid,
    handleChange,
    handleSubmit,
  }
}

export default useRegistrationForm
