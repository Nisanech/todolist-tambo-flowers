// Import dependencies
import React from "react";
import { useDispatch } from "react-redux";

// Import tabs name & actions
import { TABS } from "../../redux/actions/type";
import { toggleTab } from "../../redux/actions/index";

// Import styles
import "./Tabs.css";

const Tabs = ({ currentTab }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="tabs">
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
