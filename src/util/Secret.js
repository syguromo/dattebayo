import { AES, enc } from 'crypto-js';

export const decrypt = (message, key) => {
    try {
        const dec = AES.decrypt(message, key)
        let result = dec.toString(enc.Utf8)

        if (result.length === 0) {
            return false
        } else
            return result
    } catch (error) {
        return false
    }
}

export const encrypt = (message, key) => {
    return AES.encrypt(message, key).toString()
}