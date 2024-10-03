import Papa from 'papaparse';

export async function fetchCloudData() {
  const response = await fetch('/cloud-data.csv');
  const csvText = await response.text();
  
  const { data } = Papa.parse(csvText, {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
  });

  return data;
}