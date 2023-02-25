export type Continents = 'north-america' | 'south-america' | 'europe' | 'africa' | 'asia' | 'australia'
export interface GlobalState {
  continent: Continents | null
  country: string | null
}