 async fetchLastSerieSeason(id: string, seasonNumber?: number) {
      const { results, loading, error } = await fetchSerieSeason(
        id,
        seasonNumber
      );
      this.loading = loading.value;
      this.errors = error.value;

      if (Array.isArray(this.seasons)) {
        const oldSeason = this.seasons.filter(
          (el) => el.id !== (results.value as SerieSeasonInterface).id
        );

        this.seasons = [...oldSeason, results.value] as SerieSeasonInterface[];
 
      } else {
        this.seasons = [results.value] as SerieSeasonInterface[];
    

      }
    },