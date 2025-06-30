const photos = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
  'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
  'https://images.unsplash.com/photo-1519985176271-adb1088fa94c'
];
let idx = 0;

function showPhoto() {
  document.getElementById('photo').src = photos[idx];
}

document.getElementById('prev').onclick = function() {
  idx = (idx - 1 + photos.length) % photos.length;
  showPhoto();
};
document.getElementById('next').onclick = function() {
  idx = (idx + 1) % photos.length;
  showPhoto();
};
window.onload = showPhoto;
