import Image from "next/image"
import { BadgeAlert, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import MovieInfo from "@/components/movie-info";

interface MovieCardProps {
  title: string
  releaseDate: string
  isAdult: boolean;
  rating: number
  ratingCount: number;
  imageUrl: string;
  originalTitle: string;
  originalLanguage: string;
  overview: string;
  popularity: number;
}

export default function MovieCard({
  title,
  releaseDate,
  isAdult,
  rating,
  ratingCount,
  imageUrl,
  originalTitle,
  originalLanguage,
  overview,
  popularity
}: MovieCardProps) {
  const releaseYear = releaseDate.split("-")[0];

  return (
    <div
      className="group rounded-lg overflow-hidden border bg-card text-card-foreground shadow transition-all hover:shadow-lg">
      <div className="relative aspect-[2/3] overflow-hidden">
        <Image
          src={`${process.env.TMDB_IMAGE_URL}/original/${imageUrl}` || "/placeholder.svg"}
          alt={title}
          fill
          sizes={"1920px; 2880px"}
          className="object-cover transition-transform group-hover:scale-105"
        />
        {isAdult &&
          <div className="absolute top-2 right-2">
            <Badge variant="secondary" className="font-bold px-1 bg-red-500">
              <BadgeAlert className="size-5 text-white"/>
            </Badge>
          </div>
        }
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg line-clamp-1">{title}</h3>
        <div className="flex items-center justify-between mt-2 text-sm text-muted-foreground">
          <span>{releaseYear}</span>
        </div>
        <div className="relative flex items-center mt-3">
          <Star className="size-4 text-yellow-500 mr-1 fill-yellow-500"/>
          <span className="font-medium">{rating.toFixed(1)}</span>
          <span className="ml-2 font-medium text-muted-foreground">({ratingCount})</span>

          <MovieInfo
            title={title}
            originalLanguage={originalLanguage}
            originalTitle={originalTitle}
            releaseYear={releaseYear}
            imageUrl={imageUrl}
            rating={rating}
            ratingCount={ratingCount}
            popularity={popularity}
            overview={overview}/>
        </div>
      </div>
    </div>
  )
}

