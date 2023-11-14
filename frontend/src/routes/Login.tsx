import React, { useState } from "react";
import { authApi } from "src/api/authApi";
import { useLogin } from "src/hooks/useSession";

export function Login() {
  const { login, loading, error, setError } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [validationError, setValidationError] = useState("");

  //   const validateForm = () => {
  //     if (!email || !password) {
  //       setValidationError("Email and password are required.");
  //       return false;
  //     }

  //     if (!email.includes("@")) {
  //       setValidationError("Please enter a valid email.");
  //       return false;
  //     }

  //     setValidationError("");
  //     return true;
  //   };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    // if (!validateForm()) {
    //   return;
    // }

    // try {
    const session = await authApi.login({ email, password });
    console.log(session);
    // await login({ email, password });

    // Дополнительные действия после успешного входа
    // } catch (error) {
    // Обработка ошибок
    //   console.error("Login error: ", error);
    // }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit" disabled={loading}>
        Login
      </button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {/* {validationError && <p>{validationError}</p>} */}
    </form>
  );
}
