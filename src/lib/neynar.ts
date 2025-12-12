import axios from "axios";

export async function fetchNeynarUserByFid(fid: string) {
  try {
    // use /v2/farcaster/user/by_username/ or /user/bulk depending on Neynar docs
    // We'll call "by_username" if user passes username, but user asked to support FID,
    // so use the bulk endpoint by fids param.
    const url = `https://api.neynar.com/v2/farcaster/user/bulk?fids=${encodeURIComponent(fid)}`;
    const res = await axios.get(url, {
      headers: { "x-api-key": process.env.NEYNAR_API_KEY! }
    });
    // res.data.users -> array
    const users = res.data?.users || [];
    return users[0] ?? null;
  } catch (err: unknown) {
    console.error("Neynar error:", (err as any)?.message ?? err);
    return null;
  }
}
