import { LitElement, html } from "lit-element";

class login extends LitElement {
    createRenderRoot() {
        return this;
    }
    render() {
        return html`  
        <div class="content-card">
        <div class="center margin-input">
            <input type="text" placeholder="Usuario" class="input-login">
        </div>
        <div class="center">
            <input type="password" placeholder="Contraseña" class="input-login">
        </div>
        <div class="center">
            <button type="menu" class="button-login"><a href="src/templates/welcome.html"
                    class="a-button">INGRESAR</a></button>
        </div>
        <div class="center">
            <a class="forgot-pass" href="#">Olvido su contraseña?</a>
        </div>
    </div>
        `;
    }
};

customElements.define('bodylogin-puma', login);


