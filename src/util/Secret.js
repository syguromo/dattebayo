import { AES, enc } from 'crypto-js';

export const decrypt = (message, key) => {
    const dec = AES.decrypt(message, key)
    let result = dec.toString(enc.Utf8)

    if (result.length === 0) {
        return 0
    } else
        return result
}

export const encrypt = (message, key) => {
    

    return AES.encrypt(message, key).toString()
}