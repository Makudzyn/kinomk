import { Film } from "lucide-react"
import LogoLink from "@/components/footer/logo-link";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Film className="h-6 w-6 text-primary"/>
              <span className="text-xl font-bold">MovieMK</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              MovieBanner provides information about movies, including ratings, release dates, and age
              restrictions. Our goal is to help you find interesting movies to watch.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Powered by</h3>
            <div className="flex flex-wrap gap-4">
              <LogoLink variant="tmdb"/>
              <LogoLink variant="vercel"/>
              <LogoLink variant="v0"/>
              <LogoLink variant="github"/>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} MovieMK. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

