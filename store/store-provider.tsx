"use client";
import { FC } from "react";
import { Provider } from "react-redux";
import { createStore } from "./index";

interface StoreProviderProps {
  children: React.ReactNode;
}

const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  const store = createStore();

  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
