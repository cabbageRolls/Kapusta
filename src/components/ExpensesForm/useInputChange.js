import { useState } from 'react';

const useInputChange = () => {
  const [input, setInput] = useState({ amount: '', description: '' });

  const handleInputChange = e =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  const handleClearInput = () => {
    setInput({ amount: '', description: '' });
  };

  return [input, handleInputChange, handleClearInput];
};
export default useInputChange;
