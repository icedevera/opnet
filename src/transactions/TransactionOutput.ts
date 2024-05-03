import { ScriptPubKey } from '@btc-vision/bsi-bitcoin-rpc';
import { script } from 'bitcoinjs-lib';

export interface ITransactionOutput {
    readonly index: number;
    readonly scriptPubKey: {
        hex: string;
        addresses?: string[];
        address?: string;
    };

    readonly value: string;
}

export class TransactionOutput {
    public readonly value: bigint;
    public readonly index: number;

    public readonly scriptPubKey: ScriptPubKey;
    public readonly script: Array<number | Buffer> | null;

    constructor(data: ITransactionOutput) {
        this.value = this.convertValue(data.value);
        this.index = data.index;

        this.scriptPubKey = data.scriptPubKey;
        this.script = script.decompile(Buffer.from(this.scriptPubKey.hex, 'hex'));
    }

    private convertValue(value: string): bigint {
        return BigInt(value);
    }
}
