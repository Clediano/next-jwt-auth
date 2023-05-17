import { Can } from "@/components/Can";
import { AuthContext } from "@/context/AuthContext";
import { withSSRAuth } from "@/utils/withSSRAuth";
import { GetServerSidePropsContext } from "next";
import { useContext } from "react";

export default function Dashboard() {
  const { user, signOut } = useContext(AuthContext);

  return (
    <>
      <h1>{user?.email}</h1>
      <button onClick={() => signOut()}>Logout</button>
      <Can permissions={["metrics.list"]}>
        <h1>Métricas</h1>
      </Can>
    </>
  );
}

export const getServerSideProps = withSSRAuth(
  async (ctx: GetServerSidePropsContext) => {
    return {
      props: {},
    };
  }
);
