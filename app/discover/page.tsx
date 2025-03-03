import Header from "@/components/header"
import BottomNav from "@/components/bottom-nav"

export default function DiscoverPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="pt-28 pb-20 px-4">
        <h1 className="text-3xl font-bold mb-6">Discover</h1>
        <p className="text-lg">Explore new topics and trending facts here.</p>
        {/* Add more content for the Discover page */}
      </main>
      <BottomNav />
    </div>
  )
}

