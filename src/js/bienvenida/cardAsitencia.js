import { LitElement, html } from "lit-element";

class cardAsistencia extends LitElement {
    createRenderRoot() {
        return this;
    }
    render() {
        return html`  
        <div class="cards">
            <div class="contends-cards">
                <h1 class="title-card">Asistencia</h1>
                <div class="center">
                    <hr class="hr">
                </div>
            </div>
            <div class="center img">
                <img src="../img/Asistencias.png" alt="" class="img-card">
            </div>
            <div class="center"><button type="menu" class="button-card"><a href="./solicitudes.html"
                        class="a-button">Gestionar</a></button></div>
        </div>
        `;
    }
};

customElements.define('cardasistencia-puma', cardAsistencia);
