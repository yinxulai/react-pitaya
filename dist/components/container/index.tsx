import React from 'react'
import lessstyle from './style.less'
import { CSSProperties, HTMLAttributes } from "react"


export interface IStyleArray extends Array<Style> { }
export type Style = CSSProperties | undefined | IStyleArray

export type ClassName = string | undefined | IClassNameArray
export interface IClassNameArray extends Array<ClassName> { }

// 垃圾实现
function parseStyle(style: Style): CSSProperties {
    const styleObject: CSSProperties = {}
    const parse = (style: Style) => {
        // 数组
        if (style && Array.isArray(style)) {
            for (let index = 0; index < style.length; index++) {
                parse(style[index])
            }
        } else {
            style && Object.assign(styleObject, style)
        }
    }
    parse(style)
    return styleObject
}

// 垃圾实现
function parseClassName(className: ClassName): string {
    const classNameArray: string[] = []

    const parse = (className: ClassName) => {
        if (!className) { return }

        // 数组
        if (Array.isArray(className)) {
            for (let index = 0; index < className.length; index++) {
                parse(className[index])
            }
        } else {
            className && classNameArray.push(className)
        }
    }

    parse(className)
    return classNameArray.join(' ')
}

type HTMLDIVAttributes = Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'className'>

export interface IProps extends HTMLDIVAttributes {
    style?: Style
    className?: IClassNameArray
}

export const Container: React.FC<React.PropsWithChildren<IProps>> = props => {
    const { style, className, children, ...attributes } = props
    const classNames: string = parseClassName(className)
    const styles: CSSProperties = parseStyle(style)

    const classstring = [lessstyle.container, classNames].filter(Boolean).join(' ').trim()

    return (
        <div className={classstring} style={styles} {...attributes}>
            {props.children}
        </div>
    )
}

export default Container
