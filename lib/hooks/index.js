function __any_css_style_inject__(css) {
    if (!css)
        return;
    // 环境检查
    if (typeof (window) == 'undefined')
        return;
    if (typeof (document) == 'undefined')
        return;
    if (typeof (document.head) == 'undefined')
        return;
    function hash(input) {
        var hash = 5381;
        var i = input.length - 1;
        var I64BIT_TABLE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-'.split('');
        if (typeof input == 'string') {
            for (; i > -1; i--)
                hash += (hash << 5) + input.charCodeAt(i);
        }
        else {
            for (; i > -1; i--)
                hash += (hash << 5) + input[i];
        }
        var value = hash & 0x7FFFFFFF;
        var retValue = '';
        do {
            retValue += I64BIT_TABLE[value & 0x3F];
        } while (value >>= 6);
        return retValue;
    }
    // 计算内容哈希
    var documentID = hash(css);
    if (document.getElementById(documentID))
        return;
    // 创建 style
    var style = document.createElement('style');
    style.id = documentID;
    style.innerHTML = css;
    // 插入 dom
    document.head.appendChild(style);
    return css;
}

import React from 'react';

function usePlatform() {
    const [size, setSize] = React.useState({
        isMobile: false,
        isPortrait: false,
        isLandscape: false,
        width: 0,
        height: 0,
        isLarge: false,
        isSmall: false
    });
    const onResize = React.useCallback(() => {
        if (!window) {
            throw Error('window is not defined');
        }
        if (!window.document) {
            throw Error('window.document is not defined');
        }
        const document = window.document;
        if (!document.documentElement) {
            throw Error('document.documentElement is not defined');
        }
        const documentElement = document.documentElement;
        const { clientWidth = 0, clientHeight = 0 } = documentElement;
        setSize({
            width: clientWidth,
            height: clientHeight,
            isMobile: isMobile(),
            isSmall: clientWidth <= 900,
            isLarge: clientWidth >= 1920,
            isPortrait: clientHeight >= clientWidth,
            isLandscape: clientHeight < clientWidth,
        });
    }, []);
    React.useEffect(() => {
        onResize();
        window.addEventListener('resize', onResize);
        return (() => window.removeEventListener('resize', onResize));
    }, []);
    return size;
}
function isMobile() {
    if (!navigator) {
        throw Error('navigator is not defined');
    }
    if (!navigator.userAgent) {
        throw Error('navigator.userAgent is not defined');
    }
    const matchs = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/i);
    return !!(matchs && matchs.length);
}

export { usePlatform };
//# sourceMappingURL=index.js.map
