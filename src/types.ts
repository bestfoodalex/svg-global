export type Continents = 'north-america' | 'south-america' | 'europe' | 'africa' | 'asia' | 'australia'
export type ContinentNames = 'North America' | 'South America' | 'Europe' | 'Africa' | 'Asia' | 'Australia'

export type ContinentObject = {
  key: Continents,
  name: ContinentNames,
  continentCode: string,
}

export type ContinentsData = {
  [key in Continents]: ContinentObject
}

export type CountryObject = {
  key: string,
  name: string,
  continentKey: Continents,
}

export type CountriesData = CountryObject[]