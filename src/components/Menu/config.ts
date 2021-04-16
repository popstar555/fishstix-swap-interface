import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://fishstix.finance/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://fishstix.finance/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://fishstix.finance/pools',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://fishstix.finance/lottery',
  },
/*  {
    label: 'Collectibles',
    icon: 'NftIcon',
    href: 'https://fishstix.finance/nft',
  },
  {
    label: 'Team Battle',
    icon: 'TeamBattleIcon',
    href: 'https://fishstix.finance/competition',
    status: {
      text: 'CLAIM',
      color: 'warning',
    },
  },
  {
    label: 'Teams & Profile',
    icon: 'GroupsIcon',
    items: [
      {
        label: 'Leaderboard',
        href: 'https://fishstix.finance/teams',
      },
      {
        label: 'Task Center',
        href: 'https://fishstix.finance/profile/tasks',
      },
      {
        label: 'Your Profile',
        href: 'https://fishstix.finance/profile',
      },
    ],
  },
*/  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://pancakeswap.info',
      },
      {
        label: 'Tokens',
        href: 'https://pancakeswap.info/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://pancakeswap.info/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://pancakeswap.info/accounts',
      },
    ],
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: 'https://fishstix.finance/ifo',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Contact',
        href: 'https://docs.fishstix.finance/contact-us',
      },
      {
        label: 'Voting',
        href: 'https://voting.fishstix.finance',
      },
      {
        label: 'Github',
        href: 'https://github.com/pancakeswap',
      },
      {
        label: 'Docs',
        href: 'https://docs.fishstix.finance',
      },
      {
        label: 'Blog',
        href: 'https://pancakeswap.medium.com',
      },
      {
        label: 'Merch',
        href: 'https://pancakeswap.creator-spring.com/',
      },
    ],
  },
]

export default config
