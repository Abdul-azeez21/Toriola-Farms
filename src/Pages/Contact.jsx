import React from "react";
//components
import { Navbar } from "../components/Navbar";
//icons
import { FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi";

const Contact = () => {
  return (
    <div>
      <Navbar />
      {/* ... */}
      <div className="flex items-center justify-center mt-16 py-10 mx-10">
        <div>
          <h1 className="text-green-600 lg:text-2xl md:text-2xl text-lg text-center">
            Contact Us
          </h1>
          <p className="font-thin lg:text-xl md:text-xl text-base text-center py-2">
            Please contact us with the details below if you have any question or
            enquiry.
          </p>
          <hr className="border-green-600/25 my-3"></hr>
        </div>
      </div>
      {/* ... */}
      <div className="flex items-center justify-center bg-gradient-to-b from-green-800 to-green-700 p-10">
        <div className="mx-10">
          <div className="py-3">
            <h1 className="text-yellow-400 font-medium lg:text-2xl md:text-2xl text-lg text-center">
              Helpline
            </h1>
            <p className="text-white lg:text-xl md:text-xl text-base text-center py-2">
              Our phone will be on from 8:30am to 4pm, Mondays to Fridays.
            </p>
            <p className="text-white lg:text-xl md:text-xl text-base text-center">
              +234 706 178 7381
            </p>
          </div>
          <div className="py-3">
            <h1 className="text-yellow-400 font-medium lg:text-2xl md:text-2xl text-lg text-center">
              Email
            </h1>
            <p className="text-white lg:text-xl md:text-xl text-base text-center py-2">
              All official correspondence should be forwarded to
            </p>
            <p className="text-white lg:text-xl md:text-xl text-base text-center">
              info@toriolafarms.com
            </p>
          </div>
          <div className="py-3">
            <h1 className="text-yellow-400 font-medium lg:text-2xl md:text-2xl text-lg text-center">
              Connect with us
            </h1>
            <div className="flex justify-center py-3">
              <a
                href="https://www.facebook.com/profile.php?id=100067911163393"
                className="mx-3"
              >
                <FiFacebook className="text-white h-5 w-5" />
              </a>
              <a
                href="https://mobile.twitter.com/ToriolaFarms"
                className="mx-3"
              >
                <FiTwitter className="text-white h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/toriola-farms"
                className="mx-3"
              >
                <FiLinkedin className="text-white h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* ... */}
      <div className="flex items-center justify-center my-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 gap-x-20 gap-y-10 lg:mx-10 md:mx-10 mx-5">
          <div className="flex items-center justify-center mx-5">
            <div>
              <h1 className="text-green-600 font-medium lg:text-xl md:text-xl text-base text-center py-1">
                Find us at
              </h1>
              <div className="py-2">
                <h1 className="font-medium lg:text-2xl md:text-2xl text-lg text-center">
                  Ashipa Office
                </h1>
                <p className="font-light lg:text-xl md:text-xl text-base text-center">
                  Odedeyi-Asero, Ashipa, Obafemi Owode, Abeokuta, Ogun state,
                  Nigeria.
                </p>
              </div>
              <div className="py-2">
                <h1 className="font-medium lg:text-2xl md:text-2xl text-lg text-center">
                  Berger Office
                </h1>
                <p className="font-light lg:text-xl md:text-xl text-base text-center">
                  Ogun-River Close Isheri-Oke, off Wilmer Road, Ojodu-Berger,
                  Lagos state, Nigeria.
                </p>
              </div>
              <div className="py-2">
                <h1 className="font-medium lg:text-2xl md:text-2xl text-lg text-center">
                  Ikorodu Office
                </h1>
                <p className="font-light lg:text-xl md:text-xl text-base text-center">
                  Plot 46, Odogunyan fish farm estate, Ikorodu, Lagos state,
                  Nigeria.
                </p>
              </div>
            </div>
          </div>
          <div className=" mx-5">
            <div className="rounded-lg shadow-lg p-3">
              <h1 className="text-center text-green-600 font-medium lg:text-xl md:text-xl text-base">
                Contact/Enquiry Form
              </h1>
              <form>
                <div className="mx-3 my-3">
                  <input
                    className="appearance-none rounded-sm w-full my-3 px-3 py-2 border border-green-600/50 placeholder-gray-400 placeholder:text-xs text-gray-900 focus:outline-none focus:border-green-600 text-base"
                    placeholder="Email address"
                    type="email"
                    name="email"
                    id="email"
                  />
                  <input
                    className="appearance-none rounded-sm w-full my-3 px-3 py-2 border border-green-600/50 placeholder-gray-400 placeholder:text-xs text-gray-900 focus:outline-none focus:border-green-600 text-base"
                    placeholder="Full name"
                    type="text"
                    name="name"
                    id="name"
                  />
                  <input
                    className="appearance-none rounded-sm w-full my-3 px-3 py-2 border border-green-600/50 placeholder-gray-400 placeholder:text-xs text-gray-900 focus:outline-none focus:border-green-600 text-base"
                    placeholder="Phone number"
                    type="tel"
                    name="phonenumber"
                    id="phonenumber"
                  />
                  <div>
                    <label for="help" className="text-base text-gray-800">
                      How can we help you?
                    </label>
                    <select
                      class="rounded-sm w-full my-1 px-3 py-2 border border-green-600/50  text-gray-700 focus:outline-none focus:border-green-600 text-sm"
                      name="help"
                      id="help"
                    >
                      {" "}
                      <option>Feedback</option>
                      <option value="suggestion">Suggestion</option>
                      <option value="enquiry">Enquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <textarea
                    class="appearance-none rounded-sm w-full my-3 px-3 py-2 border border-green-600/50 placeholder-gray-400 placeholder:text-xs text-gray-900 focus:outline-none focus:border-green-600 text-base"
                    name="message"
                    id="message"
                    rows="3"
                    placeholder="Enter a message"
                  ></textarea>
                </div>
                <div className="flex items-center justify-center">
                  <button className="text-white bg-green-600 hover:bg-green-800 text-sm px-10 py-2 rounded-sm">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
