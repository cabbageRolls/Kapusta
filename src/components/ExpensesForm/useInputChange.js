import { useState } from 'react';

const useInputChange = () => {
  const [input, setInput] = useState({ amount: '', description: '' });

  const handleInputChange = e =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  return [input, handleInputChange];
};
export default useInputChange;
