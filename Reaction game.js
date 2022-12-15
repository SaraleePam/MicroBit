input.onButtonPressed(Button.A, function () {
    Score = 0
    for (let index = 0; index < 10; index++) {
        picture = randint(0, 10)
        basic.pause(500 + randint(0, 1000))
        if (picture == 0) {
            basic.showIcon(IconNames.Square)
        } else if (picture == 1) {
            basic.showIcon(IconNames.Diamond)
        } else {
            basic.showIcon(IconNames.Chessboard)
        }
    }
    if (input.pinIsPressed(TouchPin.P0)) {
        pin_chosen = 0
    } else if (input.pinIsPressed(TouchPin.P1)) {
        pin_chosen = 1
    } else if (input.pinIsPressed(TouchPin.P0)) {
        pin_chosen = 2
    }
    if (pin_chosen == picture) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
let pin_chosen = 0
let picture = 0
let Score = 0
basic.showLeds(`
    . . # . .
    . # . . .
    # # # # #
    . # . . .
    . . # . .
    `)
