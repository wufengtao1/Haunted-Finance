import { useCallback } from 'react';
import useHauntedCash from './useHauntedCash';
import { Bank } from '../haunted-cash';
import { useTransactionAdder } from '../state/transactions/hooks';
import { BigNumber } from 'ethers';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';

const useWithdrawFromBoardroom = () => {
  const hauntedCash = useHauntedCash();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleWithdraw = useCallback(
    (amount: string) => {
      handleTransactionReceipt(
        hauntedCash.withdrawShareFromBoardroom(amount),
        `Withdraw ${amount} hSHARE from the boardroom`,
      );
    },
    [hauntedCash],
  );
  return { onWithdraw: handleWithdraw };
};

export default useWithdrawFromBoardroom;
