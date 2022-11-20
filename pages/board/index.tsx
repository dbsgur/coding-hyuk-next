import RouterBtn from "../../component/routerButton";
import Link from "next/link";
import { boards, BoardStruct } from "../../data/boardData";
import { useState, useEffect } from "react";

function Board() {
  // Error: Hydration failed because the initial UI does not match what was rendered on the server.

  return (
    <div>
      <table border={2}>
        <thead>
          <th>ID</th>
          <th>TITLE</th>
          <th>Content</th>
        </thead>
        <tbody>
          <div>
            {!boards ? (
              <td>데이터가 없어용</td>
            ) : (
              boards.map((board: BoardStruct) => (
                <tr key={board.id}>
                  {/* router.push로 변경 */}
                  <Link
                    href={`/board/${board.id}_${board.title}_${board.content}`}
                  >
                    <td>{board.id}</td>
                    <td>{board.title}</td>
                    <td>{board.content}</td>
                  </Link>
                </tr>
              ))
            )}
          </div>
        </tbody>
      </table>
      <RouterBtn title="CREATE" url="/board/create" />
    </div>
  );
}

export default Board;
