import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    
    const { data, error } = await supabase
      .from('subscribers')
      .insert([{ email, subscribed_at: new Date() }]);
      
    if (error) throw error;
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error storing email:', error);
    return NextResponse.json(
      { error: 'Failed to store email' },
      { status: 500 }
    );
  }
} 