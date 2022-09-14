export class Menu {

    constructor(options) {
        this.options = options
    }

    list() {
        console.log("%cBienvenidos a un mundo fuera de orbita!!", "color:yellow");
        for (const i in this.options) {
            console.log(`${i}: ${this.options[i]}`)
        }
    }

    chooseOption() {
        const selected = prompt("Elija:")

        return this.#validateInput(selected);
    }

    #validateInput(key) {
        return this.options[key] ?? "No es una opción valida"
    }
}