import React, { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../utilities/URL";

const DataContext = createContext();

export const useDataContext = () => {
  return useContext(DataContext);
};

const fetchCategories = async () => {
  const response = await fetch(`${BASE_URL}categories`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const DataProvider = ({ children }) => {
  const { data: categories, isLoading, isError } = useQuery({
    queryKey: ["categories"], 
    queryFn: fetchCategories, 
    staleTime: 24 * 60 * 60 * 1000, 
    cacheTime: 24 * 60 * 60 * 1000, 
    refetchOnWindowFocus: false, 
    refetchOnMount: false, 
  });

  return (
    <DataContext.Provider
      value={{
        categories,
        loading: isLoading,
        error: isError,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
