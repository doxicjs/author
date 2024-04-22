import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type TVariantMap<
  V extends string,
  D = undefined,
  N = undefined,
> = D extends string
  ? Record<
      V,
      {
        base: string
      } & (N extends string
        ? Record<N, Record<D, string>>
        : {
            dynamic?: Record<D, string>
          })
    >
  : Record<V, string>
