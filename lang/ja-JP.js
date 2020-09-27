export default {
    title: 'qrcode.js',
    subTitle: 'QR コード生成',
    examples: `qrcode.js のサンプルです。
符号化方式は以下をサポートしています。
* 数字
* 英数字
* 8 ビットバイト
    * Shift-JIS
    * UTF-8`,
    mode: {
        text: "テキスト",
        contact: "電話帳",
        bookmark: "ブックマーク",
    },
    contact: {
        name: "名前",
        kana: "フリガナ",
        tel: "Tel",
        email: "E-Mail",
        carrier: "キャリア",
    },
    bookmark: {
        title: "タイトル",
        url: "URL",
    },
    auto: "自動",
    noteFunctionsForLegacy: "フィーチャーフォン向けです。",
    options: {
        type: "型番",
        autoExpandsType: "データの大きさに応じて自動的に拡大します。",
        eccLevel: "誤り訂正 Lv",
        levelLow: "低",
        levelHigh: "高",
        division: "分割",
        divisionOne: "なし",
        noteDivisions: "データ量に応じて、指定した分割数より少なくなる場合があります。連接QR読み取りに対応しているアプリでないと読み取れません。",
        thickness: "太さ",
        foreground: "前景色（暗）",
        background: "背景色（明）",
        reverse: "明暗反転",
        encoding: "文字コード",
        mask: "マスク関数",
        output: "出力",
        options: "オプション",
        flipHorizontal: "表裏（左右）反転",
        useEciHeader: "ECI ヘッダを使用",
        someDeviceNotSupportEci: "（一部端末では読み取れません）",
        transparent: "背景を透明に",
        debug: "デバッグ",
    },
    download: 'ダウンロード',
    trademark: 'QR コード / QR Code はデンソーウェーブの登録商標です。',
}
