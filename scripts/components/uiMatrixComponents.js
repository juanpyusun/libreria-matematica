/**
 * Invokes the UI matrices component.
 * 
 * @param {string} letra - The letter used to identify the matrix.
 * @returns {string} - The HTML markup for the UI matrices component.
 */
export function invocarUIMatrices(letra) {
    let message = `<article class="matrix-container">
                        <section class="matrix" id="matrix${letra}"></section>
                        <section class="matrix-helper">
                            <button id="btnAccion-incrementarDimension">+</button>
                            <button id="btnAccion-reducirDimension">-</button>
                        </section>
                    </article>`;
    return message;
}