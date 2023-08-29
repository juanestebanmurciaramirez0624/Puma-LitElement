import { LitElement, html } from "lit-element";

class cardsolicitudes extends LitElement {
    createRenderRoot() {
        return this;
    }
    render() {
        return html`  
        <style>
        @import "../css/inputs.css";
      </style> 

        </div>
        `;
    }
};

customElements.define('cardsolicitudes-puma', cardsolicitudes);
