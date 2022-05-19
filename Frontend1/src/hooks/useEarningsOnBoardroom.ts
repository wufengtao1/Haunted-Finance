import { useCallback, useEffect, useState } from 'react';
import { BigNumber } from 'ethers';
import useHauntedCash from './useHauntedCash';
import config from '../config';

const useEarningsOnBoardroom = () => {
  const [balance, setBalance] = useState(BigNumber.from(0));
  const hauntedCash = useHauntedCash();

  const fetchBalance = useCallback(async () => {
    setBalance(await hauntedCash.getEarningsOnBoardroom());
  }, [hauntedCash?.isUnlocked]);

  useEffect(() => {
    if (hauntedCash?.isUnlocked) {
      fetchBalance().catch((err) => console.error(err.stack));

      const refreshBalance = setInterval(fetchBalance, config.refreshInterval);
      return () => clearInterval(refreshBalance);
    }
  }, [hauntedCash?.isUnlocked, setBalance]);

  return balance;
};

export default useEarningsOnBoardroom;
