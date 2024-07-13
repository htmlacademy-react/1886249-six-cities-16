import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorisationStatus } from '../../const';

interface AccessRouteProps {
  status: AuthorisationStatus;
  children: JSX.Element;
}

const createAccessRoute = (
  statusToCheck: AuthorisationStatus,
  fallbackPath: AppRoute
) =>
  function AccessRoute({ children, status }: AccessRouteProps) {
    switch (status) {
      case statusToCheck:
        return children;

      case AuthorisationStatus.Unknown:
        return 'Loading...';

      default:
        return <Navigate to={fallbackPath} />;
    }
  };

const PrivateRoute = createAccessRoute(
  AuthorisationStatus.Auth,
  AppRoute.Login
);
const PublicRoute = createAccessRoute(
  AuthorisationStatus.NoAuth,
  AppRoute.Root
);

export { PrivateRoute, PublicRoute };
