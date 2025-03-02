import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Award, BadgeInfo, ChartNoAxesCombined, ChevronRight, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

interface MovieInfoProps {
  title: string,
  originalLanguage: string,
  originalTitle: string,
  releaseYear: string,
  imageUrl: string,
  rating: number,
  ratingCount: number,
  popularity: number,
  overview: string
}

export default function MovieInfo({
  title,
  originalLanguage,
  originalTitle,
  releaseYear,
  imageUrl,
  rating,
  ratingCount,
  popularity,
  overview
}: MovieInfoProps) {
  return (
    <div className="absolute size-6 bottom-0.5 right-2">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost" className="p-1 h-6 rounded-full">
            <BadgeInfo className="size-6 text-card-foreground"/>
          </Button>
        </DialogTrigger>
        <DialogContent className="md:max-w-[645px] sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="mb-1">
              <div className="flex flex-col justify-between gap-1">
                <div className="flex">
                  <span className="text-card-foreground mr-0.5">{title}</span>
                  <ChevronRight className="h-5"/>
                </div>
                <div className="flex items-center gap-x-1 h-4">
                  <Badge variant="default" className="p-1 h-4 rounded-md">{originalLanguage.toUpperCase()}</Badge>
                  <span className="text-xs text-muted-foreground">{originalTitle}</span>
                  <Separator orientation="vertical" className="ml-1 bg-foreground w-[1.15px]"/>
                  <span className="font-medium text-sm text-secondary-foreground">{releaseYear}</span>
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
                    <div className="flex items-center font-medium gap-x-3 text-card-foreground">
                      <div className="flex items-center gap-x-1">
                        <Star className="size-4 text-yellow-500 fill-yellow-500"/>
                        <span>{rating.toFixed(1)}/10</span>
                      </div>
                      <div className="flex items-center gap-x-1">
                        <Award className="size-4 fill-yellow-700  text-secondary-foreground"/>
                        <span>{ratingCount}</span>
                      </div>
                      <div className="flex items-center gap-x-1">
                        <ChartNoAxesCombined className="size-4 text-green-500"/>
                        <span>{popularity}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start text-wrap">
                    {overview}
                  </div>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}