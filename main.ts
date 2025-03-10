input.onButtonPressed(Button.A, function () {
    tEKkkKkKKkKrara += 1
    basic.showNumber(tEKkkKkKKkKrara)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < tEKkkKkKKkKrara; index++) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            . . . . .
            `)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    tEKkkKkKKkKrara += -1
    basic.showNumber(tEKkkKkKKkKrara)
})
let tEKkkKkKKkKrara = 0
tEKkkKkKKkKrara = 0
