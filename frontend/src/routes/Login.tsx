import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useLogin, useSession } from "src/hooks/useSession";

export function Login() {
  const { session, isAuthenticated } = useSession();
  const { login, errors, setErrors } = useLogin();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({ ...errors, [name]: "" });
  };

  async function handleSubmit(event) {
    event.preventDefault();

    // ========== VALIDATION ==========
    let valid = true;
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email обязателен";
      valid = false;
    }

    if (!formData.password) {
      newErrors.password = "Пароль обязателен";
      valid = false;
    }

    if (!valid) {
      setErrors(newErrors);
      return;
    }

    try {
      await login(formData);
    } catch (error) {
      setErrors({ ...newErrors, message: "Ошибка входа. Пожалуйста, попробуйте еще раз." });
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={(e) => handleChange(e)} />
          <span className="error">{errors.email}</span>
        </div>
        <div>
          <label htmlFor="password">Пароль:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={(e) => handleChange(e)} />
          <span className="error">{errors.password}</span>
        </div>
        <div>
          <button type="submit">Войти</button>
        </div>
        {errors.message && <p className="error">{errors.message}</p>}
      </form>
      <h2>{JSON.stringify(session)}</h2>
      {isAuthenticated() && <Navigate to="/" replace={true} />}
    </div>
  );
}
