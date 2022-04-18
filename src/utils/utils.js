export const getRatingStars = (voteAverage) => {
  const stars = [];
  const rate = Number((voteAverage / 2).toFixed(1));
  const filled = Math.floor(rate);
  const halfFilled = Math.round(rate - filled);
  const empty = 5 - (filled + halfFilled);

  stars.push(Array(filled).fill("filled"));
  if (halfFilled > 0) stars.push("halfFilled");
  stars.push(Array(empty).fill("empty"));

  return stars.flat();
};

export const formatFilterName = (name) => {
  return name.split(" ").join("_").toLowerCase();
};
