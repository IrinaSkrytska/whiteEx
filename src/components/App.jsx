import CurrencyConverter from './CurrencyConverter/CurrencyConverter';
import { useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CurrencyConverter />} />
    </Routes>
  );
};
