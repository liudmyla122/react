export function capitalize(str: string): string {
  if (!str) return str
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

export function reverseString(str: string): string {
  return str.split('').reverse().join('')
}
