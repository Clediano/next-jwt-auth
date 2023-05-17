import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";

export default function Dashboard() {
  const { user } = useContext(AuthContext);
  return <h1>{user?.email}</h1>;
}
