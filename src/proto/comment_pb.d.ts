// package: 
// file: comment.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class comment extends jspb.Message { 
    getId(): string;
    setId(value: string): comment;
    getUsername(): string;
    setUsername(value: string): comment;
    getComment(): string;
    setComment(value: string): comment;
    getUserid(): string;
    setUserid(value: string): comment;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): comment;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): comment;

    hasDeletedAt(): boolean;
    clearDeletedAt(): void;
    getDeletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDeletedAt(value?: google_protobuf_timestamp_pb.Timestamp): comment;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): comment.AsObject;
    static toObject(includeInstance: boolean, msg: comment): comment.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: comment, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): comment;
    static deserializeBinaryFromReader(message: comment, reader: jspb.BinaryReader): comment;
}

export namespace comment {
    export type AsObject = {
        id: string,
        username: string,
        comment: string,
        userid: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        deletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class commonRespone extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): commonRespone;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): commonRespone.AsObject;
    static toObject(includeInstance: boolean, msg: commonRespone): commonRespone.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: commonRespone, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): commonRespone;
    static deserializeBinaryFromReader(message: commonRespone, reader: jspb.BinaryReader): commonRespone;
}

export namespace commonRespone {
    export type AsObject = {
        message: string,
    }
}

export class createCommentRequest extends jspb.Message { 
    getUsername(): string;
    setUsername(value: string): createCommentRequest;
    getComment(): string;
    setComment(value: string): createCommentRequest;
    getUserid(): string;
    setUserid(value: string): createCommentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): createCommentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: createCommentRequest): createCommentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: createCommentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): createCommentRequest;
    static deserializeBinaryFromReader(message: createCommentRequest, reader: jspb.BinaryReader): createCommentRequest;
}

export namespace createCommentRequest {
    export type AsObject = {
        username: string,
        comment: string,
        userid: string,
    }
}

export class updateCommentRequest extends jspb.Message { 
    getUsername(): string;
    setUsername(value: string): updateCommentRequest;
    getComment(): string;
    setComment(value: string): updateCommentRequest;
    getUserid(): string;
    setUserid(value: string): updateCommentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): updateCommentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: updateCommentRequest): updateCommentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: updateCommentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): updateCommentRequest;
    static deserializeBinaryFromReader(message: updateCommentRequest, reader: jspb.BinaryReader): updateCommentRequest;
}

export namespace updateCommentRequest {
    export type AsObject = {
        username: string,
        comment: string,
        userid: string,
    }
}

export class getCommentByIdRequest extends jspb.Message { 
    getUserid(): string;
    setUserid(value: string): getCommentByIdRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): getCommentByIdRequest.AsObject;
    static toObject(includeInstance: boolean, msg: getCommentByIdRequest): getCommentByIdRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: getCommentByIdRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): getCommentByIdRequest;
    static deserializeBinaryFromReader(message: getCommentByIdRequest, reader: jspb.BinaryReader): getCommentByIdRequest;
}

export namespace getCommentByIdRequest {
    export type AsObject = {
        userid: string,
    }
}

export class getCommentByIdResponse extends jspb.Message { 

    hasComment(): boolean;
    clearComment(): void;
    getComment(): comment | undefined;
    setComment(value?: comment): getCommentByIdResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): getCommentByIdResponse.AsObject;
    static toObject(includeInstance: boolean, msg: getCommentByIdResponse): getCommentByIdResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: getCommentByIdResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): getCommentByIdResponse;
    static deserializeBinaryFromReader(message: getCommentByIdResponse, reader: jspb.BinaryReader): getCommentByIdResponse;
}

export namespace getCommentByIdResponse {
    export type AsObject = {
        comment?: comment.AsObject,
    }
}

export class deleteRequest extends jspb.Message { 
    getUserid(): string;
    setUserid(value: string): deleteRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): deleteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: deleteRequest): deleteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: deleteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): deleteRequest;
    static deserializeBinaryFromReader(message: deleteRequest, reader: jspb.BinaryReader): deleteRequest;
}

export namespace deleteRequest {
    export type AsObject = {
        userid: string,
    }
}
