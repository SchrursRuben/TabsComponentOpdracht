"use client";

import { TabGroup } from "~/components/Tab-Group";
import { mockTabs } from "../mock-data/mockTabs";
import { CubeIcon } from "@heroicons/react/24/outline";

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="flex w-full flex-col items-start gap-4 px-20">
    <h1 className="border-b-2 text-center">{title}</h1>
    {children}
  </div>
);

export default function HomePage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center gap-8">
      <Section title="Default">
        <TabGroup tabs={mockTabs} />
      </Section>

      <Section title="Text Size">
        <TabGroup tabs={mockTabs} />
        <TabGroup tabs={mockTabs} tabsCustomization={{ textSize: "bigger" }} />
      </Section>

      <Section title="Width">
        <TabGroup tabs={mockTabs} tabsCustomization={{ width: "hug" }} />
        <TabGroup tabs={mockTabs} />
      </Section>

      <Section title="Icons">
        <TabGroup
          tabs={mockTabs}
          tabsCustomization={{ width: "hug", IconComponent: CubeIcon }}
        />
        <TabGroup
          tabs={mockTabs}
          tabsCustomization={{
            width: "hug",
            textSize: "bigger",
            IconComponent: CubeIcon,
            iconSize: "bigger",
          }}
        />
      </Section>
    </main>
  );
}
