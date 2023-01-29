import CurrencyConverter from './CurrencyConverter/CurrencyConverter';
import { useEffect } from 'react';
import { useTelegram } from '../hooks/useTelegram';

export const App = () => {
  const { onToggleButton, tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <>
      <CurrencyConverter />
    </>
  );
};
