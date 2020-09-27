export default {
    title: 'qrcode.js',
    subTitle: 'A QR Code Generator.',
    examples: `Examples of qrcode.js.
It supports the following encodings.
* Number
* Alphabet (English)
* 8 bit byte
    * UTF-8
    * Shift-JIS`,
    mode: {
        text: "Text",
        contact: "Contact",
        bookmark: "Bookmark",
    },
    contact: {
        name: "Name",
        kana: "Sounds of name",
        tel: "Tel",
        email: "E-Mail",
        carrier: "Carrier",
    },
    bookmark: {
        title: "Title",
        url: "URL",
    },
    auto: "Auto",
    noteFunctionsForLegacy: "For legacy mobile phone in Japan.",
    options: {
        type: "Type",
        autoExpandsType: "It automatically expands according to size of the data.",
        eccLevel: "ECC Level",
        levelLow: "Low",
        levelHigh: "High",
        division: "Divide into",
        divisionOne: "1",
        noteDivisions: "Depending on the amount of data, it may be less than the specified number of divisions. It can only be read by apps that supports reading Articulated QR.",
        thickness: "Thickness",
        foreground: "Foreground",
        background: "Background",
        reverse: "Reverse",
        encoding: "Encoding",
        mask: "Mask func.",
        output: "Output",
        options: "Options",
        flipHorizontal: "Flip horizontal",
        useEciHeader: "Use ECI header",
        someDeviceNotSupportEci: "(Some devices are not supported.)",
        transparent: "Transparent background",
        debug: "Debug",
    },
    download: 'Download',
    trademark: 'QR コード / QR Code are trademarks of DENSO WAVE.',
}
  