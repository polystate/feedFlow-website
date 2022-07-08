<script>
  import "../app.css";
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";
</script>

  <Nav />
  <Footer />

<main class="font-sans md:font-serif flex justify-center items-center m-32 p-10 md:border leading-10 rounded bg-neut-100">
<slot></slot>
</main>

