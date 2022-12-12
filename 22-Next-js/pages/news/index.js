import Link from "next/link";
function NewsIndex() {
  return (
    <div>
      news page index
      <ul>
        <li>
          <Link href="/news/next-js-is-great-framewoek">
            Next js is great Framework
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default NewsIndex;
