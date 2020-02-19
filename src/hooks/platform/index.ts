import React from 'react'

export function usePlatform() {

    const [size, setSize] = React.useState({
        isMobile: false, // 移动设备
        isPortrait: false, // 竖屏
        isLandscape: false, // 横屏
        width: 0, // 宽
        height: 0, // 高
        isLarge: false,
        isSmall: false
    })

    const onResize = React.useCallback(() => {
        if (!window) {
            throw Error('window is not defined')
        }

        if (!window.document) {
            throw Error('window.document is not defined')
        }

        const document = window.document

        if (!document.documentElement) {
            throw Error('document.documentElement is not defined')
        }

        const documentElement = document.documentElement
        const { clientWidth = 0, clientHeight = 0 } = documentElement


        setSize({
            width: clientWidth,
            height: clientHeight,
            isMobile: isMobile(),
            isSmall: clientWidth <= 900,
            isLarge: clientWidth >= 1920,
            isPortrait: clientHeight >= clientWidth,
            isLandscape: clientHeight < clientWidth,
        })
    }, [])

    React.useEffect(() => {
        onResize()
        window.addEventListener('resize', onResize);
        return (() => window.removeEventListener('resize', onResize))
    }, [])

    return size;
}


function isMobile() {
    if (!navigator) {
        throw Error('navigator is not defined')
    }

    if (!navigator.userAgent) {
        throw Error('navigator.userAgent is not defined')
    }

    const matchs = navigator.userAgent.match(
        /(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/i
    )

    return !!(matchs && matchs.length)
}