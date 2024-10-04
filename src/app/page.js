import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SignUpButton } from "@/components/SignUpButton"
import { FrameIcon, CropIcon } from '@radix-ui/react-icons'

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center justify-center">
          <CloudIcon className="h-6 w-6" />
          <span className="sr-only">Cloud Migration Cost Calculator</span>
        </Link>
        <nav className="flex gap-4 sm:gap-6">
          <SignUpButton />
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: "url('/brio-banner.svg')" }}>
          <div className="absolute inset-0 bg-white bg-opacity-70"></div>
          <div className="container px-4 md:px-6 flex flex-col items-center justify-center text-center space-y-6 relative z-10">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-black">
              Cloud Migration Cost Calculator
            </h1>
            <p className="max-w-[700px] text-black md:text-xl">
              Estimate the costs of migrating your infrastructure to the cloud with our easy-to-use calculator.
            </p>
            <Link
              href="/calculator"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary text-white px-8 text-sm font-medium shadow transition-colors hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Get Started
            </Link>
          </div>
        </section>
        {/* Features section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Features</h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                Our cloud migration cost calculator provides a comprehensive analysis to help you make informed
                decisions.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-background rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <ServerIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold">Server Estimation</h3>
                </div>
                <p className="text-muted-foreground">
                  Easily input the number of servers you need to migrate and get an accurate cost estimate.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <StoreIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold">Storage Estimation</h3>
                </div>
                <p className="text-muted-foreground">
                  Specify your storage needs in TB and we'll calculate the associated cloud storage costs.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <NetworkIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold">Network Estimation</h3>
                </div>
                <p className="text-muted-foreground">
                  Input your network bandwidth requirements in Mbps and we'll factor that into the cost analysis.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <UsersIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold">User Estimation</h3>
                </div>
                <p className="text-muted-foreground">
                  Provide the number of users you need to support and we'll incorporate that into the cost breakdown.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <ContrastIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold">Cost Comparison</h3>
                </div>
                <p className="text-muted-foreground">
                  Compare the estimated costs across the major cloud providers to find the best fit for your needs.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <SplitIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold">Detailed Breakdown</h3>
                </div>
                <p className="text-muted-foreground">
                  Get a detailed breakdown of the costs for compute, storage, and networking to understand the full
                  picture.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Pricing section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Pricing</h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                Our cloud migration cost calculator is free to use. Get started today and take the guesswork out of your
                cloud migration.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-background shadow-md">
                <CardHeader>
                  <CardTitle>AWS</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div>
                      <h3 className="font-semibold">Compute</h3>
                      <p>$1,200/month</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Storage</h3>
                      <p>$500/month</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Networking</h3>
                      <p>$300/month</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Total</h3>
                      <p>$2,000/month</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-background shadow-md">
                <CardHeader>
                  <CardTitle>Azure</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div>
                      <h3 className="font-semibold">Compute</h3>
                      <p>$1,100/month</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Storage</h3>
                      <p>$550/month</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Networking</h3>
                      <p>$350/month</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Total</h3>
                      <p>$2,000/month</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-background shadow-md">
                <CardHeader>
                  <CardTitle>Google Cloud</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div>
                      <h3 className="font-semibold">Compute</h3>
                      <p>$1,000/month</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Storage</h3>
                      <p>$600/month</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Networking</h3>
                      <p>$400/month</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Total</h3>
                      <p>$2,000/month</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Cloud Migration Cost Calculator. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
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

function ServerIcon(props) {
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
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
  )
}

function StoreIcon(props) {
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
      <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
      <path d="M2 7h20" />
      <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
    </svg>
  )
}

function NetworkIcon(props) {
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
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
      <path d="M12 12V8" />
    </svg>
  )
}

function UsersIcon(props) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function ContrastIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 18a6 6 0 0 0 0-12v12z" />
    </svg>
  )
}

function SplitIcon(props) {
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
      <path d="M16 3h5v5" />
      <path d="M8 3H3v5" />
      <path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3" />
      <path d="m15 9 6-6" />
    </svg>
  )
}