import Link from 'next/link';
import { Calculator } from "@/components/custom component/calculator";

export default function DashboardPage() {
  return (
    <div className="min-h-screen p-4">
      <header className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Cloud Migration Cost Calculator Dashboard</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="text-blue-500 hover:underline">Home</Link></li>
            <li><Link href="/calculator" className="text-blue-500 hover:underline">Cost Calculator</Link></li>
            <li><Link href="/reports" className="text-blue-500 hover:underline">Reports</Link></li>
            <li><Link href="/chart" className="text-blue-500 hover:underline">Price Comparison Chart</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Calculator />
      </main>
    </div>
  );
}
