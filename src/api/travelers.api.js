const BASE_URL = "https://dummyjson.com/users";

export const getTravelers = async () => {
  const res = await fetch(`${BASE_URL}?limit=100`);

  if (!res.ok) {
    throw new Error("Failed to load travelers");
  }

  const data = await res.json();

  return data.users;
};

export const getTravelerById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);

  if (!res.ok) {
    throw new Error("Failed to load traveler");
  }

  return res.json();
};
