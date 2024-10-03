import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'public', 'cloud-data.csv');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  
  const records = parse(fileContent, {
    columns: true,
    skip_empty_lines: true
  });

  const formattedRecords = records.map(record => ({
    ...record,
    numberOfCores: parseInt(record.numberOfCores),
    memoryInMB: parseFloat(record.memoryInMB),
    linuxPrice: parseFloat(record.linuxPrice),
    windowsPrice: parseFloat(record.windowsPrice)
  }));

  res.status(200).json(formattedRecords);
}