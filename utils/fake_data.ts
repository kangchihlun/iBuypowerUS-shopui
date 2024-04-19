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
  price:string;
  discountPrice:string;
}

export function mock_data(): Product[] {

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
      price:"$2,449",
      discountPrice:"$1,999"
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
      price:"$2,299",
      discountPrice:"$1,949"
    },
    {
      name: 'RDY Trace 7MP 008',
      image: "https://content.ibuypower.com/cdn-cgi/image/width=640,format=auto,quality=75/https://content.ibuypower.com/Images/Components/27482/gaming-pc-01-Trace7MP008-main-KBM-400-solo.png?v=e8107872fac55e7fe8d4cacb80fea625685054b0",
      spec: {
        "Operating System": "Windows 11 Home",
        "CPU": "Intel® Core™ i7-14700F CPU",
        "Graphic": "GeForce RTX 4070 - 12GB",
        "Storage": "1TB M.2 NVMe SSD",
        "Memory": "16GB DDR5-5200MHz RAM"
      },
      price:"$2,299",
      discountPrice:"$1,949"
    },
    {
      name: 'RDY Lancool 005',
      image: "https://content.ibuypower.com/cdn-cgi/image/width=640,format=auto,quality=75/https://content.ibuypower.com/Images/Components/27518/gaming-pc-01-Lancool005-nvidia-main-400.png?v=e8107872fac55e7fe8d4cacb80fea625685054b0",
      spec: {
        "Operating System": "Windows 11 Home",
        "CPU": "Intel® Core™ i9-14900KF CPU",
        "Graphic": "GeForce RTX 4080 SUPER - 16GB",
        "Storage": "2TB M.2 NVMe Gen4 SSD",
        "Memory": "32GB DDR5-6000MHz RGB RAM"
      },
      price:"$2,299",
      discountPrice:"$1,949"
    },
    {
      name: 'RDY Y40P 003',
      image: "https://content.ibuypower.com/cdn-cgi/image/width=640,format=auto,quality=75/https://content.ibuypower.com/Images/Components/27467/gaming-pc-01-Y40P001-main-kbm-400-.png?v=e8107872fac55e7fe8d4cacb80fea625685054b0",
      spec: {
        "Operating System": "Windows 11 Home",
        "CPU": "Intel® Core™ i7-14700KF CPU",
        "Graphic": "GeForce RTX 4070 Ti SUPER - 16GB",
        "Storage": "2TB M.2 NVMe SSD",
        "Memory": "32GB DDR5-6000MHz RGB RAM"
      },
      price:"$2,499",
      discountPrice:"$2,049"
    },
    {
      name: 'RDY Element MR 002',
      image: "https://content.ibuypower.com/cdn-cgi/image/width=640,format=auto,quality=75/https://content.ibuypower.com/Images/Components/27482/gaming-pc-01-Trace7MP008-main-KBM-400-solo.png?v=e8107872fac55e7fe8d4cacb80fea625685054b0",
      spec: {
        "Operating System": "Windows 11 Home",
        "CPU": "AMD Ryzen™ 5 5600 CPU",
        "Graphic": "GeForce RTX 4060 - 8GB",
        "Storage": "1TB M.2 NVMe SSD",
        "Memory": "16GB DDR4-3200 RGB RAM"
      },
      price:"$1,299",
      discountPrice:"$1,049"
    },
    
  ];
}
