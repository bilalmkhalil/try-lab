import Link from "next/link";
import { ClipboardCheck, BookOpen, Plus } from "lucide-react";
import { Inter, Outfit } from 'next/font/google';

// Font setup
const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export default function Home() {
  return (
    <main className={`min-h-screen bg-gradient-to-br from-black to-zinc-900 text-white ${outfit.variable} ${inter.variable} font-sans`}>
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className={`text-5xl md:text-6xl font-outfit font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400`}>
            TryLab Sandbox
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-inter font-light">
            My personal playground for experimenting with the latest libraries
            and technologies before applying them to real-world projects.
          </p>
        </div>

        {/* Experiments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Yup Form Validation Card */}
          <Link href="/form" className="group">
            <div className="bg-zinc-900/80 p-6 rounded-xl border border-zinc-800 backdrop-blur-sm transition-all duration-300 hover:bg-zinc-800 hover:shadow-lg hover:shadow-white/5 hover:-translate-y-1">
              <div className="mb-4 text-white bg-white/10 p-3 w-fit rounded-lg">
                <ClipboardCheck size={24} />
              </div>
              <h2 className="text-xl font-outfit font-bold mb-2 group-hover:text-white transition-colors">
                Yup Form Validation
              </h2>
              <p className="text-gray-400 font-inter">
                Explore schema-based form validation with custom rules and error
                handling
              </p>
            </div>
          </Link>

          {/* Rich Text Editor Card */}
          <Link href="/editor" className="group">
            <div className="bg-zinc-900/80 p-6 rounded-xl border border-zinc-800 backdrop-blur-sm transition-all duration-300 hover:bg-zinc-800 hover:shadow-lg hover:shadow-white/5 hover:-translate-y-1">
              <div className="mb-4 text-white bg-white/10 p-3 w-fit rounded-lg">
                <BookOpen size={24} />
              </div>
              <h2 className="text-xl font-outfit font-bold mb-2 group-hover:text-white transition-colors">
                Rich Text Editor
              </h2>
              <p className="text-gray-400 font-inter">
                Test advanced text editing capabilities with formatting and
                custom nodes
              </p>
            </div>
          </Link>

          {/* Placeholder for future experiment */}
          <div className="bg-zinc-900/30 p-6 rounded-xl border border-zinc-800/50 backdrop-blur-sm flex flex-col items-center justify-center">
            <div className="mb-4 text-gray-500 bg-gray-500/10 p-3 w-fit rounded-lg">
              <Plus size={24} />
            </div>
            <h2 className="text-xl font-outfit font-bold mb-2 text-gray-500">
              Coming Soon
            </h2>
            <p className="text-gray-500 text-center font-inter">
              More experiments on the way
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
