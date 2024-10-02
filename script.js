let currentIndex = 0;

// Array of image URLs
const images = [
    "https://via.placeholder.com/250",
    "https://via.placeholder.com/250/111111/FFFFFF?text=Image+1",
    "https://via.placeholder.com/250/222222/FFFFFF?text=Image+2",
    "https://via.placeholder.com/250/333333/FFFFFF?text=Image+3",
    "https://via.placeholder.com/250/444444/FFFFFF?text=Image+4",
    "https://via.placeholder.com/250/555555/FFFFFF?text=Image+5",
    "https://via.placeholder.com/250/666666/FFFFFF?text=Image+6",
    "https://via.placeholder.com/250/777777/FFFFFF?text=Image+7",
    "https://via.placeholder.com/250/888888/FFFFFF?text=Image+8",
    "https://via.placeholder.com/250/999999/FFFFFF?text=Image+9",
    "https://via.placeholder.com/250/AAAAAA/FFFFFF?text=Image+10",
    "https://via.placeholder.com/250/BBBBBB/FFFFFF?text=Image+11",
    "https://via.placeholder.com/250/CCCCCC/FFFFFF?text=Image+12",
    "https://via.placeholder.com/250/DDDDDD/FFFFFF?text=Image+13",
    "https://via.placeholder.com/250/EEEEEE/FFFFFF?text=Image+14",
    "https://via.placeholder.com/250/FFFFFF/000000?text=Image+15",
    "https://via.placeholder.com/250/111111/FFFFFF?text=Image+16",
    "https://via.placeholder.com/250/222222/FFFFFF?text=Image+17",
    "https://via.placeholder.com/250/333333/FFFFFF?text=Image+18",
    "https://via.placeholder.com/250/444444/FFFFFF?text=Image+19",
    "https://via.placeholder.com/250/555555/FFFFFF?text=Image+20"
];
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('interest-modal');
    const galleryContainer = document.querySelector('.gallery-container');
  
    // Show modal on page load
    modal.style.display = 'flex';
  
    // Handle interest form submission
    document.getElementById('interest-form').addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Get the selected interest
      const interest = document.querySelector('input[name="interest"]:checked').value;
  
      // Hide the modal
      modal.style.display = 'none';
  
      // Show the gallery
      galleryContainer.style.display = 'block';
  
      // Optionally store the interest in localStorage or make an API call
      localStorage.setItem('userInterest', interest);
  
      // You could filter gallery images based on the selected interest here
      console.log('User selected interest:', interest);
    });
  });
  document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('interest-modal');
  const galleryContainer = document.querySelector('.gallery-container');

  // Show modal on page load
  modal.style.display = 'flex';

  // Handle interest form submission
  document.getElementById('interest-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get the selected interest
    const interest = document.querySelector('input[name="interest"]:checked').value;

    // Check if the selected interest is "Travel"
    if (interest === 'travel') {
      // Redirect to the gallery section
      window.location.href = "#home";  // Moves to the gallery section
    } else {
      // Hide the modal and show the gallery if it's not travel
      modal.style.display = 'none';
      galleryContainer.style.display = 'block';
    }

    // Optionally store the interest in localStorage for future use
    localStorage.setItem('userInterest', interest);

    // You can use the interest to filter the gallery images later if necessary
    console.log('User selected interest:', interest);
  });
});
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('interest-modal');
    const galleryContainer = document.querySelector('.gallery-container');
  
    // Show modal on page load
    modal.style.display = 'flex';
    galleryContainer.style.display = 'none'; // Initially hide the gallery
  
    // Handle interest form submission
    document.getElementById('interest-form').addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Get the selected interest
      const interest = document.querySelector('input[name="interest"]:checked').value;
  
      // Hide the interest modal after selection
      modal.style.display = 'none';
  
      // Show the gallery after interest is selected
      galleryContainer.style.display = 'block';
  
      // Optionally store the interest in localStorage for future use
      localStorage.setItem('userInterest', interest);
  
      // Log the interest (you can add further actions based on the interest)
      console.log('User selected interest:', interest);
    });
  });
  
  // Function to close the interest modal when "Cancel" is clicked
  function closeInterestModal() {
    const modal = document.getElementById('interest-modal');
    modal.style.display = 'none';
  
    // Optionally hide the gallery as well if the user cancels the process
    const galleryContainer = document.querySelector('.gallery-container');
    galleryContainer.style.display = 'none';
  }
  
  

// Function to open modal
function openModal(index) {
    currentIndex = index;
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    modal.style.display = "block";
    modalImg.src = images[currentIndex];
    modal.classList.add('show');
}

// Function to close modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
    modal.classList.remove('show');
}

// Function to change image in the modal
function changeImage(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    document.getElementById('modal-img').src = images[currentIndex];
}

// Event listeners for keyboard navigation
document.addEventListener('keydown', (event) => {
    if (event.key === "ArrowLeft") {
        changeImage(-1);
    } else if (event.key === "ArrowRight") {
        changeImage(1);
    } else if (event.key === "Escape") {
        closeModal();
    }
});
// client/script.js



// Handle join form submission
document.querySelector('.join-section form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = event.target[0].value;

    fetch('http://localhost:5000/api/join', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        event.target.reset(); // Reset the form
    })
    .catch(error => console.error('Error:', error));
});
let currentIndex = 0;

const images = [
  "https://via.placeholder.com/250/111111/FFFFFF?text=Image+1",
  "https://via.placeholder.com/250/222222/FFFFFF?text=Image+2",
  "https://via.placeholder.com/250/333333/FFFFFF?text=Image+3",
  //... first set of images
];

const additionalImages = [
  "https://via.placeholder.com/250/444444/FFFFFF?text=Image+21",
  "https://via.placeholder.com/250/555555/FFFFFF?text=Image+22",
  "https://via.placeholder.com/250/666666/FFFFFF?text=Image+23",
  //... additional images
];

function renderImages(imageList) {
  const gallery = document.getElementById("gallery");
  imageList.forEach((imageSrc, index) => {
    const img = document.createElement("img");
    img.src = imageSrc;
    img.alt = `Image ${index + 1}`;
    img.classList.add("thumbnail");
    img.onclick = () => openModal(currentIndex + index);
    gallery.appendChild(img);
  });
}

// Function to open modal
function openModal(index) {
  currentIndex = index;
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  modal.style.display = "block";
  modalImg.src = images[currentIndex];
  modal.classList.add('show');
}

// Function to load more images
document.getElementById('loadMoreBtn').addEventListener('click', () => {
  renderImages(additionalImages);
  document.getElementById('loadMoreBtn').style.display = 'none'; // Hide button after loading
});

// Initial render of images
renderImages(images);
