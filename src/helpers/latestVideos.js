import Handlebars from 'handlebars';

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

export function latestVideos(videos) {
  const template = Handlebars.compile(html);

  const renderedContent = template({ videos });

  return new Handlebars.SafeString(renderedContent);
}
