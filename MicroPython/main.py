"""
Created by: Ernest
Created on: Sep 2023
This module is a Micro:bit MicroPython program
"""

from microbit import *


# veriable for processor temperature
microbit_temp = 0


display.clear()
display.show(Image.HAPPY)


while True:
    if button_a.is_pressed():
        display.clear()
        microbit_temp = temperature() + 273.15
        display.show("Temperature is " + str(microbit_temp) + "K .")
        display.show(Image.YES)
