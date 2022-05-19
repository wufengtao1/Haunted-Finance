
import { Configuration } from './haunted-cash/config';
import { BankInfo } from './haunted-cash';


const configurations: { [env: string]: Configuration } = {
  development: {
    chainId: 71,
    etherscanUrl: 'https://evmtestnet.confluxscan.net',
    defaultProvider: 'https://evm.confluxrpc.net',
    deployments: require('./haunted-cash/deployments/deployments.testnet.json'),
    externalTokens: {
      USDT: ['0xdAC17F958D2ee523a2206206994597C13D831ec7', 6],
      'hCASH_USDT-UNI-LPv2': ['0x78b1a3038be17cec162d364a3f012a8d743313ce', 18],
      'hSHARE_USDT-UNI-LPv2': ['0x7f2372630e400ff01e9aaba28f17151c55559385', 18],
    },
    baseLaunchDate: new Date('2022-05-16T23:00:00Z'),
    bondLaunchesAt: new Date('2022-05-16T23:00:00Z'),
    boardroomLaunchesAt: new Date('2022-05-16T23:00:00Z'),
    refreshInterval: 10000,
    gasLimitMultiplier: 1.1,
  },
  production: {
    chainId: 71,
    etherscanUrl: 'https://evmtestnet.confluxscan.net',
    defaultProvider: 'https://evm.confluxrpc.net',
    deployments: require('./haunted-cash/deployments/deployments.testnet.json'),
    externalTokens: {
      USDT: ['0xdAC17F958D2ee523a2206206994597C13D831ec7', 6],
      'hCASH_USDT-UNI-LPv2': ['0x78b1a3038be17cec162d364a3f012a8d743313ce', 18],
      'hSHARE_USDT-UNI-LPv2': ['0x7f2372630e400ff01e9aaba28f17151c55559385', 18],
    },
    baseLaunchDate: new Date('2022-05-16T00:00:00Z'),
    bondLaunchesAt: new Date('2022-05-16T00:00:00Z'),
    boardroomLaunchesAt: new Date('2022-05-16T00:00:00Z'),
    refreshInterval: 30000,
    gasLimitMultiplier: 1.7,
  },
};

export const bankDefinitions: { [contractName: string]: BankInfo } = {
  hCASHUSDTPool: {
    name: 'Earn hCASH by USDT',
    contract: 'hCASHUSDTPool',
    depositTokenName: 'USDT',
    earnTokenName: 'hCASH',
    finished: false,
    sort: 1,
  },
  
  /*USDThCASHLPTokenSharePool: {
    name: 'Earn hCASH by hCASH-USDT-LP',
    contract: 'USDThCASHLPTokenSharePool',
    depositTokenName: 'hCASH_USDT-UNI-LPv2',
    earnTokenName: 'hSHARE',
    finished: false,
    sort: 2,
  },
  USDThSHARELPTokenSharePool: {
    name: 'Earn hSHARE by hSHARE-USDT-LP',
    contract: 'DAIBASLPTokenSharePool',
    depositTokenName: 'hSHARE_USDT-UNI-LPv2',
    earnTokenName: 'hSHARE',
    finished: false,
    sort: 3,
  },*/
};

export default configurations[process.env.NODE_ENV || "production"];
