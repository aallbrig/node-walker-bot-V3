const VirtualSerialPort = require('udp-serial').SerialPort;
const firmata = require('firmata');
const five = require('johnny-five');

//create the udp serialport and specify the host and port to connect to
const sp = new VirtualSerialPort({
  host: '192.168.4.1',
  type: 'udp4',
  port: 1025
});

//use the serial port to send a command to a remote firmata(arduino) device
const io = new firmata.Board(sp);
io.once('ready', function(){
    console.log('IO Ready');
    io.isReady = true;

    const board = new five.Board({io: io, repl: true});

    board.on('ready', function(){
        console.log('five ready');
        //Full Johnny-Five support here:

        const led = new five.Led(13);
        led.blink();
    });
});
