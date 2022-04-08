const API_KEY = "8d64ceddb4fea0720e842857f6016db4";

export const getMovies = async (
  category = "popular",
  genreId = 0,
  searchTerm = "",
  page = 1
) => {
  let res;
  if (genreId) {
    res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&language=en-US&page=${page}`
    );
  } else if (searchTerm) {
    res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=${page}&include_adult=false`
    );
  } else if (category) {
    res = await fetch(`
    https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}&language=en-US&page=${page}`);
  }

  if (res.ok) {
    const data = await res.json();
    return data;
  } else {
    console.log("NOT FOUND");
  }
};

export const getMovieDetail = async (movieId) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  if (res.ok) {
    const data = await res.json();
    return data;
  } else {
    console.log("NOT FOUND");
  }
};

export const getImage = (path) => {
  if (path) return `https://image.tmdb.org/t/p/w500${path}`;
};

export const getMovieGenres = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
  );
  if (res.ok) {
    const data = await res.json();
    return data;
  } else {
    console.log("NOT FOUND");
  }
};

export const getMovieCredits = async (movieId) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=8d64ceddb4fea0720e842857f6016db4&language=en-US`
  );
  if (res.ok) {
    const data = await res.json();
    return data;
  } else {
    console.log("NOT FOUND");
  }
};

export const getMovieRecommendations = async (movieId) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${API_KEY}&language=en-US&page=1`
  );
  if (res.ok) {
    const data = await res.json();
    return data;
  } else {
    console.log("NOT FOUND");
  }
};

export const getActorDetail = async (actorId) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/person/${actorId}?api_key=${API_KEY}&language=en-US`
  );
  if (res.ok) {
    const data = await res.json();
    return data;
  } else {
    console.log("NOT FOUND");
  }
};

export const getActorMovies = async (actorId) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_people=${actorId}`
  );
  if (res.ok) {
    const data = await res.json();
    return data;
  } else {
    console.log("NOT FOUND");
  }
};
