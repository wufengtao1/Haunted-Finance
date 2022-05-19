import { useEffect, useState } from 'react';
import useHauntedCash from './useHauntedCash';
import config from '../config';
import { TreasuryAllocationTime } from '../haunted-cash/types';

const useTreasuryAllocationTimes = () => {
  const [time, setTime] = useState<TreasuryAllocationTime>({
    prevAllocation: new Date(),
    nextAllocation: new Date(),
  });
  const hauntedCash = useHauntedCash();

  useEffect(() => {
    if (hauntedCash) {
      hauntedCash.getTreasuryNextAllocationTime().then(setTime);
    }
  }, [hauntedCash]);
  return time;
};

export default useTreasuryAllocationTimes;
