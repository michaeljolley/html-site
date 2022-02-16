import fs from 'fs/promises';
import Handlebars from 'handlebars';

import getBlogPosts from './sanity/index.js';
import getVideos from './youtube/index.js';

async function generateHome() {

  // Get the template
  const html = await fs.readFile('./src/pages/index.html', 'utf-8');
  const template = Handlebars.compile(html);

  // Get any dynamic content
  const blogPosts = await getBlogPosts();
  const videos = await getVideos();

  const latestPosts = blogPosts.slice(0, 6);
  const latestVideos = videos.slice(0, 3);

  // Inject blog posts into template
  const result = template({
    posts: latestPosts,
    videos: latestVideos
  });

  // Save output to /dist
  await fs.writeFile('./dist/index.html', result);

}

export default generateHome;