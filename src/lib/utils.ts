import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const sortAscending = (
  array: RecipeType[],
  criteria: SortCriteriaType = 'title',
): RecipeType[] => {
  if (criteria === 'author') {
    return [
      ...array.sort((a, b) =>
        a.author
          .toLocaleLowerCase()
          .localeCompare(b.author.toLocaleLowerCase()),
      ),
    ]
  }

  if (criteria === 'date') {
    return [
      ...array.sort(
        (a, b) =>
          new Date(a.createdDate).getTime() - new Date(b.createdDate).getTime(),
      ),
    ]
  }

  return [
    ...array.sort((a, b) =>
      a.title.toLocaleLowerCase().localeCompare(b.title.toLocaleLowerCase()),
    ),
  ]
}

export const sortDescending = (
  array: RecipeType[],
  criteria: SortCriteriaType = 'title',
): RecipeType[] => {
  if (criteria === 'author') {
    return [
      ...array.sort((a, b) =>
        b.author
          .toLocaleLowerCase()
          .localeCompare(a.author.toLocaleLowerCase()),
      ),
    ]
  }

  if (criteria === 'date') {
    return [
      ...array.sort(
        (a, b) =>
          new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime(),
      ),
    ]
  }

  return [
    ...array.sort((a, b) =>
      b.title.toLocaleLowerCase().localeCompare(a.title.toLocaleLowerCase()),
    ),
  ]
}
