import { Provider, TransactionRequest, TransactionResponse } from "@ethersproject/abstract-provider";
import { Signer } from "@ethersproject/abstract-signer";
import { Bytes } from "@ethersproject/bytes";
import { Networkish } from "@ethersproject/networks";
import { ConnectionInfo } from "@ethersproject/web";
import { BaseProvider, Event } from "./base-provider";
export declare class JsonRpcSigner extends Signer {
    readonly provider: JsonRpcProvider;
    _index: number;
    _address: string;
    constructor(constructorGuard: any, provider: JsonRpcProvider, addressOrIndex?: string | number);
    connect(provider: Provider): JsonRpcSigner;
    connectUnchecked(): JsonRpcSigner;
    getAddress(): Promise<string>;
    sendUncheckedTransaction(transaction: TransactionRequest): Promise<string>;
    signTransaction(transaction: TransactionRequest): Promise<string>;
    sendTransaction(transaction: TransactionRequest): Promise<TransactionResponse>;
    signMessage(message: Bytes | string): Promise<string>;
    unlock(password: string): Promise<boolean>;
}
declare class UncheckedJsonRpcSigner extends JsonRpcSigner {
    sendTransaction(transaction: TransactionRequest): Promise<TransactionResponse>;
}
export declare class JsonRpcProvider extends BaseProvider {
    readonly connection: ConnectionInfo;
    _pendingFilter: Promise<number>;
    _nextId: number;
    constructor(url?: ConnectionInfo | string, network?: Networkish);
    static defaultUrl(): string;
    getSigner(addressOrIndex?: string | number): JsonRpcSigner;
    getUncheckedSigner(addressOrIndex?: string | number): UncheckedJsonRpcSigner;
    listAccounts(): Promise<Array<string>>;
    send(method: string, params: Array<any>): Promise<any>;
    prepareRequest(method: string, params: any): [string, Array<any>];
    perform(method: string, params: any): Promise<any>;
    _startEvent(event: Event): void;
    _startPending(): void;
    _stopEvent(event: Event): void;
    static hexlifyTransaction(transaction: TransactionRequest, allowExtra?: {
        [key: string]: boolean;
    }): {
        [key: string]: string;
    };
}
export {};