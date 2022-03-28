const API_KEY = "8d64ceddb4fea0720e842857f6016db4";

export const getMovies = async (category = "popular", page = 1) => {
  const res = await fetch(`
  https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}&language=en-US&page=${page}`);

  const data = res.json();
  return data;
};

export const getMoviePosterUrl = (posterPath) => {
  return `https://image.tmdb.org/t/p/w500${posterPath}`;
};

export const getMovieGenres = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
  );
  const data = res.json();
  return data;
};
