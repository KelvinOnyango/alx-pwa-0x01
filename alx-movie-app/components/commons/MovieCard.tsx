import { MovieProps } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

const MovieCard: React.FC<MovieProps> = ({
  id,
  title,
  posterImage,
  releaseYear,
}) => {
  return (
    <Link href={`/movies/${id}`} className="group">
      <div className="h-[563px] transition-transform duration-300 hover:scale-105">
        <div className="relative h-[430px] w-full overflow-hidden rounded-md">
          <Image
            src={posterImage || "/placeholder-movie.jpg"}
            alt={title}
            fill
            className="object-cover transition-opacity duration-300 group-hover:opacity-80"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="flex justify-between py-4">
          <p className="text-xl font-bold truncate max-w-[70%]">{title}</p>
          <p className="text-xl text-[#E2D609]">{releaseYear}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
