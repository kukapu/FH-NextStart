import { db, seedData } from '@/database';
import { NextApiRequest, NextApiResponse } from 'next';
import { EntryModel } from '../../../models';

// ESTE ARCHIVO SOLO EN DESARROLLO NO EN PRODUCCION 
// PORQUE TENEMOS EL DELETE MANY

export default async function handler( req:NextApiRequest, res:NextApiResponse ) {

  if( process.env.NODE_ENV === 'production' ){
    return res.status(404).json({ message: 'No tiene acceso a este servidor' })
  }

  await db.connect();
  // entre esta conecxion es donde podemos hacer las modificaciones de los datos
  await EntryModel.deleteMany({})
  
  await EntryModel.insertMany( seedData.entries )
  console.log('GUARDADO EN BD')



  //----------------------------------------
  await db.disconnect();


  res.status(200).json({ message: 'Proceso realizado correctamente'})

}