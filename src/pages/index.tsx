import { AuthContext } from "@/context/AuthContext";
import { FormEvent, useContext, useState } from "react";

export default function Home() {
  const { isAuthenticated, signIn } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    await signIn({ email, password });
  }

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="email"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input"
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn" type="submit">
          Entrar
        </button>
      </form>
    </div>
  );
}
