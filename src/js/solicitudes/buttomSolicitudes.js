import { LitElement, html } from "lit-element";

class buttomSolicituedes extends LitElement {
    createRenderRoot() {
        return this;
    }
    render() {
        return html`  
        <a href="./solicitudes.html">
            <div class="inputs">
                <img src="../img/solicitudes.png" class="img">
                <div class="center">
                    <p class="text-inputs">Solicitudes</p>
                    <img src="../img/flechs.png" class="flecha">
                </div>
            </div>
        </a>
        `;
    }
};

customElements.define('buttomolicitudes-puma', buttomSolicituedes);
