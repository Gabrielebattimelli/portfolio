// app/sitemap.xml/route.ts

// This function generates the sitemap and returns it as an XML response.
export async function GET() {
    // Replace with your actual domain
    const BASE_URL = 'https://gabrielebattimelli.com';

    // Define all your images. Use absolute URLs.
    const images = [
        { url: `${BASE_URL}/1.png`, title: 'Gabriele Battimelli at Better Internet for Kids event in Brussels' },
        { url: `${BASE_URL}/2.png`, title: 'Gabriele Battimelli at Generazioni Connesse youth panel' },
        { url: `${BASE_URL}/3.png`, title: 'Gabriele Battimelli Public speaking at an advocacy event' },
        { url: `${BASE_URL}/4.png`, title: 'Gabriele Battimelli Meeting with the youth council' },
        { url: `${BASE_URL}/5.png`, title: 'Gabriele Battimelli at Flutter and Firebase app development' },
        { url: `${BASE_URL}/6.png`, title: 'Gabriele Battimelli at SpreadIt startup project' },
        { url: 'https://video.gabrielebattimelli.com/Screenshot1.png', title: 'Gabriele Battimelli' },
        { url: 'https://video.gabrielebattimelli.com/Screenshot.png', title: 'Gabriele Battimelli' }
    ];

    // Define all your videos.
    const videos = [
        {
            title: 'Adelante for Students App Demo',
            description: 'A demonstration of the "Adelante for students" app, which helps high schoolers share study materials.',
            thumbnail_loc: `${BASE_URL}/5.png`,
            content_loc: 'https://video.gabrielebattimelli.com/adelante.mp4',
        },
        {
            title: 'SpreadIt - AI Social Media Manager',
            description: 'An introduction to Spreadit, an AI-powered social media manager for startups.',
            thumbnail_loc: `${BASE_URL}/6.png`,
            content_loc: 'https://video.gabrielebattimelli.com/spreadit.mp4',
        },
        {
            title: 'Gabriele Battimelli talking about AI',
            description: 'Gabriele Battimelli talking about AI at a conferance.',
            thumbnail_loc: 'https://video.gabrielebattimelli.com/Screenshot1.png',
            content_loc: 'https://video.gabrielebattimelli.com/LinkedInvideo%201.mp4',
        },
        {
            title: 'Gabriele Battimelli talking about AI at a conferance.',
            description: 'A second short professional video clip from the main carousel.',
            thumbnail_loc: 'https://video.gabrielebattimelli.com/Screenshot.png',
            content_loc: 'https://video.gabrielebattimelli.com/LinkedInvideo.mp4',
        }
    ];

    // Manually construct the XML string
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" 
  xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
>
  <url>
    <loc>${BASE_URL}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
    ${images.map(image => `
    <image:image>
      <image:loc>${image.url}</image:loc>
      <image:title>${image.title}</image:title>
    </image:image>`).join('')}
    ${videos.map(video => `
    <video:video>
      <video:thumbnail_loc>${video.thumbnail_loc}</video:thumbnail_loc>
      <video:title>${video.title}</video:title>
      <video:description>${video.description}</video:description>
      <video:content_loc>${video.content_loc}</video:content_loc>
    </video:video>`).join('')}
  </url>
</urlset>`;

    // Return the sitemap as an XML response
    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
