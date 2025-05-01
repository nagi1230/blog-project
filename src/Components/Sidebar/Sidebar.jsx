
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

  const Sidebar = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(1);
  const [isReportsOpen, setIsReportsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar state

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar visibility
  };

  const toggleReportsDropdown = (label) => {
    setActiveTab(label);
  };

  const handleReportTab = () => {
    setIsReportsOpen(!isReportsOpen);
  };

  const sideBar = [
    {
      key: 1,
      icon: "",
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      key: 2,
      icon: "",
      label: "Analytics",
      path: "/analytics",
    },
    {
      key: 4,
      icon: "",
      label: "Verification",
      path: "/verification",
    },
    {
      key: 3,
      icon: "",
      label: "Reports",
      arrow: <span className={`arrow ${isReportsOpen ? "arrow-down" : "arrow-up"}`}>{">"}</span>,
      children: [
        { key: "3-1", label: "All Transactions", path: "/all-transaction", parentTitle: "Reports" },
        { key: "3-2", label: "Yearly Reports", path: "/yearly", parentTitle: "Reports" },
      ],
    },
  ];

  return (
    <div className={`sidebar-container ${isSidebarOpen ? "open" : "closed"}`}>
      <button onClick={toggleSidebar} className="toggle-button">
        {isSidebarOpen ? "❮" : "❯"}
      </button>
      <div className={`sidebar ${isSidebarOpen ? "show" : "hide"}`}>
        <h2 className="sidebar-title">Dashboard</h2>
        {sideBar?.map((item, index) => (
          <div key={index} className="nav-menu">
            <div
              className={`nav-item ${activeTab === item.key ? "active" : ""}`}
              onClick={() => {
                if (item.label === "Reports") handleReportTab();
                toggleReportsDropdown(item.key);
                navigate(item.path, { state: { label: item.label } });
              }}
            >
              <span>
                {item.label} {item?.arrow ? item?.arrow : ""} 
              </span>
            </div>
            {
              isReportsOpen && item?.children?.map((child, childIndex) => (
                <div
                  className={`nav-item ${activeTab === child.key ? "active" : ""}`}
                  key={childIndex}
                  onClick={() => {
                    toggleReportsDropdown(child.key); navigate(
                      child.path, { state: { parentLabel: child.label, parentTitle: child.parentTitle } }
                    )
                  }}
                >
                  {child.label}
                </div>
              ))
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
