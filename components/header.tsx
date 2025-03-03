import Link from "next/link"
import { TrendingUp } from "lucide-react"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container flex items-center justify-between h-16 px-4">
        <Link href="/" className="flex items-center space-x-2">
          <TrendingUp className="w-6 h-6 text-white" />
          <span className="font-bold text-xl">IQFacts</span>
        </Link>
        <Link href="/about" className="flex items-center space-x-2">
        <span className="font-bold">About</span>
        </Link>
      </div>
    </header>
  )
}

