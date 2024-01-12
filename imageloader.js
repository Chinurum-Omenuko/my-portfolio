// myImageLoader.js
export default function myImageLoader({ src, width, quality }) {
    return `https://ibb.co/Hdj60SC/${src}?w=${width}&q=${quality || 75}`
   }
   