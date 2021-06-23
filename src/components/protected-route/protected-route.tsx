import React, { useContext } from 'react';
import { AuthContext } from 'provider/auth';
import { Route, Navigate } from 'react-router-dom';

type ProtectedRouteProps = React.ComponentProps<typeof Route>;

function ProtectedRoute(props: ProtectedRouteProps): JSX.Element {
  const { user } = useContext(AuthContext);

  if (!user) return <Navigate to="/login" />;

  return <Route {...props} />;
}

export default ProtectedRoute;
