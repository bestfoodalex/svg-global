import type { ContinentsData, CountriesData } from './types'

export const continentsData: ContinentsData = {
  'north-america': {
    key: 'north-america',
    name: 'North America',
    continentCode: 'NA',
  },
  'south-america': {
    key: 'south-america',
    name: 'South America',
    continentCode: 'SA',
  },
  'europe': {
    key: 'europe',
    name: 'Europe',
    continentCode: 'EU',
  },
  'asia': {
    key: 'asia',
    name: 'Asia',
    continentCode: 'AS',
  },
  'africa': {
    key: 'africa',
    name: 'Africa',
    continentCode: 'AF',
  },
  'australia': {
    key: 'australia',
    name: 'Australia',
    continentCode: 'OC',
  },
}

export const countriesData: CountriesData = [
  {
    key: 'CAN',
    name: 'Canada',
    continentKey: 'north-america',
  },
  {
    key: 'CRI',
    name: 'Costa Rica',
    continentKey: 'north-america',
  },
  {
    key: 'COL',
    name: 'Colombia',
    continentKey: 'south-america',
  },
  {
    key: 'GRC',
    name: 'Greece',
    continentKey: 'europe',
  },
  {
    key: 'FIN-EST',
    name: 'Finland + Estonia',
    continentKey: 'europe',
  },
  {
    key: 'ISL',
    name: 'Iceland',
    continentKey: 'europe',
  },
]