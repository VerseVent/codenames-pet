import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      {/* <Link href="/cards">Cards</Link> */}
      <Link prefetch={false} href="/rooms">
        Rooms
      </Link>
    </div>
  );
}
