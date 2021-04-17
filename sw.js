/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/blog/2020/04/21/hello-world/index.html","625a500efffcfea5579e49120ce32842"],["/blog/2020/04/22/c-读取bmp灰度图像，进行直方图统计，计算最值、期望等/20181014225402135.png","471fec17e2458f1c9a3265fb24c3d3a6"],["/blog/2020/04/22/c-读取bmp灰度图像，进行直方图统计，计算最值、期望等/20200422225827.png","e64da441eadb912a966ba8ea3aa94285"],["/blog/2020/04/22/c-读取bmp灰度图像，进行直方图统计，计算最值、期望等/20200422230111.png","5e63eb64fb7818ab6925e13fd4ab26c8"],["/blog/2020/04/22/c-读取bmp灰度图像，进行直方图统计，计算最值、期望等/index.html","f9e9e791cfbbeaad2ddd035f94c4e52f"],["/blog/2020/05/06/c-对bmp灰度图像进行像素范围拉伸/index.html","64a82c4f93ce44a7bfd949c545896453"],["/blog/2020/10/28/NodeJS-Postgres错误getaddrinfo-ENOTFOUND-NodeJS-Postgres-error-getaddrinfo-ENOTFOUND/01.png","087eb666dbdd58aea2895464f7364933"],["/blog/2020/10/28/NodeJS-Postgres错误getaddrinfo-ENOTFOUND-NodeJS-Postgres-error-getaddrinfo-ENOTFOUND/02.png","bc330c8458500862077a2b200b6c506e"],["/blog/2020/10/28/NodeJS-Postgres错误getaddrinfo-ENOTFOUND-NodeJS-Postgres-error-getaddrinfo-ENOTFOUND/index.html","ab6a2106ceddefb1c7fc9089338df291"],["/blog/2020/11/11/windows命令/index.html","4d8d0425bae1f4eacf0b16c88c3c04ed"],["/blog/2020/11/26/python安装Geopandas/FIona.png","4bb7acd497da338adb56bd86dbf0376c"],["/blog/2020/11/26/python安装Geopandas/Geopandas.png","c460bf3c1f66cffbc3f854df259f56cd"],["/blog/2020/11/26/python安装Geopandas/gdal.png","26b249c015ae805aa788e41b1fe7a1e6"],["/blog/2020/11/26/python安装Geopandas/index.html","b4e59ec81bb897bb7adfd9a1107c8679"],["/blog/2021/01/25/c-实现KNN算法/index.html","b673702b73ef75a074b8b61ee1680f9d"],["/blog/2021/04/16/MapServer请求平移缩放拖拽/index.html","65627c785a866263790e2bc50d104992"],["/blog/2021/04/17/FeatureServer请求下载geojson/index.html","140492bd501f67587a208b83d6acba0a"],["/blog/archives/2020/04/index.html","47cf878d9254db9c39a837b430236b42"],["/blog/archives/2020/05/index.html","aba2b7093bcaf8f18de43af768846ec9"],["/blog/archives/2020/10/index.html","e726fd424a7a8b91e3b4c3bba5233ae2"],["/blog/archives/2020/11/index.html","4324823cc2b2a6bee5a67bf56ade972b"],["/blog/archives/2020/index.html","eec80003264e0089bdb82e2e4ce09776"],["/blog/archives/2021/01/index.html","5c9ae58dfe20858d04ae4b9a1e32c722"],["/blog/archives/2021/04/index.html","a2f31f982612ae4d1b2932aa6ee142ae"],["/blog/archives/2021/index.html","93e85bfd557a8fe8b06b3696e2e5bba5"],["/blog/archives/index.html","340650b4a120bf27309ee64393064c4c"],["/blog/css/main.css","efcfa2c02bc887c6813795d678a281bf"],["/blog/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/blog/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/blog/dist/music.js","a87485aa75e5177ef2b06bf948e31075"],["/blog/figlet/fetch.min.js","350d73710c8e7facd458e74b17b96c27"],["/blog/figlet/figlet.js","0dcd07654130a5de80d46793553ba41b"],["/blog/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/blog/images/alipay.jpg","cf3ab5dd0ef61e2b7af5c0173e58f363"],["/blog/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/blog/images/avatar.gif","c6e949a6226bcf46b24676d7ff90de88"],["/blog/images/beichen.png","351f8c15f8bcde68d5e38b7e2de41644"],["/blog/images/beichen_bak.png","b4fbc89e98ed99093f059d017a115fb0"],["/blog/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/blog/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/blog/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/blog/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/blog/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/blog/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/blog/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/blog/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/blog/images/favicon-16x16-next.png","01ec813708914cc66ad6b541d77e7615"],["/blog/images/favicon-32x32-next.png","7814756ad0da24ca5b191165eb36f292"],["/blog/images/head.jpg","c6e949a6226bcf46b24676d7ff90de88"],["/blog/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/blog/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/blog/images/linkcard.png","f5f5a1ff80b9f2403d76d0092128df19"],["/blog/images/linkcard_bak.png","e1f9f6973a3d2c38b0b2b7317bd7b317"],["/blog/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/blog/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/blog/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/blog/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/blog/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/blog/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/blog/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/blog/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/blog/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/blog/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/blog/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/blog/images/wechat.png","69b24dc6c971c3b2a103c88824349aca"],["/blog/images/wechat.svg","2ef3f3696267249c4372a5e3f9db36f2"],["/blog/images/wechatpay.jpg","312b25f815ae4f17aece895cb95623a5"],["/blog/images/xiaohutong.png","14589dbb580ac44e4c04e4e94f22ab0f"],["/blog/index.html","54a7604dabb4ec9ea263d6af0998f621"],["/blog/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/blog/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/blog/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/blog/js/cursor/text.js","fbe111a3ab258f224f8c4b41c9b3e886"],["/blog/js/src/Valine.min.js","6f1a471af66a428b60016a6e22e2784e"],["/blog/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/blog/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/blog/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/blog/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/blog/js/src/bubble.js","8fdcf8ca4941000b226b2e7535bf1af8"],["/blog/js/src/clipboard-use.js","6245c44a33b72d0b5d04562b6808a309"],["/blog/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/blog/js/src/crash_cheat.js","a9f0920c901ee43e163479111c874163"],["/blog/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/blog/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/blog/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/blog/js/src/linkcard.js","da6cb85a2c1d36027ca414459c8dd58f"],["/blog/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/blog/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/blog/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/blog/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/blog/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/blog/js/src/utils.js","ee7e149030931501fa19b0ab74b46b34"],["/blog/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/blog/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/blog/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/blog/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/blog/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/blog/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/blog/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/blog/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/blog/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/blog/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/blog/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/blog/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/blog/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/blog/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/blog/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/blog/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/blog/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/blog/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/blog/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/blog/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/blog/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/blog/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/blog/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/blog/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/blog/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/blog/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/blog/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/blog/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/blog/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/blog/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/blog/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/blog/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/blog/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/blog/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/blog/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/blog/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/blog/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/blog/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/blog/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/blog/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/blog/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/blog/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/blog/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/blog/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/blog/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/blog/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/blog/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/blog/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/blog/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/blog/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/blog/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/blog/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/blog/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/blog/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/blog/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/blog/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/blog/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/blog/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/blog/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/blog/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/blog/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/blog/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/blog/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/blog/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/blog/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/blog/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/blog/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/blog/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/blog/live2d-widget/README.html","db79a3bbfd794941c59b40a2f16ec8b1"],["/blog/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/blog/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/blog/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/blog/live2d-widget/autoload.js","fdff49a1ea5efd0d3bbd7ac8748b51f2"],["/blog/live2d-widget/demo/demo1.html","1e819b25012afb549f8014f16a7e0da1"],["/blog/live2d-widget/demo/demo2.html","5f66874ed766670b8dfebbe50567c3d2"],["/blog/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/blog/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/blog/live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["/blog/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/blog/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/blog/sharejs/fonts/iconfont.svg","11f1b83bfa2973cab7fe30d3f4bb278f"],["/blog/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/blog/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/blog/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/blog/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/blog/sw-register.js","341b80ff3a4332cc772919b1760a697e"],["/blog/tags/c/index.html","78b5c5325553155d813502cd374e6103"],["/blog/tags/index.html","e6b84dd180b353ac29c5727b51f4c7c4"],["/blog/tags/node/index.html","9de1958f3d1bba2abb42711eaa2b4ee2"],["/blog/tags/postgresql/index.html","fc22f0a896f2f770fb73caa189755666"],["/blog/tags/python/index.html","82b42d8e4cf43de7e21d4d6519cc083d"],["/blog/tags/图像处理/index.html","1dec790dd8a811d28bdd2f4f35d300a6"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
