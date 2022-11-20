import React, { Fragment } from "react";
import { useRouter } from "next/router";

let id: String;
let title: string;
let content: string;

function Detail() {
  const router = useRouter();

  if (router.query.boardId !== undefined) {
    console.log("typeof : ", typeof router.query.boardId);
    console.log("string type: ", typeof String(router.query.boardId));
    console.log(String(router.query.boardId).split("_"));
    const tmpArr: string[] = String(router.query.boardId).split("_");
    // router.query.boardId의 타입이 string || string[]이기 때문에
    // string[]의 경우 split을 지원안해줌 그래서 error 발생
    if (typeof router.query.boardId === "string")
      console.log(router.query.boardId.split("_"));
    [id, title, content] = tmpArr;
  }

  return (
    <Fragment>
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
    </Fragment>
  );
}

export default Detail;
