import React, { useContext, useEffect } from 'react';
import { AuthContext } from 'provider/auth';
import { useNavigate } from 'react-router-dom';

function Login(): JSX.Element {
  const { user, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('../', { replace: true });
    }
  }, [navigate, user]);

  return (
    <div>
      <button type="button" onClick={googleSignIn}>
        Google Sign In
      </button>
    </div>
  );
}

export default Login;
