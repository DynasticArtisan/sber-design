import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useState,
} from "react";
import { RoutePath } from "./Routes";

export interface Location {
  path: RoutePath;
  params?: {
    module?: number;
    theme?: number;
    lesson?: number;
    page?: number;
  };
}

const startLocation: Location = {
  path: RoutePath.home,
};

const routerCtx = createContext({
  location: startLocation,
  navigate: (location: Location) => {},
});

const Router: FC<{ children: ReactNode }> = ({ children }) => {
  const [location, navigate] = useState<Location>(startLocation);
  return (
    <routerCtx.Provider value={{ location, navigate }}>
      {children}
    </routerCtx.Provider>
  );
};

export const useRouter = () => useContext(routerCtx);

export default Router;
