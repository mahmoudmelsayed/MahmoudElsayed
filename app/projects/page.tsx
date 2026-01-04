import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/content/site';

export const metadata = {
  title: 'Projects & Initiatives — Mahmoud Elsayed',
  description: 'Educational initiatives and applied projects, including CIVI.',
};

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-primary-700 to-accent-700 bg-clip-text text-transparent mb-16">
          Projects & Initiatives
        </h1>

        {/* CIVI Section */}
        <section className="mb-20 bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          {/* Header with Logo Only */}
          <div className="flex justify-center mb-10">
            <div className="relative w-48 h-48 md:w-56 md:h-56">
              <Image
                src="/images/Civi.png"
                alt="CIVI Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto prose prose-lg max-w-none mb-12">
            <p className="text-xl leading-relaxed text-gray-800 mb-6 font-light">
              CIVI is an educational initiative focused on strengthening critical thinking, intellectual humility, and independent judgment. The project is grounded in the belief that cultivating rational inquiry and curiosity is essential for both individual flourishing and collective progress.
            </p>
            <p className="text-xl leading-relaxed text-gray-800 mb-6 font-light">
              The initiative aims to:
            </p>
            <ul className="list-none space-y-4 text-lg text-gray-800 mb-8 ml-0">
              <li className="flex items-start">
                <span className="mr-4 text-primary-600 text-2xl leading-none font-bold">→</span>
                <span className="font-light">Promote careful reasoning and evidence-based thinking</span>
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-primary-600 text-2xl leading-none font-bold">→</span>
                <span className="font-light">Encourage curiosity across disciplines</span>
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-primary-600 text-2xl leading-none font-bold">→</span>
                <span className="font-light">Support educational approaches that value scepticism without cynicism</span>
              </li>
            </ul>
            <p className="text-xl leading-relaxed text-gray-800 font-light">
              CIVI represents an applied extension of my broader academic and philosophical interests, translating ideas about cognition, reasoning, and knowledge into practical educational efforts.
            </p>
          </div>

          {/* Resources Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              Resources
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {siteConfig.resources.map((resource, index) => (
                <Link
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-8 border-2 border-gray-200 rounded-2xl hover:border-primary-400 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 hover:-translate-y-1"
                >
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
                    {resource.title}
                  </h4>
                  {resource.description && (
                    <p className="text-gray-600 mb-4 leading-relaxed font-light">
                      {resource.description}
                    </p>
                  )}
                  <div className="flex items-center text-sm text-primary-600 font-medium group-hover:text-primary-700 transition-colors">
                    <span>View PDF</span>
                    <svg
                      className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
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
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
