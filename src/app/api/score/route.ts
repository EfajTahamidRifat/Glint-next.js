import { NextResponse } from "next/server";
import { fetchNeynarUserByFid } from "@/lib/neynar";
import { getRandomImage } from "@/lib/randomImage";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const fid = body?.fid;
    if (!fid) return NextResponse.json({ error: "fid required" }, { status: 400 });

    const user = await fetchNeynarUserByFid(fid);
    if (!user) return NextResponse.json({ error: "user not found" }, { status: 404 });

    // simple score: followers*2 + following*0.5 + neynar score if present
    const followers = user.follower_count ?? 0;
    const following = user.following_count ?? 0;
    const neynar_score = user.experimental?.neynar_user_score ?? 0;

    const score = Math.round(followers * 2 + following * 0.5 + neynar_score);

    const bg = await getRandomImage();

    return NextResponse.json({
      user,
      score,
      bg
    });
  } catch (err: unknown) {
    console.error("API /score error:", (err as any)?.message ?? err);
    return NextResponse.json({ error: "internal error" }, { status: 500 });
  }
}
