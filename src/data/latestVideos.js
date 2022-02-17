import dotenv from 'dotenv';

dotenv.config();

import Parser from 'rss-parser';
const parser = new Parser({
  customFields: {
    item: ['media:group', 'media:thumbnail'],
  },
});

async function latestVideos() {
  const feed = await parser.parseURL(
    `https://www.youtube.com/feeds/videos.xml?channel_id=${process.env.YOUTUBE_CHANNEL_ID}`
  )

  const videos = feed.items.map((item) => {
    return {
      title: item.title,
      link: item.link,
      id: item.id.replace('yt:video:', ''),
      thumbnail: item['media:group']['media:thumbnail'][0].$.url,
      date: item.pubDate,
      description: item['media:group']['media:description'][0],
    }
  })

  return videos.slice(0, 3);
}

export default latestVideos;