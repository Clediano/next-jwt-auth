import { AuthContext } from "@/context/AuthContext";
import { validateUserPermissions } from "@/utils/validateUserPermissions";
import { useContext } from "react";

type UserCanParams = {
  permissions?: string[];
  roles?: string[];
};

export function useCan({ permissions, roles }: UserCanParams) {
  const { isAuthenticated, user } = useContext(AuthContext);

  if (!isAuthenticated || !user) {
    return false;
  }

  const userHasValidPermissions = validateUserPermissions({
    user,
    permissions,
    roles,
  });

  return userHasValidPermissions;
}
