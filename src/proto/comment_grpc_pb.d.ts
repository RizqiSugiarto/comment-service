// package: 
// file: comment.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as comment_pb from "./comment_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IcommentServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createComment: IcommentServiceService_ICreateComment;
    updateComment: IcommentServiceService_IUpdateComment;
    getCommentById: IcommentServiceService_IGetCommentById;
    deleteComment: IcommentServiceService_IDeleteComment;
}

interface IcommentServiceService_ICreateComment extends grpc.MethodDefinition<comment_pb.createCommentRequest, comment_pb.commonRespone> {
    path: "/commentService/CreateComment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<comment_pb.createCommentRequest>;
    requestDeserialize: grpc.deserialize<comment_pb.createCommentRequest>;
    responseSerialize: grpc.serialize<comment_pb.commonRespone>;
    responseDeserialize: grpc.deserialize<comment_pb.commonRespone>;
}
interface IcommentServiceService_IUpdateComment extends grpc.MethodDefinition<comment_pb.updateCommentRequest, comment_pb.commonRespone> {
    path: "/commentService/UpdateComment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<comment_pb.updateCommentRequest>;
    requestDeserialize: grpc.deserialize<comment_pb.updateCommentRequest>;
    responseSerialize: grpc.serialize<comment_pb.commonRespone>;
    responseDeserialize: grpc.deserialize<comment_pb.commonRespone>;
}
interface IcommentServiceService_IGetCommentById extends grpc.MethodDefinition<comment_pb.getCommentByIdRequest, comment_pb.getCommentByIdResponse> {
    path: "/commentService/GetCommentById";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<comment_pb.getCommentByIdRequest>;
    requestDeserialize: grpc.deserialize<comment_pb.getCommentByIdRequest>;
    responseSerialize: grpc.serialize<comment_pb.getCommentByIdResponse>;
    responseDeserialize: grpc.deserialize<comment_pb.getCommentByIdResponse>;
}
interface IcommentServiceService_IDeleteComment extends grpc.MethodDefinition<comment_pb.deleteRequest, comment_pb.commonRespone> {
    path: "/commentService/DeleteComment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<comment_pb.deleteRequest>;
    requestDeserialize: grpc.deserialize<comment_pb.deleteRequest>;
    responseSerialize: grpc.serialize<comment_pb.commonRespone>;
    responseDeserialize: grpc.deserialize<comment_pb.commonRespone>;
}

export const commentServiceService: IcommentServiceService;

export interface IcommentServiceServer {
    createComment: grpc.handleUnaryCall<comment_pb.createCommentRequest, comment_pb.commonRespone>;
    updateComment: grpc.handleUnaryCall<comment_pb.updateCommentRequest, comment_pb.commonRespone>;
    getCommentById: grpc.handleUnaryCall<comment_pb.getCommentByIdRequest, comment_pb.getCommentByIdResponse>;
    deleteComment: grpc.handleUnaryCall<comment_pb.deleteRequest, comment_pb.commonRespone>;
}

export interface IcommentServiceClient {
    createComment(request: comment_pb.createCommentRequest, callback: (error: grpc.ServiceError | null, response: comment_pb.commonRespone) => void): grpc.ClientUnaryCall;
    createComment(request: comment_pb.createCommentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: comment_pb.commonRespone) => void): grpc.ClientUnaryCall;
    createComment(request: comment_pb.createCommentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: comment_pb.commonRespone) => void): grpc.ClientUnaryCall;
    updateComment(request: comment_pb.updateCommentRequest, callback: (error: grpc.ServiceError | null, response: comment_pb.commonRespone) => void): grpc.ClientUnaryCall;
    updateComment(request: comment_pb.updateCommentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: comment_pb.commonRespone) => void): grpc.ClientUnaryCall;
    updateComment(request: comment_pb.updateCommentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: comment_pb.commonRespone) => void): grpc.ClientUnaryCall;
    getCommentById(request: comment_pb.getCommentByIdRequest, callback: (error: grpc.ServiceError | null, response: comment_pb.getCommentByIdResponse) => void): grpc.ClientUnaryCall;
    getCommentById(request: comment_pb.getCommentByIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: comment_pb.getCommentByIdResponse) => void): grpc.ClientUnaryCall;
    getCommentById(request: comment_pb.getCommentByIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: comment_pb.getCommentByIdResponse) => void): grpc.ClientUnaryCall;
    deleteComment(request: comment_pb.deleteRequest, callback: (error: grpc.ServiceError | null, response: comment_pb.commonRespone) => void): grpc.ClientUnaryCall;
    deleteComment(request: comment_pb.deleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: comment_pb.commonRespone) => void): grpc.ClientUnaryCall;
    deleteComment(request: comment_pb.deleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: comment_pb.commonRespone) => void): grpc.ClientUnaryCall;
}

export class commentServiceClient extends grpc.Client implements IcommentServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createComment(request: comment_pb.createCommentRequest, callback: (error: grpc.ServiceError | null, response: comment_pb.commonRespone) => void): grpc.ClientUnaryCall;
    public createComment(request: comment_pb.createCommentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: comment_pb.commonRespone) => void): grpc.ClientUnaryCall;
    public createComment(request: comment_pb.createCommentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: comment_pb.commonRespone) => void): grpc.ClientUnaryCall;
    public updateComment(request: comment_pb.updateCommentRequest, callback: (error: grpc.ServiceError | null, response: comment_pb.commonRespone) => void): grpc.ClientUnaryCall;
    public updateComment(request: comment_pb.updateCommentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: comment_pb.commonRespone) => void): grpc.ClientUnaryCall;
    public updateComment(request: comment_pb.updateCommentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: comment_pb.commonRespone) => void): grpc.ClientUnaryCall;
    public getCommentById(request: comment_pb.getCommentByIdRequest, callback: (error: grpc.ServiceError | null, response: comment_pb.getCommentByIdResponse) => void): grpc.ClientUnaryCall;
    public getCommentById(request: comment_pb.getCommentByIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: comment_pb.getCommentByIdResponse) => void): grpc.ClientUnaryCall;
    public getCommentById(request: comment_pb.getCommentByIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: comment_pb.getCommentByIdResponse) => void): grpc.ClientUnaryCall;
    public deleteComment(request: comment_pb.deleteRequest, callback: (error: grpc.ServiceError | null, response: comment_pb.commonRespone) => void): grpc.ClientUnaryCall;
    public deleteComment(request: comment_pb.deleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: comment_pb.commonRespone) => void): grpc.ClientUnaryCall;
    public deleteComment(request: comment_pb.deleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: comment_pb.commonRespone) => void): grpc.ClientUnaryCall;
}
