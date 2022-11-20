import RouterBtn from "component/RouterBtn";
import Link from "next/link";
import { boards, BoardStruct } from "data/boardData";

function Board() {
  // Error: Hydration failed because the initial UI does not match what was rendered on the server.

  return (
    <div>
      <ul>
        {!boards ? (
          <span>데이터가 없음</span>
        ) : (
          boards.map((board: BoardStruct) => (
            <li>
              <Link href={`/board/${board.id}_${board.title}_${board.content}`}>
                {board.title}
              </Link>
            </li>
          ))
        )}
      </ul>
      <RouterBtn title="CREATE" url="/board/create" />
    </div>
  );
}

export default Board;
