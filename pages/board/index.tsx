import RouterBtn from "../../component/routerButton";
import { Fragment } from "react";
import Link from "next/link";

type Board = { id: number; title: string; content: string };

const boards: Board[] = [
  { id: 1, title: "CODING", content: "혁이는 코딩중" },
  { id: 2, title: "PLAYING", content: "현석이도 노는중" },
  { id: 3, title: "CODING", content: "건희형도 코딩중" },
  { id: 4, title: "CODING", content: "동규도 코딩중" },
  { id: 5, title: "CODING", content: "원영이도 코딩중" },
  { id: 6, title: "PLAYING", content: "딸기는 노는중" },
  { id: 7, title: "FUCK", content: "YOU~~~~~~" },
];

function Board() {
  return (
    <Fragment>
      <table border={2}>
        <th>ID</th>
        <th>TITLE</th>
        <th>Content</th>
        {!boards ? (
          <h1>데이터가 없어용</h1>
        ) : (
          boards.map((board: Board) => (
            <tr key={board.id}>
              {/* router.push로 변경 */}
              <Link href={`/board/${board.id}_${board.title}_${board.content}`}>
                <td>{board.id}</td>
                <td>{board.title}</td>
                <td>{board.content}</td>
              </Link>
            </tr>
          ))
        )}
      </table>

      <RouterBtn title="CREATE" url="/board/create" />
    </Fragment>
  );
}

export default Board;
