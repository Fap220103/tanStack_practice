import type useIsLoginContext from "@/lib/hooks/useIsLoginContext";
import { createContext } from "react";

export const UserContext = createContext({} as ReturnType<typeof useIsLoginContext>);