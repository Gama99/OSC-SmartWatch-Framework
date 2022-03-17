import numpy as np

import heartpy as hp
import pandas as pd
import matplotlib.pyplot as plt

from scipy.signal import resample

import sys

import argparse
import math
# import pythoncom 
from pythonosc import dispatcher
from pythonosc import osc_server
from pythonosc import udp_client
import time

import csv
i = 0
j = 500
k = 0



client2 = -23;
args = -23
if __name__ == "__main__":
    parser2 = argparse.ArgumentParser()
    parser2.add_argument("--ip",
      default="127.0.0.1", help="The ip to listen on")
    parser2.add_argument("--port",
      type=int, default=7400, help="The port to listen on")
    args2 = parser2.parse_args()
    client2 = udp_client.SimpleUDPClient(args2.ip, args2.port)

    #server = osc_server.ThreadingOSCUDPServer(
     # (args2.ip, args2.port), dispatcher)
   # print("Serving on {}".format(server.server_address))
   # server.serve_forever()

time.sleep(10)
while True:
    time.sleep(5)

    file = open("hrtDATA.csv")
    reader = csv.reader(file)
    lines = len(list(reader))
    print(lines)

    df = pd.read_csv('hrtDATA.csv')
    df.keys()

   # plt.figure(figsize=(12,6))

    #plt.plot(df['hart'].values)
    #plt.show()

    
    first = i // 10
    second = j // 10

    raw = df['hart'].values[first:second]
    #plt.plot(signal)
    #plt.show()

   # plt.figure(figsize=(12,6))
    #plt.plot(signal[0:int(240 * 10)])
    #plt.title('original signal')
    #plt.show()
    mx = np.max(raw)
    mn = np.min(raw)
    global_range = mx - mn

    windowsize = 5
    filtered = []

    for i in range(len(raw) // windowsize):
        start = i * windowsize
        end = (i + 1) * windowsize
        sliced = raw[start:end]
        rng = np.max(sliced) - np.min(sliced)
        
        if ((rng >= (0.5 * global_range)) 
            or 
            (np.max(sliced) >= 0.9 * mx) 
            or 
            (np.min(sliced) <= mn + (0.1 * mn))):
            
            for x in sliced:
                filtered.append(0)
        else:
            for x in sliced:
                filtered.append(x)

    

    filtered_sig = hp.filter_signal(filtered, [0.7, 3.0], sample_rate=10, 
                                order=3, filtertype='bandpass')

    #let's plot first 240 seconds and work with that!
   # plt.figure(figsize=(12,12))
    #plt.subplot(211)
    #plt.plot(signal[0:int(240 * 10)])
    #plt.title('original signal')
    #plt.subplot(212)
    #plt.plot(filtered[0:int(240 * 10)])
    #plt.title('filtered signal')
    #plt.show()

   # plt.figure(figsize=(12,6))
    #plt.plot(filtered[0:int(10 * 60)])
    #plt.title('60 second segment of filtered signal')
    #plt.show()

    resampled = resample(filtered_sig, len(filtered)* 10)

    #don't forget to compute the new sampling rate
    new_sample_rate = 100

    #run HeartPy over a few segments, fingers crossed, and plot results of each
    for s in [[i, j]]:
        wd, m = hp.process(resampled[s[0]:s[1]], sample_rate = 100, 
                        high_precision=True, clean_rr=True)
        #hp.plotter(wd, m, title = 'zoomed in section', figsize=(12,6))
        #hp.plot_poincare(wd, m)
        #plt.show()
        print(k, " BPM: ", m["bpm"])
        client2.send_message("/filter", m["bpm"])
        #for measure in m.keys():
            #print('%s: %f' %(measure, m[measure]))
    k += 1
    i += 500
    j += 500