import Image from "next/image";
import logo from "../Assets/Logo.png";
import { CiFacebook } from "react-icons/ci";
import {
  AiOutlineYoutube,
  AiOutlineInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-gray-100">
      <footer className=" mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="mx-auto w-full p-4 py-6">
          <div className="grid sm:grid-cols-2 gap-16">
            {/* Logo and Text Side */}
            <div className="mb-6">
              <Image
                src={logo}
                className="h-20 w-20 my-5"
                alt="Green Hawker Footer Logo"
              />
              <p className="text-gray-600">
                In addition to our commitment to environmental sustainability,
                Green Hawker is excited to introduce a convenient and innovative
                digital marketing initiative. We now offer an online platform
                where residents of Dhanmondi Ward 52 can sell their paper and
                plastic waste directly to us. By embracing digital marketing, we
                aim to make the process of recycling and waste management even
                more accessible and efficient for the community. Join us online
                today and contribute to a greener future by turning your waste
                into valuable resources.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 sm:gap-2 md:mt-20">
              {/* Resources */}
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Resources
                </h2>
                <ul className="text-gray-600 space-y-3 font-medium">
                  <li>
                    <a href="/" className="hover:underline text-sm font-normal">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:underline text-sm font-normal">
                      Youtube
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:underline text-sm font-normal">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:underline text-sm font-normal">
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>

              {/* Follow us */}

              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900">
                  FOLLOW US
                </h2>
                <ul className="text-gray-600 space-y-3 font-medium">
                  <li>
                    <a href="/" className="hover:underline text-sm font-normal">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:underline text-sm font-normal">
                      Youtube
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:underline text-sm font-normal">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:underline text-sm font-normal">
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal */}

              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900">
                  LEGAL
                </h2>
                <ul className="text-gray-600font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline text-sm font-normal">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline text-sm font-normal">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
            <span className="text-sm text-gray-500">
              © 2023
              <a href="/" className="hover:underline">
                Green Hawker
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0 text-gray-500">
              <CiFacebook className="hover:text-gray-700 text-2xl cursor-pointer" />
              <AiOutlineYoutube className="hover:text-gray-700 text-2xl cursor-pointer" />
              <AiOutlineInstagram className="hover:text-gray-700 text-2xl cursor-pointer" />
              <AiFillTwitterCircle className="hover:text-gray-700 text-2xl cursor-pointer" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
