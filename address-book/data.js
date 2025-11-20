export let addresses = [
  {
    id: 1,
    firstname: "James",
    lastname: "Bond",
    street: "12 Millbank",
    city: "London",
    country: "United Kingdom",
  },
  {
    id: 2,
    firstname: "Sherlock",
    lastname: "Holmes",
    street: "221b Baker St",
    city: "London",
    country: "United Kingdom",
  },
];

export const deleteById = (id) =>
  (addresses = addresses.filter((addr) => addr.id != id));

export const save = (data) => {
  data.id = parseInt(data.id);
  if (isNaN(data.id)) delete data.id;
  if (data.id) {
    const idx = addresses.findIndex((addr) => addr.id == data.id);
    addresses[idx] = data;
  } else {
    data.id = addresses.length + 1;
    addresses.push(data);
  }
};
