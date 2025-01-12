import React from "react"
import DefaultLayout from "../Layout/DefaultLayout"

export default function Menu() {
  return (
    <>
      <DefaultLayout>
        <main className="md:col-span-9 p-4 mt-32">
          <div className="text-center">
            <h1 className="text-2xl text-shadow font-semibold">
              Menu
            </h1>
            <div className="bg-[#f6f6f6] w-3/5 m-auto my-10">
              <p>Menu coming soon</p>
            </div>
          </div>
        </main>
      </DefaultLayout>
    </>
  )
}
