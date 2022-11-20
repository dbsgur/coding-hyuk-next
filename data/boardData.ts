// type Board = { id: number; title: string; content: string };
export class BoardStruct {
  id?: number;
  title?: string;
  content?: string;
}

export const boards: BoardStruct[] = [
  { id: 1, title: "CODING", content: "혁이는 코딩중" },
  { id: 2, title: "PLAYING", content: "현석이도 노는중" },
  { id: 3, title: "CODING", content: "건희형도 코딩중" },
  { id: 4, title: "CODING", content: "동규도 코딩중" },
  { id: 5, title: "CODING", content: "원영이도 코딩중" },
  { id: 6, title: "PLAYING", content: "딸기는 노는중" },
  { id: 7, title: "FUCK", content: "YOU~~~~~~" },
];

export default { boards, BoardStruct };
