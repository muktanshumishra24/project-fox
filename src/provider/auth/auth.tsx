import React, { createContext, useEffect, useState } from 'react';
import firebase from 'firebase/app';
import { auth, googleAuthProvider } from 'utils/firebase';
import { authDefault } from './default';

type AuthContextProps = {
  user: null | firebase.User;
  googleSignIn: () => void;
  signOut: () => void;
};

export const AuthContext = createContext<AuthContextProps>(authDefault);

type AuthProviderProps = {
  children: React.ReactNode;
};

export default function AuthProvider({ children }: AuthProviderProps): JSX.Element {
  const [user, setUser] = useState<null | firebase.User>(null);

  useEffect(() => {
    auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  async function googleSignIn() {
    await auth.signInWithPopup(googleAuthProvider);
  }

  async function signOut() {
    await auth.signOut();
  }

  return (
    <AuthContext.Provider value={{ user, googleSignIn, signOut }}>{children}</AuthContext.Provider>
  );
}
