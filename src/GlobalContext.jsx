import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [robot, setRobot] = React.useState("megaman");
  React.useEffect(() => {
    setRobot(robot);
  }, [robot]);
  return (
    <GlobalContext.Provider value={{ robot, setRobot }}>
      {children}
    </GlobalContext.Provider>
  );
};
