'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

import cloudData from '../../../public/cloud-data.csv';

export function Calculator() {
  const [filteredData, setFilteredData] = useState(cloudData);
  const [cheapestVMs, setCheapestVMs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const form = useForm({
    defaultValues: {
      cores: "",
      memory: "",
      os: "linux",
    },
  });

  useEffect(() => {
    setCheapestVMs(findCheapestVMs(cloudData));
  }, []);

  const findCheapestVMs = (data) => {
    const vmsByRegion = data.reduce((acc, vm) => {
      const region = vm.bestPriceRegion.split(' / ')[0];
      if (!acc[region] || parseFloat(vm.linuxPrice) < parseFloat(acc[region].linuxPrice)) {
        acc[region] = vm;
      }
      return acc;
    }, {});
    return Object.values(vmsByRegion);
  };

  const onSubmit = (data) => {
    const filtered = cloudData.filter(vm => {
      const coresMatch = !data.cores || parseInt(vm.numberOfCores) >= parseInt(data.cores);
      const memoryMatch = !data.memory || parseFloat(vm.memoryInMB) / 1024 >= parseFloat(data.memory);
      return coresMatch && memoryMatch;
    });
    setFilteredData(filtered);
    setCheapestVMs(findCheapestVMs(filtered));
    setCurrentPage(1);
  };

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <header className="sticky top-0 z-30 flex h-14 items-center justify-between gap-4 border-b bg-background px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <CloudIcon className="h-6 w-6" />
          <span className="hidden sm:inline">Cloud Migration Cost Calculator</span>
          <span className="sm:hidden">Cost Calculator</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/calculator" className="text-primary hover:text-primary-foreground">Calculator</Link></li>
          </ul>
        </nav>
      </header>
      <main className="flex-1 p-4 sm:p-6">
        <div className="grid gap-6">
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">Cloud Migration Cost Calculator</CardTitle>
              <CardDescription>
                Enter your infrastructure requirements to estimate migration costs.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="cores"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Minimum Number of CPU Cores</FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormDescription>Enter the minimum number of CPU cores required.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="memory"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Minimum Memory (GB)</FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormDescription>Enter the minimum amount of memory in GB.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="os"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Operating System</FormLabel>
                        <FormControl>
                          <select {...field} className="w-full rounded-md border border-input bg-background px-3 py-2">
                            <option value="linux">Linux</option>
                            <option value="windows">Windows</option>
                          </select>
                        </FormControl>
                        <FormDescription>Select the operating system.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90">Calculate Costs</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>Cheapest VMs by Region</CardTitle>
              <CardDescription>
                The most cost-effective VM options for each region based on your requirements.
              </CardDescription>
            </CardHeader>
            <CardContent className="overflow-x-auto">
              <Table className="w-full">
                <TableHeader className="bg-muted">
                  <TableRow>
                    <TableHead>Region</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Cores</TableHead>
                    <TableHead>Memory (GB)</TableHead>
                    <TableHead>Linux Price</TableHead>
                    <TableHead>Windows Price</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cheapestVMs.map((vm, index) => (
                    <TableRow key={index}>
                      <TableCell>{vm.bestPriceRegion.split(' / ')[0]}</TableCell>
                      <TableCell>{vm.name}</TableCell>
                      <TableCell>{vm.numberOfCores}</TableCell>
                      <TableCell>{(parseFloat(vm.memoryInMB) / 1024).toFixed(2)}</TableCell>
                      <TableCell>${vm.linuxPrice}</TableCell>
                      <TableCell>${vm.windowsPrice}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>All Available Cloud Instances</CardTitle>
              <CardDescription>
                Showing {paginatedData.length} of {filteredData.length} instances
              </CardDescription>
            </CardHeader>
            <CardContent className="overflow-x-auto">
              {filteredData.length > 0 ? (
                <>
                  <Table className="w-full">
                    <TableHeader className="bg-muted">
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Cores</TableHead>
                        <TableHead>Memory (GB)</TableHead>
                        <TableHead>Linux Price</TableHead>
                        <TableHead>Windows Price</TableHead>
                        <TableHead>Best Price Region</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {paginatedData.map((instance, index) => (
                        <TableRow key={index}>
                          <TableCell>{instance.name}</TableCell>
                          <TableCell>{instance.numberOfCores}</TableCell>
                          <TableCell>{(parseFloat(instance.memoryInMB) / 1024).toFixed(2)}</TableCell>
                          <TableCell>${instance.linuxPrice}</TableCell>
                          <TableCell>${instance.windowsPrice}</TableCell>
                          <TableCell>{instance.bestPriceRegion}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  <Pagination className="mt-4">
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious
                          className="bg-secondary text-secondary-foreground hover:bg-secondary/80"
                          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                          disabled={currentPage === 1}
                        />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationNext
                          className="bg-secondary text-secondary-foreground hover:bg-secondary/80"
                          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(filteredData.length / itemsPerPage)))}
                          disabled={currentPage === Math.ceil(filteredData.length / itemsPerPage)}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </>
              ) : (
                <p>No data available. Please check your filter criteria or try again later.</p>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
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
  );
}