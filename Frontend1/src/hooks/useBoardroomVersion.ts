import { useCallback, useEffect, useState } from 'react';
import useHauntedCash from './useHauntedCash';
import useStakedBalanceOnBoardroom from './useStakedBalanceOnBoardroom';

const useBoardroomVersion = () => {
  const [boardroomVersion, setBoardroomVersion] = useState('latest');
  const hauntedCash = useHauntedCash();
  const stakedBalance = useStakedBalanceOnBoardroom();

  const updateState = useCallback(async () => {
    setBoardroomVersion(await hauntedCash.fetchBoardroomVersionOfUser());
  }, [hauntedCash?.isUnlocked, stakedBalance]);

  useEffect(() => {
    if (hauntedCash?.isUnlocked) {
      updateState().catch((err) => console.error(err.stack));
    }
  }, [hauntedCash?.isUnlocked, stakedBalance]);

  return boardroomVersion;
};

export default useBoardroomVersion;
