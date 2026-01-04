import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/content/site';

export const metadata = {
  title: 'About — Mahmoud Elsayed',
  description: 'About Mahmoud Elsayed: neuroscientist, writer, and researcher.',
};

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-primary-700 to-accent-700 bg-clip-text text-transparent mb-6">
            About
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
          <div className="relative aspect-[4/5]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-accent-200 rounded-2xl transform -rotate-2"></div>
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/Mahmoud2.jpg"
                alt="Mahmoud Elsayed"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-gray-800 mb-6 font-light">
              I am a neuroscientist by training, with a background in engineering and computational methods, currently completing a PhD in neuroscience. My work is inherently interdisciplinary: I draw on neuroscience, engineering, statistics, and machine learning to study cognition, decision-making, and mental health.
            </p>
            <p className="text-xl leading-relaxed text-gray-800 mb-6 font-light">
              Alongside my academic research, I write for a broader audience about epistemology, meaning, and the limits of human understanding. I am particularly interested in how scientific knowledge intersects with philosophy, culture, and everyday life—and in how intellectual rigour can coexist with existential honesty.
            </p>
            <p className="text-xl leading-relaxed text-gray-800 font-light">
              Rather than treating research, writing, and applied work as separate identities, I see them as complementary ways of engaging with the same intellectual core: understanding the human mind and reducing avoidable suffering through clearer thinking, better evidence, and thoughtful application.
            </p>
          </div>
        </div>

        <div className="mb-12 bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          <h2 className="text-3xl font-semibold text-gray-900 mb-10">
            Current Positions & Affiliations
          </h2>
          <div className="space-y-6">
            {siteConfig.positions.map((position, index) => (
              <div
                key={index}
                className="relative pl-8 pb-6 border-l-2 border-primary-300 last:border-l-0 last:pb-0"
              >
                <div className="absolute left-0 top-0 w-4 h-4 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full -translate-x-[9px] shadow-lg"></div>
                <p className="text-lg text-gray-800 leading-relaxed font-light">
                  {position}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Link
            href={siteConfig.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-full hover:from-primary-700 hover:to-accent-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105"
          >
            Curriculum Vitae (PDF)
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
