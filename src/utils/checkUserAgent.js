export const checkUserAgent = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    if ( userAgent.indexOf('android') > -1) {
        //안드로이드
        return "android";
    } else if ( userAgent.indexOf("iphone") > -1||userAgent.indexOf("ipad") > -1||userAgent.indexOf("ipod") > -1 ) {
        //IOS
        return "ios";
    } else {
        //아이폰, 안드로이드 외
        return "other";
    }
}