const KEYS = {
    unsplash: 'yr1wxgn6oZ2XeIZcbZwBPpsImtrY6Ah8ZIn0DJ6cqiE',
    pexels: 'o1X7PyrGxEiaDgdyxq6j2ewlQsU8wBGg6ZIENUBThf4yudD59NiE2QUc',
    pixabay: '55660755-90f69456cc2ac320284d8b998',
};
const manualPhotos = [
    {
        type: 'image',
        preview: 'images/superman.webp',// Correct: No / at the start
        download: 'images/superman.webp',
        aspect:'mobile',
        author: 'Akshay',
        tags: ['superhero', 'dc', 'superman','trending','all'],
        isTrending: true
        
    },
     {
        type: 'image',
        preview: 'images/spiderman.jpg',// Correct: No / at the start
        download: 'images/spiderman.jpg',
        author: 'Akshay',
        aspect:'mobile',
        tags: ['superhero', 'marvel', 'spiderman','trending','all'],
        isTrending: true
        
    },
     {
        type: 'image',
        preview: 'images/@aidigital_sensei_threadsmate.com_1778321455.jpg',// Correct: No / at the start
        download: 'images/@aidigital_sensei_threadsmate.com_1778321455.jpg',
        author: 'Akshay',
        aspect:'mobile',
        tags: ['onepiece', 'anime', 'luffy','trending','all'],
        isTrending: true
        
    },
    {
        type: 'image',
        preview: 'images/@aidigital_sensei_threadsmate.com_1778321458.jpg',// Correct: No / at the start
        download: 'images/@aidigital_sensei_threadsmate.com_1778321458.jpg',
        author: 'Akshay',
        aspect:'mobile',
        tags: ['onepiece', 'anime', 'luffy','trending','all'],
        isTrending: true
        
    },
    {
        preview: 'images/@call_me_baba5161_threadsmate.com_1778322805.jpg',
        download: 'images/@call_me_baba5161_threadsmate.com_1778322805.jpg',
        author: 'Akshay',
        tags: ['marvel', 'trending', 'spiderman','all'],
        aspect: 'pc',
        isTrending: true
    },
    {
        preview: 'images/@call_me_baba5161_threadsmate.com_1778322789.jpg',
        download: 'images/@call_me_baba5161_threadsmate.com_1778322789.jpg',
        author: 'Akshay',
        tags: ['marvel', 'trending', 'spiderman','all'],
        aspect: 'pc',
         isTrending: true
    },
    {
        preview: 'images/@call_me_baba5161_threadsmate.com_1778322780.jpg',
        download: 'images/@call_me_baba5161_threadsmate.com_1778322780.jpg',
        author: 'Akshay',
        tags: ['trending', 'marvel', 'deadpool','all'],
        aspect: 'pc',
         isTrending: true
    },
    {
        preview: 'images/@getgreenthumb_threadsmate.com_1778322659.jpg',
        download: 'images/@getgreenthumb_threadsmate.com_1778322659.jpg',
        author: 'Akshay',
        tags: ['car&bike', 'trending', 'bmw', 'm4 competition','all'],
        aspect: 'pc',
         isTrending: true
    },
    {
        preview: 'images/@getgreenthumb_threadsmate.com_1778322653.jpg',
        download: 'images/@getgreenthumb_threadsmate.com_1778322653.jpg',
        author: 'Akshay',
        tags: ['car&bike', 'trending', 'bmw', 'm4 competition','all'],
        aspect: 'pc',
         isTrending: true
    }
    
];
const manualVideos = [
    {
        type: 'video', // Essential for the displayItems logic
        preview: 'videos/sukuna-live.mp4', // Path to your local video
        download: 'videos/sukuna-live.mp4',
        author: 'Akshay',
        tags: ['sukuna', 'anime', 'live', 'trending','jujutsu kaisen'],
        aspect: 'mobile', 
        isTrending: true
    },
    {
        type: 'video',
        preview: 'videos/nature-loop.mp4',
        download: 'videos/nature-loop.mp4',
        author: 'Akshay',
        tags: ['nature', 'waterfall', 'live'],
        aspect: 'mobile',
        isTrending: true
    },
    {
        type: 'video',
        type: 'video',
        preview: 'videos/threadsdownloader.com_d5e4e7 (4).mp4',
        download: 'videos/threadsdownloader.com_d5e4e7 (4).mp4',
        author: 'Akshay',
        tags: ['anime', 'trending', 'aesthetic', 'all',],
        aspect: 'pc',
        isTrending: true
    },
    {
        type: 'video',
        preview: 'videos/threadsdownloader.com_f863a1 (3).mp4',
        download: 'videos/threadsdownloader.com_f863a1 (3).mp4',
        author: 'Akshay',
        tags: ['anime', 'goku', 'trending', 'aesthetic', 'all'],
        aspect: 'pc',
        isTrending: true
    },
    {
        type: 'video',
        preview: 'videos/threadsdownloader.com_f863a1 (2).mp4',
        download: 'videos/threadsdownloader.com_f863a1 (2).mp4',
        author: 'Akshay',
        tags: ['trending', 'marvel', 'spiderman', 'all'],
        aspect: 'pc',
        isTrending: true
    },
    {
        type: 'video',
        preview: 'videos/threadsdownloader.com_f863a1 (1).mp4',
        download: 'videos/threadsdownloader.com_f863a1 (1).mp4',
        author: 'Akshay',
        tags: ['luffy', 'onepiece', 'anime', 'trending', 'all'],
        aspect: 'pc',
        isTrending: true
    },
    {
        type: 'video',
        preview: 'videos/threadsdownloader.com_f863a1.mp4',
        download: 'videos/threadsdownloader.com_f863a1.mp4',
        author: 'Akshay',
        tags: ['anime', 'goku', 'trending', 'aesthetic', 'all'],
        aspect: 'pc',
        isTrending: true
    },
    {
        type: 'video',
        preview: 'videos/threadsdownloader.com_d5e4e7 (3).mp4',
        download: 'videos/threadsdownloader.com_d5e4e7 (3).mp4',
        author: 'Akshay',
        tags: ['anime', 'mountain', 'cool', 'nature', 'aesthetic', 'trending', 'all'],
        aspect: 'pc',
        isTrending: true
    },
    { 
        type: 'video',
        preview: 'videos/threadsdownloader.com_d5e4e7 (2).mp4',
        download: 'videos/threadsdownloader.com_d5e4e7 (2).mp4',
        author: 'Akshay',
        tags: ['anime', 'girl', 'trending', 'all'],
        aspect: 'pc',
        isTrending: true
    },
    {
        type: 'video',
        preview: 'videos/threadsdownloader.com_d5e4e7 (1).mp4',
        download: 'videos/threadsdownloader.com_d5e4e7 (1).mp4',
        author: 'Akshay',
        tags: ['anime', 'girl', 'trending', 'all', 'night'],
        aspect: 'pc',
        isTrending: true
    },
    {
        type: 'video',
        preview: 'videos/threadsdownloader.com_d5e4e7.mp4',
        download: 'videos/threadsdownloader.com_d5e4e7.mp4',
        author: 'Akshay',
        tags: ['anime', 'trending', 'all', 'aesthetic', 'ninja', 'warrior'],
        aspect: 'pc',
        isTrending: true
    },
    {
        type: 'video',
        preview: 'videos/threadsdownloader.com_fabdab.mp4',
        download: 'videos/threadsdownloader.com_fabdab.mp4',
        author: 'Akshay',
        tags: ['anime', 'trending', 'all', 'demon slayer', 'ninja', 'evening'],
        aspect: 'pc',
        isTrending: true
    }
];
// REPLACE THESE WITH YOUR ACTUAL API KEYS

let currentMain = ''; 
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const orientation = isMobile ? 'portrait' : 'landscape';
const pixabayOrientation = isMobile ? 'vertical' : 'horizontal';

// --- 2. THE MAIN ENGINE ---
async function fetchGallery(query = '') {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '<div class="loader">Curating Trending Walls...</div>';

    const lowerQuery = query.toLowerCase();
    const userDevice = window.innerWidth < 768 ? 'mobile' : 'pc';
    const mode = (typeof currentMain !== 'undefined') ? currentMain : 'home';

    try {
        let combinedResults = [];

        if (mode === 'live') {
            // --- LIVE VIDEO LOGIC ---
            const matchedManualVideos = (typeof manualVideos !== 'undefined') ? manualVideos.filter(vid => {
                const deviceMatch = vid.aspect === 'all' || vid.aspect === userDevice;
                if (!deviceMatch) return false;
                if (query === 'trending') return vid.isTrending;
                if (!query || query === 'popular' || query === '') return true;
                return vid.tags.some(tag => tag.toLowerCase().includes(lowerQuery));
            }) : [];

            // PRIORITY 1: Show your edits immediately
            displayItems(matchedManualVideos);

            try {
                const apiQuery = (query === 'trending') ? 'popular' : query;
                const [pVideos, pixVideos] = await Promise.all([
                    getPexelsVideos(apiQuery),
                    getPixabayVideos(apiQuery)
                ]);
                combinedResults = [...matchedManualVideos, ...pVideos, ...pixVideos];
            } catch (e) { console.warn("Video APIs slow/failed"); combinedResults = matchedManualVideos; }

        } else {
            // --- PHOTO LOGIC ---
            const matchedManualPhotos = (typeof manualPhotos !== 'undefined') ? manualPhotos.filter(photo => {
                const deviceMatch = photo.aspect === 'all' || photo.aspect === userDevice;
                if (!deviceMatch) return false;
                if (query === 'trending') return photo.isTrending;
                if (!query || query === 'popular' || query === '') return true;
                return photo.tags.some(tag => tag.toLowerCase().includes(lowerQuery));
            }) : [];

            // PRIORITY 1: Show your photos immediately
            displayItems(matchedManualPhotos);

            try {
                const apiQuery = (query === 'trending') ? 'nature aesthetic' : query;
                const [u, p, pix] = await Promise.all([
                    getUnsplashPhotos(apiQuery),
                    getPexelsPhotos(apiQuery),
                    getPixabayPhotos(apiQuery)
                ]);
                combinedResults = [...matchedManualPhotos, ...u, ...p, ...pix];
            } catch (e) { console.warn("Photo APIs slow/failed"); combinedResults = matchedManualPhotos; }
        }

        // Final update with everything combined
        if (combinedResults.length > 0) {
            displayItems(combinedResults);
        } else if (gallery.innerHTML.includes('loader')) {
            gallery.innerHTML = '<p class="no-results">No wallpapers found.</p>';
        }

    } catch (error) {
        console.error("Critical error:", error);
        gallery.innerHTML = '<p class="error">System error. Please check your manual data arrays.</p>';
    }
}
// --- 3. API FETCHERS (PHOTOS) ---

async function getUnsplashPhotos(query) {
    const res = await fetch(`https://api.unsplash.com/search/photos?query=${query}&orientation=${orientation}&per_page=15&client_id=${KEYS.unsplash}`);
    const data = await res.json();
    return (data.results || []).map(img => ({
        type: 'image',
        preview: img.urls.regular,
        download: img.urls.full,
        author: img.user.name
    }));
}

async function getPexelsPhotos(query) {
    const res = await fetch(`https://api.pexels.com/v1/search?query=${query}&orientation=${orientation}&per_page=15`, {
        headers: { Authorization: KEYS.pexels }
    });
    const data = await res.json();
    return (data.photos || []).map(img => ({
        type: 'image',
        preview: img.src.large,
        download: img.src.original,
        author: img.photographer
    }));
}

async function getPixabayPhotos(query) {
    const res = await fetch(`https://pixabay.com/api/?key=${KEYS.pixabay}&q=${encodeURIComponent(query)}&orientation=${pixabayOrientation}&per_page=15`);
    const data = await res.json();
    return (data.hits || []).map(img => ({
        type: 'image',
        preview: img.largeImageURL,
        download: img.largeImageURL,
        author: img.user
    }));
}

// --- 4. API FETCHERS (VIDEOS / LIVE) ---

async function getPexelsVideos(query) {
    // If the query is too specific (like Marvel), Pexels might have 0 videos. 
    // We fall back to "abstract" if the main "popular" search is triggered.
    const q = (query === 'popular' || query === 'all') ? 'abstract loop' : query;
    const res = await fetch(`https://api.pexels.com/videos/search?query=${q}&orientation=${orientation}&per_page=15`, {
        headers: { Authorization: KEYS.pexels }
    });
    const data = await res.json();
    return (data.videos || []).map(vid => ({
        type: 'video',
        preview: vid.video_files[0].link,
        download: vid.video_files[0].link,
        author: vid.user.name
    }));
}

async function getPixabayVideos(query) {
    const q = (query === 'popular' || query === 'all') ? 'nature' : query;
    const res = await fetch(`https://pixabay.com/api/videos/?key=${KEYS.pixabay}&q=${encodeURIComponent(q)}&orientation=${pixabayOrientation}&per_page=15`);
    const data = await res.json();
    return (data.hits || []).map(vid => ({
        type: 'video',
        preview: vid.videos.medium.url,
        download: vid.videos.large.url,
        author: vid.user
    }));
}

// --- 5. DISPLAY & INTERFACE LOGIC ---

function displayItems(items, query = '') { // Make sure query is passed here if you check it
    const gallery = document.getElementById('gallery');
    if (!items || items.length === 0) return;
    
    gallery.innerHTML = ''; // Clear loader or old items

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'wall-card';

        // 1. Right here is where "item" is active! 
        const trendingBadge = (item.author === 'ashik' && query === 'trending')
            ? `<div class="trending-badge">★ Priority</div>`
            : '';

        const isVideo = item.type === 'video' || (item.download && item.download.endsWith('.mp4'));
        const content = isVideo 
            ? `<video src="${item.preview}" loop muted onmouseover="this.play()" onmouseout="this.pause()"></video>` 
            : `<img src="${item.preview}" loading="lazy">`;

        const extension = isVideo ? '.mp4' : '.jpg';
        const fileName = `VividWalls-${Date.now()}${extension}`;

        // 2. Insert the trendingBadge template variable cleanly inside the card HTML string
        card.innerHTML = `
            ${trendingBadge}
            ${content}
            <div class="card-info">
                <span>By ${item.author || 'Akshay'}</span>
                <button 
                    onclick="startDirectDownload('${item.download || item.preview}', '${fileName}')" 
                    class="download-btn">
                    Download
                </button>
            </div>
        `;
        gallery.appendChild(card);
    });
}

// Navigation Logic
function setMainCategory(type) {
    currentMain = type;
    document.querySelectorAll('.main-btn').forEach(btn => btn.classList.remove('active'));
    // We use event.currentTarget to be safer
    if (event) event.currentTarget.classList.add('active');
    fetchGallery('popular');
}

function filter(query) {
    document.querySelectorAll('.sub-btn').forEach(btn => btn.classList.remove('active'));
    if (event) event.currentTarget.classList.add('active');
    fetchGallery(query);
}

// --- 6. SEARCH BAR LOGIC ---
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

function performSearch() {
    const query = searchInput.value.trim();
    if (query !== "") {
        fetchGallery(query);
    }
}

searchBtn.addEventListener('click', performSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') performSearch();
});

// Initial Load
window.onload = () => {
    fetchGallery(isMobile ? 'mobile wallpaper' : 'desktop wallpaper');
};
// Ensure 'item' is NOT written anywhere inside this global function block!
function startDirectDownload(url, filename) {
    if (!url || url === 'undefined') {
        alert("Error: This wallpaper has no valid download link.");
        return;
    }
    const encodedUrl = encodeURIComponent(url);
    
    // Change this line to your live backend URL
    const serverUrl = `https://vividwalls-backend.onrender.com/download?url=${encodedUrl}&name=${filename}`;
    window.location.href = serverUrl;
}
// Inside your displayItems loop, add this check:

   
   

function getDeviceType() {
    // 768px is the standard cutoff for tablets/phones
    return window.innerWidth < 768 ? 'mobile' : 'pc';
}
