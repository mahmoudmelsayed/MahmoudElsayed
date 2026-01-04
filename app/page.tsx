import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Full Width Banner Hero */}
      <section className="relative w-full h-[70vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/Mahmoud1.jpg"
            alt="Mahmoud Elsayed"
            fill
            className="object-cover"
            priority
            quality={90}
            style={{ objectPosition: 'center 33%' }}
          />
          {/* Gradient overlay for text readability - positioned at bottom, not on face */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
        </div>
        
        {/* Name overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 drop-shadow-2xl">
              Mahmoud Elsayed
            </h1>
            <Link
              href="/about"
              className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold text-base shadow-xl hover:shadow-2xl hover:scale-105"
            >
              About Me
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Section with Colorful Background */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-gray-800 mb-8 font-light">
              I work on understanding how the human mind makes decisions, adapts, and sometimes fails—using tools from neuroscience, engineering, and computation. My academic work focuses on brain–behaviour relationships, decision-making, and addiction, while my writing explores the broader philosophical and societal implications of these questions: meaning, knowledge, and how we ought to live in a complex world.
            </p>
            <p className="text-xl leading-relaxed text-gray-800 mb-8 font-light">
              I am interested in problems that sit at the intersection of rigorous empirical science and deep human concern. Some of my work takes the form of peer-reviewed research; other parts take the form of long-form writing, applied projects, and educational initiatives. These are not separate pursuits, but different ways of engaging with the same underlying questions.
            </p>
            <p className="text-xl leading-relaxed text-gray-800 font-light">
              This site serves as a central home for my research, writing, and ongoing projects.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
