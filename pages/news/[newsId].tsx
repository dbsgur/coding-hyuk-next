// mydomain.com/news/...
import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  return <h1>Detail Page</h1>;
}
