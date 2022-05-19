import { useCallback } from 'react';
import useHauntedCash from './useHauntedCash';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';

const useStakeToBoardroom = () => {
  const hauntedCash = useHauntedCash();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleStake = useCallback(
    (amount: string) => {
      handleTransactionReceipt(
        hauntedCash.stakeShareToBoardroom(amount),
        `Stake ${amount} hSHARE to the boardroom`,
      );
    },
    [hauntedCash],
  );
  return { onStake: handleStake };
};

export default useStakeToBoardroom;
