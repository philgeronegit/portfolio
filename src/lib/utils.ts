import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * This function is a wrapper around clsx and tailwind-merge
 * to merge classes together
 * @param inputs - The classes to merge
 * @returns The merged classes
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
