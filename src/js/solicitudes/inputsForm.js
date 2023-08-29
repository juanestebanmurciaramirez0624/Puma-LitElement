import { LitElement, html } from "lit-element";

class InputPuma extends LitElement {
    createRenderRoot() {
        return this;
    }
    render() {
        return html`  
        <div class="solicitud-form">
        <div class="colum-inputs">
            <input type="text" placeholder="Elemento de compra" class="input">
            <input type="number" placeholder="Valor de compra" class="input">
        </div>
        <div class="colum-inputs">
            <select class="select">
                <option value="" class="option-selects">Unidades de compra</option>
                <option value=""></option>
                <option value=""></option>
            </select>
            <input type="text" placeholder="Fecha compra" class="input">
        </div>
        <div class="colum-inputs">
            <textarea placeholder="Desripción" class="textarea"></textarea>
            <button class="button-form"><a href="./actas.html" class="a-button">Gestionar</a></button>
        </div>
    </div>
        `;
    }
};

customElements.define('input-puma', InputPuma);
