input.onGesture(Gesture.Shake, function () {
    numero = randint(1, 3)
    if (numero == 1) {
        basic.showLeds(`
            . . . . .
            . # # . .
            . # # . .
            . . . . .
            . . . . .
            `)
    } else if (numero == 2) {
        basic.showLeds(`
            # # . . .
            # # . . .
            . . . . .
            . . . # #
            . . . # #
            `)
    } else {
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            # # . . .
            # # . . .
            `)
    }
})
let numero = 0
let tiempo = 0
let tiempo_restante = 45 * 60
basic.forever(function () {
    tiempo_restante += -1
    basic.pause(1000)
    if (tiempo_restante < 15 * 60) {
        music.playMelody("- - - - - - - - ", 120)
    }
})
