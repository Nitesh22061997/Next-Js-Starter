"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function About() {
    const router = useRouter()
    return (
        <div>
            <h1>About Page</h1>
            <button onClick={() => router.push("/")}>Go to home page</button>
            <br />
            <Link href="/about/aboutstudent">About Student Page</Link>
            <br />
            <Link href="/about/aboutcollege">About College Page</Link>
        </div>
    )
}
