<template>
  <div id="app">
    <main>
      <RouterView></RouterView>
    </main>

    <footer
      class="
        fixed
        bottom-0
        left-0
        w-full
        flex
        items-center
        justify-center
        bg-slate-900
        py-2
        gap-7
      "
    >
      <RouterLink
        to="/"
        class="
          px-4
          py-2
          rounded-lg
          bg-cyan-400
          shadow-lg shadow-lime-500/50
          border-2 border-black
          outline outline-1 outline-white
        "
      >
        Home
      </RouterLink>

      <button
        type="button"
        class="
          px-4
          py-2
          rounded-lg
          bg-cyan-400
          shadow-lg shadow-lime-500/50
          border-2 border-black
          outline outline-1 outline-white
        "
        @click="goUp"
      >
        Arriba
      </button>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  setup() {
    const goUp = () => {
      window.scrollTo({
        behavior: 'smooth',
        top: 0,
      });
    };

    return {
      goUp,
    };
  },
};
</script>
