import { useCallback } from 'react';
import useHauntedCash from './useHauntedCash';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';
import { Bank } from '../haunted-cash';

const useHarvest = (bank: Bank) => {
  const hauntedCash = useHauntedCash();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleReward = useCallback(() => {
    handleTransactionReceipt(
      hauntedCash.harvest(bank.contract),
      `Claim ${bank.earnTokenName} from ${bank.contract}`,
    );
  }, [bank, hauntedCash]);

  return { onReward: handleReward };
};

export default useHarvest;
