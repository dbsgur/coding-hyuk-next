export class NavStruct {
  url?: string;
  title?: string;
}

export const navs: NavStruct[] = [
  { url: "/sign/in", title: "SIGNUP" },
  { url: "/sign/up", title: "SIGNIN" },
  { url: "/board", title: "BOARD" },
];

export default { navs, NavStruct };
