// src/User/Components/Home.js
import React from "react";
import NavBar from "./NavBar";
import "./Home.css";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <div className="home">
        <header className="header">
          <NavBar />
        </header>
        <main>
          <div class="about_section" id="about">
            <div class="about_content">
              <h2 id="about-p">About us</h2>
              <p id="para">Lost & Found Tracking Made Simple</p>
              <p id="para">
                We specialize in crafting personalized adventures that inspire
                and delight.
              </p>
              <p id="para">
                “Misplaced your items? No problem! Moringa Lost & Found lets you
                report and track lost items with ease.”
              </p>
              <p id="para">
                Whether you're seeking a relaxing beach getaway or an
                exhilarating mountain trek, we’re here to guide you every step
                of the way.
              </p>
            </div>

            <img
              src="https://img.freepik.com/free-photo/about-as-service-contact-information-concept_53876-138509.jpg"
              alt="Logo"
              className="form-video"
              id="imagebanner"
            />
          </div>
          <div class="about_section" id="about">
            <video id="imagebanner" autoPlay loop muted className="form-video">
              <source src="/travel.mp4" type="video/mp4" />
            </video>
            <div class="about_content">
              <h2 id="about-p">What We Do?</h2>
              <p id="para">Lost & Found Tracking Made Simple</p>
              <p id="para">
                At Moringa Lost and Found, we make it easier to reconnect with
                whats been lost.
              </p>
              <p id="para">
                Whether you have misplaced something important or found an item
                that needs to be returned, our community-driven platform helps
                you track it down.
              </p>
              <p id="para">
                We provide a simple, secure space to post lost and found items,
                search for belongings, assist others in returning what they have
                found, and offer rewards for those who help reunite lost items
                with their rightful owners.
              </p>
              <p id="para">
                Our mission is to make the process of reuniting lost items
                quick, stress-free, and rewarding, helping bring peace of mind
                to everyone involved.
              </p>
            </div>
          </div>

          <div className="about_section" id="about">
            <div className="user_content">
              <h2 id="about-p">User Guide Overview</h2>
              <div className="image-container">
                <img
                  className="image2"
                  src="https://www.lostfoundrewards.com/wp-content/uploads/2020/01/banner-lost-and-found-rewards-process-1280x500-1.jpg"
                  alt="image"
                />
                <img
                  className="image3"
                  src="https://www.lostfoundrewards.com/wp-content/uploads/2020/01/banner-lost-and-found-rewards-process-finder-1280x500-1.jpg"
                  alt="image"
                />
                <img
                  className="image4"
                  src="https://www.lostfoundrewards.com/wp-content/uploads/2020/01/banner-lost-and-found-rewards-about-us-1280x500-1.jpg"
                  alt="image"
                />
              </div>
            </div>
          </div>

          <div class="about_section" id="about">
            <div class="about_content">
              <h2 id="about-p">Why us?</h2>
              <p id="para">Lost & Found Tracking Made Simple</p>
              <p id="para">
                We simplify the process of recovering lost items by creating a
                secure, efficient, and transparent system for reporting,
                tracking, and returning belongings
              </p>

              <p id="para">
                With real-time updates, a user-friendly interface, and the
                ability to offer and receive rewards, we make sure lost items
                are reunited with their owners quickly and fairly.
              </p>
            </div>
            <video id="imagebanner" autoPlay loop muted className="form-video">
              <source src="/wallet.mp4" type="video/mp4" />
            </video>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Home;
