import clsx from "clsx";

export interface TabCustomizationProps {
  textSize?: "smaller" | "bigger";
  width?: "hug" | "fill";
  iconSize?: "smaller" | "bigger";
  IconComponent?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
export interface TabProps {
  id: number;
  title: string;
  isActive?: boolean;
  tabCustomizationProps?: TabCustomizationProps;
  onClick?: () => void;
}

export const Tab = ({
  title,
  isActive = false,
  tabCustomizationProps,
  onClick,
}: TabProps) => {
  const {
    textSize = "smaller",
    width = "fill",
    iconSize = "smaller",
    IconComponent,
  } = tabCustomizationProps ?? {};

  return (
    <button
      className={clsx(
        "flex h-6 items-center justify-center gap-1.5 whitespace-nowrap px-3 py-1 font-medium transition-all duration-200 ease-in-out",
        {
          "rounded border-zinc-200 bg-white text-zinc-800 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.09)] dark:border-zinc-700 dark:bg-zinc-600 dark:text-white":
            isActive,
          "text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-200":
            !isActive,
          "px-4 text-sm": textSize === "bigger",
          "text-xs": textSize === "smaller",
          "w-fit": width === "hug",
          "w-full": width === "fill",
        },
      )}
      onClick={onClick}
    >
      {IconComponent && (
        <IconComponent
          className={clsx({
            "h-4 w-4": iconSize === "bigger",
            "h-3.5 w-3.5": iconSize === "smaller",
          })}
        />
      )}
      {title}
    </button>
  );
};
