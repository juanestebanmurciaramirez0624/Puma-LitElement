import { LitElement, html } from "lit-element";

class SelectPuma extends LitElement {
    createRenderRoot() {
        return this;
    }
    render() {
        return html`  
        <div class="solicitudes">
            <h1 class="title-form">Solicitudes</h1>
            <div class="center">
                <hr class="hr-solicitudes">
            </div>
            <p>Por favor seleccione el tipo de solicitud</p>
            <select class="select-form">
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
            </select>
        </div>
        `;
    }
};

customElements.define('select-puma', SelectPuma);
