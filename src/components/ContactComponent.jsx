import React from "react";

const ContactComponent = () => {
  return (
    <div name='contact' className="w-full bg-gradient-to-b from-black to-gray-800 p-4 text-white py-[5rem]">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center p-4">
        <div>
          <p className="text-center underline font-bold lg:text-4xl text-3xl py-2">Contact</p>
          <p className="text-center lg:text-2xl text-xl py-2">Submit the form below to get in touch with me</p>
        </div>

        <div className="pb-8 flex justify-center py-5">
          <form action="https://getform.io/f/dfa1379d-924d-4ee7-9fef-7cb841ee84f1" method="POST" className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent mb-4 rounded-md border-2 text-white
                    focus:outline-none
                    "
            />
             <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-2 bg-transparent mb-4 rounded-md border-2 text-white
                    focus:outline-none
                    "
            />
            <textarea name="message" id="message" placeholder="Enter message right here" rows="10"
            className="p-2 bg-transparent rounded-md border-2 text-white
            focus:outline-none
            "
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue px-6 py-3 my-8 mx-auto 
            flex flex-col items-center rounded-md hover:scale-110 duration-300
            ">Lets's Talk</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
