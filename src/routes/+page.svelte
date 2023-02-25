<script lang="ts">
  import { continent } from '../stores'
  import GlobalMap from '../components/GlobalMap.svelte'
</script>

<div class="container mx-auto px-4">
  <div class="flex flex-row flex-wrap py-4">
    <main class="w-full sm:w-2/3 md:w-3/4 pt-1 px-2">
      <h1>VitaminSEA</h1>
      <GlobalMap />
    </main>
    <aside class="w-full sm:w-1/3 md:w-1/4 px-2">
      <h2>Travels</h2>
      <p>Click on a continent to see which countries we've traveled to.</p>
      {#if $continent}
        <p>{$continent}</p>
      {/if}
    </aside>
  </div>
</div>
