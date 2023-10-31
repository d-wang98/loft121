import { bucket } from "./storage";

export async function getImage(name: string): Promise<string> {
  const [url] = await bucket.file(name).getSignedUrl({
    version: 'v2',
    action: 'read',
    expires: Date.now() + 1000 * 60 * 60,
  });
  return url;
}
