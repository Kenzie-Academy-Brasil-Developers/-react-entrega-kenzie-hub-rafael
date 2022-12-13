import { createContext, useState } from "react";

export const ContextDashBord = createContext({});

export const ContextDashProvider = ({ children }) => {
  const [renderModalLogout, setRenderModalLogout] = useState(false);
  const [modalCreatTec, setModalCreatTec] = useState(false);
  const [modalEditUse, setModalEdit] = useState(false);
  const [techs, setTches] = useState({});

  return (
    <ContextDashBord.Provider
      value={{
        renderModalLogout,
        setRenderModalLogout,
        modalCreatTec,
        setModalCreatTec,
        modalEditUse,
        setModalEdit,
        techs,
        setTches,
      }}
    >
      {children}
    </ContextDashBord.Provider>
  );
};
