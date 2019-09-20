import { Component, Prop, State, Watch, Build, h } from '@stencil/core';
import { RouterHistory, MatchResults } from '@stencil/router';
import { BlogPost } from '../../model/blog-post.model';
import { BLOG_DATA } from './prerender-blog-data';

@Component({
  tag: 'app-blog-post',
  styleUrl: 'app-blog-post.scss',
})
export class AppBlogPost {
  @Prop() history: RouterHistory;
  @Prop() match: MatchResults;
  @Prop() butter: any;
  @Prop() preRenderBlogPost: BlogPost;

  @State() blogPost: BlogPost;
  @State() blogPostIsError = false;
  @State() blogPostIsLoading = true;

  @State() otherPosts: BlogPost[];
  @State() nextPosts: BlogPost[];
  @State() nextPostsIsError = false;
  @State() nextPostsIsLoading = true;

  @State() nextPostsHelper: any;

  @Watch('match')
  watchHandler(newValue: any, oldValue: any) {
    if (newValue.params.slug !== oldValue.params.slug) {
      this.getPostContent();
      this.filterNextPosts(newValue.params.slug);
    }
  }

  componentWillLoad() {
    this.getPostContent();

    // get a bunch of blog posts and pick 3 to display in read next
    // it's kind of a hack but Butter doesn't support getting random posts
    const pageSize = 12;
    const listOptions = { page: 1, page_size: pageSize, exclude_body: true };
    if (Build.isBrowser) {
      this.butter.post
        .list(listOptions)
        .then(resp => {
          this.otherPosts = resp.data.data;
          this.filterNextPosts(this.match.params.slug);
          this.nextPostsIsLoading = false;
          this.nextPostsHelper = this.renderPosts(this.nextPosts, this.nextPostsIsLoading, this.nextPostsIsError);
        })

        .catch(resp => {
          this.nextPostsIsError = true;
          this.nextPostsIsLoading = false;
          this.nextPostsHelper = this.renderPosts(this.nextPosts, this.nextPostsIsLoading, this.nextPostsIsError);
          console.log(resp);
        });
    }
  }

  getPostContent() {
    if (!Build.isBrowser) {
      this.blogPost = BLOG_DATA.data.find(post => {
        return post.slug === this.match.params.slug;
      });
      this.setMetaTags();
    } else {
      this.blogPostIsLoading = true;
      return this.butter.post
        .retrieve(this.match.params.slug)
        .then(resp => {
          this.blogPost = resp.data.data;
          this.blogPostIsLoading = false;
          // set scroll to top for when navigating to a new blog post
          if (Build.isBrowser) {
            window.scrollTo(0, 0);
          }
          this.setMetaTags();
        })
        .catch(_ => {
          this.blogPostIsLoading = false;
          this.blogPostIsError = true;
        });
    }
  }

  setMetaTags() {
    let tagList = '';
    this.blogPost.tags.forEach((tag, i) => {
      if (i !== 0) {
        tagList = `${tagList} + , `;
      }
      tagList = tag.name;
    });

    document.querySelector("meta[property='og:title']").setAttribute('content', this.blogPost.title);
    document.querySelector("meta[property='og:description']").setAttribute('content', this.blogPost.meta_description);
    document.querySelector("meta[property='og:url']").setAttribute('content', `https://openforge.io/blog/${this.blogPost.slug}`);
    document.querySelector("meta[property='og:image']").setAttribute('content', this.blogPost.featured_image);
    document.querySelector("meta[name='keywords']").setAttribute('content', tagList);
  }

  filterNextPosts(slug: string) {
    // Filter out the post being displayed
    const otherPosts = this.otherPosts.filter(post => {
      return post.slug !== slug;
    });
    // Shuffle the array
    this.shuffleArray(otherPosts);
    // Pick the first three in the randomized array
    if (otherPosts.length > 2) {
      this.nextPosts = otherPosts.slice(0, 3);
    } else {
      this.nextPosts = otherPosts;
    }
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i = i - 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  renderPostContent(blogPost: BlogPost, isLoading: boolean, isError: boolean) {
    let post;
    if (isError) {
      post = <div>This post could not be found</div>;
    } else if (isLoading) {
      post = (
        <div class="loading">
          <i class="fa fa-spinner fa-spin" />
        </div>
      );
    } else if (blogPost) {
      post = <app-blog-content blogPost={blogPost} />;
    }
    return post;
  }

  renderPosts(blogData: BlogPost[], isLoading: boolean, isError: boolean) {
    let postData;
    if (isError) {
      postData = <div>Error loading posts</div>;
    } else if (isLoading) {
      postData = (
        <div class="loading">
          <i class="fa fa-spinner fa-spin" />
        </div>
      );
    } else if (blogData.length > 0) {
      postData = blogData.map(post => {
        const cardClass = 'blog-card-wrapper';
        if (post === null) {
          return <div class={cardClass} />;
        }
        return (
          <div class={cardClass}>
            <app-blog-card blogPost={post} />
          </div>
        );
      });
    } else if (blogData === []) {
      postData = <div>No posts found.</div>;
    }
    return postData;
  }

  render() {
    const post = this.renderPostContent(this.blogPost, this.blogPostIsLoading, this.blogPostIsError);
    return (
      <div class="blog-post-page">
        <div class="blog-post-content">
          <stencil-route-link url={'/blog'}>
            <h3>Back to Blog</h3>
          </stencil-route-link>
          <div>{post}</div>
        </div>
        <div class="blog-next-posts-header">
          <div class="blog-next-posts-divider">
            <div class="line-break" />
            <div class="spacer" />
          </div>
          <div class="blog-next-posts-title">Read Next</div>
          <div class="blog-next-posts-divider">
            <div class="line-break" />
            <div class="spacer" />
          </div>
        </div>
        <div class="next-posts">{this.nextPostsHelper}</div>
        <app-footer />
      </div>
    );
  }
}
