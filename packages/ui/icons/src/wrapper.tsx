// wrapper.tsx
import React from 'react'

export interface IconWrapperProps {
    size?: number | string
    color?: string
    strokeWidth?: number | string
    className?: string
}

export function wrapHeroIcon(Icon: any) {
    return React.forwardRef<any, IconWrapperProps>((props, ref) => {
        const { size, color, strokeWidth, className, ...rest } = props
        return (
            <Icon
                ref={ref}
                className={className}
                style={{
                    width: size,
                    height: size,
                    color,
                    strokeWidth
                }}
                {...rest}
            />
        )
    })
}