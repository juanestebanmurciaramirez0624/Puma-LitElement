import { LitElement, html } from "lit-element";

class login extends LitElement {
    createRenderRoot() {
        return this;
    }
    render() {
        return html`  
            <div class="login">
            <headerlogin-puma></headerLogin-puma>
            <bodylogin-puma></bodyLogin-puma>
            </div>
        `;
    }
};

customElements.define('login-puma', login);
