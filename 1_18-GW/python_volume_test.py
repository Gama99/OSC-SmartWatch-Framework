from __future__ import print_function

from ctypes import POINTER, cast

from comtypes import CLSCTX_ALL

from pycaw.pycaw import AudioUtilities, IAudioEndpointVolume
import pythoncom 

def main():
    # for i in range(20):
    # increment_volume(20)
    test1()
    
    # devices = AudioUtilities.GetSpeakers()
    # interface = devices.Activate(
    #     IAudioEndpointVolume._iid_, CLSCTX_ALL, None)
    # volume = cast(interface, POINTER(IAudioEndpointVolume))
    # print("volume.GetMute(): %s" % volume.GetMute())
    # print("volume.GetMasterVolumeLevel(): %s" % volume.GetMasterVolumeLevel())
    # print("volume.GetVolumeRange(): (%s, %s, %s)" % volume.GetVolumeRange())
    # min, max , inc = volume.GetVolumeRange()
    # actual = volume.GetMasterVolumeLevel()
    # print(actual)
    # print(min)
    # print(max)
    # print(inc)
    # print("volume.SetMasterVolumeLevel()")
    # volume.SetMasterVolumeLevel(-20.0, None)
    # print("volume.GetMasterVolumeLevel(): %s" % volume.GetMasterVolumeLevel())

def test1():
    devices = AudioUtilities.GetSpeakers()
    interface = devices.Activate(IAudioEndpointVolume._iid_, CLSCTX_ALL, None)
    volume = cast(interface, POINTER(IAudioEndpointVolume))
    # for i in range(volume.GetChannelCount()):
    #     # volume.SetChannelVolumeLevel(i, minVol, None)
    #     print("")
        
    # print(i)
    # print(volume.GetChannelCount()-1)
    # scalar = int(volume.GetChannelVolumeLevelScalar(volume.GetChannelCount()-1) * 100)
    # print(scalar)
    print(round(volume.GetChannelVolumeLevelScalar(volume.GetChannelCount()-1)*100))
    volume.SetMasterVolumeLevelScalar(0.32, None)
    print(round(volume.GetChannelVolumeLevelScalar(volume.GetChannelCount()-1)*100))


def set_volume(mod):
    pythoncom.CoInitialize()
    devices = AudioUtilities.GetSpeakers()
    interface = devices.Activate(IAudioEndpointVolume._iid_, CLSCTX_ALL, None)
    volume = cast(interface, POINTER(IAudioEndpointVolume))
    
    volume.SetMasterVolumeLevelScalar(round(mod)/100, None)
    pythoncom.CoUninitialize()

def get_volume():
    pythoncom.CoInitialize()
    devices = AudioUtilities.GetSpeakers()
    interface = devices.Activate(IAudioEndpointVolume._iid_, CLSCTX_ALL, None)
    volume = cast(interface, POINTER(IAudioEndpointVolume))
    pythoncom.CoInitialize()
    retval = round(volume.GetChannelVolumeLevelScalar(volume.GetChannelCount()-1)*100)
    pythoncom.CoUninitialize()
    return retval

def increment_volume(mod):
    devices = AudioUtilities.GetSpeakers()
    interface = devices.Activate(IAudioEndpointVolume._iid_, CLSCTX_ALL, None)
    volume = cast(interface, POINTER(IAudioEndpointVolume))
    volume.SetMasterVolumeLevelScalar(mod/100, None)
    # old
    # ----------------------------------------
    # devices = AudioUtilities.GetSpeakers()
    # interface = devices.Activate(
    #     IAudioEndpointVolume._iid_, CLSCTX_ALL, None)
    # volume = cast(interface, POINTER(IAudioEndpointVolume))

    
    # actual_vol = volume.GetMasterVolumeLevel()
    # min, maxim , inc = volume.GetVolumeRange()
    # increment = -1 * (min / 100)
    # # print(increment)
    # # print(inc)
    # # print(volume.GetMasterVolumeLevel())
    # # print(maxim)
    # # print(mod*increment)
    # if maxim - mod*increment >= volume.GetMasterVolumeLevel():
    #     print("yes?")
    #     volume.SetMasterVolumeLevel(volume.GetMasterVolumeLevel() + mod*increment, None)
    # # print(volume.GetMasterVolumeLevel())
    # # print(" ")

def decrement_volume(mod):
    devices = AudioUtilities.GetSpeakers()
    interface = devices.Activate(
        IAudioEndpointVolume._iid_, CLSCTX_ALL, None)
    volume = cast(interface, POINTER(IAudioEndpointVolume))
    actual_vol = volume.GetMasterVolumeLevel()
    min, max , inc = volume.GetVolumeRange()
    increment = -1 * (min / 100)
    # print(increment)
    # print(inc)
    # print(actual_vol)
    if min + mod*increment <= actual_vol:
        volume.SetMasterVolumeLevel(actual_vol - mod*increment, None)
    # print(volume.GetMasterVolumeLevel())
    # print(" ")

if __name__ == "__main__":
    
    main()
# from pycaw.pycaw import AudioUtilities


# def main():
#     sessions = AudioUtilities.GetAllSessions()
#     for session in sessions:
#         volume = session.SimpleAudioVolume
#         if session.Process and session.Process.name() == "chrome.exe":
#             if(volume.GetMute() == 0):
#                 volume.SetMute(1, None)
#             else:
#                 volume.SetMute(0, None)


# if __name__ == "__main__":
#     main()