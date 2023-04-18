// src/index.ts
export function isValidMyanmarNRC(nrc: string): boolean {
  const regex =
    /^([1-9][0-9]{0,2})\/(([A-Za-z]|[0-9][0-9])?[A-Za-z]{1,2})\/([0-9]{6})$/;
  return regex.test(nrc);
}
