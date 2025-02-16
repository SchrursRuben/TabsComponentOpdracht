"use client";
import React, { useState } from "react";
import { Tab, type TabCustomizationProps, type TabProps } from "./Tab";
import clsx from "clsx";

interface TabGroupProps {
  tabs: TabProps[];
  defaultActiveTab?: number;
  tabsCustomization?: TabCustomizationProps;
}

export const TabGroup = ({
  tabs,
  defaultActiveTab = tabs[0]?.id,
  tabsCustomization = {},
}: TabGroupProps) => {
  const { width = "fill" } = tabsCustomization || {};
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  const handleTabClick = (id: number) => () => setActiveTab(id);

  return (
    <div
      className={clsx(
        "flex max-w-md overflow-x-auto rounded border-[0.5px] bg-zinc-100 shadow-[inset_0px_1px_1px_0px_rgba(0,0,0,0.04)] dark:border-zinc-700 dark:bg-zinc-800",
        {
          "w-fit flex-wrap justify-center": width === "hug",
          "w-full": width === "fill",
        },
      )}
    >
      {tabs.map((tab) => (
        <Tab
          key={tab.id}
          {...tab}
          isActive={activeTab === tab.id}
          onClick={handleTabClick(tab.id)}
          tabCustomizationProps={tabsCustomization}
        />
      ))}
    </div>
  );
};
