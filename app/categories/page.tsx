import Header from "@/components/header"
import BottomNav from "@/components/bottom-nav"
import Link from "next/link"

const categories = [
  { name: "Mathematics", description: "Explore the world of numbers and patterns" },
  { name: "Machine Learning", description: "Discover the power of AI and data" },
  { name: "Next.js", description: "Learn about the React framework for production" },
  { name: "Science", description: "Uncover the mysteries of the natural world" },
  { name: "Web Development", description: "Build the future of the web" },
  { name: "Physics", description: "Understand the fundamental laws of the universe" },
  { name: "Biology", description: "Explore the science of life and living organisms" },
  { name: "Chemistry", description: "Discover the composition, structure, and properties of matter" },
]

export default function CategoriesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-grow pt-28 pb-20 px-4">
        <h1 className="text-3xl font-bold mb-6">Categories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/category/${category.name.toLowerCase().replace(" ", "-")}`}
              className="block p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
            >
              <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
              <p className="text-sm text-white/70">{category.description}</p>
            </Link>
          ))}
        </div>
      </main>
      <BottomNav />
    </div>
  )
}

