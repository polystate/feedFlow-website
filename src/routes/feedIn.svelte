<script>
import { dataAPI } from '../stores/store.js';
import { fetchData } from '../stores/store.js';
const url = 'https://newsapi.org/v2/everything?q=Apple&from=2022-07-05&sortBy=popularity&apiKey=fab5fb9042124692b2a62ae84777059e';
const promise = fetchData(url);
</script>

<svelte:head>
  <title>My Feed</title>
</svelte:head>

<main>
 {#await promise}
    <em><p class="text-neut-700 flex justify-center">Initializing...</p></em>
    {:then}
    <!-- <p class="text-emerald-600 flex justify-center">Loading Images...</p> -->
    {:catch}
    <p class="text-red-600 flex justify-center">Error with server. Please try again later. Are you sure you're connected to the internet?</p>
  {/await}
  {#each $dataAPI as article}
    <div class="p-8">
      <h2 class="text-gray-650 flex justify-center text-center"><strong>{article.title}</strong></h2> 
      <p class="text-gray-600 flex justify-center p-4">by {article.author ? article.author : 'Unknown Author'}</p>
      <figure>
      <img class="p-4" src={article.imageURL} alt={article.alt} />
      <figcaption class="text-gray-700 flex justify-center max-w-lg m-4"><p class="text-center">{article.description}</p></figcaption>
      </figure>
      <a class="flex justify-center text-sec-500 hover:text-prim-600" href={article.url}>Read more</a>
    </div>
    <hr>
  {/each}
</main>