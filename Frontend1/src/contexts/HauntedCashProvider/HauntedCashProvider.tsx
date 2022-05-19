import React, { createContext, useEffect, useState } from 'react';
import { useWallet } from 'use-wallet';
import HauntedCash from '../../haunted-cash';
import config from '../../config';

export interface HauntedCashContext {
  hauntedCash?: HauntedCash;
}

export const Context = createContext<HauntedCashContext>({ hauntedCash: null });

export const HauntedCashProvider: React.FC = ({ children }) => {
  const { ethereum, account } = useWallet();
  const [hauntedCash, setHauntedCash] = useState<HauntedCash>();

  useEffect(() => {
    if (!hauntedCash) {
      const haunted = new HauntedCash(config);
      if (account) {
        // wallet was unlocked at initialization
        haunted.unlockWallet(ethereum, account);
      }
      setHauntedCash(haunted);
    } else if (account) {
      hauntedCash.unlockWallet(ethereum, account);
    }
  }, [account]);

  return <Context.Provider value={{ hauntedCash }}>{children}</Context.Provider>;
};
