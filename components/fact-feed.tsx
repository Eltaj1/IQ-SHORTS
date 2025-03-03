"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

// Extended mock data for facts, quotes, and stories
const CONTENT = [
  {
    id: 1,
    type: "fact",
    title: "Neural Networks Explained",
    category: "Machine Learning",
    description:
      "Neural networks mimic the human brain by using interconnected nodes in layers to process data and make predictions. They form the backbone of many modern AI systems.",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop",
  },
  {
    id: 2,
    type: "quote",
    author: "Albert Einstein",
    quote: "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
    imageUrl: "https://images.unsplash.com/photo-1621779055172-f76611adeb6d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    type: "fact",
    title: "The Fibonacci Sequence",
    category: "Mathematics",
    description:
      "The Fibonacci sequence appears throughout nature and follows the pattern where each number is the sum of the two preceding ones: 0, 1, 1, 2, 3, 5, 8, 13, 21... It's found in flower petals, pinecones, and even galaxies!",
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    type: "story",
    title: "The Birth of Artificial Intelligence",
    description:
      "The concept of artificial intelligence dates back to ancient myths of mechanical men and artificial beings. However, the field of AI as we know it today began to take shape in the 1950s. In 1956, the term 'Artificial Intelligence' was coined at the Dartmouth Conference, marking the birth of AI as a field of study.",
    imageUrl: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1932&auto=format&fit=crop",
  },
  {
    id: 5,
    type: "fact",
    title: "Quantum Computing Basics",
    category: "Physics",
    description:
      "Quantum computers use qubits instead of binary bits, allowing them to perform complex calculations exponentially faster than classical computers. This technology could revolutionize fields like cryptography and drug discovery.",
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 6,
    type: "quote",
    author: "Marie Curie",
    quote:
      "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
    imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 7,
    type: "story",
    title: "The Origin of Life on Earth",
    description:
      "The story of life on Earth began about 3.8 billion years ago. The first self-replicating molecules emerged in the primordial soup of early Earth's oceans. Over time, these molecules evolved into simple cells, then complex cells, and eventually into the diverse array of life forms we see today.",
    imageUrl: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2072&auto=format&fit=crop",
  },
  {
    id: 8,
    type: "fact",
    title: "The Theory of Relativity",
    category: "Physics",
    description:
      "Einstein's Theory of Relativity fundamentally changed our understanding of space and time. It states that the laws of physics are the same for all non-accelerating observers, and that the speed of light is constant in all inertial frames.",
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 9,
    type: "quote",
    author: "Stephen Hawking",
    quote:
      "Remember to look up at the stars and not down at your feet. Try to make sense of what you see and wonder about what makes the universe exist. Be curious.",
    imageUrl: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2022&auto=format&fit=crop",
  },
  {
    id: 10,
    type: "fact",
    title: "The Human Genome Project",
    category: "Biology",
    description:
      "The Human Genome Project was an international scientific research project aimed at determining the sequence of the human genome and identifying and mapping all human genes. It remains one of the greatest feats in exploration.",
    imageUrl: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 11,
    type: "story",
    title: "The Renaissance: A Rebirth of Knowledge",
    description:
      "The Renaissance, meaning 'rebirth' in French, was a period of cultural, artistic, political, and economic revival following the Middle Ages. Beginning in Italy in the 14th century, it spread across Europe and marked the transition from medieval to modern times, fostering great advances in art, science, and philosophy.",
    imageUrl: "https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 12,
    type: "fact",
    title: "The Importance of Cybersecurity",
    category: "Technology",
    description:
      "Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. As our world becomes increasingly connected, the need for robust cybersecurity measures has never been more critical.",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 13,
    type: "quote",
    author: "Nikola Tesla",
    quote: "The present is theirs; the future, for which I really worked, is mine.",
    imageUrl: "https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: 14,
    type: "story",
    title: "The Industrial Revolution",
    description:
      "The Industrial Revolution, which began in Britain in the late 18th century, marked a major turning point in history. This period saw the transition from hand production methods to machines, new chemical manufacturing and iron production processes, improved efficiency of water power, the increasing use of steam power, and the development of machine tools.",
    imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop",
  },
  {
    id: 15,
    type: "fact",
    title: "The Blockchain Revolution",
    category: "Technology",
    description:
      "Blockchain is a decentralized, distributed ledger technology that underpins cryptocurrencies like Bitcoin. Its potential applications extend far beyond finance, into areas like supply chain management and voting systems.",
    imageUrl: "https://images.unsplash.com/photo-1621579943558-e7b3d4714f14?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 16,
    type: "quote",
    author: "Ada Lovelace",
    quote:
      "The Analytical Engine has no pretensions whatever to originate anything. It can do whatever we know how to order it to perform.",
    imageUrl: "https://images.unsplash.com/photo-1581089781785-603411fa81e5?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 17,
    type: "story",
    title: "The Space Race",
    description:
      "The Space Race was a 20th-century competition between two Cold War rivals, the Soviet Union and the United States, for supremacy in spaceflight capability. It had its origins in the missile-based nuclear arms race between the two nations following World War II. The technological superiority required for such supremacy was seen as necessary for national security, and symbolic of ideological superiority.",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
  },
  {
    id: 18,
    type: "fact",
    title: "The Mysteries of Dark Matter",
    category: "Physics",
    description:
      "Dark matter is a hypothetical form of matter thought to account for approximately 85% of the matter in the universe. Its existence would explain a number of otherwise puzzling astronomical observations.",
    imageUrl: "https://images.unsplash.com/photo-1462332420958-a05d1e002413?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 19,
    type: "quote",
    author: "Carl Sagan",
    quote: "Somewhere, something incredible is waiting to be known.",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
  },
  {
    id: 20,
    type: "story",
    title: "The Evolution of the Internet",
    description:
      "The Internet's origins can be traced back to the 1960s when the US Department of Defense created ARPANET. This network of computers was designed to share information and withstand a nuclear attack. In the 1990s, Tim Berners-Lee invented the World Wide Web, which made the Internet accessible to everyone. Today, the Internet connects billions of devices worldwide, transforming how we communicate, work, and live.",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
  },
]

export default function FactFeed() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentIndex(Number(entry.target.getAttribute("data-index")))
          }
        })
      },
      { threshold: 0.7 },
    )

    const children = container.children
    for (let i = 0; i < children.length; i++) {
      observer.observe(children[i])
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="h-screen overflow-y-auto snap-y snap-mandatory hide-scrollbar">
      <AnimatePresence initial={false}>
        {CONTENT.map((item, index) => (
          <motion.div
            key={item.id}
            data-index={index}
            className="h-screen w-full snap-start snap-always"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-full w-full overflow-hidden">
              {/* Background image with overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 10, ease: "linear" }}
              >
                <Image
                  src={item.imageUrl || "/placeholder.svg"}
                  alt={item.title || item.quote || "Background"}
                  fill
                  className="object-cover opacity-50 grayscale"
                  sizes="100vw"
                  priority={index === 0}
                />
              </motion.div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-12">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="max-w-lg mx-auto text-center"
                >
                  {item.type === "fact" && (
                    <>
                      <motion.span
                        className="inline-block px-3 py-1 mb-4 text-xs font-semibold bg-white/10 rounded-full"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                      >
                        {item.category}
                      </motion.span>
                      <motion.h2
                        className="text-2xl md:text-3xl font-bold mb-4"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                      >
                        {item.title}
                      </motion.h2>
                      <motion.p
                        className="text-sm md:text-base lg:text-lg text-white/80 mb-6"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                      >
                        {item.description}
                      </motion.p>
                    </>
                  )}
                  {item.type === "quote" && (
                    <>
                      <motion.p
                        className="text-xl md:text-2xl lg:text-3xl font-italic mb-4"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                      >
                        "{item.quote}"
                      </motion.p>
                      <motion.p
                        className="text-sm md:text-base lg:text-lg text-white/80"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                      >
                        - {item.author}
                      </motion.p>
                    </>
                  )}
                  {item.type === "story" && (
                    <>
                      <motion.h2
                        className="text-2xl md:text-3xl font-bold mb-4"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                      >
                        {item.title}
                      </motion.h2>
                      <motion.p
                        className="text-sm md:text-base lg:text-lg text-white/80 mb-6"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                      >
                        {item.description}
                      </motion.p>
                    </>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

