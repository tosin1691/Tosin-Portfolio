import React from "react";
import ContactImage from "../assets/images/contact-img.png"
import '../index.css'

const Contact = () => {
  return (
    <div name='contact' className="pl-24 md:pl-40 pr-6 md:flex bg-gray-800">
      <div className="md:w-1/2 mx-auto pt-20 md:pt-80">
        <p className="text-4xl sm:text-6xl md:text-6xl pb-4 text-right sectionHeader text-slate-50 md:invisible">Contact<span>.</span></p>
        <img src={ContactImage} className="mx-auto" />
      </div>
      <div
        className="w-full md:h-screen bg-[white] flex justify-center items-center p-4 bg-gray-800"
      >
        <form
          method="POST"
          action="https://getform.io/f/pbqxrwoa"
          enctype="multipart/form-data"
          className="flex flex-col max-w-[600px] w-full"
        >
          <div className="md:pb-8">
            <p className="hidden md:block md:text-5xl lg:text-6xl pb-4 text-right sectionHeader text-slate-50">
              Let's Connect<span>.</span>
            </p>
          </div>
          <div className="md:pl-12">
            <div>
              <input
                  className="bg-[#ccd6f6] p-3 m-1 w-full md:w-2/5 rounded-xl"
                  type="text"
                  placeholder="First Name"
                  name="name"
              />
              <input
                  className="bg-[#ccd6f6] p-3 m-1 w-full md:w-2/5 rounded-xl"
                  type="text"
                  placeholder="Last Name"
                  name="name"
              />
            </div>  
            <div>
              <input
                className="bg-[#ccd6f6] p-3 m-1 w-full md:w-2/5 rounded-xl"
                type="email"
                placeholder="Email"
                name="email"
              />
              <input
                className="bg-[#ccd6f6] p-3 m-1 w-full md:w-2/5 rounded-xl"
                type="tel"
                placeholder="Phone No. (optional)"
                name="phone"
              />
            </div>
            <textarea
            className="bg-[#ccd6f6] p-3 my-2 rounded-xl w-full md:w-10/12 h-40"
            placeholder="Enter your message here..."
            name="message"
            rows="10">
            </textarea>
          </div>
          <button className="border-solid border-2 border-sky-950 rounded-xl w-1/5 mx-auto mt-2 contact-btn">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
