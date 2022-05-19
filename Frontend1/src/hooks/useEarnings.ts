import { useCallback, useEffect, useState } from 'react';
import { BigNumber } from 'ethers';
import useHauntedCash from './useHauntedCash';
import { ContractName } from '../haunted-cash';
import config from '../config';

const useEarnings = (poolName: ContractName) => {
  const [balance, setBalance] = useState(BigNumber.from(0));
  const hauntedCash = useHauntedCash();

  const fetchBalance = useCallback(async () => {
    const balance = await hauntedCash.earnedFromBank(poolName, hauntedCash.myAccount);
    setBalance(balance);
  }, [hauntedCash?.isUnlocked, poolName]);

  useEffect(() => {
    if (hauntedCash?.isUnlocked) {
      fetchBalance().catch((err) => console.error(err.stack));

      const refreshBalance = setInterval(fetchBalance, config.refreshInterval);
      return () => clearInterval(refreshBalance);
    }
  }, [hauntedCash?.isUnlocked, poolName, hauntedCash]);

  return balance;
};

export default useEarnings;
