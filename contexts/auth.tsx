import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { createContext, useContext, useEffect, useState } from "react";
import { LS_ACCESS_TOKEN, LS_REFRESH_TOKEN, mainAPI } from "../utils/const";

interface User {
  id: string;
  username: string;
  isAdmin: boolean;
}

export interface IAuthContext {
  user?: User;
  setUser?: (user: User) => void;
  isAuthenticated: boolean;
  loading: boolean;
  error?: string;
  login: (email: string, password: string) => void;
  logout: () => void;
  // fetchUser: () => void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

interface IProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: IProps) => {
  // States
  const [user, setUser] = useState<User | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  // useEffect(() => {
  //   fetchUser();
  // }, []);

  const logout = async () => {
    setUser(undefined);
    await SecureStore.deleteItemAsync(LS_REFRESH_TOKEN);
    await SecureStore.deleteItemAsync(LS_ACCESS_TOKEN);
  };

  const login = async (username: string, password: string) => {
    setLoading(true);
    try {
      axios
        .post(`${mainAPI}/auth/login`, { username, password })
        .then(async (res) => {
          setError(undefined);

          const data = res.data;
          if (data) {
            await SecureStore.setItemAsync(
              LS_ACCESS_TOKEN,
              `Bearer ${data.access_token}`
            );
            await SecureStore.setItemAsync(
              LS_REFRESH_TOKEN,
              data.access_token // should be the refresh token
            );

            setUser(data as User);
          }
        });
    } catch (e) {
      setError(`Wrong username or password.`);
    }
    setLoading(false);
  };

  // const fetchUser = async () => {
  //   setLoading(true);
  //   const token = await SecureStore.getItemAsync(LS_ACCESS_TOKEN);
  //   if (token) {
  //     apiClient
  //       .query({ query: MeDocument, fetchPolicy: "no-cache" })
  //       .then((data) => {
  //         setUser(data.data.me);
  //         setLoading(false);
  //       })
  //       .catch(async () => {
  //         await SecureStore.deleteItemAsync(LS_REFRESH_TOKEN);
  //         await SecureStore.deleteItemAsync(LS_ACCESS_TOKEN);

  //         setLoading(false);
  //       });
  //   } else {
  //     setLoading(false);
  //   }
  // };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        setUser,
        login,
        loading,
        logout,
        error,
        // fetchUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export const ProtectRoute = ({ children }: IProps): React.ReactElement => {
  const { isAuthenticated, loading } = useAuth();

  useEffect(() => {
    // if (!loading && !isAuthenticated) {
    // }
  }, [isAuthenticated, loading]);

  if (loading) {
    return <></>;
  }
  return <>{children}</>;
};
