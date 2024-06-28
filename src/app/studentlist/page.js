import Link from 'next/link'
import React from 'react'

function StudentList() {
    return (
        <div>
            <h1>StudentList</h1>
            <ul>
                <li>
                    <Link href="/studentlist/anil">Anil</Link>
                </li>
                <li>
                    <Link href="/studentlist/sam">Sam</Link>
                </li>
                <li>
                    <Link href="/studentlist/peter">Peter</Link>
                </li>
                <li>
                    <Link href="/studentlist/golu">Golu</Link>
                </li>
            </ul>
        </div>

    )
}

export default StudentList