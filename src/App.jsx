import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom"
import React, { Suspense, lazy, useEffect } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import ErrorPage from "./errors/error-page"
import { ToastContainer } from "react-toastify"
import { ChakraProvider } from "@chakra-ui/react"
import { HelmetProvider } from "react-helmet-async"
import Loader from "./components/Loader"
const queryClient = new QueryClient()

import Home from "./pages/Home"
const About = lazy(() => import("./pages/About"))

const CanonicalLinkUpdater = () => {
  const location = useLocation()
  useEffect(() => {
    const canonicalLink = document.querySelector("link[rel='canonical']")
    if (canonicalLink) {
      canonicalLink.href = window.location.href
    } else {
      const newLink = document.createElement("link")
      newLink.rel = "canonical"
      newLink.href = window.location.href
      document.head.appendChild(newLink)
    }
  }, [location])

  return null
}

function App() {
  return (
    <div>
      <ToastContainer />
      <HelmetProvider>
        <ChakraProvider>
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <CanonicalLinkUpdater />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/about"
                  element={
                    <Suspense
                      fallback={
                        <div className="loader-container">
                          <Loader />
                        </div>
                      }
                    >
                      <About />
                    </Suspense>
                  }
                />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </BrowserRouter>
          </QueryClientProvider>
        </ChakraProvider>
      </HelmetProvider>
    </div>
  )
}

export default App
