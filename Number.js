export default class Number {
    // Constructor para inicializar el número, su número de división y su estado
    constructor(value, number_div, state=false) {
      this.value = value;      // El número real
      this.number_div = number_div;  // El número de división
      this.state = state;      // El estado (puede ser cualquier valor según el uso)
      
    }
  
    // Método para obtener el valor del número
    getValue() {
      return this.value;
    }
  
    // Método para modificar el número
    setValue(newValue) {
      this.value = newValue;
    }
  
    // Método para obtener el número de divisores
    getNumberDiv() {
      return this.number_div;
    }
  
    // Método para modificar el número de divisores
    setNumberDiv(newNumberDiv) {
      this.number_div = newNumberDiv;
    }
  
    // Método para obtener el estado
    getState() {
      return this.state;
    }
  
    // Método para modificar el estado
    changeState() {
        if (this.state == false){
            this.getNumberDiv().classList.remove('red-ball')
            this.getNumberDiv().classList.add("green-ball")
            this.state = true
        }else{
            this.getNumberDiv().classList.remove('green-ball')
            this.getNumberDiv().classList.add("red-ball")
            this.state = false
        }
    }
  
    // Método que retorna una representación en string del objeto
    toString() {
      return `Value: ${this.value}, Divisors: ${this.number_div}, State: ${this.state}`;
    }
  }
  