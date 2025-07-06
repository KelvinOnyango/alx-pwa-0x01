import { MoviesProps } from "@/interfaces";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const { year, page = 1, genre = "" } = req.body;
    const currentYear = new Date().getFullYear();

    const response = await fetch(
      `https://moviesdatabase.p.rapidapi.com/titles?${
        year ? `year=${year}` : `year=${currentYear}`
      }&sort=year.decr&limit=12&page=${page}${
        genre ? `&genre=${encodeURIComponent(genre)}` : ""
      }`,
      {
        headers: {
          "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
          "X-RapidAPI-Key": process.env.MOVIE_API_KEY || "",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    const movies: MoviesProps[] = data.results || [];

    return res.status(200).json({ movies });
  } catch (error) {
    console.error("Error fetching movies:", error);
    return res.status(500).json({
      error: "Failed to fetch movies",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
