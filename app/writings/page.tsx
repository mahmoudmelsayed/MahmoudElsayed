import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/content/site';

export const metadata = {
  title: 'Research & Writings — Mahmoud Elsayed',
  description: 'Academic publications, books, and non-academic writing by Mahmoud Elsayed.',
};

export default function Writings() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-primary-700 to-accent-700 bg-clip-text text-transparent mb-16">
          Research & Writings
        </h1>

        {/* Academic Publications */}
        <section id="academic" className="mb-24 scroll-mt-20 bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          <div className="mb-8">
            <h2 className="text-4xl font-semibold text-gray-900 mb-6">
              Academic Publications
            </h2>
            <p className="text-xl text-gray-800 mb-10 leading-relaxed font-light max-w-3xl">
              My peer-reviewed research focuses on neuroscience, decision-making, and cognitive processes. 
              You can find a complete list of publications on Google Scholar.
            </p>
          </div>
          <Link
            href={siteConfig.social.googleScholar}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 border-2 border-primary-600 text-primary-700 rounded-full hover:bg-gradient-to-r hover:from-primary-600 hover:to-accent-600 hover:text-white transition-all duration-300 font-semibold shadow-md hover:shadow-lg hover:scale-105"
          >
            View on Google Scholar
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
        </section>

        {/* Books & Non-Academic Writing */}
        <section id="books" className="scroll-mt-20">
          <h2 className="text-4xl font-semibold text-gray-900 mb-12">
            Books & Non-Academic Writing
          </h2>

          <div className="space-y-20">
            {siteConfig.books.map((book, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100"
              >
                <div className="grid md:grid-cols-[300px_1fr] gap-10 lg:gap-16 items-start">
                  <div className="relative w-full aspect-[2/3] rounded-2xl overflow-hidden shadow-2xl group">
                    <Image
                      src={book.coverImage}
                      alt={`Cover of ${book.title}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="300px"
                    />
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-gray-900">
                      {book.title}
                    </h3>
                    <p className="text-xl text-gray-800 leading-relaxed font-light">
                      {book.description}
                    </p>
                    <div className="flex flex-wrap gap-4 pt-2">
                      {book.purchaseLink && (
                        <Link
                          href={book.purchaseLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-full hover:from-primary-700 hover:to-accent-700 transition-all duration-300 text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105"
                        >
                          Purchase
                        </Link>
                      )}
                      {book.goodreadsLink && (
                        <Link
                          href={book.goodreadsLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 border-2 border-primary-300 text-primary-700 rounded-full hover:border-primary-500 hover:bg-primary-50 transition-all duration-300 text-sm font-semibold"
                        >
                          Goodreads
                        </Link>
                      )}
                      {book.videoLink && (
                        <Link
                          href={book.videoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 border-2 border-primary-300 text-primary-700 rounded-full hover:border-primary-500 hover:bg-primary-50 transition-all duration-300 text-sm font-semibold"
                        >
                          Watch Video
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
