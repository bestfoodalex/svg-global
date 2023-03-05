<script lang="ts">
  import { continentsData } from '../data'
  import { continent } from '../stores'
</script>

<div class="continent-data">
  {#if $continent}
    <h3>{continentsData[$continent]?.name || 'Continent Not Found'}</h3>
    {#if continentsData[$continent]?.description}
      <p>{continentsData[$continent]?.description}</p>
    {/if}
  {/if}
</div>