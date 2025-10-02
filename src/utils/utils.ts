
export const randomBackgroundColor = (): string => {
    const x = Math.floor(Math.random() * (256 - 150) + 150)
    const y = Math.floor(Math.random() * (256 - 150) + 150)
    const z = Math.floor(Math.random() * (256 - 150) + 150)
    const bgColor = 'rgb(' + x + ',' + y + ',' + z + ')'
    return bgColor
}