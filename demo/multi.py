"""Small example OSC server

This program listens to several addresses, and prints some information about
received packets.
"""
import argparse
import math
# import pythoncom 
from pythonosc import dispatcher
from pythonosc import osc_server

watchface_up = True
# watchface_up is true when the zval is negative
# ranges from -100 to 100
startZ = 2323
start_vol = 0
volume_mod = 3

# newstart = False;
# def accelthing(unused_addr, valx, valy, valz):
#   global watchface_up, startZ, volume_mod, start_vol, newstart
#   if newstart:
#         print(valz)
#         startZ = valz 
#         start_vol = get_volume()
#   # print(valz)

#   if not newstart:
#     set_volume(volume_mod*(start_vol - math.floor((valz - startZ)/10)))

# def resetss(unused_addr, args):
#     global newstart
#     print("hit revol")
#     newstart = True

# def test2(unused_addr, args):
#       print("hit test2")
#       # pythoncom.CoInitialize()
#       set_volume(10)
def multitest(unused_addr, valx, valy, valz):
    print(str(valx) + " " + str(valy) + " " + str(valz))



def rawhrtFnc(unused_addr, arg):
    # print('heart')
    # print(str(arg))
    file1 = open("hrtDATA.csv", "a")  # append mode
    file1.write(str(arg))
    file1.close()

def print_volume_handler(unused_addr, args, volume):
  print(args)
  print("[{0}] ~ {1}".format(args[0], volume))

def print_compute_handler(unused_addr, args, volume):
  try:
    print("[{0}] ~ {1}".format(args[0], args[1](volume)))
  except ValueError: pass

if __name__ == "__main__":
  parser = argparse.ArgumentParser()
  parser.add_argument("--ip",
      default="127.0.0.1", help="The ip to listen on")
  parser.add_argument("--port",
      type=int, default=7500, help="The port to listen on")
  args = parser.parse_args()

  dispatcher = dispatcher.Dispatcher()
  
  # dispatcher.map("/test2", multitest)
  dispatcher.map("/rawhearer", rawhrtFnc)
#   dispatcher.map("/test1", accelthing)
#   dispatcher.map("/helo", test2)
#   dispatcher.map("/reseter", resetss)
  dispatcher.map("/volume", print_volume_handler, "Volume")
  dispatcher.map("/logvolume", print_compute_handler, "Log volume", math.log)

  server = osc_server.ThreadingOSCUDPServer(
      (args.ip, args.port), dispatcher)
  print("Serving on {}".format(server.server_address))
  server.serve_forever()