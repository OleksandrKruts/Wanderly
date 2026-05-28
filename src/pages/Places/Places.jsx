import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { places } from "../../data/places";
import PlaceCard from "../../components/Card/PlaceCard";

import "./places.css";

const Places = () => {
  const [placesData] = useState(places);
  const [visibleCount, setVisibleCount] = useState(8);

  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [sortBy, setSortBy] = useState("default");

  const navigate = useNavigate();

  useEffect(() => {
    setVisibleCount(8);
  }, [search, typeFilter, sortBy]);

  const filteredPlaces = placesData.filter((place) => {
    const matchesSearch = place.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesType =
      typeFilter === "all" ||
      place.type.toLowerCase() === typeFilter.toLowerCase();

    return matchesSearch && matchesType;
  });

  const sortedPlaces = [...filteredPlaces].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  const isFiltering =
    search !== "" || typeFilter !== "all" || sortBy !== "default";

  const visiblePlaces = isFiltering
    ? sortedPlaces
    : sortedPlaces.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <div className="place-page">
      <h1 className="place-title">Explore Places</h1>

      <div className="place-controls">
        <input
          className="place-search"
          type="text"
          placeholder="Search places..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <select
          className="place-filter"
          value={typeFilter}
          onChange={(event) => setTypeFilter(event.target.value)}
        >
          <option value="all">All</option>
          <option value="beach">Beach</option>
          <option value="mountain">Mountain</option>
          <option value="city">City</option>
          <option value="nature">Nature</option>
        </select>

        <select
          className="place-sort"
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
        >
          <option value="default">Default</option>
          <option value="price-low">Price ↑</option>
          <option value="price-high">Price ↓</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      <div className="place-grid">
        {visiblePlaces.map((place) => (
          <PlaceCard
            key={place.id}
            place={place}
            onClick={() => navigate(`/places/${place.id}`, { state: place })}
          />
        ))}
      </div>

      {/* SHOW MORE */}
      {!isFiltering && visibleCount < placesData.length && (
        <div className="place-show-more-wrapper">
          <button className="place-btn place-show-btn" onClick={loadMore}>
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Places;
