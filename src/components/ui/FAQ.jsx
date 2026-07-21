import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

export default function FAQ({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div key={item.question} className="rounded-card border border-line bg-white overflow-hidden">
            <button
              className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span className="font-semibold text-[16px] sm:text-[17px] text-ink-primary">{item.question}</span>
              <ChevronDown
                size={20}
                className={`shrink-0 text-ink-muted transition-transform duration-300 ${isOpen ? 'rotate-180 text-accent' : ''}`}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 text-ink-secondary leading-relaxed">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
