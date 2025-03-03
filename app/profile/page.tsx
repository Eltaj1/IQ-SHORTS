import Header from "@/components/header"
import BottomNav from "@/components/bottom-nav"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="pt-28 pb-20 px-4">
        <h1 className="text-3xl font-bold mb-6">Profile</h1>
        <p className="text-lg">Your profile information and saved facts will appear here.</p>
        {/* Add profile content here */}
      </main>
      <BottomNav />
    </div>
  )
}

