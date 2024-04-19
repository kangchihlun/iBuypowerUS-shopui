interface HardwareSpec{
  "Operating System":string,
  "CPU":string,
  "Graphic":string,
  "Storage":string,
  "Memory":string
}

export interface Product {
  name:string;
  spec:HardwareSpec;
}

export async function mock_data(): Promise<Product[]> {
  // Simulate network delay (1.5 seconds)
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return [
    {
      name: 'Gaming RDY 16EDT',
      spec: {
        "Operating System": "Windows Home 11",
        "CPU": "AMD RyzenTM 7 7700X CPU",
        "Graphic": "GeForce RTX 4070 - 12GB",
        "Storage": "1TB M.2 NVMe SSD",
        "Memory": "32GB DDR5-5600MHz RGB RAM"
      },
    },
    {
      name: 'Productivity Master 3000',
      spec: {
        "Operating System": "Windows 11 Pro",
        "CPU": "Intel Core i7-13700K",
        "Graphic": "Integrated Intel UHD Graphics 770",
        "Storage": "500GB M.2 NVMe SSD",
        "Memory": "16GB DDR4-3200MHz RAM"
      },
    },
    // Add more product objects here if needed
  ];
}
