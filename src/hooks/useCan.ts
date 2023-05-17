import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";

type UserCanParams = {
  permissions?: string[];
  roles?: string[];
};

export function useCan({ permissions, roles }: UserCanParams) {
  const { isAuthenticated, user } = useContext(AuthContext);

  if (!isAuthenticated) {
    return false;
  }

  if (permissions && permissions?.length > 0) {
    const hasAllPermissions = permissions?.every((permission) => {
      return user?.permissions.includes(permission);
    });

    if (!hasAllPermissions) {
      return false;
    }
  }

  if (roles && roles?.length > 0) {
    const hasAllRoles = roles?.every((role) => {
      return user?.roles.includes(role);
    });

    if (!hasAllRoles) {
      return false;
    }
  }

  return true;
}
