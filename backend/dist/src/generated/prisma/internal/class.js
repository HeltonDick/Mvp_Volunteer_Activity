"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrismaClientClass = getPrismaClientClass;
const runtime = __importStar(require("@prisma/client/runtime/client"));
const config = {
    "previewFeatures": [],
    "clientVersion": "7.10.0",
    "engineVersion": "0edf323efd1d98336f3f0a68684b56f689b900d3",
    "activeProvider": "mysql",
    "inlineSchema": "generator client {\n  provider = \"prisma-client\"\n  output   = \"../src/generated/prisma\"\n}\n\ndatasource db {\n  provider = \"mysql\"\n}\n\nmodel activity {\n  id          Int      @id @default(autoincrement())\n  name        String\n  description String\n  date        DateTime\n  location    String\n  createdAt   DateTime @default(now())\n  updatedAt   DateTime @updatedAt\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    },
    "parameterizationSchema": {
        "strings": [],
        "graph": ""
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"activity\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"date\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"location\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null,\"schema\":null}},\"enums\":{},\"types\":{}}");
config.parameterizationSchema = {
    strings: JSON.parse("[\"where\",\"activity.findUnique\",\"activity.findUniqueOrThrow\",\"orderBy\",\"cursor\",\"activity.findFirst\",\"activity.findFirstOrThrow\",\"activity.findMany\",\"data\",\"activity.createOne\",\"activity.createMany\",\"activity.updateOne\",\"activity.updateMany\",\"create\",\"update\",\"activity.upsertOne\",\"activity.deleteOne\",\"activity.deleteMany\",\"having\",\"_count\",\"_avg\",\"_sum\",\"_min\",\"_max\",\"activity.groupBy\",\"activity.aggregate\",\"AND\",\"OR\",\"NOT\",\"id\",\"name\",\"description\",\"date\",\"location\",\"createdAt\",\"updatedAt\",\"equals\",\"in\",\"notIn\",\"lt\",\"lte\",\"gt\",\"gte\",\"not\",\"contains\",\"startsWith\",\"endsWith\",\"search\",\"_relevance\",\"set\",\"increment\",\"decrement\",\"multiply\",\"divide\"]"),
    graph: "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"
};
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await import('node:buffer');
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.mysql.js"),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.mysql.wasm-base64.js");
        return await decodeBase64AsWasm(wasm);
    },
    importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map