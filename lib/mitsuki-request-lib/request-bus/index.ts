import { createFetchRequestor } from "../request-imp/request-fetch-imp";
// import { createAxiosRequestor } from "../request-imp/request-axios-imp";
// import { createXHRRequestor } from "../request-imp/request-xhr-imp";
import { inject,useRequestor,createRetryRequestor,createCacheRequestor,createSerialRequestor,createParallelRequestor,createIdempotentRequestor, } from "../request-core/index";


// inject(createAxiosRequestor({ baseURL:"http://localhost:3000" }))
inject(createFetchRequestor({ baseURL:"http://localhost:3000" }))
// inject(createFetchRequestor({ baseURL:"http://localhost:3000" }))
inject(createRetryRequestor({ max:3 }))

export const req = useRequestor()