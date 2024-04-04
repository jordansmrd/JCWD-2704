/** @format */

import React, { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  Heading,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Input,
  Box,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import axios from "axios";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

function App() {
  const [listData, setListData] = useState([]);
  const url = "http://localhost:2000/superheroes";

  const init = {
    name: "",
    color: "",
  };

  const [inputHandler, setInputHandler] = useState({ ...init });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInputHandler((i) => ({ ...i, [id]: value }));
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const [search, setsearch] = useState("");

  const fetchData = async () => {
    try {
      const res = await axios.get(url, {
        params: {
          name_like: search,
        },
      });
      setListData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addData = async () => {
    try {
      if (!inputHandler.id) await axios.post(url, inputHandler);
      else await axios.patch(url + "/" + inputHandler.id, inputHandler);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (id) => {
    try {
      const { data } = await axios.get(url + "/" + id);
      setInputHandler({ ...data });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteHero = async (id) => {
    try {
      await axios.delete(url + "/" + id);
      onClose();
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [search]);

  return (
    <>
      <Heading>SUPER HEROES</Heading>

      <Input
        placeholder="name"
        my={2}
        value={search}
        onChange={(e) => setsearch(e.target.value)}
      ></Input>

      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>Color</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {listData.map((d, key) => (
              <Tr key={key}>
                <Td>{d.id}</Td>
                <Td>{d.name}</Td>
                <Td>{d.color}</Td>
                <Td>
                  <Button onClick={onOpen}>
                    <DeleteIcon />
                  </Button>

                  <AlertDialog
                    isOpen={isOpen}
                    leastDestructiveRef={cancelRef}
                    onClose={onClose}
                  >
                    {/* <AlertDialogOverlay> */}
                    <AlertDialogContent>
                      <AlertDialogHeader fontSize="lg" fontWeight="bold">
                        Delete Superhero
                      </AlertDialogHeader>

                      <AlertDialogBody>
                        Are you sure? You can't undo this action afterwards.
                      </AlertDialogBody>

                      <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                          Cancel
                        </Button>
                        <Button
                          colorScheme="red"
                          onClick={() => deleteHero(d.id)}
                          ml={3}
                        >
                          Delete
                        </Button>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                    {/* </AlertDialogOverlay> */}
                  </AlertDialog>
                </Td>
                <Td>
                  <Button onClick={() => handleEdit(d.id)}>
                    <EditIcon />
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      <form onSubmit={addData}>
        <Box
          display={"flex"}
          flexDir={"column"}
          gap={3}
          maxW={"480px"}
          margin={"auto"}
        >
          <Heading> Add Hero</Heading>
          <Input
            placeholder="name"
            id="name"
            value={inputHandler.name}
            onChange={handleChange}
          ></Input>
          <Input
            placeholder="color"
            id="color"
            value={inputHandler.color}
            onChange={handleChange}
          ></Input>
          <Button type="submit">Submit</Button>
        </Box>
      </form>
    </>
  );
}

export default App;
