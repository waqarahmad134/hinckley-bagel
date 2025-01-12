import React from "react"
import DefaultLayout from "../Layout/DefaultLayout"

export default function About() {
  return (
    <>
      <DefaultLayout>
        <main className="w-11/12 m-auto mt-32 about-us">
          <h1 className="text-center text-3xl text-shadow font-semibold">
            About Us
          </h1>
          <h2>Our Story</h2>
          <p>
            Welcome to our restaurant, where food, passion, and community come
            together. Our story began with a simple idea: to share delicious,
            homemade-style cuisine with our neighbors and friends.
          </p>
          <h2>Our Vision</h2>
          <p>
            We aim to create a warm and inviting space where everyone feels at
            home. Our chefs are dedicated to crafting dishes that not only taste
            amazing but also use only the freshest ingredients, sourced locally
            whenever possible.
          </p>
          <h2>Our Team</h2>
          <p>
            Meet our talented team of chefs, servers, and managers who work
            together to bring you an exceptional dining experience.
          </p>
          <h2>Our Values</h2>
          <p>
            - Quality: We're committed to serving only the best. - Community: We
            believe in supporting local businesses and events. - Hospitality: We
            strive to make every guest feel welcome and valued.
          </p>
          <h2>Our History</h2>
          <p>
            From our humble beginnings to our current location, learn about our
            journey and how we've grown.
          </p>
          <h2>Awards and Recognition</h2>
          <p>
            We're proud to have received [awards or recognition] for our efforts
            in providing excellent food and service.
          </p>
          <h2>Get in Touch</h2>
          <p>
            Contact us to learn more about our story, or to share your own
            experience with us!
          </p>
        </main>
      </DefaultLayout>
    </>
  )
}
