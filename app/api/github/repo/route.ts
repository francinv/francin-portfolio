import { FETCH_GITHUB_REPOS, getClient } from '@/lib';
import { RepositoryResponse } from '@/types';
import { NextResponse } from 'next/server';

export async function GET() {
  const { data } = await getClient().query<RepositoryResponse>({ query: FETCH_GITHUB_REPOS });

  return NextResponse.json(data);
}
