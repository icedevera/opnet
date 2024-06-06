import { BinaryReader, NetEvent } from '@btc-vision/bsi-binary';
import { DecodedCallResult } from '../common/CommonTypes.js';
import { ContractDecodedObjectResult, DecodedOutput } from './Contract.js';
import { IAccessList } from './interfaces/IAccessList.js';
import { ICallResultData } from './interfaces/ICallResult.js';
export declare class CallResult<T extends ContractDecodedObjectResult = {}> implements ICallResultData {
    readonly result: BinaryReader;
    readonly events: NetEvent[];
    readonly accessList: IAccessList;
    readonly decoded: Array<DecodedCallResult>;
    properties: T;
    constructor(iCallResult: ICallResultData);
    setDecoded(decoded: DecodedOutput): void;
    private base64ToUint8Array;
}
