import * as crypto from 'crypto';
import config from '@config';

export interface AppCryptoHash {
    iv: string;
    content: string;
};

const iv = crypto.randomBytes(16);

// Encrypt
const encrypt = (text: string): AppCryptoHash => {
    const cipher = crypto.createCipheriv(config.crypto.algorithm, config.crypto.secretKey, iv);
    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
    return {
        iv: iv.toString('hex'),
        content: encrypted.toString('hex')
    };
};

// Decrypt
const decrypt = (hash: AppCryptoHash): string => {
    const decipher = crypto.createDecipheriv(config.crypto.algorithm, config.crypto.secretKey, Buffer.from(hash.iv, 'hex'));
    const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()]);
    return decrpyted.toString();
};

export default Object.freeze({
    encrypt,
    decrypt
});