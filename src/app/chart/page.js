'use client';

import React, { useState, useEffect } from 'react';
import { Chart } from 'react-charts';
import { fetchCloudData } from "@/lib/cloudData";
import Link from "next/link";
import { ArrowTopRightIcon } from '@radix-ui/react-icons';

export default function ChartPage() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const cloudData = await fetchCloudData();
        const formattedData = cloudData.map(instance => ({
          x: instance.numberOfCores,
          y: parseFloat(instance.linuxPrice),
          name: instance.name
        }));
        setData([{ label: 'Instance Prices', data: formattedData }]);
      } catch (err) {
        setError('Failed to load cloud data. Please try again later.');
      }
    }
    loadData();
  }, []);

  const primaryAxis = React.useMemo(
    () => ({
      getValue: datum => datum.x,
      elementType: 'line',
      label: 'Number of Cores',
    }),
    []
  );

  const secondaryAxes = React.useMemo(
    () => [
      {
        getValue: datum => datum.y,
        elementType: 'line',
        label: 'Linux Price ($/hour)',
      },
    ],
    []
  );

  return (
    <div className="min-h-screen p-4">
      <header className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Cloud Instance Pricing Comparison</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-blue-500 hover:underline flex items-center">
                <ArrowTopRightIcon className="mr-1" /> Home
              </Link>
            </li>
            <li>
              <Link href="/calculator" className="text-blue-500 hover:underline flex items-center">
                <ArrowTopRightIcon className="mr-1" /> Cost Calculator
              </Link>
            </li>
            <li>
              <Link href="/reports" className="text-blue-500 hover:underline flex items-center">
                <ArrowTopRightIcon className="mr-1" /> Reports
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div style={{ width: '100%', height: '400px' }}>
          {error ? (
            <p className="text-red-500">{error}</p>
          ) : data.length > 0 ? (
            <Chart
              options={{
                data,
                primaryAxis,
                secondaryAxes,
                tooltip: {
                  render: ({ datum }) => (
                    <div>
                      <div>Instance: {datum.name}</div>
                      <div>Cores: {datum.x}</div>
                      <div>Price: ${datum.y.toFixed(4)}/hour</div>
                    </div>
                  ),
                },
              }}
            />
          ) : (
            <p>Loading data...</p>
          )}
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">About This Chart</h2>
          <p>
            This scatter plot visualizes the pricing of various cloud instances based on their number of CPU cores.
            Each point represents a different instance type, with the X-axis showing the number of cores and the Y-axis showing the hourly price for Linux instances.
            Hover over each point to see more details about the specific instance.
          </p>
        </div>
      </main>
    </div>
  );
}