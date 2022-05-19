import { useCallback } from 'react';
import useHauntedCash from './useHauntedCash';
import { Bank } from '../haunted-cash';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';
import { parseUnits } from 'ethers/lib/utils';

const useWithdraw = (bank: Bank) => {
  const hauntedCash = useHauntedCash();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleWithdraw = useCallback(
    (amount: string) => {
      const amountBn = parseUnits(amount, bank.depositToken.decimal);
      handleTransactionReceipt(
        hauntedCash.unstake(bank.contract, amountBn),
        `Withdraw ${amount} ${bank.depositTokenName} from ${bank.contract}`,
      );
    },
    [bank, hauntedCash],
  );
  return { onWithdraw: handleWithdraw };
};

export default useWithdraw;
