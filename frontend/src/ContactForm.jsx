import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xgaoegne");
  if (state.succeeded) {
      return <p className="text-platinum text-xl mb-7">Thank you! :)</p>;
  }
  return (
    <form className="relative text-midnight-violet p-2 border-2 border-none flex flex-col mx-[min(10%,300px)] w-[max(40%,300px)] mb-5" action="https://formspree.io/f/xgaoegne" method="POST" onSubmit={handleSubmit}>
      <input
        required
        id="email"
        type="email" 
        name="email"
        placeholder=" "
        className="peer border-2 rounded bg-platinum border-tropical-teal my-3 focus:outline-none"
      />
      <label className="absolute text-midnight-violet top-5 left-3 transition-all ease-in-out peer-focus:top-0 peer-focus:text-sm peer-focus:text-platinum peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-platinum" htmlFor="email">
        Email Address
      </label>
    
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
        <input
        required
        id="name"
        type="text" 
        name="name"
        placeholder=" "
        className="peer/third border-2 rounded bg-platinum border-tropical-teal my-3 focus:outline-none"
      />
      <label className="absolute text-midnight-violet top-18 left-3 transition-all ease-in-out peer-focus/third:top-13 peer-focus/third:text-sm peer-focus/third:text-platinum peer-not-placeholder-shown/third:top-13 peer-not-placeholder-shown/third:text-sm peer-not-placeholder-shown/third:text-platinum" htmlFor="name">
        Name
      </label>

      <textarea
        required
        id="message"
        name="message"
        placeholder=" "
        className="peer/second border-2 rounded border-tropical-teal bg-platinum my-3 focus:outline-none"
      />
      <label className="absolute text-midnight-violet top-31 left-3 transition-all ease-in-out duration-100 peer-focus/second:top-26 peer-focus/second:text-platinum peer-focus/second:text-sm peer-not-placeholder-shown/second:top-26 peer-not-placeholder-shown/second:text-sm peer-not-placeholder-shown/second:text-platinum" htmlFor="message">Message</label>
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting} className="bg-tropical-teal w-20 h-10 rounded-xl mx-auto">
        Submit
      </button>
    </form>
  );
}

export default ContactForm;