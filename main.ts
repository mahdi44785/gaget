namespace Airbit {
    //%blockid=Airbit 1.0
    radio.setGroup(1)
    basic.showLeds(`
    . . . . .
    . . . . .
    . # # # .
    . . . . .
    . . . . .
    `)

    if (input.buttonIsPressed(Button.A)) {radio.sendNumber(0)}
    if (input.buttonIsPressed(Button.A)) { radio.sendString("jj")}
}