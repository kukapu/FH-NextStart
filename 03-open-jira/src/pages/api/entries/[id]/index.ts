import { db } from '@/database';
import mongoose from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';
import { EntryModel, IEntry } from '../../../../../models';

type Data = 
  | { message: string }
  | IEntry[]


export default function handler(req:NextApiRequest, res:NextApiResponse) {

  // console.log(req.query)
  const { id } = req.query

  if( !mongoose.isValidObjectId( id )) {
    return res.status(400).json({ message: 'Id no válido: ' + id })
  }

  switch (req.method) {
    case 'PUT':
      return updateEntry( req, res )

    case 'GET':
      return getEntry( req, res )

    case 'DELETE':
      return deleteEntry( req, res )

    default:
      return res.status(400).json({ message: 'Metodo no permitido' })
  }

}


const updateEntry = async ( req: NextApiRequest, res: NextApiResponse<Data> ) => {
  
  const { id } = req.query
  await db.connect();

  const entryToUpdate = await EntryModel.findById( id )

  if( !entryToUpdate ) {
    await db.disconnect();
    return res.status(404).json({ message: 'No entrada con ID: ' + id })
  }

  const { 
    description = entryToUpdate.description,
    status = entryToUpdate.status
  } = req.body

  try {
    const updatedEntry: any = await EntryModel.findByIdAndUpdate( id, { description, status }, { runValidators: true, new: true })
    // entryToUpdate.description = description
    // entryToUpdate.status = status
    // await entryToUpdate.save()
    await db.disconnect();

    return res.status(200).json( updatedEntry )
    
  } catch (error: any) {
    console.log(error)
    await db.disconnect();
    res.status(400).json({
      message: error.errors.status.message,
    })
  }
}

const getEntry = async ( req: NextApiRequest, res: NextApiResponse<Data> ) => {

  const { id } = req.query
  await db.connect();

  const entryToGet: any = await EntryModel.findById( id )

  if( !entryToGet ) {
    await db.disconnect();
    return res.status(404).json({ message: 'No entrada con ID: ' + id })
  }

  try {
    await db.disconnect();
    return res.status(200).json( entryToGet )
  }
  catch (error: any) {
    console.log(error)
    await db.disconnect();
    res.status(400).json({
      message: error.errors.status.message,
    })
  }
}

const deleteEntry = async ( req: NextApiRequest, res: NextApiResponse<Data> ) => {
    
  const { id } = req.query
  await db.connect();

  const entryToDelete = await EntryModel.findById( id )

  if( !entryToDelete ) {
    await db.disconnect();
    return res.status(404).json({ message: 'No entrada con ID: ' + id })
  }

  try {
    await EntryModel.findByIdAndDelete( id )
    await db.disconnect();
    return res.status(200).json({ message: 'Entrada eliminada' })
    
  } catch (error: any) {
    console.log(error)
    await db.disconnect();
    res.status(400).json({
      message: error.errors.status.message,
    })
  }
}
