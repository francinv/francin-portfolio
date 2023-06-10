import { FETCH_GITHUB_STATS, getClient } from '@/lib';
import { StatisticsResponse } from '@/types';
import { NextResponse } from 'next/server';

export async function GET() {
  const { data } = await getClient().query<StatisticsResponse>({ query: FETCH_GITHUB_STATS });

  return NextResponse.json(data);
}
