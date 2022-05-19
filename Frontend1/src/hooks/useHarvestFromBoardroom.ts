import { useCallback } from 'react';
import useHauntedCash from './useHauntedCash';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';

const useHarvestFromBoardroom = () => {
  const hauntedCash = useHauntedCash();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleReward = useCallback(() => {
    handleTransactionReceipt(hauntedCash.harvestCashFromBoardroom(), 'Claim hCASH from Boardroom');
  }, [hauntedCash]);

  return { onReward: handleReward };
};

export default useHarvestFromBoardroom;
