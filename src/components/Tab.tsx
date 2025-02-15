interface TabProps {
  id: number;
  content: string;
  isActive: boolean;
  onClick: () => void;
}

export const Tab = ({ id, content, isActive, onClick }: TabProps) => {
  return (
    <div>
      <button key={id} onClick={onClick} className="flex-1 py-2 text-center">
        {content}
      </button>
    </div>
  );
};
