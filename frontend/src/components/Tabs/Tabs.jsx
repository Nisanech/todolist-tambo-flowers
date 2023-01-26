// Import dependencies
import React from "react";

// Importar disparador de acciones de Redux
import { useDispatch } from "react-redux";

// Import tabs name & actions
import { TABS } from "../../redux/actions/type";
import { toggleTab } from "../../redux/actions/index";

// Import styles
import "./Tabs.css";

// Recibe como props el Tab o filtro actual
const Tabs = ({ currentTab }) => {
  // Se declara la constante para hacer uso del hook que dispara la acción del reducer
  const dispatch = useDispatch();

  return (
    <>
      <div className="tabs">
        {/* Se mapea los filtros definidos en el archivo type para generar los diferentes botones */}
        {/* El evento onClick por medio de la constante dispatch dispara la acción definida en el toggleTab y recibe como párametro el valor de tab desde el método map */}
        {TABS.map((tab, index) => (
          <button
            key={index}
            className={tab === currentTab ? "tab-selected" : "tab-button"}
            onClick={() => dispatch(toggleTab(tab))}
          >
            {tab}
          </button>
        ))}
      </div>
    </>
  );
};

export default Tabs;
