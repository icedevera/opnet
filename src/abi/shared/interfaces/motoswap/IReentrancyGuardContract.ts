import { CallResult, IOP_NETContract } from '../../../../opnet';

export type Status = CallResult<{ status: bigint }>;

/**
 * @description This interface represents the ReentrancyGuard contract.
 * @interface IReentrancyGuardContract
 * @extends {IOP_NETContract}
 * @category Contracts
 *
 */
export interface IReentrancyGuard extends IOP_NETContract {
    /**
     * @description Gets the current admin address.
     * @returns {Status}
     */
    status(): Promise<Status>;
}
