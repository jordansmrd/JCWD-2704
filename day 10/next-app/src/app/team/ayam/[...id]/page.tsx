/** @format */

import { Metadata } from "next";
import React from "react";

export const generateMetadata = async ({
  params,
}: {
  params: {
    id: string;
  };
}): Promise<Metadata> => {
  const result = await fetch("http://localhost:2000/teams/" + params.id);
  const data: IStudent = await result.json();
  return {
    title: data.name,
  };
};

// search google => crawler => website
// apabila website menggunakan csr => csr render pada saat diload
// ssr => crawler dapat menggali informasi title dan description dari web

// export const metadata: Metadata = {
//   title: "ini title",
//   description: "ini description",
// };

type Props = {
  params: {
    id: string;
  };
};

// fetching => promise => async
interface IStudent {
  id: number;
  name: string;
}

export default async function page({ params }: Props) {
  const result = await fetch("http://localhost:2000/teams/" + params.id);
  //   const data: IStudent[] = await result.json();
  const data: IStudent = await result.json();

  return (
    <div>
      {params.id}
      <div className=" p-2 ">
        {/* {data.map((student, key) => (
          <h1 key={key}> {student.name}</h1>
        ))} */}
        <h1> {data.name}</h1>
      </div>
    </div>
  );
}
