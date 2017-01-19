## Walker Bot V3
(TODO: Acquire git hosted image of quad walker bot posed)
(TODO: Green Bot Image PNG)
(TODO: Red Bot Image PNG)
(TODO: Black Bot Image PNG)
(TODO: Blue Bot Image PNG)
(TODO: Orange Bot Image PNG)

Five robot frames have been created to start off the third redesign of the Walker Bot series.

This is the third major iteration over a walker-bot project I've been working on.  The major benefits of this major update is...

- Utilize Johnny-five and functional JavaScript to build bot logic, whose instructions are compiled on a general-purpose computer (GPC) and sent over to `StandardFirmata` enabled `Arduino`
- *Wireless communication* between GPC and Arduino using ESP8266 WiFi component, therefore an *Arduino* does _not_ have to be tethered via USB cable to GPC.  Down with required cable connections!
- Additional component purchases include: Accelerometer, Gyroscope, thermometers and GPS modules to generate run-time sensor data to send over GPC/Arduino connection

Upcoming goals:
- Create __*RxJS program*__ logic to deal with __*Sensor Data Streams*__ (*__*Scala*__* guys are probably thinking "Oh! __*Actors*__ can process those") in __*Johnny-five*__ (Node-based library for controlling hardware)(Abbreviated J5)
- Write sensor data to either a "flat" log file inside project (data/ directory?) or in a NoSQL DB or traditional relational DB.
- Write a **Machine Learning** algorithm to best navigate the real world through components identified above via the **Sensor Data Streams**.  Very rudimentary and quick to create is the important system quality for this task.
- Deploy a behavioral-based **Ghost** into robotic **frame** (...just like ghost in the shell) and have a **Reactive System** in the cloud reacting to the stream of data sourced from physical **frame** to the web.  The **WiFi Component** should automatically reconnect to **preconfigured networks** (perhaps through SD card) securely.
- Purchase additional components:
    - Accelerometer
      - [x] Personal supply
    - Gyroscope
      - [x] Personal supply
    - Thermometers
      - [x] Personal supply
    - GPS (modules to generate run-time sensor data to send over GPC/Arduino connection)
    - Smallest SD card reader/writer (for larger memory storage during process live time to ensure logs are always kept during operation.  Reconnecting should once again sync logs with the robot being the ultimate source of truth)
-   __***Maintain***__ bots (production?) through __***Operations***__ completed from a desk __***3D Printer***__ with __***Heated Pad***__ converting either __***PLA Plastic***__ (lower melting point and more malleable) or __***ABS Plastic***__ (stronger material)


### Instructions on how to set up
These instructions are based on [this gist explanation](https://gist.github.com/ajfisher/5fe60fe7d8c49b3223f0) or [this gist explanation](https://gist.github.com/ajfisher/1fdbcbbf96b7f2ba73cd).

Random Resources:

1. http://fab.cba.mit.edu/classes/863.14/tutorials/Programming/serialwifi.html

1. https://github.com/guyz/pyesp8266

1. http://wifinodebot.blogspot.com/2016/02/flashing-esp8266-firmware.html

1. http://www.arduinesp.com/getting-started

1. https://www.3dhubs.com/knowledge-base/pla-vs-abs-whats-difference

### Physical Build Tasks
Two instructional guides

1. Frame Print
  1. Acquire 3d print file that prints robotic frame
    (TODO: Link the frame I use at meetup here)
  1. Acquire 3d desk printer to turn plastic filament into Frame
    (TODO: Add images through github to display the process)
  1. Many colors of plastic filament to go through the conversion process
    (TODO: Display image of many colors of filaments)


1. Setup WiFi (maintainence- every battery recycle may involve wifi recovery)
  1. Acquire ESP8266 (they are _very_ cheap) ([datasheet](http://download.arduino.org/products/UNOWIFI/0A-ESP8266-Datasheet-EN-v4.3.pdf))
  1. Download a couple python scripts ([esptool.py](https://github.com/espressif/esptool), [esptool-ck](https://github.com/igrr/esptool-ck))
  1. Install required NPM dependencies
  1. Configure ESP8266-01 Component
    - (TODO: Take image of a live ESP8266-01 with single red led on)
    - (TODO: Take image of live ESP8266-01 red and blue leds on)

### Gallery
(TODO: Enumerate through media I've collected associated with these robots.  Includes posed artistic toy scenery!)
