import { db } from '@/database';
import { NextApiRequest, NextApiResponse } from 'next';
import { EntryModel, IEntry } from '../../../../models';

type Data = 
  | { message: string }
  | IEntry[]
  | IEntry

export default function handler( req:NextApiRequest, res:NextApiResponse ) {

  switch (req.method) {
    case 'GET':
      return getEntries( res )

    case 'POST': // Create
      return postEntry( req, res )

    case 'PUT':	 // Update
      return 

    default: 
      return res.status(400).json({ message: 'Endpoint no existe' + req.method })
  }
}

const getEntries = async ( res: NextApiResponse<Data> ) => {

  await db.connect();
  const entries = await EntryModel.find().sort({ createdAt: 'ascending' })
  await db.disconnect();

  res.status(200).json( entries )
}


const postEntry = async ( req: NextApiRequest, res: NextApiResponse<Data> ) => {

  const { description = '' } = req.body;

  // console.log(req.body)
  const newEntry = new EntryModel({
    description,
    createdAt: Date.now(),
  })

  try {
    
    await db.connect();
    await newEntry.save();
    await db.disconnect();

    res.status(201).json( newEntry )

  } catch (error) {
    await db.disconnect();
    console.log(error)

    return res.status(500).json({ message: 'Algo salio mal revisar consola del servidor' })
  }


  return res.status(201).json({ message: 'Todo GTO' })

}