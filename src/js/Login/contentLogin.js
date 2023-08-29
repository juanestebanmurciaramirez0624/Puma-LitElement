import { LitElement, html } from "lit-element";
import loginStyle from "./loginStyle";

class contentLogin extends LitElement {
static get Styles(){
    return [loginStyle];
}

    createRenderRoot() {
        return this;
    }
    render() {
        return html`  
        <div class="form-login backgroud">
            <login-puma>
            </login-puma>       
        </div>
        `;
    }
};

customElements.define('contentlogin-puma', contentLogin);
