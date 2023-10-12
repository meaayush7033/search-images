"use client";
import { createContext, useContext, useReducer } from "react";
import reducer from "@/app/reducer/imageReducer";
import axios from "axios";

const AppContext = createContext();

const initialState = {
  imageDetails: [],
  totalpages: 0,
  page: 1,
  query: "",
};

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  let key = process.env.NEXT_PUBLIC_API_KEY;

  async function getImage() {
    try {
      const res = await axios.get(
        `https://pixabay.com/api/?key=${key}&page=${state.page}`
      );
      const data = await res.data;
      dispatch({ type: "GET_ALL_IMAGES", payload: data });
    } catch (error) {
      throw error;
    }
  }

  async function getImageWithQuery(query, pageNo) {
    try {
      const res = await axios.get(
        `https://pixabay.com/api/?key=${key}&page=${pageNo}&q=${query}`
      );
      const data = await res.data;
      dispatch({ type: "GET_QUERY_IMAGES", payload: {data, pageNo} });
    } catch (error) {
      throw error;
    }
  }

  async function searchImages(query, pageNo) {
    dispatch({ type: "SET_QUERY", payload: { query, pageNo } });
    getImageWithQuery(query, pageNo);
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        getImage,
        searchImages,
        getImageWithQuery,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// custom Hook

const useGetImage = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useGetImage };
