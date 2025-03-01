import Image from "next/image"
import { Star, BadgeAlert, BadgeInfo, ChevronRight, ChartNoAxesCombined, Award } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

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
  backdrop_path: string;
  popularity: number;
  genresIds: number[];
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
  backdrop_path,
  popularity,
  genresIds
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
          <span className="ml-2 font-medium text-gray-500">({ratingCount})</span>
          <div className="absolute size-6 bottom-0.5 right-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" className="p-1 h-6 rounded-full">
                  <BadgeInfo className="size-6 text-card-foreground"/>
                </Button>
              </DialogTrigger>
              <DialogContent className="md:max-w-fit sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle className="mb-1">
                    <div className="flex flex-col justify-between gap-1">
                      <div className="flex">
                        <span className="text-card-foreground mr-0.5">{title}</span>
                        <ChevronRight className="h-5"/>
                      </div>
                      <div className="flex items-center gap-x-1 h-4">
                        <Badge variant="secondary" className="p-1.5 h-4 rounded-md">{originalLanguage}</Badge>
                        <span className="text-xs text-card-foreground/50">{originalTitle}</span>
                        <Separator orientation="vertical" className="ml-1 bg-card-foreground/50"/>
                        <span className="font-medium text-sm">{releaseYear}</span>
                      </div>
                    </div>
                  </DialogTitle>
                  <DialogDescription>
                    <div className="flex justify-between gap-1">
                      <div
                        className="relative aspect-[2/3] overflow-hidden min-w-[125px] min-h-[187.5px] rounded-md mr-2">
                        <Image
                          src={`${process.env.TMDB_IMAGE_URL}/original/${imageUrl}` || "/placeholder.svg"}
                          alt={title}
                          fill
                          sizes={"1920px; 2880px"}
                          className="object-cover transition-transform"
                        />
                      </div>
                      <div className="flex flex-col">
                        <div className="flex flex-col mb-3">
                          <div className="flex items-center font-medium gap-x-3">
                            <div className="flex items-center gap-x-1">
                              <Star className="size-4 text-yellow-500 fill-yellow-500"/>
                              <span>{rating.toFixed(1)}/10</span>
                            </div>
                            <div className="flex items-center gap-x-1">
                              <Award className="size-4 text-white"/>
                              <span>{ratingCount}</span>
                            </div>
                            <div className="flex items-center gap-x-1">
                              <ChartNoAxesCombined className="size-4 text-green-500"/>
                              <span>{popularity}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          {overview}
                        </div>
                      </div>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  )
}

