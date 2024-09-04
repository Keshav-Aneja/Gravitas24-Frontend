"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import Cookies from "js-cookie";

type GlobalContextType = {
  totalPages: number;
  setTotalPages: Dispatch<SetStateAction<number>>;
  eventType: string;
  setEventType: Dispatch<SetStateAction<string>>;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  eventQuery: string;
  setEventQuery: Dispatch<SetStateAction<string>>;
  isLoggedin: boolean;
  setIsLoggedin: Dispatch<SetStateAction<boolean>>;
  eventScope: string;
  setEventScope: Dispatch<SetStateAction<string>>;
};

export const GlobalContext = createContext<GlobalContextType | null>(null);

export default function GlobalContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [totalPages, setTotalPages] = useState(1);
  const [eventType, setEventType] = useState("All");
  const [eventQuery, setEventQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [eventScope, setEventScope] = useState("both");

  useEffect(() => {
    const token = Cookies.get("access_token");
    if (token && token != " ") {
      setIsLoggedin(true);
    }
  }, []);
  return (
    <GlobalContext.Provider
      value={{
        totalPages,
        setTotalPages,
        eventType,
        setEventType,
        currentPage,
        setCurrentPage,
        eventQuery,
        setEventQuery,
        isLoggedin,
        setIsLoggedin,
        eventScope,
        setEventScope,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(
      "GlobalContext should be used within GlobalContextProvider"
    );
  }
  return context;
};
