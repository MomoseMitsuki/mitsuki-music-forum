import { createFetchRequestor } from "../request-imp/request-fetch-imp";
import { inject,useRequestor,createRetryRequestor,createCacheRequestor,createSerialRequestor,createParallelRequestor,createIdempotentRequestor, } from "../request-core/index";

inject(createFetchRequestor({ baseURL:"http://localhost:3000/api" }))
inject(createCacheRequestor({
    key:(config) => config.url,
    duration:1000,
    persist:false,
}))
inject(createRetryRequestor({ max:3 }))

export const req = useRequestor()