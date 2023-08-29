import { LitElement, html } from "lit-element";

class TablePendiente extends LitElement {
    createRenderRoot() {
        return this;
    }
    render() {
        return html`  
        <div class="contend-form">
        <div class="solicitudes">
            <h1 class="title-form">Pendientes </h1>
            <div class="center">
                <hr class="hr-solicitudes">
            </div>
            <div class="center">
                <div class="contend-table">
                    <table>
                        <thead>
                            <tr>
                                <th class="raiuds-table1 thead">N° Pendiente</th>
                                <th class="thead titulo-thead">Descripción</th>
                                <th class="thead">Fecha</th>
                                <th class="raiuds-table2 thead">Acciones </th>
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
            </div>
        </div>
    </div>
        `;
    }
};

customElements.define('tablependiente-puma', TablePendiente);
