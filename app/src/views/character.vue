<template>
  <div
    class="px-7 pt-7 pb-16 bg-slate-800 min-h-screen flex flex-col lg:flex-row justify-center items-center gap-8"
  >
    <figure v-if="character.image">
      <img
        :src="character.image"
        :alt="character.name"
        class="rounded-lg"
      />
    </figure>

    <section class="text-center lg:text-left">
      <h1 class="mt-6 lg:mt-0 font-semibold text-xl text-lime-300">
        {{ character.name }}
      </h1>

      <p class="text-gray-200">
        <b>Gender:</b> {{ character.gender }}
      </p>

      <p class="text-gray-200">
        <b>Species:</b> {{ character.species }}
      </p>

      <p class="text-gray-200">
        <b>Status:</b> {{ character.status }}
      </p>
    </section>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

async function getCharacter(id) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch character');
  }

  return response.json();
}

export default {
  name: 'CharacterView',

  setup() {
    const route = useRoute();
    const character = ref({});

    onMounted(async () => {
      character.value = await getCharacter(route.params.id);
    });

    return {
      character,
    };
  },
};
</script>
