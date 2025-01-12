import React from "react"
import { Link } from "react-router-dom"

export default function Footer() {
  const homeUrl = window.location.href
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
      name: "contact us",
      url: "/contact",
    },
  ]
  return (
    <>
      <footer className="bg-[#6f5243] text-white rounded-lg shadow dark:bg-gray-900 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="grid sm:grid-cols-3 gap-10">
            <div className="space-y-3">
              <a
                href={homeUrl}
                className="text-2xl mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
              >
                Hinckley Bagel
              </a>
              <p className="text-sm">Fast Food Restaurant</p>
              <p className="text-sm">
                Address : Priestpopple, Hexham, Northumberland, NE46 1PH
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Opening hours</h4>
              <p className="text-xs ">Monday : 1:00 PM to 11:00 PM</p>
              <p className="text-xs ">Tuesday : 1:00 PM to 11:00 PM</p>
              <p className="text-xs ">Wednesday : 1:00 PM to 11:00 PM</p>
              <p className="text-xs ">Thursday : 1:00 PM to 11:00 PM</p>
              <p className="text-xs ">Friday : 1:00 PM to 11:00 PM</p>
              <p className="text-xs ">Saturday : 1:00 PM to 11:00 PM</p>
              <p className="text-xs ">Sunday : 1:00 PM to 11:00 PM</p>
            </div>
            <div>
              <h4 className=" text-lg font-semibold mb-4">Pages</h4>
              <div className="grid grid-cols-2">
                {menu?.map((data, index) => (
                  <Link
                    className="capitalize block text-sm"
                    key={`footer-item-${index}`}
                    to={`${data?.url}`}
                  >
                    {data?.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm  sm:text-center dark:text-gray-400">
            © 2025
            <a href={homeUrl} className="hover:underline">
              {" "}
              Hinckley Bagel{" "}
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  )
}
