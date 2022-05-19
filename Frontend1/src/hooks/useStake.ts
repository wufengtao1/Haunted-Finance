import { useCallback } from 'react';
import useHauntedCash from './useHauntedCash';
import { Bank } from '../haunted-cash';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';
import { parseUnits } from 'ethers/lib/utils';

const useStake = (bank: Bank) => {
  const hauntedCash = useHauntedCash();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleStake = useCallback(
    (amount: string) => {
      const amountBn = parseUnits(amount, bank.depositToken.decimal);
      handleTransactionReceipt(
        hauntedCash.stake(bank.contract, amountBn),
        `Stake ${amount} ${bank.depositTokenName} to ${bank.contract}`,
      );
    },
    [bank, hauntedCash],
  );
  return { onStake: handleStake };
};

export default useStake;
