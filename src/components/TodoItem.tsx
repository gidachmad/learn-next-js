'use client'

type TodoItemProps = {
  id: number;
  title: string;
  done: boolean;
  toggleTodoDone: (id: number, done: boolean) => void;
};

export function TodoItem({ id, title, done, toggleTodoDone }: TodoItemProps) {
  return (
    <li className="flex gap-2 items-center">
      <input
        id={id.toString()}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={done}
        onChange={(e) => toggleTodoDone(id, e.target.checked)}
      />
      <label htmlFor={id.toString()} className=" cursor-pointer peer-checked:line-through peer-checked:text-slate-500">{title}</label>
    </li>
  );
}
