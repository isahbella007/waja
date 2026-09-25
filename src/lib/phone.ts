const VANITY_DIGITS: Record<string, string> = {
  A: "2", B: "2", C: "2", D: "3", E: "3", F: "3", G: "4", H: "4", I: "4",
  J: "5", K: "5", L: "5", M: "6", N: "6", O: "6", P: "7", Q: "7", R: "7", S: "7",
  T: "8", U: "8", V: "8", W: "9", X: "9", Y: "9", Z: "9",
};

// Turns a display number like "(800) 237-WAJA" into a dialable tel: link
export function toTelHref(phone: string) {
  const chars = phone.replace(/[^0-9A-Za-z+]/g, "").split("");
  const digits = chars.map((c) => (c === "+" ? c : VANITY_DIGITS[c.toUpperCase()] ?? c)).join("");
  return `tel:${digits}`;
}

export function toMapsHref(address: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}
