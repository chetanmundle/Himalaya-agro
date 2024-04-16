import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdLocationPin, MdMarkEmailUnread } from "react-icons/md";
const Getintouch = () => {
  return (
    <section className="touch">
      <div  class="touch-m">
        <div class="max-w-6xl mx-auto bg-purple rounded-lg  flex flex-col">
          <div class="grid md-grid-cols-2 items-center gap-16 sm-p-10 p-4 font-sans-serif">
            <div>
              <h1 class="text-4xl font-extrabold text-white">Get in Touch</h1>
              <p class="text-sm text-gray-400 mt-3">
                Have some big idea or brand to develop and need help? Then reach
                out we'd love to hear about your project and provide help.
              </p>
              <ul class="mt-12 space-y-8">
                <li class="flex items-center">
                  <MdMarkEmailUnread width="16px" height="16px" fill="#fff" />
                  <a href="javascript:void(0)" class="text-white text-sm ml-3">
                    <strong>info@example.com</strong>
                  </a>
                </li>
                <li class="flex items-center">
                  <FaPhone width="16px" height="16px" fill="#fff" />
                  <a href="javascript:void(0)" class="text-white text-sm ml-3">
                    <strong>+123 456 7890</strong>
                  </a>
                </li>

                <li class="flex items-center">
                  <MdLocationPin width="16px" height="16px" fill="#fff" />
                  <a href="javascript:void(0)" class="text-white text-sm ml-3">
                    <strong>123 Street 256 House</strong>
                  </a>
                </li>
              </ul>
            </div>
            <div class="container">
              <div class="heading">Contact Us</div>
              <form action="" class="form">
                <input
                  required=""
                  class="input"
                  type="text"
                  name="Name"
                  id="email"
                  placeholder="Name"
                />
                <input
                  required=""
                  class="input"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="E-mail"
                />
                <input
                  required=""
                  class="input"
                  type="text"
                  name="password"
                  id="password"
                  placeholder="Message"
                />

                <input class="login-button" type="submit" value="Submit " />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Getintouch;
