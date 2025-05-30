export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const gender = searchParams.get("gender") || null;
  const age = searchParams.get("age") || null;
  const height = searchParams.get("height") || null;
  const weight = searchParams.get("weight") || null;
  const disease = searchParams.get("disease") || null;

  return Response.json({
    status: "ok",
    params: { gender, age, height, weight, disease },
  });
}
