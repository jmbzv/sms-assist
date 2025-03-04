import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    
    // First check if email exists
    const { data: existingEmail } = await supabase
      .from('subscribers')
      .select()
      .eq('email', email)
      .single();

    // If email doesn't exist, store it
    if (!existingEmail) {
      const { error } = await supabase
        .from('subscribers')
        .insert([{ email, subscribed_at: new Date() }]);
        
      if (error) throw error;
    }
    
    // Always return success to trigger download
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error handling email:', error);
    // Still return success to allow download
    return NextResponse.json({ success: true });
  }
} 