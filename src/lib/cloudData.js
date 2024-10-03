export async function fetchCloudData() {
  const response = await fetch('/api/cloud-data');
  if (!response.ok) {
    throw new Error('Failed to fetch cloud data');
  }
  return response.json();
}