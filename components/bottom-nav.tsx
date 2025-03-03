import Link from "next/link"
import { Home, ChevronRight } from "lucide-react"

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md border-t border-white/10">
      <div className="container flex items-center justify-around h-16 px-4">
        <Link href="/" className="flex flex-col items-center text-white">
          <Home className="w-6 h-6" />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link
          href="/categories"
          className="flex flex-col items-center text-white/70 hover:text-white transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
          <span className="text-xs mt-1">Categories</span>
        </Link>
      </div>
    </div>
  )
}

