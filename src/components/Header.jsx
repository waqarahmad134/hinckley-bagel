import { useDisclosure } from "@chakra-ui/react"
import React, { useEffect, useRef, useState } from "react"
import { IoIosSearch, IoMdMenu } from "react-icons/io"
import { Link, useNavigate } from "react-router-dom"

import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react"
import { IoClose } from "react-icons/io5"
import axios from "axios"
import { imgURL, BASE_URL } from "../utilities/URL"
import ScrollToTopButton from "./ScrollToTopButton"

export default function Header({ categories, onLogoClick, homepage }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const [searchTerm, setSearchTerm] = useState("")
  const [suggestData, setSuggestData] = useState(null)
  const navigate = useNavigate()

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !inputRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  let debounceTimeout
  const handleSuggestion = async (e) => {
    const searchTerm = e.target.value
    setIsDropdownOpen(true)
    setSearchTerm(searchTerm)
    clearTimeout(debounceTimeout)
    debounceTimeout = setTimeout(async () => {
      try {
        const response = await axios.get(`${BASE_URL}suggestions/${searchTerm}`)
        setSuggestData(response?.data)
      } catch (error) {
        console.error("Error fetching movie suggestions:", error)
      }
    }, 500)
  }

  const handleSuggestionFunc = async (e, id) => {
    e.preventDefault()
    setSuggestData([])
    navigate(`/movie/${id}`)
    setIsDropdownOpen(false)
  }

  const handleSearch = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.get(`${BASE_URL}search`, {
        params: {
          title: searchTerm,
        },
      })
      const results = response.data.data
      localStorage.setItem("searchResults", JSON.stringify(results))

      const event = new Event("storageChange")
      window.dispatchEvent(event)
      navigate("/search")
    } catch (error) {
      console.error("Error searching movies:", error)
    }
  }

  let menu = [
    {
      id: 1,
      name: "home",
    },
    {
      id: 2,
      name: "prices",
    },
    {
      id: 3,
      name: "menu",
    },
    {
      id: 4,
      name: "about",
    },
    {
      id: 5,
      name: "contact",
    },
  ]

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <div className="p-2" ref={btnRef} onClick={onClose}>
              <IoClose size={32} />
            </div>
            <div className="text-black">
              <nav className="flex flex-col [&>a]:border-b-[1px] [&>nav>a]:border-white [&>a]:p-2">
                <Link to={"/"} className="relative">
                  Home
                </Link>
                {menu?.map((data) => (
                  <Link onClick={onClose} key={data?.id} to={`/${data?.name}`}>
                    {data?.name}
                  </Link>
                ))}
              </nav>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <ScrollToTopButton />

      <div className="fixed top-0 z-[50] text-black w-full bg-white bg-opacity-90 max-w-screen-2xl m-auto">
        <div className="flex justify-between items-center gap-2 py-4 px-10 m-auto">
          <Link className="text-2xl text-[#6f5243] font-semibold" to={"/"}>
            Hinckley Bagel
          </Link>
          <div className="header-menu">
            <nav className="flex flex-wrap items-center uppercase md:[&>a]:p-1 md:[&>div>a]:p-1 lg:[&>a]:p-2 lg:[&>div>a]:p-2">
              {menu?.map((data) => {
                return (
                  <div key={data.id} className="relative group">
                    <Link to={`/${data?.name}`} className="block text-lg">
                      {data?.name}
                    </Link>
                  </div>
                )
              })}
            </nav>
          </div>
          <div className="text-xl font-medium">
            <p>0141 611 3053</p>
          </div>
        </div>
      </div>

      {/* Mobile Menu  */}
      <div className="fixed sm:hidden top-0 z-[50] text-black w-full bg-white bg-opacity-90 max-w-screen-2xl m-auto">
        <div className="py-4 px-10 m-auto">
          <div className="md:hidden fixed" ref={btnRef} onClick={onOpen}>
            <IoMdMenu size={32} />
          </div>
          <div className="text-xl font-medium text-center">
            <p>0141 611 3053</p>
          </div>
          <div className="text-center my-3">
            <Link className="text-2xl text-[#6f5243] font-semibold" to={"/"}>
              Hinckley Bagel
            </Link>
          </div>
        </div>
        {isOpen ? (
          <div
            className="fixed md:hidden right-0 h-14 z-[9999] bg-[#303d70] flex items-center justify-center flex-col p-2"
            ref={btnRef}
            onClick={onClose}
          >
            <IoClose size={32} />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  )
}
