
import { fetchMoviesByPopularity } from "@/lib/APIs/TMDB-movies";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";

export default async function Home() {
  const movies = await fetchMoviesByPopularity();
  console.log(movies);
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Popular Movies</h1>
        </main>
      </div>
    </ThemeProvider>
  )
}
