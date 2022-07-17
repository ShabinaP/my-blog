import { Component, ReactNode } from "react";
import Header from "components/header";
import Footer from "components/footer";
import * as blog from "../../styles/blog_post.module.scss";

export default class Blog extends Component {
    render(): ReactNode {
        return(
            <div className="layout_wrapper">
            <Header />
            <div className={blog.blog_posts_container}>
              <h1>Blog posts</h1>
              <div className={blog.blog_posts_list}>
                <a href="/blog/post-title">
                  <div className={blog.blog_posts_list_item}>
                    <div className={blog.blog_posts_thumbnail}>
                      <img src="https://assets.coderrocketfuel.com/coding-blog-nodejs-thumbnail.png" />
                    </div>
                    <div className={blog.blog_posts_list_item_title_and_date}>
                      <h2>Your Blog Post Title</h2>
                      <div className={blog.blog_posts_list_item_date}>
                        <span>5/1/2020</span>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/blog/post-title">
                  <div className={blog.blog_posts_list_item}>
                    <div className={blog.blog_posts_thumbnail}>
                      <img src="https://assets.coderrocketfuel.com/coding-blog-nodejs-thumbnail.png" />
                    </div>
                    <div className={blog.blog_posts_list_item_title_and_date}>
                      <h2>Your Blog Post Title</h2>
                      <div className={blog.blog_posts_list_item_date}>
                        <span>5/1/2020</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <Footer />
          </div>



        )
    }
}

