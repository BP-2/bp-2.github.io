import { useState } from "react";
import "./ContactCard.css";



const submit_data = () =>{

}



function ContactCard() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <div className="content-stuff">
      <label
          htmlFor="title"
          className="block ml-5 mb-4 mt-2 text-lg font-medium leading-6 text-gray-900"
        >
          <b>Lets work together!</b>
        </label>
        <label
          htmlFor="name"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Name
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
          <input
            type="text"
            name="name"
            id="name"
            className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="John Doe"
          />
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center"></div>
        <br />
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Email
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">@</span>
          </div>
          <input
            type="text"
            name="email"
            id="email"
            className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="awesome-email@live.com"
          />
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center"></div>
        <br />
        <label
          htmlFor="message"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Message
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
          <textarea
            rows="4"
            type="text"
            name="message"
            id="message"
            className="block w-96 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Write your message here..."
          />
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center"></div>
        <input className="submit" type="submit" />
      </div>
    </div>
  );
}

export default ContactCard;
