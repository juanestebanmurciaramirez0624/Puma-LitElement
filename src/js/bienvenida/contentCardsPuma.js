import { LitElement, html } from "lit-element";

class ContentCards extends LitElement {
    createRenderRoot() {
        return this;
    }
    render() {
        return html`  
        <div class="contends-card">
          <cardactas-puma></cardactas-puma>
          <cardcertificado-puma></cardcertificado-puma>
          <cardreuniones-puma></cardreuniones-puma>
        </div>
        `;
    }
};

customElements.define('contentcards-puma', ContentCards);
