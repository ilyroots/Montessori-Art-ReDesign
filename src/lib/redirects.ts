import { redirects, externalRedirects } from "@/config/redirects";

export { redirects, externalRedirects };

/**
 * Find a redirect for a given path.
 */
export function findRedirect(path: string) {
  return redirects.find((r) => r.source === path);
}

/**
 * Check if a URL is an external redirect target.
 */
export function findExternalRedirect(url: string) {
  return externalRedirects.find((r) => r.source === url);
}
