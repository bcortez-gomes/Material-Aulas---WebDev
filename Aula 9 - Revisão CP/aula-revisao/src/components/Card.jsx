import React from 'react'

export default function Card({title, description}) {
  return (
    <div className="p-6 flex-3 border-2 min-w-[200px]">
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
  )
}
