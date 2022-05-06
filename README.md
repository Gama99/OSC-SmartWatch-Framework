# FitnessWatch
Pulled from the final project binder

Data Dashboard
  Running the dashboard is a very simple process, starting with visiting a website where
  the web application has been hosted on: https://darsh97229.github.io/dashboard/. Once visiting
  this page, a site similar to the following figure will be loaded.

  The next step is to click on the connect to watch button near the bottom of the page. Once
  clicked a popup will appear indicating that a bangle smart watch can be connected. The below
  figure shows the connection popup including a bangle watch on the list ready to be paired.

  After the watch has been paired, the dashboard will become active and data values will be
  streamed in real time and displayed, this can be seen in something as simple as the rotation of the
  watch and watching the accelerometer data change to reflect the watch.
  The functionality of the dashboard allows for external device control based on the
  temperature data, if the temperature reading detected by the watch is too high or too low then a
  red or blue light bulb will turn on to reflect such temperature levels. In addition to this, the
  dashboard will also be able to detect heart rate data and if it is too high or low, turn on LEDs on
  the watch itself to indicate to the user such information.
  
  
Heart Rate Monitor
  In order to run the heart heart monitor with signal processing there are a few things that
  need to be done. The first is to start in the main directory of the project and run “python -m pip
  install heartpy”in a command prompt. The next step is to run “node .” in order to start an
  OSC server so that OSC messages can be sent and received over a UDP connection. Next you
  have to connect the watch over bluetooth to either the dashboard or some HTML file like done
  with the Volume/Gesture Control. Next run ThePythonSideOfThings.py file and click the left
  side of the screen to start taking heart rate data into a CSV file. Once data is being taken into the
  CSV file you can run watch_filtering.py and it will start calculating the heart rate in BPM and
  the data will print to the command prompt and if you are connected to the dashboard you will be
  able to see it being updated in there as well.


Volume/Gesture Control
  There are three parts to running the volume control. But before running anything, in the
  directory with the main python file (ThePythonSideOfThings.py) to install the dependencies you
  will need to run “ npm install node-osc”, and “pip install pythonosc”. The first thing to run is
  “node .” in the same directory. This starts an OSC server to carry the messages. Next run the
  ThePythonSideOfThings.py file in a new command window and open the watch HTML file in a
  browser. You should see a new connection appear in the window with the OSC browser. You can
  see if the connection is working by clicking the “say hello” button on the webpage and seeing if
  the python window says hello.
  Next you can connect your watch with the connect button on the webpage. Note it may
  take a few seconds for your system to see the watch. Once it is connected you can touch the left
  side of the watch screen to collect heart rate data or the right side of the screen to start looking to
  control the volume. To actually control the volume flick the wrist wearing teh watch or press
  button three. The state of the system can be monitored on the window running the python.


Temperature/Smart Switch Control
  To run the temperature smart control does not require much since already it is integrated
  into the dashboard. First we are required to connect the Sonoff smart switches to the eWeLink
  servers using their smartphone app, that is done by pressing and holding the button on the Sonoff
  switches for five seconds and releasing, this need to be done two times, which should make the
  light one the switch blink constantly showing that it is in pairing mode, then click to add a device
  in the eWeLink app and follow the guided steps.
  On the code and scripting side, it is required to install the eWeLink API package by
  running “npm install ewelink-api”. After that the desired temperature thresholds need to be set
  and simply run the dashboard.
