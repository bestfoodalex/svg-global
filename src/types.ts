export type Continents = 'north-america' | 'south-america' | 'europe' | 'africa' | 'asia' | 'australia'
export type ContinentNames = 'North America' | 'South America' | 'Europe' | 'Africa' | 'Asia' | 'Australia'

export type ContinentObject = {
  key: Continents,
  name: ContinentNames,
  countries: string[],
  img?: string,
  description?: string,
}

export type ContinentsData = {
  [key in Continents]: ContinentObject
}