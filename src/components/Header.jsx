import React from "react"
import { Link } from "react-router-dom"
import { IoMdMenu } from "react-icons/io"
import { IoClose } from "react-icons/io5"
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react"
import { useDisclosure } from "@chakra-ui/react"
import ScrollToTopButton from "./ScrollToTopButton"

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  let menu = [
    {
      id: 1,
      name: "home",
      url: "/",
    },
    {
      id: 2,
      name: "prices",
      url: "/prices",
    },
    {
      id: 3,
      name: "menu",
      url: "/menu",
    },
    {
      id: 4,
      name: "about us",
      url: "/about",
    },
    {
      id: 5,
      name: "contact",
      url: "/contact",
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
                {menu?.map((data, index) => (
                  <Link
                    onClick={onClose}
                    key={`menu-item-${index}`}
                    to={`${data?.url}`}
                  >
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
                  <div className="relative group">
                    <Link to={`${data?.url}`} className="block text-lg">
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
