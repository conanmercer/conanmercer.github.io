---
layout: post
author: Conan Mercer
title: "Infrared Temperature Monitoring System for a Computer"
categories: [blog, Computer Building]
tags: electronics
---

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async
          src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
</script>

<div class="post-paragraph">
  <h1>{{ page.title }}</h1>
  <p><i>{{ page.date | date_to_string }} - {{ page.author }}</i></p>

<b>The code used in this post also resides on my GitHub - it can be viewed from <a href="https://github.com/ConanMercer/ComputerCaseTemperature" target="_blank">here</a></b>

<h2>Motivation</h2>

I had just built a new computer, blog post <a href="{{ site.baseurl }}{% link _posts/2020-11-28-computerbuild.md %}">here</a>, and have for years built up a collection of electronic components from various electrical engineering projects. Within that collection was a lot of microprocessors and infrared temperature sensors. The idea was to build a decent temperature monitoring system for the new computer build. The system would monitor the air temperature on the intake fans, as well as the exhaust fans. A rough idea of the output can be seen in the schematic below:

<figure>
  <img src="{{site.baseurl}}/assets/minified/images/computer/temp2.png">
</figure>

<h2>Parts Selection</h2>

<table>
  <tr>
    <th>Type</th>
    <th>Product</th>
    <th>€ Price</th>
  </tr>
  <tr>
    <td>Microcontroller</td>
    <td>ESP8266</td>
    <td>8.29</td>
  </tr>
  <tr>
    <td>3 x Infrared Temperature Sensors</td>
    <td>MLX90614ESF-DCI</td>
    <td>50.97</td>
  </tr>
  <tr>
    <td>6 x OLED Displays</td>
    <td>I2C 128 x 64 pixels 0.96 Inch</td>
    <td>19.99</td>
  </tr>
  <tr>
    <td>8 Channel Multiplexer</td>
    <td>TCA9548A</td>
    <td>4.99</td>
  </tr>
  <tr>
    <td>Prototype Board</td>
    <td>25 Pieces 7 Size kit</td>
    <td>14.99</td>
  </tr>
  <tr>
    <td></td>
    <td><b>Total</b></td>
    <td><b>€99.23</b></td>
  </tr>
</table>

<h3>Reasoning behind parts selection</h3>

<h4>The Microcontroller</h4>

I started the build using an Arduino UNO, mainly for ease because I could plug wires directly into the pins on that board. However, in the late stages of programming, the UNO memory was almost full, besides this the size of the UNO board is a little bit too big for this project. In the end this microcontroller would be inserted somewhere inside the computer case. I had a lot of ESP8266 microcontroller boards not being used, so I decided to use these, the dimensions of the board are a lot smaller, plus this board has significantly more memory, processing power, and is Wi-Fi enabled. I like to build redundancy into electrical engineering projects, as often is the case you may find yourself wishing you had certain features for a future upgrade.

  <figure>
  <img src="{{site.baseurl}}/assets/minified/images/computer/esp8266.png">
  <figcaption>Photograph of an ESP8266 microprocessor</figcaption>
  </figure>

I had used the Melexis MLX IR sensors in the past for many projects. From experience, and extensive testing, I know that these sensors are highly accurate, stable, and affordable.

  <figure>
  <img src="{{site.baseurl}}/assets/minified/images/computer/irsensor3.png">
  <figcaption>Photograph of MLX90614ESF-DCI IR Sensor</figcaption>
  </figure>

<br>
Likewise for the OLED screens, they are cheap, look good and get the job done. I also knew that solid library's exist to control these screens, so for this project they where a great choice.

  <figure>
  <img src="{{site.baseurl}}/assets/minified/images/computer/oled.png">
  <figcaption>Photograph of OLED screen</figcaption>
  </figure>

<br>
As for the TCA9548A 8 Channel Multiplexer, this part was new to me. But after a little research it seemed to have everything I needed to run 6 OLEDs, with 2 channels left over for redundancy. Plus they are readily available online for peanuts.

  <figure>
  <img src="{{site.baseurl}}/assets/minified/images/computer/8channel.png">
  <figcaption>Photograph of TCA9548A 8 Channel Multiplexer</figcaption>
  </figure>

<h2>The Circuit</h2>
The circuit is as simple as possible. A few points of note is that the VDD pin on the MLX IR sensors are power lines, and VSS are the ground lines. The pins D1 and D2 on the ESP8266 are SCL (Serial Clock) and SDA (Serial Data) lines respectively. The part number SSD1306 represents the 6 OLED screens.
<br>
A solid circle on the circuit schematic represents an actual electrical connection.
<br>
The pins A2, A1 and A0 are all connected together on the TCA9548A to give it an I2C address of 0x71.

  <figure>
  <img src="{{site.baseurl}}/assets/minified/images/computer/TempCircuit.png">
  <figcaption>Circuit diagram of the infrared temperature sensing system </figcaption>
  </figure>

<h2>Programming</h2>

The program itself is reasonably straightforward. Reaching this simple state took quite a bit of trial and error. When programming for electrical engineering applications it is necessary to think not just about code, but how that code will manifest itself on physical, tangible components out in the wild. Aspects of timing become important, initialization of multiple screens, frequency of sensor readings, and fonts.
First lets take a look at the libraries used.

<h4>Libraries used</h4>
The Arduino library is par for the course with an Arduino based project. The U8g2lib is a monochrome graphics library for embedded devices, this is used to support the OLEDs, which include the SSD1306 controller used in this project. The Wire library allows communication with I2C / TWI devices. The OLEDs and the TCA9548A multiplexer are both I2C devices. Finally the Adafruit MLX90614 library is used to communicate with the IR sensors.
<br>
<script src="https://gist.github.com/ConanMercer/d7a2e8900dbf8269520c15160804b2b3.js"></script>

<h4>OLED Initialization</h4>
One big problem was that once the ESP8266 was turned on, only some of the screens would light up. Even more frustratingly, there was no obvious pattern to what screens would light up, each time seemed random. At first I thought that the problem may be the TCA9548A 8 channel multiplexer not being able to handle 6 OLEDs. Also, I explored the idea that the Arduino UNO (the microprocessor originally used) may not have enough SDRAM to run the OLEDS screens correctly. Lastly, maybe it was the power supply not having enough juice to get the job done.
<br>
None of the above.
<br>
After sufficient head scratching, it dawned on me that perhaps each screen needs to be initialized, so that would be 6 separate initializations. This was the problem, seems obvious in hindsight, everything is. Originally the code initialized just once the u8g2.begin() command. What is actualy need is 6 initializations. 
<br>
The void loop function calls within it the printTemp function, after each time the TCA9548A changes to a new channel. Inside printTemp u8g2.begin() is called to initialize the next OLED screen, until it hits the boolean guard (line 3 below) at which point no more OLED initializations occur, because all screens have now been initialized.

<script src="https://gist.github.com/ConanMercer/332800d62b53769f539841026142c96f.js"></script>

<h4>The Full Code</h4>

The full code can be seen below. A few other important mentions is that the I2C frequency of the OLED screens must be set manually to 100KHz (see line 49 below) so it is compatible with the MLX90614 IR sensors. By default it is not set to 100KHz, which causes I2C problems and the code will not work correctly.
<br>
The void TCA9548A function (see line 17 below) is used to change the channel of the 8 channel multiplexer. It expects an integer between 1-8 to be passed.
<br>
The font size changes. The top three screens that display the location of the IR sensor needs to be smaller than the temperature readings to fit correctly on the OLEDs, see lines 54 and 61 below.

<script src="https://gist.github.com/ConanMercer/79e95f7b7524bf78a016bab42b5c7b6c.js"></script>

<h3>Conclusion</h3>

My next project will be to install this IR temperature monitoring system into my glass tempered computer case. The custom infrared temperature sensing system using a microcontroller and OLED screens will then monitor the temperature of the intake and exhaust fans. The OLED screens will be visible to the outside through the glass, stay tuned!

<br>

<figure>
  <img src="{{site.baseurl}}/assets/minified/images/computer/irsensors.png">
  <figcaption>Photograph of the prototype temperature sensing system</figcaption>
</figure>
