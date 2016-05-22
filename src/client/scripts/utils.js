export function transformFromProps(props, reverse) {
    if(!props) {
        return ''
    }

    const transforms = [],
        sign = reverse ? -1 : 1

    transforms.push(`rotateX(${sign * (props.rotX || 0)}deg)`)
    transforms.push(`rotateY(${sign * (props.rotY || 0)}deg)`)
    transforms.push(`rotateZ(${sign * (props.rotZ || 0)}deg)`)

    transforms.push(`translateX(${sign * (props.x || 0)}px)`)
    transforms.push(`translateY(${sign * (props.y || 0)}px)`)
    transforms.push(`translateZ(${sign * (props.z || 0)}px)`)

    if(reverse) {
        // Reverse the order in which the rotations are applied
        transforms.splice.apply(transforms, [0, 3].concat(transforms.slice(0, 3).reverse()))
    }

    return transforms.join(' ')
}
