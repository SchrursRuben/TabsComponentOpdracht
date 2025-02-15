"use client";
import React, { useState } from "react";
import { Tab } from "./Tab";
import { mockTabs } from "../mock-data/mockTabs";

export const TabGroup = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (id: number) => {
    setActiveTab(id);
  };

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="flex">
        {mockTabs.map((tab) => (
          <Tab
            key={tab.id}
            id={tab.id}
            content={tab.content}
            isActive={activeTab === tab.id}
            onClick={() => handleTabClick(tab.id)}
          />
        ))}
      </div>
    </div>
  );
};
