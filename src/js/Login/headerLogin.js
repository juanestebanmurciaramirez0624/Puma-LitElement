import { LitElement, html } from "lit-element";

class headerLogin extends LitElement {
    createRenderRoot() {
        return this;
    }
    render() {
        return html`  
        <div class="header-card">
        <p class="title-login">PUMAS DC</p>
    </div>
        `;
    }
};

customElements.define('headerlogin-puma', headerLogin);
