import React, { useState, useEffect } from "react"

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div>
      {isVisible && (
        <button onClick={scrollToTop} className="text-4xl fixed flex justify-center items-center leading-[0px] bottom-[30px] right-[30px] z-50 text-white bg-black bg-opacity-50 rounded-full border-none cursor-pointer p-2 h-[60px] w-[60px]">
          ↑
        </button>
      )}
    </div>
  )
}

export default ScrollToTopButton
