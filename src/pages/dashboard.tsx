import { AuthContext } from "@/context/AuthContext";
import { useCan } from "@/hooks/useCan";
import { withSSRAuth } from "@/utils/withSSRAuth";
import { GetServerSidePropsContext } from "next";
import { useContext } from "react";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  const userCanSeeMetrics = useCan({ permissions: ["metrics.list"] });

  return (
    <>
      <h1>{user?.email}</h1>
      {userCanSeeMetrics && <h1>Métricas</h1>}
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
