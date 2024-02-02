import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col">
      <h1> Welcome This Web Created by <strong>Gid Achmad AF</strong> to learn next.js</h1>
      <p>
        here is the list of the page that i have created
      </p>
      <ul className="list-disc list-inside">
        <li>
          <Link href="/todo">Todo</Link>
        </li>
      </ul>
    </main>
  );
}
