import React, { useContext } from "react";
import { GlobalContext } from "../../../../context";

const ContextButtonComponent = () => {
  const { setTheme, theme } = useContext(GlobalContext);
  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      ContextButtonComponent
    </button>
  );
};

export default ContextButtonComponent;
