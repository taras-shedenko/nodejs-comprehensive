let data = [
  { id: 1, title: "Iron Man MEM", year: 2008 },
  { id: 2, title: "Thor MEM", year: 2011 },
  { id: 3, title: "Captain America MEM", year: 2011 },
];

export const getAll = async () => data;

export const get = async (id) => data.find((item) => item.id == id);

export const insert = async (movie) => {
  data.push({ ...movie, id: data.length + 1 });
};

export const update = async (movie) => {
  const item = await get(movie.id);
  item.title = movie.title;
  item.year = parseInt(movie.year);
};

export const remove = async (id) => {
  data = data.filter((item) => item.id != id);
};
