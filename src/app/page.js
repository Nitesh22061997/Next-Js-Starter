"use client"

import Link from "next/link";

export default function Home() {

  return (
    <main >
      <h1>Fetch Data with API in Client Component</h1>
      <Link href="/productlist">Go to Client API Fetching</Link>
      <br />
      <Link href="/productlist-server"> Go to Server API fetching</Link>
    </main>
  );
}


