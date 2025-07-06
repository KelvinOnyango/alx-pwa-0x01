import Button from "@/components/commons/Button";
import Loading from "@/components/commons/Loading";
import MovieCard from "@/components/commons/MovieCard";
import { MoviesProps } from "@/interfaces";
import { useCallback, useEffect, useState } from "react";

const MoviesPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const [year, setYear] = useState<number | null>(null);
  const [genre, setGenre] = useState("All");
  const [movies, setMovies] = useState<MoviesProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchMovies = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/fetch-movies", {
        method: "POST",
        body: JSON.stringify({
          page,
          year,
          genre: genre === "All" ? "" : genre,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error("Failed to fetch movies");

      const { movies } = await response.json();
      setMovies(movies);
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  }, [page, year, genre]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const filteredMovies = movies.filter((movie) =>
    movie.titleText.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#110F17] text-white px-4 md:px-10 lg:px-44 py-16">
      {/* Search and Filters */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Search movies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow border-2 border-[#E2D609] bg-transparent px-4 py-2 rounded-full"
          />

          <select
            value={year || ""}
            onChange={(e) =>
              setYear(e.target.value ? Number(e.target.value) : null)
            }
            className="border-2 border-[#E2D609] bg-transparent px-4 py-2 rounded-full"
          >
            <option value="">All Years</option>
            {Array.from(
              { length: 10 },
              (_, i) => new Date().getFullYear() - i
            ).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            {year ? `${year} ` : ""}
            {genre} Movies
          </h1>

          <div className="flex flex-wrap gap-2">
            {["All", "Action", "Comedy", "Drama", "Horror"].map((g) => (
              <button
                key={g}
                onClick={() => setGenre(g)}
                className={`px-4 py-2 rounded-full ${
                  genre === g
                    ? "bg-[#E2D609] text-black"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Movies Grid */}
      {loading ? (
        <Loading />
      ) : filteredMovies.length > 0 ? (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {filteredMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.titleText.text}
                posterImage={movie.primaryImage?.url}
                releaseYear={movie.releaseYear?.year}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              title="Previous"
              action={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
            />
            <span className="flex items-center px-4">{page}</span>
            <Button title="Next" action={() => setPage((p) => p + 1)} />
          </div>
        </>
      ) : (
        <div className="text-center py-16">
          <p className="text-xl">No movies found. Try different filters.</p>
        </div>
      )}
    </div>
  );
};

export default MoviesPage;
