/* Copyright (c) 2026 MTHS All rights reserved
 *
 * Created by: Jayden Okafor
 * Created on: Apr 2026
 * This program ...
*/

// variables
let countdown: number = null
let neopixelStrip: neopixel.Strip = null
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)

// show happy face
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// clear all pixels
neopixelStrip.clear()
neopixelStrip.show()

// when button "A" is pressed
input.onButtonPressed(Button.A, function () {

    // change countdown to 4
    countdown = 4
    
    // runs forever until the countdown is below 0
    while (countdown >= 0) {

        // shows amount of green colour depending on the countdown number
        if (countdown == 4) {
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
            neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
            neopixelStrip.show()
        } else if (countdown == 3) {
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.show()
        } else if (countdown == 2) {
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.show()
        } else if (countdown == 1) {
            neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.show()
        } else if (countdown == 0) {
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.show()
        }

        // shows countdown to the user
        basic.showNumber(countdown)
        // remove 1 from the countdown each time
        countdown -= 1
        basic.pause(1000)
    }

    // show happy face
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)

})
