# Anime-Finder🎌
A simple and elegant web application to search and discover anime series. Built with vanilla JavaScript and powered by the Jikan API (MyAnimeList).

✨ Features
🔍 Search by Name: Find anime by searching with anime titles
🎲 Random Discovery: Get random anime recommendations
📱 Responsive Design: Works perfectly on desktop and mobile
⚡ Fast Loading: Quick API responses with loading animations
🎨 Clean UI: Modern, minimalist interface focused on anime images
❌ Easy Close: Simple close button to clear results

🚀 Demo
Live Demo https://anime-finder2.netlify.app/
🛠️ Technologies Used

HTML5 - Structure and semantics
CSS3 - Styling and responsive design
Vanilla JavaScript - Core functionality and API integration
Jikan API - MyAnimeList data source
Google Fonts - Poppins and Nunito fonts

📋 Prerequisites

Modern web browser (Chrome, Firefox, Safari, Edge)
Internet connection for API calls

⚙️ Installation & Setup

Clone the repository
bashgit clone https://github.com/sameehataha/anime-finder.git

Navigate to project folder
bashcd anime-finder

Open in browser

Simply open index.html in your web browser
Or use a local server like Live Server extension in VS Code



📁 Project Structure
anime-finder/
│
├── index.html          # Main HTML file
├── style.css           # CSS styles
├── index.js            # JavaScript functionality
├── README.md           # Project documentation
└── assets/             # Images and assets
    ├── anime.png       # Logo image
    ├── logo1.png       # Favicon
    └── spining-cat-meme-unscreen.gif  # Loading animation
🎯 How to Use

Search: Type an anime name in the search box (e.g., "Naruto", "One Piece")
Random: Click the "Random" button to discover new anime
View Results: See anime image and title in a clean card format
Close: Click the "×" button to close the result

🌐 API Information
This project uses the Jikan API - an unofficial MyAnimeList API:

Base URL: https://api.jikan.moe/v4
Endpoint Used: /anime?q={query}&limit=1
No API key required
Free to use

📱 Screenshots
Desktop View
Show Image
Mobile View
Show Image
🔧 Customization
Change Colors
Edit the CSS variables in style.css:
css/* Primary colors */
--primary-pink: #ff6b9d;
--primary-teal: #4ecdc4;
--background-gradient: linear-gradient(135deg, #fef7f0 0%, #e8f4fd 50%, #d4e7ff 100%);
Modify API Limit
In index.js, change the limit parameter:
javascript// Get more results (1-25)
const url = `https://api.jikan.moe/v4/anime?q=${animeName}&limit=5`;
🐛 Known Issues

Some anime might not have images available
API has rate limiting (1 request per second)
Random feature might occasionally fail due to invalid IDs

🚀 Future Enhancements

 Add anime details modal
 Implement favorites system
 Add genre filtering
 Include anime ratings and synopsis
 Add character information
 Implement pagination for multiple results

🤝 Contributing

Fork the repository
Create a feature branch (git checkout -b feature/amazing-feature)
Commit your changes (git commit -m 'Add amazing feature')
Push to the branch (git push origin feature/amazing-feature)
Open a Pull Request

📄 License
This project is open source and available under the MIT License.
👏 Acknowledgments

Jikan API for providing free MyAnimeList data
MyAnimeList for anime database
Google Fonts for beautiful typography
Anime community for inspiration

Project Link: https://github.com/sameehataha/anime-finder

⭐ If you found this project helpful, please give it a star! ⭐