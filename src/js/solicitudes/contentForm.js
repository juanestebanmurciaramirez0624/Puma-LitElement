import { LitElement, html } from "lit-element";

class ContentForm extends LitElement {
    createRenderRoot() {
        return this;
    }
    render() {
        return html`  
        <div class="contend-form">
          <select-puma></select-puma>
          <input-puma></input-puma>
        </div>
        `;
    }
};

customElements.define('contentform-puma', ContentForm);
