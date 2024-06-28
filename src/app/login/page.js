"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Login() {
    const router = useRouter()

    const navigate = (params) => {
        router.push("/login/" + params)
    }

    return (
        <div>
            <h1 className='heading'>Login Page</h1>
            <Link href="/">Go to homepage</Link>
            <br />
            <button onClick={() => navigate("loginstudent")}>Go to Student Login Page</button>
            <br />
            <button onClick={() => navigate("loginteacher")}>Go to Teacher Login Page</button>
            <br />
        </div>
    )
}
