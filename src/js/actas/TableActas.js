import { LitElement, html } from "lit-element";

class TableActas extends LitElement {
    createRenderRoot() {
        return this;
    }
    render() {
        return html`  
        <div class="contend-table">
        <table>
            <thead>
                <tr>
                    <th class="raiuds-table1 thead">N° Referencia</th>
                    <th class="thead titulo-thead">Titulo</th>
                    <th class="thead">Fecha</th>
                    <th class="raiuds-table2 thead">Url detalle </th>
                </tr>
            </thead>
            <tr>
                <th class="th"></th>
                <th class="th"></th>
                <th class="th"></th>
                <th class="th"></th>
            </tr>
            <tr>
                <th class="th"></th>
                <th class="th"></th>
                <th class="th"></th>
                <th class="th"></th>
            </tr>
            <tr>
                <th class="th"></th>
                <th class="th"></th>
                <th class="th"></th>
                <th class="th"></th>
            </tr>
            <tr>
                <th class="th"></th>
                <th class="th"></th>
                <th class="th"></th>
                <th class="th"></th>
            </tr>
            <th class="th"></th>
            <th class="th"></th>
            <th class="th"></th>
            <th class="th"></th>
            </tr>
            <tr>
                <th class="th raiuds-table3"></th>
                <th class="th"></th>
                <th class="th"></th>
                <th class="th raiuds-table4"></th>
            </tr>
        </table>
    </div>
        `;
    }
};

customElements.define('tableactas-puma', TableActas);
