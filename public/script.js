// Ambil elemen-elemen yang diperlukan
const postcard = document.querySelector('.postcard');
const back = document.querySelector('.back');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Fungsi untuk membalikkan postcard
function flipPostcard() {
  postcard.classList.toggle('flipped');
  back.style.display = postcard.classList.contains('flipped') ? 'block' : 'none';
  
  if (postcard.classList.contains('flipped')) {
    prevButton.classList.add('show');  // Tombol kiri tampil
    nextButton.classList.remove('show');  // Tombol kanan disembunyikan
  } else {
    prevButton.classList.remove('show');  // Tombol kiri disembunyikan
    nextButton.classList.add('show');     // Tombol kanan tampil
  }
}


// Event listener untuk tombol kiri dan kanan
prevButton.addEventListener('click', () => {
  flipPostcard();
});

nextButton.addEventListener('click', () => {
  flipPostcard();
});

// Inisialisasi saat halaman pertama dimuat
window.onload = function() {
  prevButton.style.display = 'none';  // Tombol kiri disembunyikan saat pertama kali
  nextButton.style.display = 'block'; // Tombol kanan tampil saat pertama kali
};