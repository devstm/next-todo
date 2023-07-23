import { NextResponse, NextRequest } from 'next/server';
const todos = [
  { _id: '1', text: 'Buy milk' },
  { _id: '2', text: 'Buy eggs' },
  { _id: '3', text: 'Buy bread' },
];
export async function GET(request, response) {
  return NextResponse.json({ todos });
}
export async function POST(request, response) {
  const res = await request.json();
  const toto = {
    _id: Math.random().toString(36).substr(2, 9),
    text: res.text,
  };
  todos.push(toto);
  return NextResponse.json({ todos: 'asdasd' });
}
