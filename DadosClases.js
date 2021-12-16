//Ejercicio de codigo de dados con clases
//Canul Chavez Judith Eluzai
class Jugador{
    #nombreJ
    #caraDado1
    #caraDado2

    constructor(nombreJ){
        this.#nombreJ = nombreJ
        this.#caraDado1 = 0
        this.#caraDado2 = 0
    }
    //getters and setters cara dado uno
    setcaraDado1(cara1){
        this.#caraDado1 = cara1
    }
    getcaraDado1(){
        return this.#caraDado1
    }
    //getters and setters cara dado dos
    setcaraDado2(cara2){
        this.#caraDado2 = cara2
    }
    getcaraDado2() {
        return this.#caraDado2
    }
    //getters and setters nombre 
    setNombreJ(nombreJ){
        this.#nombreJ = nombreJ
    }
    getNombreJ(){
        return this.#nombreJ
    }
}

class JuegodeDados{
    numJuego
    jugador1
    jugador2
    ganadorpartida = ""
    constructor(numjuego, j1, j2){
        this.numJuego = numjuego
        this.jugador1 = j1
        this.jugador2 = j2
    }
    determinaGanador() {
        if (((this.jugador1.getcaraDado1() + this.jugador1.getcaraDado2()) == 7)
            && ((this.jugador2.getcaraDado1() + this.jugador2.getcaraDado2()) != 7))
            return this.jugador1.getNombreJ()
        else if (((this.jugador2.getcaraDado1() + this.jugador2.getcaraDado2()) == 7)
            && ((this.jugador1.getcaraDado1() + this.jugador2.getcaraDado2()) != 7))
            return this.jugador2.getNombreJ()
        else return null;
    }
    tirarDados(){
        this.jugador1.setcaraDado1(Math.round((Math.random() * 5) + 1))  
        this.jugador1.setcaraDado2(Math.round((Math.random() * 5) + 1)) 
        this.jugador2.setcaraDado1(Math.round((Math.random() * 5) + 1))  
        this.jugador2.setcaraDado2(Math.round((Math.random() * 5) + 1))  
    }
}

class torneo{
    partidasJugadas = new Array() 
    #juegosGanadosJugador1
    #juegosGanadosJugador2

    setJuegosGanadosJugador1(jg1){
        this.#juegosGanadosJugador1 = jg1
    }
    getJuegosGanadosJugador1(){
        return this.#juegosGanadosJugador1
    }
    setJuegosGanadosJugador2(jg2){
        this.#juegosGanadosJugador2 = jg2
    }
    getJuegosGanadosJugador2(){
        return this.#juegosGanadosJugador2
    }

    jugadores(j1, j2) {
        console.log("Empezo el juego: " + j1.getNombreJ() + " y " + j2.getNombreJ())
        this.#juegosGanadosJugador1 = 0
        this.#juegosGanadosJugador2 = 0
    }
    jugarTorneo() {
        let minimoWins = 3
        let i = 1;
        let victoria = false
        let mensajeGanador =" "
        do{
            let partida = new JuegodeDados(i, j1, j2)
            partida.tirarDados()
            let ganador = partida.determinaGanador()
            
            if(ganador === j1.getNombreJ()){
                this.#juegosGanadosJugador1++
                mensajeGanador = j1.getNombreJ()
            }
            if(ganador === j2.getNombreJ()){
                this.#juegosGanadosJugador2++
                mensajeGanador = j2.getNombreJ()
            }
            if(ganador === null){
                mensajeGanador="hubo Empate"
            }
            partida.ganadorpartida = mensajeGanador

            //la partida se acabo y se manda al arreglo
            this.partidasJugadas.push(partida)

            //verificamos si alguien ya gano 3 partidas
            if(this.#juegosGanadosJugador1 ===minimoWins || this.#juegosGanadosJugador2===minimoWins){
                victoria = true
            }

            i++
        } while (victoria === false)
    }
    resultadoTorneo() {
        if(this.#juegosGanadosJugador1===3){
            return j1.getNombreJ()
        }else{
            return j2.getNombreJ()
        }
    }
}

let j1 = new Jugador("Pedro")
let j2 = new Jugador("Mario")

let torneo1 = new torneo()
torneo1.jugadores(j1, j2)
torneo1.jugarTorneo()
let array = torneo1.partidasJugadas

for(let i =0; i<array.length; i++ ){
    console.log("Ganador partida: " + (i+1) + " es: " + array[i].ganadorpartida)
}

console.log("FELICIDADES ERES EL GANADOR: " + torneo1.resultadoTorneo() + " BIEN HECHO")
