import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 1,
    lpSymbol: 'GRP_USDT',
    lpAddresses: {
      97: '0x280e8Eaf10E9c5e39178a37bfdCDC3C1fb66f42d',
      56: '0x3642b52519ba81fd8a204b306d2369a0cc1bc612',
    },
    token: tokens.grp,
    quoteToken: tokens.usdt,
  },
]

export default farms
