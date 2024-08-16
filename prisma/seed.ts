import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seedDatabase() {
  try {
    const products = [
      {
        name: "Aurora Lamp",
        price: 56.78,
      },
      {
        name: "Bliss Speaker",
        price: 33.45,
      },
      {
        name: "Comet Headphones",
        price: 40.21,
      },
      {
        name: "Dream Tablet",
        price: 75.32,
      },
      {
        name: "Echo Watch",
        price: 27.89,
      },
      {
        name: "Fusion Blender",
        price: 68.95,
      },
      {
        name: "Glide Skateboard",
        price: 22.37,
      },
      {
        name: "Harmony Speaker",
        price: 63.14,
      },
      {
        name: "Ignite Grill",
        price: 44.78,
      },
      {
        name: "Jade Toaster",
        price: 59.62,
      },
      {
        name: "Kinetic Lamp",
        price: 49.01,
      },
      {
        name: "Lunar Phone",
        price: 29.55,
      },
      {
        name: "Matrix Tablet",
        price: 31.79,
      },
      {
        name: "Nimbus Drone",
        price: 71.26,
      },
      {
        name: "Orion TV",
        price: 64.09,
      },
      {
        name: "Pulse Watch",
        price: 48.77,
      },
      {
        name: "Quantum Router",
        price: 73.81,
      },
      {
        name: "Radiance Lamp",
        price: 38.96,
      },
      {
        name: "Sonic Speaker",
        price: 20.67,
      },
      {
        name: "Titanium Laptop",
        price: 77.04,
      },
      {
        name: "Zenith Camera",
        price: 85.47,
      },
      {
        name: "Blaze Oven",
        price: 92.56,
      },
      {
        name: "Chroma Keyboard",
        price: 47.99,
      },
      {
        name: "Dynamo Mixer",
        price: 58.49,
      },
      {
        name: "Echo Speaker",
        price: 23.89,
      },
      {
        name: "Flux Capacitor",
        price: 123.45,
      },
      {
        name: "Glow Nightlight",
        price: 12.99,
      },
      {
        name: "Helix Router",
        price: 88.77,
      },
      {
        name: "Illume Lantern",
        price: 33.25,
      },
      {
        name: "Jolt Charger",
        price: 19.95,
      },
      {
        name: "Kite Drone",
        price: 144.6,
      },
      {
        name: "Lumen Bulb",
        price: 8.75,
      },
      {
        name: "Muse Headphones",
        price: 77.89,
      },
      {
        name: "Nova Projector",
        price: 94.5,
      },
      {
        name: "Orbit Fan",
        price: 48.2,
      },
      {
        name: "Pulse Monitor",
        price: 37.99,
      },
      {
        name: "Quasar Telescope",
        price: 159.99,
      },
      {
        name: "Radiant Heater",
        price: 69.3,
      },
      {
        name: "Surge Protector",
        price: 25.49,
      },
      {
        name: "Tidal Alarm Clock",
        price: 34.85,
      },
      {
        name: "Ultrasonic Cleaner",
        price: 54.0,
      },
      {
        name: "Vertex Vacuum",
        price: 120.99,
      },
      {
        name: "Wave Oven",
        price: 102.75,
      },
      {
        name: "Xenon Flashlight",
        price: 29.99,
      },
      {
        name: "Yield Smartwatch",
        price: 63.7,
      },
      {
        name: "Zen Blender",
        price: 47.2,
      },
      {
        name: "Aura Air Purifier",
        price: 88.3,
      },
      {
        name: "Bolt Cutter",
        price: 45.1,
      },
      {
        name: "Crimson Mouse",
        price: 17.99,
      },
      {
        name: "Dusk Wall Clock",
        price: 32.5,
      },
      {
        name: "Aurora Lamp",
        price: 56.78,
      },
      {
        name: "Bliss Speaker",
        price: 33.45,
      },
      {
        name: "Comet Headphones",
        price: 40.21,
      },
      {
        name: "Dream Tablet",
        price: 75.32,
      },
      {
        name: "Echo Watch",
        price: 27.89,
      },
      {
        name: "Fusion Blender",
        price: 68.95,
      },
      {
        name: "Glide Skateboard",
        price: 22.37,
      },
      {
        name: "Harmony Speaker",
        price: 63.14,
      },
      {
        name: "Ignite Grill",
        price: 44.78,
      },
      {
        name: "Jade Toaster",
        price: 59.62,
      },
      {
        name: "Kinetic Lamp",
        price: 49.01,
      },
      {
        name: "Lunar Phone",
        price: 29.55,
      },
      {
        name: "Matrix Tablet",
        price: 31.79,
      },
      {
        name: "Nimbus Drone",
        price: 71.26,
      },
      {
        name: "Orion TV",
        price: 64.09,
      },
      {
        name: "Pulse Watch",
        price: 48.77,
      },
      {
        name: "Quantum Router",
        price: 73.81,
      },
      {
        name: "Radiance Lamp",
        price: 38.96,
      },
      {
        name: "Sonic Speaker",
        price: 20.67,
      },
      {
        name: "Titanium Laptop",
        price: 77.04,
      },
      {
        name: "Zenith Camera",
        price: 85.47,
      },
      {
        name: "Blaze Oven",
        price: 92.56,
      },
      {
        name: "Chroma Keyboard",
        price: 47.99,
      },
      {
        name: "Dynamo Mixer",
        price: 58.49,
      },
      {
        name: "Echo Speaker",
        price: 23.89,
      },
      {
        name: "Flux Capacitor",
        price: 123.45,
      },
      {
        name: "Glow Nightlight",
        price: 12.99,
      },
      {
        name: "Helix Router",
        price: 88.77,
      },
      {
        name: "Illume Lantern",
        price: 33.25,
      },
      {
        name: "Jolt Charger",
        price: 19.95,
      },
      {
        name: "Kite Drone",
        price: 144.6,
      },
      {
        name: "Lumen Bulb",
        price: 8.75,
      },
      {
        name: "Muse Headphones",
        price: 77.89,
      },
      {
        name: "Nova Projector",
        price: 94.5,
      },
      {
        name: "Orbit Fan",
        price: 48.2,
      },
      {
        name: "Pulse Monitor",
        price: 37.99,
      },
      {
        name: "Quasar Telescope",
        price: 159.99,
      },
      {
        name: "Radiant Heater",
        price: 69.3,
      },
      {
        name: "Surge Protector",
        price: 25.49,
      },
      {
        name: "Tidal Alarm Clock",
        price: 34.85,
      },
      {
        name: "Ultrasonic Cleaner",
        price: 54.0,
      },
      {
        name: "Vertex Vacuum",
        price: 120.99,
      },
      {
        name: "Wave Oven",
        price: 102.75,
      },
      {
        name: "Xenon Flashlight",
        price: 29.99,
      },
      {
        name: "Yield Smartwatch",
        price: 63.7,
      },
      {
        name: "Zen Blender",
        price: 47.2,
      },
      {
        name: "Aura Air Purifier",
        price: 88.3,
      },
      {
        name: "Bolt Cutter",
        price: 45.1,
      },
      {
        name: "Crimson Mouse",
        price: 17.99,
      },
      {
        name: "Dusk Wall Clock",
        price: 32.5,
      },
      {
        name: "Flux Capacitor",
        price: 123.45,
      },
      {
        name: "Glow Nightlight",
        price: 12.99,
      },
      {
        name: "Helix Router",
        price: 88.77,
      },
      {
        name: "Illume Lantern",
        price: 33.25,
      },
      {
        name: "Jolt Charger",
        price: 19.95,
      },
      {
        name: "Kite Drone",
        price: 144.6,
      },
      {
        name: "Lumen Bulb",
        price: 8.75,
      },
      {
        name: "Muse Headphones",
        price: 77.89,
      },
      {
        name: "Nova Projector",
        price: 94.5,
      },
      {
        name: "Dynamo Mixer",
        price: 58.49,
      },
    ];

    for (const product of products) {
      await prisma.product.create({
        data: {
          name: product.name,
          price: product.price,
        },
      });
    }

    await prisma.$disconnect();
  } catch (error) {
    console.error("Erro ao criar os produtos", error);
    await prisma.$disconnect();
    process.exit(1);
  }
}

seedDatabase();
