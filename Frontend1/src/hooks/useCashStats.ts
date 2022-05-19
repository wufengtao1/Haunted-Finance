import { useCallback, useEffect, useState } from 'react';
import useHauntedCash from './useHauntedCash';
import { TokenStat } from '../haunted-cash/types';
import config from '../config';

const useCashStats = () => {
  const [stat, setStat] = useState<TokenStat>();
  const hauntedCash = useHauntedCash();

  const fetchCashPrice = useCallback(async () => {
    setStat(await hauntedCash.getCashStatFromUniswap());
  }, [hauntedCash]);

  useEffect(() => {
    fetchCashPrice().catch((err) => console.error(`Failed to fetch hBOND price: ${err.stack}`));
    const refreshInterval = setInterval(fetchCashPrice, config.refreshInterval);
    return () => clearInterval(refreshInterval);
  }, [setStat, hauntedCash]);

  return stat;
};

export default useCashStats;
