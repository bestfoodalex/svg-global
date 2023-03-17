<script lang="ts">
  import { continent } from '../stores'
  import type { Continents } from '../types'

  export let continentName: Continents | null
  const gClass = 'contspot hover:cursor-pointer transition ease-in-out delay-200 duration-150'
</script>

<g
  class={$continent === continentName ? `${gClass} fill-primary-orange` : `${gClass} hover:fill-primary-orange`}
  id={`continent-${continentName}`}
  on:click={() => { $continent = continentName }}
  on:keydown={() => { $continent = continentName }}
>
  <slot></slot>
</g>