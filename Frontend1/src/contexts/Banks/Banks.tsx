import React, { useCallback, useEffect, useState } from 'react';
import Context from './context';
import useHauntedCash from '../../hooks/useHauntedCash';
import { Bank } from '../../haunted-cash';
import config, { bankDefinitions } from '../../config';

const Banks: React.FC = ({ children }) => {
  const [banks, setBanks] = useState<Bank[]>([]);
  const hauntedCash = useHauntedCash();

  const fetchPools = useCallback(async () => {
    const banks: Bank[] = [];

    for (const bankInfo of Object.values(bankDefinitions)) {
      if (bankInfo.finished) {
        if (!hauntedCash.isUnlocked) continue;

        // only show pools staked by user
        const balance = await hauntedCash.stakedBalanceOnBank(bankInfo.contract, hauntedCash.myAccount);
        if (balance.lte(0)) {
          continue;
        }
      }
      banks.push({
        ...bankInfo,
        address: config.deployments[bankInfo.contract].address,
        depositToken: hauntedCash.externalTokens[bankInfo.depositTokenName],
        earnToken: bankInfo.earnTokenName == 'hCASH' ? hauntedCash.hCASH : hauntedCash.hSHARE,
      });
    }
    banks.sort((a, b) => (a.sort > b.sort ? 1 : -1));
    setBanks(banks);
  }, [hauntedCash, hauntedCash?.isUnlocked, setBanks]);

  useEffect(() => {
    if (hauntedCash) {
      fetchPools()
        .catch(err => console.error(`Failed to fetch pools: ${err.stack}`));
    }
  }, [hauntedCash, hauntedCash?.isUnlocked, fetchPools]);

  return <Context.Provider value={{ banks }}>{children}</Context.Provider>;
};

export default Banks;
