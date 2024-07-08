"use client"

import { useState } from "react"

export default function Page() {

    const [h3, setH3] = useState({ backgroundColor: "purple" })
    return (
        <div>
            <h1 style={{ backgroundColor: "green" }}>I am User</h1>
            <h2>Heading 2 in user page</h2>
            <h3 style={h3}>Heading 3 for style</h3>
            <button onClick={() => setH3({ backgroundColor: "black" })}>Update style</button>
        </div>
    )
}
