import React from 'react';

import bacLogo from '../../assets/img/haunted-cash-logo.png';
import hshareLogo from '../../assets/img/haunted-share-logo.png';
import hbondLogo from '../../assets/img/haunted-bond-logo.png';
import USDTLogo from '../../assets/img/USDT.png';

const logosBySymbol: {[title: string]: string} = {
  'hCASH': bacLogo,
  'hBOND': hbondLogo,
  'hSHARE': hshareLogo,
  'USDT': USDTLogo,
  'hCASH_USDT-UNI-LPv2': bacLogo,
  'hSHARE_USDT-UNI-LPv2': hshareLogo,
};

type HauntedLogoProps = {
  symbol: string;
  size?: number;
}

const TokenSymbol: React.FC<HauntedLogoProps> = ({ symbol, size = 64 }) => {
  if (!logosBySymbol[symbol]) {
    throw new Error(`Invalid HauntedLogo symbol: ${symbol}`);
  }
  return (
    <img
      src={logosBySymbol[symbol]}
      alt={`${symbol} Logo`}
      width={size}
      height={size}
    />
  )
};

export default TokenSymbol;
