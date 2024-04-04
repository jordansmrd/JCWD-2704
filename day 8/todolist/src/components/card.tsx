/** @format */

import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Checkbox } from "@chakra-ui/react";
import { TodoContext, TodoContextType } from "../pages/home";
import { useCallback, useContext } from "react";

type Props = {
  task: string;
  id: number;
  checked: boolean;
  handler: (id: number, e: { target: HTMLInputElement }) => void;
};

export default function Card({ task, id, checked, handler }: Props) {
  const { todos, setTodos, setEditId } = useContext(
    TodoContext
  ) as TodoContextType;

  const deleteTodo = useCallback(() => {
    const tmp = [...todos];
    const idx = tmp.findIndex((t) => t.id == id);
    tmp.splice(idx, 1);

    setTodos([...tmp]);
  }, [todos]);

  return (
    <div className="flex justify-between border-b border-blue py-2 bg-white px-4 rounded-lg w-full">
      <Checkbox
        colorScheme="purple"
        className=" rounded-lg"
        onChange={(e: { target: HTMLInputElement }) => handler(id, e)}
      ></Checkbox>
      <div
        className={`w-full px-4 text-start flex items-center ${
          checked ? "line-through" : ""
        }  `}
      >
        {task}
      </div>
      <div className="flex gap-2">
        <button className=" rounded-md">
          <EditIcon
            width={5}
            color="red"
            onClick={() => {
              setEditId(id);
            }}
          />
        </button>
        <button className=" rounded-md">
          <DeleteIcon width={5} color="red" onClick={deleteTodo} />
        </button>
      </div>
    </div>
  );
}
