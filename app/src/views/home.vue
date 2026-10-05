<template>
  <div class="px-7 pt-7 pb-16">
    <h1 class="text-2xl font-semibold text-white">
      Personajes
    </h1>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-4">
      <CharacterCard
        v-for="character in characters"
        :key="character.id"
        :character="character"
      />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import CharacterCard from '../components/CharacterCard.vue';

async function getCharacters() {
  const response = await fetch(
    'https://rickandmortyapi.com/api/character'
  );

  if (!response.ok) {
    throw new Error('Failed to fetch characters');
  }

  const data = await response.json();

  return data.results;
}

export default {
  name: 'HomeView',

  components: {
    CharacterCard,
  },

  setup() {
    const characters = ref([]);

    onMounted(async () => {
      characters.value = await getCharacters();
    });

    return {
      characters,
    };
  },
};
</script>
