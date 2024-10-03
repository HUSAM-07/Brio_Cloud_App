'use client';

import React, { useState, useEffect } from 'react';
import { Chart } from 'react-charts';
import { fetchCloudData } from "@/lib/cloudData";
import { Calculator } from "@/components/custom component/calculator";
import Link from "next/link";

export default function Home() {
  const [cloudData, setCloudData] = useState([]);

  useEffect(() => {
    const loadCloudData = async () => {
      const data = await fetchCloudData();
      setCloudData(data);
    };
    loadCloudData();
  }, []);

  const chartData = React.useMemo(() => {
    // Sort VMs by the total number of cores
    const sortedData = [...cloudData].sort((a, b) => b.numberOfCores - a.numberOfCores);
    
    // Take the top 10 most common VM types
    const top10VMs = sortedData.slice(0, 10);

    const linuxData = top10VMs.map(vm => ({
      vmType: vm.name,
      price: parseFloat(vm.linuxPrice) || 0,
    }));

    const windowsData = top10VMs.map(vm => ({
      vmType: vm.name,
      price: parseFloat(vm.windowsPrice) || 0,
    }));

    return [
      {
        label: 'Linux Price',
        data: linuxData,
      },
      {
        label: 'Windows Price',
        data: windowsData,
      },
    ];
  }, [cloudData]);

  const primaryAxis = React.useMemo(
    () => ({
      getValue: datum => datum.vmType,
      showGrid: false,
    }),
    []
  );

  const secondaryAxes = React.useMemo(
    () => [
      {
        getValue: datum => datum.price,
        elementType: 'bar',
        stacked: false,
        formatters: {
          tooltip: (value) => {
            if (typeof value === 'number' && !isNaN(value)) {
              return `$${value.toFixed(2)}`;
            }
            return 'N/A';
          },
        },
      },
    ],
    []
  );

  return (
    <main className="min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Cloud Migration Cost Calculator</h1>
      <nav className="mb-4">
        <ul className="flex space-x-4">
          <li><Link href="/" className="text-blue-500 hover:underline">Dashboard</Link></li>
          <li><Link href="/calculator" className="text-blue-500 hover:underline">Cost Calculator</Link></li>
        </ul>
      </nav>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Price Comparison: Linux vs Windows (Top 10 VM Types)</h2>
        <div style={{ height: '500px' }}>
          {cloudData.length > 0 ? (
            <>
              <Chart
                options={{
                  data: chartData,
                  primaryAxis,
                  secondaryAxes,
                  dark: false,
                  tooltip: {
                    render: ({ datum, primaryAxis, getStyle }) => {
                      if (!datum || !datum.originalDatum) {
                        return null;
                      }
                      const data = datum.originalDatum;
                      return (
                        <div
                          style={{
                            ...getStyle(),
                            background: 'white',
                            color: 'black',
                            padding: '5px',
                            border: '1px solid #ccc',
                          }}
                        >
                          <strong>{data.vmType}</strong>
                          <br />
                          Price: ${typeof data.price === 'number' ? data.price.toFixed(2) : 'N/A'}
                        </div>
                      );
                    },
                  },
                }}
              />
              <div className="flex justify-center mt-4">
                <div className="flex items-center mr-4">
                  <div className="w-4 h-4 bg-blue-500 mr-2"></div>
                  <span>Linux Price</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-yellow-500 mr-2"></div>
                  <span>Windows Price</span>
                </div>
              </div>
            </>
          ) : (
            <p>Loading chart data...</p>
          )}
        </div>
      </div>
    </main>
  );
}
