import { useState } from 'react';

const useIdChange = () => {
  const [id, setId] = useState('');

  const handleChange = e => setId(e.target.id);

  return [id, handleChange];
};
export default useIdChange;
