import { LitElement, html } from "lit-element";

class buttomActas extends LitElement {
    createRenderRoot() {
        return this;
    }
    render() {
        return html`  
        <a href="./actas.html">
            <div class="inputs">
                <img src="../img/solicitudes.png" class="img">
                <div class="center">
                <p class="text-inputs">Actas</p>
                <img src="../img/flechs.png" class="flecha">
                </div>
            </div>
        </a>
        `;
    }
};

customElements.define('buttomactas-puma', buttomActas);
