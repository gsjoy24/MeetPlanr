import { NextResponse } from 'next/server';
import data from '../../../data/featured.json';

export const GET = async (request) => {
   return NextResponse.json(data)
};