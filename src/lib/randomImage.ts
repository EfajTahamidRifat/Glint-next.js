import axios from "axios";

export async function getRandomImage() {
  // Try Unsplash -> Pexels -> Pixabay -> fallback
  try {
    if (process.env.UNSPLASH_ACCESS_KEY) {
      const u = await axios.get(`https://api.unsplash.com/photos/random?orientation=landscape&query=abstract`, {
        headers: { Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}` }
      });
      if (u.data?.urls?.regular) return u.data.urls.regular;
    }
  } catch {}

  try {
    if (process.env.PEXELS_API_KEY) {
      const p = await axios.get(`https://api.pexels.com/v1/search?query=abstract&per_page=50`, {
        headers: { Authorization: process.env.PEXELS_API_KEY }
      });
      if (p.data?.photos?.length) {
        return p.data.photos[Math.floor(Math.random()*p.data.photos.length)].src.landscape;
      }
    }
  } catch {}

  try {
    if (process.env.PIXABAY_API_KEY) {
      const q = await axios.get(`https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}&q=abstract&image_type=photo&per_page=50`);
      if (q.data?.hits?.length) {
        return q.data.hits[Math.floor(Math.random()*q.data.hits.length)].largeImageURL;
      }
    }
  } catch {}

  // fallback
  return process.env.GLINTX_LOGO || "https://picsum.photos/1600/900";
}
