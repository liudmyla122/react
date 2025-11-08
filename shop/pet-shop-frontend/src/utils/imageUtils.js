// src/utils/imageUtils.js
export const getImageUrl = (imagePath, baseUrl = 'http://localhost:3333') => {
  if (!imagePath) {
    return 'https://placehold.co/100x100/AAAAAA/FFFFFF?text=No+Image'
  }

  if (typeof imagePath === 'string') {
    return imagePath.startsWith('http') ? imagePath : `${baseUrl}${imagePath}`
  }

  return 'https://placehold.co/100x100/AAAAAA/FFFFFF?text=No+Image'
}
