import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
export default function SocialMediaFunction() {
  return (
    <div className="w-full p-6 bg-colorNine">
      <div className="flex justify-center items-center ">
        <div className="flex justify-center w-full space-x-7">
          <a
            href="http://pwc.to/PwCTwG"
            target="_self"
            title="Twitter Follow"
            className="socialfollow-Twitter Follow"
          >
            <FaInstagram fontSize={"1.5rem"} />
          </a>

          <a
            href="https://www.facebook.com/PwC"
            target="_self"
            title="Facebook Follow"
            className="socialfollow-Facebook Follow"
          >
            <FaFacebookSquare fontSize={"1.5rem"} />
          </a>

          <a
            href="http://pwc.to/PwCLICo"
            target="_self"
            title="LinkedIn Follow"
            className="socialfollow-Linkedin Follow "
          >
            <FaLinkedinIn fontSize={"1.5rem"} />
          </a>
        </div>
      </div>
    </div>
  );
}
