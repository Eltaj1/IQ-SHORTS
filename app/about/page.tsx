import Header from "@/components/header"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="pt-28 pb-20 px-4">
        <h1 className="text-3xl font-bold mb-6">About</h1>
        <p className="text-lg">Learn more about IQFacts and how it works.</p>
        <p className="text-lg">This is a demo project for the Next.js course on IQFacts.</p>
      </main>
    </div>
  )
}