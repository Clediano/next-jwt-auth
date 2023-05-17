import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { withSSRGuest } from "@/utils/withSSRGuest";
import { GetServerSidePropsContext } from "next";

export default function Home() {
  const { signIn } = useContext(AuthContext);

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

export const getServerSideProps = withSSRGuest(async (ctx: GetServerSidePropsContext) => {
  return {
    props: {}
  }
});
