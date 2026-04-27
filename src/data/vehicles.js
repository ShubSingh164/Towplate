// Vehicle data with real car images from Unsplash
export const vehicles = [
  {
    id: 1,
    name: 'Tata Nexon EV',
    brand: 'Tata',
    model: 'Nexon EV Max',
    year: 2024,
    category: 'Electric',
    pricePerDay: 1999,
    pricePerHour: 299,
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&auto=format&fit=crop&q=80',
    specs: { seats: 5, doors: 5, transmission: 'Automatic', fuelType: 'Electric', mileage: 'Unlimited', airConditioning: true },
    rating: 4.8, reviews: 234, available: true, distance: '1.2 km',
    features: ['Connected Car', 'Sunroof', 'Ventilated Seats', 'Air Purifier']
  },
  {
    id: 2,
    name: 'Mahindra XUV700',
    brand: 'Mahindra',
    model: 'XUV700 AX7',
    year: 2024,
    category: 'SUV',
    pricePerDay: 2999,
    pricePerHour: 450,
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&auto=format&fit=crop&q=80',
    specs: { seats: 7, doors: 5, transmission: 'Automatic', fuelType: 'Diesel', mileage: '200 km/day', airConditioning: true },
    rating: 4.9, reviews: 312, available: true, distance: '2.5 km',
    features: ['ADAS', 'Panoramic Sunroof', 'Sony Sound', 'Flush Door Handles']
  },
  {
    id: 3,
    name: 'Hyundai Creta',
    brand: 'Hyundai',
    model: 'Creta SX(O)',
    year: 2024,
    category: 'SUV',
    pricePerDay: 2499,
    pricePerHour: 375,
    image: 'https://images.unsplash.com/photo-1606611013016-969c19ba27bb?w=600&auto=format&fit=crop&q=80',
    specs: { seats: 5, doors: 5, transmission: 'Automatic', fuelType: 'Petrol', mileage: '200 km/day', airConditioning: true },
    rating: 4.7, reviews: 456, available: true, distance: '1.8 km',
    features: ['Panoramic Sunroof', 'Bose Audio', 'Ventilated Seats', 'BlueLink']
  },
  {
    id: 4,
    name: 'Maruti Suzuki Baleno',
    brand: 'Maruti Suzuki',
    model: 'Baleno Alpha',
    year: 2024,
    category: 'Hatchback',
    pricePerDay: 1299,
    pricePerHour: 199,
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&auto=format&fit=crop&q=80',
    specs: { seats: 5, doors: 5, transmission: 'Automatic', fuelType: 'Petrol', mileage: 'Unlimited', airConditioning: true },
    rating: 4.5, reviews: 523, available: true, distance: '0.8 km',
    features: ['SmartPlay Pro+', 'Head-Up Display', 'Auto Climate', 'LED Lights']
  },
  {
    id: 5,
    name: 'Kia Seltos',
    brand: 'Kia',
    model: 'Seltos HTX+',
    year: 2024,
    category: 'SUV',
    pricePerDay: 2299,
    pricePerHour: 349,
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&auto=format&fit=crop&q=80',
    specs: { seats: 5, doors: 5, transmission: 'Automatic', fuelType: 'Diesel', mileage: '200 km/day', airConditioning: true },
    rating: 4.6, reviews: 389, available: true, distance: '3.2 km',
    features: ['UVO Connect', 'Bose Audio', 'Sunroof', 'Drive Modes']
  },
  {
    id: 6,
    name: 'Tata Harrier',
    brand: 'Tata',
    model: 'Harrier Fearless+',
    year: 2024,
    category: 'SUV',
    pricePerDay: 2799,
    pricePerHour: 420,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&auto=format&fit=crop&q=80',
    specs: { seats: 5, doors: 5, transmission: 'Automatic', fuelType: 'Diesel', mileage: '200 km/day', airConditioning: true },
    rating: 4.7, reviews: 267, available: true, distance: '4.1 km',
    features: ['JBL Sound', 'Panoramic Sunroof', 'ADAS', 'Air Purifier']
  },
  {
    id: 7,
    name: 'Honda City',
    brand: 'Honda',
    model: 'City ZX CVT',
    year: 2024,
    category: 'Sedan',
    pricePerDay: 1899,
    pricePerHour: 285,
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=600&auto=format&fit=crop&q=80',
    specs: { seats: 5, doors: 4, transmission: 'Automatic', fuelType: 'Petrol', mileage: 'Unlimited', airConditioning: true },
    rating: 4.6, reviews: 445, available: true, distance: '2.3 km',
    features: ['Honda Connect', 'Lane Watch', 'Sunroof', 'Alexa Built-in']
  },
  {
    id: 8,
    name: 'Mahindra Thar',
    brand: 'Mahindra',
    model: 'Thar 4x4',
    year: 2024,
    category: 'SUV',
    pricePerDay: 3499,
    pricePerHour: 525,
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&auto=format&fit=crop&q=80',
    specs: { seats: 4, doors: 4, transmission: 'Automatic', fuelType: 'Diesel', mileage: '150 km/day', airConditioning: true },
    rating: 4.9, reviews: 178, available: true, distance: '5.5 km',
    features: ['4x4', 'Removable Roof', 'AdrenoX', 'Off-Road Mode']
  },
  {
    id: 9,
    name: 'Maruti Suzuki Swift',
    brand: 'Maruti Suzuki',
    model: 'Swift ZXi+',
    year: 2024,
    category: 'Hatchback',
    pricePerDay: 999,
    pricePerHour: 149,
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&auto=format&fit=crop&q=80',
    specs: { seats: 5, doors: 5, transmission: 'Manual', fuelType: 'Petrol', mileage: 'Unlimited', airConditioning: true },
    rating: 4.4, reviews: 612, available: true, distance: '1.0 km',
    features: ['SmartPlay Studio', 'Cruise Control', 'Auto Headlamps', 'Push Start']
  },
  {
    id: 10,
    name: 'Hyundai Verna',
    brand: 'Hyundai',
    model: 'Verna SX(O)',
    year: 2024,
    category: 'Sedan',
    pricePerDay: 2099,
    pricePerHour: 315,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&auto=format&fit=crop&q=80',
    specs: { seats: 5, doors: 4, transmission: 'Automatic', fuelType: 'Petrol', mileage: 'Unlimited', airConditioning: true },
    rating: 4.7, reviews: 334, available: true, distance: '2.8 km',
    features: ['ADAS', 'Ventilated Seats', 'Bose Sound', 'BlueLink']
  },
  {
    id: 11,
    name: 'Tata Punch',
    brand: 'Tata',
    model: 'Punch Accomplished',
    year: 2024,
    category: 'SUV',
    pricePerDay: 1499,
    pricePerHour: 225,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&auto=format&fit=crop&q=80',
    specs: { seats: 5, doors: 5, transmission: 'Automatic', fuelType: 'Petrol', mileage: 'Unlimited', airConditioning: true },
    rating: 4.5, reviews: 289, available: true, distance: '1.5 km',
    features: ['iRA Connected', 'Sunroof', 'Terrain Modes', 'Cruise Control']
  },
  {
    id: 12,
    name: 'MG Hector',
    brand: 'MG',
    model: 'Hector Sharp Pro',
    year: 2024,
    category: 'SUV',
    pricePerDay: 2899,
    pricePerHour: 435,
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&auto=format&fit=crop&q=80',
    specs: { seats: 5, doors: 5, transmission: 'Automatic', fuelType: 'Petrol', mileage: '200 km/day', airConditioning: true },
    rating: 4.6, reviews: 245, available: false, distance: '3.8 km',
    features: ['i-SMART', '14" Touchscreen', 'Panoramic Sunroof', 'ADAS']
  }
];

export const categories = [
  { id: 1, name: 'Sedan', count: 24, image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=400&auto=format&fit=crop&q=80', description: 'Comfortable rides' },
  { id: 2, name: 'SUV', count: 32, image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&auto=format&fit=crop&q=80', description: 'Family trips' },
  { id: 3, name: 'Electric', count: 8, image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=400&auto=format&fit=crop&q=80', description: 'Eco-friendly' },
  { id: 4, name: 'Hatchback', count: 18, image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&auto=format&fit=crop&q=80', description: 'City driving' },
  { id: 5, name: 'Luxury', count: 6, image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&auto=format&fit=crop&q=80', description: 'Special occasions' }
];

export const testimonials = [
  { id: 1, name: 'Rahul Sharma', role: 'Business Executive', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80', rating: 5, text: 'Towplate made my business trip seamless. The Creta was immaculate!' },
  { id: 2, name: 'Priya Patel', role: 'Travel Blogger', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80', rating: 5, text: "Towplate stands out with their premium fleet and exceptional service!" },
  { id: 3, name: 'Amit Kumar', role: 'Tech Entrepreneur', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80', rating: 5, text: 'The Nexon EV was perfect. Instant UPI refund is a great touch!' }
];

export const locations = ['Mumbai Airport', 'Delhi NCR', 'Bangalore Central', 'Chennai Marina', 'Hyderabad HiTech City', 'Pune Station', 'Kolkata Park Street', 'Ahmedabad SG Highway'];
