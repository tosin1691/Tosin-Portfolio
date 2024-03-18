import React from "react";

const Contact = () => {
  return (
    <div
      name='contact'
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/pbqxrwoa"
        enctype="multipart/form-data"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-red-500 text-gray-300">
            Let's Connect 
          </p>
        </div>
        <div>
          <div>
            <input
                className="bg-[#ccd6f6] p-2"
                type="text"
                placeholder="First Name"
                name="name"
            />
            <input
                className="bg-[#ccd6f6] p-2"
                type="text"
                placeholder="Last Name"
                name="name"
            />
          </div>  
          <div>
            <input
              className="bg-[#ccd6f6] my-4 p-2"
              type="email"
              placeholder="Email"
              name="email"
            />
            <input
              className="bg-[#ccd6f6] my-4 p-2"
              type="tel"
              placeholder="Phone No. (optional)"
              name="phone"
            />
          </div>
        </div>
        <textarea
          className="bg-[#ccd6f6] my-4 p-2"
          placeholder="Enter your message here..."
          name="message"
          rows="10"
        >
          {" "}
        </textarea>
        <button>
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
