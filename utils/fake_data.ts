interface HardwareSpec{
  "Operating System":string,
  "CPU":string,
  "Graphic":string,
  "Storage":string,
  "Memory":string
}

export interface Product {
  name:string;
  image:string;
  spec:HardwareSpec;
}

export async function mock_data(): Promise<Product[]> {
  // Simulate network delay (1.5 seconds)
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return [
    {
      name: 'RDY Y60 004',
      image: "https://content.ibuypower.com/Images/Components/27441/gaming-pc-01-Y60-002-Main-400..png?v=e8107872fac55e7fe8d4cacb80fea625685054b0",
      spec: {
        "Operating System": "Windows 11 Home",
        "CPU": "Intel® Core™ i9-14900KF CPU",
        "Graphic": "GeForce RTX 4070 SUPER - 12GB",
        "Memory": "32GB DDR5-6000MHz RGB RAM",
        "Storage":"2TB M.2 NVMe SSD"
      },
    },
    {
      name: 'RDY Y40 VALORANT VCTA B001',
      image: "https://content.ibuypower.com/cdn-cgi/image/width=640,format=auto,quality=75/https://content.ibuypower.com/Images/Components/27442/gaming-pc-01-Y40-VCTA-B001-main-kbm-400-.png?v=e8107872fac55e7fe8d4cacb80fea625685054b0",
      spec: {
        "Operating System": "Windows 11 Home",
        "CPU": "Intel® Core™ i7-14700KF CPU",
        "Graphic": "GeForce RTX 4070 SUPER - 12GB",
        "Storage": "2TB M.2 NVMe Gen4 SSD",
        "Memory": "32GB DDR5-6000MHz RGB RAM"
    },
      





    },
    // Add more product objects here if needed
  ];
}
