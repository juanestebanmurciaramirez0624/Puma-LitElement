import { LitElement, html } from "lit-element";

class headerPuma extends LitElement {
    createRenderRoot() {
        return this;
    }
    render() {
        return html`  
        <header>
        <div class="content-header">
            <div class="header">
                <img src="../img/headerPuma.png" alt="">
            </div>
            <div class="contend-hamburger">
                <img src="../img/hamburger.png" alt="" class="hamburger">
            </div>
        </div>
    </header>
        `;
    }
};

customElements.define('header-puma', headerPuma);
