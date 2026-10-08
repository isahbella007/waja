// Links to WAJA's videos on Cloudinary. Content stores just the video's path
// (e.g. "v1791475978/Zebby", the part after /upload/ without ".mp4").

export const CLOUDINARY_CLOUD = "nskvxiwi";
const BASE = `https://res.cloudinary.com/${CLOUDINARY_CLOUD}/video/upload`;

// The video itself, shrunk by Cloudinary as it streams: automatic quality and at
// most 1280px wide (never enlarged; the player is never wider), roughly halving the data used.
export function cloudinaryVideo(path: string) {
  return `${BASE}/q_auto,w_1280,c_limit/${path}.mp4`;
}

// A still from the video to use as its thumbnail, taken `atSecond` seconds in
export function cloudinaryPoster(path: string, atSecond = 3) {
  return `${BASE}/so_${atSecond},w_1280,c_limit,q_auto/${path}.jpg`;
}
