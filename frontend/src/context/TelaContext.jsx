import { createContext, useState, useEffect } from "react";

export const TelaContext = createContext();

export const ViewTela = ({ children }) => {
  const [tela, setTela] = useState(window.innerWidth);

  useEffect(() => {
    const calcTela = () => {
      setTela(window.innerWidth);
    };

    window.addEventListener("resize", calcTela);
    window.addEventListener("load", calcTela);

    return () => {
      window.removeEventListener("resize", calcTela);
      window.removeEventListener("load", calcTela);
    };
  }, []);

  return (
    <TelaContext.Provider value={{ tela }}>{children}</TelaContext.Provider>
  );
};
