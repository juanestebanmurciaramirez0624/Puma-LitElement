import { LitElement, html } from "lit-element";

class ContentCardsD extends LitElement {
    createRenderRoot() {
        return this;
    }
    render() {
        return html`  
        <div class="contends-card">
          <cardasistencia-puma></cardasistencia-puma>
          <cardcomunicacion-puma></cardcomunicacion-puma>
          <cardestado-puma></cardestado-puma>
        </div>
        `;
    }
};

customElements.define('contentcardsd-puma', ContentCardsD);
