import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-secondary border-t">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
              About Brio Tech - Cloud Services
            </h3>
            <p className="text-sm text-muted-foreground">
              With Brio, upgrading to the next level of technology is an authentic, efficient, and joyous process. Our Cloud Migration Cost Calculator helps businesses estimate and compare costs for migrating to various cloud platforms.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
              Author
            </h3>
            <p className="text-sm text-muted-foreground">
              Created by Mohammed Husamuddin
            </p>
            <Link 
              href="https://www.mohammedhusamuddin.me/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-primary hover:text-primary-foreground"
            >
              Visit Author's Profile
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-4">
          <p className="text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} Brio Tech - Cloud Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}