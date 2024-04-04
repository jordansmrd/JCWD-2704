/** @format */

import { useDisclosure } from "@chakra-ui/react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalInput from "../components/modal";
import Card from "../components/card";
import React, { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/userSlice";
export const TodoContext = createContext<TodoContextType | null>(null);

export interface TodoContextType {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
  editId: number;
  setEditId: React.Dispatch<React.SetStateAction<number>>;
}

export interface ITodo {
  id: number;
  task: string;
  date: string;
  checked: boolean;
}

export default function HomePage() {
  const user = useSelector((state) => state.auth);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [todos, setTodos] = useState<ITodo[]>([
    {
      id: 1,
      task: "Makan Indomie",
      date: new Date().toISOString().slice(0, 10),
      checked: false,
    },
    {
      id: 2,
      task: "Belajar Coding",
      date: new Date().toISOString().slice(0, 10),
      checked: false,
    },
  ]);

  const [total, setTotal] = useState<number>(0);
  const [editId, setEditId] = useState<number>(0);
  const dispatch = useDispatch();
  const checkHandler = (id: number, e: { target: HTMLInputElement }) => {
    const tmp = [...todos];
    const idx = tmp.findIndex((t) => t.id == id);
    tmp[idx] = { ...tmp[idx], checked: e.target.checked };
    setTodos([...tmp]);
  };

  useEffect(() => {
    setTotal(todos.reduce((sum, curr) => (curr.checked ? sum + 1 : sum), 0));
  }, [todos]);

  const signOut = () => {
    dispatch(logout());
  };

  return (
    <center className=" m-9">
      <div className=" max-w-screen-md flex flex-col gap-3 items-center">
        <div className="w-full bg-black text-white fixed top-0 p-2">
          {user?.name}
          <button
            className=" bg-orange-400 p-1 rounded-md mx-3"
            onClick={signOut}
          >
            logout
          </button>
        </div>
        <h1 className=" text-orange-500 font-extrabold text-3xl  ">
          Scheduled
        </h1>
        <TodoContext.Provider
          value={{
            todos,
            setTodos,
            editId,
            setEditId,
          }}
        >
          <div className=" p-9 bg-[#F4F4F4] rounded-xl max-w-screen-sm w-full min-h-96 relative">
            <div className="flex flex-col gap-2 items-center overflow-auto max-h-96">
              {todos.map((todo, key) =>
                !todo.checked ? (
                  <Card
                    key={key}
                    checked={todo.checked}
                    id={todo.id}
                    task={todo.task}
                    handler={checkHandler}
                  />
                ) : null
              )}
            </div>

            <div className="flex flex-col gap-2 items-center overflow-auto max-h-96">
              <h1 className=" text-left w-full font-bold my-2">Done</h1>
              {todos.map((todo, key) =>
                todo.checked ? (
                  <Card
                    key={key}
                    checked={todo.checked}
                    id={todo.id}
                    task={todo.task}
                    handler={checkHandler}
                  />
                ) : null
              )}
            </div>

            <div className="m-3 text-start font-bold ">
              Total Done : {total}
            </div>

            <button
              type="button"
              onClick={onOpen}
              className=" w-12 aspect-square rounded-full bg-gradient-to-r from-[#072061] to-[#6b14a4] mt-3  "
            >
              <FontAwesomeIcon icon={faPlus} color="white" />
            </button>
            <ModalInput
              isOpen={isOpen}
              onClose={onClose}
              setTodos={setTodos}
              todos={todos}
              onOpen={onOpen}
            />
          </div>
        </TodoContext.Provider>
      </div>
    </center>
  );
}
