import { createHash } from 'crypto';
import { HashAlgorithm } from '../constants/hash_algorithms';

export const hashString = (algorithm: HashAlgorithm, stringToHash: string) : string => {
    const hashAlgorithm =  createHash(algorithm)
    return hashAlgorithm.update(stringToHash).digest('hex')
}