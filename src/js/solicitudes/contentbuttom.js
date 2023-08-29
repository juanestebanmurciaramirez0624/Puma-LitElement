import { LitElement, html } from "lit-element";

class ContentButtom extends LitElement {
    createRenderRoot() {
        return this;
    }
    render() {
        return html`  
        <div class="contend-inpust">
          <buttomolicitudes-puma></buttomolicitudes-puma>
          <buttomactas-puma></buttomactas-puma>
          <buttomopendiente-puma></buttomopendiente-puma>
          </div>
        `;
    }
};

customElements.define('contentbuttom-puma', ContentButtom);
