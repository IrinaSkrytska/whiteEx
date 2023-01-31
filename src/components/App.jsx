import CurrencyConverter from './CurrencyConverter/CurrencyConverter';

import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CurrencyConverter />} />
    </Routes>
  );
};
