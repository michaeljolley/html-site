---
---

<section>
  <div class="latest-posts">
    <h2>Latest <span>Posts</span></h2>
    <ul>
      {{#each this}}
        {{blogCard this}}
      {{/each}}
    </ul>
    <a class="all" href="/blog/" title="See all posts">See all posts</a>
  </div>
</section>
