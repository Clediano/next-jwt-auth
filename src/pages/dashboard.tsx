import { AuthContext } from "@/context/AuthContext";
import { withSSRAuth } from "@/utils/withSSRAuth";
import { GetServerSidePropsContext } from "next";
import { useContext } from "react";

export default function Dashboard() {
  const { user } = useContext(AuthContext);
  return <h1>{user?.email}</h1>;
}

export const getServerSideProps = withSSRAuth(async (ctx: GetServerSidePropsContext) => {
  return {
    props: {}
  }
});
