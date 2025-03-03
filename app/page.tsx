import FactFeed from "@/components/fact-feed"
import Header from "@/components/header"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-grow">
        <FactFeed />
      </main>
    </div>
  )
}

