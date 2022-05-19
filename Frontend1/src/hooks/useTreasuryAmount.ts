import { useEffect, useState } from 'react';
import { BigNumber } from 'ethers';
import useHauntedCash from './useHauntedCash';

const useTreasuryAmount = () => {
  const [amount, setAmount] = useState(BigNumber.from(0));
  const hauntedCash = useHauntedCash();


  useEffect(() => {
    if (hauntedCash) {
      const { Treasury } = hauntedCash.contracts;
      hauntedCash.hCASH.balanceOf(Treasury.address).then(setAmount);
    }
  }, [hauntedCash]);
  return amount;
};

export default useTreasuryAmount;
