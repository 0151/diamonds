// !MSStream is here because IE11 on Windows Phone sometimes tries to simulate iPhone
export default (): boolean => /android|ipad|iphone|ipod/i.test(navigator.userAgent) && !window.MSStream;
