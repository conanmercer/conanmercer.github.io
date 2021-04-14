---
layout: post
author: Conan Mercer
title: "Guide to Setting Up a Power Efficient Plex Media Server"
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

  <figure>
  <img src="{{site.baseurl}}/assets/minified/images/computer/MediaServer2.png">
  </figure>

<h2>The Problem</h2>

For a long time I wanted to have my own dedicated media server, mainly for streaming films and shows to my TV on demand. I had looked into using a Raspberry Pi based system, tempted because of the power efficiency and small footprint. However, at the time of writing the Raspberry Pi 4 goes for about 60€, which is a bit more than I would like to pay, especially because that would not be the final price. I would still need hard drives, solid state drives, power supply's, micro sd cards etc. So for quite some time I parked this project. That was until I built a brand new computer system, blog post <a href="{{ site.baseurl }}{% link _posts/2020-11-28-computerbuild.md %}">here</a>. My old computer was now gathering dust, until I realized that I now had pretty much everything that I needed to build a Media Server, which was going to cost not much more than my time.

<h2>The System</h2>

The system ended up costing 43.88€, because I reused old parts. I had originally purchased these parts for a computer that I built in 2014, and at the time that build cost about 450€, to say that I have got value for money out of those parts is an understatement. I used that system to complete my Ph.D degree, and also about 2 years of remote working after my research. In total I received a good 6 years of active duty from this machine, and hopefully many more as a repurposed server.

<p>
If I did not have the benefit of having access to these old parts to reuse, I would have bought an old system on ebay for cheap. Something like an old but reasonably powerful Dell OptiPlex. In short there are many old systems on ebay that can be bought on the cheap that can be repurposed into a basic server.
</p>

<p>
The parts used in my server build are as follows:
</p>

<table>
  <tr>
    <th>Type</th>
    <th>Item</th>
    <th>Price</th>
    <th></th>
  </tr>
  <tr>
    <td>CPU</td>
    <td>AMD FX-8320</td>
    <td>n/a</td>
  </tr>
  <tr>
    <td>CPU Cooler</td>
    <td>Cooler Master Seidon 120v</td>
    <td>n/a</td>
  </tr>
  <tr>
    <td>Motherboard</td>
    <td>MSI 970A-G43</td>
    <td>n/a</td>
  </tr>
  <tr>
    <td>Memory</td>
    <td>16gb DDR3 1600MHz</td>
    <td>n/a</td>
  </tr>
  <tr>
    <td>Power</td>
    <td>Corsair CX500 V3 80+ Bronze</td>
    <td>n/a</td>
  </tr>
  <tr>
    <td>Ethernet</td>
    <td>D-Link DGE-528T (Wake on Lan supported)</td>
    <td>11.98</td>
  </tr>
  <tr>
    <td>Storage</td>
    <td>Seagate Barracuda Green 1 TB</td>
    <td>n/a</td>
  </tr>
  <tr>
    <td>Storage</td>
    <td>Western Digital Blue WD10EZEX - 1TB</td>
    <td>n/a</td>
  </tr>
  <tr>
    <td>Storage</td>
    <td>Western Digital Blue  500GB SATA</td>
    <td>n/a</td>
  </tr>
  <tr>
    <td>Boot Drive</td>
    <td>Intel 530 Series 180GB</td>
    <td>n/a</td>
  </tr>
    <tr>
    <td>Backup Boot Drive</td>
    <td>Intel 530 Series 120GB</td>
    <td>n/a</td>
  </tr>
  <tr>
    <td>Video Card</td>
    <td>NVIDIA GeForce 210</td>
    <td>11.90</td>
  </tr>
  <tr>
    <td>Case</td>
    <td>RAIJINTEK Arcadia Midi-Tower</td>
    <td>n/a</td>
  </tr>
  <tr>
    <td>Case</td>
    <td>Wood Box</td>
    <td>20</td>
  </tr>
    <tr>
    <td></td>
    <td></td>
    <td>43.88€</td>
    <th>Total</th>
  </tr>
</table>

<p>
I purchased a WoL capable ethernet card from ebay (discussed later), and a cheap GPU so that the output resolution is greater than what the motherboard can produce (discussed later). I also bought a wooden box used as a case.
</p>

<h2> Connection to the Local Network</h2>

This server is more than 10 meters and a few thick walls away from the router, so WiFi is not practical. Also, my house does not have built in CAT5 cabling, so my best shot was a powerline adapter. I had a few of these in storage so I pulled them out for this build. A powerline adaptor connects the server to the router by utilizing the homes electrical wiring. Think of it as a hassle-free version of ethernet. It works by sending a frequency through the electrical wiring of the house, which is then turned back into computer readable signals at each end. One powerline goes into the server, the other into the router.

<p>
The powerlines used here are rated for 600Mbps, but that is theoretical and not what is observed in practice. Using the powerlines the server gets about 28Mbps up and 40 down. This is not even close to the speed of my fiber internet connection, so the powerline is a huge speed bottleneck, but it should be enough for streaming purposes.
</p>

  <figure>
  <img src="{{site.baseurl}}/assets/minified/images/computer/speed.png">
  <figcaption>Figure of connection speed to the internet using the 600Mbps powerline.</figcaption>
  </figure>

<h2> Camouflage Construction</h2>

<p>
For this build I wanted stealth, but before the cool stuff comes, a good spring cleaning was in order. This process consisted of vacuuming any large pieces of dust out, and once that was done, I used Isopropyl alcohol with a tissue paper to clean off all the remaining pieces of dust and dirt. You can buy Isopropyl alcohol very cheap in most supermarkets or hardware shops.
</p>
<p>
Besides a clean, I smartened up the cable management somewhat, mainly to allow for better airflow, not aesthetics as the inside of the case will not be visible to the outside world.
</p>
<p>
Most of the components are displayed in the Front Side photograph below. The hard drives are all located on the bottom right of the server (3 HDDs, 2 SSDs), the WoL ethernet card is positioned in a PCI slot just above the power supply on the bottom left, and above that is the GPU in another PCI slot.
</p>

  <figure>
  <img src="{{site.baseurl}}/assets/minified/images/computer/MediaServer1.png">
  <figcaption>Photographs showing the inside and outside of the server.</figcaption>
  </figure>

I wanted the construction of the server to be well camouflaged. In truth, I wanted anyone who walked past it to not notice that is actually a server. With the theme of keeping expenses low, I found a wooden fruit box in my local hardware shop. I measured it up and found that it was slightly too small. No problem. I cut out a section of the bottom of the box so that it would slide over the top of the server. I used some of the off cuts as separators to make a small gap between the top of the server (where some fans are located) and the wooden box. I put a nice plant on the top to add to the disguise.

  <figure>
  <img src="{{site.baseurl}}/assets/minified/images/computer/MediaServer5.png">
  <figcaption>Photograph of the wooden box used to cover the server. Shows parts cut out of the box and reused pieces to act as a separation from the fans and the wood</figcaption>
  </figure>

  <figure>
  <img src="{{site.baseurl}}/assets/minified/images/computer/MediaServer4.png">
  <figcaption>Photograph of the back of the server, showing ethernet and power cables, a slight gap for the fans to have some extra airflow, and the powerline that allows connection to the router via the electrical wiring of the house</figcaption>
  </figure>

  <figure>
  <img src="{{site.baseurl}}/assets/minified/images/computer/MediaServer2.png">
  <figcaption>Photograph of the final server build</figcaption>
  </figure>

<h2> Operating System</h2>

For now, the server uses the Windows 10 operating system. In the future I will look into FreeNas and other offerings, mainly out of curiosity. For now, Windows 10 is doing exactly what I need this system to do.

<h3> Plex</h3>

I will not write at length about Plex here, but it is very easy to install, a good guide is present <a href="https://support.plex.tv/articles/200264746-quick-start-step-by-step-guides/" target="_blank">here</a>

<h3> Remote Desktop Connection</h3>

Because the server is headless (has no monitor attached) it is useful to be able to connect to it via another computer over the local network in order to configure settings. There are many software offerings that can achieve this, such as Team Viewer. But I find that the native windows Remote Desktop Connection works the best. In Windows 10, search for 'Remote Desktop Connection', then add the credentials of the server. This will be the name of the server and any username and password that it uses.

<p>
For the remote desktop connection to work efficiently, I purchased a very cheap GPU from ebay. Without this GPU, the output resolution of the motherboard was ridiculously low (640x480).
</p>

  <figure>
  <img src="{{site.baseurl}}/assets/minified/images/computer/windowssetup3.png">
  <figcaption>Screenshot of the Remote Desktop Connection credentials dialog</figcaption>
  </figure>

<h2> Wake on Lan</h2>

I wanted this server to be as power efficient as it could be. Most of the time the tendency is to leave servers on all the time. This seems to me a colossal waste of power. There is also an economic cost, which depending on where you live in this world may be prohibitive. Lastly, in theory the hardware will fail prematurely if it is powered constantly.

<h3> Ethernet controller</h3>
<p>
The answer to this problem is Wake-on-LAN (WoL) which allows a computer to be turned on or awakened by a network message.
First and foremost, WoL requires an ethernet card that supports this standard. The motherboard in this server is a MSI 970A-G43, which has an integrated ethernet controller, a Realtek PCI-E GbLAN controller 8111E. 
<br>
This controller does not support WoL, so I needed to buy a PCI Gigabit Ethernet card that does support WoL. A quick scout on Amazon and I found the D-Link DGE-528T for 12€. I installed this into the server.
</p>

  <figure>
  <img src="{{site.baseurl}}/assets/minified/images/computer/MediaServer3.png">
  <figcaption>Photograph of the back of the server, showing Wol capable ethernet network card</figcaption>
  </figure>

<h3> BIOS</h3>

After the card is installed, the BIOS also needs to be adjusted to support the WoL function correctly. To enter the BIOS, restart the server and press the Del key on the keyboard.

Once the BIOS menu appears, you will need to peer around the settings pages to find the Wake-on-LAN settings. On this MSI motherboard, it is part of the "Resume By PCI-E" setting.

Here is the configuration that works on this motherboard.

  <figure>
  <img src="{{site.baseurl}}/assets/minified/images/computer/bios.png">
  <figcaption>Screenshot of the correct BIOS settings to enable WoL for the MSI 970A-G43 motherboard</figcaption>
  </figure>

<h3> Windows 10 Settings</h3>

At this point, the server has a WoL capable ethernet card installed, and the BIOS is supporting the supply of power to the ethernet card. Now, the operating system needs to be setup up to support it, so when the system shuts down it essentially tells the card to go into a WOL state.

Open the Device Manager and find the Network Adapters section, and expand it to reveal your network interfaces. Right-click on the Ethernet adapter — mine is called “D-Link DGE-528T Gigabit Ethernet Adapter” and select Properties.

Next, click on the Power Management tab in that same window and check the first two boxes, leave the last box unchecked:

<ul>
  <li>Allow the computer to turn off this device to save power</li>
  <li>Allow this device to wake the computer</li>
</ul>

  <figure>
  <img src="{{site.baseurl}}/assets/minified/images/computer/windowssetup.png">
  <figcaption>Screenshot of the correct WoL settings on Windows 10</figcaption>
  </figure>
  
Click OK and exit Device Manager.

Next the power settlings are important to set. The computer must go to sleep after a defined period of time to actually gain the benefit of power saving. In Windows settings, navigate to Power and Sleep Settings and set your desired time settings.

  <figure>
  <img src="{{site.baseurl}}/assets/minified/images/computer/windowssetup2.png">
  <figcaption>Screenshot of the correct Power and Sleep settings on Windows 10</figcaption>
  </figure>

<p>
The server now goes to sleep after 5 mins of inactivity. It boots back up automatically when the Plex client on my TV is turned on, and also anytime I connect to it via Windows Remote Desktop Connection.
</p>

<h2>Automatic Boot Drive Backup</h2>

Since I have two SSDs, the second drive is most suited to backing up the boot drives image. For this I used the built in Windows 10 Back up and Restore setting. These settings can be found in Control Panel, under Back up and Restore. The back up is scheduled for every Sunday at 7pm, and the second SSD is chosen to store the back up on.

  <figure>
  <img src="{{site.baseurl}}/assets/minified/images/computer/backup.png">
  <figcaption>Screenshot of the Back up and Restore Setting in Windows 10</figcaption>
  </figure>

<h2>Power Efficiency</h2>

<p>
Power efficiency was a large part of the design of this server build. To test for this, I used the <a href="https://www.teckinhome.com/sp22" target="_blank">TECKIN Smart Plug</a> to measure power consumption of the server in various states.
</p>

<p>
The server idles at an average of 120 watts, which is not a huge power consumption, but compared to my new computer build, blog post <a href="{{ site.baseurl }}{% link _posts/2020-11-28-computerbuild.md %}">here</a>, that idles at an average of 60 watts, there is a significant 66% increase in power. This is not surprising as the server hardware is much older and less power efficient.
</p>
<p>
The server sleeps at about 5 watts, which compared to its idle state is a difference of 184%. This is a wonderful result, the benefit of WoL and its contribution to power saving is clearly evident here.
</p>

<img
    src="{{site.baseurl}}/assets/minified/images/computer/serverwatt.svg"
    alt="triangle with all three sides equal"
    height="900"
    width="600" 
    />

<figcaption>Bar plot of the server watt consumption in sleep, idle, and load states</figcaption>

<p>
In Raspberry Pi 4 B idles at about 2.7 watts, and under load at about 6.4 watts (specs taken from <a href="https://www.pidramble.com/wiki/benchmarks/power-consumption" target="_blank">here</a>). This does not include any drives or other equipment necessary to connect with the Raspberry Pi in order for it to function as a media server. The server in sleep mode, and the Raspberry Pi in an idle state consume almost the same amount of power as each other. This is a valid comparison as the server will be in sleep mode most of the time, only awakening to stream films or tv shows for a few hours a day at most.
</p>

<img
    src="{{site.baseurl}}/assets/minified/images/computer/seversleep.svg"
    alt="triangle with all three sides equal"
    height="900"
    width="600" />

<p>
To test the server under load I used <a href="https://www.userbenchmark.com/" target="_blank">Userbenchmark</a>, and using this test the server averages at around 151 watts. It is important to note that this load test is probably consuming more power than when the server is just streaming films or tv shows with Plex, but this is the result we have. Here there is a significant difference in power consumption between the Raspberry Pi and the server, this is a trade off between power and energy efficiency. This server is more powerful and offers much more capability and expansion than the Raspberry Pi, so for now, this tradeoff seems worth it.
</p>

<img
    src="{{site.baseurl}}/assets/minified/images/computer/serverload.svg"
    alt="triangle with all three sides equa"
    height="900"
    width="600" />

<h2>Power Savings</h2>

I live in Spain and the current price of electricity is 0,170105 €/kWh.
<br>
By using WoL and putting the server to sleep for most of the day, on average this saves 188€ on the electric bill per year.

<table>
  <tr>
  <th>Hours per Day</th>
  <th>€ / year</th>
  </tr>
  <tr>
    <td>24</td>
    <td>223</td>
  </tr>
  <tr>
    <td>3</td>
    <td>34.5</td>
  </tr>
</table>
<figcaption>Electricity bill costs of 24/7 usage versus 3 hours per day and using sleep mode for the remainder</figcaption>

<h2>Conclusion</h2>

<p>
The media server works and is consuming as little power as possible for its hardware architecture. Per year, by putting the server to sleep when not in use, saves me 188€. The server is built at a very low cost, reusing old hardware where possible.
</p>

<p>
In the future I will add more storage space, and better 'nas' rated drives. I will also look into alternative operating systems, in particular one that supports WoL and efficient cross platform file sharing.
</p>
