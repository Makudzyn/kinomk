import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import MovieGrid from "@/components/movie-grid";

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Popular Movies</h1>
        </main>
        <MovieGrid/>
      </div>
    </ThemeProvider>
  )
}
