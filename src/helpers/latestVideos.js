import baseHelper from './baseHelper.js';

const html = `
<section>
  <div class="latest-videos">
    <h2>Latest <span>Videos</span></h2>
    <ul>
      {{#each videos}}
        {{videoCard this}}
      {{/each}}
    </ul>
    <a class="all" href="https://youtube.com/baldbeardedbuilder" title="See all videos">See all videos</a>
  </div>
</section>
`;

export default (videos) => baseHelper(html, { videos });