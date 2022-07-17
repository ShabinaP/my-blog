import React from "react";
import { Component } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import * as styles from  "../styles/layout.module.scss";
import * as homepage from "../styles/homepage.module.scss";
import Image from "next/image";

export default class MyBlog extends Component {
    render() {
        return (
          
          <>
              <Header />
            <div className={styles.bdy}>
            <div className={homepage.homepage_container}>
          <div className={homepage.homepage_introduction}>
            <h1>Hi, I&#39;m Shabina.</h1>
            <p>I&#39;m a junior software developer documenting my journey.</p>
          </div>
          <div className={homepage.homepage_latest_blog_posts}>
            <h2>
              Latest Blog Posts
              <a className={homepage.homepage_latest_blog_posts_view_all} href="/blog">View all</a>
            </h2>
            <div className={homepage.homepage_latest_blog_posts_list}>
              <a href="/blog/post-title">
                <div className={homepage.homepage_latest_blog_post}>
                  <div className={homepage.homepage_latest_thumbnail}>
                    {/* <Image src="http://via.placeholder.com/640x360" layout="fill"/> */}
                  </div>
                  <div className={homepage.homepage_latest_blog_post_title}>
                    <h3>Your Blog Post Title</h3>
                  </div>
                </div>
              </a>
              <a href="/blog/post-title">
                <div className={homepage.homepage_latest_blog_post}>
                  <div className={homepage.homepage_latest_thumbnail}>
                    {/* <Image src="http://via.placeholder.com/640x360" layout="fill"/> */}
                  </div>
                  <div className={homepage.homepage_latest_blog_post_title}>
                    <h3>Your Blog Post Title</h3>
                  </div>
                </div>
              </a>
              <a href="/blog/post-title">
                <div className={homepage.homepage_latest_blog_post}>
                  <div className={homepage.homepage_latest_thumbnail}>
                    {/* <Image src="http://via.placeholder.com/640x360" layout="fill" /> */}
                  </div>
                  <div className={homepage.homepage_latest_blog_post_title}>
                    <h3>Your Blog Post Title</h3>
                  </div>
                </div>
              </a>
              <a href="/blog/post-title">
                <div className={homepage.homepage_latest_blog_post}>
                  <div className={homepage.homepage_latest_thumbnail}>
                    {/* <Image src="http://via.placeholder.com/640x360" layout="fill"/> */}
                  </div>
                  <div className={homepage.homepage_latest_blog_post_title}>
                    <h3>Your Blog Post Title</h3>
                  </div>
                </div>
              </a>
              <a href="/blog/post-title">
                <div className={homepage.homepage_latest_blog_post}>
                  <div className={homepage.homepage_latest_thumbnail}>
                    {/* <Image src="http://via.placeholder.com/640x360" layout="fill" /> */}
                  </div>
                  <div className={homepage.homepage_latest_blog_post_title}>
                    <h3>Your Blog Post Title</h3>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className={homepage.homepage_projects}>
            <h2>My Projects</h2>
            <div className={homepage.homepage_projects_list}>
              <div className={homepage.homepage_project}>
                <h3>
                  <a href="https://github.com/discourse/discourse">
                    <div className={homepage.homepage_project_icon}>📞</div>
                    <div className={homepage.homepage_project_title}>Discourse</div>
                  </a>
                </h3>
                <p>A platform for community discussion. Free, open, simple.</p>
                <div className={homepage.homepage_project_btns}>
                  <a className={homepage.homepage_project_view_btn} href="https://github.com/discourse/discourse">View</a>
                </div>
              </div>
              <div className={homepage.homepage_project}>
                <h3>
                  <a href="https://github.com/nmajor25/seconds-converter">
                    <div className={homepage.homepage_project_icon}>⌛</div>
                    <div className={homepage.homepage_project_title}>Seconds Converter</div>
                  </a>
                </h3>
                <p>Convert milliseconds or seconds to days, hours, minutes, and seconds in node.js.</p>
                <div className={homepage.homepage_project_btns}>
                  <a className={homepage.homepage_project_view_btn} href="https://github.com/nmajor25/seconds-converter">View</a>
                </div>
              </div>
              <div className={homepage.homepage_project}>
                <h3>
                  <a href="https://github.com/showdownjs/showdown">
                    <div className={homepage.homepage_project_icon}>⌛</div>
                    <div className={homepage.homepage_project_title}>Showdown</div>
                  </a>
                </h3>
                <p>A bidirectional Markdown to HTML to Markdown converter written in Javascript.</p>
                <div className={homepage.homepage_project_btns}>
                  <a className={homepage.homepage_project_view_btn} href="https://github.com/showdownjs/showdown">View</a>
                </div>
              </div>
            </div>
          </div>
        </div>
           
                My Blog </div>
                <Footer /></>
        )
    }
}