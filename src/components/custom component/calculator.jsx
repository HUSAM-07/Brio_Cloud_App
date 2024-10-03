'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";

import { fetchCloudData } from "@/lib/cloudData";

export function Calculator() {
  const [cloudData, setCloudData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
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
    const loadCloudData = async () => {
      const data = await fetchCloudData();
      setCloudData(data);
      setFilteredData(data);
      setCheapestVMs(findCheapestVMs(data));
    };
    loadCloudData();
  }, []);

  const findCheapestVMs = (data) => {
    const vmsByRegion = data.reduce((acc, vm) => {
      const region = vm.bestPriceRegion.split(' / ')[0];
      if (!acc[region] || vm.linuxPrice < acc[region].linuxPrice) {
        acc[region] = vm;
      }
      return acc;
    }, {});
    return Object.values(vmsByRegion);
  };

  const onSubmit = (data) => {
    const filtered = cloudData.filter(vm => {
      const coresMatch = !data.cores || vm.numberOfCores >= parseInt(data.cores);
      const memoryMatch = !data.memory || vm.memoryInMB / 1024 >= parseFloat(data.memory);
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
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <CloudIcon className="h-6 w-6" />
          <span>Cloud Migration Cost Calculator</span>
        </Link>
        <nav className="ml-auto">
          <ul className="flex space-x-4">
            <li><Link href="/" className="text-blue-500 hover:underline">Dashboard</Link></li>
            <li><Link href="/calculator" className="text-blue-500 hover:underline">Cost Calculator</Link></li>
          </ul>
        </nav>
      </header>
      <main className="flex-1 p-6">
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Cloud Migration Cost Calculator</CardTitle>
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
                  <Button type="submit">Calculate Costs</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Cheapest VMs by Region</CardTitle>
              <CardDescription>
                The most cost-effective VM options for each region based on your requirements.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
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
                      <TableCell>{(vm.memoryInMB / 1024).toFixed(2)}</TableCell>
                      <TableCell>${vm.linuxPrice}</TableCell>
                      <TableCell>${vm.windowsPrice}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>All Available Cloud Instances</CardTitle>
              <CardDescription>
                Showing {paginatedData.length} of {filteredData.length} instances
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
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
                      <TableCell>{(instance.memoryInMB / 1024).toFixed(2)}</TableCell>
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
                      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                    />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext
                      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(filteredData.length / itemsPerPage)))}
                      disabled={currentPage === Math.ceil(filteredData.length / itemsPerPage)}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

function CloudIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>)
  );
}

function MenuIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>)
  );
}