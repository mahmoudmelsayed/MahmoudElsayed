import Link from 'next/link';
import { siteConfig } from '@/content/site';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-primary-800 bg-gradient-to-r from-primary-700 to-accent-700 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-sm text-white font-light">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white hover:text-gray-200 transition-colors font-medium"
            >
              LinkedIn
            </Link>
            <Link
              href={siteConfig.social.googleScholar}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white hover:text-gray-200 transition-colors font-medium"
            >
              Google Scholar
            </Link>
            <Link
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white hover:text-gray-200 transition-colors font-medium"
            >
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
