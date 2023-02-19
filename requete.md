const catégorieFilm = "https://api.themoviedb.org/3/genre/movie/list?api_key=47accfeff32353d2ff47a97c0ed7c4ef&language=fr-FR";
const rechercheFilmTitre= "https://api.themoviedb.org/3/search/movie?api_key=47accfeff32353d2ff47a97c0ed7c4ef&language=fr-FR&query=${lefilm}"
const catégorieSerie= "https://api.themoviedb.org/3/genre/tv/list?api_key=47accfeff32353d2ff47a97c0ed7c4ef&language=fr-FR";


    Movies:
        GET /movie/{movie_id} : récupérer les détails d'un film par son identifiant
        GET /movie/{movie_id}/credits : récupérer la distribution d'un film par son identifiant
        GET /movie/{movie_id}/recommendations : récupérer une liste de recommandations de films similaires pour un film donné
        GET /movie/now_playing : récupérer une liste de films actuellement diffusés en salles
        GET /movie/popular : récupérer une liste de films populaires
        GET /movie/top_rated : récupérer une liste de films les mieux notés
        GET /movie/upcoming : récupérer une liste de films à venir prochainement
        GET /movie/latest : récupérer les informations sur le dernier film ajouté à l'API

    TV Shows :
        GET /tv/{tv_id} : récupérer les détails d'une série TV par son identifiant
        GET /tv/{tv_id}/credits : récupérer la distribution d'une série TV par son identifiant
        GET /tv/{tv_id}/recommendations : récupérer une liste de recommandations de séries TV similaires pour une série TV donnée
        GET /tv/on_the_air : récupérer une liste de séries TV actuellement diffusées à la télévision
        GET /tv/popular : récupérer une liste de séries TV populaires
        GET /tv/top_rated : récupérer une liste de séries TV les mieux notées
        GET /tv/latest : récupérer les informations sur la dernière série TV ajoutée à l'API

    People :
        GET /person/{person_id} : récupérer les détails d'une personne par son identifiant
        GET /person/{person_id}/movie_credits : récupérer la filmographie d'une personne par son identifiant
        GET /person/{person_id}/tv_credits : récupérer la filmographie TV d'une personne par son identifiant

    Genres :
        GET /genre/movie/list : récupérer la liste des genres de films et leurs identifiants
        GET /genre/tv/list : récupérer la liste des genres de séries TV et leurs identifiants

    Search :
        GET /search/movie : rechercher des films correspondant à un critère de recherche donné
        GET /search/tv : rechercher des séries TV correspondant à un critère de recherche donné
        GET /search/person : rechercher des personnes correspondant à un critère de recherche donné

    Miscellaneous :
        GET /configuration : récupérer les informations de configuration de l'API
        GET /trending/{media_type}/{time_window} : récupérer les éléments les plus populaires dans une fenêtre de temps donnée