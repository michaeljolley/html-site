import Handlebars from 'handlebars';

const html = `
<section>
  <div class="latest-posts">
    <h2>Latest <span>Posts</span></h2>
    <ul>
      {{#each allPosts}}
        {{blogCard this}}
      {{/each}}
    </ul>
    <a class="all" href="/blog/" title="See all posts">See all posts</a>
  </div>
</section>
`;

export function latestPosts(allPosts) {
  const template = Handlebars.compile(html);

  const renderedContent = template({ allPosts });

  return new Handlebars.SafeString(renderedContent);
}
