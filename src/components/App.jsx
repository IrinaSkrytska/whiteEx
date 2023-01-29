import CurrencyConverter from './CurrencyConverter/CurrencyConverter';
import { useEffect } from 'react';
import { useTelegram } from '../hooks/useTelegram';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
    <Routes>
      <Route path="/" element={<CurrencyConverter />} />
    </Routes>
  );
};
