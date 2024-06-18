"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()

  const navigate = (params) => {
    router.push(params)
  }

  return (
    <main >
      <h1>Routing Linking and Navigation</h1>
      <Link href="/login">Go to Login Page</Link>
      <br />
      <br />
      <Link href="/about">Go to About Page</Link>
      <br />
      <br />
      <button onClick={() => navigate("/login")}>Go to login page</button>
      <button onClick={() => navigate("/about")}>Go to about page</button>

    </main>
  );
}


