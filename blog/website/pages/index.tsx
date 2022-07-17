import React from "react";
import { Component } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import * as styles from  "../styles/layout.module.scss";

export default class MyBlog extends Component {
    render() {
        return (
          
          <>
              <Header />
            <div className={styles.bdy}>
           
                My Blog </div>
                <Footer /></>
        )
    }
}