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
      <div className="flex rounded border-[0.5px] bg-zinc-100 shadow-[inset_0px_1px_1px_0px_rgba(0,0,0,0.04)]">
        {mockTabs.map((tab) => (
          <Tab
            key={tab.id}
            id={tab.id}
            title={tab.title}
            isActive={activeTab === tab.id}
            onClick={() => handleTabClick(tab.id)}
          />
        ))}
      </div>
    </div>
  );
};
