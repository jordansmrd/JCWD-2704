/** @format */
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { ITodo, TodoContext, TodoContextType } from "../pages/home";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  setTodos: Dispatch<SetStateAction<ITodo[]>>;
  todos: ITodo[];
};

export default function ModalInput({ isOpen, onOpen, onClose }: Props) {
  const { todos, setTodos, editId, setEditId } = useContext(
    TodoContext
  ) as TodoContextType;

  const [inputTodo, setInputTodo] = useState<ITodo>({
    date: new Date().toISOString().slice(0, 10),
    id: 0,
    task: "",
    checked: false,
  });

  useEffect(() => {
    if (editId) {
      onOpen();
      const idx = todos.findIndex((t) => t.id == editId);
      const data = todos[idx];
      setInputTodo({ ...data });
    } else
      setInputTodo({
        date: new Date().toISOString().slice(0, 10),
        id: 0,
        task: "",
        checked: false,
      });
  }, [editId]);

  useEffect(() => {
    if (editId && !isOpen) {
      setEditId(0);
    }
  }, [isOpen]);

  const addHandler = useCallback(() => {
    const task = (document.getElementById("task") as HTMLInputElement).value;
    const date = (document.getElementById("date") as HTMLInputElement).value;

    const id = editId
      ? editId
      : todos.length
      ? todos[todos.length - 1].id + 1
      : 1;

    const newData: ITodo = {
      task,
      date,
      id,
      checked: false,
    };

    if (editId) {
      const tmp = [...todos];
      const idx = tmp.findIndex((t) => t.id == editId);
      tmp[idx] = newData;
      setTodos(tmp);
    } else setTodos((t) => [...t, newData]);

    onClose();
    setEditId(0);
    setInputTodo({
      date: new Date().toISOString().slice(0, 10),
      id: 0,
      task: "",
      checked: false,
    });
  }, [todos, editId]);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add New Task</ModalHeader>
        <ModalCloseButton />
        <ModalBody className="flex flex-col gap-2 text-orange-500 mb-5">
          <input
            id="task"
            type="text"
            placeholder="Task"
            className="p-2 border border-blue-400 w-full  rounded-md"
            onChange={(e) =>
              setInputTodo((input) => {
                return { ...input, [e.target.id]: e.target.value };
              })
            }
            value={inputTodo.task}
          />
          <input
            id="date"
            type="date"
            placeholder="date"
            className="p-2 border border-blue-400 w-full  rounded-md"
            onChange={(e) =>
              setInputTodo((input) => {
                return { ...input, [e.target.id]: e.target.value };
              })
            }
            value={inputTodo.date}
          />
          <button
            className="bg-gradient-to-r from-[#072061] to-[#6b14a4] w-full rounded-md p-2 font-bold"
            onClick={addHandler}
          >
            Add New Task
          </button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
