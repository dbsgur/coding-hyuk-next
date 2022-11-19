import React from "react";
import { useRouter } from "next/router";

function Detail() {
  const router = useRouter();

  let id: String;
  let title: string;
  let content: string;

  if (router.query.boardId !== undefined) {
    console.log(typeof router.query.boardId);
    console.log(typeof String(router.query.boardId));
    console.log(String(router.query.boardId).split("_"));
    const tmpArr: string[] = String(router.query.boardId).split("_");
    [id, title, content] = tmpArr;
  }

  // const [id:numbers; title:string; content: string;] = router.query?.boardId.split('_');
  // return <h1>{router.query?.boardId}</h1>;
  return (
    <>
      {id && title && content ? (
        <>
          <h1>
            {id} : {title}
            ID Exists
          </h1>
          <h3>{content}</h3>
        </>
      ) : (
        <h1>No data</h1>
      )}
    </>
  );
}

export default Detail;
