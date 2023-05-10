import { PrismaClient, Condition, Location } from '@prisma/client';

const prisma = new PrismaClient();

async function main(prisma:PrismaClient) {
  // Seed Location data
  const location1: Location = await prisma.location.create({
    data: {
      address: '123 Main St',
      areaCode: '12345',
      city: 'Anytown',
      coordinate: '40.7128° N, 74.0060° W',
      country: 'USA',
      state: 'NY',
    },
  });

  const location2: Location = await prisma.location.create({
    data: {
      address: '456 Elm St',
      areaCode: '67890',
      city: 'Otherville',
      coordinate: '37.7749° N, 122.4194° W',
      country: 'USA',
      state: 'CA',
    },
  });

  // Seed Condition data
  const condition1: Condition = await prisma.condition.create({
    data: {
      bsnId: '1',
      bsnUrl: 'http://example.com/bsn/1',
      csnId: '2',
      csnUrl: 'http://example.com/csn/2',
      industryCode: '1234',
      locationId: location1.id,
      messageId: '3',
      method: 'POST',
      publicKey: 'abc123',
      ssnId: '4',
      ssnUrl: 'http://example.com/ssn/4',
      timeToLive: '5',
      transactionId: '6',
    },
  });

  const condition2: Condition = await prisma.condition.create({
    data: {
      bsnId: '7',
      bsnUrl: 'http://example.com/bsn/7',
      csnId: '8',
      csnUrl: 'http://example.com/csn/8',
      industryCode: '5678',
      locationId: location2.id,
      messageId: '9',
      method: 'GET',
      publicKey: 'def456',
      ssnId: '10',
      ssnUrl: 'http://example.com/ssn/10',
      timeToLive: '11',
      transactionId: '12',
    },
  });

  console.log('Seeded Location and Condition data:');
  console.log({ location1, location2, condition1, condition2 });

}

  
export async function customSeed() {
    const client = new PrismaClient();
    main(client)
    .catch((e) => console.error(e))
    .finally(async () => {
    await prisma.$disconnect();
  });
    client.$disconnect();
}