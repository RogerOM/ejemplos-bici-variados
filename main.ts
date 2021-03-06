input.onButtonPressed(Button.A, function () {
    basic.showNumber(tiempo_en_segundos)
})
// dado
input.onGesture(Gesture.Shake, function () {
	
})
let tiempo_en_segundos = 0
tiempo_en_segundos = 0
basic.forever(function () {
    basic.pause(1000)
    tiempo_en_segundos = Math.round(input.runningTime() / 1000)
})
