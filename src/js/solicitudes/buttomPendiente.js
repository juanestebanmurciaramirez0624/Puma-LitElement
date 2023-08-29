import { LitElement, html } from "lit-element";

class buttomPendiente extends LitElement {
    createRenderRoot() {
        return this;
    }
    render() {
        return html`  
        <a href="./pendientes.html">
            <div class="inputs">
                <img src="../img/pendientes.png" class="img">
                <div class="center">
                    <p class="text-inputs">Pendientes</p>
                    <img src="../img/flechs.png" class="flecha">
                </div>
            </div>
        </a>
        `;
    }
};

customElements.define('buttomopendiente-puma', buttomPendiente);
