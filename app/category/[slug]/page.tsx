import Header from "@/components/header"
import BottomNav from "@/components/bottom-nav"
import { notFound } from "next/navigation"

const categories = {
  mathematics: { name: "Mathematics", description: "Explore the world of numbers and patterns" },
  "machine-learning": { name: "Machine Learning", description: "Discover the power of AI and data" },
  nextjs: { name: "Next.js", description: "Learn about the React framework for production" },
  science: { name: "Science", description: "Uncover the mysteries of the natural world" },
  "web-development": { name: "Web Development", description: "Build the future of the web" },
  physics: { name: "Physics", description: "Understand the fundamental laws of the universe" },
  biology: { name: "Biology", description: "Explore the science of life and living organisms" },
  chemistry: { name: "Chemistry", description: "Discover the composition, structure, and properties of matter" },
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories[params.slug as keyof typeof categories]

  if (!category) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-grow pt-28 pb-20 px-4">
        <h1 className="text-3xl font-bold mb-6">{category.name}</h1>
        <p className="text-lg mb-8">{category.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Here you would map through facts related to this category */}
          <div className="p-6 bg-white/5 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Fact Title</h2>
            <p className="text-sm text-white/70">Brief description of the fact...</p>
          </div>
          {/* More fact cards would be added here */}
        </div>
      </main>
      <BottomNav />
    </div>
  )
}

