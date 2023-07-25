# mini-L293D module
mini-L293D module uses 8 wires to communicate with the arduino nano board
connect pin IN1, IN2, IN3, IN4 to pin 2,3,4,5 on arduino nano
connect pin EN1, EN2 to pin 9,10 (with analog mode) on arduino nano
connect pin Vcc, GND to pin 5V and GND; 
Vcc and GND pins power the arduino nano board if it's not connected to a power supply
pin VIN and GND on the opposite side of mini-L293D board accept 4.5V-36V

# Block Description
Use the first block to initialize the module
Use the second block to setup the dircetion and speed of the motors
Use the third block to stop the one of two motors

---------------------------------------------------------

## Release Logs
* V0.0.1  Basic functions completed.
