<template>
  <div
    class="
      px-7
      pt-7
      pb-16
      bg-slate-800
      h-screen
      flex flex-col
      lg:flex-row
      justify-center
      items-center
      gap-8
    "
  >
    <figure>
      <img :src="character.image" :alt="character.name" class="rounded-lg" />
    </figure>

    <section class="text-center lg:text-left">
      <h1 class="mt-6 lg:mt-0 font-semibold text-xl text-lime-300">
        {{ character.name }}
      </h1>
      <p class="text-gray-200"><b>Gender:</b> {{ character.gender }}</p>
      <p class="text-gray-200"><b>Specie:</b> {{ character.species }}</p>
      <p class="text-gray-200"><b>Status:</b> {{ character.status }}</p>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue';

async function getCharacter(id) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  const data = await response.json();
  return data;
}

export default {
  name: 'CharacterView',
  setup() {
    const character = ref({});

    return {
      character,
    };
  },
  async created() {
    this.character = await getCharacter(this.$route.params.id);
  },
};
</script>
