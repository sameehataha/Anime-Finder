const searchInput = document.getElementById("search");
const findBtn = document.querySelector(".btn-find");
const randomBtn = document.querySelector(".btn-random");
const loadingDiv = document.querySelector(".loading");
const resultDiv = document.querySelector(".result");
const form = document.querySelector("form");

function showLoading() {
  loadingDiv.classList.remove("d-none");
  resultDiv.innerHTML = "";
}

function hideLoading() {
  loadingDiv.classList.add("d-none");
}

function createAnimeBox(anime, isFound = true) {
  const animeBox = document.createElement("div");
  animeBox.className = `animebox ${isFound ? "found" : "notfound"}`;
  
  if (isFound) {
    animeBox.innerHTML = `
      <span class="closebox">&times;</span>
      <img src="${anime.images?.jpg?.image_url || anime.images?.webp?.image_url || ''}" 
           alt="${anime.title}" class="anime">
      <h3 class="anime">${anime.title}</h3>
    `;
  } else {
    animeBox.innerHTML = `
      <span class="closebox">&times;</span>
      <span>😢</span>
      <img src="error.png" alt="Not found">
      <p>Anime not found</p>
      <span class="animeid">Try searching with anime names like "Naruto", "One Piece", etc.</span>
      <div class="errormsg">Make sure to spell the anime name correctly</div>
    `;
  }
  

  const closeBtn = animeBox.querySelector(".closebox");
  closeBtn.addEventListener("click", () => {
    resultDiv.innerHTML = "";
    resultDiv.classList.remove("active");
  });
  
  return animeBox;
}

const searchAnime = async (animeName) => {
  try {
    showLoading();
    resultDiv.innerHTML = "";
    
    const animeResponse = await fetch(`https://api.jikan.moe/v4/anime?q=${animeName}&limit=1`);
    const animeData = await animeResponse.json();
    
    if (!animeResponse.ok || !animeData.data || animeData.data.length === 0) {
      hideLoading();
      resultDiv.classList.add("active");
      const animeBox = createAnimeBox(null, false);
      resultDiv.appendChild(animeBox);
      return;
    }
    
    const anime = animeData.data[0];
    hideLoading();
    resultDiv.classList.add("active");
    const animeBox = createAnimeBox(anime, true);
    resultDiv.appendChild(animeBox);
    
  } catch (error) {
    console.error("Error fetching anime:", error);
    hideLoading();
    resultDiv.classList.add("active");
    const animeBox = createAnimeBox(null, false);
    resultDiv.appendChild(animeBox);
  }
};

const getRandomAnime = async () => {
  try {
    showLoading();
    
    // Generate random ID between 1 and 50000
    const randomId = Math.floor(Math.random() * 50000) + 1;
    const animeResponse = await fetch(`https://api.jikan.moe/v4/anime/${randomId}`);
    const animeData = await animeResponse.json();
    
    if (!animeResponse.ok || !animeData.data) {
      // Try again with another random ID
      getRandomAnime();
      return;
    }
    
    const anime = animeData.data;
    hideLoading();
    resultDiv.classList.add("active");
    const animeBox = createAnimeBox(anime, true);
    resultDiv.appendChild(animeBox);
    
  } catch (error) {
    console.error("Error fetching random anime:", error);
    hideLoading();
    getRandomAnime(); 
  }
};

// Event listeners
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = searchInput.value.trim();
  
  if (query) {
    searchAnime(query);
  }
});

findBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const query = searchInput.value.trim();
  
  if (query) {
    searchAnime(query);
  }
});

randomBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getRandomAnime();
});

// Allow Enter key to trigger search
searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    const query = searchInput.value.trim();
    
    if (query) {
      searchAnime(query);
    }
  }
});

// Hide loading on page load
hideLoading();