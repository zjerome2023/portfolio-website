import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xgaoegne");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <form className="bg-platinum text-midnight-violet border-tropical-teal p-2 border-2 rounded flex flex-col mx-[min(10%,300px)] w-[max(50%,200px)] mb-5" action="https://formspree.io/f/xgaoegne" method="POST" onSubmit={handleSubmit}>
      <label className="" htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        className='border-2 rounded border-tropical-teal my-2'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        className='border-2 rounded border-tropical-teal my-2'
      />
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