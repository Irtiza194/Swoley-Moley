<script>
  import CTA from "./../components/CTA.svelte";
  import { openModal } from "./../store/index.js";
  import Footer from "./../components/Footer.svelte";
  import "../app.css";
  import Header from "./../components/Header.svelte";
  let y;
  $: outerHeight = 0;
  function reRoute(href) {}
</script>

{#if $openModal}
  <div
    class="fixed top-0 left-0 w-screen h-screen border-b bg-white z-50 flex flex-col gap-8 p-5 px-8 md:hidden"
  >
    <div class="flex items-center justify-between gap-4 border-b pb-2">
      <h1 class="font-semibold">
        Swoley <span class="text-indigo-400">Moley</span>
      </h1>
      <button
        on:click={() => ($openModal = false)}
        class="outline-none border-none"
      >
        <i class="fa-solid fa-xmark text-2xl"></i>
      </button>
    </div>
    <div class="flex flex-col gap-4 flex-1">
      <button
        on:click={() => reRoute("#product")}
        class="border-none outline-none p-2 group duration-200 cursor-pointer text-left"
      >
        <p class="duration-200 group-hover:pl-2 poppins text-3xl font-semibold">
          Product <i class="fa-solid fa-chevron-right text-xl pl-4" />
        </p>
      </button>
      <button
        on:click={() => reRoute("#reviews")}
        class="border-none outline-none p-2 group duration-200 cursor-pointer text-left"
      >
        <p class="duration-200 group-hover:pl-2 poppins text-3xl font-semibold">
          Reviews <i class="fa-solid fa-chevron-right text-xl pl-4" />
        </p>
      </button>
      <button
        on:click={() => reRoute("#faqs")}
        class="border-none outline-none p-2 group duration-200 cursor-pointer text-left"
      >
        <p class="duration-200 group-hover:pl-2 poppins text-3xl font-semibold">
          FAQs <i class="fa-solid fa-chevron-right text-xl pl-4" />
        </p>
      </button>
    </div>
    <div class="flex flex-col items-center justify-center">
      <CTA />
    </div>
  </div>
{/if}
{#if y > outerHeight}
  <div
    class="bg-white fixed top-0 left-0 w-full flex flex-col z-20 px-4 fadeIn"
  >
    <Header />
  </div>
{/if}
<slot />
<Footer></Footer>
<svelte:window bind:scrollY={y} bind:outerHeight />
