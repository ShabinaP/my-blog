import { Component, ReactNode } from "react";
import * as header from "../styles/header.module.scss";

export default class Header extends Component {
    render(): ReactNode {
        return (
            <header className={header.header_wrapper}>
                <div className={header.header_container}>
                    <div className={header.header_logo}>
                        <a href="/">
                            <span className={header.header_logo_icon}>📓</span>
                            <span className={header.header_logo_text}>Shabina</span>
                        </a>
                    </div>
                    <div className={header.header_links}>
                        <a href="/blog"> Blog </a>
                        <a href="/contact">Contact</a>
                        <a href="/about">About</a>
                    </div>
                </div>
            </header>
        )
    }
}