import { Component, State, h, Build } from '@stencil/core';
import { BlogPost } from '../../model/blog-post.model';
import { BlogMeta } from '../../model/blog-meta.model';
import { BlogCategory } from '../../model/blog-category.model';
import * as Fetch from '../../shared/fetch-handler';

@Component({
  tag: 'app-blog',
  styleUrl: 'app-blog.scss',
})
export class AppBlog {
  @State() featuredPost: BlogPost = null;
  @State() featuredIsError: boolean = false;
  @State() featuredIsLoading: boolean = true;

  // To keep track of the filter state - if the user clears the search query, it will return to this
  @State() blogFilter: string = ''; // Filter cannot be used at the same time as search
  @State() blogPostsData: BlogPost[] = [];
  @State() blogNumberOfPages: number = 0;
  @State() blogCurrentPage: number = 1;
  @State() blogMeta: BlogMeta;
  @State() blogIsError: boolean = false;
  @State() blogIsLoading: boolean = true;

  // Use searchQuery to keep track of whether or not search is being used
  @State() searchQuery: string = '';
  @State() allBlogPosts: BlogPost[] = [];
  @State() searchPostsData: BlogPost[] = [];
  @State() searchNumberOfPages: number = 0;
  @State() searchCurrentPage: number = 1;
  @State() searchMeta: BlogMeta;
  @State() searchIsError: boolean = false;
  @State() searchIsLoading: boolean = false;

  @State() displaySearchBar: boolean = false;

  pageSize = 3;
  indexOfFeaturedPost = -1;
  pageOfFeaturedPost = 0;
  private filters: BlogCategory[] = [
    {
      name: 'All',
      slug: '',
    },
    {
      name: 'Announcements',
      slug: 'announcements',
    },
    {
      name: 'Development',
      slug: 'development',
    },
    {
      name: 'Design',
      slug: 'design',
    },
    {
      name: 'Business',
      slug: 'business',
    },
  ];

  componentWillLoad() {
    this.getAllBlogPosts();
  }

  componentDidLoad() {
    if (Build.isBrowser) {
      window.scrollTo(0, 0);
    }
    const input = document.getElementById('blog-search');
    input.addEventListener('search', () => this.handleSearch(input.innerText));

    document.querySelector("meta[property='og:title']").setAttribute('content', "Mobile Apps: News, Technology, Strategies, and How-To's");
    document
      .querySelector("meta[property='og:description']")
      .setAttribute('content', "The latest on mobile app technologies, strategies, and how-to's. Learn more about updates from OpenForge and projects from our team.");
    document.querySelector("meta[property='og:url']").setAttribute('content', 'https://openforge.io/blog/');
    document.querySelector("meta[property='og:image']").setAttribute('content', 'https://openforge.io/assets/blog-header.png');
    document.querySelector("meta[name='keywords']").setAttribute('content', 'Mobile apps, mobile app news, mobile applications, mobile app technology, mobile app strategies, mvp apps');
  }

  async getAllBlogPosts() {
    this.blogIsLoading = true;
    const resp = await Fetch.fetchBlogPosts();
    if (resp) {
      this.allBlogPosts = resp.data;
      this.blogMeta = resp.meta;
      this.blogNumberOfPages = Math.ceil(resp.meta.count / this.pageSize);

      this.getFeaturedPost();

      // Find the index of the featuredPost.
      this.indexOfFeaturedPost = this.allBlogPosts.findIndex(post => {
        return post.title === this.featuredPost.title && post.published === this.featuredPost.published;
      });
      // Find the page where the featuredPost is if found the featuredPost
      if (this.indexOfFeaturedPost > -1) {
        this.pageOfFeaturedPost = Math.floor(this.indexOfFeaturedPost / this.pageSize) + 1;
      }

      this.getBlogPosts(1);
    }
    this.blogIsLoading = false;
  }

  getFeaturedPost() {
    this.featuredIsLoading = true;
    if (this.allBlogPosts.length > 0) {
      this.featuredPost = this.allBlogPosts[0];
      this.featuredIsLoading = false;
    }
  }

  getSearchPosts(page) {
    this.searchIsLoading = true;
    Fetch.fetchSearchPosts(this.searchQuery, page, this.pageSize).then(resp => {
      if (resp.data) {
        this.searchPostsData = resp.data;
        this.searchMeta = resp.meta;

        // Find the index of the featuredPost from the searhchPostsData
        const index = this.searchPostsData.findIndex(post => {
          return post.title === this.featuredPost.title && post.published === this.featuredPost.published;
        });
        // If found it, remove it from the searchPostsData to avoid display again.
        if (index >= 0) this.searchPostsData.splice(index, 1);

        this.searchNumberOfPages = Math.ceil(this.searchPostsData.length / this.pageSize);
        this.searchCurrentPage = page;
      } else {
        this.searchIsError = true;
      }
    });
    this.searchIsLoading = false;
  }

  async getBlogPosts(page: number) {
    this.blogIsLoading = true;
    if (this.blogFilter) {
      this.blogPostsData = await Fetch.fetchFilteredPosts(this.blogFilter, 1, this.pageSize, true);

      // Find the index of the featuredPost from the blogPostsData
      const index = this.blogPostsData.findIndex(post => {
        return post.title === this.featuredPost.title && post.published === this.featuredPost.published;
      });
      // If found it, remove it from the blogPostsData to avoid display again.
      if (index >= 0) this.blogPostsData.splice(index, 1);

      this.blogNumberOfPages = Math.ceil(this.blogPostsData.length / this.pageSize);
      this.blogCurrentPage = 1;
    } else {
      this.blogNumberOfPages = Math.ceil(this.allBlogPosts.length / this.pageSize);
      this.blogPostsData = [];
      let index = (page - 1) * this.pageSize;
      let endPoint = Math.min(this.allBlogPosts.length, page * this.pageSize);

      // Adjust the index and the endPoint by the index of the featuredPost
      if (page > this.pageOfFeaturedPost) {
        index += 1;
      }
      if (page === this.pageOfFeaturedPost) {
        endPoint += 1;
      }

      for (index; index < endPoint; index += 1) {
        // Don't push to the blogPostsData if it is the featuredPost.
        if (index !== this.indexOfFeaturedPost) this.blogPostsData.push(this.allBlogPosts[index]);
      }
    }
    this.blogIsLoading = false;
  }

  handleSearch(query) {
    this.searchQuery = query;
    if (this.searchQuery) {
      this.getSearchPosts(1);
    } else {
      this.clearSearch();
    }
  }

  clearSearch() {
    this.searchQuery = '';
    this.searchPostsData = [];
    this.searchMeta = null;
    this.searchNumberOfPages = 0;
    this.searchCurrentPage = 1;
  }

  handleFilter(filterName: string) {
    if (!this.searchQuery && this.blogFilter !== filterName) {
      this.blogFilter = filterName;
      this.getBlogPosts(1);
    }
  }

  handlePaging(event) {
    const filters = document.getElementById('blog-filters');
    filters.scrollIntoView(true);
    let newPage;
    switch (event.target.id) {
      case 'nav-to-next':
        if (this.blogMeta.next_page) {
          newPage = this.blogMeta.next_page;
        }
        break;
      case 'nav-to-previous':
        if (this.blogMeta.previous_page) {
          newPage = this.blogMeta.previous_page;
        }
        break;
      default:
        newPage = parseInt(event.target.id.substr(-1), 10);
        break;
    }

    if (this.searchQuery) {
      this.searchCurrentPage = newPage;
      this.getSearchPosts(newPage);
    } else {
      this.blogCurrentPage = newPage;
      this.getBlogPosts(newPage);
    }
    window.scrollTo(0, 0);
  }

  renderFeaturedPost(featuredPost: BlogPost, isLoading: boolean, isError: boolean) {
    if (isError) {
      return <div>Error loading featured post</div>;
    }
    if (isLoading) {
      return (
        <div class="loading">
          <i class="fa fa-spinner fa-spin" />
        </div>
      );
    }
    return <app-blog-featured blogPost={featuredPost} />;
  }

  renderFilters(selectedFilter: string, isLoading: boolean, searchQuery: string) {
    return this.filters.map(filter => {
      let filterClass = selectedFilter === filter.slug ? 'blog-filter-item active' : 'blog-filter-item';
      let filterLinkClass = selectedFilter === filter.slug ? 'blog-filter-item active' : 'blog-filter-item';
      if (isLoading || searchQuery) {
        filterClass += ' disabled';
        filterLinkClass += ' disabled';
      }
      const cyName = filter.slug ? filter.slug : 'all';

      return (
        <li class={filterClass}>
          <a onClick={() => this.handleFilter(filter.slug)} href="#" class={filterLinkClass} data-cy={cyName}>
            {filter.name}
          </a>
        </li>
      );
    });
  }

  renderFilter(selectedFilter: string) {
    return this.filters.find(filter => filter.slug === selectedFilter).name;
  }

  renderPosts(blogData: BlogPost[], isLoading: boolean, isError: boolean, searchString: string, filterString: string) {
    let postData;
    if (isError) {
      postData = <div class="blog-posts-message">Error loading posts</div>;
    } else if (isLoading) {
      postData = (
        <div class="blog-posts-message">
          <div class="loading">
            <i class="fa fa-spinner fa-spin" />
          </div>
        </div>
      );
    } else if (blogData.length > 0) {
      postData = blogData.map((post, i, arr) => {
        const cardClass = i !== arr.length - 1 ? 'blog-card-wrapper' : 'blog-card-wrapper-last';
        if (post === null) {
          return <div class={cardClass} />;
        }
        return (
          <div class={cardClass}>
            <app-blog-card blogPost={post} />
          </div>
        );
      });
    } else {
      if (searchString) {
        postData = <div class="blog-posts-message">We do not currently have any blogs for this category. Check back soon!</div>;
      } else if (filterString) {
        postData = <div class="blog-posts-message">We do not currently have any blogs for this filter. Check back soon!</div>;
      } else {
        postData = <div class="blog-posts-message">We do not currently have any blogs. Check back soon!</div>;
      }
    }
    return postData;
  }

  renderPagination(numberOfPages: number, currentPage: number, isLoading: boolean, isError: boolean) {
    let pagination = <div class="spacer" />;
    if (!isError && !isLoading && numberOfPages > 1) {
      const pageNumbers = [...Array(numberOfPages)].map((_, i) => {
        const pageItemClass = currentPage === i + 1 ? 'blog-page-item active' : 'blog-page-item';
        const pageLinkClass = currentPage === i + 1 ? 'blog-page-item active' : 'blog-page-item';
        return (
          <li class={pageItemClass}>
            <a id={`nav-to-page-${i + 1}`} onClick={e => this.handlePaging(e)} href="#" class={pageLinkClass}>
              {i + 1}
            </a>
          </li>
        );
      });
      pagination = (
        <div>
          <ul class="blog-page-list">{pageNumbers}</ul>
        </div>
      );
    }
    return pagination;
  }

  showSearchbar() {
    this.displaySearchBar = true;
  }

  hideSearchBar() {
    this.displaySearchBar = false;
    this.clearSearch();
  }

  open(provider: string) {
    switch (provider) {
      case 'instagram':
        window.open('https://www.instagram.com/openforgemobile/', '_blank');
        break;
      case 'twitter':
        window.open('https://twitter.com/openforgemobile', '_blank');
        break;
      case 'linkedin':
        window.open('https://www.linkedin.com/company/openforge/', '_blank');
        break;
      case 'facebook':
        window.open('https://www.facebook.com/openforgemobile/', '_blank');
        break;

      default:
        break;
    }
  }

  render() {
    const featuredPost = this.renderFeaturedPost(this.featuredPost, this.featuredIsLoading, this.featuredIsError);
    const filters = this.renderFilters(this.blogFilter, this.searchIsLoading || this.blogIsLoading, this.searchQuery);
    let postData = <div />;
    let pagination = <div class="spacer" />;
    if (this.searchQuery) {
      pagination = this.renderPagination(this.searchNumberOfPages, this.searchCurrentPage, this.searchIsLoading, this.searchIsError);
      postData = this.renderPosts(this.searchPostsData, this.searchIsLoading, this.searchIsError, this.searchQuery, '');
    } else {
      pagination = this.renderPagination(this.blogNumberOfPages, this.blogCurrentPage, this.blogIsLoading, this.blogIsError);
      postData = this.renderPosts(this.blogPostsData, this.blogIsLoading, this.blogIsError, '', this.blogFilter);
    }

    return [
      <div class="blog-container container">
        <div id="blog-filters" class="blog-filters">
          <div class="blog-filters-nav">
            <div class="blog-search-group d-md-none">
              <span class="blog-search-icon-top fa fa-search" />
              <input id="blog-search" type="text" class="blog-search-input" placeholder="Search the blog" onKeyUp={e => this.handleSearch(e.target['value'])} />
            </div>

            {this.displaySearchBar ? (
              <div class="searchbar-top">
                <div class="blog-search-group">
                  <span class="blog-search-icon-top fa fa-search" />
                  <input id="blog-search" type="search" class="blog-search-input" placeholder="Search the blog" aria-label="search" onKeyUp={e => this.handleSearch(e.target['value'])} />
                </div>
                <button onClick={() => this.hideSearchBar()}>
                  <i class="far fa-times-circle" />
                </button>
              </div>
            ) : (
                <ul class="blog-filters-list">
                  {filters}
                  <li class="blog-filter-item d-none d-lg-block">
                    <div class="blog-search-group">
                      <span class="blog-search-icon fa fa-search" />
                      <input id="blog-search" type="text" class="blog-search-input" placeholder="Search the blog" onKeyUp={e => this.handleSearch(e.target['value'])} />
                    </div>
                  </li>
                  <li class="blog-filter-item d-none d-md-block d-lg-none" onClick={() => this.showSearchbar()}>
                    <div class="blog-search-group">
                      <span class="blog-search-icon fa fa-search" />
                    </div>
                  </li>
                </ul>
              )}
          </div>
        </div>
        <div class="row posts-row">
          <div class="col-md-12 d-none d-md-block d-lg-none">
            <div class="form-row-content">
              <div class="row">
                <div class="col-sm-6 text-center">
                  <form
                    action="https://openforge.us8.list-manage.com/subscribe/post?u=7e95d70b390d0adf7aaa31ad6&amp;id=78738bfcb4"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    class="validate"
                    target="_blank"
                    novalidate="true"
                  >
                    <label class="d-none d-md-block">Sign Up for News &amp; Updates</label>
                    <div class="form-group">
                      <input type="email" value="" name="EMAIL" class="email d-none d-md-block" id="mce-EMAIL" placeholder="Email Address" required={true} />
                      <div class="hidden" aria-hidden="true">
                        <input type="text" name="b_7e95d70b390d0adf7aaa31ad6_78738bfcb4" tabindex="-1" value="" />
                      </div>
                      <div class="clear d-none d-md-block">
                        <button type="submit" name="subscribe" id="mc-embedded-subscribe" class="button">
                          <i class="d-none d-md-block fa fa-arrow-right" />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="col-sm-6 text-center">
                  <p class="contact-icons-label d-none d-md-block">Follow Us:</p>
                  <div class="contact-icons d-none d-md-block">
                    <a onClick={() => this.open('twitter')} id="twitter" target="_blank" rel="noopener" aria-label="Openforge Twitter account link">
                      <app-img class="contact-icon" src="/assets/blog/twitter.png" alt="twitter" />
                    </a>
                    <a onClick={() => this.open('facebook')} id="facebook" target="_blank" rel="noopener" aria-label="Openforge Facebook account link">
                      <app-img class="contact-icon" src="/assets/blog/facebook.png" alt="facebook" />
                    </a>
                    <a onClick={() => this.open('linkedin')} id="linkedin" target="_blank" rel="noopener" aria-label="Openforge Linkedin account link">
                      <app-img class="contact-icon" src="/assets/blog/linkedin.png" alt="linkedin" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8 col-md-12">
            {!this.searchQuery && this.blogCurrentPage === 1 && !this.blogFilter ? <div class="featured-post">{featuredPost}</div> : null}
            <div class="blog-posts">{postData}</div>
          </div>
          <div class="col-lg-3 col-md-12 form-row d-sm-block d-md-none d-lg-block">
            <div class="form-row-content">
              <form
                action="https://openforge.us8.list-manage.com/subscribe/post?u=7e95d70b390d0adf7aaa31ad6&amp;id=78738bfcb4"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                class="validate"
                target="_blank"
                novalidate="true"
              >
                <label class="d-none d-md-block">Sign Up for News &amp; Updates</label>
                <div class="form-group">
                  <input type="email" value="" name="EMAIL" class="email d-none d-md-block" id="mce-EMAIL" placeholder="Email Address" aria-label="email" required={true} />
                  <div class="hidden" aria-hidden="true">
                    <input type="text" name="b_7e95d70b390d0adf7aaa31ad6_78738bfcb4" tabindex="-1" value="" />
                  </div>
                  <div class="clear">
                    <button type="submit" name="subscribe" id="mc-embedded-subscribe" class="button">
                      <span class="d-block d-sm-block d-md-none">
                        Get the Newsletter &nbsp; <i class="fa fa-envelope" aria-hidden="true" />
                      </span>
                      <i class="d-none d-md-block fa fa-arrow-right" />
                    </button>
                  </div>
                </div>
              </form>

              <p class="contact-icons-label d-none d-md-block">Follow Us:</p>
              <div class="contact-icons d-none d-md-block">
                <a onClick={() => this.open('twitter')} id="twitter" target="_blank" rel="noopener" aria-label="Openforge Twitter account link">
                  <app-img class="contact-icon" src="/assets/blog/twitter.png" alt="twitter" />
                </a>
                <a onClick={() => this.open('facebook')} id="facebook" target="_blank" rel="noopener" aria-label="Openforge Facebook account link">
                  <app-img class="contact-icon" src="/assets/blog/facebook.png" alt="facebook" />
                </a>
                <a onClick={() => this.open('linkedin')} id="linkedin" target="_blank" rel="noopener" aria-label="Openforge Linkedin account link">
                  <app-img class="contact-icon" src="/assets/blog/linkedin.png" alt="linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="blog-pagination">{pagination}</div>
        <stencil-route-link url="/blog-index" />
      </div>,
      <app-footer />,
    ];
  }
}
