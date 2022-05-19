import { useCallback, useEffect, useState } from 'react';
import useHauntedCash from './useHauntedCash';
import config from '../config';
import { BigNumber } from 'ethers';

const useCashPriceInLastTWAP = () => {
  const [price, setPrice] = useState<BigNumber>(BigNumber.from(0));
  const hauntedCash = useHauntedCash();

  const fetchCashPrice = useCallback(async () => {
    setPrice(await hauntedCash.getCashPriceInLastTWAP());
  }, [hauntedCash]);

  useEffect(() => {
    fetchCashPrice().catch((err) => console.error(`Failed to fetch hCASH price: ${err.stack}`));
    const refreshInterval = setInterval(fetchCashPrice, config.refreshInterval);
    return () => clearInterval(refreshInterval);
  }, [setPrice, hauntedCash]);

  return price;
};

export default useCashPriceInLastTWAP;
