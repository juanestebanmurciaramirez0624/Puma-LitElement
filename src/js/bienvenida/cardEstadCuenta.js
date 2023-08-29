import { LitElement, html } from "lit-element";

class cardEstadoCuenta extends LitElement {
    createRenderRoot() {
        return this;
    }
    render() {
        return html`  
        <div class="cards">
            <div class="contends-cards">
                <h1 class="title-card">Estado de cuenta</h1>
                <div class="center">
                    <hr class="hr">
                </div>
            </div>
            <div class="center img">
                <img src="../img/Comunicacion.png" alt="" class="img-card">
            </div>
            <div class="center"><button type="menu" class="button-card"><a href="./solicitudes.html"
                        class="a-button">Gestionar</a></button>
            </div>
        </div>
        `;
    }
};

customElements.define('cardestado-puma', cardEstadoCuenta);
