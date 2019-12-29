const Config = {}

Config.appName = 'Drawith.Me'
Config.appVersion = 0.4

Config.isDebug = true
// if isDebug  --> 'http://46.252.150.61:5000'
// if !isDebug --> 'http://46.252.150.61:4000'
Config.socketUrl = 'http://46.252.150.61:5000'

Config.fb = {
  appId: '1448620825449065',
  apiVersion: 'v2.2',
}

Config.supportTouch = !!window.ontouchstart
Config.supportGesture = !!window.ongesturechange
Config.supportOrientation = !!window.orientation

Config.eventStart = Config.supportTouch ? 'touchstart' : 'mousedown'
Config.eventMove = Config.supportTouch ? 'touchmove' : 'mousemove'
Config.eventEnd = Config.supportTouch ? 'touchend' : 'mouseup'
Config.eventOut = Config.supportTouch ? '' : 'mouseout'

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

export default Config
