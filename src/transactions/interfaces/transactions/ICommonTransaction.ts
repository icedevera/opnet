import { Address } from '@btc-vision/transaction';
import { OPNetTransactionTypes } from '../../../interfaces/opnet/OPNetTransactionTypes.js';
import { ITransactionBase } from '../ITransaction.js';

export interface ICommonTransaction<T extends OPNetTransactionTypes> extends ITransactionBase<T> {
    /**
     * @description The p2tr contract address. (SAFE)
     */
    readonly contractAddress?: string;

    /**
     * @description The contract tweaked public key.
     */
    readonly contractTweakedPublicKey?: Address | string;

    /**
     * @description This indicates who sent the transaction.
     */
    readonly from?: Address | string;

    /**
     * @description Was the binary data compressed?
     */
    readonly wasCompressed?: boolean;
}
