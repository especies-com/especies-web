export async function GET() {
  const apiKey = process.env.AMPLITUDE_API_KEY;

  if (!apiKey) {
    return Response.json(
      { error: 'Amplitude API key not configured' },
      { status: 500 }
    );
  }

  return Response.json({ apiKey });
}
