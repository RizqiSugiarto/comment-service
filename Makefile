PROTO_DIR=./src/proto


gen:
	yarn grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=${PROTO_DIR} \
    -I ./proto \
    proto/*.proto
	

.PHONY: gen