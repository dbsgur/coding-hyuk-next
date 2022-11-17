import { Fragment } from 'react'
import Link from "next/link";

export default function News() {
  return (
  <Fragment>
    <h1>The News Page</h1>
    <ul>
      <li><Link href="/news/hyeok" >Coding Hyeok ... </Link></li>
      <li>10심히 코딩중</li>
      </ul>
  </Fragment>
  )
}
