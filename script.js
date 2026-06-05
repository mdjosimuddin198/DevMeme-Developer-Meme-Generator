// ===================================
// DevMeme - Developer Meme Generator
// Main JavaScript File
// ===================================

// Meme Data Array
const memes = [
  {
    id: 1,
    image: "https://i.imgflip.com/1h7in3.jpg",
    title: "Programmer Bugs",
    category: "debugging",
    defaultTop: "When the code works",
    defaultBottom: "But you don't know why",
  },
  {
    id: 2,
    image: "https://i.imgflip.com/261o3j.jpg",
    title: "Drake Meme",
    category: "javascript",
    defaultTop: "Reading the documentation",
    defaultBottom: "Copying from Stack Overflow",
  },
  {
    id: 3,
    image: "https://i.imgflip.com/30b1gx.jpg",
    title: "Distracted Developer",
    category: "javascript",
    defaultTop: "Writing clean code",
    defaultBottom: "Making it work then leaving",
  },
  {
    id: 4,
    image:
      "https://i.pinimg.com/736x/e9/46/cc/e946cc4f0bc0101cde73673bead05e11.jpg",
    title: "Two Buttons",
    category: "debugging",
    defaultTop: "Fix one bug",
    defaultBottom: "Create three new bugs",
  },
  {
    id: 5,
    image:
      "https://i.pinimg.com/736x/c9/63/e4/c963e4ad480a34062fe94edf5b49121f.jpg",
    title: "Change My Mind",
    category: "css",
    defaultTop: "CSS is easy",
    defaultBottom: "Change my mind",
  },
  {
    id: 6,
    image:
      "https://i.pinimg.com/736x/5b/3c/27/5b3c27c6d3eaaeb2a57dd76a5d8f9c55.jpg",
    title: "This is Fine",
    category: "debugging",
    defaultTop: "Production is on fire",
    defaultBottom: "This is fine",
  },
  {
    id: 7,
    image: "https://i.imgflip.com/2fm9x8.jpg",
    title: "Expanding Brain",
    category: "react",
    defaultTop: "Use console.log",
    defaultBottom: "Use debugger",
  },
  {
    id: 8,
    image:
      "https://i.pinimg.com/736x/b2/06/be/b206bef421695ba47610b57945146da2.jpg",
    title: "Stonks",
    category: "backend",
    defaultTop: "Code with no comments",
    defaultBottom: "STONKS",
  },
  {
    id: 9,
    image:
      "https://i.pinimg.com/736x/2a/a2/ce/2aa2ce7f9afa412b611db7c7e686f0ee.jpg",
    title: "One Does Not Simply",
    category: "debugging",
    defaultTop: "One does not simply",
    defaultBottom: "Deploy on Friday",
  },
  {
    id: 10,
    image:
      "https://i.pinimg.com/736x/49/0e/d2/490ed29e35334af002cbd34c41ad7e75.jpg",
    title: "Success Kid",
    category: "javascript",
    defaultTop: "Wrote code without errors",
    defaultBottom: "On first try",
  },
  {
    id: 11,
    image: "https://i.imgflip.com/4t0m5.jpg",
    title: "Philosoraptor",
    category: "javascript",
    defaultTop: "If arrays are objects",
    defaultBottom: "Why is typeof [] === 'object'?",
  },
  {
    id: 12,
    image:
      "https://i.pinimg.com/736x/17/34/67/1734670ebb106a42af5677f77b33a900.jpg",
    title: "Y U No",
    category: "css",
    defaultTop: "Y U NO",
    defaultBottom: "Center this div?!",
  },
  {
    id: 13,
    image: "https://i.imgflip.com/1otk96.jpg",
    title: "Surprised Pikachu",
    category: "debugging",
    defaultTop: "Ignores error messages",
    defaultBottom: "Surprised when code doesn't work",
  },
  {
    id: 14,
    image:
      "https://i.pinimg.com/736x/2d/ad/81/2dad811db92c35ffceb5ee0a54a3676e.jpg",
    title: "Bernie Sanders",
    category: "react",
    defaultTop: "I'm once again asking",
    defaultBottom: "For someone to review my PR",
  },
  {
    id: 15,
    image:
      "https://i.pinimg.com/736x/51/29/e7/5129e704b959add4f901fec0c85a7538.jpg",
    title: "Mocking Spongebob",
    category: "css",
    defaultTop: "It's just CSS they said",
    defaultBottom: "It'll be easy they said",
  },
  {
    id: 16,
    image:
      "https://i.pinimg.com/736x/dd/d1/a9/ddd1a91c60373a29f5cb8ea17f06774a.jpg",
    title: "Always Has Been",
    category: "backend",
    defaultTop: "Wait, it's all backend bugs?",
    defaultBottom: "Always has been",
  },
  {
    id: 17,
    image:
      "https://i.pinimg.com/736x/59/4f/d5/594fd5302420c8a7d74445d93d7e00c9.jpg",
    title: "First World Problems",
    category: "react",
    defaultTop: "My npm package has 2 stars",
    defaultBottom: "First World Problems",
  },
  {
    id: 18,
    image:
      "https://i.pinimg.com/736x/4a/a5/95/4aa5956b7257265bab56ab019006df53.jpg",
    title: "Roll Safe",
    category: "debugging",
    defaultTop: "Can't have bugs",
    defaultBottom: "If you don't write tests",
  },
  {
    id: 19,
    image: "https://i.imgflip.com/3oevdk.jpg",
    title: "Woman Yelling at Cat",
    category: "css",
    defaultTop: "Designer: Here's the mockup",
    defaultBottom: "CSS: *does whatever it wants*",
  },
  {
    id: 20,
    image:
      "https://i.pinimg.com/736x/e0/bc/70/e0bc706eeaf6ff537c4f61f2b5fdaae6.jpg",
    title: "Disaster Girl",
    category: "backend",
    defaultTop: "Deletes production database",
    defaultBottom: "*disaster girl smile*",
  },
];

// DOM Elements
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const uploadBtn = document.getElementById("uploadBtn");
const fileInput = document.getElementById("fileInput");
const topTextInput = document.getElementById("topText");
const bottomTextInput = document.getElementById("bottomText");
const previewTopText = document.getElementById("previewTopText");
const previewBottomText = document.getElementById("previewBottomText");
const memeImage = document.getElementById("memeImage");
const memeTitleDisplay = document.getElementById("memeTitleDisplay");
const galleryGrid = document.getElementById("galleryGrid");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector(".theme-icon");
const categoryButtons = document.querySelectorAll(".category-btn");

// State
let currentMeme = null;
let currentCategory = "all";
let isLightTheme = false;

// Initialize
function init() {
  loadThemePreference();
  renderGallery();
  generateRandomMeme();
  setupEventListeners();
}

// Event Listeners
function setupEventListeners() {
  generateBtn.addEventListener("click", generateRandomMeme);
  downloadBtn.addEventListener("click", downloadMeme);
  uploadBtn.addEventListener("click", () => fileInput.click());
  fileInput.addEventListener("change", handleImageUpload);

  topTextInput.addEventListener("input", updatePreviewText);
  bottomTextInput.addEventListener("input", updatePreviewText);

  themeToggle.addEventListener("click", toggleTheme);

  categoryButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      categoryButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.category;
      renderGallery();
    });
  });
}

// Generate Random Meme
function generateRandomMeme() {
  let filteredMemes = memes;

  if (currentCategory !== "all") {
    filteredMemes = memes.filter((m) => m.category === currentCategory);
  }

  if (filteredMemes.length === 0) {
    showToast("No memes found in this category!");
    return;
  }

  const randomIndex = Math.floor(Math.random() * filteredMemes.length);
  currentMeme = filteredMemes[randomIndex];

  // Update preview
  memeImage.src = currentMeme.image;
  memeTitleDisplay.textContent = currentMeme.title;

  // Set default text if inputs are empty
  if (!topTextInput.value) {
    topTextInput.value = currentMeme.defaultTop;
  }
  if (!bottomTextInput.value) {
    bottomTextInput.value = currentMeme.defaultBottom;
  }

  updatePreviewText();
  showToast(`Loaded: ${currentMeme.title}`);
}

// Update Preview Text
function updatePreviewText() {
  previewTopText.textContent = topTextInput.value;
  previewBottomText.textContent = bottomTextInput.value;
}

// Download Meme
async function downloadMeme() {
  if (!memeImage.src || memeImage.src === window.location.href) {
    showToast("No meme to download!");
    return;
  }

  try {
    const memePreview = document.getElementById("memePreview");

    // Temporarily increase quality for download
    const originalBorder = memePreview.style.border;
    memePreview.style.border = "none";

    const canvas = await html2canvas(memePreview, {
      useCORS: true,
      allowTaint: true,
      backgroundColor: "#1a1a2e",
      scale: 2,
    });

    // Restore border
    memePreview.style.border = originalBorder;

    // Create download link
    const link = document.createElement("a");
    link.download = `devmeme-${Date.now()}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();

    showToast("Meme downloaded successfully! 🎉");
  } catch (error) {
    console.error("Download error:", error);
    showToast("Failed to download. Try again!");
  }
}

// Handle Image Upload
function handleImageUpload(e) {
  const file = e.target.files[0];
  if (!file) return;

  if (!file.type.startsWith("image/")) {
    showToast("Please select an image file!");
    return;
  }

  const reader = new FileReader();
  reader.onload = (event) => {
    memeImage.src = event.target.result;
    memeTitleDisplay.textContent = "Custom Upload";
    currentMeme = {
      ...currentMeme,
      image: event.target.result,
      title: "Custom Upload",
    };
    showToast("Custom image uploaded! 📤");
  };
  reader.readAsDataURL(file);

  // Reset file input
  fileInput.value = "";
}

// Toggle Theme
function toggleTheme() {
  isLightTheme = !isLightTheme;
  document.documentElement.setAttribute(
    "data-theme",
    isLightTheme ? "light" : "dark",
  );
  themeIcon.textContent = isLightTheme ? "☀️" : "🌙";
  localStorage.setItem("devmeme-theme", isLightTheme ? "light" : "dark");
}

// Load Theme Preference
function loadThemePreference() {
  const savedTheme = localStorage.getItem("devmeme-theme");
  if (savedTheme === "light") {
    isLightTheme = true;
    document.documentElement.setAttribute("data-theme", "light");
    themeIcon.textContent = "☀️";
  }
}

// Render Gallery
function renderGallery() {
  let filteredMemes = memes;

  if (currentCategory !== "all") {
    filteredMemes = memes.filter((m) => m.category === currentCategory);
  }

  galleryGrid.innerHTML = "";

  filteredMemes.forEach((meme) => {
    const item = document.createElement("div");
    item.className = "gallery-item";
    item.innerHTML = `
      <img src="${meme.image}" alt="${meme.title}" loading="lazy">
      <div class="gallery-info">
        ${meme.title}
        <span class="gallery-category">${meme.category}</span>
      </div>
    `;
    item.addEventListener("click", () => selectMeme(meme));
    galleryGrid.appendChild(item);
  });
}

// Select Meme from Gallery
function selectMeme(meme) {
  currentMeme = meme;
  memeImage.src = meme.image;
  memeTitleDisplay.textContent = meme.title;
  topTextInput.value = meme.defaultTop;
  bottomTextInput.value = meme.defaultBottom;
  updatePreviewText();

  // Scroll to preview
  document.querySelector(".preview-section").scrollIntoView({
    behavior: "smooth",
    block: "center",
  });

  showToast(`Selected: ${meme.title}`);
}

// Toast Notification
function showToast(message) {
  // Remove existing toast
  const existingToast = document.querySelector(".toast");
  if (existingToast) {
    existingToast.remove();
  }

  // Create new toast
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);

  // Show toast
  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  // Hide after 3 seconds
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Preload images for smoother experience
function preloadImages() {
  memes.forEach((meme) => {
    const img = new Image();
    img.src = meme.image;
  });
}

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", () => {
  init();
  preloadImages();
});

// Handle image load errors
memeImage.addEventListener("error", function () {
  this.src =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='400' viewBox='0 0 500 400'%3E%3Crect fill='%231a1a2e' width='500' height='400'/%3E%3Ctext fill='%236b6b80' font-family='Arial' font-size='20' text-anchor='middle' x='250' y='200'%3EImage failed to load%3C/text%3E%3C/svg%3E";
});
