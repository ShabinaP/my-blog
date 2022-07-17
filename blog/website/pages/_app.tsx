import type { AppProps } from "next/app";
import React from "react";
import * as styles from  "../styles/layout.module.scss";
import * as header from "../styles/header.module.scss";
import * as footer from "../styles/footer.module.scss";
import * as homepage from "../styles/homepage.module.scss";
import * as blog from "../styles/blog_post.module.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
} 