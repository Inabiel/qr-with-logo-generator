const QRLogo = require('qr-with-logo');
const sharp = require('sharp');
var argv = require('minimist')(process.argv.slice(2));

delete argv["_"]

const data = JSON.stringify(argv);

let test = () => sharp('logo.png').resize(60, 60).toFile('resized.png');

test();

(async function main() {
    await QRLogo.generateQRWithLogo(data, 'resized.png', {width: 480, scale: 40}, "PNG", "generated/qrlogo2.png")
})()