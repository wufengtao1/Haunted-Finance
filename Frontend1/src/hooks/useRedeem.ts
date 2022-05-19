import { useCallback } from 'react';
import useHauntedCash from './useHauntedCash';
import { Bank } from '../haunted-cash';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';

const useRedeem = (bank: Bank) => {
  const hauntedCash = useHauntedCash();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleRedeem = useCallback(() => {
    handleTransactionReceipt(hauntedCash.exit(bank.contract), `Redeem ${bank.contract}`);
  }, [bank, hauntedCash]);

  return { onRedeem: handleRedeem };
};

export default useRedeem;
