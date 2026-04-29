import React from "react";
import Img1 from "../../../assets/instagram.png";
import Img2 from "../../../assets/facebook.png";
import Img3 from "../../../assets/twitter.png";

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white mt-20 py-6 px-6">
      <div className="max-w-6xl mx-auto">

       
        <div className="text-center space-y-3">
          <h2 className="text-6xl font-bold">KeenKeeper</h2>

          <p className="text-gray-200 max-w-3xl mx-auto text-sm md:text-base">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

          <h3 className="text-2xl font-semibold pt-4">Social Links</h3>

        
          <div className="flex justify-center gap-5 pt-2">
            <div className="bg-white rounded-full p-3 w-12 h-12 flex items-center justify-center hover:scale-110 duration-300 cursor-pointer">
              <img src={Img1} alt="Instagram" className="w-5 h-5" />
            </div>

            <div className="bg-white rounded-full p-3 w-12 h-12 flex items-center justify-center hover:scale-110 duration-300 cursor-pointer">
              <img src={Img2} alt="Facebook" className="w-5 h-5" />
            </div>

            <div className="bg-white rounded-full p-3 w-12 h-12 flex items-center justify-center hover:scale-110 duration-300 cursor-pointer">
              <img src={Img3} alt="Twitter" className="w-5 h-5" />
            </div>
          </div>
        </div>

        <div className="border-t border-[#2f6350] mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">

          <small>© 2026 KeenKeeper. All rights reserved.</small>

          <div className="flex gap-6">
            <small className="hover:text-white cursor-pointer">
              Privacy Policy
            </small>

            <small className="hover:text-white cursor-pointer">
              Terms of Service
            </small>

            <small className="hover:text-white cursor-pointer">
              Cookies
            </small>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;