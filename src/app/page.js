import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowTopRightIcon } from '@radix-ui/react-icons'
import { SignUpButton } from "@/components/SignUpButton"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-30 flex h-14 items-center justify-between gap-4 border-b bg-background px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <CloudIcon className="h-6 w-6" />
          <span className="hidden sm:inline">Cloud Migration Cost Calculator</span>
          <span className="sm:hidden">Cost Calculator</span>
        </Link>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li><Link href="/calculator" className="text-primary hover:text-primary-foreground">Calculator</Link></li>
            <li><SignUpButton /></li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4">
            Cloud Migration Cost Calculator
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
            Estimate your cloud migration costs easily and accurately.
          </p>
          <Link href="/calculator">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Get Started
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}

function CloudIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  )
}

// ... (include all the icon components at the end of the file)
