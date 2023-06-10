import { FETCH_GITHUB_LANGUAGES, getClient } from '@/lib';
import { LanguageResponse } from '@/types';
import { NextResponse } from 'next/server';

export async function GET() {
  const { data } = await getClient().query<LanguageResponse>({ query: FETCH_GITHUB_LANGUAGES });

  return NextResponse.json(data);
}
