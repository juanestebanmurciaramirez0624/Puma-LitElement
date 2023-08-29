import { LitElement, html } from "lit-element";

class ContentActas extends LitElement {
    createRenderRoot() {
        return this;
    }
    render() {
        return html`  
        <div class="contend-form">
          <div class="solicitudes">
            <selectactas-puma></selectActas-puma>
            <tableactas-puma></tableActas-puma>
          <div class="solicitudes">
        </div>
        `;
    }
};

customElements.define('contentactas-puma', ContentActas);
