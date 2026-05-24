const BASE_URL = "https://jsonplaceholder.typicode.com/users";

export const getTravelers = async () => {
  const res = await fetch(BASE_URL);

  if (!res.ok) {
    throw new Error("Failed to load travelers");
  }

  return res.json();
};

export const getTravelerById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);

  if (!res.ok) {
    throw new Error("Failed to load traveler");
  }

  return res.json();
};
