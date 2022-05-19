import { useCallback, useEffect, useState } from 'react';
import { BigNumber } from 'ethers';
import ERC20 from '../haunted-cash/ERC20';
import useHauntedCash from './useHauntedCash';
import config from '../config';

const useTokenBalance = (token: ERC20) => {
  const [balance, setBalance] = useState(BigNumber.from(0));
  const hauntedCash = useHauntedCash();

  const fetchBalance = useCallback(async () => {
    setBalance(await token.balanceOf(hauntedCash.myAccount));
  }, [hauntedCash?.isUnlocked, token]);

  useEffect(() => {
    if (hauntedCash?.isUnlocked) {
      fetchBalance().catch((err) =>
        console.error(`Failed to fetch token balance: ${err.stack}`),
      );
      let refreshInterval = setInterval(fetchBalance, config.refreshInterval);
      return () => clearInterval(refreshInterval);
    }
  }, [hauntedCash?.isUnlocked, token]);

  return balance;
};

export default useTokenBalance;
