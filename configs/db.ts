import mongoose from 'mongoose';

let isDBConnected = false;

export const connectToDataBase = async () => {
  // save only the fields present in the schema into the DB
  mongoose.set('strictQuery', true);

  if (isDBConnected) {
    console.log('Database connected already');
    return;
  }

  try {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
      throw new Error('MONGODB_URI not found in environment variables');
    }

    // connect to the database
    await mongoose.connect(uri, {
      dbName: 'dwg',
    });

    isDBConnected = true;
  } catch (error) {
    console.error('error in connecting to db', error);
  }
};
