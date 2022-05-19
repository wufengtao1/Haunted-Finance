import { useCallback, useEffect, useState } from 'react';
import useHauntedCash from './useHauntedCash';
import { TokenStat } from '../haunted-cash/types';
import config from '../config';

const useBondStats = () => {
  const [stat, setStat] = useState<TokenStat>();
  const hauntedCash = useHauntedCash();

  const fetchBondPrice = useCallback(async () => {
    setStat(await hauntedCash.getBondStat());
  }, [hauntedCash]);

  useEffect(() => {
    fetchBondPrice().catch((err) => console.error(`Failed to fetch hBOND price: ${err.stack}`));
    const refreshInterval = setInterval(fetchBondPrice, config.refreshInterval);
    return () => clearInterval(refreshInterval);
  }, [setStat, hauntedCash]);

  return stat;
};

export default useBondStats;
