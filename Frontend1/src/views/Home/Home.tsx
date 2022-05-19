import React, { useCallback, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import Page from '../../components/Page';
import PageHeader from '../../components/PageHeader';
import Spacer from '../../components/Spacer';
import HomeCard from './components/HomeCard';
import { OverviewData } from './types';
import useHauntedCash from '../../hooks/useHauntedCash';
import config from '../../config';
import Logo from '../../assets/img/haunted-finance-logo.png';
import Notice from '../../components/Notice';

const Home: React.FC = () => {
  const hauntedCash = useHauntedCash();

  const [{ cash, bond, share }, setStats] = useState<OverviewData>({});
  const fetchStats = useCallback(async () => {
    const [cash, bond, share] = await Promise.all([
      hauntedCash.getCashStatFromUniswap(),
      hauntedCash.getBondStat(),
      hauntedCash.getShareStat(),
    ]);
    if (Date.now() < config.bondLaunchesAt.getTime()) {
      bond.priceInUSDT = '-';
    }
    setStats({ cash, bond, share });
  }, [hauntedCash, setStats]);

  useEffect(() => {
    if (hauntedCash) {
      fetchStats().catch((err) => console.error(err.stack));
    }
  }, [hauntedCash]);

  const cashAddr = useMemo(() => hauntedCash?.hCASH.address, [hauntedCash]);
  const shareAddr = useMemo(() => hauntedCash?.hSHARE.address, [hauntedCash]);
  const bondAddr = useMemo(() => hauntedCash?.hBOND.address, [hauntedCash]);

  return (
    <Page>
      <PageHeader
        img = "👻"
        subtitle="Buy, sell, and provide liquidity for Haunted Cash and Haunted Shares on Swappi Dex"
        title="Welcome to Haunted Finance!"
      />
      <Spacer size="md" />
      <CardWrapper>
        <HomeCard
          title="Haunted Cash"
          symbol="hCASH"
          color="#101e92"
          supplyLabel="Circulating Supply"
          address={cashAddr}
          stat={cash}
        />
        <Spacer size="lg" />
        <HomeCard
          title="Haunted Share"
          symbol="hSHARE"
          color="#139e33"
          address={shareAddr}
          stat={share}
        />
        <Spacer size="lg" />
        <HomeCard
          title="Haunted Bond"
          symbol="hBOND"
          color="#ECF25C"
          address={bondAddr}
          stat={bond}
        />
      </CardWrapper>
    </Page>
  );
};

const StyledOverview = styled.div`
  align-items: center;
  display: flex;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
  }
`;

const StyledNoticeContainer = styled.div`
  max-width: 768px;
  width: 90vw;
`;

const StyledSpacer = styled.div`
  height: ${(props) => props.theme.spacing[4]}px;
  width: ${(props) => props.theme.spacing[4]}px;
`;

const StyledLink = styled.a`
  font-weight: 700;
  text-decoration: none;
  color: ${(props) => props.theme.color.primary.main};
`;

export default Home;
