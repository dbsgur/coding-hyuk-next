// mydomain.com/news/...
import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  const newsId = router.query.newsId;

  console.log(`newsId : ${newsId}`)
  console.log(`router.query : ${JSON.stringify(router.query.newsId)}`)
  console.log(`${router.query.slug}`)

  return <h1>Detail Page</h1>;
}
