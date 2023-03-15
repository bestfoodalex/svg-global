<script lang="ts">
  import { continentsData, countriesData } from '../data'
  import type { CountriesData } from '../types'
  import { continent, country } from '../stores'
  
  $: $continent, watchSelections()
  $: $country, watchSelections()

  let filteredCountries = [] as CountriesData
  let countryName = ''

  const watchSelections = () => {
    filteredCountries = countriesData.filter(c => c.continentKey === $continent)
    countryName = countriesData.find(c => c.key === $country)?.name ?? `No Country Found for key ${$country}`
  }
</script>

<div class="continent-data">
  {#if $continent && $country === null}
    <h3>{continentsData[$continent]?.name || 'Continent Not Found'}</h3>
    <p>Pick a country below to see its Travel Guides!</p>
    <ul>
      {#each filteredCountries as cntry}
        <li>
          <a href={'#'} on:click|preventDefault={() => { $country = cntry.key }}>
            {cntry.name}
          </a>
        </li>
      {/each}
    </ul>
  {:else if $country}
    <a href={'#'} on:click|preventDefault={() => { $country = null }}>
      &lt; Back to {$continent ? continentsData[$continent]?.name : 'continent'}
    </a>
    <h3>{countryName} Travel Guides</h3>
  {/if}
</div>