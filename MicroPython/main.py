# Copyright (c) 2026 MTHS All rights reserved
#
# Created by: Jayden Okafor
# Created on: Apr 2026
# This program ...

from microbit import *
import neopixel

# variables
countdown = None
# Setup: Pin 16, 4 pixels
neopixel_strip = neopixel.NeoPixel(pin16, 4)

# show happy face
display.clear()
display.show(Image.HAPPY)

# clear all pixels
neopixel_strip.clear()
neopixel_strip.show()

# Main loop to check for button press
while True:
    # when button "A" is pressed
    if button_a.was_pressed():

        # change countdown to 4
        countdown = 4

        # runs forever until the countdown is below 0
        while countdown >= 0:

            # shows amout of green colour depending on the countdown number
            if countdown == 4:
                neopixel_strip[0] = (0, 255, 0)
                neopixel_strip[1] = (0, 255, 0)
                neopixel_strip[2] = (0, 255, 0)
                neopixel_strip[3] = (0, 255, 0)
                neopixel_strip.show()
            elif countdown == 3:
                neopixel_strip[0] = (0, 0, 0)
                neopixel_strip.show()
            elif countdown == 2:
                neopixel_strip[1] = (0, 0, 0)
                neopixel_strip.show()
            elif countdown == 1:
                neopixel_strip[2] = (0, 0, 0)
                neopixel_strip.show()
            elif countdown == 0:
                neopixel_strip[3] = (0, 0, 0)
                neopixel_strip.show()

            # shows countdown to the user
            display.show(str(countdown))

            # remove 1 from the countdown each time
            countdown -= 1
            sleep(1000)

        # show happy face
        display.clear()
        display.show(Image.HAPPY)
