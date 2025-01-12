import React, { useState } from "react"
import DefaultLayout from "../Layout/DefaultLayout"
import { BASE_URL, imgURL } from "../utilities/URL"
import axios from "axios"
import { MdKeyboardArrowRight } from "react-icons/md"
import { Link, useNavigate } from "react-router-dom"
import Loader from "../components/Loader"
import { useQuery } from "@tanstack/react-query"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"

import {
  Autoplay,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules"

const fetchMovies = async (page) => {
  try {
    const response = await fetch(`${BASE_URL}movies?page=${page}`)
    if (!response.ok) {
      throw new Error(`Error fetching movies: ${response.statusText}`)
    }
    const data = await response.json()
    return data?.data
  } catch (error) {
    console.error("Error fetching movies:", error)
  }
}

export default function Home() {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1)
  const {
    data: moviesData,
    isLoading,
    isError,
    isSuccess,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["movies", currentPage],
    queryFn: () => fetchMovies(currentPage),
    staleTime: 30 * 60 * 1000,
    cacheTime: 60 * 60 * 1000,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })

  const resetPage = () => setCurrentPage(1)

  const coverData = ""

  if (isLoading) {
    return (
      <div className="loader-container">
        <Loader />
      </div>
    )
  }

  if (isError) {
    return (
      <div className="error-container">
        <p>Error: {error?.message}</p>
      </div>
    )
  }

  return (
    <DefaultLayout onLogoClick={resetPage} homepage={true}>
      <main className="relative">
        <div className="relative h-[400px] waqar">
          <div
            className="h-full fig"
            style={{
              backgroundImage: `url(https://img1.wsimg.com/isteam/ip/dcaf0790-2e31-40ed-a635-4e61984ff6cd/_DSC9620.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1535,m)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "50% 50%",
              minHeight: "400px",
            }}
          >
            <div className="h-full">Book Now</div>
          </div>
        </div>

        <div className=" bg-[url('https://img1.wsimg.com/isteam/ip/dcaf0790-2e31-40ed-a635-4e61984ff6cd/_DSC9559.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1535,m')] ">
          <h2>Reviews</h2>
          <div>
            <div>
              <img src="Google" alt="" />
              4.1
            </div>
            <div>
              Name <br /> Star Total reviews
            </div>
          </div>

          <div className="block py-10 w-4/5 m-auto">
            <Swiper
              slidesPerView={"3"}
              spaceBetween={30}
              loop={true}
              cssMode={true}
              navigation={true}
              pagination={false}
              mousewheel={true}
              keyboard={true}
              // autoplay={{
              //   delay: 1500,
              //   disableOnInteraction: false,
              // }}
              modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper"
            >
              {moviesData?.data?.map((item) => (
                <div key={item?.id}>
                  <SwiperSlide>
                    <Link className="block bg-white text-black border-0 p-1 sm:p-2 cursor-pointer">
                      <div className="h-[100px] w-[100px] max-h-[100px] m-auto my-2 rounded-md">
                        <img
                          loading="lazy"
                          src="https://lh3.googleusercontent.com/a/ACg8ocJH5EZ_QAYtAEdYm9XQrcmOwuH7SE-ZEYrSopP1wbn_xTk9bA=s120-c-rp-mo-br100"
                          alt="Reviewer Img"
                          className="w-full h-full rounded-md"
                        />
                      </div>
                    </Link>
                  </SwiperSlide>
                </div>
              ))}
            </Swiper>
          </div>
        </div>
      </main>
    </DefaultLayout>
  )
}
