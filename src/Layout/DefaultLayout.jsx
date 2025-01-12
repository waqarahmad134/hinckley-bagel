import React, { useEffect } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useLocation } from "react-router-dom"

const DefaultLayout = React.memo(({ children }) => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location?.pathname])

  return (
    <>
      <Header />
      <div className="relative top-0">{children}</div>
      <Footer />
    </>
  )
})

export default DefaultLayout
