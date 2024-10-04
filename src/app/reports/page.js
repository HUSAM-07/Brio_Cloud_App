import Link from 'next/link';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';

export default function ReportsPage() {
  return (
    <div className="min-h-screen p-4 bg-background text-foreground">
      <h1 className="text-2xl font-bold mb-4">Cloud Migration Cost Calculator</h1>
      <nav className="mb-4">
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-primary hover:text-primary-foreground flex items-center">
              <ArrowTopRightIcon className="mr-1" /> Dashboard
            </Link>
          </li>
          <li>
            <Link href="/calculator" className="text-primary hover:text-primary-foreground flex items-center">
              <ArrowTopRightIcon className="mr-1" /> Cost Calculator
            </Link>
          </li>
          <li>
            <Link href="/chart" className="text-primary hover:text-primary-foreground flex items-center">
              <ArrowTopRightIcon className="mr-1" /> Price Comparison Chart
            </Link>
          </li>
        </ul>
      </nav>
      <div className="prose max-w-none">
        <h2 className="text-xl font-semibold mb-4">Report on Cloud Migrations</h2>
        <p>
          Cloud migrations involve transferring data, applications, and services from on-premises infrastructure to cloud-based platforms such as Microsoft Azure, Amazon Web Services (AWS), or Google Cloud Platform (GCP). This process is essential for businesses looking to enhance scalability, reduce costs, and improve operational efficiency.
        </p>
        <h3 className="text-lg font-semibold mt-6 mb-2">Key Considerations for Cloud Migration</h3>
        <ul>
          <li><strong>Cost Analysis:</strong> Utilizing tools like CloudPrice.net allows organizations to compare pricing and specifications across different cloud providers. This site provides insights into Azure Virtual Machines, AWS EC2, and GCP instances, helping users identify the best pricing options based on their needs.</li>
          <li><strong>Performance Optimization:</strong> The price/performance analysis feature on CloudPrice.net aids in determining the most cost-effective solutions without compromising performance. This is crucial for businesses that require high availability and responsiveness.</li>
          <li><strong>Geographical Considerations:</strong> The 'Best Price Region' feature enables users to find the most economical regions for deploying their cloud resources. This can significantly impact overall migration costs.</li>
          <li><strong>Spot Pricing:</strong> The introduction of spot price history for Azure, AWS, and GCP allows organizations to track pricing trends over time, enabling more informed decisions regarding resource allocation.</li>
        </ul>
        <h3 className="text-lg font-semibold mt-6 mb-2">Best Practices for Successful Migration</h3>
        <ul>
          <li><strong>Assessment:</strong> Evaluate current workloads and determine which applications are suitable for migration.</li>
          <li><strong>Planning:</strong> Develop a comprehensive migration strategy that includes timelines, resource allocation, and risk management.</li>
          <li><strong>Execution:</strong> Implement the migration in phases to minimize disruptions and allow for testing at each stage.</li>
          <li><strong>Monitoring and Optimization:</strong> Post-migration, continuously monitor performance and costs to optimize resources effectively.</li>
        </ul>
      </div>
    </div>
  );
}
