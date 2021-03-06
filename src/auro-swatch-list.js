// Copyright (c) Alaska Air. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { html } from "lit-element";
import ComponentBase from './component-base';
import styleCss from "./style-swatch-list-css.js";

class AuroSwatchList extends ComponentBase {

  static get properties() {
    return {
      ...super.properties,
      componentData:    { type: Array }
    };
  }

  // Adds styles for light DOM element; styles not defined in base class
  render() {
    return html`
      ${styleCss}

      <table class="tableListing">
        <thead>
          <tr>
            <th>Token</th>
            <th class="">Usage</th>
            <th>Hex/RGBA</th>
            <th class="center">Color</th>
            <th class="noPadding">WCAG rating</th>
          </tr>
        </thead>
        <tbody>
          ${this.componentData.map((index) => html`
            <tr>
              <td class="noWrap varList">
                ${this.varName(index.colorname, 'css')}
              </td>
              <td>${index.usage}</td>
              <td class="noWrap">${index.backgroundcolor}</td>
              <td class="swatch"><div style="background-color: var(--${index.colorname})"></div></td>
              <td class="center noPadding">${index.wcag}</td>
            </tr>
          `)}
        </tbody>
      </table>
    `;
  }
}

// define the name of the custom component
customElements.define("auro-swatch-list", AuroSwatchList);
