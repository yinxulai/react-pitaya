import React from 'react'
import Container, { IProps as BaseProps } from '../container'

export type GapLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

export type LtrbLevel = [GapLevel, GapLevel, GapLevel, GapLevel]

// 越具体的覆盖模糊的
// 例如 top 很具体 所以覆盖 all、ltrb 等
export interface IProps extends BaseProps {
    top?: GapLevel
    bottom?: GapLevel
    left?: GapLevel
    right?: GapLevel

    all?: GapLevel
    ltrb?: LtrbLevel
    vertical?: GapLevel
    horizontal?: GapLevel

    type?: 'padding' | 'margin'
}

export const Gap: React.FC<React.PropsWithChildren<IProps>> = props => {
    let [left, right, top, bottom] = [0, 0, 0, 0]
    const { ltrb, all, vertical, horizontal, type = 'margin', children } = props

    if (!children) {
        return null
    }

    if (all) {
        left = right = top = bottom = all
    }

    if (ltrb) {
        left = ltrb[0]
        top = ltrb[1]
        right = ltrb[2]
        bottom = ltrb[3]
    }

    if (vertical) {
        left = right = vertical
    }

    if (horizontal) {
        top = bottom = horizontal
    }

    if (props.left != null) {
        left = props.left
    }

    if (props.top != null) {
        top = props.top
    }

    if (props.right != null) {
        right = props.right
    }

    if (props.bottom != null) {
        bottom = props.bottom
    }

    const paddingStyle = {
        paddingTop: `${top * 4}px`,
        paddingBottom: `${bottom * 4}px`,
        paddingLeft: `${left * 4}px`,
        paddingRight: `${right * 4}px`,
    }

    const marginStyle = {
        marginTop: `${top * 4}px`,
        marginBottom: `${bottom * 4}px`,
        marginLeft: `${left * 4}px`,
        marginRight: `${right * 4}px`,
    }

    const gapStyle = type === 'margin' ? marginStyle : paddingStyle

    if (Array.isArray(children)) {
        return (
            <>
                {
                    children.map((child, index) =>
                        child && (
                            <Container
                                key={index}
                                className={[props.className]}
                                style={[gapStyle, props.style]}
                            >
                                {child}
                            </Container>
                        )
                    )
                }
            </>
        )
    }

    return (
        <Container className={[props.className]} style={[gapStyle, props.style]}>
            {children}
        </Container >
    )
}

export default Gap