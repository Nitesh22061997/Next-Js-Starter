'use client'
import React from 'react'

function Lecture({ params }) {
    console.log(params);
    return (

        <div>
            <h1>Day of College {params.lecture[0]}</h1>
            <h1>Lecture number {params.lecture[1]}</h1>
        </div>

    )
}

export default Lecture