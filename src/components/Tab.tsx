interface TabProps {
  id: number;
  title: string;
  isActive: boolean;
  onClick: () => void;
}

export const Tab = ({ id, title, isActive, onClick }: TabProps) => {
  return (
    <button
      key={id}
      className={`h-6 w-28 px-3 py-1 text-xs font-medium leading-[15px] transition-all duration-200 ease-in-out ${
        isActive
          ? "rounded border-zinc-200 bg-white text-zinc-800 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.09)]"
          : "text-zinc-400 hover:text-zinc-600"
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
