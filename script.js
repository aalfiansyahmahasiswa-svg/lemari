// ambil semua gambar galeri
const images = document.querySelectorAll(
    ".lemari-grid img, .kitchenset-grid img"
);

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close");

// klik gambar → tampil modal
images.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
    });
});

// klik X → tutup
closeBtn.onclick = () => {
    modal.style.display = "none";
};

// klik area gelap → tutup
modal.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
};
