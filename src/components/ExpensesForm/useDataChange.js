import { useState } from 'react';

const useDateChange = () => {
  const [pickedDate, setPickedDate] = useState(new Date());
  const handlePickedDateChange = date => setPickedDate(date);
  const handleClearPickedDate = () => setPickedDate(new Date());
  return [pickedDate, handlePickedDateChange, handleClearPickedDate];
};

export default useDateChange;
