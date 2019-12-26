const Config = {}

Config.appName = 'Drawith.Me'
Config.appVersion = 0.4

Config.isDebug = true
Config.socketUrl = (Config.isDebug ? 'http://46.252.150.61:5000' : 'http://46.252.150.61:4000')

Config.fb = {
  appId: '1448620825449065',
  apiVersion: 'v2.2',
}

if (Config.supportTouch) {
  Config.eventStart = 'touchstart'
  Config.eventMove = 'touchmove'
  Config.eventEnd = 'touchend'
  Config.eventOut = ''
} else {
  Config.eventStart = 'mousedown'
  Config.eventMove = 'mousemove'
  Config.eventEnd = 'mouseup'
  Config.eventOut = 'mouseout'
}

// TODO .android, .isPhone, .isTablet
Config.android = false
Config.mac = /Macintosh/.test(navigator.userAgent)
Config.ipad = Config.mac && Config.supportTouch
Config.iphone = /iPhone/.test(navigator.userAgent)
Config.isTablet = Config.ipad
Config.isPhone = Config.iphone
Config.isMobile = (Config.isPhone || Config.isTablet)
Config.isDesktop = !Config.isMobile
Config.isAppOnline = (document.location.host.toLowerCase() === Config.appName)
Config.eventResize = 'onorientationchange' in window ? 'orientationchange' : 'resize'
Config.pixelRatio = (Config.isMobile ? window.devicePixelRatio : 1)
Config.scale = 1 / Config.pixelRatio
Config.supportTouch = ('ontouchstart' in window)
Config.supportGesture = ('ongesturechange' in window)
Config.supportOrientation = ('orientation' in window)

export default Config
