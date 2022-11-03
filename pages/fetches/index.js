import Link from "next/link";

export default function Fetches() {
  return (
    <ul>
      <li>
        <Link href="/fetches/ssr">ssr</Link>
      </li>
      <li>
        <Link href="/fetches/csr">csr</Link>
      </li>
      <li>
        <Link href="/fetches/ssg">ssg</Link>
      </li>
      <li>
        <Link href="/fetches/isg">isg</Link>
      </li>
    </ul>
  );
}
