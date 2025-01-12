import React from "react"

export default function Loader() {
  return (
    <>
      <div className="loader">
        <div className="">
          <img loading="lazy" className="h-40 sm:h-60" src="/logo.png" alt="" />
        </div>
      </div>
    </>
  )
}
