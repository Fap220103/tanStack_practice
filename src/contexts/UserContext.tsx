import type useIsLoginContext from "@/lib/hooks/useIsLoginContext";
import { createContext } from "vm";

export const UserContext = createContext({} as ReturnType<typeof useIsLoginContext>);