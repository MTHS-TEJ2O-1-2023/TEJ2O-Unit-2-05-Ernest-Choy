/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ernest
 * Created on: Sep 2023
 * This program checks procesor temperature in kelven
*/

let microbitTemperature: number

basic.clearScreen()
basic.showIcon(IconNames.Happy)
basic.pause(1000)

input.onButtonPressed(Button.A, function () {
  basic.clearScreen()
  // get microbit temperature and add 273.15 to get it in kelven
  microbitTemperature = input.temperature()
  microbitTemperature = microbitTemperature + 273.15
  basic.showString('the temperature is:' + microbitTemperature.toString() + ' K.')
  basic.showIcon(IconNames.Yes)
})
