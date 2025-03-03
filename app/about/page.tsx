import Header from "@/components/header"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="pt-28 pb-20 px-4">
        <center>
        <h1 className="text-3xl font-bold mb-6">About</h1>
        <p className="text-lg mb-4">
  Want to learn more about IQFacts and how it can boost your brainpower? 
  Let’s dive in! IQFacts is your go-to platform for short, engaging facts 
  that make learning fun and easy.
</p>

<p className="text-lg mb-4">
  How does it work? We deliver bite-sized facts packed with fascinating 
  insights. Think of it as a daily workout for your mind—quick, effective, and always interesting.
</p>

<p className="text-lg mb-4">
  We created IQFacts with one goal in mind: to help you sharpen your thinking, 
  learn faster, and feel more confident every day.
</p>

        </center>
      </main>
    </div>
  )
}