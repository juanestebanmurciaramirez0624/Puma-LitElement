import { LitElement, html } from "lit-element";

class navPuma extends LitElement {
  createRenderRoot() {
    return this;
  }
  render() {
    return html`
      <nav class="menu">
        <ul class="ul-class">
          <li>
            <i class="fa-solid fa-football fa-rotate-90 football"></i>
            <a href="./pendientes.html" class="a-menu">Home</a>
          </li>
          <li>
            <i class="fa-solid fa-football fa-rotate-90 football"></i>
            <a href="./actas.html" class="a-menu">Presidencia</a>
          </li>
          <li>
            <i class="fa-solid fa-football fa-rotate-90 football"></i>
            <a href="./solicitudes.html" class="a-menu">Presidencia</a>
          </li>
          <li>
            <i class="fa-solid fa-football fa-rotate-90 football"></i>
            <a href="./menu.html" class="a-menu">Vice-presidencia</a>
          </li>
          <li>
            <i class="fa-solid fa-football fa-rotate-90 football"></i>
            Secretaria
          </li>
          <li>
            <i class="fa-solid fa-football fa-rotate-90 football"></i> Tesoreria
          </li>
          <li>
            <i class="fa-solid fa-football fa-rotate-90 football"></i>
            Revisoaria fiscal
          </li>
          <li>
            <i class="fa-solid fa-football fa-rotate-90 football"></i> Lista de
            afiliados
          </li>
          <li>
            <i class="fa-solid fa-football fa-rotate-90 football"></i> Lista
            jugadores
          </li>
          <li>
            <i class="fa-solid fa-football fa-rotate-90 football"></i> Lista
            coach's
          </li>
        </ul>
      </nav>
    `;
  }
}

customElements.define("nav-puma", navPuma);
