import { useCallback } from 'react';
import useHauntedCash from './useHauntedCash';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';

const useRedeemOnBoardroom = (description?: string) => {
  const hauntedCash = useHauntedCash();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleRedeem = useCallback(() => {
    const alertDesc = description || 'Redeem hSHARE from Boardroom';
    handleTransactionReceipt(hauntedCash.exitFromBoardroom(), alertDesc);
  }, [hauntedCash]);
  return { onRedeem: handleRedeem };
};

export default useRedeemOnBoardroom;
