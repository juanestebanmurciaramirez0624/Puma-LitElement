import { LitElement, html } from "lit-element";

class SelectActas extends LitElement {
    createRenderRoot() {
        return this;
    }
    render() {
        return html`  
        <div class="contend-form">
          <<div class="solicitudes">
            <h1 class="title-form">Actas</h1>
          <div class="solicitudes">
        </div>
        <div class="center">
        <hr class="hr-solicitudes">
    </div>
    <div class="contend">
        <div class="selects">
            <p>Por favor seleccione el año a consultar</p>
            <select class="select-form">
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
            </select>
        </div>
        <div class="selects">
            <p>Por favor seleccione el mes a consultar</p>
            <select class="select-form">
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
            </select>
        </div>
    </div>
        `;
    }
};

customElements.define('selectactas-puma', SelectActas);
