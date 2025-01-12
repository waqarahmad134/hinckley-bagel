import React from "react"
import DefaultLayout from "../Layout/DefaultLayout"
import { BASE_URL } from "../utilities/URL"
import { Link } from "react-router-dom"
import Loader from "../components/Loader"
import { useQuery } from "@tanstack/react-query"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { FaStar } from "react-icons/fa6"
import { FaFacebook } from "react-icons/fa6"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"

import {
  Autoplay,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules"
import MapboxMap from "../components/MapboxMap"
import GoogleSVG from "../components/GoogleSVG"

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
  const {
    data: moviesData,
    isLoading,
    isError,
    isSuccess,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["movies"],
    queryFn: () => fetchMovies(),
    staleTime: 30 * 60 * 1000,
    cacheTime: 60 * 60 * 1000,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })

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
    <DefaultLayout>
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

        {/* Second Section  */}
        <div className="py-10 bg-[url('https://img1.wsimg.com/isteam/ip/dcaf0790-2e31-40ed-a635-4e61984ff6cd/_DSC9559.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1535,m')]  relative z-10 before:absolute before:h-full before:w-full before:content-[''] before:bg-black before:bg-opacity-40 before:top-0 before:z-0">
          <div className="text-center relative z-20">
            <h2 className="text-white text-3xl font-semibold mb-12">Reviews</h2>
            <div className="flex justify-center gap-4 text-white">
              <div className="flex items-center justify-center gap-4">
                <div className="flex justify-center">
                  <GoogleSVG size={48} />
                </div>
                <h2 className="text-2xl font-semibold">4.1</h2>
              </div>
              <div className="text-start space-y-1">
                <p>Hinckley Bagel</p>
                <p className="flex gap-1">
                  <FaStar color="yellow" />
                  <FaStar color="yellow" />
                  <FaStar color="yellow" />
                  <FaStar color="yellow" />
                  <FaStar />
                </p>
                <p>813 Reviews</p>
              </div>
            </div>
          </div>

          <div className="block pb-10 w-4/5 m-auto">
            <Swiper
              slidesPerView={"3"}
              spaceBetween={30}
              loop={true}
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              // autoplay={{
              //   delay: 1500,
              //   disableOnInteraction: false,
              // }}
              modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper py-[80px] px-[100px]"
            >
              {moviesData?.data?.map((item, index) => (
                <SwiperSlide key={`review-card-${index}`}>
                  <Link className="block bg-white text-black border-0 p-1 sm:p-5 cursor-pointer">
                    <div className="my-2 rounded-md">
                      <div className="h-[100px] w-[100px] text-center m-auto">
                        <img
                          loading="lazy"
                          src="https://lh3.googleusercontent.com/a/ACg8ocJH5EZ_QAYtAEdYm9XQrcmOwuH7SE-ZEYrSopP1wbn_xTk9bA=s120-c-rp-mo-br100"
                          alt="Reviewer Img"
                          className="object-cover w-full h-full rounded-md"
                        />
                      </div>

                      <div className="flex justify-center gap-1 my-5">
                        <FaStar color="yellow" />
                        <FaStar color="yellow" />
                        <FaStar color="yellow" />
                        <FaStar color="yellow" />
                        <FaStar color="yellow" />
                      </div>
                      <h4>
                        "I was very disappointed today going to yamm with my
                        daughter...
                      </h4>
                      <p className="text-[#6f5243] flex items-center justify-center my-3">
                        Read fill review{" "}
                        <MdOutlineKeyboardArrowRight size={22} />
                      </p>
                      <div className="flex justify-center items-center gap-3">
                        <GoogleSVG size={32} />
                        <div className="flex ">
                          <p className="text-xs font-semibold text-[#595959]">
                            Jenny Beattie
                          </p>
                          <p className="text-xs text-[#595959]">- 21/12/2024</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Social Section  */}
        <div className="py-10 w-4/5 m-auto">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-6 text-shadow">Reviews</h2>
            <div className="flex justify-center">
              <a href="https://www.facebook.com">
                <FaFacebook size={32} color={"#1877f2"} />
              </a>
            </div>
            <div className="grid grid-cols-2 my-10 gap-5">
              <div>
                <img
                  src="https://img1.wsimg.com/isteam/ip/dcaf0790-2e31-40ed-a635-4e61984ff6cd/_DSC9800.jpg/:/rs=w:1160/qt=q:23"
                  alt=""
                />
              </div>
              <div className="text-start">
                <div className="flex flex-col justify-end h-full p-10">
                  <h3 className="text-3xl">Gift Vouchers</h3>
                  <p>
                    Send a gift voucher to friends and family or buy it now for
                    your future use.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <MapboxMap />
    </DefaultLayout>
  )
}
