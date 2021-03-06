import { Component, Prop, h } from '@stencil/core';
import { BlogPost } from '../../model/blog-post.model';
import { formatDate } from '../../shared/date-format';

@Component({
  tag: 'app-blog-featured-home',
  styleUrl: 'app-blog-featured-home.scss',
})
export class AppBlogFeaturedHome {
  @Prop() blogPost: BlogPost;
  @Prop() blogPost1: BlogPost;

  componentDidLoad() {}

  render() {
    const publishDate = new Date(this.blogPost.published);
    const publishDate1 = new Date(this.blogPost1.published);
    return (
      <div class="blog-featured">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="featured-title">
                <div class="d-none d-md-block">
                  <h4>What's New in Our Blog</h4>
                </div>
                <div class="d-block d-sm-block d-md-none">
                  <h4>What's New in Our Blog</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="row post">
            <div class="col-lg-6 col-md-8 col-title">
              <div class="featured-post-title">
                <stencil-route-link url={`/blog/${this.blogPost.slug}`}>
                  <h2 id="featured-blog-title-first">{this.blogPost.title}</h2>
                </stencil-route-link>
              </div>
              <div class="author d-none d-md-flex">
                <app-img class="profile-image d-none d-md-block" src={this.blogPost.author.profile_image} />
                <div>
                  By &nbsp;
                  <stencil-route-link url={`/about/${this.blogPost.author.slug}`}>{`${this.blogPost.author.first_name} ${this.blogPost.author.last_name}`}</stencil-route-link>
                  &nbsp; on {formatDate(publishDate)}
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-4">
              <div class="featured-image">
                <stencil-route-link url={`/blog/${this.blogPost.slug}`}>
                  <app-img src={this.blogPost.featured_image} alt={this.blogPost.title} />
                </stencil-route-link>
              </div>
              <div class="author d-block d-sm-block d-md-none">
                <img class="profile-image d-none d-md-block" src={this.blogPost.author.profile_image} />
                <div>
                  By &nbsp;
                  <stencil-route-link url={`/about/${this.blogPost.author.slug}`}>{`${this.blogPost.author.first_name} ${this.blogPost.author.last_name}`}</stencil-route-link>
                  &nbsp; on {formatDate(publishDate)}
                </div>
              </div>
            </div>
          </div>

          {this.blogPost1 ? (
            <div class="row post">
              <div class="col-lg-6 col-md-8 col-title">
                <div class="featured-post-title">
                  <stencil-route-link url={`/blog/${this.blogPost1.slug}`}>
                    <h2 id="featured-blog-title-second">{this.blogPost1.title}</h2>
                  </stencil-route-link>
                </div>
                <div class="author d-none d-md-flex">
                  <app-img class="profile-image d-none d-md-block" src={this.blogPost1.author.profile_image} />
                  <div>
                    By &nbsp;
                    <stencil-route-link url={`/about/${this.blogPost1.author.slug}`}>{`${this.blogPost1.author.first_name} ${this.blogPost1.author.last_name}`}</stencil-route-link>
                    &nbsp; on {formatDate(publishDate1)}
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-4">
                <div class="featured-image">
                  <stencil-route-link url={`/blog/${this.blogPost1.slug}`}>
                    <app-img src={this.blogPost1.featured_image} alt={this.blogPost1.title} />
                  </stencil-route-link>
                </div>
                <div class="author d-block d-sm-block d-md-none">
                  <app-img class="profile-image d-none d-md-block" src={this.blogPost1.author.profile_image} />
                  <div>
                    By &nbsp;
                    <stencil-route-link url={`/about/${this.blogPost1.author.slug}`}>{`${this.blogPost1.author.first_name} ${this.blogPost1.author.last_name}`}</stencil-route-link>
                    &nbsp; on {formatDate(publishDate1)}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ''
          )}

          <hr />
        </div>
      </div>
    );
  }
}
