import React, { useEffect } from "react";
import Login from "./Components/Login";
import Spotify from "./Components/Spotify";
import { reducerCases } from "./utils/Constants";
import { useStateProvider } from "./utils/StateProvider";
export default function App() {
  const [{ token }, dispatch] = useStateProvider();
  useEffect(() => {
    const hash = window.location.hash;
    console.log(hash)
    if (hash) {
      const token = hash.substring(1).split("&")[0].split('=')[1];
      console.log(token);
      if (token) {
        dispatch({ type: reducerCases.SET_TOKEN, token });
      }
    }
    document.title = "Spotify";
  }, [dispatch, token]);
  return <div>{token ? <Spotify /> : <Login />}</div>;
}