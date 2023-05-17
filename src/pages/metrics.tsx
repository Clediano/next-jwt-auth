import { GetServerSidePropsContext } from "next";
import { withSSRAuth } from "@/utils/withSSRAuth";

export default function Metrics() {
  return (
    <>
      <h1>Métricas</h1>
    </>
  );
}

export const getServerSideProps = withSSRAuth(
  async (ctx: GetServerSidePropsContext) => {

    

    return {
      props: {},
    };
  }, {
    permissions: ['metrics.list'],
    roles: ['administrator']
  }
);
