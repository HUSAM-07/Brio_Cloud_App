import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center justify-center">
          <CloudIcon className="h-6 w-6" />
          <span className="sr-only md:not-sr-only md:ml-2 text-sm font-medium">Cloud Migration Cost Calculator</span>
        </Link>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="/reports" className="text-sm font-medium hover:underline underline-offset-4">
            About
          </Link>
          <Link href="/chart" className="text-sm font-medium hover:underline underline-offset-4">
            Price Comparison
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-[#4ca1af] to-[#c4e0e5]">
          <div className="container px-4 md:px-6 flex flex-col items-center justify-center text-center space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Cloud Migration Cost Calculator
            </h1>
            <p className="max-w-[700px] text-sm sm:text-base md:text-lg text-muted-foreground">
              Estimate the costs of migrating your infrastructure to the cloud with our easy-to-use calculator.
            </p>
            <Link
              href="/dashboard"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 sm:px-6 md:px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Get Started
            </Link>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <CardTitle>Easy to Use</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base">Our calculator is designed for simplicity, allowing you to quickly estimate your cloud migration costs.</p>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <CardTitle>Accurate Estimates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base">Get precise cost estimates based on real-time data from major cloud providers.</p>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <CardTitle>Compare Providers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base">Compare costs across different cloud providers to find the best solution for your needs.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col sm:flex-row justify-between items-center py-6 w-full px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground mb-4 sm:mb-0">
          &copy; 2024 Cloud Migration Cost Calculator. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Privacy Policy
          </Link>
        </nav>
      </footer>
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
