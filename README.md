## Walker Bot V3

This is the third major iteration over a walker-bot project I've been working on.  The major benefits of this major update is...

- Utilize Johnny-five and functional JavaScript to build bot logic, whose instructions are compiled on a general-purpose computer (GPC) and sent over to StandardFirmata enabled Arduino
- Wireless communication between GPC and Arduino using ESP8266 WiFi component, so an arduino does _not_ have to be tethered via USB cable to GPC.  Down with required cable connections!
- Accelerometer, Gyroscope, thermometers and GPS modules to generate run-time sensor data to send over GPC/Arduino connection

Upcoming goals:
- RxJS program logic to deal with sensor data streams
- Write sensor data to either a "flat" log file inside project (data/ directory?) or in a NoSQL DB or traditional relational DB.


### Instructions on how to set up
These instructions are based on [this gist explanation](https://gist.github.com/ajfisher/5fe60fe7d8c49b3223f0) or [this gist explanation](https://gist.github.com/ajfisher/1fdbcbbf96b7f2ba73cd).

http://fab.cba.mit.edu/classes/863.14/tutorials/Programming/serialwifi.html

https://github.com/guyz/pyesp8266

http://wifinodebot.blogspot.com/2016/02/flashing-esp8266-firmware.html

1. Acquire ESP8266 (they are _very_ cheap) ([datasheet](http://download.arduino.org/products/UNOWIFI/0A-ESP8266-Datasheet-EN-v4.3.pdf))
1. Download a couple python scripts ([esptool.py](https://github.com/espressif/esptool), [esptool-ck](https://github.com/igrr/esptool-ck))
1. Install required NPM dependencies
1. Configure ESP8266
