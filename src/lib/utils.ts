import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const sortAscending = (array: RecipeType[]): RecipeType[] => [
  ...array.sort((a, b) =>
    a.title.toLocaleLowerCase().localeCompare(b.title.toLocaleLowerCase()),
  ),
]

export const sortDescending = (array: RecipeType[]): RecipeType[] => [
  ...array.sort((a, b) =>
    b.title.toLocaleLowerCase().localeCompare(a.title.toLocaleLowerCase()),
  ),
]
