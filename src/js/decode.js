// 电影天堂加密编码方式  gbk 
export function stringToGbk (str) {
  const ranges = [
    [0xA1, 0xA9, 0xA1, 0xFE],
    [0xB0, 0xF7, 0xA1, 0xFE],
    [0x81, 0xA0, 0x40, 0xFE],
    [0xAA, 0xFE, 0x40, 0xA0],
    [0xA8, 0xA9, 0x40, 0xA0],
    [0xAA, 0xAF, 0xA1, 0xFE],
    [0xF8, 0xFE, 0xA1, 0xFE],
    [0xA1, 0xA7, 0x40, 0xA0],
  ]
  const codes = new Uint16Array(23940)
  let i = 0

  for (const [b1Begin, b1End, b2Begin, b2End] of ranges) {
    for (let b2 = b2Begin; b2 <= b2End; b2++) {
      if (b2 !== 0x7F) {
        for (let b1 = b1Begin; b1 <= b1End; b1++) {
          codes[i++] = b2 << 8 | b1
        }
      }
    }
  }
  const strcode = new TextDecoder('gbk').decode(codes)

  // 编码表
  const table = new Uint16Array(65536)
  for (let i = 0; i < strcode.length; i++) {
    table[strcode.charCodeAt(i)] = codes[i]
  }

  str = str.replace(/\d+/g, "")
  const buf = new Uint8Array(str.length * 2)
  let n = 0

  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i)
    if (code < 0x80) {
      buf[n++] = code
    } else {
      const gbk = table[code]
      buf[n++] = gbk & 0xFF
      buf[n++] = gbk >> 8
    }
  }
  // console.log(buf.subarray(0, n));
  let newArr = []
  buf.subarray(0, n).forEach((hex, i) => newArr[i] = hex.toString(16))
  // console.log(newArr.map(str => '%' + str).join(''))
  // return buf.subarray(0, n)
  return newArr.map(str => '%' + str).join('')
}


// 解码 
export function GbkToString (encodedString) {
  // const encodedString = '%CE%D2%B5%C4%B3%A4%D5%F7';
  const byteSequence = encodedString.split('%').slice(1).map(hex => parseInt(hex, 16));
  const decodedString = new TextDecoder('gbk').decode(new Uint8Array(byteSequence));
  // console.log(decodedString);
  return decodedString
}
