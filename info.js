// A central data store matching what Google's AdSense web scrapers look for
const pageData = {
    about: `
        <h1>About VividWalls</h1>
        <p>Welcome to <strong>VividWalls</strong>, an independent digital art platform engineered to provide high-fidelity, uncompressed screen aesthetics for creators, developers, and customization enthusiasts.</p>
        <p>Founded and developed out of a core passion for clean UI layouts, frontend functionality, and striking visual elements. We believe that your digital workspace should be an inspiring, energetic environment. That's why we don't just host standard imagery; we focus on hand-tailored, post-production media edits, energetic funk-inspired visual layouts, and advanced direct-stream downloading pipelines that circumvent browser canvas rendering limitations.</p>
        <p>By integrating state-of-the-art public APIs alongside our proprietary custom image portfolios, VividWalls provides a seamless, one-click bridge between beautiful creative photography and your personal desktop or mobile screen.</p>
    `,
    privacy: `
        <h1>Privacy Policy</h1>
        <p><strong>Last Updated: May 2026</strong></p>
        <p>At VividWalls, accessible from our public web domain, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by VividWalls and how we use it.</p>
        
        <h3>Log Files & Data Transfers</h3>
        <p>VividWalls follows a standard technical procedure of using server log streams. When you request a high-speed download through our download engine, our backend server processes the image URL to safely package and hand over the file stream directly to your browser's local download manager. No personal images, local directory files, or browsing histories are logged, inspected, or saved by our background infrastructure.</p>
        
        <h3>Cookies and Web Beacons</h3>
        <p>Like any other website, VividWalls uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and layout selections.</p>
        
        <h3>Google DoubleClick DART Cookie</h3>
        <p>Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our platform and other sites on the internet. Visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy.</p>
        
        <h3>Third-Party Advertising Partners</h3>
        <p>Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on VividWalls, which are sent directly to users' browsers. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>
        <p>Note that VividWalls has no access to or control over these cookies that are used by third-party advertisers.</p>
    `,
    terms: `
        <h1>Terms and Conditions</h1>
        <p><strong>Welcome to VividWalls!</strong></p>
        <p>These terms and conditions outline the rules and regulations for the use of VividWalls' Platform. By accessing this website we assume you accept these terms and conditions in full. Do not continue to use VividWalls if you do not agree to take all of the terms stated on this page.</p>
        
        <h3>Intellectual Property License</h3>
        <p>Unless otherwise stated, VividWalls and/or its licensors own the intellectual property rights for all edited digital material, custom visual layouts, and rendering engine hooks on VividWalls. All intellectual property rights are reserved. You may access this from VividWalls for your own personal use subjected to restrictions set in these terms and conditions.</p>
        <p>You must not:</p>
        <ul>
            <li>Republish, mass-scrape, or commercially redistribute unedited core assets from VividWalls.</li>
            <li>Sell, rent, or sub-license standalone media files downloaded from our servers.</li>
            <li>Present uncredited creative works pulled from our integration APIs as your own proprietary commercial software.</li>
        </ul>
        
        <h3>Limitations of Liability</h3>
        <p>The wallpapers, live looping video previews, and media data streams on this website are provided "as is", without warranties of any kind. VividWalls does not guarantee that the external content fetched dynamically through public imagery APIs will always be completely online, complete, or entirely error-free.</p>
    `,
  contact: `
        <h1>Contact Us</h1>
        <p>Have a question about an edit, a suggestion for a new wallpaper category, or a business production inquiry? We would love to hear from you. Fill out the form below:</p>
        
        <form class="contact-form" action="https://api.web3forms.com/submit" method="POST">
        
            <input type="hidden" name="access_key" value="3f69cd50-c699-429c-9ac0-8e268e12d369">
            
            <input type="text" name="name" placeholder="Your Name" required>
            <input type="email" name="email" placeholder="Your Email Address" required>
            <textarea name="message" rows="6" placeholder="Your Message or Custom Request..." required></textarea>
            
            <button type="submit">Send Message</button>
        </form>
    `
};

// Routing engine: Reads the url (?page=privacy) and populates the text container dynamically
function loadInformationPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const pageKey = urlParams.get('page') || 'about'; // Default fallback to about us
    const contentArea = document.getElementById('content-area');

    if (pageData[pageKey]) {
        contentArea.innerHTML = pageData[pageKey];
        // Dynamic title configuration for clean tab headings
        document.title = `VividWalls - ${pageKey.charAt(0).toUpperCase() + pageKey.slice(1)}`;
    } else {
        contentArea.innerHTML = `<h1>Page Not Found</h1><p>The requested informational index could not be located.</p>`;
    }
}

// Boot up the router on window initialization
window.onload = loadInformationPage;