import { useState } from 'react';

export default function useForm(initial = {}) {
  // Create a state object for our input
  const [inputs, setInputs] = useState(initial);

  function handleChange(e) {
    setInputs({
      // Copy the existing state
      ...inputs,
      [e.target.name]: e.target.value,
    });
  }

  // Return the things we want to surface from this custom hook
  return {
    inputs,
    handleChange,
  };
}
