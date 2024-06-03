function RGBtoHex(red, green, blue) {
    const toHex = (value) => {
        if (value === null || value === undefined) {
            throw new Error('Invalid value');
        }
        const hex = value.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };
    const redHex = toHex(red);
    const greenHex = toHex(green);
    const blueHex = toHex(blue);
    return `#${redHex}${greenHex}${blueHex}`;
}


document.getElementById('btn').addEventListener('click', () => {
    const red = document.getElementById('red').value;
    const green = document.getElementById('green').value;
    const blue = document.getElementById('blue').value;
    try {
        document.getElementById('result').innerHTML = RGBtoHex(red, green, blue);
    } catch (error) {
        document.getElementById('result').innerHTML = 'Invalid input';
    }
})
