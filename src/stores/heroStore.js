import { defineStore } from 'pinia';

export const useHeroStore = defineStore('heroStore', {
  state: () => ({
    favorites: []
  }),

  actions: {
    loadFavorites() {
      const storedFavorites = localStorage.getItem('favorites');
      if (storedFavorites) {
        this.favorites = JSON.parse(storedFavorites);
      }
    },

    toggleFavorite(hero) {
      const index = this.favorites.findIndex(h => h.id === hero.id);
      if (index !== -1) {
        this.favorites.splice(index, 1);
      } else {
        this.favorites.push(hero);
      }
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    }
  },

  getters: {
    isFavorite: (state) => (heroId) => state.favorites.some(h => h.id === heroId),
  }
});
