
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Music
 * 
 */
export type Music = $Result.DefaultSelection<Prisma.$MusicPayload>
/**
 * Model MusicList
 * 
 */
export type MusicList = $Result.DefaultSelection<Prisma.$MusicListPayload>
/**
 * Model Video
 * 
 */
export type Video = $Result.DefaultSelection<Prisma.$VideoPayload>
/**
 * Model Lyric
 * 
 */
export type Lyric = $Result.DefaultSelection<Prisma.$LyricPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.music`: Exposes CRUD operations for the **Music** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Music
    * const music = await prisma.music.findMany()
    * ```
    */
  get music(): Prisma.MusicDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.musicList`: Exposes CRUD operations for the **MusicList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MusicLists
    * const musicLists = await prisma.musicList.findMany()
    * ```
    */
  get musicList(): Prisma.MusicListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.video`: Exposes CRUD operations for the **Video** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Videos
    * const videos = await prisma.video.findMany()
    * ```
    */
  get video(): Prisma.VideoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lyric`: Exposes CRUD operations for the **Lyric** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lyrics
    * const lyrics = await prisma.lyric.findMany()
    * ```
    */
  get lyric(): Prisma.LyricDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.17.0
   * Query Engine version: c0aafc03b8ef6cdced8654b9a817999e02457d6a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Music: 'Music',
    MusicList: 'MusicList',
    Video: 'Video',
    Lyric: 'Lyric'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "music" | "musicList" | "video" | "lyric"
      txIsolationLevel: never
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Music: {
        payload: Prisma.$MusicPayload<ExtArgs>
        fields: Prisma.MusicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MusicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MusicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicPayload>
          }
          findFirst: {
            args: Prisma.MusicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MusicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicPayload>
          }
          findMany: {
            args: Prisma.MusicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicPayload>[]
          }
          create: {
            args: Prisma.MusicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicPayload>
          }
          createMany: {
            args: Prisma.MusicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MusicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicPayload>
          }
          update: {
            args: Prisma.MusicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicPayload>
          }
          deleteMany: {
            args: Prisma.MusicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MusicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MusicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicPayload>
          }
          aggregate: {
            args: Prisma.MusicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMusic>
          }
          groupBy: {
            args: Prisma.MusicGroupByArgs<ExtArgs>
            result: $Utils.Optional<MusicGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MusicFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.MusicAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.MusicCountArgs<ExtArgs>
            result: $Utils.Optional<MusicCountAggregateOutputType> | number
          }
        }
      }
      MusicList: {
        payload: Prisma.$MusicListPayload<ExtArgs>
        fields: Prisma.MusicListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MusicListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MusicListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicListPayload>
          }
          findFirst: {
            args: Prisma.MusicListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MusicListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicListPayload>
          }
          findMany: {
            args: Prisma.MusicListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicListPayload>[]
          }
          create: {
            args: Prisma.MusicListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicListPayload>
          }
          createMany: {
            args: Prisma.MusicListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MusicListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicListPayload>
          }
          update: {
            args: Prisma.MusicListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicListPayload>
          }
          deleteMany: {
            args: Prisma.MusicListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MusicListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MusicListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicListPayload>
          }
          aggregate: {
            args: Prisma.MusicListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMusicList>
          }
          groupBy: {
            args: Prisma.MusicListGroupByArgs<ExtArgs>
            result: $Utils.Optional<MusicListGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MusicListFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.MusicListAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.MusicListCountArgs<ExtArgs>
            result: $Utils.Optional<MusicListCountAggregateOutputType> | number
          }
        }
      }
      Video: {
        payload: Prisma.$VideoPayload<ExtArgs>
        fields: Prisma.VideoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findFirst: {
            args: Prisma.VideoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findMany: {
            args: Prisma.VideoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          create: {
            args: Prisma.VideoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          createMany: {
            args: Prisma.VideoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VideoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          update: {
            args: Prisma.VideoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          deleteMany: {
            args: Prisma.VideoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VideoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          aggregate: {
            args: Prisma.VideoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideo>
          }
          groupBy: {
            args: Prisma.VideoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.VideoFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.VideoAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.VideoCountArgs<ExtArgs>
            result: $Utils.Optional<VideoCountAggregateOutputType> | number
          }
        }
      }
      Lyric: {
        payload: Prisma.$LyricPayload<ExtArgs>
        fields: Prisma.LyricFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LyricFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LyricPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LyricFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LyricPayload>
          }
          findFirst: {
            args: Prisma.LyricFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LyricPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LyricFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LyricPayload>
          }
          findMany: {
            args: Prisma.LyricFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LyricPayload>[]
          }
          create: {
            args: Prisma.LyricCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LyricPayload>
          }
          createMany: {
            args: Prisma.LyricCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LyricDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LyricPayload>
          }
          update: {
            args: Prisma.LyricUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LyricPayload>
          }
          deleteMany: {
            args: Prisma.LyricDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LyricUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LyricUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LyricPayload>
          }
          aggregate: {
            args: Prisma.LyricAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLyric>
          }
          groupBy: {
            args: Prisma.LyricGroupByArgs<ExtArgs>
            result: $Utils.Optional<LyricGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.LyricFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.LyricAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.LyricCountArgs<ExtArgs>
            result: $Utils.Optional<LyricCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    music?: MusicOmit
    musicList?: MusicListOmit
    video?: VideoOmit
    lyric?: LyricOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Lists: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Lists?: boolean | UserCountOutputTypeCountListsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MusicListWhereInput
  }


  /**
   * Count Type MusicCountOutputType
   */

  export type MusicCountOutputType = {
    Lists: number
  }

  export type MusicCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Lists?: boolean | MusicCountOutputTypeCountListsArgs
  }

  // Custom InputTypes
  /**
   * MusicCountOutputType without action
   */
  export type MusicCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicCountOutputType
     */
    select?: MusicCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MusicCountOutputType without action
   */
  export type MusicCountOutputTypeCountListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MusicListWhereInput
  }


  /**
   * Count Type MusicListCountOutputType
   */

  export type MusicListCountOutputType = {
    Musics: number
    Users: number
  }

  export type MusicListCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Musics?: boolean | MusicListCountOutputTypeCountMusicsArgs
    Users?: boolean | MusicListCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * MusicListCountOutputType without action
   */
  export type MusicListCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicListCountOutputType
     */
    select?: MusicListCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MusicListCountOutputType without action
   */
  export type MusicListCountOutputTypeCountMusicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MusicWhereInput
  }

  /**
   * MusicListCountOutputType without action
   */
  export type MusicListCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    avater: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    avater: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    avater: number
    password: number
    ListIds: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    avater?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    avater?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    avater?: true
    password?: true
    ListIds?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    avater: string
    password: string
    ListIds: string[]
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    avater?: boolean
    password?: boolean
    ListIds?: boolean
    Lists?: boolean | User$ListsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    avater?: boolean
    password?: boolean
    ListIds?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "avater" | "password" | "ListIds", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Lists?: boolean | User$ListsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Lists: Prisma.$MusicListPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      avater: string
      password: string
      ListIds: string[]
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Lists<T extends User$ListsArgs<ExtArgs> = {}>(args?: Subset<T, User$ListsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MusicListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly avater: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly ListIds: FieldRef<"User", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.Lists
   */
  export type User$ListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicList
     */
    select?: MusicListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicList
     */
    omit?: MusicListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicListInclude<ExtArgs> | null
    where?: MusicListWhereInput
    orderBy?: MusicListOrderByWithRelationInput | MusicListOrderByWithRelationInput[]
    cursor?: MusicListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MusicListScalarFieldEnum | MusicListScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Music
   */

  export type AggregateMusic = {
    _count: MusicCountAggregateOutputType | null
    _avg: MusicAvgAggregateOutputType | null
    _sum: MusicSumAggregateOutputType | null
    _min: MusicMinAggregateOutputType | null
    _max: MusicMaxAggregateOutputType | null
  }

  export type MusicAvgAggregateOutputType = {
    duration: number | null
  }

  export type MusicSumAggregateOutputType = {
    duration: number | null
  }

  export type MusicMinAggregateOutputType = {
    id: string | null
    name: string | null
    path: string | null
    duration: number | null
    avater: string | null
  }

  export type MusicMaxAggregateOutputType = {
    id: string | null
    name: string | null
    path: string | null
    duration: number | null
    avater: string | null
  }

  export type MusicCountAggregateOutputType = {
    id: number
    name: number
    singer: number
    path: number
    duration: number
    avater: number
    ListIds: number
    _all: number
  }


  export type MusicAvgAggregateInputType = {
    duration?: true
  }

  export type MusicSumAggregateInputType = {
    duration?: true
  }

  export type MusicMinAggregateInputType = {
    id?: true
    name?: true
    path?: true
    duration?: true
    avater?: true
  }

  export type MusicMaxAggregateInputType = {
    id?: true
    name?: true
    path?: true
    duration?: true
    avater?: true
  }

  export type MusicCountAggregateInputType = {
    id?: true
    name?: true
    singer?: true
    path?: true
    duration?: true
    avater?: true
    ListIds?: true
    _all?: true
  }

  export type MusicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Music to aggregate.
     */
    where?: MusicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Music to fetch.
     */
    orderBy?: MusicOrderByWithRelationInput | MusicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MusicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Music from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Music.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Music
    **/
    _count?: true | MusicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MusicAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MusicSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MusicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MusicMaxAggregateInputType
  }

  export type GetMusicAggregateType<T extends MusicAggregateArgs> = {
        [P in keyof T & keyof AggregateMusic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMusic[P]>
      : GetScalarType<T[P], AggregateMusic[P]>
  }




  export type MusicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MusicWhereInput
    orderBy?: MusicOrderByWithAggregationInput | MusicOrderByWithAggregationInput[]
    by: MusicScalarFieldEnum[] | MusicScalarFieldEnum
    having?: MusicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MusicCountAggregateInputType | true
    _avg?: MusicAvgAggregateInputType
    _sum?: MusicSumAggregateInputType
    _min?: MusicMinAggregateInputType
    _max?: MusicMaxAggregateInputType
  }

  export type MusicGroupByOutputType = {
    id: string
    name: string
    singer: string[]
    path: string
    duration: number
    avater: string
    ListIds: string[]
    _count: MusicCountAggregateOutputType | null
    _avg: MusicAvgAggregateOutputType | null
    _sum: MusicSumAggregateOutputType | null
    _min: MusicMinAggregateOutputType | null
    _max: MusicMaxAggregateOutputType | null
  }

  type GetMusicGroupByPayload<T extends MusicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MusicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MusicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MusicGroupByOutputType[P]>
            : GetScalarType<T[P], MusicGroupByOutputType[P]>
        }
      >
    >


  export type MusicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    singer?: boolean
    path?: boolean
    duration?: boolean
    avater?: boolean
    ListIds?: boolean
    video?: boolean | Music$videoArgs<ExtArgs>
    lyric?: boolean | Music$lyricArgs<ExtArgs>
    Lists?: boolean | Music$ListsArgs<ExtArgs>
    _count?: boolean | MusicCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["music"]>



  export type MusicSelectScalar = {
    id?: boolean
    name?: boolean
    singer?: boolean
    path?: boolean
    duration?: boolean
    avater?: boolean
    ListIds?: boolean
  }

  export type MusicOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "singer" | "path" | "duration" | "avater" | "ListIds", ExtArgs["result"]["music"]>
  export type MusicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | Music$videoArgs<ExtArgs>
    lyric?: boolean | Music$lyricArgs<ExtArgs>
    Lists?: boolean | Music$ListsArgs<ExtArgs>
    _count?: boolean | MusicCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MusicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Music"
    objects: {
      video: Prisma.$VideoPayload<ExtArgs> | null
      lyric: Prisma.$LyricPayload<ExtArgs> | null
      Lists: Prisma.$MusicListPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      singer: string[]
      path: string
      duration: number
      avater: string
      ListIds: string[]
    }, ExtArgs["result"]["music"]>
    composites: {}
  }

  type MusicGetPayload<S extends boolean | null | undefined | MusicDefaultArgs> = $Result.GetResult<Prisma.$MusicPayload, S>

  type MusicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MusicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MusicCountAggregateInputType | true
    }

  export interface MusicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Music'], meta: { name: 'Music' } }
    /**
     * Find zero or one Music that matches the filter.
     * @param {MusicFindUniqueArgs} args - Arguments to find a Music
     * @example
     * // Get one Music
     * const music = await prisma.music.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MusicFindUniqueArgs>(args: SelectSubset<T, MusicFindUniqueArgs<ExtArgs>>): Prisma__MusicClient<$Result.GetResult<Prisma.$MusicPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Music that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MusicFindUniqueOrThrowArgs} args - Arguments to find a Music
     * @example
     * // Get one Music
     * const music = await prisma.music.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MusicFindUniqueOrThrowArgs>(args: SelectSubset<T, MusicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MusicClient<$Result.GetResult<Prisma.$MusicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Music that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicFindFirstArgs} args - Arguments to find a Music
     * @example
     * // Get one Music
     * const music = await prisma.music.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MusicFindFirstArgs>(args?: SelectSubset<T, MusicFindFirstArgs<ExtArgs>>): Prisma__MusicClient<$Result.GetResult<Prisma.$MusicPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Music that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicFindFirstOrThrowArgs} args - Arguments to find a Music
     * @example
     * // Get one Music
     * const music = await prisma.music.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MusicFindFirstOrThrowArgs>(args?: SelectSubset<T, MusicFindFirstOrThrowArgs<ExtArgs>>): Prisma__MusicClient<$Result.GetResult<Prisma.$MusicPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Music that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Music
     * const music = await prisma.music.findMany()
     * 
     * // Get first 10 Music
     * const music = await prisma.music.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const musicWithIdOnly = await prisma.music.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MusicFindManyArgs>(args?: SelectSubset<T, MusicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MusicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Music.
     * @param {MusicCreateArgs} args - Arguments to create a Music.
     * @example
     * // Create one Music
     * const Music = await prisma.music.create({
     *   data: {
     *     // ... data to create a Music
     *   }
     * })
     * 
     */
    create<T extends MusicCreateArgs>(args: SelectSubset<T, MusicCreateArgs<ExtArgs>>): Prisma__MusicClient<$Result.GetResult<Prisma.$MusicPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Music.
     * @param {MusicCreateManyArgs} args - Arguments to create many Music.
     * @example
     * // Create many Music
     * const music = await prisma.music.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MusicCreateManyArgs>(args?: SelectSubset<T, MusicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Music.
     * @param {MusicDeleteArgs} args - Arguments to delete one Music.
     * @example
     * // Delete one Music
     * const Music = await prisma.music.delete({
     *   where: {
     *     // ... filter to delete one Music
     *   }
     * })
     * 
     */
    delete<T extends MusicDeleteArgs>(args: SelectSubset<T, MusicDeleteArgs<ExtArgs>>): Prisma__MusicClient<$Result.GetResult<Prisma.$MusicPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Music.
     * @param {MusicUpdateArgs} args - Arguments to update one Music.
     * @example
     * // Update one Music
     * const music = await prisma.music.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MusicUpdateArgs>(args: SelectSubset<T, MusicUpdateArgs<ExtArgs>>): Prisma__MusicClient<$Result.GetResult<Prisma.$MusicPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Music.
     * @param {MusicDeleteManyArgs} args - Arguments to filter Music to delete.
     * @example
     * // Delete a few Music
     * const { count } = await prisma.music.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MusicDeleteManyArgs>(args?: SelectSubset<T, MusicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Music.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Music
     * const music = await prisma.music.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MusicUpdateManyArgs>(args: SelectSubset<T, MusicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Music.
     * @param {MusicUpsertArgs} args - Arguments to update or create a Music.
     * @example
     * // Update or create a Music
     * const music = await prisma.music.upsert({
     *   create: {
     *     // ... data to create a Music
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Music we want to update
     *   }
     * })
     */
    upsert<T extends MusicUpsertArgs>(args: SelectSubset<T, MusicUpsertArgs<ExtArgs>>): Prisma__MusicClient<$Result.GetResult<Prisma.$MusicPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Music that matches the filter.
     * @param {MusicFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const music = await prisma.music.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: MusicFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Music.
     * @param {MusicAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const music = await prisma.music.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: MusicAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Music.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicCountArgs} args - Arguments to filter Music to count.
     * @example
     * // Count the number of Music
     * const count = await prisma.music.count({
     *   where: {
     *     // ... the filter for the Music we want to count
     *   }
     * })
    **/
    count<T extends MusicCountArgs>(
      args?: Subset<T, MusicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MusicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Music.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MusicAggregateArgs>(args: Subset<T, MusicAggregateArgs>): Prisma.PrismaPromise<GetMusicAggregateType<T>>

    /**
     * Group by Music.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MusicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MusicGroupByArgs['orderBy'] }
        : { orderBy?: MusicGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MusicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMusicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Music model
   */
  readonly fields: MusicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Music.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MusicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    video<T extends Music$videoArgs<ExtArgs> = {}>(args?: Subset<T, Music$videoArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    lyric<T extends Music$lyricArgs<ExtArgs> = {}>(args?: Subset<T, Music$lyricArgs<ExtArgs>>): Prisma__LyricClient<$Result.GetResult<Prisma.$LyricPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Lists<T extends Music$ListsArgs<ExtArgs> = {}>(args?: Subset<T, Music$ListsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MusicListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Music model
   */
  interface MusicFieldRefs {
    readonly id: FieldRef<"Music", 'String'>
    readonly name: FieldRef<"Music", 'String'>
    readonly singer: FieldRef<"Music", 'String[]'>
    readonly path: FieldRef<"Music", 'String'>
    readonly duration: FieldRef<"Music", 'Int'>
    readonly avater: FieldRef<"Music", 'String'>
    readonly ListIds: FieldRef<"Music", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * Music findUnique
   */
  export type MusicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Music
     */
    select?: MusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Music
     */
    omit?: MusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicInclude<ExtArgs> | null
    /**
     * Filter, which Music to fetch.
     */
    where: MusicWhereUniqueInput
  }

  /**
   * Music findUniqueOrThrow
   */
  export type MusicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Music
     */
    select?: MusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Music
     */
    omit?: MusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicInclude<ExtArgs> | null
    /**
     * Filter, which Music to fetch.
     */
    where: MusicWhereUniqueInput
  }

  /**
   * Music findFirst
   */
  export type MusicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Music
     */
    select?: MusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Music
     */
    omit?: MusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicInclude<ExtArgs> | null
    /**
     * Filter, which Music to fetch.
     */
    where?: MusicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Music to fetch.
     */
    orderBy?: MusicOrderByWithRelationInput | MusicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Music.
     */
    cursor?: MusicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Music from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Music.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Music.
     */
    distinct?: MusicScalarFieldEnum | MusicScalarFieldEnum[]
  }

  /**
   * Music findFirstOrThrow
   */
  export type MusicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Music
     */
    select?: MusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Music
     */
    omit?: MusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicInclude<ExtArgs> | null
    /**
     * Filter, which Music to fetch.
     */
    where?: MusicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Music to fetch.
     */
    orderBy?: MusicOrderByWithRelationInput | MusicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Music.
     */
    cursor?: MusicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Music from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Music.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Music.
     */
    distinct?: MusicScalarFieldEnum | MusicScalarFieldEnum[]
  }

  /**
   * Music findMany
   */
  export type MusicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Music
     */
    select?: MusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Music
     */
    omit?: MusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicInclude<ExtArgs> | null
    /**
     * Filter, which Music to fetch.
     */
    where?: MusicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Music to fetch.
     */
    orderBy?: MusicOrderByWithRelationInput | MusicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Music.
     */
    cursor?: MusicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Music from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Music.
     */
    skip?: number
    distinct?: MusicScalarFieldEnum | MusicScalarFieldEnum[]
  }

  /**
   * Music create
   */
  export type MusicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Music
     */
    select?: MusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Music
     */
    omit?: MusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicInclude<ExtArgs> | null
    /**
     * The data needed to create a Music.
     */
    data: XOR<MusicCreateInput, MusicUncheckedCreateInput>
  }

  /**
   * Music createMany
   */
  export type MusicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Music.
     */
    data: MusicCreateManyInput | MusicCreateManyInput[]
  }

  /**
   * Music update
   */
  export type MusicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Music
     */
    select?: MusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Music
     */
    omit?: MusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicInclude<ExtArgs> | null
    /**
     * The data needed to update a Music.
     */
    data: XOR<MusicUpdateInput, MusicUncheckedUpdateInput>
    /**
     * Choose, which Music to update.
     */
    where: MusicWhereUniqueInput
  }

  /**
   * Music updateMany
   */
  export type MusicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Music.
     */
    data: XOR<MusicUpdateManyMutationInput, MusicUncheckedUpdateManyInput>
    /**
     * Filter which Music to update
     */
    where?: MusicWhereInput
    /**
     * Limit how many Music to update.
     */
    limit?: number
  }

  /**
   * Music upsert
   */
  export type MusicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Music
     */
    select?: MusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Music
     */
    omit?: MusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicInclude<ExtArgs> | null
    /**
     * The filter to search for the Music to update in case it exists.
     */
    where: MusicWhereUniqueInput
    /**
     * In case the Music found by the `where` argument doesn't exist, create a new Music with this data.
     */
    create: XOR<MusicCreateInput, MusicUncheckedCreateInput>
    /**
     * In case the Music was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MusicUpdateInput, MusicUncheckedUpdateInput>
  }

  /**
   * Music delete
   */
  export type MusicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Music
     */
    select?: MusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Music
     */
    omit?: MusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicInclude<ExtArgs> | null
    /**
     * Filter which Music to delete.
     */
    where: MusicWhereUniqueInput
  }

  /**
   * Music deleteMany
   */
  export type MusicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Music to delete
     */
    where?: MusicWhereInput
    /**
     * Limit how many Music to delete.
     */
    limit?: number
  }

  /**
   * Music findRaw
   */
  export type MusicFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Music aggregateRaw
   */
  export type MusicAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Music.video
   */
  export type Music$videoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    where?: VideoWhereInput
  }

  /**
   * Music.lyric
   */
  export type Music$lyricArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lyric
     */
    select?: LyricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lyric
     */
    omit?: LyricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LyricInclude<ExtArgs> | null
    where?: LyricWhereInput
  }

  /**
   * Music.Lists
   */
  export type Music$ListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicList
     */
    select?: MusicListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicList
     */
    omit?: MusicListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicListInclude<ExtArgs> | null
    where?: MusicListWhereInput
    orderBy?: MusicListOrderByWithRelationInput | MusicListOrderByWithRelationInput[]
    cursor?: MusicListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MusicListScalarFieldEnum | MusicListScalarFieldEnum[]
  }

  /**
   * Music without action
   */
  export type MusicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Music
     */
    select?: MusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Music
     */
    omit?: MusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicInclude<ExtArgs> | null
  }


  /**
   * Model MusicList
   */

  export type AggregateMusicList = {
    _count: MusicListCountAggregateOutputType | null
    _min: MusicListMinAggregateOutputType | null
    _max: MusicListMaxAggregateOutputType | null
  }

  export type MusicListMinAggregateOutputType = {
    id: string | null
    name: string | null
    avater: string | null
    type: string | null
  }

  export type MusicListMaxAggregateOutputType = {
    id: string | null
    name: string | null
    avater: string | null
    type: string | null
  }

  export type MusicListCountAggregateOutputType = {
    id: number
    name: number
    avater: number
    type: number
    MusicIds: number
    UserIds: number
    _all: number
  }


  export type MusicListMinAggregateInputType = {
    id?: true
    name?: true
    avater?: true
    type?: true
  }

  export type MusicListMaxAggregateInputType = {
    id?: true
    name?: true
    avater?: true
    type?: true
  }

  export type MusicListCountAggregateInputType = {
    id?: true
    name?: true
    avater?: true
    type?: true
    MusicIds?: true
    UserIds?: true
    _all?: true
  }

  export type MusicListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MusicList to aggregate.
     */
    where?: MusicListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MusicLists to fetch.
     */
    orderBy?: MusicListOrderByWithRelationInput | MusicListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MusicListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MusicLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MusicLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MusicLists
    **/
    _count?: true | MusicListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MusicListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MusicListMaxAggregateInputType
  }

  export type GetMusicListAggregateType<T extends MusicListAggregateArgs> = {
        [P in keyof T & keyof AggregateMusicList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMusicList[P]>
      : GetScalarType<T[P], AggregateMusicList[P]>
  }




  export type MusicListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MusicListWhereInput
    orderBy?: MusicListOrderByWithAggregationInput | MusicListOrderByWithAggregationInput[]
    by: MusicListScalarFieldEnum[] | MusicListScalarFieldEnum
    having?: MusicListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MusicListCountAggregateInputType | true
    _min?: MusicListMinAggregateInputType
    _max?: MusicListMaxAggregateInputType
  }

  export type MusicListGroupByOutputType = {
    id: string
    name: string
    avater: string | null
    type: string
    MusicIds: string[]
    UserIds: string[]
    _count: MusicListCountAggregateOutputType | null
    _min: MusicListMinAggregateOutputType | null
    _max: MusicListMaxAggregateOutputType | null
  }

  type GetMusicListGroupByPayload<T extends MusicListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MusicListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MusicListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MusicListGroupByOutputType[P]>
            : GetScalarType<T[P], MusicListGroupByOutputType[P]>
        }
      >
    >


  export type MusicListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    avater?: boolean
    type?: boolean
    MusicIds?: boolean
    UserIds?: boolean
    Musics?: boolean | MusicList$MusicsArgs<ExtArgs>
    Users?: boolean | MusicList$UsersArgs<ExtArgs>
    _count?: boolean | MusicListCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["musicList"]>



  export type MusicListSelectScalar = {
    id?: boolean
    name?: boolean
    avater?: boolean
    type?: boolean
    MusicIds?: boolean
    UserIds?: boolean
  }

  export type MusicListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "avater" | "type" | "MusicIds" | "UserIds", ExtArgs["result"]["musicList"]>
  export type MusicListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Musics?: boolean | MusicList$MusicsArgs<ExtArgs>
    Users?: boolean | MusicList$UsersArgs<ExtArgs>
    _count?: boolean | MusicListCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MusicListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MusicList"
    objects: {
      Musics: Prisma.$MusicPayload<ExtArgs>[]
      Users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      avater: string | null
      type: string
      MusicIds: string[]
      UserIds: string[]
    }, ExtArgs["result"]["musicList"]>
    composites: {}
  }

  type MusicListGetPayload<S extends boolean | null | undefined | MusicListDefaultArgs> = $Result.GetResult<Prisma.$MusicListPayload, S>

  type MusicListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MusicListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MusicListCountAggregateInputType | true
    }

  export interface MusicListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MusicList'], meta: { name: 'MusicList' } }
    /**
     * Find zero or one MusicList that matches the filter.
     * @param {MusicListFindUniqueArgs} args - Arguments to find a MusicList
     * @example
     * // Get one MusicList
     * const musicList = await prisma.musicList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MusicListFindUniqueArgs>(args: SelectSubset<T, MusicListFindUniqueArgs<ExtArgs>>): Prisma__MusicListClient<$Result.GetResult<Prisma.$MusicListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MusicList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MusicListFindUniqueOrThrowArgs} args - Arguments to find a MusicList
     * @example
     * // Get one MusicList
     * const musicList = await prisma.musicList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MusicListFindUniqueOrThrowArgs>(args: SelectSubset<T, MusicListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MusicListClient<$Result.GetResult<Prisma.$MusicListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MusicList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicListFindFirstArgs} args - Arguments to find a MusicList
     * @example
     * // Get one MusicList
     * const musicList = await prisma.musicList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MusicListFindFirstArgs>(args?: SelectSubset<T, MusicListFindFirstArgs<ExtArgs>>): Prisma__MusicListClient<$Result.GetResult<Prisma.$MusicListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MusicList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicListFindFirstOrThrowArgs} args - Arguments to find a MusicList
     * @example
     * // Get one MusicList
     * const musicList = await prisma.musicList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MusicListFindFirstOrThrowArgs>(args?: SelectSubset<T, MusicListFindFirstOrThrowArgs<ExtArgs>>): Prisma__MusicListClient<$Result.GetResult<Prisma.$MusicListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MusicLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MusicLists
     * const musicLists = await prisma.musicList.findMany()
     * 
     * // Get first 10 MusicLists
     * const musicLists = await prisma.musicList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const musicListWithIdOnly = await prisma.musicList.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MusicListFindManyArgs>(args?: SelectSubset<T, MusicListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MusicListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MusicList.
     * @param {MusicListCreateArgs} args - Arguments to create a MusicList.
     * @example
     * // Create one MusicList
     * const MusicList = await prisma.musicList.create({
     *   data: {
     *     // ... data to create a MusicList
     *   }
     * })
     * 
     */
    create<T extends MusicListCreateArgs>(args: SelectSubset<T, MusicListCreateArgs<ExtArgs>>): Prisma__MusicListClient<$Result.GetResult<Prisma.$MusicListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MusicLists.
     * @param {MusicListCreateManyArgs} args - Arguments to create many MusicLists.
     * @example
     * // Create many MusicLists
     * const musicList = await prisma.musicList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MusicListCreateManyArgs>(args?: SelectSubset<T, MusicListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MusicList.
     * @param {MusicListDeleteArgs} args - Arguments to delete one MusicList.
     * @example
     * // Delete one MusicList
     * const MusicList = await prisma.musicList.delete({
     *   where: {
     *     // ... filter to delete one MusicList
     *   }
     * })
     * 
     */
    delete<T extends MusicListDeleteArgs>(args: SelectSubset<T, MusicListDeleteArgs<ExtArgs>>): Prisma__MusicListClient<$Result.GetResult<Prisma.$MusicListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MusicList.
     * @param {MusicListUpdateArgs} args - Arguments to update one MusicList.
     * @example
     * // Update one MusicList
     * const musicList = await prisma.musicList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MusicListUpdateArgs>(args: SelectSubset<T, MusicListUpdateArgs<ExtArgs>>): Prisma__MusicListClient<$Result.GetResult<Prisma.$MusicListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MusicLists.
     * @param {MusicListDeleteManyArgs} args - Arguments to filter MusicLists to delete.
     * @example
     * // Delete a few MusicLists
     * const { count } = await prisma.musicList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MusicListDeleteManyArgs>(args?: SelectSubset<T, MusicListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MusicLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MusicLists
     * const musicList = await prisma.musicList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MusicListUpdateManyArgs>(args: SelectSubset<T, MusicListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MusicList.
     * @param {MusicListUpsertArgs} args - Arguments to update or create a MusicList.
     * @example
     * // Update or create a MusicList
     * const musicList = await prisma.musicList.upsert({
     *   create: {
     *     // ... data to create a MusicList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MusicList we want to update
     *   }
     * })
     */
    upsert<T extends MusicListUpsertArgs>(args: SelectSubset<T, MusicListUpsertArgs<ExtArgs>>): Prisma__MusicListClient<$Result.GetResult<Prisma.$MusicListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MusicLists that matches the filter.
     * @param {MusicListFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const musicList = await prisma.musicList.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: MusicListFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a MusicList.
     * @param {MusicListAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const musicList = await prisma.musicList.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: MusicListAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of MusicLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicListCountArgs} args - Arguments to filter MusicLists to count.
     * @example
     * // Count the number of MusicLists
     * const count = await prisma.musicList.count({
     *   where: {
     *     // ... the filter for the MusicLists we want to count
     *   }
     * })
    **/
    count<T extends MusicListCountArgs>(
      args?: Subset<T, MusicListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MusicListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MusicList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MusicListAggregateArgs>(args: Subset<T, MusicListAggregateArgs>): Prisma.PrismaPromise<GetMusicListAggregateType<T>>

    /**
     * Group by MusicList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MusicListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MusicListGroupByArgs['orderBy'] }
        : { orderBy?: MusicListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MusicListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMusicListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MusicList model
   */
  readonly fields: MusicListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MusicList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MusicListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Musics<T extends MusicList$MusicsArgs<ExtArgs> = {}>(args?: Subset<T, MusicList$MusicsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MusicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Users<T extends MusicList$UsersArgs<ExtArgs> = {}>(args?: Subset<T, MusicList$UsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MusicList model
   */
  interface MusicListFieldRefs {
    readonly id: FieldRef<"MusicList", 'String'>
    readonly name: FieldRef<"MusicList", 'String'>
    readonly avater: FieldRef<"MusicList", 'String'>
    readonly type: FieldRef<"MusicList", 'String'>
    readonly MusicIds: FieldRef<"MusicList", 'String[]'>
    readonly UserIds: FieldRef<"MusicList", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * MusicList findUnique
   */
  export type MusicListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicList
     */
    select?: MusicListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicList
     */
    omit?: MusicListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicListInclude<ExtArgs> | null
    /**
     * Filter, which MusicList to fetch.
     */
    where: MusicListWhereUniqueInput
  }

  /**
   * MusicList findUniqueOrThrow
   */
  export type MusicListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicList
     */
    select?: MusicListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicList
     */
    omit?: MusicListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicListInclude<ExtArgs> | null
    /**
     * Filter, which MusicList to fetch.
     */
    where: MusicListWhereUniqueInput
  }

  /**
   * MusicList findFirst
   */
  export type MusicListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicList
     */
    select?: MusicListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicList
     */
    omit?: MusicListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicListInclude<ExtArgs> | null
    /**
     * Filter, which MusicList to fetch.
     */
    where?: MusicListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MusicLists to fetch.
     */
    orderBy?: MusicListOrderByWithRelationInput | MusicListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MusicLists.
     */
    cursor?: MusicListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MusicLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MusicLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MusicLists.
     */
    distinct?: MusicListScalarFieldEnum | MusicListScalarFieldEnum[]
  }

  /**
   * MusicList findFirstOrThrow
   */
  export type MusicListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicList
     */
    select?: MusicListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicList
     */
    omit?: MusicListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicListInclude<ExtArgs> | null
    /**
     * Filter, which MusicList to fetch.
     */
    where?: MusicListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MusicLists to fetch.
     */
    orderBy?: MusicListOrderByWithRelationInput | MusicListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MusicLists.
     */
    cursor?: MusicListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MusicLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MusicLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MusicLists.
     */
    distinct?: MusicListScalarFieldEnum | MusicListScalarFieldEnum[]
  }

  /**
   * MusicList findMany
   */
  export type MusicListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicList
     */
    select?: MusicListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicList
     */
    omit?: MusicListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicListInclude<ExtArgs> | null
    /**
     * Filter, which MusicLists to fetch.
     */
    where?: MusicListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MusicLists to fetch.
     */
    orderBy?: MusicListOrderByWithRelationInput | MusicListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MusicLists.
     */
    cursor?: MusicListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MusicLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MusicLists.
     */
    skip?: number
    distinct?: MusicListScalarFieldEnum | MusicListScalarFieldEnum[]
  }

  /**
   * MusicList create
   */
  export type MusicListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicList
     */
    select?: MusicListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicList
     */
    omit?: MusicListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicListInclude<ExtArgs> | null
    /**
     * The data needed to create a MusicList.
     */
    data: XOR<MusicListCreateInput, MusicListUncheckedCreateInput>
  }

  /**
   * MusicList createMany
   */
  export type MusicListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MusicLists.
     */
    data: MusicListCreateManyInput | MusicListCreateManyInput[]
  }

  /**
   * MusicList update
   */
  export type MusicListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicList
     */
    select?: MusicListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicList
     */
    omit?: MusicListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicListInclude<ExtArgs> | null
    /**
     * The data needed to update a MusicList.
     */
    data: XOR<MusicListUpdateInput, MusicListUncheckedUpdateInput>
    /**
     * Choose, which MusicList to update.
     */
    where: MusicListWhereUniqueInput
  }

  /**
   * MusicList updateMany
   */
  export type MusicListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MusicLists.
     */
    data: XOR<MusicListUpdateManyMutationInput, MusicListUncheckedUpdateManyInput>
    /**
     * Filter which MusicLists to update
     */
    where?: MusicListWhereInput
    /**
     * Limit how many MusicLists to update.
     */
    limit?: number
  }

  /**
   * MusicList upsert
   */
  export type MusicListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicList
     */
    select?: MusicListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicList
     */
    omit?: MusicListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicListInclude<ExtArgs> | null
    /**
     * The filter to search for the MusicList to update in case it exists.
     */
    where: MusicListWhereUniqueInput
    /**
     * In case the MusicList found by the `where` argument doesn't exist, create a new MusicList with this data.
     */
    create: XOR<MusicListCreateInput, MusicListUncheckedCreateInput>
    /**
     * In case the MusicList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MusicListUpdateInput, MusicListUncheckedUpdateInput>
  }

  /**
   * MusicList delete
   */
  export type MusicListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicList
     */
    select?: MusicListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicList
     */
    omit?: MusicListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicListInclude<ExtArgs> | null
    /**
     * Filter which MusicList to delete.
     */
    where: MusicListWhereUniqueInput
  }

  /**
   * MusicList deleteMany
   */
  export type MusicListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MusicLists to delete
     */
    where?: MusicListWhereInput
    /**
     * Limit how many MusicLists to delete.
     */
    limit?: number
  }

  /**
   * MusicList findRaw
   */
  export type MusicListFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * MusicList aggregateRaw
   */
  export type MusicListAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * MusicList.Musics
   */
  export type MusicList$MusicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Music
     */
    select?: MusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Music
     */
    omit?: MusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicInclude<ExtArgs> | null
    where?: MusicWhereInput
    orderBy?: MusicOrderByWithRelationInput | MusicOrderByWithRelationInput[]
    cursor?: MusicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MusicScalarFieldEnum | MusicScalarFieldEnum[]
  }

  /**
   * MusicList.Users
   */
  export type MusicList$UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * MusicList without action
   */
  export type MusicListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicList
     */
    select?: MusicListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicList
     */
    omit?: MusicListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicListInclude<ExtArgs> | null
  }


  /**
   * Model Video
   */

  export type AggregateVideo = {
    _count: VideoCountAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  export type VideoMinAggregateOutputType = {
    id: string | null
    avater: string | null
    url: string | null
    MusicId: string | null
  }

  export type VideoMaxAggregateOutputType = {
    id: string | null
    avater: string | null
    url: string | null
    MusicId: string | null
  }

  export type VideoCountAggregateOutputType = {
    id: number
    avater: number
    url: number
    MusicId: number
    _all: number
  }


  export type VideoMinAggregateInputType = {
    id?: true
    avater?: true
    url?: true
    MusicId?: true
  }

  export type VideoMaxAggregateInputType = {
    id?: true
    avater?: true
    url?: true
    MusicId?: true
  }

  export type VideoCountAggregateInputType = {
    id?: true
    avater?: true
    url?: true
    MusicId?: true
    _all?: true
  }

  export type VideoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Video to aggregate.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Videos
    **/
    _count?: true | VideoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoMaxAggregateInputType
  }

  export type GetVideoAggregateType<T extends VideoAggregateArgs> = {
        [P in keyof T & keyof AggregateVideo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideo[P]>
      : GetScalarType<T[P], AggregateVideo[P]>
  }




  export type VideoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithAggregationInput | VideoOrderByWithAggregationInput[]
    by: VideoScalarFieldEnum[] | VideoScalarFieldEnum
    having?: VideoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoCountAggregateInputType | true
    _min?: VideoMinAggregateInputType
    _max?: VideoMaxAggregateInputType
  }

  export type VideoGroupByOutputType = {
    id: string
    avater: string
    url: string
    MusicId: string
    _count: VideoCountAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  type GetVideoGroupByPayload<T extends VideoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoGroupByOutputType[P]>
            : GetScalarType<T[P], VideoGroupByOutputType[P]>
        }
      >
    >


  export type VideoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    avater?: boolean
    url?: boolean
    MusicId?: boolean
    Music?: boolean | MusicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>



  export type VideoSelectScalar = {
    id?: boolean
    avater?: boolean
    url?: boolean
    MusicId?: boolean
  }

  export type VideoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "avater" | "url" | "MusicId", ExtArgs["result"]["video"]>
  export type VideoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Music?: boolean | MusicDefaultArgs<ExtArgs>
  }

  export type $VideoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Video"
    objects: {
      Music: Prisma.$MusicPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      avater: string
      url: string
      MusicId: string
    }, ExtArgs["result"]["video"]>
    composites: {}
  }

  type VideoGetPayload<S extends boolean | null | undefined | VideoDefaultArgs> = $Result.GetResult<Prisma.$VideoPayload, S>

  type VideoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VideoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideoCountAggregateInputType | true
    }

  export interface VideoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Video'], meta: { name: 'Video' } }
    /**
     * Find zero or one Video that matches the filter.
     * @param {VideoFindUniqueArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoFindUniqueArgs>(args: SelectSubset<T, VideoFindUniqueArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Video that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideoFindUniqueOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoFindUniqueOrThrowArgs>(args: SelectSubset<T, VideoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoFindFirstArgs>(args?: SelectSubset<T, VideoFindFirstArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoFindFirstOrThrowArgs>(args?: SelectSubset<T, VideoFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Videos
     * const videos = await prisma.video.findMany()
     * 
     * // Get first 10 Videos
     * const videos = await prisma.video.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoWithIdOnly = await prisma.video.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VideoFindManyArgs>(args?: SelectSubset<T, VideoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Video.
     * @param {VideoCreateArgs} args - Arguments to create a Video.
     * @example
     * // Create one Video
     * const Video = await prisma.video.create({
     *   data: {
     *     // ... data to create a Video
     *   }
     * })
     * 
     */
    create<T extends VideoCreateArgs>(args: SelectSubset<T, VideoCreateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Videos.
     * @param {VideoCreateManyArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const video = await prisma.video.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideoCreateManyArgs>(args?: SelectSubset<T, VideoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Video.
     * @param {VideoDeleteArgs} args - Arguments to delete one Video.
     * @example
     * // Delete one Video
     * const Video = await prisma.video.delete({
     *   where: {
     *     // ... filter to delete one Video
     *   }
     * })
     * 
     */
    delete<T extends VideoDeleteArgs>(args: SelectSubset<T, VideoDeleteArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Video.
     * @param {VideoUpdateArgs} args - Arguments to update one Video.
     * @example
     * // Update one Video
     * const video = await prisma.video.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideoUpdateArgs>(args: SelectSubset<T, VideoUpdateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Videos.
     * @param {VideoDeleteManyArgs} args - Arguments to filter Videos to delete.
     * @example
     * // Delete a few Videos
     * const { count } = await prisma.video.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideoDeleteManyArgs>(args?: SelectSubset<T, VideoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideoUpdateManyArgs>(args: SelectSubset<T, VideoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Video.
     * @param {VideoUpsertArgs} args - Arguments to update or create a Video.
     * @example
     * // Update or create a Video
     * const video = await prisma.video.upsert({
     *   create: {
     *     // ... data to create a Video
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Video we want to update
     *   }
     * })
     */
    upsert<T extends VideoUpsertArgs>(args: SelectSubset<T, VideoUpsertArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Videos that matches the filter.
     * @param {VideoFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const video = await prisma.video.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: VideoFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Video.
     * @param {VideoAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const video = await prisma.video.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: VideoAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCountArgs} args - Arguments to filter Videos to count.
     * @example
     * // Count the number of Videos
     * const count = await prisma.video.count({
     *   where: {
     *     // ... the filter for the Videos we want to count
     *   }
     * })
    **/
    count<T extends VideoCountArgs>(
      args?: Subset<T, VideoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VideoAggregateArgs>(args: Subset<T, VideoAggregateArgs>): Prisma.PrismaPromise<GetVideoAggregateType<T>>

    /**
     * Group by Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VideoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoGroupByArgs['orderBy'] }
        : { orderBy?: VideoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VideoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Video model
   */
  readonly fields: VideoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Video.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Music<T extends MusicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MusicDefaultArgs<ExtArgs>>): Prisma__MusicClient<$Result.GetResult<Prisma.$MusicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Video model
   */
  interface VideoFieldRefs {
    readonly id: FieldRef<"Video", 'String'>
    readonly avater: FieldRef<"Video", 'String'>
    readonly url: FieldRef<"Video", 'String'>
    readonly MusicId: FieldRef<"Video", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Video findUnique
   */
  export type VideoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findUniqueOrThrow
   */
  export type VideoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findFirst
   */
  export type VideoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findFirstOrThrow
   */
  export type VideoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findMany
   */
  export type VideoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Videos to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video create
   */
  export type VideoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The data needed to create a Video.
     */
    data: XOR<VideoCreateInput, VideoUncheckedCreateInput>
  }

  /**
   * Video createMany
   */
  export type VideoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Videos.
     */
    data: VideoCreateManyInput | VideoCreateManyInput[]
  }

  /**
   * Video update
   */
  export type VideoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The data needed to update a Video.
     */
    data: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
    /**
     * Choose, which Video to update.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video updateMany
   */
  export type VideoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Videos.
     */
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyInput>
    /**
     * Filter which Videos to update
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to update.
     */
    limit?: number
  }

  /**
   * Video upsert
   */
  export type VideoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The filter to search for the Video to update in case it exists.
     */
    where: VideoWhereUniqueInput
    /**
     * In case the Video found by the `where` argument doesn't exist, create a new Video with this data.
     */
    create: XOR<VideoCreateInput, VideoUncheckedCreateInput>
    /**
     * In case the Video was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
  }

  /**
   * Video delete
   */
  export type VideoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter which Video to delete.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video deleteMany
   */
  export type VideoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Videos to delete
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to delete.
     */
    limit?: number
  }

  /**
   * Video findRaw
   */
  export type VideoFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Video aggregateRaw
   */
  export type VideoAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Video without action
   */
  export type VideoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
  }


  /**
   * Model Lyric
   */

  export type AggregateLyric = {
    _count: LyricCountAggregateOutputType | null
    _min: LyricMinAggregateOutputType | null
    _max: LyricMaxAggregateOutputType | null
  }

  export type LyricMinAggregateOutputType = {
    id: string | null
    url: string | null
    MusicId: string | null
  }

  export type LyricMaxAggregateOutputType = {
    id: string | null
    url: string | null
    MusicId: string | null
  }

  export type LyricCountAggregateOutputType = {
    id: number
    url: number
    MusicId: number
    _all: number
  }


  export type LyricMinAggregateInputType = {
    id?: true
    url?: true
    MusicId?: true
  }

  export type LyricMaxAggregateInputType = {
    id?: true
    url?: true
    MusicId?: true
  }

  export type LyricCountAggregateInputType = {
    id?: true
    url?: true
    MusicId?: true
    _all?: true
  }

  export type LyricAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lyric to aggregate.
     */
    where?: LyricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lyrics to fetch.
     */
    orderBy?: LyricOrderByWithRelationInput | LyricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LyricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lyrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lyrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lyrics
    **/
    _count?: true | LyricCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LyricMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LyricMaxAggregateInputType
  }

  export type GetLyricAggregateType<T extends LyricAggregateArgs> = {
        [P in keyof T & keyof AggregateLyric]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLyric[P]>
      : GetScalarType<T[P], AggregateLyric[P]>
  }




  export type LyricGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LyricWhereInput
    orderBy?: LyricOrderByWithAggregationInput | LyricOrderByWithAggregationInput[]
    by: LyricScalarFieldEnum[] | LyricScalarFieldEnum
    having?: LyricScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LyricCountAggregateInputType | true
    _min?: LyricMinAggregateInputType
    _max?: LyricMaxAggregateInputType
  }

  export type LyricGroupByOutputType = {
    id: string
    url: string
    MusicId: string
    _count: LyricCountAggregateOutputType | null
    _min: LyricMinAggregateOutputType | null
    _max: LyricMaxAggregateOutputType | null
  }

  type GetLyricGroupByPayload<T extends LyricGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LyricGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LyricGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LyricGroupByOutputType[P]>
            : GetScalarType<T[P], LyricGroupByOutputType[P]>
        }
      >
    >


  export type LyricSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    MusicId?: boolean
    Music?: boolean | MusicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lyric"]>



  export type LyricSelectScalar = {
    id?: boolean
    url?: boolean
    MusicId?: boolean
  }

  export type LyricOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "MusicId", ExtArgs["result"]["lyric"]>
  export type LyricInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Music?: boolean | MusicDefaultArgs<ExtArgs>
  }

  export type $LyricPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lyric"
    objects: {
      Music: Prisma.$MusicPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      MusicId: string
    }, ExtArgs["result"]["lyric"]>
    composites: {}
  }

  type LyricGetPayload<S extends boolean | null | undefined | LyricDefaultArgs> = $Result.GetResult<Prisma.$LyricPayload, S>

  type LyricCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LyricFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LyricCountAggregateInputType | true
    }

  export interface LyricDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lyric'], meta: { name: 'Lyric' } }
    /**
     * Find zero or one Lyric that matches the filter.
     * @param {LyricFindUniqueArgs} args - Arguments to find a Lyric
     * @example
     * // Get one Lyric
     * const lyric = await prisma.lyric.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LyricFindUniqueArgs>(args: SelectSubset<T, LyricFindUniqueArgs<ExtArgs>>): Prisma__LyricClient<$Result.GetResult<Prisma.$LyricPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lyric that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LyricFindUniqueOrThrowArgs} args - Arguments to find a Lyric
     * @example
     * // Get one Lyric
     * const lyric = await prisma.lyric.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LyricFindUniqueOrThrowArgs>(args: SelectSubset<T, LyricFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LyricClient<$Result.GetResult<Prisma.$LyricPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lyric that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LyricFindFirstArgs} args - Arguments to find a Lyric
     * @example
     * // Get one Lyric
     * const lyric = await prisma.lyric.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LyricFindFirstArgs>(args?: SelectSubset<T, LyricFindFirstArgs<ExtArgs>>): Prisma__LyricClient<$Result.GetResult<Prisma.$LyricPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lyric that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LyricFindFirstOrThrowArgs} args - Arguments to find a Lyric
     * @example
     * // Get one Lyric
     * const lyric = await prisma.lyric.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LyricFindFirstOrThrowArgs>(args?: SelectSubset<T, LyricFindFirstOrThrowArgs<ExtArgs>>): Prisma__LyricClient<$Result.GetResult<Prisma.$LyricPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lyrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LyricFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lyrics
     * const lyrics = await prisma.lyric.findMany()
     * 
     * // Get first 10 Lyrics
     * const lyrics = await prisma.lyric.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lyricWithIdOnly = await prisma.lyric.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LyricFindManyArgs>(args?: SelectSubset<T, LyricFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LyricPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lyric.
     * @param {LyricCreateArgs} args - Arguments to create a Lyric.
     * @example
     * // Create one Lyric
     * const Lyric = await prisma.lyric.create({
     *   data: {
     *     // ... data to create a Lyric
     *   }
     * })
     * 
     */
    create<T extends LyricCreateArgs>(args: SelectSubset<T, LyricCreateArgs<ExtArgs>>): Prisma__LyricClient<$Result.GetResult<Prisma.$LyricPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lyrics.
     * @param {LyricCreateManyArgs} args - Arguments to create many Lyrics.
     * @example
     * // Create many Lyrics
     * const lyric = await prisma.lyric.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LyricCreateManyArgs>(args?: SelectSubset<T, LyricCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Lyric.
     * @param {LyricDeleteArgs} args - Arguments to delete one Lyric.
     * @example
     * // Delete one Lyric
     * const Lyric = await prisma.lyric.delete({
     *   where: {
     *     // ... filter to delete one Lyric
     *   }
     * })
     * 
     */
    delete<T extends LyricDeleteArgs>(args: SelectSubset<T, LyricDeleteArgs<ExtArgs>>): Prisma__LyricClient<$Result.GetResult<Prisma.$LyricPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lyric.
     * @param {LyricUpdateArgs} args - Arguments to update one Lyric.
     * @example
     * // Update one Lyric
     * const lyric = await prisma.lyric.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LyricUpdateArgs>(args: SelectSubset<T, LyricUpdateArgs<ExtArgs>>): Prisma__LyricClient<$Result.GetResult<Prisma.$LyricPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lyrics.
     * @param {LyricDeleteManyArgs} args - Arguments to filter Lyrics to delete.
     * @example
     * // Delete a few Lyrics
     * const { count } = await prisma.lyric.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LyricDeleteManyArgs>(args?: SelectSubset<T, LyricDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lyrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LyricUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lyrics
     * const lyric = await prisma.lyric.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LyricUpdateManyArgs>(args: SelectSubset<T, LyricUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Lyric.
     * @param {LyricUpsertArgs} args - Arguments to update or create a Lyric.
     * @example
     * // Update or create a Lyric
     * const lyric = await prisma.lyric.upsert({
     *   create: {
     *     // ... data to create a Lyric
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lyric we want to update
     *   }
     * })
     */
    upsert<T extends LyricUpsertArgs>(args: SelectSubset<T, LyricUpsertArgs<ExtArgs>>): Prisma__LyricClient<$Result.GetResult<Prisma.$LyricPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lyrics that matches the filter.
     * @param {LyricFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const lyric = await prisma.lyric.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: LyricFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Lyric.
     * @param {LyricAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const lyric = await prisma.lyric.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: LyricAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Lyrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LyricCountArgs} args - Arguments to filter Lyrics to count.
     * @example
     * // Count the number of Lyrics
     * const count = await prisma.lyric.count({
     *   where: {
     *     // ... the filter for the Lyrics we want to count
     *   }
     * })
    **/
    count<T extends LyricCountArgs>(
      args?: Subset<T, LyricCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LyricCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lyric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LyricAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LyricAggregateArgs>(args: Subset<T, LyricAggregateArgs>): Prisma.PrismaPromise<GetLyricAggregateType<T>>

    /**
     * Group by Lyric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LyricGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LyricGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LyricGroupByArgs['orderBy'] }
        : { orderBy?: LyricGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LyricGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLyricGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lyric model
   */
  readonly fields: LyricFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lyric.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LyricClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Music<T extends MusicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MusicDefaultArgs<ExtArgs>>): Prisma__MusicClient<$Result.GetResult<Prisma.$MusicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lyric model
   */
  interface LyricFieldRefs {
    readonly id: FieldRef<"Lyric", 'String'>
    readonly url: FieldRef<"Lyric", 'String'>
    readonly MusicId: FieldRef<"Lyric", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Lyric findUnique
   */
  export type LyricFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lyric
     */
    select?: LyricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lyric
     */
    omit?: LyricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LyricInclude<ExtArgs> | null
    /**
     * Filter, which Lyric to fetch.
     */
    where: LyricWhereUniqueInput
  }

  /**
   * Lyric findUniqueOrThrow
   */
  export type LyricFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lyric
     */
    select?: LyricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lyric
     */
    omit?: LyricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LyricInclude<ExtArgs> | null
    /**
     * Filter, which Lyric to fetch.
     */
    where: LyricWhereUniqueInput
  }

  /**
   * Lyric findFirst
   */
  export type LyricFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lyric
     */
    select?: LyricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lyric
     */
    omit?: LyricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LyricInclude<ExtArgs> | null
    /**
     * Filter, which Lyric to fetch.
     */
    where?: LyricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lyrics to fetch.
     */
    orderBy?: LyricOrderByWithRelationInput | LyricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lyrics.
     */
    cursor?: LyricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lyrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lyrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lyrics.
     */
    distinct?: LyricScalarFieldEnum | LyricScalarFieldEnum[]
  }

  /**
   * Lyric findFirstOrThrow
   */
  export type LyricFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lyric
     */
    select?: LyricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lyric
     */
    omit?: LyricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LyricInclude<ExtArgs> | null
    /**
     * Filter, which Lyric to fetch.
     */
    where?: LyricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lyrics to fetch.
     */
    orderBy?: LyricOrderByWithRelationInput | LyricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lyrics.
     */
    cursor?: LyricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lyrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lyrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lyrics.
     */
    distinct?: LyricScalarFieldEnum | LyricScalarFieldEnum[]
  }

  /**
   * Lyric findMany
   */
  export type LyricFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lyric
     */
    select?: LyricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lyric
     */
    omit?: LyricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LyricInclude<ExtArgs> | null
    /**
     * Filter, which Lyrics to fetch.
     */
    where?: LyricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lyrics to fetch.
     */
    orderBy?: LyricOrderByWithRelationInput | LyricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lyrics.
     */
    cursor?: LyricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lyrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lyrics.
     */
    skip?: number
    distinct?: LyricScalarFieldEnum | LyricScalarFieldEnum[]
  }

  /**
   * Lyric create
   */
  export type LyricCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lyric
     */
    select?: LyricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lyric
     */
    omit?: LyricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LyricInclude<ExtArgs> | null
    /**
     * The data needed to create a Lyric.
     */
    data: XOR<LyricCreateInput, LyricUncheckedCreateInput>
  }

  /**
   * Lyric createMany
   */
  export type LyricCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lyrics.
     */
    data: LyricCreateManyInput | LyricCreateManyInput[]
  }

  /**
   * Lyric update
   */
  export type LyricUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lyric
     */
    select?: LyricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lyric
     */
    omit?: LyricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LyricInclude<ExtArgs> | null
    /**
     * The data needed to update a Lyric.
     */
    data: XOR<LyricUpdateInput, LyricUncheckedUpdateInput>
    /**
     * Choose, which Lyric to update.
     */
    where: LyricWhereUniqueInput
  }

  /**
   * Lyric updateMany
   */
  export type LyricUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lyrics.
     */
    data: XOR<LyricUpdateManyMutationInput, LyricUncheckedUpdateManyInput>
    /**
     * Filter which Lyrics to update
     */
    where?: LyricWhereInput
    /**
     * Limit how many Lyrics to update.
     */
    limit?: number
  }

  /**
   * Lyric upsert
   */
  export type LyricUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lyric
     */
    select?: LyricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lyric
     */
    omit?: LyricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LyricInclude<ExtArgs> | null
    /**
     * The filter to search for the Lyric to update in case it exists.
     */
    where: LyricWhereUniqueInput
    /**
     * In case the Lyric found by the `where` argument doesn't exist, create a new Lyric with this data.
     */
    create: XOR<LyricCreateInput, LyricUncheckedCreateInput>
    /**
     * In case the Lyric was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LyricUpdateInput, LyricUncheckedUpdateInput>
  }

  /**
   * Lyric delete
   */
  export type LyricDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lyric
     */
    select?: LyricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lyric
     */
    omit?: LyricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LyricInclude<ExtArgs> | null
    /**
     * Filter which Lyric to delete.
     */
    where: LyricWhereUniqueInput
  }

  /**
   * Lyric deleteMany
   */
  export type LyricDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lyrics to delete
     */
    where?: LyricWhereInput
    /**
     * Limit how many Lyrics to delete.
     */
    limit?: number
  }

  /**
   * Lyric findRaw
   */
  export type LyricFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Lyric aggregateRaw
   */
  export type LyricAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Lyric without action
   */
  export type LyricDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lyric
     */
    select?: LyricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lyric
     */
    omit?: LyricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LyricInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    avater: 'avater',
    password: 'password',
    ListIds: 'ListIds'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MusicScalarFieldEnum: {
    id: 'id',
    name: 'name',
    singer: 'singer',
    path: 'path',
    duration: 'duration',
    avater: 'avater',
    ListIds: 'ListIds'
  };

  export type MusicScalarFieldEnum = (typeof MusicScalarFieldEnum)[keyof typeof MusicScalarFieldEnum]


  export const MusicListScalarFieldEnum: {
    id: 'id',
    name: 'name',
    avater: 'avater',
    type: 'type',
    MusicIds: 'MusicIds',
    UserIds: 'UserIds'
  };

  export type MusicListScalarFieldEnum = (typeof MusicListScalarFieldEnum)[keyof typeof MusicListScalarFieldEnum]


  export const VideoScalarFieldEnum: {
    id: 'id',
    avater: 'avater',
    url: 'url',
    MusicId: 'MusicId'
  };

  export type VideoScalarFieldEnum = (typeof VideoScalarFieldEnum)[keyof typeof VideoScalarFieldEnum]


  export const LyricScalarFieldEnum: {
    id: 'id',
    url: 'url',
    MusicId: 'MusicId'
  };

  export type LyricScalarFieldEnum = (typeof LyricScalarFieldEnum)[keyof typeof LyricScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    avater?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    ListIds?: StringNullableListFilter<"User">
    Lists?: MusicListListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avater?: SortOrder
    password?: SortOrder
    ListIds?: SortOrder
    Lists?: MusicListOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    email?: StringFilter<"User"> | string
    avater?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    ListIds?: StringNullableListFilter<"User">
    Lists?: MusicListListRelationFilter
  }, "id" | "name">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avater?: SortOrder
    password?: SortOrder
    ListIds?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    avater?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    ListIds?: StringNullableListFilter<"User">
  }

  export type MusicWhereInput = {
    AND?: MusicWhereInput | MusicWhereInput[]
    OR?: MusicWhereInput[]
    NOT?: MusicWhereInput | MusicWhereInput[]
    id?: StringFilter<"Music"> | string
    name?: StringFilter<"Music"> | string
    singer?: StringNullableListFilter<"Music">
    path?: StringFilter<"Music"> | string
    duration?: IntFilter<"Music"> | number
    avater?: StringFilter<"Music"> | string
    ListIds?: StringNullableListFilter<"Music">
    video?: XOR<VideoNullableScalarRelationFilter, VideoWhereInput> | null
    lyric?: XOR<LyricNullableScalarRelationFilter, LyricWhereInput> | null
    Lists?: MusicListListRelationFilter
  }

  export type MusicOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    singer?: SortOrder
    path?: SortOrder
    duration?: SortOrder
    avater?: SortOrder
    ListIds?: SortOrder
    video?: VideoOrderByWithRelationInput
    lyric?: LyricOrderByWithRelationInput
    Lists?: MusicListOrderByRelationAggregateInput
  }

  export type MusicWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    path?: string
    AND?: MusicWhereInput | MusicWhereInput[]
    OR?: MusicWhereInput[]
    NOT?: MusicWhereInput | MusicWhereInput[]
    name?: StringFilter<"Music"> | string
    singer?: StringNullableListFilter<"Music">
    duration?: IntFilter<"Music"> | number
    avater?: StringFilter<"Music"> | string
    ListIds?: StringNullableListFilter<"Music">
    video?: XOR<VideoNullableScalarRelationFilter, VideoWhereInput> | null
    lyric?: XOR<LyricNullableScalarRelationFilter, LyricWhereInput> | null
    Lists?: MusicListListRelationFilter
  }, "id" | "path">

  export type MusicOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    singer?: SortOrder
    path?: SortOrder
    duration?: SortOrder
    avater?: SortOrder
    ListIds?: SortOrder
    _count?: MusicCountOrderByAggregateInput
    _avg?: MusicAvgOrderByAggregateInput
    _max?: MusicMaxOrderByAggregateInput
    _min?: MusicMinOrderByAggregateInput
    _sum?: MusicSumOrderByAggregateInput
  }

  export type MusicScalarWhereWithAggregatesInput = {
    AND?: MusicScalarWhereWithAggregatesInput | MusicScalarWhereWithAggregatesInput[]
    OR?: MusicScalarWhereWithAggregatesInput[]
    NOT?: MusicScalarWhereWithAggregatesInput | MusicScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Music"> | string
    name?: StringWithAggregatesFilter<"Music"> | string
    singer?: StringNullableListFilter<"Music">
    path?: StringWithAggregatesFilter<"Music"> | string
    duration?: IntWithAggregatesFilter<"Music"> | number
    avater?: StringWithAggregatesFilter<"Music"> | string
    ListIds?: StringNullableListFilter<"Music">
  }

  export type MusicListWhereInput = {
    AND?: MusicListWhereInput | MusicListWhereInput[]
    OR?: MusicListWhereInput[]
    NOT?: MusicListWhereInput | MusicListWhereInput[]
    id?: StringFilter<"MusicList"> | string
    name?: StringFilter<"MusicList"> | string
    avater?: StringNullableFilter<"MusicList"> | string | null
    type?: StringFilter<"MusicList"> | string
    MusicIds?: StringNullableListFilter<"MusicList">
    UserIds?: StringNullableListFilter<"MusicList">
    Musics?: MusicListRelationFilter
    Users?: UserListRelationFilter
  }

  export type MusicListOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    avater?: SortOrder
    type?: SortOrder
    MusicIds?: SortOrder
    UserIds?: SortOrder
    Musics?: MusicOrderByRelationAggregateInput
    Users?: UserOrderByRelationAggregateInput
  }

  export type MusicListWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MusicListWhereInput | MusicListWhereInput[]
    OR?: MusicListWhereInput[]
    NOT?: MusicListWhereInput | MusicListWhereInput[]
    name?: StringFilter<"MusicList"> | string
    avater?: StringNullableFilter<"MusicList"> | string | null
    type?: StringFilter<"MusicList"> | string
    MusicIds?: StringNullableListFilter<"MusicList">
    UserIds?: StringNullableListFilter<"MusicList">
    Musics?: MusicListRelationFilter
    Users?: UserListRelationFilter
  }, "id">

  export type MusicListOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    avater?: SortOrder
    type?: SortOrder
    MusicIds?: SortOrder
    UserIds?: SortOrder
    _count?: MusicListCountOrderByAggregateInput
    _max?: MusicListMaxOrderByAggregateInput
    _min?: MusicListMinOrderByAggregateInput
  }

  export type MusicListScalarWhereWithAggregatesInput = {
    AND?: MusicListScalarWhereWithAggregatesInput | MusicListScalarWhereWithAggregatesInput[]
    OR?: MusicListScalarWhereWithAggregatesInput[]
    NOT?: MusicListScalarWhereWithAggregatesInput | MusicListScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MusicList"> | string
    name?: StringWithAggregatesFilter<"MusicList"> | string
    avater?: StringNullableWithAggregatesFilter<"MusicList"> | string | null
    type?: StringWithAggregatesFilter<"MusicList"> | string
    MusicIds?: StringNullableListFilter<"MusicList">
    UserIds?: StringNullableListFilter<"MusicList">
  }

  export type VideoWhereInput = {
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    id?: StringFilter<"Video"> | string
    avater?: StringFilter<"Video"> | string
    url?: StringFilter<"Video"> | string
    MusicId?: StringFilter<"Video"> | string
    Music?: XOR<MusicScalarRelationFilter, MusicWhereInput>
  }

  export type VideoOrderByWithRelationInput = {
    id?: SortOrder
    avater?: SortOrder
    url?: SortOrder
    MusicId?: SortOrder
    Music?: MusicOrderByWithRelationInput
  }

  export type VideoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    url?: string
    MusicId?: string
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    avater?: StringFilter<"Video"> | string
    Music?: XOR<MusicScalarRelationFilter, MusicWhereInput>
  }, "id" | "url" | "MusicId">

  export type VideoOrderByWithAggregationInput = {
    id?: SortOrder
    avater?: SortOrder
    url?: SortOrder
    MusicId?: SortOrder
    _count?: VideoCountOrderByAggregateInput
    _max?: VideoMaxOrderByAggregateInput
    _min?: VideoMinOrderByAggregateInput
  }

  export type VideoScalarWhereWithAggregatesInput = {
    AND?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    OR?: VideoScalarWhereWithAggregatesInput[]
    NOT?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Video"> | string
    avater?: StringWithAggregatesFilter<"Video"> | string
    url?: StringWithAggregatesFilter<"Video"> | string
    MusicId?: StringWithAggregatesFilter<"Video"> | string
  }

  export type LyricWhereInput = {
    AND?: LyricWhereInput | LyricWhereInput[]
    OR?: LyricWhereInput[]
    NOT?: LyricWhereInput | LyricWhereInput[]
    id?: StringFilter<"Lyric"> | string
    url?: StringFilter<"Lyric"> | string
    MusicId?: StringFilter<"Lyric"> | string
    Music?: XOR<MusicScalarRelationFilter, MusicWhereInput>
  }

  export type LyricOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    MusicId?: SortOrder
    Music?: MusicOrderByWithRelationInput
  }

  export type LyricWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    url?: string
    MusicId?: string
    AND?: LyricWhereInput | LyricWhereInput[]
    OR?: LyricWhereInput[]
    NOT?: LyricWhereInput | LyricWhereInput[]
    Music?: XOR<MusicScalarRelationFilter, MusicWhereInput>
  }, "id" | "url" | "MusicId">

  export type LyricOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    MusicId?: SortOrder
    _count?: LyricCountOrderByAggregateInput
    _max?: LyricMaxOrderByAggregateInput
    _min?: LyricMinOrderByAggregateInput
  }

  export type LyricScalarWhereWithAggregatesInput = {
    AND?: LyricScalarWhereWithAggregatesInput | LyricScalarWhereWithAggregatesInput[]
    OR?: LyricScalarWhereWithAggregatesInput[]
    NOT?: LyricScalarWhereWithAggregatesInput | LyricScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lyric"> | string
    url?: StringWithAggregatesFilter<"Lyric"> | string
    MusicId?: StringWithAggregatesFilter<"Lyric"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    avater: string
    password: string
    Lists?: MusicListCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    avater: string
    password: string
    ListIds?: UserCreateListIdsInput | string[]
    Lists?: MusicListUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avater?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Lists?: MusicListUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avater?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ListIds?: UserUpdateListIdsInput | string[]
    Lists?: MusicListUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    avater: string
    password: string
    ListIds?: UserCreateListIdsInput | string[]
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avater?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avater?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ListIds?: UserUpdateListIdsInput | string[]
  }

  export type MusicCreateInput = {
    id?: string
    name: string
    singer?: MusicCreatesingerInput | string[]
    path: string
    duration: number
    avater: string
    video?: VideoCreateNestedOneWithoutMusicInput
    lyric?: LyricCreateNestedOneWithoutMusicInput
    Lists?: MusicListCreateNestedManyWithoutMusicsInput
  }

  export type MusicUncheckedCreateInput = {
    id?: string
    name: string
    singer?: MusicCreatesingerInput | string[]
    path: string
    duration: number
    avater: string
    ListIds?: MusicCreateListIdsInput | string[]
    video?: VideoUncheckedCreateNestedOneWithoutMusicInput
    lyric?: LyricUncheckedCreateNestedOneWithoutMusicInput
    Lists?: MusicListUncheckedCreateNestedManyWithoutMusicsInput
  }

  export type MusicUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    singer?: MusicUpdatesingerInput | string[]
    path?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    avater?: StringFieldUpdateOperationsInput | string
    video?: VideoUpdateOneWithoutMusicNestedInput
    lyric?: LyricUpdateOneWithoutMusicNestedInput
    Lists?: MusicListUpdateManyWithoutMusicsNestedInput
  }

  export type MusicUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    singer?: MusicUpdatesingerInput | string[]
    path?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    avater?: StringFieldUpdateOperationsInput | string
    ListIds?: MusicUpdateListIdsInput | string[]
    video?: VideoUncheckedUpdateOneWithoutMusicNestedInput
    lyric?: LyricUncheckedUpdateOneWithoutMusicNestedInput
    Lists?: MusicListUncheckedUpdateManyWithoutMusicsNestedInput
  }

  export type MusicCreateManyInput = {
    id?: string
    name: string
    singer?: MusicCreatesingerInput | string[]
    path: string
    duration: number
    avater: string
    ListIds?: MusicCreateListIdsInput | string[]
  }

  export type MusicUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    singer?: MusicUpdatesingerInput | string[]
    path?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    avater?: StringFieldUpdateOperationsInput | string
  }

  export type MusicUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    singer?: MusicUpdatesingerInput | string[]
    path?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    avater?: StringFieldUpdateOperationsInput | string
    ListIds?: MusicUpdateListIdsInput | string[]
  }

  export type MusicListCreateInput = {
    id?: string
    name: string
    avater?: string | null
    type: string
    Musics?: MusicCreateNestedManyWithoutListsInput
    Users?: UserCreateNestedManyWithoutListsInput
  }

  export type MusicListUncheckedCreateInput = {
    id?: string
    name: string
    avater?: string | null
    type: string
    MusicIds?: MusicListCreateMusicIdsInput | string[]
    UserIds?: MusicListCreateUserIdsInput | string[]
    Musics?: MusicUncheckedCreateNestedManyWithoutListsInput
    Users?: UserUncheckedCreateNestedManyWithoutListsInput
  }

  export type MusicListUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    avater?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    Musics?: MusicUpdateManyWithoutListsNestedInput
    Users?: UserUpdateManyWithoutListsNestedInput
  }

  export type MusicListUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    avater?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    MusicIds?: MusicListUpdateMusicIdsInput | string[]
    UserIds?: MusicListUpdateUserIdsInput | string[]
    Musics?: MusicUncheckedUpdateManyWithoutListsNestedInput
    Users?: UserUncheckedUpdateManyWithoutListsNestedInput
  }

  export type MusicListCreateManyInput = {
    id?: string
    name: string
    avater?: string | null
    type: string
    MusicIds?: MusicListCreateMusicIdsInput | string[]
    UserIds?: MusicListCreateUserIdsInput | string[]
  }

  export type MusicListUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    avater?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
  }

  export type MusicListUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    avater?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    MusicIds?: MusicListUpdateMusicIdsInput | string[]
    UserIds?: MusicListUpdateUserIdsInput | string[]
  }

  export type VideoCreateInput = {
    id?: string
    avater: string
    url: string
    Music: MusicCreateNestedOneWithoutVideoInput
  }

  export type VideoUncheckedCreateInput = {
    id?: string
    avater: string
    url: string
    MusicId: string
  }

  export type VideoUpdateInput = {
    avater?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    Music?: MusicUpdateOneRequiredWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateInput = {
    avater?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    MusicId?: StringFieldUpdateOperationsInput | string
  }

  export type VideoCreateManyInput = {
    id?: string
    avater: string
    url: string
    MusicId: string
  }

  export type VideoUpdateManyMutationInput = {
    avater?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type VideoUncheckedUpdateManyInput = {
    avater?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    MusicId?: StringFieldUpdateOperationsInput | string
  }

  export type LyricCreateInput = {
    id?: string
    url: string
    Music: MusicCreateNestedOneWithoutLyricInput
  }

  export type LyricUncheckedCreateInput = {
    id?: string
    url: string
    MusicId: string
  }

  export type LyricUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    Music?: MusicUpdateOneRequiredWithoutLyricNestedInput
  }

  export type LyricUncheckedUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    MusicId?: StringFieldUpdateOperationsInput | string
  }

  export type LyricCreateManyInput = {
    id?: string
    url: string
    MusicId: string
  }

  export type LyricUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type LyricUncheckedUpdateManyInput = {
    url?: StringFieldUpdateOperationsInput | string
    MusicId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type MusicListListRelationFilter = {
    every?: MusicListWhereInput
    some?: MusicListWhereInput
    none?: MusicListWhereInput
  }

  export type MusicListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avater?: SortOrder
    password?: SortOrder
    ListIds?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avater?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avater?: SortOrder
    password?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type VideoNullableScalarRelationFilter = {
    is?: VideoWhereInput | null
    isNot?: VideoWhereInput | null
  }

  export type LyricNullableScalarRelationFilter = {
    is?: LyricWhereInput | null
    isNot?: LyricWhereInput | null
  }

  export type MusicCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    singer?: SortOrder
    path?: SortOrder
    duration?: SortOrder
    avater?: SortOrder
    ListIds?: SortOrder
  }

  export type MusicAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type MusicMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    path?: SortOrder
    duration?: SortOrder
    avater?: SortOrder
  }

  export type MusicMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    path?: SortOrder
    duration?: SortOrder
    avater?: SortOrder
  }

  export type MusicSumOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type MusicListRelationFilter = {
    every?: MusicWhereInput
    some?: MusicWhereInput
    none?: MusicWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type MusicOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MusicListCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    avater?: SortOrder
    type?: SortOrder
    MusicIds?: SortOrder
    UserIds?: SortOrder
  }

  export type MusicListMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    avater?: SortOrder
    type?: SortOrder
  }

  export type MusicListMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    avater?: SortOrder
    type?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type MusicScalarRelationFilter = {
    is?: MusicWhereInput
    isNot?: MusicWhereInput
  }

  export type VideoCountOrderByAggregateInput = {
    id?: SortOrder
    avater?: SortOrder
    url?: SortOrder
    MusicId?: SortOrder
  }

  export type VideoMaxOrderByAggregateInput = {
    id?: SortOrder
    avater?: SortOrder
    url?: SortOrder
    MusicId?: SortOrder
  }

  export type VideoMinOrderByAggregateInput = {
    id?: SortOrder
    avater?: SortOrder
    url?: SortOrder
    MusicId?: SortOrder
  }

  export type LyricCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    MusicId?: SortOrder
  }

  export type LyricMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    MusicId?: SortOrder
  }

  export type LyricMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    MusicId?: SortOrder
  }

  export type MusicListCreateNestedManyWithoutUsersInput = {
    create?: XOR<MusicListCreateWithoutUsersInput, MusicListUncheckedCreateWithoutUsersInput> | MusicListCreateWithoutUsersInput[] | MusicListUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: MusicListCreateOrConnectWithoutUsersInput | MusicListCreateOrConnectWithoutUsersInput[]
    connect?: MusicListWhereUniqueInput | MusicListWhereUniqueInput[]
  }

  export type UserCreateListIdsInput = {
    set: string[]
  }

  export type MusicListUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<MusicListCreateWithoutUsersInput, MusicListUncheckedCreateWithoutUsersInput> | MusicListCreateWithoutUsersInput[] | MusicListUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: MusicListCreateOrConnectWithoutUsersInput | MusicListCreateOrConnectWithoutUsersInput[]
    connect?: MusicListWhereUniqueInput | MusicListWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type MusicListUpdateManyWithoutUsersNestedInput = {
    create?: XOR<MusicListCreateWithoutUsersInput, MusicListUncheckedCreateWithoutUsersInput> | MusicListCreateWithoutUsersInput[] | MusicListUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: MusicListCreateOrConnectWithoutUsersInput | MusicListCreateOrConnectWithoutUsersInput[]
    upsert?: MusicListUpsertWithWhereUniqueWithoutUsersInput | MusicListUpsertWithWhereUniqueWithoutUsersInput[]
    set?: MusicListWhereUniqueInput | MusicListWhereUniqueInput[]
    disconnect?: MusicListWhereUniqueInput | MusicListWhereUniqueInput[]
    delete?: MusicListWhereUniqueInput | MusicListWhereUniqueInput[]
    connect?: MusicListWhereUniqueInput | MusicListWhereUniqueInput[]
    update?: MusicListUpdateWithWhereUniqueWithoutUsersInput | MusicListUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: MusicListUpdateManyWithWhereWithoutUsersInput | MusicListUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: MusicListScalarWhereInput | MusicListScalarWhereInput[]
  }

  export type UserUpdateListIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MusicListUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<MusicListCreateWithoutUsersInput, MusicListUncheckedCreateWithoutUsersInput> | MusicListCreateWithoutUsersInput[] | MusicListUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: MusicListCreateOrConnectWithoutUsersInput | MusicListCreateOrConnectWithoutUsersInput[]
    upsert?: MusicListUpsertWithWhereUniqueWithoutUsersInput | MusicListUpsertWithWhereUniqueWithoutUsersInput[]
    set?: MusicListWhereUniqueInput | MusicListWhereUniqueInput[]
    disconnect?: MusicListWhereUniqueInput | MusicListWhereUniqueInput[]
    delete?: MusicListWhereUniqueInput | MusicListWhereUniqueInput[]
    connect?: MusicListWhereUniqueInput | MusicListWhereUniqueInput[]
    update?: MusicListUpdateWithWhereUniqueWithoutUsersInput | MusicListUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: MusicListUpdateManyWithWhereWithoutUsersInput | MusicListUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: MusicListScalarWhereInput | MusicListScalarWhereInput[]
  }

  export type MusicCreatesingerInput = {
    set: string[]
  }

  export type VideoCreateNestedOneWithoutMusicInput = {
    create?: XOR<VideoCreateWithoutMusicInput, VideoUncheckedCreateWithoutMusicInput>
    connectOrCreate?: VideoCreateOrConnectWithoutMusicInput
    connect?: VideoWhereUniqueInput
  }

  export type LyricCreateNestedOneWithoutMusicInput = {
    create?: XOR<LyricCreateWithoutMusicInput, LyricUncheckedCreateWithoutMusicInput>
    connectOrCreate?: LyricCreateOrConnectWithoutMusicInput
    connect?: LyricWhereUniqueInput
  }

  export type MusicListCreateNestedManyWithoutMusicsInput = {
    create?: XOR<MusicListCreateWithoutMusicsInput, MusicListUncheckedCreateWithoutMusicsInput> | MusicListCreateWithoutMusicsInput[] | MusicListUncheckedCreateWithoutMusicsInput[]
    connectOrCreate?: MusicListCreateOrConnectWithoutMusicsInput | MusicListCreateOrConnectWithoutMusicsInput[]
    connect?: MusicListWhereUniqueInput | MusicListWhereUniqueInput[]
  }

  export type MusicCreateListIdsInput = {
    set: string[]
  }

  export type VideoUncheckedCreateNestedOneWithoutMusicInput = {
    create?: XOR<VideoCreateWithoutMusicInput, VideoUncheckedCreateWithoutMusicInput>
    connectOrCreate?: VideoCreateOrConnectWithoutMusicInput
    connect?: VideoWhereUniqueInput
  }

  export type LyricUncheckedCreateNestedOneWithoutMusicInput = {
    create?: XOR<LyricCreateWithoutMusicInput, LyricUncheckedCreateWithoutMusicInput>
    connectOrCreate?: LyricCreateOrConnectWithoutMusicInput
    connect?: LyricWhereUniqueInput
  }

  export type MusicListUncheckedCreateNestedManyWithoutMusicsInput = {
    create?: XOR<MusicListCreateWithoutMusicsInput, MusicListUncheckedCreateWithoutMusicsInput> | MusicListCreateWithoutMusicsInput[] | MusicListUncheckedCreateWithoutMusicsInput[]
    connectOrCreate?: MusicListCreateOrConnectWithoutMusicsInput | MusicListCreateOrConnectWithoutMusicsInput[]
    connect?: MusicListWhereUniqueInput | MusicListWhereUniqueInput[]
  }

  export type MusicUpdatesingerInput = {
    set?: string[]
    push?: string | string[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VideoUpdateOneWithoutMusicNestedInput = {
    create?: XOR<VideoCreateWithoutMusicInput, VideoUncheckedCreateWithoutMusicInput>
    connectOrCreate?: VideoCreateOrConnectWithoutMusicInput
    upsert?: VideoUpsertWithoutMusicInput
    disconnect?: VideoWhereInput | boolean
    delete?: VideoWhereInput | boolean
    connect?: VideoWhereUniqueInput
    update?: XOR<XOR<VideoUpdateToOneWithWhereWithoutMusicInput, VideoUpdateWithoutMusicInput>, VideoUncheckedUpdateWithoutMusicInput>
  }

  export type LyricUpdateOneWithoutMusicNestedInput = {
    create?: XOR<LyricCreateWithoutMusicInput, LyricUncheckedCreateWithoutMusicInput>
    connectOrCreate?: LyricCreateOrConnectWithoutMusicInput
    upsert?: LyricUpsertWithoutMusicInput
    disconnect?: LyricWhereInput | boolean
    delete?: LyricWhereInput | boolean
    connect?: LyricWhereUniqueInput
    update?: XOR<XOR<LyricUpdateToOneWithWhereWithoutMusicInput, LyricUpdateWithoutMusicInput>, LyricUncheckedUpdateWithoutMusicInput>
  }

  export type MusicListUpdateManyWithoutMusicsNestedInput = {
    create?: XOR<MusicListCreateWithoutMusicsInput, MusicListUncheckedCreateWithoutMusicsInput> | MusicListCreateWithoutMusicsInput[] | MusicListUncheckedCreateWithoutMusicsInput[]
    connectOrCreate?: MusicListCreateOrConnectWithoutMusicsInput | MusicListCreateOrConnectWithoutMusicsInput[]
    upsert?: MusicListUpsertWithWhereUniqueWithoutMusicsInput | MusicListUpsertWithWhereUniqueWithoutMusicsInput[]
    set?: MusicListWhereUniqueInput | MusicListWhereUniqueInput[]
    disconnect?: MusicListWhereUniqueInput | MusicListWhereUniqueInput[]
    delete?: MusicListWhereUniqueInput | MusicListWhereUniqueInput[]
    connect?: MusicListWhereUniqueInput | MusicListWhereUniqueInput[]
    update?: MusicListUpdateWithWhereUniqueWithoutMusicsInput | MusicListUpdateWithWhereUniqueWithoutMusicsInput[]
    updateMany?: MusicListUpdateManyWithWhereWithoutMusicsInput | MusicListUpdateManyWithWhereWithoutMusicsInput[]
    deleteMany?: MusicListScalarWhereInput | MusicListScalarWhereInput[]
  }

  export type MusicUpdateListIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type VideoUncheckedUpdateOneWithoutMusicNestedInput = {
    create?: XOR<VideoCreateWithoutMusicInput, VideoUncheckedCreateWithoutMusicInput>
    connectOrCreate?: VideoCreateOrConnectWithoutMusicInput
    upsert?: VideoUpsertWithoutMusicInput
    disconnect?: VideoWhereInput | boolean
    delete?: VideoWhereInput | boolean
    connect?: VideoWhereUniqueInput
    update?: XOR<XOR<VideoUpdateToOneWithWhereWithoutMusicInput, VideoUpdateWithoutMusicInput>, VideoUncheckedUpdateWithoutMusicInput>
  }

  export type LyricUncheckedUpdateOneWithoutMusicNestedInput = {
    create?: XOR<LyricCreateWithoutMusicInput, LyricUncheckedCreateWithoutMusicInput>
    connectOrCreate?: LyricCreateOrConnectWithoutMusicInput
    upsert?: LyricUpsertWithoutMusicInput
    disconnect?: LyricWhereInput | boolean
    delete?: LyricWhereInput | boolean
    connect?: LyricWhereUniqueInput
    update?: XOR<XOR<LyricUpdateToOneWithWhereWithoutMusicInput, LyricUpdateWithoutMusicInput>, LyricUncheckedUpdateWithoutMusicInput>
  }

  export type MusicListUncheckedUpdateManyWithoutMusicsNestedInput = {
    create?: XOR<MusicListCreateWithoutMusicsInput, MusicListUncheckedCreateWithoutMusicsInput> | MusicListCreateWithoutMusicsInput[] | MusicListUncheckedCreateWithoutMusicsInput[]
    connectOrCreate?: MusicListCreateOrConnectWithoutMusicsInput | MusicListCreateOrConnectWithoutMusicsInput[]
    upsert?: MusicListUpsertWithWhereUniqueWithoutMusicsInput | MusicListUpsertWithWhereUniqueWithoutMusicsInput[]
    set?: MusicListWhereUniqueInput | MusicListWhereUniqueInput[]
    disconnect?: MusicListWhereUniqueInput | MusicListWhereUniqueInput[]
    delete?: MusicListWhereUniqueInput | MusicListWhereUniqueInput[]
    connect?: MusicListWhereUniqueInput | MusicListWhereUniqueInput[]
    update?: MusicListUpdateWithWhereUniqueWithoutMusicsInput | MusicListUpdateWithWhereUniqueWithoutMusicsInput[]
    updateMany?: MusicListUpdateManyWithWhereWithoutMusicsInput | MusicListUpdateManyWithWhereWithoutMusicsInput[]
    deleteMany?: MusicListScalarWhereInput | MusicListScalarWhereInput[]
  }

  export type MusicCreateNestedManyWithoutListsInput = {
    create?: XOR<MusicCreateWithoutListsInput, MusicUncheckedCreateWithoutListsInput> | MusicCreateWithoutListsInput[] | MusicUncheckedCreateWithoutListsInput[]
    connectOrCreate?: MusicCreateOrConnectWithoutListsInput | MusicCreateOrConnectWithoutListsInput[]
    connect?: MusicWhereUniqueInput | MusicWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutListsInput = {
    create?: XOR<UserCreateWithoutListsInput, UserUncheckedCreateWithoutListsInput> | UserCreateWithoutListsInput[] | UserUncheckedCreateWithoutListsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutListsInput | UserCreateOrConnectWithoutListsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type MusicListCreateMusicIdsInput = {
    set: string[]
  }

  export type MusicListCreateUserIdsInput = {
    set: string[]
  }

  export type MusicUncheckedCreateNestedManyWithoutListsInput = {
    create?: XOR<MusicCreateWithoutListsInput, MusicUncheckedCreateWithoutListsInput> | MusicCreateWithoutListsInput[] | MusicUncheckedCreateWithoutListsInput[]
    connectOrCreate?: MusicCreateOrConnectWithoutListsInput | MusicCreateOrConnectWithoutListsInput[]
    connect?: MusicWhereUniqueInput | MusicWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutListsInput = {
    create?: XOR<UserCreateWithoutListsInput, UserUncheckedCreateWithoutListsInput> | UserCreateWithoutListsInput[] | UserUncheckedCreateWithoutListsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutListsInput | UserCreateOrConnectWithoutListsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type MusicUpdateManyWithoutListsNestedInput = {
    create?: XOR<MusicCreateWithoutListsInput, MusicUncheckedCreateWithoutListsInput> | MusicCreateWithoutListsInput[] | MusicUncheckedCreateWithoutListsInput[]
    connectOrCreate?: MusicCreateOrConnectWithoutListsInput | MusicCreateOrConnectWithoutListsInput[]
    upsert?: MusicUpsertWithWhereUniqueWithoutListsInput | MusicUpsertWithWhereUniqueWithoutListsInput[]
    set?: MusicWhereUniqueInput | MusicWhereUniqueInput[]
    disconnect?: MusicWhereUniqueInput | MusicWhereUniqueInput[]
    delete?: MusicWhereUniqueInput | MusicWhereUniqueInput[]
    connect?: MusicWhereUniqueInput | MusicWhereUniqueInput[]
    update?: MusicUpdateWithWhereUniqueWithoutListsInput | MusicUpdateWithWhereUniqueWithoutListsInput[]
    updateMany?: MusicUpdateManyWithWhereWithoutListsInput | MusicUpdateManyWithWhereWithoutListsInput[]
    deleteMany?: MusicScalarWhereInput | MusicScalarWhereInput[]
  }

  export type UserUpdateManyWithoutListsNestedInput = {
    create?: XOR<UserCreateWithoutListsInput, UserUncheckedCreateWithoutListsInput> | UserCreateWithoutListsInput[] | UserUncheckedCreateWithoutListsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutListsInput | UserCreateOrConnectWithoutListsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutListsInput | UserUpsertWithWhereUniqueWithoutListsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutListsInput | UserUpdateWithWhereUniqueWithoutListsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutListsInput | UserUpdateManyWithWhereWithoutListsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type MusicListUpdateMusicIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MusicListUpdateUserIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MusicUncheckedUpdateManyWithoutListsNestedInput = {
    create?: XOR<MusicCreateWithoutListsInput, MusicUncheckedCreateWithoutListsInput> | MusicCreateWithoutListsInput[] | MusicUncheckedCreateWithoutListsInput[]
    connectOrCreate?: MusicCreateOrConnectWithoutListsInput | MusicCreateOrConnectWithoutListsInput[]
    upsert?: MusicUpsertWithWhereUniqueWithoutListsInput | MusicUpsertWithWhereUniqueWithoutListsInput[]
    set?: MusicWhereUniqueInput | MusicWhereUniqueInput[]
    disconnect?: MusicWhereUniqueInput | MusicWhereUniqueInput[]
    delete?: MusicWhereUniqueInput | MusicWhereUniqueInput[]
    connect?: MusicWhereUniqueInput | MusicWhereUniqueInput[]
    update?: MusicUpdateWithWhereUniqueWithoutListsInput | MusicUpdateWithWhereUniqueWithoutListsInput[]
    updateMany?: MusicUpdateManyWithWhereWithoutListsInput | MusicUpdateManyWithWhereWithoutListsInput[]
    deleteMany?: MusicScalarWhereInput | MusicScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutListsNestedInput = {
    create?: XOR<UserCreateWithoutListsInput, UserUncheckedCreateWithoutListsInput> | UserCreateWithoutListsInput[] | UserUncheckedCreateWithoutListsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutListsInput | UserCreateOrConnectWithoutListsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutListsInput | UserUpsertWithWhereUniqueWithoutListsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutListsInput | UserUpdateWithWhereUniqueWithoutListsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutListsInput | UserUpdateManyWithWhereWithoutListsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type MusicCreateNestedOneWithoutVideoInput = {
    create?: XOR<MusicCreateWithoutVideoInput, MusicUncheckedCreateWithoutVideoInput>
    connectOrCreate?: MusicCreateOrConnectWithoutVideoInput
    connect?: MusicWhereUniqueInput
  }

  export type MusicUpdateOneRequiredWithoutVideoNestedInput = {
    create?: XOR<MusicCreateWithoutVideoInput, MusicUncheckedCreateWithoutVideoInput>
    connectOrCreate?: MusicCreateOrConnectWithoutVideoInput
    upsert?: MusicUpsertWithoutVideoInput
    connect?: MusicWhereUniqueInput
    update?: XOR<XOR<MusicUpdateToOneWithWhereWithoutVideoInput, MusicUpdateWithoutVideoInput>, MusicUncheckedUpdateWithoutVideoInput>
  }

  export type MusicCreateNestedOneWithoutLyricInput = {
    create?: XOR<MusicCreateWithoutLyricInput, MusicUncheckedCreateWithoutLyricInput>
    connectOrCreate?: MusicCreateOrConnectWithoutLyricInput
    connect?: MusicWhereUniqueInput
  }

  export type MusicUpdateOneRequiredWithoutLyricNestedInput = {
    create?: XOR<MusicCreateWithoutLyricInput, MusicUncheckedCreateWithoutLyricInput>
    connectOrCreate?: MusicCreateOrConnectWithoutLyricInput
    upsert?: MusicUpsertWithoutLyricInput
    connect?: MusicWhereUniqueInput
    update?: XOR<XOR<MusicUpdateToOneWithWhereWithoutLyricInput, MusicUpdateWithoutLyricInput>, MusicUncheckedUpdateWithoutLyricInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type MusicListCreateWithoutUsersInput = {
    id?: string
    name: string
    avater?: string | null
    type: string
    Musics?: MusicCreateNestedManyWithoutListsInput
  }

  export type MusicListUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    avater?: string | null
    type: string
    MusicIds?: MusicListCreateMusicIdsInput | string[]
    UserIds?: MusicListCreateUserIdsInput | string[]
    Musics?: MusicUncheckedCreateNestedManyWithoutListsInput
  }

  export type MusicListCreateOrConnectWithoutUsersInput = {
    where: MusicListWhereUniqueInput
    create: XOR<MusicListCreateWithoutUsersInput, MusicListUncheckedCreateWithoutUsersInput>
  }

  export type MusicListUpsertWithWhereUniqueWithoutUsersInput = {
    where: MusicListWhereUniqueInput
    update: XOR<MusicListUpdateWithoutUsersInput, MusicListUncheckedUpdateWithoutUsersInput>
    create: XOR<MusicListCreateWithoutUsersInput, MusicListUncheckedCreateWithoutUsersInput>
  }

  export type MusicListUpdateWithWhereUniqueWithoutUsersInput = {
    where: MusicListWhereUniqueInput
    data: XOR<MusicListUpdateWithoutUsersInput, MusicListUncheckedUpdateWithoutUsersInput>
  }

  export type MusicListUpdateManyWithWhereWithoutUsersInput = {
    where: MusicListScalarWhereInput
    data: XOR<MusicListUpdateManyMutationInput, MusicListUncheckedUpdateManyWithoutUsersInput>
  }

  export type MusicListScalarWhereInput = {
    AND?: MusicListScalarWhereInput | MusicListScalarWhereInput[]
    OR?: MusicListScalarWhereInput[]
    NOT?: MusicListScalarWhereInput | MusicListScalarWhereInput[]
    id?: StringFilter<"MusicList"> | string
    name?: StringFilter<"MusicList"> | string
    avater?: StringNullableFilter<"MusicList"> | string | null
    type?: StringFilter<"MusicList"> | string
    MusicIds?: StringNullableListFilter<"MusicList">
    UserIds?: StringNullableListFilter<"MusicList">
  }

  export type VideoCreateWithoutMusicInput = {
    id?: string
    avater: string
    url: string
  }

  export type VideoUncheckedCreateWithoutMusicInput = {
    id?: string
    avater: string
    url: string
  }

  export type VideoCreateOrConnectWithoutMusicInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutMusicInput, VideoUncheckedCreateWithoutMusicInput>
  }

  export type LyricCreateWithoutMusicInput = {
    id?: string
    url: string
  }

  export type LyricUncheckedCreateWithoutMusicInput = {
    id?: string
    url: string
  }

  export type LyricCreateOrConnectWithoutMusicInput = {
    where: LyricWhereUniqueInput
    create: XOR<LyricCreateWithoutMusicInput, LyricUncheckedCreateWithoutMusicInput>
  }

  export type MusicListCreateWithoutMusicsInput = {
    id?: string
    name: string
    avater?: string | null
    type: string
    Users?: UserCreateNestedManyWithoutListsInput
  }

  export type MusicListUncheckedCreateWithoutMusicsInput = {
    id?: string
    name: string
    avater?: string | null
    type: string
    MusicIds?: MusicListCreateMusicIdsInput | string[]
    UserIds?: MusicListCreateUserIdsInput | string[]
    Users?: UserUncheckedCreateNestedManyWithoutListsInput
  }

  export type MusicListCreateOrConnectWithoutMusicsInput = {
    where: MusicListWhereUniqueInput
    create: XOR<MusicListCreateWithoutMusicsInput, MusicListUncheckedCreateWithoutMusicsInput>
  }

  export type VideoUpsertWithoutMusicInput = {
    update: XOR<VideoUpdateWithoutMusicInput, VideoUncheckedUpdateWithoutMusicInput>
    create: XOR<VideoCreateWithoutMusicInput, VideoUncheckedCreateWithoutMusicInput>
    where?: VideoWhereInput
  }

  export type VideoUpdateToOneWithWhereWithoutMusicInput = {
    where?: VideoWhereInput
    data: XOR<VideoUpdateWithoutMusicInput, VideoUncheckedUpdateWithoutMusicInput>
  }

  export type VideoUpdateWithoutMusicInput = {
    avater?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type VideoUncheckedUpdateWithoutMusicInput = {
    avater?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type LyricUpsertWithoutMusicInput = {
    update: XOR<LyricUpdateWithoutMusicInput, LyricUncheckedUpdateWithoutMusicInput>
    create: XOR<LyricCreateWithoutMusicInput, LyricUncheckedCreateWithoutMusicInput>
    where?: LyricWhereInput
  }

  export type LyricUpdateToOneWithWhereWithoutMusicInput = {
    where?: LyricWhereInput
    data: XOR<LyricUpdateWithoutMusicInput, LyricUncheckedUpdateWithoutMusicInput>
  }

  export type LyricUpdateWithoutMusicInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type LyricUncheckedUpdateWithoutMusicInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type MusicListUpsertWithWhereUniqueWithoutMusicsInput = {
    where: MusicListWhereUniqueInput
    update: XOR<MusicListUpdateWithoutMusicsInput, MusicListUncheckedUpdateWithoutMusicsInput>
    create: XOR<MusicListCreateWithoutMusicsInput, MusicListUncheckedCreateWithoutMusicsInput>
  }

  export type MusicListUpdateWithWhereUniqueWithoutMusicsInput = {
    where: MusicListWhereUniqueInput
    data: XOR<MusicListUpdateWithoutMusicsInput, MusicListUncheckedUpdateWithoutMusicsInput>
  }

  export type MusicListUpdateManyWithWhereWithoutMusicsInput = {
    where: MusicListScalarWhereInput
    data: XOR<MusicListUpdateManyMutationInput, MusicListUncheckedUpdateManyWithoutMusicsInput>
  }

  export type MusicCreateWithoutListsInput = {
    id?: string
    name: string
    singer?: MusicCreatesingerInput | string[]
    path: string
    duration: number
    avater: string
    video?: VideoCreateNestedOneWithoutMusicInput
    lyric?: LyricCreateNestedOneWithoutMusicInput
  }

  export type MusicUncheckedCreateWithoutListsInput = {
    id?: string
    name: string
    singer?: MusicCreatesingerInput | string[]
    path: string
    duration: number
    avater: string
    ListIds?: MusicCreateListIdsInput | string[]
    video?: VideoUncheckedCreateNestedOneWithoutMusicInput
    lyric?: LyricUncheckedCreateNestedOneWithoutMusicInput
  }

  export type MusicCreateOrConnectWithoutListsInput = {
    where: MusicWhereUniqueInput
    create: XOR<MusicCreateWithoutListsInput, MusicUncheckedCreateWithoutListsInput>
  }

  export type UserCreateWithoutListsInput = {
    id?: string
    email: string
    name: string
    avater: string
    password: string
  }

  export type UserUncheckedCreateWithoutListsInput = {
    id?: string
    email: string
    name: string
    avater: string
    password: string
    ListIds?: UserCreateListIdsInput | string[]
  }

  export type UserCreateOrConnectWithoutListsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutListsInput, UserUncheckedCreateWithoutListsInput>
  }

  export type MusicUpsertWithWhereUniqueWithoutListsInput = {
    where: MusicWhereUniqueInput
    update: XOR<MusicUpdateWithoutListsInput, MusicUncheckedUpdateWithoutListsInput>
    create: XOR<MusicCreateWithoutListsInput, MusicUncheckedCreateWithoutListsInput>
  }

  export type MusicUpdateWithWhereUniqueWithoutListsInput = {
    where: MusicWhereUniqueInput
    data: XOR<MusicUpdateWithoutListsInput, MusicUncheckedUpdateWithoutListsInput>
  }

  export type MusicUpdateManyWithWhereWithoutListsInput = {
    where: MusicScalarWhereInput
    data: XOR<MusicUpdateManyMutationInput, MusicUncheckedUpdateManyWithoutListsInput>
  }

  export type MusicScalarWhereInput = {
    AND?: MusicScalarWhereInput | MusicScalarWhereInput[]
    OR?: MusicScalarWhereInput[]
    NOT?: MusicScalarWhereInput | MusicScalarWhereInput[]
    id?: StringFilter<"Music"> | string
    name?: StringFilter<"Music"> | string
    singer?: StringNullableListFilter<"Music">
    path?: StringFilter<"Music"> | string
    duration?: IntFilter<"Music"> | number
    avater?: StringFilter<"Music"> | string
    ListIds?: StringNullableListFilter<"Music">
  }

  export type UserUpsertWithWhereUniqueWithoutListsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutListsInput, UserUncheckedUpdateWithoutListsInput>
    create: XOR<UserCreateWithoutListsInput, UserUncheckedCreateWithoutListsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutListsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutListsInput, UserUncheckedUpdateWithoutListsInput>
  }

  export type UserUpdateManyWithWhereWithoutListsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutListsInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    avater?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    ListIds?: StringNullableListFilter<"User">
  }

  export type MusicCreateWithoutVideoInput = {
    id?: string
    name: string
    singer?: MusicCreatesingerInput | string[]
    path: string
    duration: number
    avater: string
    lyric?: LyricCreateNestedOneWithoutMusicInput
    Lists?: MusicListCreateNestedManyWithoutMusicsInput
  }

  export type MusicUncheckedCreateWithoutVideoInput = {
    id?: string
    name: string
    singer?: MusicCreatesingerInput | string[]
    path: string
    duration: number
    avater: string
    ListIds?: MusicCreateListIdsInput | string[]
    lyric?: LyricUncheckedCreateNestedOneWithoutMusicInput
    Lists?: MusicListUncheckedCreateNestedManyWithoutMusicsInput
  }

  export type MusicCreateOrConnectWithoutVideoInput = {
    where: MusicWhereUniqueInput
    create: XOR<MusicCreateWithoutVideoInput, MusicUncheckedCreateWithoutVideoInput>
  }

  export type MusicUpsertWithoutVideoInput = {
    update: XOR<MusicUpdateWithoutVideoInput, MusicUncheckedUpdateWithoutVideoInput>
    create: XOR<MusicCreateWithoutVideoInput, MusicUncheckedCreateWithoutVideoInput>
    where?: MusicWhereInput
  }

  export type MusicUpdateToOneWithWhereWithoutVideoInput = {
    where?: MusicWhereInput
    data: XOR<MusicUpdateWithoutVideoInput, MusicUncheckedUpdateWithoutVideoInput>
  }

  export type MusicUpdateWithoutVideoInput = {
    name?: StringFieldUpdateOperationsInput | string
    singer?: MusicUpdatesingerInput | string[]
    path?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    avater?: StringFieldUpdateOperationsInput | string
    lyric?: LyricUpdateOneWithoutMusicNestedInput
    Lists?: MusicListUpdateManyWithoutMusicsNestedInput
  }

  export type MusicUncheckedUpdateWithoutVideoInput = {
    name?: StringFieldUpdateOperationsInput | string
    singer?: MusicUpdatesingerInput | string[]
    path?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    avater?: StringFieldUpdateOperationsInput | string
    ListIds?: MusicUpdateListIdsInput | string[]
    lyric?: LyricUncheckedUpdateOneWithoutMusicNestedInput
    Lists?: MusicListUncheckedUpdateManyWithoutMusicsNestedInput
  }

  export type MusicCreateWithoutLyricInput = {
    id?: string
    name: string
    singer?: MusicCreatesingerInput | string[]
    path: string
    duration: number
    avater: string
    video?: VideoCreateNestedOneWithoutMusicInput
    Lists?: MusicListCreateNestedManyWithoutMusicsInput
  }

  export type MusicUncheckedCreateWithoutLyricInput = {
    id?: string
    name: string
    singer?: MusicCreatesingerInput | string[]
    path: string
    duration: number
    avater: string
    ListIds?: MusicCreateListIdsInput | string[]
    video?: VideoUncheckedCreateNestedOneWithoutMusicInput
    Lists?: MusicListUncheckedCreateNestedManyWithoutMusicsInput
  }

  export type MusicCreateOrConnectWithoutLyricInput = {
    where: MusicWhereUniqueInput
    create: XOR<MusicCreateWithoutLyricInput, MusicUncheckedCreateWithoutLyricInput>
  }

  export type MusicUpsertWithoutLyricInput = {
    update: XOR<MusicUpdateWithoutLyricInput, MusicUncheckedUpdateWithoutLyricInput>
    create: XOR<MusicCreateWithoutLyricInput, MusicUncheckedCreateWithoutLyricInput>
    where?: MusicWhereInput
  }

  export type MusicUpdateToOneWithWhereWithoutLyricInput = {
    where?: MusicWhereInput
    data: XOR<MusicUpdateWithoutLyricInput, MusicUncheckedUpdateWithoutLyricInput>
  }

  export type MusicUpdateWithoutLyricInput = {
    name?: StringFieldUpdateOperationsInput | string
    singer?: MusicUpdatesingerInput | string[]
    path?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    avater?: StringFieldUpdateOperationsInput | string
    video?: VideoUpdateOneWithoutMusicNestedInput
    Lists?: MusicListUpdateManyWithoutMusicsNestedInput
  }

  export type MusicUncheckedUpdateWithoutLyricInput = {
    name?: StringFieldUpdateOperationsInput | string
    singer?: MusicUpdatesingerInput | string[]
    path?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    avater?: StringFieldUpdateOperationsInput | string
    ListIds?: MusicUpdateListIdsInput | string[]
    video?: VideoUncheckedUpdateOneWithoutMusicNestedInput
    Lists?: MusicListUncheckedUpdateManyWithoutMusicsNestedInput
  }

  export type MusicListUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    avater?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    Musics?: MusicUpdateManyWithoutListsNestedInput
  }

  export type MusicListUncheckedUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    avater?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    MusicIds?: MusicListUpdateMusicIdsInput | string[]
    UserIds?: MusicListUpdateUserIdsInput | string[]
    Musics?: MusicUncheckedUpdateManyWithoutListsNestedInput
  }

  export type MusicListUncheckedUpdateManyWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    avater?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    MusicIds?: MusicListUpdateMusicIdsInput | string[]
    UserIds?: MusicListUpdateUserIdsInput | string[]
  }

  export type MusicListUpdateWithoutMusicsInput = {
    name?: StringFieldUpdateOperationsInput | string
    avater?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    Users?: UserUpdateManyWithoutListsNestedInput
  }

  export type MusicListUncheckedUpdateWithoutMusicsInput = {
    name?: StringFieldUpdateOperationsInput | string
    avater?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    MusicIds?: MusicListUpdateMusicIdsInput | string[]
    UserIds?: MusicListUpdateUserIdsInput | string[]
    Users?: UserUncheckedUpdateManyWithoutListsNestedInput
  }

  export type MusicListUncheckedUpdateManyWithoutMusicsInput = {
    name?: StringFieldUpdateOperationsInput | string
    avater?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    MusicIds?: MusicListUpdateMusicIdsInput | string[]
    UserIds?: MusicListUpdateUserIdsInput | string[]
  }

  export type MusicUpdateWithoutListsInput = {
    name?: StringFieldUpdateOperationsInput | string
    singer?: MusicUpdatesingerInput | string[]
    path?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    avater?: StringFieldUpdateOperationsInput | string
    video?: VideoUpdateOneWithoutMusicNestedInput
    lyric?: LyricUpdateOneWithoutMusicNestedInput
  }

  export type MusicUncheckedUpdateWithoutListsInput = {
    name?: StringFieldUpdateOperationsInput | string
    singer?: MusicUpdatesingerInput | string[]
    path?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    avater?: StringFieldUpdateOperationsInput | string
    ListIds?: MusicUpdateListIdsInput | string[]
    video?: VideoUncheckedUpdateOneWithoutMusicNestedInput
    lyric?: LyricUncheckedUpdateOneWithoutMusicNestedInput
  }

  export type MusicUncheckedUpdateManyWithoutListsInput = {
    name?: StringFieldUpdateOperationsInput | string
    singer?: MusicUpdatesingerInput | string[]
    path?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    avater?: StringFieldUpdateOperationsInput | string
    ListIds?: MusicUpdateListIdsInput | string[]
  }

  export type UserUpdateWithoutListsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avater?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutListsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avater?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ListIds?: UserUpdateListIdsInput | string[]
  }

  export type UserUncheckedUpdateManyWithoutListsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avater?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ListIds?: UserUpdateListIdsInput | string[]
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}