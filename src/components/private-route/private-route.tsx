import { AppRoute, AuthorisationStatus } from '../../const';
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  authorisationStatus: AuthorisationStatus;
  children: JSX.Element;
};

function PrivateRoute({ authorisationStatus, children }: PrivateRouteProps) {
  return authorisationStatus === AuthorisationStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
