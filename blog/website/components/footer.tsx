import { Component, ReactNode} from "react";
import * as footer from "../styles/footer.module.scss";

export default class Footer extends Component {
    render(): ReactNode {
        return(
            <footer className={footer.footerwrapper}>
                <div className={footer.footerlinks}>
                    <a href="/blog">Blog</a>
                    <a href="/about"> About</a>
                    <a href="/Contact">Contact</a>
                </div>

            </footer>
        )
    }
}