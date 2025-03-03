"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, MessageCircle, Share2, Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button"

// Mock data for videos
const VIDEOS = [
  {
    id: 1,
    title: "Understanding Neural Networks in 60 Seconds",
    author: "AI Expert",
    likes: "24.5K",
    comments: "1.2K",
    category: "Machine Learning",
    description:
      "Neural networks mimic the human brain by using interconnected nodes in layers to process data and make predictions.",
  },
  {
    id: 2,
    title: "The Fibonacci Sequence Explained",
    author: "Math Wizard",
    likes: "18.7K",
    comments: "932",
    category: "Mathematics",
    description:
      "The Fibonacci sequence appears throughout nature and follows the pattern where each number is the sum of the two preceding ones.",
  },
  {
    id: 3,
    title: "Next.js Server Components: The Future",
    author: "Web Dev Pro",
    likes: "32.1K",
    comments: "2.4K",
    category: "Next.js",
    description:
      "Server Components allow you to render components on the server, reducing client-side JavaScript and improving performance.",
  },
  {
    id: 4,
    title: "Quantum Computing Simplified",
    author: "Physics Guru",
    likes: "41.3K",
    comments: "3.7K",
    category: "Science",
    description:
      "Quantum computers use qubits instead of binary bits, allowing them to perform complex calculations exponentially faster.",
  },
]

export default function VideoFeed() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  // Handle video visibility and playback
  useEffect(() => {
    const handleVisibility = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const video = entry.target as HTMLVideoElement
        const index = Number(video.dataset.index)

        if (entry.isIntersecting) {
          setCurrentIndex(index)
          if (isPlaying) {
            video.play().catch(() => {})
          }
        } else {
          video.pause()
        }
      })
    }

    const observer = new IntersectionObserver(handleVisibility, {
      threshold: 0.7,
    })

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video)
    })

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video)
      })
    }
  }, [isPlaying])

  // Toggle play/pause on video click
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
    const currentVideo = videoRefs.current[currentIndex]

    if (currentVideo) {
      if (isPlaying) {
        currentVideo.pause()
      } else {
        currentVideo.play().catch(() => {})
      }
    }
  }

  return (
    <div className="flex flex-col space-y-1 snap-y snap-mandatory h-[calc(100vh-11rem)]">
      <AnimatePresence>
        {VIDEOS.map((video, index) => (
          <motion.div
            key={video.id}
            className="relative h-full w-full snap-start snap-always"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="relative h-full w-full bg-gradient-to-b from-black/20 via-transparent to-black/80 overflow-hidden"
              onClick={togglePlayPause}
            >
              {/* Video placeholder - in a real app, this would be an actual video */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  data-index={index}
                  className="h-full w-full object-cover"
                  loop
                  muted
                  playsInline
                  poster={`/placeholder.svg?height=1080&width=1080&text=${encodeURIComponent(video.title)}`}
                >
                  <source src="#" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Play/Pause indicator */}
                {currentIndex === index && (
                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-opacity ${isPlaying ? "opacity-0" : "opacity-100"}`}
                  >
                    <div className="bg-black/50 rounded-full p-6">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className="text-white text-4xl"
                      >
                        {isPlaying ? "▶️" : "⏸️"}
                      </motion.div>
                    </div>
                  </div>
                )}
              </div>

              {/* Video info overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                  <h3 className="text-xl font-bold">{video.title}</h3>
                  <p className="text-sm text-white/80">
                    @{video.author} · {video.category}
                  </p>
                  <p className="mt-2 text-sm line-clamp-2">{video.description}</p>
                </motion.div>
              </div>
            </div>

            {/* Interaction buttons */}
            <div className="absolute right-4 bottom-20 flex flex-col space-y-6">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20"
                >
                  <Heart className="h-6 w-6" />
                </Button>
                <p className="text-xs text-center mt-1">{video.likes}</p>
              </motion.div>

              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20"
                >
                  <MessageCircle className="h-6 w-6" />
                </Button>
                <p className="text-xs text-center mt-1">{video.comments}</p>
              </motion.div>

              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20"
                >
                  <Share2 className="h-6 w-6" />
                </Button>
                <p className="text-xs text-center mt-1">Share</p>
              </motion.div>

              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20"
                >
                  <Bookmark className="h-6 w-6" />
                </Button>
                <p className="text-xs text-center mt-1">Save</p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

