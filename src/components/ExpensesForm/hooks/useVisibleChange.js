import { useState } from 'react';

const useVisibleChange = () => {
  const [isVisible, setVisible] = useState(false);
  return [isVisible, setVisible];
};

export default useVisibleChange;
