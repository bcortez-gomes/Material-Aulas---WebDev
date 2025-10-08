import React from 'react'

export default function Section({titulo, children}) {
  return (
        <section className="max-w-[100vw]  h-auto">
            <h1>{titulo}</h1>
            <div className="p-6 flex flex-wrap gap-10">
              {children}
              </div>
        </section>
  )
}
