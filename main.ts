let x = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("" + (input.lightLevel()))
})
input.onButtonPressed(Button.B, function () {
    x = input.lightLevel()
    if (x < 50) {
        led.setBrightness(255)
    }
    if (x >= 50) {
        led.setBrightness(128)
    }
    if ((0 as any) >= (100 as any)) {
        led.setBrightness(64)
    }
    if (x >= 200) {
        led.setBrightness(0)
    }
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
