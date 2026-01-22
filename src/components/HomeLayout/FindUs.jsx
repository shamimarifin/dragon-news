import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold">Find Us On</h2>
      <div className="mt-5">
        <div className="join join-vertical w-full">
          <button className="btn bg-base-100 join-item justify-start "><FaFacebook />Facebook</button>
          <button className="btn bg-base-100  join-item justify-start "><FaTwitter/> Twitter</button>
          <button className="btn bg-base-100 joint-item justify-start "> <FaInstagram/> Instagram</button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
