
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
 * Model tbl_user
 * 
 */
export type tbl_user = $Result.DefaultSelection<Prisma.$tbl_userPayload>
/**
 * Model tbl_recuperacao_senha
 * 
 */
export type tbl_recuperacao_senha = $Result.DefaultSelection<Prisma.$tbl_recuperacao_senhaPayload>
/**
 * Model tbl_comentario
 * 
 */
export type tbl_comentario = $Result.DefaultSelection<Prisma.$tbl_comentarioPayload>
/**
 * Model tbl_curtida
 * 
 */
export type tbl_curtida = $Result.DefaultSelection<Prisma.$tbl_curtidaPayload>
/**
 * Model tbl_curtida_comentario
 * 
 */
export type tbl_curtida_comentario = $Result.DefaultSelection<Prisma.$tbl_curtida_comentarioPayload>
/**
 * Model tbl_exercicio
 * 
 */
export type tbl_exercicio = $Result.DefaultSelection<Prisma.$tbl_exercicioPayload>
/**
 * Model tbl_exercicio_treino
 * 
 */
export type tbl_exercicio_treino = $Result.DefaultSelection<Prisma.$tbl_exercicio_treinoPayload>
/**
 * Model tbl_notificacao
 * 
 */
export type tbl_notificacao = $Result.DefaultSelection<Prisma.$tbl_notificacaoPayload>
/**
 * Model tbl_publicacao
 * 
 */
export type tbl_publicacao = $Result.DefaultSelection<Prisma.$tbl_publicacaoPayload>
/**
 * Model tbl_serie
 * 
 */
export type tbl_serie = $Result.DefaultSelection<Prisma.$tbl_seriePayload>
/**
 * Model tbl_treino
 * 
 */
export type tbl_treino = $Result.DefaultSelection<Prisma.$tbl_treinoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tbl_users
 * const tbl_users = await prisma.tbl_user.findMany()
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
   * // Fetch zero or more Tbl_users
   * const tbl_users = await prisma.tbl_user.findMany()
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.tbl_user`: Exposes CRUD operations for the **tbl_user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_users
    * const tbl_users = await prisma.tbl_user.findMany()
    * ```
    */
  get tbl_user(): Prisma.tbl_userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_recuperacao_senha`: Exposes CRUD operations for the **tbl_recuperacao_senha** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_recuperacao_senhas
    * const tbl_recuperacao_senhas = await prisma.tbl_recuperacao_senha.findMany()
    * ```
    */
  get tbl_recuperacao_senha(): Prisma.tbl_recuperacao_senhaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_comentario`: Exposes CRUD operations for the **tbl_comentario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_comentarios
    * const tbl_comentarios = await prisma.tbl_comentario.findMany()
    * ```
    */
  get tbl_comentario(): Prisma.tbl_comentarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_curtida`: Exposes CRUD operations for the **tbl_curtida** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_curtidas
    * const tbl_curtidas = await prisma.tbl_curtida.findMany()
    * ```
    */
  get tbl_curtida(): Prisma.tbl_curtidaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_curtida_comentario`: Exposes CRUD operations for the **tbl_curtida_comentario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_curtida_comentarios
    * const tbl_curtida_comentarios = await prisma.tbl_curtida_comentario.findMany()
    * ```
    */
  get tbl_curtida_comentario(): Prisma.tbl_curtida_comentarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_exercicio`: Exposes CRUD operations for the **tbl_exercicio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_exercicios
    * const tbl_exercicios = await prisma.tbl_exercicio.findMany()
    * ```
    */
  get tbl_exercicio(): Prisma.tbl_exercicioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_exercicio_treino`: Exposes CRUD operations for the **tbl_exercicio_treino** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_exercicio_treinos
    * const tbl_exercicio_treinos = await prisma.tbl_exercicio_treino.findMany()
    * ```
    */
  get tbl_exercicio_treino(): Prisma.tbl_exercicio_treinoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_notificacao`: Exposes CRUD operations for the **tbl_notificacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_notificacaos
    * const tbl_notificacaos = await prisma.tbl_notificacao.findMany()
    * ```
    */
  get tbl_notificacao(): Prisma.tbl_notificacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_publicacao`: Exposes CRUD operations for the **tbl_publicacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_publicacaos
    * const tbl_publicacaos = await prisma.tbl_publicacao.findMany()
    * ```
    */
  get tbl_publicacao(): Prisma.tbl_publicacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_serie`: Exposes CRUD operations for the **tbl_serie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_series
    * const tbl_series = await prisma.tbl_serie.findMany()
    * ```
    */
  get tbl_serie(): Prisma.tbl_serieDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_treino`: Exposes CRUD operations for the **tbl_treino** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_treinos
    * const tbl_treinos = await prisma.tbl_treino.findMany()
    * ```
    */
  get tbl_treino(): Prisma.tbl_treinoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    tbl_user: 'tbl_user',
    tbl_recuperacao_senha: 'tbl_recuperacao_senha',
    tbl_comentario: 'tbl_comentario',
    tbl_curtida: 'tbl_curtida',
    tbl_curtida_comentario: 'tbl_curtida_comentario',
    tbl_exercicio: 'tbl_exercicio',
    tbl_exercicio_treino: 'tbl_exercicio_treino',
    tbl_notificacao: 'tbl_notificacao',
    tbl_publicacao: 'tbl_publicacao',
    tbl_serie: 'tbl_serie',
    tbl_treino: 'tbl_treino'
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
      modelProps: "tbl_user" | "tbl_recuperacao_senha" | "tbl_comentario" | "tbl_curtida" | "tbl_curtida_comentario" | "tbl_exercicio" | "tbl_exercicio_treino" | "tbl_notificacao" | "tbl_publicacao" | "tbl_serie" | "tbl_treino"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      tbl_user: {
        payload: Prisma.$tbl_userPayload<ExtArgs>
        fields: Prisma.tbl_userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_userPayload>
          }
          findFirst: {
            args: Prisma.tbl_userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_userPayload>
          }
          findMany: {
            args: Prisma.tbl_userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_userPayload>[]
          }
          create: {
            args: Prisma.tbl_userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_userPayload>
          }
          createMany: {
            args: Prisma.tbl_userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tbl_userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_userPayload>
          }
          update: {
            args: Prisma.tbl_userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_userPayload>
          }
          deleteMany: {
            args: Prisma.tbl_userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tbl_userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_userPayload>
          }
          aggregate: {
            args: Prisma.Tbl_userAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_user>
          }
          groupBy: {
            args: Prisma.tbl_userGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_userGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_userCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_userCountAggregateOutputType> | number
          }
        }
      }
      tbl_recuperacao_senha: {
        payload: Prisma.$tbl_recuperacao_senhaPayload<ExtArgs>
        fields: Prisma.tbl_recuperacao_senhaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_recuperacao_senhaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_recuperacao_senhaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_recuperacao_senhaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_recuperacao_senhaPayload>
          }
          findFirst: {
            args: Prisma.tbl_recuperacao_senhaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_recuperacao_senhaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_recuperacao_senhaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_recuperacao_senhaPayload>
          }
          findMany: {
            args: Prisma.tbl_recuperacao_senhaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_recuperacao_senhaPayload>[]
          }
          create: {
            args: Prisma.tbl_recuperacao_senhaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_recuperacao_senhaPayload>
          }
          createMany: {
            args: Prisma.tbl_recuperacao_senhaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tbl_recuperacao_senhaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_recuperacao_senhaPayload>
          }
          update: {
            args: Prisma.tbl_recuperacao_senhaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_recuperacao_senhaPayload>
          }
          deleteMany: {
            args: Prisma.tbl_recuperacao_senhaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_recuperacao_senhaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tbl_recuperacao_senhaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_recuperacao_senhaPayload>
          }
          aggregate: {
            args: Prisma.Tbl_recuperacao_senhaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_recuperacao_senha>
          }
          groupBy: {
            args: Prisma.tbl_recuperacao_senhaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_recuperacao_senhaGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_recuperacao_senhaCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_recuperacao_senhaCountAggregateOutputType> | number
          }
        }
      }
      tbl_comentario: {
        payload: Prisma.$tbl_comentarioPayload<ExtArgs>
        fields: Prisma.tbl_comentarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_comentarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_comentarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_comentarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_comentarioPayload>
          }
          findFirst: {
            args: Prisma.tbl_comentarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_comentarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_comentarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_comentarioPayload>
          }
          findMany: {
            args: Prisma.tbl_comentarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_comentarioPayload>[]
          }
          create: {
            args: Prisma.tbl_comentarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_comentarioPayload>
          }
          createMany: {
            args: Prisma.tbl_comentarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tbl_comentarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_comentarioPayload>
          }
          update: {
            args: Prisma.tbl_comentarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_comentarioPayload>
          }
          deleteMany: {
            args: Prisma.tbl_comentarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_comentarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tbl_comentarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_comentarioPayload>
          }
          aggregate: {
            args: Prisma.Tbl_comentarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_comentario>
          }
          groupBy: {
            args: Prisma.tbl_comentarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_comentarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_comentarioCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_comentarioCountAggregateOutputType> | number
          }
        }
      }
      tbl_curtida: {
        payload: Prisma.$tbl_curtidaPayload<ExtArgs>
        fields: Prisma.tbl_curtidaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_curtidaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_curtidaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_curtidaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_curtidaPayload>
          }
          findFirst: {
            args: Prisma.tbl_curtidaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_curtidaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_curtidaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_curtidaPayload>
          }
          findMany: {
            args: Prisma.tbl_curtidaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_curtidaPayload>[]
          }
          create: {
            args: Prisma.tbl_curtidaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_curtidaPayload>
          }
          createMany: {
            args: Prisma.tbl_curtidaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tbl_curtidaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_curtidaPayload>
          }
          update: {
            args: Prisma.tbl_curtidaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_curtidaPayload>
          }
          deleteMany: {
            args: Prisma.tbl_curtidaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_curtidaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tbl_curtidaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_curtidaPayload>
          }
          aggregate: {
            args: Prisma.Tbl_curtidaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_curtida>
          }
          groupBy: {
            args: Prisma.tbl_curtidaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_curtidaGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_curtidaCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_curtidaCountAggregateOutputType> | number
          }
        }
      }
      tbl_curtida_comentario: {
        payload: Prisma.$tbl_curtida_comentarioPayload<ExtArgs>
        fields: Prisma.tbl_curtida_comentarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_curtida_comentarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_curtida_comentarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_curtida_comentarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_curtida_comentarioPayload>
          }
          findFirst: {
            args: Prisma.tbl_curtida_comentarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_curtida_comentarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_curtida_comentarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_curtida_comentarioPayload>
          }
          findMany: {
            args: Prisma.tbl_curtida_comentarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_curtida_comentarioPayload>[]
          }
          create: {
            args: Prisma.tbl_curtida_comentarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_curtida_comentarioPayload>
          }
          createMany: {
            args: Prisma.tbl_curtida_comentarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tbl_curtida_comentarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_curtida_comentarioPayload>
          }
          update: {
            args: Prisma.tbl_curtida_comentarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_curtida_comentarioPayload>
          }
          deleteMany: {
            args: Prisma.tbl_curtida_comentarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_curtida_comentarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tbl_curtida_comentarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_curtida_comentarioPayload>
          }
          aggregate: {
            args: Prisma.Tbl_curtida_comentarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_curtida_comentario>
          }
          groupBy: {
            args: Prisma.tbl_curtida_comentarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_curtida_comentarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_curtida_comentarioCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_curtida_comentarioCountAggregateOutputType> | number
          }
        }
      }
      tbl_exercicio: {
        payload: Prisma.$tbl_exercicioPayload<ExtArgs>
        fields: Prisma.tbl_exercicioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_exercicioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_exercicioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_exercicioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_exercicioPayload>
          }
          findFirst: {
            args: Prisma.tbl_exercicioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_exercicioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_exercicioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_exercicioPayload>
          }
          findMany: {
            args: Prisma.tbl_exercicioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_exercicioPayload>[]
          }
          create: {
            args: Prisma.tbl_exercicioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_exercicioPayload>
          }
          createMany: {
            args: Prisma.tbl_exercicioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tbl_exercicioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_exercicioPayload>
          }
          update: {
            args: Prisma.tbl_exercicioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_exercicioPayload>
          }
          deleteMany: {
            args: Prisma.tbl_exercicioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_exercicioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tbl_exercicioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_exercicioPayload>
          }
          aggregate: {
            args: Prisma.Tbl_exercicioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_exercicio>
          }
          groupBy: {
            args: Prisma.tbl_exercicioGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_exercicioGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_exercicioCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_exercicioCountAggregateOutputType> | number
          }
        }
      }
      tbl_exercicio_treino: {
        payload: Prisma.$tbl_exercicio_treinoPayload<ExtArgs>
        fields: Prisma.tbl_exercicio_treinoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_exercicio_treinoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_exercicio_treinoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_exercicio_treinoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_exercicio_treinoPayload>
          }
          findFirst: {
            args: Prisma.tbl_exercicio_treinoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_exercicio_treinoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_exercicio_treinoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_exercicio_treinoPayload>
          }
          findMany: {
            args: Prisma.tbl_exercicio_treinoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_exercicio_treinoPayload>[]
          }
          create: {
            args: Prisma.tbl_exercicio_treinoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_exercicio_treinoPayload>
          }
          createMany: {
            args: Prisma.tbl_exercicio_treinoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tbl_exercicio_treinoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_exercicio_treinoPayload>
          }
          update: {
            args: Prisma.tbl_exercicio_treinoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_exercicio_treinoPayload>
          }
          deleteMany: {
            args: Prisma.tbl_exercicio_treinoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_exercicio_treinoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tbl_exercicio_treinoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_exercicio_treinoPayload>
          }
          aggregate: {
            args: Prisma.Tbl_exercicio_treinoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_exercicio_treino>
          }
          groupBy: {
            args: Prisma.tbl_exercicio_treinoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_exercicio_treinoGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_exercicio_treinoCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_exercicio_treinoCountAggregateOutputType> | number
          }
        }
      }
      tbl_notificacao: {
        payload: Prisma.$tbl_notificacaoPayload<ExtArgs>
        fields: Prisma.tbl_notificacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_notificacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_notificacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_notificacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_notificacaoPayload>
          }
          findFirst: {
            args: Prisma.tbl_notificacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_notificacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_notificacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_notificacaoPayload>
          }
          findMany: {
            args: Prisma.tbl_notificacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_notificacaoPayload>[]
          }
          create: {
            args: Prisma.tbl_notificacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_notificacaoPayload>
          }
          createMany: {
            args: Prisma.tbl_notificacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tbl_notificacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_notificacaoPayload>
          }
          update: {
            args: Prisma.tbl_notificacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_notificacaoPayload>
          }
          deleteMany: {
            args: Prisma.tbl_notificacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_notificacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tbl_notificacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_notificacaoPayload>
          }
          aggregate: {
            args: Prisma.Tbl_notificacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_notificacao>
          }
          groupBy: {
            args: Prisma.tbl_notificacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_notificacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_notificacaoCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_notificacaoCountAggregateOutputType> | number
          }
        }
      }
      tbl_publicacao: {
        payload: Prisma.$tbl_publicacaoPayload<ExtArgs>
        fields: Prisma.tbl_publicacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_publicacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_publicacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_publicacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_publicacaoPayload>
          }
          findFirst: {
            args: Prisma.tbl_publicacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_publicacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_publicacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_publicacaoPayload>
          }
          findMany: {
            args: Prisma.tbl_publicacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_publicacaoPayload>[]
          }
          create: {
            args: Prisma.tbl_publicacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_publicacaoPayload>
          }
          createMany: {
            args: Prisma.tbl_publicacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tbl_publicacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_publicacaoPayload>
          }
          update: {
            args: Prisma.tbl_publicacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_publicacaoPayload>
          }
          deleteMany: {
            args: Prisma.tbl_publicacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_publicacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tbl_publicacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_publicacaoPayload>
          }
          aggregate: {
            args: Prisma.Tbl_publicacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_publicacao>
          }
          groupBy: {
            args: Prisma.tbl_publicacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_publicacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_publicacaoCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_publicacaoCountAggregateOutputType> | number
          }
        }
      }
      tbl_serie: {
        payload: Prisma.$tbl_seriePayload<ExtArgs>
        fields: Prisma.tbl_serieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_serieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_seriePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_serieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_seriePayload>
          }
          findFirst: {
            args: Prisma.tbl_serieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_seriePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_serieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_seriePayload>
          }
          findMany: {
            args: Prisma.tbl_serieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_seriePayload>[]
          }
          create: {
            args: Prisma.tbl_serieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_seriePayload>
          }
          createMany: {
            args: Prisma.tbl_serieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tbl_serieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_seriePayload>
          }
          update: {
            args: Prisma.tbl_serieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_seriePayload>
          }
          deleteMany: {
            args: Prisma.tbl_serieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_serieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tbl_serieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_seriePayload>
          }
          aggregate: {
            args: Prisma.Tbl_serieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_serie>
          }
          groupBy: {
            args: Prisma.tbl_serieGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_serieGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_serieCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_serieCountAggregateOutputType> | number
          }
        }
      }
      tbl_treino: {
        payload: Prisma.$tbl_treinoPayload<ExtArgs>
        fields: Prisma.tbl_treinoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_treinoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_treinoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_treinoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_treinoPayload>
          }
          findFirst: {
            args: Prisma.tbl_treinoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_treinoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_treinoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_treinoPayload>
          }
          findMany: {
            args: Prisma.tbl_treinoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_treinoPayload>[]
          }
          create: {
            args: Prisma.tbl_treinoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_treinoPayload>
          }
          createMany: {
            args: Prisma.tbl_treinoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tbl_treinoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_treinoPayload>
          }
          update: {
            args: Prisma.tbl_treinoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_treinoPayload>
          }
          deleteMany: {
            args: Prisma.tbl_treinoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_treinoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tbl_treinoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_treinoPayload>
          }
          aggregate: {
            args: Prisma.Tbl_treinoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_treino>
          }
          groupBy: {
            args: Prisma.tbl_treinoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_treinoGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_treinoCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_treinoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
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
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    tbl_user?: tbl_userOmit
    tbl_recuperacao_senha?: tbl_recuperacao_senhaOmit
    tbl_comentario?: tbl_comentarioOmit
    tbl_curtida?: tbl_curtidaOmit
    tbl_curtida_comentario?: tbl_curtida_comentarioOmit
    tbl_exercicio?: tbl_exercicioOmit
    tbl_exercicio_treino?: tbl_exercicio_treinoOmit
    tbl_notificacao?: tbl_notificacaoOmit
    tbl_publicacao?: tbl_publicacaoOmit
    tbl_serie?: tbl_serieOmit
    tbl_treino?: tbl_treinoOmit
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
   * Count Type Tbl_userCountOutputType
   */

  export type Tbl_userCountOutputType = {
    tbl_comentario: number
    tbl_curtida: number
    tbl_curtida_comentario: number
    tbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_user: number
    tbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_user: number
    tbl_publicacao: number
    recuperacaoSenha: number
    tbl_treino: number
  }

  export type Tbl_userCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tbl_comentario?: boolean | Tbl_userCountOutputTypeCountTbl_comentarioArgs
    tbl_curtida?: boolean | Tbl_userCountOutputTypeCountTbl_curtidaArgs
    tbl_curtida_comentario?: boolean | Tbl_userCountOutputTypeCountTbl_curtida_comentarioArgs
    tbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_user?: boolean | Tbl_userCountOutputTypeCountTbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_userArgs
    tbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_user?: boolean | Tbl_userCountOutputTypeCountTbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_userArgs
    tbl_publicacao?: boolean | Tbl_userCountOutputTypeCountTbl_publicacaoArgs
    recuperacaoSenha?: boolean | Tbl_userCountOutputTypeCountRecuperacaoSenhaArgs
    tbl_treino?: boolean | Tbl_userCountOutputTypeCountTbl_treinoArgs
  }

  // Custom InputTypes
  /**
   * Tbl_userCountOutputType without action
   */
  export type Tbl_userCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tbl_userCountOutputType
     */
    select?: Tbl_userCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tbl_userCountOutputType without action
   */
  export type Tbl_userCountOutputTypeCountTbl_comentarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_comentarioWhereInput
  }

  /**
   * Tbl_userCountOutputType without action
   */
  export type Tbl_userCountOutputTypeCountTbl_curtidaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_curtidaWhereInput
  }

  /**
   * Tbl_userCountOutputType without action
   */
  export type Tbl_userCountOutputTypeCountTbl_curtida_comentarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_curtida_comentarioWhereInput
  }

  /**
   * Tbl_userCountOutputType without action
   */
  export type Tbl_userCountOutputTypeCountTbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_notificacaoWhereInput
  }

  /**
   * Tbl_userCountOutputType without action
   */
  export type Tbl_userCountOutputTypeCountTbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_notificacaoWhereInput
  }

  /**
   * Tbl_userCountOutputType without action
   */
  export type Tbl_userCountOutputTypeCountTbl_publicacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_publicacaoWhereInput
  }

  /**
   * Tbl_userCountOutputType without action
   */
  export type Tbl_userCountOutputTypeCountRecuperacaoSenhaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_recuperacao_senhaWhereInput
  }

  /**
   * Tbl_userCountOutputType without action
   */
  export type Tbl_userCountOutputTypeCountTbl_treinoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_treinoWhereInput
  }


  /**
   * Count Type Tbl_comentarioCountOutputType
   */

  export type Tbl_comentarioCountOutputType = {
    tbl_curtida_comentario: number
    tbl_notificacao: number
  }

  export type Tbl_comentarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tbl_curtida_comentario?: boolean | Tbl_comentarioCountOutputTypeCountTbl_curtida_comentarioArgs
    tbl_notificacao?: boolean | Tbl_comentarioCountOutputTypeCountTbl_notificacaoArgs
  }

  // Custom InputTypes
  /**
   * Tbl_comentarioCountOutputType without action
   */
  export type Tbl_comentarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tbl_comentarioCountOutputType
     */
    select?: Tbl_comentarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tbl_comentarioCountOutputType without action
   */
  export type Tbl_comentarioCountOutputTypeCountTbl_curtida_comentarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_curtida_comentarioWhereInput
  }

  /**
   * Tbl_comentarioCountOutputType without action
   */
  export type Tbl_comentarioCountOutputTypeCountTbl_notificacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_notificacaoWhereInput
  }


  /**
   * Count Type Tbl_curtidaCountOutputType
   */

  export type Tbl_curtidaCountOutputType = {
    tbl_notificacao: number
  }

  export type Tbl_curtidaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tbl_notificacao?: boolean | Tbl_curtidaCountOutputTypeCountTbl_notificacaoArgs
  }

  // Custom InputTypes
  /**
   * Tbl_curtidaCountOutputType without action
   */
  export type Tbl_curtidaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tbl_curtidaCountOutputType
     */
    select?: Tbl_curtidaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tbl_curtidaCountOutputType without action
   */
  export type Tbl_curtidaCountOutputTypeCountTbl_notificacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_notificacaoWhereInput
  }


  /**
   * Count Type Tbl_curtida_comentarioCountOutputType
   */

  export type Tbl_curtida_comentarioCountOutputType = {
    tbl_notificacao: number
  }

  export type Tbl_curtida_comentarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tbl_notificacao?: boolean | Tbl_curtida_comentarioCountOutputTypeCountTbl_notificacaoArgs
  }

  // Custom InputTypes
  /**
   * Tbl_curtida_comentarioCountOutputType without action
   */
  export type Tbl_curtida_comentarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tbl_curtida_comentarioCountOutputType
     */
    select?: Tbl_curtida_comentarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tbl_curtida_comentarioCountOutputType without action
   */
  export type Tbl_curtida_comentarioCountOutputTypeCountTbl_notificacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_notificacaoWhereInput
  }


  /**
   * Count Type Tbl_exercicioCountOutputType
   */

  export type Tbl_exercicioCountOutputType = {
    tbl_exercicio_treino: number
    tbl_serie: number
  }

  export type Tbl_exercicioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tbl_exercicio_treino?: boolean | Tbl_exercicioCountOutputTypeCountTbl_exercicio_treinoArgs
    tbl_serie?: boolean | Tbl_exercicioCountOutputTypeCountTbl_serieArgs
  }

  // Custom InputTypes
  /**
   * Tbl_exercicioCountOutputType without action
   */
  export type Tbl_exercicioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tbl_exercicioCountOutputType
     */
    select?: Tbl_exercicioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tbl_exercicioCountOutputType without action
   */
  export type Tbl_exercicioCountOutputTypeCountTbl_exercicio_treinoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_exercicio_treinoWhereInput
  }

  /**
   * Tbl_exercicioCountOutputType without action
   */
  export type Tbl_exercicioCountOutputTypeCountTbl_serieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_serieWhereInput
  }


  /**
   * Count Type Tbl_publicacaoCountOutputType
   */

  export type Tbl_publicacaoCountOutputType = {
    tbl_comentario: number
    tbl_curtida: number
    tbl_notificacao: number
  }

  export type Tbl_publicacaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tbl_comentario?: boolean | Tbl_publicacaoCountOutputTypeCountTbl_comentarioArgs
    tbl_curtida?: boolean | Tbl_publicacaoCountOutputTypeCountTbl_curtidaArgs
    tbl_notificacao?: boolean | Tbl_publicacaoCountOutputTypeCountTbl_notificacaoArgs
  }

  // Custom InputTypes
  /**
   * Tbl_publicacaoCountOutputType without action
   */
  export type Tbl_publicacaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tbl_publicacaoCountOutputType
     */
    select?: Tbl_publicacaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tbl_publicacaoCountOutputType without action
   */
  export type Tbl_publicacaoCountOutputTypeCountTbl_comentarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_comentarioWhereInput
  }

  /**
   * Tbl_publicacaoCountOutputType without action
   */
  export type Tbl_publicacaoCountOutputTypeCountTbl_curtidaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_curtidaWhereInput
  }

  /**
   * Tbl_publicacaoCountOutputType without action
   */
  export type Tbl_publicacaoCountOutputTypeCountTbl_notificacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_notificacaoWhereInput
  }


  /**
   * Count Type Tbl_serieCountOutputType
   */

  export type Tbl_serieCountOutputType = {
    tbl_exercicio_treino: number
  }

  export type Tbl_serieCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tbl_exercicio_treino?: boolean | Tbl_serieCountOutputTypeCountTbl_exercicio_treinoArgs
  }

  // Custom InputTypes
  /**
   * Tbl_serieCountOutputType without action
   */
  export type Tbl_serieCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tbl_serieCountOutputType
     */
    select?: Tbl_serieCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tbl_serieCountOutputType without action
   */
  export type Tbl_serieCountOutputTypeCountTbl_exercicio_treinoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_exercicio_treinoWhereInput
  }


  /**
   * Count Type Tbl_treinoCountOutputType
   */

  export type Tbl_treinoCountOutputType = {
    tbl_exercicio_treino: number
  }

  export type Tbl_treinoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tbl_exercicio_treino?: boolean | Tbl_treinoCountOutputTypeCountTbl_exercicio_treinoArgs
  }

  // Custom InputTypes
  /**
   * Tbl_treinoCountOutputType without action
   */
  export type Tbl_treinoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tbl_treinoCountOutputType
     */
    select?: Tbl_treinoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tbl_treinoCountOutputType without action
   */
  export type Tbl_treinoCountOutputTypeCountTbl_exercicio_treinoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_exercicio_treinoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model tbl_user
   */

  export type AggregateTbl_user = {
    _count: Tbl_userCountAggregateOutputType | null
    _avg: Tbl_userAvgAggregateOutputType | null
    _sum: Tbl_userSumAggregateOutputType | null
    _min: Tbl_userMinAggregateOutputType | null
    _max: Tbl_userMaxAggregateOutputType | null
  }

  export type Tbl_userAvgAggregateOutputType = {
    id: number | null
    peso: Decimal | null
    altura: Decimal | null
    imc: Decimal | null
  }

  export type Tbl_userSumAggregateOutputType = {
    id: number | null
    peso: Decimal | null
    altura: Decimal | null
    imc: Decimal | null
  }

  export type Tbl_userMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    peso: Decimal | null
    altura: Decimal | null
    imc: Decimal | null
    nickname: string | null
    data_nascimento: Date | null
    foto: string | null
    descricao: string | null
    localizacao: string | null
    is_bloqueado: boolean | null
  }

  export type Tbl_userMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    peso: Decimal | null
    altura: Decimal | null
    imc: Decimal | null
    nickname: string | null
    data_nascimento: Date | null
    foto: string | null
    descricao: string | null
    localizacao: string | null
    is_bloqueado: boolean | null
  }

  export type Tbl_userCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha: number
    peso: number
    altura: number
    imc: number
    nickname: number
    data_nascimento: number
    foto: number
    descricao: number
    localizacao: number
    is_bloqueado: number
    _all: number
  }


  export type Tbl_userAvgAggregateInputType = {
    id?: true
    peso?: true
    altura?: true
    imc?: true
  }

  export type Tbl_userSumAggregateInputType = {
    id?: true
    peso?: true
    altura?: true
    imc?: true
  }

  export type Tbl_userMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    peso?: true
    altura?: true
    imc?: true
    nickname?: true
    data_nascimento?: true
    foto?: true
    descricao?: true
    localizacao?: true
    is_bloqueado?: true
  }

  export type Tbl_userMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    peso?: true
    altura?: true
    imc?: true
    nickname?: true
    data_nascimento?: true
    foto?: true
    descricao?: true
    localizacao?: true
    is_bloqueado?: true
  }

  export type Tbl_userCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    peso?: true
    altura?: true
    imc?: true
    nickname?: true
    data_nascimento?: true
    foto?: true
    descricao?: true
    localizacao?: true
    is_bloqueado?: true
    _all?: true
  }

  export type Tbl_userAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_user to aggregate.
     */
    where?: tbl_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_users to fetch.
     */
    orderBy?: tbl_userOrderByWithRelationInput | tbl_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_users
    **/
    _count?: true | Tbl_userCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_userAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_userSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_userMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_userMaxAggregateInputType
  }

  export type GetTbl_userAggregateType<T extends Tbl_userAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_user]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_user[P]>
      : GetScalarType<T[P], AggregateTbl_user[P]>
  }




  export type tbl_userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_userWhereInput
    orderBy?: tbl_userOrderByWithAggregationInput | tbl_userOrderByWithAggregationInput[]
    by: Tbl_userScalarFieldEnum[] | Tbl_userScalarFieldEnum
    having?: tbl_userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_userCountAggregateInputType | true
    _avg?: Tbl_userAvgAggregateInputType
    _sum?: Tbl_userSumAggregateInputType
    _min?: Tbl_userMinAggregateInputType
    _max?: Tbl_userMaxAggregateInputType
  }

  export type Tbl_userGroupByOutputType = {
    id: number
    nome: string
    email: string
    senha: string
    peso: Decimal | null
    altura: Decimal | null
    imc: Decimal | null
    nickname: string
    data_nascimento: Date | null
    foto: string | null
    descricao: string | null
    localizacao: string | null
    is_bloqueado: boolean | null
    _count: Tbl_userCountAggregateOutputType | null
    _avg: Tbl_userAvgAggregateOutputType | null
    _sum: Tbl_userSumAggregateOutputType | null
    _min: Tbl_userMinAggregateOutputType | null
    _max: Tbl_userMaxAggregateOutputType | null
  }

  type GetTbl_userGroupByPayload<T extends tbl_userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_userGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_userGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_userGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_userGroupByOutputType[P]>
        }
      >
    >


  export type tbl_userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    peso?: boolean
    altura?: boolean
    imc?: boolean
    nickname?: boolean
    data_nascimento?: boolean
    foto?: boolean
    descricao?: boolean
    localizacao?: boolean
    is_bloqueado?: boolean
    tbl_comentario?: boolean | tbl_user$tbl_comentarioArgs<ExtArgs>
    tbl_curtida?: boolean | tbl_user$tbl_curtidaArgs<ExtArgs>
    tbl_curtida_comentario?: boolean | tbl_user$tbl_curtida_comentarioArgs<ExtArgs>
    tbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_user?: boolean | tbl_user$tbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_userArgs<ExtArgs>
    tbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_user?: boolean | tbl_user$tbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_userArgs<ExtArgs>
    tbl_publicacao?: boolean | tbl_user$tbl_publicacaoArgs<ExtArgs>
    recuperacaoSenha?: boolean | tbl_user$recuperacaoSenhaArgs<ExtArgs>
    tbl_treino?: boolean | tbl_user$tbl_treinoArgs<ExtArgs>
    _count?: boolean | Tbl_userCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_user"]>



  export type tbl_userSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    peso?: boolean
    altura?: boolean
    imc?: boolean
    nickname?: boolean
    data_nascimento?: boolean
    foto?: boolean
    descricao?: boolean
    localizacao?: boolean
    is_bloqueado?: boolean
  }

  export type tbl_userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "senha" | "peso" | "altura" | "imc" | "nickname" | "data_nascimento" | "foto" | "descricao" | "localizacao" | "is_bloqueado", ExtArgs["result"]["tbl_user"]>
  export type tbl_userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tbl_comentario?: boolean | tbl_user$tbl_comentarioArgs<ExtArgs>
    tbl_curtida?: boolean | tbl_user$tbl_curtidaArgs<ExtArgs>
    tbl_curtida_comentario?: boolean | tbl_user$tbl_curtida_comentarioArgs<ExtArgs>
    tbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_user?: boolean | tbl_user$tbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_userArgs<ExtArgs>
    tbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_user?: boolean | tbl_user$tbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_userArgs<ExtArgs>
    tbl_publicacao?: boolean | tbl_user$tbl_publicacaoArgs<ExtArgs>
    recuperacaoSenha?: boolean | tbl_user$recuperacaoSenhaArgs<ExtArgs>
    tbl_treino?: boolean | tbl_user$tbl_treinoArgs<ExtArgs>
    _count?: boolean | Tbl_userCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tbl_userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_user"
    objects: {
      tbl_comentario: Prisma.$tbl_comentarioPayload<ExtArgs>[]
      tbl_curtida: Prisma.$tbl_curtidaPayload<ExtArgs>[]
      tbl_curtida_comentario: Prisma.$tbl_curtida_comentarioPayload<ExtArgs>[]
      tbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_user: Prisma.$tbl_notificacaoPayload<ExtArgs>[]
      tbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_user: Prisma.$tbl_notificacaoPayload<ExtArgs>[]
      tbl_publicacao: Prisma.$tbl_publicacaoPayload<ExtArgs>[]
      recuperacaoSenha: Prisma.$tbl_recuperacao_senhaPayload<ExtArgs>[]
      tbl_treino: Prisma.$tbl_treinoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      senha: string
      peso: Prisma.Decimal | null
      altura: Prisma.Decimal | null
      imc: Prisma.Decimal | null
      nickname: string
      data_nascimento: Date | null
      foto: string | null
      descricao: string | null
      localizacao: string | null
      is_bloqueado: boolean | null
    }, ExtArgs["result"]["tbl_user"]>
    composites: {}
  }

  type tbl_userGetPayload<S extends boolean | null | undefined | tbl_userDefaultArgs> = $Result.GetResult<Prisma.$tbl_userPayload, S>

  type tbl_userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_userCountAggregateInputType | true
    }

  export interface tbl_userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_user'], meta: { name: 'tbl_user' } }
    /**
     * Find zero or one Tbl_user that matches the filter.
     * @param {tbl_userFindUniqueArgs} args - Arguments to find a Tbl_user
     * @example
     * // Get one Tbl_user
     * const tbl_user = await prisma.tbl_user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_userFindUniqueArgs>(args: SelectSubset<T, tbl_userFindUniqueArgs<ExtArgs>>): Prisma__tbl_userClient<$Result.GetResult<Prisma.$tbl_userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_user that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_userFindUniqueOrThrowArgs} args - Arguments to find a Tbl_user
     * @example
     * // Get one Tbl_user
     * const tbl_user = await prisma.tbl_user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_userFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_userClient<$Result.GetResult<Prisma.$tbl_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_user that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_userFindFirstArgs} args - Arguments to find a Tbl_user
     * @example
     * // Get one Tbl_user
     * const tbl_user = await prisma.tbl_user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_userFindFirstArgs>(args?: SelectSubset<T, tbl_userFindFirstArgs<ExtArgs>>): Prisma__tbl_userClient<$Result.GetResult<Prisma.$tbl_userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_user that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_userFindFirstOrThrowArgs} args - Arguments to find a Tbl_user
     * @example
     * // Get one Tbl_user
     * const tbl_user = await prisma.tbl_user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_userFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_userFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_userClient<$Result.GetResult<Prisma.$tbl_userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_users
     * const tbl_users = await prisma.tbl_user.findMany()
     * 
     * // Get first 10 Tbl_users
     * const tbl_users = await prisma.tbl_user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbl_userWithIdOnly = await prisma.tbl_user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tbl_userFindManyArgs>(args?: SelectSubset<T, tbl_userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_user.
     * @param {tbl_userCreateArgs} args - Arguments to create a Tbl_user.
     * @example
     * // Create one Tbl_user
     * const Tbl_user = await prisma.tbl_user.create({
     *   data: {
     *     // ... data to create a Tbl_user
     *   }
     * })
     * 
     */
    create<T extends tbl_userCreateArgs>(args: SelectSubset<T, tbl_userCreateArgs<ExtArgs>>): Prisma__tbl_userClient<$Result.GetResult<Prisma.$tbl_userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_users.
     * @param {tbl_userCreateManyArgs} args - Arguments to create many Tbl_users.
     * @example
     * // Create many Tbl_users
     * const tbl_user = await prisma.tbl_user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_userCreateManyArgs>(args?: SelectSubset<T, tbl_userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_user.
     * @param {tbl_userDeleteArgs} args - Arguments to delete one Tbl_user.
     * @example
     * // Delete one Tbl_user
     * const Tbl_user = await prisma.tbl_user.delete({
     *   where: {
     *     // ... filter to delete one Tbl_user
     *   }
     * })
     * 
     */
    delete<T extends tbl_userDeleteArgs>(args: SelectSubset<T, tbl_userDeleteArgs<ExtArgs>>): Prisma__tbl_userClient<$Result.GetResult<Prisma.$tbl_userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_user.
     * @param {tbl_userUpdateArgs} args - Arguments to update one Tbl_user.
     * @example
     * // Update one Tbl_user
     * const tbl_user = await prisma.tbl_user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_userUpdateArgs>(args: SelectSubset<T, tbl_userUpdateArgs<ExtArgs>>): Prisma__tbl_userClient<$Result.GetResult<Prisma.$tbl_userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_users.
     * @param {tbl_userDeleteManyArgs} args - Arguments to filter Tbl_users to delete.
     * @example
     * // Delete a few Tbl_users
     * const { count } = await prisma.tbl_user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_userDeleteManyArgs>(args?: SelectSubset<T, tbl_userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_users
     * const tbl_user = await prisma.tbl_user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_userUpdateManyArgs>(args: SelectSubset<T, tbl_userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_user.
     * @param {tbl_userUpsertArgs} args - Arguments to update or create a Tbl_user.
     * @example
     * // Update or create a Tbl_user
     * const tbl_user = await prisma.tbl_user.upsert({
     *   create: {
     *     // ... data to create a Tbl_user
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_user we want to update
     *   }
     * })
     */
    upsert<T extends tbl_userUpsertArgs>(args: SelectSubset<T, tbl_userUpsertArgs<ExtArgs>>): Prisma__tbl_userClient<$Result.GetResult<Prisma.$tbl_userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_userCountArgs} args - Arguments to filter Tbl_users to count.
     * @example
     * // Count the number of Tbl_users
     * const count = await prisma.tbl_user.count({
     *   where: {
     *     // ... the filter for the Tbl_users we want to count
     *   }
     * })
    **/
    count<T extends tbl_userCountArgs>(
      args?: Subset<T, tbl_userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_userCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_userAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tbl_userAggregateArgs>(args: Subset<T, Tbl_userAggregateArgs>): Prisma.PrismaPromise<GetTbl_userAggregateType<T>>

    /**
     * Group by Tbl_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_userGroupByArgs} args - Group by arguments.
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
      T extends tbl_userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_userGroupByArgs['orderBy'] }
        : { orderBy?: tbl_userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tbl_userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_userGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_user model
   */
  readonly fields: tbl_userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tbl_comentario<T extends tbl_user$tbl_comentarioArgs<ExtArgs> = {}>(args?: Subset<T, tbl_user$tbl_comentarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_comentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tbl_curtida<T extends tbl_user$tbl_curtidaArgs<ExtArgs> = {}>(args?: Subset<T, tbl_user$tbl_curtidaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_curtidaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tbl_curtida_comentario<T extends tbl_user$tbl_curtida_comentarioArgs<ExtArgs> = {}>(args?: Subset<T, tbl_user$tbl_curtida_comentarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_curtida_comentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_user<T extends tbl_user$tbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_userArgs<ExtArgs> = {}>(args?: Subset<T, tbl_user$tbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_notificacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_user<T extends tbl_user$tbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_userArgs<ExtArgs> = {}>(args?: Subset<T, tbl_user$tbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_notificacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tbl_publicacao<T extends tbl_user$tbl_publicacaoArgs<ExtArgs> = {}>(args?: Subset<T, tbl_user$tbl_publicacaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_publicacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recuperacaoSenha<T extends tbl_user$recuperacaoSenhaArgs<ExtArgs> = {}>(args?: Subset<T, tbl_user$recuperacaoSenhaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_recuperacao_senhaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tbl_treino<T extends tbl_user$tbl_treinoArgs<ExtArgs> = {}>(args?: Subset<T, tbl_user$tbl_treinoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_treinoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the tbl_user model
   */
  interface tbl_userFieldRefs {
    readonly id: FieldRef<"tbl_user", 'Int'>
    readonly nome: FieldRef<"tbl_user", 'String'>
    readonly email: FieldRef<"tbl_user", 'String'>
    readonly senha: FieldRef<"tbl_user", 'String'>
    readonly peso: FieldRef<"tbl_user", 'Decimal'>
    readonly altura: FieldRef<"tbl_user", 'Decimal'>
    readonly imc: FieldRef<"tbl_user", 'Decimal'>
    readonly nickname: FieldRef<"tbl_user", 'String'>
    readonly data_nascimento: FieldRef<"tbl_user", 'DateTime'>
    readonly foto: FieldRef<"tbl_user", 'String'>
    readonly descricao: FieldRef<"tbl_user", 'String'>
    readonly localizacao: FieldRef<"tbl_user", 'String'>
    readonly is_bloqueado: FieldRef<"tbl_user", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * tbl_user findUnique
   */
  export type tbl_userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_user
     */
    select?: tbl_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_user
     */
    omit?: tbl_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_userInclude<ExtArgs> | null
    /**
     * Filter, which tbl_user to fetch.
     */
    where: tbl_userWhereUniqueInput
  }

  /**
   * tbl_user findUniqueOrThrow
   */
  export type tbl_userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_user
     */
    select?: tbl_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_user
     */
    omit?: tbl_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_userInclude<ExtArgs> | null
    /**
     * Filter, which tbl_user to fetch.
     */
    where: tbl_userWhereUniqueInput
  }

  /**
   * tbl_user findFirst
   */
  export type tbl_userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_user
     */
    select?: tbl_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_user
     */
    omit?: tbl_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_userInclude<ExtArgs> | null
    /**
     * Filter, which tbl_user to fetch.
     */
    where?: tbl_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_users to fetch.
     */
    orderBy?: tbl_userOrderByWithRelationInput | tbl_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_users.
     */
    cursor?: tbl_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_users.
     */
    distinct?: Tbl_userScalarFieldEnum | Tbl_userScalarFieldEnum[]
  }

  /**
   * tbl_user findFirstOrThrow
   */
  export type tbl_userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_user
     */
    select?: tbl_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_user
     */
    omit?: tbl_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_userInclude<ExtArgs> | null
    /**
     * Filter, which tbl_user to fetch.
     */
    where?: tbl_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_users to fetch.
     */
    orderBy?: tbl_userOrderByWithRelationInput | tbl_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_users.
     */
    cursor?: tbl_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_users.
     */
    distinct?: Tbl_userScalarFieldEnum | Tbl_userScalarFieldEnum[]
  }

  /**
   * tbl_user findMany
   */
  export type tbl_userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_user
     */
    select?: tbl_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_user
     */
    omit?: tbl_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_userInclude<ExtArgs> | null
    /**
     * Filter, which tbl_users to fetch.
     */
    where?: tbl_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_users to fetch.
     */
    orderBy?: tbl_userOrderByWithRelationInput | tbl_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_users.
     */
    cursor?: tbl_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_users.
     */
    skip?: number
    distinct?: Tbl_userScalarFieldEnum | Tbl_userScalarFieldEnum[]
  }

  /**
   * tbl_user create
   */
  export type tbl_userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_user
     */
    select?: tbl_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_user
     */
    omit?: tbl_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_userInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_user.
     */
    data: XOR<tbl_userCreateInput, tbl_userUncheckedCreateInput>
  }

  /**
   * tbl_user createMany
   */
  export type tbl_userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_users.
     */
    data: tbl_userCreateManyInput | tbl_userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_user update
   */
  export type tbl_userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_user
     */
    select?: tbl_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_user
     */
    omit?: tbl_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_userInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_user.
     */
    data: XOR<tbl_userUpdateInput, tbl_userUncheckedUpdateInput>
    /**
     * Choose, which tbl_user to update.
     */
    where: tbl_userWhereUniqueInput
  }

  /**
   * tbl_user updateMany
   */
  export type tbl_userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_users.
     */
    data: XOR<tbl_userUpdateManyMutationInput, tbl_userUncheckedUpdateManyInput>
    /**
     * Filter which tbl_users to update
     */
    where?: tbl_userWhereInput
    /**
     * Limit how many tbl_users to update.
     */
    limit?: number
  }

  /**
   * tbl_user upsert
   */
  export type tbl_userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_user
     */
    select?: tbl_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_user
     */
    omit?: tbl_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_userInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_user to update in case it exists.
     */
    where: tbl_userWhereUniqueInput
    /**
     * In case the tbl_user found by the `where` argument doesn't exist, create a new tbl_user with this data.
     */
    create: XOR<tbl_userCreateInput, tbl_userUncheckedCreateInput>
    /**
     * In case the tbl_user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_userUpdateInput, tbl_userUncheckedUpdateInput>
  }

  /**
   * tbl_user delete
   */
  export type tbl_userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_user
     */
    select?: tbl_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_user
     */
    omit?: tbl_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_userInclude<ExtArgs> | null
    /**
     * Filter which tbl_user to delete.
     */
    where: tbl_userWhereUniqueInput
  }

  /**
   * tbl_user deleteMany
   */
  export type tbl_userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_users to delete
     */
    where?: tbl_userWhereInput
    /**
     * Limit how many tbl_users to delete.
     */
    limit?: number
  }

  /**
   * tbl_user.tbl_comentario
   */
  export type tbl_user$tbl_comentarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_comentario
     */
    select?: tbl_comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_comentario
     */
    omit?: tbl_comentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_comentarioInclude<ExtArgs> | null
    where?: tbl_comentarioWhereInput
    orderBy?: tbl_comentarioOrderByWithRelationInput | tbl_comentarioOrderByWithRelationInput[]
    cursor?: tbl_comentarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_comentarioScalarFieldEnum | Tbl_comentarioScalarFieldEnum[]
  }

  /**
   * tbl_user.tbl_curtida
   */
  export type tbl_user$tbl_curtidaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_curtida
     */
    select?: tbl_curtidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_curtida
     */
    omit?: tbl_curtidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_curtidaInclude<ExtArgs> | null
    where?: tbl_curtidaWhereInput
    orderBy?: tbl_curtidaOrderByWithRelationInput | tbl_curtidaOrderByWithRelationInput[]
    cursor?: tbl_curtidaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_curtidaScalarFieldEnum | Tbl_curtidaScalarFieldEnum[]
  }

  /**
   * tbl_user.tbl_curtida_comentario
   */
  export type tbl_user$tbl_curtida_comentarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_curtida_comentario
     */
    select?: tbl_curtida_comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_curtida_comentario
     */
    omit?: tbl_curtida_comentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_curtida_comentarioInclude<ExtArgs> | null
    where?: tbl_curtida_comentarioWhereInput
    orderBy?: tbl_curtida_comentarioOrderByWithRelationInput | tbl_curtida_comentarioOrderByWithRelationInput[]
    cursor?: tbl_curtida_comentarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_curtida_comentarioScalarFieldEnum | Tbl_curtida_comentarioScalarFieldEnum[]
  }

  /**
   * tbl_user.tbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_user
   */
  export type tbl_user$tbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_notificacao
     */
    select?: tbl_notificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_notificacao
     */
    omit?: tbl_notificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_notificacaoInclude<ExtArgs> | null
    where?: tbl_notificacaoWhereInput
    orderBy?: tbl_notificacaoOrderByWithRelationInput | tbl_notificacaoOrderByWithRelationInput[]
    cursor?: tbl_notificacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_notificacaoScalarFieldEnum | Tbl_notificacaoScalarFieldEnum[]
  }

  /**
   * tbl_user.tbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_user
   */
  export type tbl_user$tbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_notificacao
     */
    select?: tbl_notificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_notificacao
     */
    omit?: tbl_notificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_notificacaoInclude<ExtArgs> | null
    where?: tbl_notificacaoWhereInput
    orderBy?: tbl_notificacaoOrderByWithRelationInput | tbl_notificacaoOrderByWithRelationInput[]
    cursor?: tbl_notificacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_notificacaoScalarFieldEnum | Tbl_notificacaoScalarFieldEnum[]
  }

  /**
   * tbl_user.tbl_publicacao
   */
  export type tbl_user$tbl_publicacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_publicacao
     */
    select?: tbl_publicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_publicacao
     */
    omit?: tbl_publicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_publicacaoInclude<ExtArgs> | null
    where?: tbl_publicacaoWhereInput
    orderBy?: tbl_publicacaoOrderByWithRelationInput | tbl_publicacaoOrderByWithRelationInput[]
    cursor?: tbl_publicacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_publicacaoScalarFieldEnum | Tbl_publicacaoScalarFieldEnum[]
  }

  /**
   * tbl_user.recuperacaoSenha
   */
  export type tbl_user$recuperacaoSenhaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_recuperacao_senha
     */
    select?: tbl_recuperacao_senhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_recuperacao_senha
     */
    omit?: tbl_recuperacao_senhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_recuperacao_senhaInclude<ExtArgs> | null
    where?: tbl_recuperacao_senhaWhereInput
    orderBy?: tbl_recuperacao_senhaOrderByWithRelationInput | tbl_recuperacao_senhaOrderByWithRelationInput[]
    cursor?: tbl_recuperacao_senhaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_recuperacao_senhaScalarFieldEnum | Tbl_recuperacao_senhaScalarFieldEnum[]
  }

  /**
   * tbl_user.tbl_treino
   */
  export type tbl_user$tbl_treinoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_treino
     */
    select?: tbl_treinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_treino
     */
    omit?: tbl_treinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_treinoInclude<ExtArgs> | null
    where?: tbl_treinoWhereInput
    orderBy?: tbl_treinoOrderByWithRelationInput | tbl_treinoOrderByWithRelationInput[]
    cursor?: tbl_treinoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_treinoScalarFieldEnum | Tbl_treinoScalarFieldEnum[]
  }

  /**
   * tbl_user without action
   */
  export type tbl_userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_user
     */
    select?: tbl_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_user
     */
    omit?: tbl_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_userInclude<ExtArgs> | null
  }


  /**
   * Model tbl_recuperacao_senha
   */

  export type AggregateTbl_recuperacao_senha = {
    _count: Tbl_recuperacao_senhaCountAggregateOutputType | null
    _avg: Tbl_recuperacao_senhaAvgAggregateOutputType | null
    _sum: Tbl_recuperacao_senhaSumAggregateOutputType | null
    _min: Tbl_recuperacao_senhaMinAggregateOutputType | null
    _max: Tbl_recuperacao_senhaMaxAggregateOutputType | null
  }

  export type Tbl_recuperacao_senhaAvgAggregateOutputType = {
    id: number | null
    id_user: number | null
    token: number | null
  }

  export type Tbl_recuperacao_senhaSumAggregateOutputType = {
    id: number | null
    id_user: number | null
    token: number | null
  }

  export type Tbl_recuperacao_senhaMinAggregateOutputType = {
    id: number | null
    id_user: number | null
    token: number | null
    data_criacao: Date | null
  }

  export type Tbl_recuperacao_senhaMaxAggregateOutputType = {
    id: number | null
    id_user: number | null
    token: number | null
    data_criacao: Date | null
  }

  export type Tbl_recuperacao_senhaCountAggregateOutputType = {
    id: number
    id_user: number
    token: number
    data_criacao: number
    _all: number
  }


  export type Tbl_recuperacao_senhaAvgAggregateInputType = {
    id?: true
    id_user?: true
    token?: true
  }

  export type Tbl_recuperacao_senhaSumAggregateInputType = {
    id?: true
    id_user?: true
    token?: true
  }

  export type Tbl_recuperacao_senhaMinAggregateInputType = {
    id?: true
    id_user?: true
    token?: true
    data_criacao?: true
  }

  export type Tbl_recuperacao_senhaMaxAggregateInputType = {
    id?: true
    id_user?: true
    token?: true
    data_criacao?: true
  }

  export type Tbl_recuperacao_senhaCountAggregateInputType = {
    id?: true
    id_user?: true
    token?: true
    data_criacao?: true
    _all?: true
  }

  export type Tbl_recuperacao_senhaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_recuperacao_senha to aggregate.
     */
    where?: tbl_recuperacao_senhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_recuperacao_senhas to fetch.
     */
    orderBy?: tbl_recuperacao_senhaOrderByWithRelationInput | tbl_recuperacao_senhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_recuperacao_senhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_recuperacao_senhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_recuperacao_senhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_recuperacao_senhas
    **/
    _count?: true | Tbl_recuperacao_senhaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_recuperacao_senhaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_recuperacao_senhaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_recuperacao_senhaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_recuperacao_senhaMaxAggregateInputType
  }

  export type GetTbl_recuperacao_senhaAggregateType<T extends Tbl_recuperacao_senhaAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_recuperacao_senha]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_recuperacao_senha[P]>
      : GetScalarType<T[P], AggregateTbl_recuperacao_senha[P]>
  }




  export type tbl_recuperacao_senhaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_recuperacao_senhaWhereInput
    orderBy?: tbl_recuperacao_senhaOrderByWithAggregationInput | tbl_recuperacao_senhaOrderByWithAggregationInput[]
    by: Tbl_recuperacao_senhaScalarFieldEnum[] | Tbl_recuperacao_senhaScalarFieldEnum
    having?: tbl_recuperacao_senhaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_recuperacao_senhaCountAggregateInputType | true
    _avg?: Tbl_recuperacao_senhaAvgAggregateInputType
    _sum?: Tbl_recuperacao_senhaSumAggregateInputType
    _min?: Tbl_recuperacao_senhaMinAggregateInputType
    _max?: Tbl_recuperacao_senhaMaxAggregateInputType
  }

  export type Tbl_recuperacao_senhaGroupByOutputType = {
    id: number
    id_user: number
    token: number
    data_criacao: Date
    _count: Tbl_recuperacao_senhaCountAggregateOutputType | null
    _avg: Tbl_recuperacao_senhaAvgAggregateOutputType | null
    _sum: Tbl_recuperacao_senhaSumAggregateOutputType | null
    _min: Tbl_recuperacao_senhaMinAggregateOutputType | null
    _max: Tbl_recuperacao_senhaMaxAggregateOutputType | null
  }

  type GetTbl_recuperacao_senhaGroupByPayload<T extends tbl_recuperacao_senhaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_recuperacao_senhaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_recuperacao_senhaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_recuperacao_senhaGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_recuperacao_senhaGroupByOutputType[P]>
        }
      >
    >


  export type tbl_recuperacao_senhaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_user?: boolean
    token?: boolean
    data_criacao?: boolean
    usuario?: boolean | tbl_userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_recuperacao_senha"]>



  export type tbl_recuperacao_senhaSelectScalar = {
    id?: boolean
    id_user?: boolean
    token?: boolean
    data_criacao?: boolean
  }

  export type tbl_recuperacao_senhaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_user" | "token" | "data_criacao", ExtArgs["result"]["tbl_recuperacao_senha"]>
  export type tbl_recuperacao_senhaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | tbl_userDefaultArgs<ExtArgs>
  }

  export type $tbl_recuperacao_senhaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_recuperacao_senha"
    objects: {
      usuario: Prisma.$tbl_userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_user: number
      token: number
      data_criacao: Date
    }, ExtArgs["result"]["tbl_recuperacao_senha"]>
    composites: {}
  }

  type tbl_recuperacao_senhaGetPayload<S extends boolean | null | undefined | tbl_recuperacao_senhaDefaultArgs> = $Result.GetResult<Prisma.$tbl_recuperacao_senhaPayload, S>

  type tbl_recuperacao_senhaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_recuperacao_senhaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_recuperacao_senhaCountAggregateInputType | true
    }

  export interface tbl_recuperacao_senhaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_recuperacao_senha'], meta: { name: 'tbl_recuperacao_senha' } }
    /**
     * Find zero or one Tbl_recuperacao_senha that matches the filter.
     * @param {tbl_recuperacao_senhaFindUniqueArgs} args - Arguments to find a Tbl_recuperacao_senha
     * @example
     * // Get one Tbl_recuperacao_senha
     * const tbl_recuperacao_senha = await prisma.tbl_recuperacao_senha.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_recuperacao_senhaFindUniqueArgs>(args: SelectSubset<T, tbl_recuperacao_senhaFindUniqueArgs<ExtArgs>>): Prisma__tbl_recuperacao_senhaClient<$Result.GetResult<Prisma.$tbl_recuperacao_senhaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_recuperacao_senha that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_recuperacao_senhaFindUniqueOrThrowArgs} args - Arguments to find a Tbl_recuperacao_senha
     * @example
     * // Get one Tbl_recuperacao_senha
     * const tbl_recuperacao_senha = await prisma.tbl_recuperacao_senha.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_recuperacao_senhaFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_recuperacao_senhaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_recuperacao_senhaClient<$Result.GetResult<Prisma.$tbl_recuperacao_senhaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_recuperacao_senha that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_recuperacao_senhaFindFirstArgs} args - Arguments to find a Tbl_recuperacao_senha
     * @example
     * // Get one Tbl_recuperacao_senha
     * const tbl_recuperacao_senha = await prisma.tbl_recuperacao_senha.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_recuperacao_senhaFindFirstArgs>(args?: SelectSubset<T, tbl_recuperacao_senhaFindFirstArgs<ExtArgs>>): Prisma__tbl_recuperacao_senhaClient<$Result.GetResult<Prisma.$tbl_recuperacao_senhaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_recuperacao_senha that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_recuperacao_senhaFindFirstOrThrowArgs} args - Arguments to find a Tbl_recuperacao_senha
     * @example
     * // Get one Tbl_recuperacao_senha
     * const tbl_recuperacao_senha = await prisma.tbl_recuperacao_senha.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_recuperacao_senhaFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_recuperacao_senhaFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_recuperacao_senhaClient<$Result.GetResult<Prisma.$tbl_recuperacao_senhaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_recuperacao_senhas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_recuperacao_senhaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_recuperacao_senhas
     * const tbl_recuperacao_senhas = await prisma.tbl_recuperacao_senha.findMany()
     * 
     * // Get first 10 Tbl_recuperacao_senhas
     * const tbl_recuperacao_senhas = await prisma.tbl_recuperacao_senha.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbl_recuperacao_senhaWithIdOnly = await prisma.tbl_recuperacao_senha.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tbl_recuperacao_senhaFindManyArgs>(args?: SelectSubset<T, tbl_recuperacao_senhaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_recuperacao_senhaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_recuperacao_senha.
     * @param {tbl_recuperacao_senhaCreateArgs} args - Arguments to create a Tbl_recuperacao_senha.
     * @example
     * // Create one Tbl_recuperacao_senha
     * const Tbl_recuperacao_senha = await prisma.tbl_recuperacao_senha.create({
     *   data: {
     *     // ... data to create a Tbl_recuperacao_senha
     *   }
     * })
     * 
     */
    create<T extends tbl_recuperacao_senhaCreateArgs>(args: SelectSubset<T, tbl_recuperacao_senhaCreateArgs<ExtArgs>>): Prisma__tbl_recuperacao_senhaClient<$Result.GetResult<Prisma.$tbl_recuperacao_senhaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_recuperacao_senhas.
     * @param {tbl_recuperacao_senhaCreateManyArgs} args - Arguments to create many Tbl_recuperacao_senhas.
     * @example
     * // Create many Tbl_recuperacao_senhas
     * const tbl_recuperacao_senha = await prisma.tbl_recuperacao_senha.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_recuperacao_senhaCreateManyArgs>(args?: SelectSubset<T, tbl_recuperacao_senhaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_recuperacao_senha.
     * @param {tbl_recuperacao_senhaDeleteArgs} args - Arguments to delete one Tbl_recuperacao_senha.
     * @example
     * // Delete one Tbl_recuperacao_senha
     * const Tbl_recuperacao_senha = await prisma.tbl_recuperacao_senha.delete({
     *   where: {
     *     // ... filter to delete one Tbl_recuperacao_senha
     *   }
     * })
     * 
     */
    delete<T extends tbl_recuperacao_senhaDeleteArgs>(args: SelectSubset<T, tbl_recuperacao_senhaDeleteArgs<ExtArgs>>): Prisma__tbl_recuperacao_senhaClient<$Result.GetResult<Prisma.$tbl_recuperacao_senhaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_recuperacao_senha.
     * @param {tbl_recuperacao_senhaUpdateArgs} args - Arguments to update one Tbl_recuperacao_senha.
     * @example
     * // Update one Tbl_recuperacao_senha
     * const tbl_recuperacao_senha = await prisma.tbl_recuperacao_senha.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_recuperacao_senhaUpdateArgs>(args: SelectSubset<T, tbl_recuperacao_senhaUpdateArgs<ExtArgs>>): Prisma__tbl_recuperacao_senhaClient<$Result.GetResult<Prisma.$tbl_recuperacao_senhaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_recuperacao_senhas.
     * @param {tbl_recuperacao_senhaDeleteManyArgs} args - Arguments to filter Tbl_recuperacao_senhas to delete.
     * @example
     * // Delete a few Tbl_recuperacao_senhas
     * const { count } = await prisma.tbl_recuperacao_senha.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_recuperacao_senhaDeleteManyArgs>(args?: SelectSubset<T, tbl_recuperacao_senhaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_recuperacao_senhas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_recuperacao_senhaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_recuperacao_senhas
     * const tbl_recuperacao_senha = await prisma.tbl_recuperacao_senha.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_recuperacao_senhaUpdateManyArgs>(args: SelectSubset<T, tbl_recuperacao_senhaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_recuperacao_senha.
     * @param {tbl_recuperacao_senhaUpsertArgs} args - Arguments to update or create a Tbl_recuperacao_senha.
     * @example
     * // Update or create a Tbl_recuperacao_senha
     * const tbl_recuperacao_senha = await prisma.tbl_recuperacao_senha.upsert({
     *   create: {
     *     // ... data to create a Tbl_recuperacao_senha
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_recuperacao_senha we want to update
     *   }
     * })
     */
    upsert<T extends tbl_recuperacao_senhaUpsertArgs>(args: SelectSubset<T, tbl_recuperacao_senhaUpsertArgs<ExtArgs>>): Prisma__tbl_recuperacao_senhaClient<$Result.GetResult<Prisma.$tbl_recuperacao_senhaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_recuperacao_senhas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_recuperacao_senhaCountArgs} args - Arguments to filter Tbl_recuperacao_senhas to count.
     * @example
     * // Count the number of Tbl_recuperacao_senhas
     * const count = await prisma.tbl_recuperacao_senha.count({
     *   where: {
     *     // ... the filter for the Tbl_recuperacao_senhas we want to count
     *   }
     * })
    **/
    count<T extends tbl_recuperacao_senhaCountArgs>(
      args?: Subset<T, tbl_recuperacao_senhaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_recuperacao_senhaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_recuperacao_senha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_recuperacao_senhaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tbl_recuperacao_senhaAggregateArgs>(args: Subset<T, Tbl_recuperacao_senhaAggregateArgs>): Prisma.PrismaPromise<GetTbl_recuperacao_senhaAggregateType<T>>

    /**
     * Group by Tbl_recuperacao_senha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_recuperacao_senhaGroupByArgs} args - Group by arguments.
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
      T extends tbl_recuperacao_senhaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_recuperacao_senhaGroupByArgs['orderBy'] }
        : { orderBy?: tbl_recuperacao_senhaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tbl_recuperacao_senhaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_recuperacao_senhaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_recuperacao_senha model
   */
  readonly fields: tbl_recuperacao_senhaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_recuperacao_senha.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_recuperacao_senhaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends tbl_userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tbl_userDefaultArgs<ExtArgs>>): Prisma__tbl_userClient<$Result.GetResult<Prisma.$tbl_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the tbl_recuperacao_senha model
   */
  interface tbl_recuperacao_senhaFieldRefs {
    readonly id: FieldRef<"tbl_recuperacao_senha", 'Int'>
    readonly id_user: FieldRef<"tbl_recuperacao_senha", 'Int'>
    readonly token: FieldRef<"tbl_recuperacao_senha", 'Int'>
    readonly data_criacao: FieldRef<"tbl_recuperacao_senha", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tbl_recuperacao_senha findUnique
   */
  export type tbl_recuperacao_senhaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_recuperacao_senha
     */
    select?: tbl_recuperacao_senhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_recuperacao_senha
     */
    omit?: tbl_recuperacao_senhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_recuperacao_senhaInclude<ExtArgs> | null
    /**
     * Filter, which tbl_recuperacao_senha to fetch.
     */
    where: tbl_recuperacao_senhaWhereUniqueInput
  }

  /**
   * tbl_recuperacao_senha findUniqueOrThrow
   */
  export type tbl_recuperacao_senhaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_recuperacao_senha
     */
    select?: tbl_recuperacao_senhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_recuperacao_senha
     */
    omit?: tbl_recuperacao_senhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_recuperacao_senhaInclude<ExtArgs> | null
    /**
     * Filter, which tbl_recuperacao_senha to fetch.
     */
    where: tbl_recuperacao_senhaWhereUniqueInput
  }

  /**
   * tbl_recuperacao_senha findFirst
   */
  export type tbl_recuperacao_senhaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_recuperacao_senha
     */
    select?: tbl_recuperacao_senhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_recuperacao_senha
     */
    omit?: tbl_recuperacao_senhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_recuperacao_senhaInclude<ExtArgs> | null
    /**
     * Filter, which tbl_recuperacao_senha to fetch.
     */
    where?: tbl_recuperacao_senhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_recuperacao_senhas to fetch.
     */
    orderBy?: tbl_recuperacao_senhaOrderByWithRelationInput | tbl_recuperacao_senhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_recuperacao_senhas.
     */
    cursor?: tbl_recuperacao_senhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_recuperacao_senhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_recuperacao_senhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_recuperacao_senhas.
     */
    distinct?: Tbl_recuperacao_senhaScalarFieldEnum | Tbl_recuperacao_senhaScalarFieldEnum[]
  }

  /**
   * tbl_recuperacao_senha findFirstOrThrow
   */
  export type tbl_recuperacao_senhaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_recuperacao_senha
     */
    select?: tbl_recuperacao_senhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_recuperacao_senha
     */
    omit?: tbl_recuperacao_senhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_recuperacao_senhaInclude<ExtArgs> | null
    /**
     * Filter, which tbl_recuperacao_senha to fetch.
     */
    where?: tbl_recuperacao_senhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_recuperacao_senhas to fetch.
     */
    orderBy?: tbl_recuperacao_senhaOrderByWithRelationInput | tbl_recuperacao_senhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_recuperacao_senhas.
     */
    cursor?: tbl_recuperacao_senhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_recuperacao_senhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_recuperacao_senhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_recuperacao_senhas.
     */
    distinct?: Tbl_recuperacao_senhaScalarFieldEnum | Tbl_recuperacao_senhaScalarFieldEnum[]
  }

  /**
   * tbl_recuperacao_senha findMany
   */
  export type tbl_recuperacao_senhaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_recuperacao_senha
     */
    select?: tbl_recuperacao_senhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_recuperacao_senha
     */
    omit?: tbl_recuperacao_senhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_recuperacao_senhaInclude<ExtArgs> | null
    /**
     * Filter, which tbl_recuperacao_senhas to fetch.
     */
    where?: tbl_recuperacao_senhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_recuperacao_senhas to fetch.
     */
    orderBy?: tbl_recuperacao_senhaOrderByWithRelationInput | tbl_recuperacao_senhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_recuperacao_senhas.
     */
    cursor?: tbl_recuperacao_senhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_recuperacao_senhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_recuperacao_senhas.
     */
    skip?: number
    distinct?: Tbl_recuperacao_senhaScalarFieldEnum | Tbl_recuperacao_senhaScalarFieldEnum[]
  }

  /**
   * tbl_recuperacao_senha create
   */
  export type tbl_recuperacao_senhaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_recuperacao_senha
     */
    select?: tbl_recuperacao_senhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_recuperacao_senha
     */
    omit?: tbl_recuperacao_senhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_recuperacao_senhaInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_recuperacao_senha.
     */
    data: XOR<tbl_recuperacao_senhaCreateInput, tbl_recuperacao_senhaUncheckedCreateInput>
  }

  /**
   * tbl_recuperacao_senha createMany
   */
  export type tbl_recuperacao_senhaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_recuperacao_senhas.
     */
    data: tbl_recuperacao_senhaCreateManyInput | tbl_recuperacao_senhaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_recuperacao_senha update
   */
  export type tbl_recuperacao_senhaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_recuperacao_senha
     */
    select?: tbl_recuperacao_senhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_recuperacao_senha
     */
    omit?: tbl_recuperacao_senhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_recuperacao_senhaInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_recuperacao_senha.
     */
    data: XOR<tbl_recuperacao_senhaUpdateInput, tbl_recuperacao_senhaUncheckedUpdateInput>
    /**
     * Choose, which tbl_recuperacao_senha to update.
     */
    where: tbl_recuperacao_senhaWhereUniqueInput
  }

  /**
   * tbl_recuperacao_senha updateMany
   */
  export type tbl_recuperacao_senhaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_recuperacao_senhas.
     */
    data: XOR<tbl_recuperacao_senhaUpdateManyMutationInput, tbl_recuperacao_senhaUncheckedUpdateManyInput>
    /**
     * Filter which tbl_recuperacao_senhas to update
     */
    where?: tbl_recuperacao_senhaWhereInput
    /**
     * Limit how many tbl_recuperacao_senhas to update.
     */
    limit?: number
  }

  /**
   * tbl_recuperacao_senha upsert
   */
  export type tbl_recuperacao_senhaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_recuperacao_senha
     */
    select?: tbl_recuperacao_senhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_recuperacao_senha
     */
    omit?: tbl_recuperacao_senhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_recuperacao_senhaInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_recuperacao_senha to update in case it exists.
     */
    where: tbl_recuperacao_senhaWhereUniqueInput
    /**
     * In case the tbl_recuperacao_senha found by the `where` argument doesn't exist, create a new tbl_recuperacao_senha with this data.
     */
    create: XOR<tbl_recuperacao_senhaCreateInput, tbl_recuperacao_senhaUncheckedCreateInput>
    /**
     * In case the tbl_recuperacao_senha was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_recuperacao_senhaUpdateInput, tbl_recuperacao_senhaUncheckedUpdateInput>
  }

  /**
   * tbl_recuperacao_senha delete
   */
  export type tbl_recuperacao_senhaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_recuperacao_senha
     */
    select?: tbl_recuperacao_senhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_recuperacao_senha
     */
    omit?: tbl_recuperacao_senhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_recuperacao_senhaInclude<ExtArgs> | null
    /**
     * Filter which tbl_recuperacao_senha to delete.
     */
    where: tbl_recuperacao_senhaWhereUniqueInput
  }

  /**
   * tbl_recuperacao_senha deleteMany
   */
  export type tbl_recuperacao_senhaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_recuperacao_senhas to delete
     */
    where?: tbl_recuperacao_senhaWhereInput
    /**
     * Limit how many tbl_recuperacao_senhas to delete.
     */
    limit?: number
  }

  /**
   * tbl_recuperacao_senha without action
   */
  export type tbl_recuperacao_senhaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_recuperacao_senha
     */
    select?: tbl_recuperacao_senhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_recuperacao_senha
     */
    omit?: tbl_recuperacao_senhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_recuperacao_senhaInclude<ExtArgs> | null
  }


  /**
   * Model tbl_comentario
   */

  export type AggregateTbl_comentario = {
    _count: Tbl_comentarioCountAggregateOutputType | null
    _avg: Tbl_comentarioAvgAggregateOutputType | null
    _sum: Tbl_comentarioSumAggregateOutputType | null
    _min: Tbl_comentarioMinAggregateOutputType | null
    _max: Tbl_comentarioMaxAggregateOutputType | null
  }

  export type Tbl_comentarioAvgAggregateOutputType = {
    id: number | null
    id_publicacao: number | null
    id_user: number | null
    curtidas_count: number | null
  }

  export type Tbl_comentarioSumAggregateOutputType = {
    id: number | null
    id_publicacao: number | null
    id_user: number | null
    curtidas_count: number | null
  }

  export type Tbl_comentarioMinAggregateOutputType = {
    id: number | null
    conteudo: string | null
    data_comentario: Date | null
    id_publicacao: number | null
    id_user: number | null
    curtidas_count: number | null
  }

  export type Tbl_comentarioMaxAggregateOutputType = {
    id: number | null
    conteudo: string | null
    data_comentario: Date | null
    id_publicacao: number | null
    id_user: number | null
    curtidas_count: number | null
  }

  export type Tbl_comentarioCountAggregateOutputType = {
    id: number
    conteudo: number
    data_comentario: number
    id_publicacao: number
    id_user: number
    curtidas_count: number
    _all: number
  }


  export type Tbl_comentarioAvgAggregateInputType = {
    id?: true
    id_publicacao?: true
    id_user?: true
    curtidas_count?: true
  }

  export type Tbl_comentarioSumAggregateInputType = {
    id?: true
    id_publicacao?: true
    id_user?: true
    curtidas_count?: true
  }

  export type Tbl_comentarioMinAggregateInputType = {
    id?: true
    conteudo?: true
    data_comentario?: true
    id_publicacao?: true
    id_user?: true
    curtidas_count?: true
  }

  export type Tbl_comentarioMaxAggregateInputType = {
    id?: true
    conteudo?: true
    data_comentario?: true
    id_publicacao?: true
    id_user?: true
    curtidas_count?: true
  }

  export type Tbl_comentarioCountAggregateInputType = {
    id?: true
    conteudo?: true
    data_comentario?: true
    id_publicacao?: true
    id_user?: true
    curtidas_count?: true
    _all?: true
  }

  export type Tbl_comentarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_comentario to aggregate.
     */
    where?: tbl_comentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_comentarios to fetch.
     */
    orderBy?: tbl_comentarioOrderByWithRelationInput | tbl_comentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_comentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_comentarios
    **/
    _count?: true | Tbl_comentarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_comentarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_comentarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_comentarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_comentarioMaxAggregateInputType
  }

  export type GetTbl_comentarioAggregateType<T extends Tbl_comentarioAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_comentario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_comentario[P]>
      : GetScalarType<T[P], AggregateTbl_comentario[P]>
  }




  export type tbl_comentarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_comentarioWhereInput
    orderBy?: tbl_comentarioOrderByWithAggregationInput | tbl_comentarioOrderByWithAggregationInput[]
    by: Tbl_comentarioScalarFieldEnum[] | Tbl_comentarioScalarFieldEnum
    having?: tbl_comentarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_comentarioCountAggregateInputType | true
    _avg?: Tbl_comentarioAvgAggregateInputType
    _sum?: Tbl_comentarioSumAggregateInputType
    _min?: Tbl_comentarioMinAggregateInputType
    _max?: Tbl_comentarioMaxAggregateInputType
  }

  export type Tbl_comentarioGroupByOutputType = {
    id: number
    conteudo: string
    data_comentario: Date
    id_publicacao: number
    id_user: number
    curtidas_count: number | null
    _count: Tbl_comentarioCountAggregateOutputType | null
    _avg: Tbl_comentarioAvgAggregateOutputType | null
    _sum: Tbl_comentarioSumAggregateOutputType | null
    _min: Tbl_comentarioMinAggregateOutputType | null
    _max: Tbl_comentarioMaxAggregateOutputType | null
  }

  type GetTbl_comentarioGroupByPayload<T extends tbl_comentarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_comentarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_comentarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_comentarioGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_comentarioGroupByOutputType[P]>
        }
      >
    >


  export type tbl_comentarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conteudo?: boolean
    data_comentario?: boolean
    id_publicacao?: boolean
    id_user?: boolean
    curtidas_count?: boolean
    tbl_publicacao?: boolean | tbl_publicacaoDefaultArgs<ExtArgs>
    tbl_user?: boolean | tbl_userDefaultArgs<ExtArgs>
    tbl_curtida_comentario?: boolean | tbl_comentario$tbl_curtida_comentarioArgs<ExtArgs>
    tbl_notificacao?: boolean | tbl_comentario$tbl_notificacaoArgs<ExtArgs>
    _count?: boolean | Tbl_comentarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_comentario"]>



  export type tbl_comentarioSelectScalar = {
    id?: boolean
    conteudo?: boolean
    data_comentario?: boolean
    id_publicacao?: boolean
    id_user?: boolean
    curtidas_count?: boolean
  }

  export type tbl_comentarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "conteudo" | "data_comentario" | "id_publicacao" | "id_user" | "curtidas_count", ExtArgs["result"]["tbl_comentario"]>
  export type tbl_comentarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tbl_publicacao?: boolean | tbl_publicacaoDefaultArgs<ExtArgs>
    tbl_user?: boolean | tbl_userDefaultArgs<ExtArgs>
    tbl_curtida_comentario?: boolean | tbl_comentario$tbl_curtida_comentarioArgs<ExtArgs>
    tbl_notificacao?: boolean | tbl_comentario$tbl_notificacaoArgs<ExtArgs>
    _count?: boolean | Tbl_comentarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tbl_comentarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_comentario"
    objects: {
      tbl_publicacao: Prisma.$tbl_publicacaoPayload<ExtArgs>
      tbl_user: Prisma.$tbl_userPayload<ExtArgs>
      tbl_curtida_comentario: Prisma.$tbl_curtida_comentarioPayload<ExtArgs>[]
      tbl_notificacao: Prisma.$tbl_notificacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      conteudo: string
      data_comentario: Date
      id_publicacao: number
      id_user: number
      curtidas_count: number | null
    }, ExtArgs["result"]["tbl_comentario"]>
    composites: {}
  }

  type tbl_comentarioGetPayload<S extends boolean | null | undefined | tbl_comentarioDefaultArgs> = $Result.GetResult<Prisma.$tbl_comentarioPayload, S>

  type tbl_comentarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_comentarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_comentarioCountAggregateInputType | true
    }

  export interface tbl_comentarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_comentario'], meta: { name: 'tbl_comentario' } }
    /**
     * Find zero or one Tbl_comentario that matches the filter.
     * @param {tbl_comentarioFindUniqueArgs} args - Arguments to find a Tbl_comentario
     * @example
     * // Get one Tbl_comentario
     * const tbl_comentario = await prisma.tbl_comentario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_comentarioFindUniqueArgs>(args: SelectSubset<T, tbl_comentarioFindUniqueArgs<ExtArgs>>): Prisma__tbl_comentarioClient<$Result.GetResult<Prisma.$tbl_comentarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_comentario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_comentarioFindUniqueOrThrowArgs} args - Arguments to find a Tbl_comentario
     * @example
     * // Get one Tbl_comentario
     * const tbl_comentario = await prisma.tbl_comentario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_comentarioFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_comentarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_comentarioClient<$Result.GetResult<Prisma.$tbl_comentarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_comentario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_comentarioFindFirstArgs} args - Arguments to find a Tbl_comentario
     * @example
     * // Get one Tbl_comentario
     * const tbl_comentario = await prisma.tbl_comentario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_comentarioFindFirstArgs>(args?: SelectSubset<T, tbl_comentarioFindFirstArgs<ExtArgs>>): Prisma__tbl_comentarioClient<$Result.GetResult<Prisma.$tbl_comentarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_comentario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_comentarioFindFirstOrThrowArgs} args - Arguments to find a Tbl_comentario
     * @example
     * // Get one Tbl_comentario
     * const tbl_comentario = await prisma.tbl_comentario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_comentarioFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_comentarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_comentarioClient<$Result.GetResult<Prisma.$tbl_comentarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_comentarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_comentarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_comentarios
     * const tbl_comentarios = await prisma.tbl_comentario.findMany()
     * 
     * // Get first 10 Tbl_comentarios
     * const tbl_comentarios = await prisma.tbl_comentario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbl_comentarioWithIdOnly = await prisma.tbl_comentario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tbl_comentarioFindManyArgs>(args?: SelectSubset<T, tbl_comentarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_comentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_comentario.
     * @param {tbl_comentarioCreateArgs} args - Arguments to create a Tbl_comentario.
     * @example
     * // Create one Tbl_comentario
     * const Tbl_comentario = await prisma.tbl_comentario.create({
     *   data: {
     *     // ... data to create a Tbl_comentario
     *   }
     * })
     * 
     */
    create<T extends tbl_comentarioCreateArgs>(args: SelectSubset<T, tbl_comentarioCreateArgs<ExtArgs>>): Prisma__tbl_comentarioClient<$Result.GetResult<Prisma.$tbl_comentarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_comentarios.
     * @param {tbl_comentarioCreateManyArgs} args - Arguments to create many Tbl_comentarios.
     * @example
     * // Create many Tbl_comentarios
     * const tbl_comentario = await prisma.tbl_comentario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_comentarioCreateManyArgs>(args?: SelectSubset<T, tbl_comentarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_comentario.
     * @param {tbl_comentarioDeleteArgs} args - Arguments to delete one Tbl_comentario.
     * @example
     * // Delete one Tbl_comentario
     * const Tbl_comentario = await prisma.tbl_comentario.delete({
     *   where: {
     *     // ... filter to delete one Tbl_comentario
     *   }
     * })
     * 
     */
    delete<T extends tbl_comentarioDeleteArgs>(args: SelectSubset<T, tbl_comentarioDeleteArgs<ExtArgs>>): Prisma__tbl_comentarioClient<$Result.GetResult<Prisma.$tbl_comentarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_comentario.
     * @param {tbl_comentarioUpdateArgs} args - Arguments to update one Tbl_comentario.
     * @example
     * // Update one Tbl_comentario
     * const tbl_comentario = await prisma.tbl_comentario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_comentarioUpdateArgs>(args: SelectSubset<T, tbl_comentarioUpdateArgs<ExtArgs>>): Prisma__tbl_comentarioClient<$Result.GetResult<Prisma.$tbl_comentarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_comentarios.
     * @param {tbl_comentarioDeleteManyArgs} args - Arguments to filter Tbl_comentarios to delete.
     * @example
     * // Delete a few Tbl_comentarios
     * const { count } = await prisma.tbl_comentario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_comentarioDeleteManyArgs>(args?: SelectSubset<T, tbl_comentarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_comentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_comentarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_comentarios
     * const tbl_comentario = await prisma.tbl_comentario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_comentarioUpdateManyArgs>(args: SelectSubset<T, tbl_comentarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_comentario.
     * @param {tbl_comentarioUpsertArgs} args - Arguments to update or create a Tbl_comentario.
     * @example
     * // Update or create a Tbl_comentario
     * const tbl_comentario = await prisma.tbl_comentario.upsert({
     *   create: {
     *     // ... data to create a Tbl_comentario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_comentario we want to update
     *   }
     * })
     */
    upsert<T extends tbl_comentarioUpsertArgs>(args: SelectSubset<T, tbl_comentarioUpsertArgs<ExtArgs>>): Prisma__tbl_comentarioClient<$Result.GetResult<Prisma.$tbl_comentarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_comentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_comentarioCountArgs} args - Arguments to filter Tbl_comentarios to count.
     * @example
     * // Count the number of Tbl_comentarios
     * const count = await prisma.tbl_comentario.count({
     *   where: {
     *     // ... the filter for the Tbl_comentarios we want to count
     *   }
     * })
    **/
    count<T extends tbl_comentarioCountArgs>(
      args?: Subset<T, tbl_comentarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_comentarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_comentario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_comentarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tbl_comentarioAggregateArgs>(args: Subset<T, Tbl_comentarioAggregateArgs>): Prisma.PrismaPromise<GetTbl_comentarioAggregateType<T>>

    /**
     * Group by Tbl_comentario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_comentarioGroupByArgs} args - Group by arguments.
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
      T extends tbl_comentarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_comentarioGroupByArgs['orderBy'] }
        : { orderBy?: tbl_comentarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tbl_comentarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_comentarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_comentario model
   */
  readonly fields: tbl_comentarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_comentario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_comentarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tbl_publicacao<T extends tbl_publicacaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tbl_publicacaoDefaultArgs<ExtArgs>>): Prisma__tbl_publicacaoClient<$Result.GetResult<Prisma.$tbl_publicacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tbl_user<T extends tbl_userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tbl_userDefaultArgs<ExtArgs>>): Prisma__tbl_userClient<$Result.GetResult<Prisma.$tbl_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tbl_curtida_comentario<T extends tbl_comentario$tbl_curtida_comentarioArgs<ExtArgs> = {}>(args?: Subset<T, tbl_comentario$tbl_curtida_comentarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_curtida_comentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tbl_notificacao<T extends tbl_comentario$tbl_notificacaoArgs<ExtArgs> = {}>(args?: Subset<T, tbl_comentario$tbl_notificacaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_notificacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the tbl_comentario model
   */
  interface tbl_comentarioFieldRefs {
    readonly id: FieldRef<"tbl_comentario", 'Int'>
    readonly conteudo: FieldRef<"tbl_comentario", 'String'>
    readonly data_comentario: FieldRef<"tbl_comentario", 'DateTime'>
    readonly id_publicacao: FieldRef<"tbl_comentario", 'Int'>
    readonly id_user: FieldRef<"tbl_comentario", 'Int'>
    readonly curtidas_count: FieldRef<"tbl_comentario", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * tbl_comentario findUnique
   */
  export type tbl_comentarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_comentario
     */
    select?: tbl_comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_comentario
     */
    omit?: tbl_comentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_comentarioInclude<ExtArgs> | null
    /**
     * Filter, which tbl_comentario to fetch.
     */
    where: tbl_comentarioWhereUniqueInput
  }

  /**
   * tbl_comentario findUniqueOrThrow
   */
  export type tbl_comentarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_comentario
     */
    select?: tbl_comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_comentario
     */
    omit?: tbl_comentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_comentarioInclude<ExtArgs> | null
    /**
     * Filter, which tbl_comentario to fetch.
     */
    where: tbl_comentarioWhereUniqueInput
  }

  /**
   * tbl_comentario findFirst
   */
  export type tbl_comentarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_comentario
     */
    select?: tbl_comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_comentario
     */
    omit?: tbl_comentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_comentarioInclude<ExtArgs> | null
    /**
     * Filter, which tbl_comentario to fetch.
     */
    where?: tbl_comentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_comentarios to fetch.
     */
    orderBy?: tbl_comentarioOrderByWithRelationInput | tbl_comentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_comentarios.
     */
    cursor?: tbl_comentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_comentarios.
     */
    distinct?: Tbl_comentarioScalarFieldEnum | Tbl_comentarioScalarFieldEnum[]
  }

  /**
   * tbl_comentario findFirstOrThrow
   */
  export type tbl_comentarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_comentario
     */
    select?: tbl_comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_comentario
     */
    omit?: tbl_comentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_comentarioInclude<ExtArgs> | null
    /**
     * Filter, which tbl_comentario to fetch.
     */
    where?: tbl_comentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_comentarios to fetch.
     */
    orderBy?: tbl_comentarioOrderByWithRelationInput | tbl_comentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_comentarios.
     */
    cursor?: tbl_comentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_comentarios.
     */
    distinct?: Tbl_comentarioScalarFieldEnum | Tbl_comentarioScalarFieldEnum[]
  }

  /**
   * tbl_comentario findMany
   */
  export type tbl_comentarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_comentario
     */
    select?: tbl_comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_comentario
     */
    omit?: tbl_comentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_comentarioInclude<ExtArgs> | null
    /**
     * Filter, which tbl_comentarios to fetch.
     */
    where?: tbl_comentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_comentarios to fetch.
     */
    orderBy?: tbl_comentarioOrderByWithRelationInput | tbl_comentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_comentarios.
     */
    cursor?: tbl_comentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_comentarios.
     */
    skip?: number
    distinct?: Tbl_comentarioScalarFieldEnum | Tbl_comentarioScalarFieldEnum[]
  }

  /**
   * tbl_comentario create
   */
  export type tbl_comentarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_comentario
     */
    select?: tbl_comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_comentario
     */
    omit?: tbl_comentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_comentarioInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_comentario.
     */
    data: XOR<tbl_comentarioCreateInput, tbl_comentarioUncheckedCreateInput>
  }

  /**
   * tbl_comentario createMany
   */
  export type tbl_comentarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_comentarios.
     */
    data: tbl_comentarioCreateManyInput | tbl_comentarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_comentario update
   */
  export type tbl_comentarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_comentario
     */
    select?: tbl_comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_comentario
     */
    omit?: tbl_comentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_comentarioInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_comentario.
     */
    data: XOR<tbl_comentarioUpdateInput, tbl_comentarioUncheckedUpdateInput>
    /**
     * Choose, which tbl_comentario to update.
     */
    where: tbl_comentarioWhereUniqueInput
  }

  /**
   * tbl_comentario updateMany
   */
  export type tbl_comentarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_comentarios.
     */
    data: XOR<tbl_comentarioUpdateManyMutationInput, tbl_comentarioUncheckedUpdateManyInput>
    /**
     * Filter which tbl_comentarios to update
     */
    where?: tbl_comentarioWhereInput
    /**
     * Limit how many tbl_comentarios to update.
     */
    limit?: number
  }

  /**
   * tbl_comentario upsert
   */
  export type tbl_comentarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_comentario
     */
    select?: tbl_comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_comentario
     */
    omit?: tbl_comentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_comentarioInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_comentario to update in case it exists.
     */
    where: tbl_comentarioWhereUniqueInput
    /**
     * In case the tbl_comentario found by the `where` argument doesn't exist, create a new tbl_comentario with this data.
     */
    create: XOR<tbl_comentarioCreateInput, tbl_comentarioUncheckedCreateInput>
    /**
     * In case the tbl_comentario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_comentarioUpdateInput, tbl_comentarioUncheckedUpdateInput>
  }

  /**
   * tbl_comentario delete
   */
  export type tbl_comentarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_comentario
     */
    select?: tbl_comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_comentario
     */
    omit?: tbl_comentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_comentarioInclude<ExtArgs> | null
    /**
     * Filter which tbl_comentario to delete.
     */
    where: tbl_comentarioWhereUniqueInput
  }

  /**
   * tbl_comentario deleteMany
   */
  export type tbl_comentarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_comentarios to delete
     */
    where?: tbl_comentarioWhereInput
    /**
     * Limit how many tbl_comentarios to delete.
     */
    limit?: number
  }

  /**
   * tbl_comentario.tbl_curtida_comentario
   */
  export type tbl_comentario$tbl_curtida_comentarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_curtida_comentario
     */
    select?: tbl_curtida_comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_curtida_comentario
     */
    omit?: tbl_curtida_comentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_curtida_comentarioInclude<ExtArgs> | null
    where?: tbl_curtida_comentarioWhereInput
    orderBy?: tbl_curtida_comentarioOrderByWithRelationInput | tbl_curtida_comentarioOrderByWithRelationInput[]
    cursor?: tbl_curtida_comentarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_curtida_comentarioScalarFieldEnum | Tbl_curtida_comentarioScalarFieldEnum[]
  }

  /**
   * tbl_comentario.tbl_notificacao
   */
  export type tbl_comentario$tbl_notificacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_notificacao
     */
    select?: tbl_notificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_notificacao
     */
    omit?: tbl_notificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_notificacaoInclude<ExtArgs> | null
    where?: tbl_notificacaoWhereInput
    orderBy?: tbl_notificacaoOrderByWithRelationInput | tbl_notificacaoOrderByWithRelationInput[]
    cursor?: tbl_notificacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_notificacaoScalarFieldEnum | Tbl_notificacaoScalarFieldEnum[]
  }

  /**
   * tbl_comentario without action
   */
  export type tbl_comentarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_comentario
     */
    select?: tbl_comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_comentario
     */
    omit?: tbl_comentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_comentarioInclude<ExtArgs> | null
  }


  /**
   * Model tbl_curtida
   */

  export type AggregateTbl_curtida = {
    _count: Tbl_curtidaCountAggregateOutputType | null
    _avg: Tbl_curtidaAvgAggregateOutputType | null
    _sum: Tbl_curtidaSumAggregateOutputType | null
    _min: Tbl_curtidaMinAggregateOutputType | null
    _max: Tbl_curtidaMaxAggregateOutputType | null
  }

  export type Tbl_curtidaAvgAggregateOutputType = {
    id: number | null
    id_publicacao: number | null
    id_user: number | null
  }

  export type Tbl_curtidaSumAggregateOutputType = {
    id: number | null
    id_publicacao: number | null
    id_user: number | null
  }

  export type Tbl_curtidaMinAggregateOutputType = {
    id: number | null
    id_publicacao: number | null
    id_user: number | null
  }

  export type Tbl_curtidaMaxAggregateOutputType = {
    id: number | null
    id_publicacao: number | null
    id_user: number | null
  }

  export type Tbl_curtidaCountAggregateOutputType = {
    id: number
    id_publicacao: number
    id_user: number
    _all: number
  }


  export type Tbl_curtidaAvgAggregateInputType = {
    id?: true
    id_publicacao?: true
    id_user?: true
  }

  export type Tbl_curtidaSumAggregateInputType = {
    id?: true
    id_publicacao?: true
    id_user?: true
  }

  export type Tbl_curtidaMinAggregateInputType = {
    id?: true
    id_publicacao?: true
    id_user?: true
  }

  export type Tbl_curtidaMaxAggregateInputType = {
    id?: true
    id_publicacao?: true
    id_user?: true
  }

  export type Tbl_curtidaCountAggregateInputType = {
    id?: true
    id_publicacao?: true
    id_user?: true
    _all?: true
  }

  export type Tbl_curtidaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_curtida to aggregate.
     */
    where?: tbl_curtidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_curtidas to fetch.
     */
    orderBy?: tbl_curtidaOrderByWithRelationInput | tbl_curtidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_curtidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_curtidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_curtidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_curtidas
    **/
    _count?: true | Tbl_curtidaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_curtidaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_curtidaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_curtidaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_curtidaMaxAggregateInputType
  }

  export type GetTbl_curtidaAggregateType<T extends Tbl_curtidaAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_curtida]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_curtida[P]>
      : GetScalarType<T[P], AggregateTbl_curtida[P]>
  }




  export type tbl_curtidaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_curtidaWhereInput
    orderBy?: tbl_curtidaOrderByWithAggregationInput | tbl_curtidaOrderByWithAggregationInput[]
    by: Tbl_curtidaScalarFieldEnum[] | Tbl_curtidaScalarFieldEnum
    having?: tbl_curtidaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_curtidaCountAggregateInputType | true
    _avg?: Tbl_curtidaAvgAggregateInputType
    _sum?: Tbl_curtidaSumAggregateInputType
    _min?: Tbl_curtidaMinAggregateInputType
    _max?: Tbl_curtidaMaxAggregateInputType
  }

  export type Tbl_curtidaGroupByOutputType = {
    id: number
    id_publicacao: number
    id_user: number
    _count: Tbl_curtidaCountAggregateOutputType | null
    _avg: Tbl_curtidaAvgAggregateOutputType | null
    _sum: Tbl_curtidaSumAggregateOutputType | null
    _min: Tbl_curtidaMinAggregateOutputType | null
    _max: Tbl_curtidaMaxAggregateOutputType | null
  }

  type GetTbl_curtidaGroupByPayload<T extends tbl_curtidaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_curtidaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_curtidaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_curtidaGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_curtidaGroupByOutputType[P]>
        }
      >
    >


  export type tbl_curtidaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_publicacao?: boolean
    id_user?: boolean
    tbl_publicacao?: boolean | tbl_publicacaoDefaultArgs<ExtArgs>
    tbl_user?: boolean | tbl_userDefaultArgs<ExtArgs>
    tbl_notificacao?: boolean | tbl_curtida$tbl_notificacaoArgs<ExtArgs>
    _count?: boolean | Tbl_curtidaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_curtida"]>



  export type tbl_curtidaSelectScalar = {
    id?: boolean
    id_publicacao?: boolean
    id_user?: boolean
  }

  export type tbl_curtidaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_publicacao" | "id_user", ExtArgs["result"]["tbl_curtida"]>
  export type tbl_curtidaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tbl_publicacao?: boolean | tbl_publicacaoDefaultArgs<ExtArgs>
    tbl_user?: boolean | tbl_userDefaultArgs<ExtArgs>
    tbl_notificacao?: boolean | tbl_curtida$tbl_notificacaoArgs<ExtArgs>
    _count?: boolean | Tbl_curtidaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tbl_curtidaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_curtida"
    objects: {
      tbl_publicacao: Prisma.$tbl_publicacaoPayload<ExtArgs>
      tbl_user: Prisma.$tbl_userPayload<ExtArgs>
      tbl_notificacao: Prisma.$tbl_notificacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_publicacao: number
      id_user: number
    }, ExtArgs["result"]["tbl_curtida"]>
    composites: {}
  }

  type tbl_curtidaGetPayload<S extends boolean | null | undefined | tbl_curtidaDefaultArgs> = $Result.GetResult<Prisma.$tbl_curtidaPayload, S>

  type tbl_curtidaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_curtidaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_curtidaCountAggregateInputType | true
    }

  export interface tbl_curtidaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_curtida'], meta: { name: 'tbl_curtida' } }
    /**
     * Find zero or one Tbl_curtida that matches the filter.
     * @param {tbl_curtidaFindUniqueArgs} args - Arguments to find a Tbl_curtida
     * @example
     * // Get one Tbl_curtida
     * const tbl_curtida = await prisma.tbl_curtida.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_curtidaFindUniqueArgs>(args: SelectSubset<T, tbl_curtidaFindUniqueArgs<ExtArgs>>): Prisma__tbl_curtidaClient<$Result.GetResult<Prisma.$tbl_curtidaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_curtida that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_curtidaFindUniqueOrThrowArgs} args - Arguments to find a Tbl_curtida
     * @example
     * // Get one Tbl_curtida
     * const tbl_curtida = await prisma.tbl_curtida.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_curtidaFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_curtidaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_curtidaClient<$Result.GetResult<Prisma.$tbl_curtidaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_curtida that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_curtidaFindFirstArgs} args - Arguments to find a Tbl_curtida
     * @example
     * // Get one Tbl_curtida
     * const tbl_curtida = await prisma.tbl_curtida.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_curtidaFindFirstArgs>(args?: SelectSubset<T, tbl_curtidaFindFirstArgs<ExtArgs>>): Prisma__tbl_curtidaClient<$Result.GetResult<Prisma.$tbl_curtidaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_curtida that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_curtidaFindFirstOrThrowArgs} args - Arguments to find a Tbl_curtida
     * @example
     * // Get one Tbl_curtida
     * const tbl_curtida = await prisma.tbl_curtida.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_curtidaFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_curtidaFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_curtidaClient<$Result.GetResult<Prisma.$tbl_curtidaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_curtidas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_curtidaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_curtidas
     * const tbl_curtidas = await prisma.tbl_curtida.findMany()
     * 
     * // Get first 10 Tbl_curtidas
     * const tbl_curtidas = await prisma.tbl_curtida.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbl_curtidaWithIdOnly = await prisma.tbl_curtida.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tbl_curtidaFindManyArgs>(args?: SelectSubset<T, tbl_curtidaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_curtidaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_curtida.
     * @param {tbl_curtidaCreateArgs} args - Arguments to create a Tbl_curtida.
     * @example
     * // Create one Tbl_curtida
     * const Tbl_curtida = await prisma.tbl_curtida.create({
     *   data: {
     *     // ... data to create a Tbl_curtida
     *   }
     * })
     * 
     */
    create<T extends tbl_curtidaCreateArgs>(args: SelectSubset<T, tbl_curtidaCreateArgs<ExtArgs>>): Prisma__tbl_curtidaClient<$Result.GetResult<Prisma.$tbl_curtidaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_curtidas.
     * @param {tbl_curtidaCreateManyArgs} args - Arguments to create many Tbl_curtidas.
     * @example
     * // Create many Tbl_curtidas
     * const tbl_curtida = await prisma.tbl_curtida.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_curtidaCreateManyArgs>(args?: SelectSubset<T, tbl_curtidaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_curtida.
     * @param {tbl_curtidaDeleteArgs} args - Arguments to delete one Tbl_curtida.
     * @example
     * // Delete one Tbl_curtida
     * const Tbl_curtida = await prisma.tbl_curtida.delete({
     *   where: {
     *     // ... filter to delete one Tbl_curtida
     *   }
     * })
     * 
     */
    delete<T extends tbl_curtidaDeleteArgs>(args: SelectSubset<T, tbl_curtidaDeleteArgs<ExtArgs>>): Prisma__tbl_curtidaClient<$Result.GetResult<Prisma.$tbl_curtidaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_curtida.
     * @param {tbl_curtidaUpdateArgs} args - Arguments to update one Tbl_curtida.
     * @example
     * // Update one Tbl_curtida
     * const tbl_curtida = await prisma.tbl_curtida.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_curtidaUpdateArgs>(args: SelectSubset<T, tbl_curtidaUpdateArgs<ExtArgs>>): Prisma__tbl_curtidaClient<$Result.GetResult<Prisma.$tbl_curtidaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_curtidas.
     * @param {tbl_curtidaDeleteManyArgs} args - Arguments to filter Tbl_curtidas to delete.
     * @example
     * // Delete a few Tbl_curtidas
     * const { count } = await prisma.tbl_curtida.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_curtidaDeleteManyArgs>(args?: SelectSubset<T, tbl_curtidaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_curtidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_curtidaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_curtidas
     * const tbl_curtida = await prisma.tbl_curtida.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_curtidaUpdateManyArgs>(args: SelectSubset<T, tbl_curtidaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_curtida.
     * @param {tbl_curtidaUpsertArgs} args - Arguments to update or create a Tbl_curtida.
     * @example
     * // Update or create a Tbl_curtida
     * const tbl_curtida = await prisma.tbl_curtida.upsert({
     *   create: {
     *     // ... data to create a Tbl_curtida
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_curtida we want to update
     *   }
     * })
     */
    upsert<T extends tbl_curtidaUpsertArgs>(args: SelectSubset<T, tbl_curtidaUpsertArgs<ExtArgs>>): Prisma__tbl_curtidaClient<$Result.GetResult<Prisma.$tbl_curtidaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_curtidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_curtidaCountArgs} args - Arguments to filter Tbl_curtidas to count.
     * @example
     * // Count the number of Tbl_curtidas
     * const count = await prisma.tbl_curtida.count({
     *   where: {
     *     // ... the filter for the Tbl_curtidas we want to count
     *   }
     * })
    **/
    count<T extends tbl_curtidaCountArgs>(
      args?: Subset<T, tbl_curtidaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_curtidaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_curtida.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_curtidaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tbl_curtidaAggregateArgs>(args: Subset<T, Tbl_curtidaAggregateArgs>): Prisma.PrismaPromise<GetTbl_curtidaAggregateType<T>>

    /**
     * Group by Tbl_curtida.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_curtidaGroupByArgs} args - Group by arguments.
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
      T extends tbl_curtidaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_curtidaGroupByArgs['orderBy'] }
        : { orderBy?: tbl_curtidaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tbl_curtidaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_curtidaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_curtida model
   */
  readonly fields: tbl_curtidaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_curtida.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_curtidaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tbl_publicacao<T extends tbl_publicacaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tbl_publicacaoDefaultArgs<ExtArgs>>): Prisma__tbl_publicacaoClient<$Result.GetResult<Prisma.$tbl_publicacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tbl_user<T extends tbl_userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tbl_userDefaultArgs<ExtArgs>>): Prisma__tbl_userClient<$Result.GetResult<Prisma.$tbl_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tbl_notificacao<T extends tbl_curtida$tbl_notificacaoArgs<ExtArgs> = {}>(args?: Subset<T, tbl_curtida$tbl_notificacaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_notificacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the tbl_curtida model
   */
  interface tbl_curtidaFieldRefs {
    readonly id: FieldRef<"tbl_curtida", 'Int'>
    readonly id_publicacao: FieldRef<"tbl_curtida", 'Int'>
    readonly id_user: FieldRef<"tbl_curtida", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * tbl_curtida findUnique
   */
  export type tbl_curtidaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_curtida
     */
    select?: tbl_curtidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_curtida
     */
    omit?: tbl_curtidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_curtidaInclude<ExtArgs> | null
    /**
     * Filter, which tbl_curtida to fetch.
     */
    where: tbl_curtidaWhereUniqueInput
  }

  /**
   * tbl_curtida findUniqueOrThrow
   */
  export type tbl_curtidaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_curtida
     */
    select?: tbl_curtidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_curtida
     */
    omit?: tbl_curtidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_curtidaInclude<ExtArgs> | null
    /**
     * Filter, which tbl_curtida to fetch.
     */
    where: tbl_curtidaWhereUniqueInput
  }

  /**
   * tbl_curtida findFirst
   */
  export type tbl_curtidaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_curtida
     */
    select?: tbl_curtidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_curtida
     */
    omit?: tbl_curtidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_curtidaInclude<ExtArgs> | null
    /**
     * Filter, which tbl_curtida to fetch.
     */
    where?: tbl_curtidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_curtidas to fetch.
     */
    orderBy?: tbl_curtidaOrderByWithRelationInput | tbl_curtidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_curtidas.
     */
    cursor?: tbl_curtidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_curtidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_curtidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_curtidas.
     */
    distinct?: Tbl_curtidaScalarFieldEnum | Tbl_curtidaScalarFieldEnum[]
  }

  /**
   * tbl_curtida findFirstOrThrow
   */
  export type tbl_curtidaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_curtida
     */
    select?: tbl_curtidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_curtida
     */
    omit?: tbl_curtidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_curtidaInclude<ExtArgs> | null
    /**
     * Filter, which tbl_curtida to fetch.
     */
    where?: tbl_curtidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_curtidas to fetch.
     */
    orderBy?: tbl_curtidaOrderByWithRelationInput | tbl_curtidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_curtidas.
     */
    cursor?: tbl_curtidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_curtidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_curtidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_curtidas.
     */
    distinct?: Tbl_curtidaScalarFieldEnum | Tbl_curtidaScalarFieldEnum[]
  }

  /**
   * tbl_curtida findMany
   */
  export type tbl_curtidaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_curtida
     */
    select?: tbl_curtidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_curtida
     */
    omit?: tbl_curtidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_curtidaInclude<ExtArgs> | null
    /**
     * Filter, which tbl_curtidas to fetch.
     */
    where?: tbl_curtidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_curtidas to fetch.
     */
    orderBy?: tbl_curtidaOrderByWithRelationInput | tbl_curtidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_curtidas.
     */
    cursor?: tbl_curtidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_curtidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_curtidas.
     */
    skip?: number
    distinct?: Tbl_curtidaScalarFieldEnum | Tbl_curtidaScalarFieldEnum[]
  }

  /**
   * tbl_curtida create
   */
  export type tbl_curtidaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_curtida
     */
    select?: tbl_curtidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_curtida
     */
    omit?: tbl_curtidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_curtidaInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_curtida.
     */
    data: XOR<tbl_curtidaCreateInput, tbl_curtidaUncheckedCreateInput>
  }

  /**
   * tbl_curtida createMany
   */
  export type tbl_curtidaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_curtidas.
     */
    data: tbl_curtidaCreateManyInput | tbl_curtidaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_curtida update
   */
  export type tbl_curtidaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_curtida
     */
    select?: tbl_curtidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_curtida
     */
    omit?: tbl_curtidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_curtidaInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_curtida.
     */
    data: XOR<tbl_curtidaUpdateInput, tbl_curtidaUncheckedUpdateInput>
    /**
     * Choose, which tbl_curtida to update.
     */
    where: tbl_curtidaWhereUniqueInput
  }

  /**
   * tbl_curtida updateMany
   */
  export type tbl_curtidaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_curtidas.
     */
    data: XOR<tbl_curtidaUpdateManyMutationInput, tbl_curtidaUncheckedUpdateManyInput>
    /**
     * Filter which tbl_curtidas to update
     */
    where?: tbl_curtidaWhereInput
    /**
     * Limit how many tbl_curtidas to update.
     */
    limit?: number
  }

  /**
   * tbl_curtida upsert
   */
  export type tbl_curtidaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_curtida
     */
    select?: tbl_curtidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_curtida
     */
    omit?: tbl_curtidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_curtidaInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_curtida to update in case it exists.
     */
    where: tbl_curtidaWhereUniqueInput
    /**
     * In case the tbl_curtida found by the `where` argument doesn't exist, create a new tbl_curtida with this data.
     */
    create: XOR<tbl_curtidaCreateInput, tbl_curtidaUncheckedCreateInput>
    /**
     * In case the tbl_curtida was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_curtidaUpdateInput, tbl_curtidaUncheckedUpdateInput>
  }

  /**
   * tbl_curtida delete
   */
  export type tbl_curtidaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_curtida
     */
    select?: tbl_curtidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_curtida
     */
    omit?: tbl_curtidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_curtidaInclude<ExtArgs> | null
    /**
     * Filter which tbl_curtida to delete.
     */
    where: tbl_curtidaWhereUniqueInput
  }

  /**
   * tbl_curtida deleteMany
   */
  export type tbl_curtidaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_curtidas to delete
     */
    where?: tbl_curtidaWhereInput
    /**
     * Limit how many tbl_curtidas to delete.
     */
    limit?: number
  }

  /**
   * tbl_curtida.tbl_notificacao
   */
  export type tbl_curtida$tbl_notificacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_notificacao
     */
    select?: tbl_notificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_notificacao
     */
    omit?: tbl_notificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_notificacaoInclude<ExtArgs> | null
    where?: tbl_notificacaoWhereInput
    orderBy?: tbl_notificacaoOrderByWithRelationInput | tbl_notificacaoOrderByWithRelationInput[]
    cursor?: tbl_notificacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_notificacaoScalarFieldEnum | Tbl_notificacaoScalarFieldEnum[]
  }

  /**
   * tbl_curtida without action
   */
  export type tbl_curtidaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_curtida
     */
    select?: tbl_curtidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_curtida
     */
    omit?: tbl_curtidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_curtidaInclude<ExtArgs> | null
  }


  /**
   * Model tbl_curtida_comentario
   */

  export type AggregateTbl_curtida_comentario = {
    _count: Tbl_curtida_comentarioCountAggregateOutputType | null
    _avg: Tbl_curtida_comentarioAvgAggregateOutputType | null
    _sum: Tbl_curtida_comentarioSumAggregateOutputType | null
    _min: Tbl_curtida_comentarioMinAggregateOutputType | null
    _max: Tbl_curtida_comentarioMaxAggregateOutputType | null
  }

  export type Tbl_curtida_comentarioAvgAggregateOutputType = {
    id: number | null
    id_comentario: number | null
    id_user: number | null
  }

  export type Tbl_curtida_comentarioSumAggregateOutputType = {
    id: number | null
    id_comentario: number | null
    id_user: number | null
  }

  export type Tbl_curtida_comentarioMinAggregateOutputType = {
    id: number | null
    id_comentario: number | null
    id_user: number | null
  }

  export type Tbl_curtida_comentarioMaxAggregateOutputType = {
    id: number | null
    id_comentario: number | null
    id_user: number | null
  }

  export type Tbl_curtida_comentarioCountAggregateOutputType = {
    id: number
    id_comentario: number
    id_user: number
    _all: number
  }


  export type Tbl_curtida_comentarioAvgAggregateInputType = {
    id?: true
    id_comentario?: true
    id_user?: true
  }

  export type Tbl_curtida_comentarioSumAggregateInputType = {
    id?: true
    id_comentario?: true
    id_user?: true
  }

  export type Tbl_curtida_comentarioMinAggregateInputType = {
    id?: true
    id_comentario?: true
    id_user?: true
  }

  export type Tbl_curtida_comentarioMaxAggregateInputType = {
    id?: true
    id_comentario?: true
    id_user?: true
  }

  export type Tbl_curtida_comentarioCountAggregateInputType = {
    id?: true
    id_comentario?: true
    id_user?: true
    _all?: true
  }

  export type Tbl_curtida_comentarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_curtida_comentario to aggregate.
     */
    where?: tbl_curtida_comentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_curtida_comentarios to fetch.
     */
    orderBy?: tbl_curtida_comentarioOrderByWithRelationInput | tbl_curtida_comentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_curtida_comentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_curtida_comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_curtida_comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_curtida_comentarios
    **/
    _count?: true | Tbl_curtida_comentarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_curtida_comentarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_curtida_comentarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_curtida_comentarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_curtida_comentarioMaxAggregateInputType
  }

  export type GetTbl_curtida_comentarioAggregateType<T extends Tbl_curtida_comentarioAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_curtida_comentario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_curtida_comentario[P]>
      : GetScalarType<T[P], AggregateTbl_curtida_comentario[P]>
  }




  export type tbl_curtida_comentarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_curtida_comentarioWhereInput
    orderBy?: tbl_curtida_comentarioOrderByWithAggregationInput | tbl_curtida_comentarioOrderByWithAggregationInput[]
    by: Tbl_curtida_comentarioScalarFieldEnum[] | Tbl_curtida_comentarioScalarFieldEnum
    having?: tbl_curtida_comentarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_curtida_comentarioCountAggregateInputType | true
    _avg?: Tbl_curtida_comentarioAvgAggregateInputType
    _sum?: Tbl_curtida_comentarioSumAggregateInputType
    _min?: Tbl_curtida_comentarioMinAggregateInputType
    _max?: Tbl_curtida_comentarioMaxAggregateInputType
  }

  export type Tbl_curtida_comentarioGroupByOutputType = {
    id: number
    id_comentario: number
    id_user: number
    _count: Tbl_curtida_comentarioCountAggregateOutputType | null
    _avg: Tbl_curtida_comentarioAvgAggregateOutputType | null
    _sum: Tbl_curtida_comentarioSumAggregateOutputType | null
    _min: Tbl_curtida_comentarioMinAggregateOutputType | null
    _max: Tbl_curtida_comentarioMaxAggregateOutputType | null
  }

  type GetTbl_curtida_comentarioGroupByPayload<T extends tbl_curtida_comentarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_curtida_comentarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_curtida_comentarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_curtida_comentarioGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_curtida_comentarioGroupByOutputType[P]>
        }
      >
    >


  export type tbl_curtida_comentarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_comentario?: boolean
    id_user?: boolean
    tbl_comentario?: boolean | tbl_comentarioDefaultArgs<ExtArgs>
    tbl_user?: boolean | tbl_userDefaultArgs<ExtArgs>
    tbl_notificacao?: boolean | tbl_curtida_comentario$tbl_notificacaoArgs<ExtArgs>
    _count?: boolean | Tbl_curtida_comentarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_curtida_comentario"]>



  export type tbl_curtida_comentarioSelectScalar = {
    id?: boolean
    id_comentario?: boolean
    id_user?: boolean
  }

  export type tbl_curtida_comentarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_comentario" | "id_user", ExtArgs["result"]["tbl_curtida_comentario"]>
  export type tbl_curtida_comentarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tbl_comentario?: boolean | tbl_comentarioDefaultArgs<ExtArgs>
    tbl_user?: boolean | tbl_userDefaultArgs<ExtArgs>
    tbl_notificacao?: boolean | tbl_curtida_comentario$tbl_notificacaoArgs<ExtArgs>
    _count?: boolean | Tbl_curtida_comentarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tbl_curtida_comentarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_curtida_comentario"
    objects: {
      tbl_comentario: Prisma.$tbl_comentarioPayload<ExtArgs>
      tbl_user: Prisma.$tbl_userPayload<ExtArgs>
      tbl_notificacao: Prisma.$tbl_notificacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_comentario: number
      id_user: number
    }, ExtArgs["result"]["tbl_curtida_comentario"]>
    composites: {}
  }

  type tbl_curtida_comentarioGetPayload<S extends boolean | null | undefined | tbl_curtida_comentarioDefaultArgs> = $Result.GetResult<Prisma.$tbl_curtida_comentarioPayload, S>

  type tbl_curtida_comentarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_curtida_comentarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_curtida_comentarioCountAggregateInputType | true
    }

  export interface tbl_curtida_comentarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_curtida_comentario'], meta: { name: 'tbl_curtida_comentario' } }
    /**
     * Find zero or one Tbl_curtida_comentario that matches the filter.
     * @param {tbl_curtida_comentarioFindUniqueArgs} args - Arguments to find a Tbl_curtida_comentario
     * @example
     * // Get one Tbl_curtida_comentario
     * const tbl_curtida_comentario = await prisma.tbl_curtida_comentario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_curtida_comentarioFindUniqueArgs>(args: SelectSubset<T, tbl_curtida_comentarioFindUniqueArgs<ExtArgs>>): Prisma__tbl_curtida_comentarioClient<$Result.GetResult<Prisma.$tbl_curtida_comentarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_curtida_comentario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_curtida_comentarioFindUniqueOrThrowArgs} args - Arguments to find a Tbl_curtida_comentario
     * @example
     * // Get one Tbl_curtida_comentario
     * const tbl_curtida_comentario = await prisma.tbl_curtida_comentario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_curtida_comentarioFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_curtida_comentarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_curtida_comentarioClient<$Result.GetResult<Prisma.$tbl_curtida_comentarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_curtida_comentario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_curtida_comentarioFindFirstArgs} args - Arguments to find a Tbl_curtida_comentario
     * @example
     * // Get one Tbl_curtida_comentario
     * const tbl_curtida_comentario = await prisma.tbl_curtida_comentario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_curtida_comentarioFindFirstArgs>(args?: SelectSubset<T, tbl_curtida_comentarioFindFirstArgs<ExtArgs>>): Prisma__tbl_curtida_comentarioClient<$Result.GetResult<Prisma.$tbl_curtida_comentarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_curtida_comentario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_curtida_comentarioFindFirstOrThrowArgs} args - Arguments to find a Tbl_curtida_comentario
     * @example
     * // Get one Tbl_curtida_comentario
     * const tbl_curtida_comentario = await prisma.tbl_curtida_comentario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_curtida_comentarioFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_curtida_comentarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_curtida_comentarioClient<$Result.GetResult<Prisma.$tbl_curtida_comentarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_curtida_comentarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_curtida_comentarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_curtida_comentarios
     * const tbl_curtida_comentarios = await prisma.tbl_curtida_comentario.findMany()
     * 
     * // Get first 10 Tbl_curtida_comentarios
     * const tbl_curtida_comentarios = await prisma.tbl_curtida_comentario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbl_curtida_comentarioWithIdOnly = await prisma.tbl_curtida_comentario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tbl_curtida_comentarioFindManyArgs>(args?: SelectSubset<T, tbl_curtida_comentarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_curtida_comentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_curtida_comentario.
     * @param {tbl_curtida_comentarioCreateArgs} args - Arguments to create a Tbl_curtida_comentario.
     * @example
     * // Create one Tbl_curtida_comentario
     * const Tbl_curtida_comentario = await prisma.tbl_curtida_comentario.create({
     *   data: {
     *     // ... data to create a Tbl_curtida_comentario
     *   }
     * })
     * 
     */
    create<T extends tbl_curtida_comentarioCreateArgs>(args: SelectSubset<T, tbl_curtida_comentarioCreateArgs<ExtArgs>>): Prisma__tbl_curtida_comentarioClient<$Result.GetResult<Prisma.$tbl_curtida_comentarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_curtida_comentarios.
     * @param {tbl_curtida_comentarioCreateManyArgs} args - Arguments to create many Tbl_curtida_comentarios.
     * @example
     * // Create many Tbl_curtida_comentarios
     * const tbl_curtida_comentario = await prisma.tbl_curtida_comentario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_curtida_comentarioCreateManyArgs>(args?: SelectSubset<T, tbl_curtida_comentarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_curtida_comentario.
     * @param {tbl_curtida_comentarioDeleteArgs} args - Arguments to delete one Tbl_curtida_comentario.
     * @example
     * // Delete one Tbl_curtida_comentario
     * const Tbl_curtida_comentario = await prisma.tbl_curtida_comentario.delete({
     *   where: {
     *     // ... filter to delete one Tbl_curtida_comentario
     *   }
     * })
     * 
     */
    delete<T extends tbl_curtida_comentarioDeleteArgs>(args: SelectSubset<T, tbl_curtida_comentarioDeleteArgs<ExtArgs>>): Prisma__tbl_curtida_comentarioClient<$Result.GetResult<Prisma.$tbl_curtida_comentarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_curtida_comentario.
     * @param {tbl_curtida_comentarioUpdateArgs} args - Arguments to update one Tbl_curtida_comentario.
     * @example
     * // Update one Tbl_curtida_comentario
     * const tbl_curtida_comentario = await prisma.tbl_curtida_comentario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_curtida_comentarioUpdateArgs>(args: SelectSubset<T, tbl_curtida_comentarioUpdateArgs<ExtArgs>>): Prisma__tbl_curtida_comentarioClient<$Result.GetResult<Prisma.$tbl_curtida_comentarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_curtida_comentarios.
     * @param {tbl_curtida_comentarioDeleteManyArgs} args - Arguments to filter Tbl_curtida_comentarios to delete.
     * @example
     * // Delete a few Tbl_curtida_comentarios
     * const { count } = await prisma.tbl_curtida_comentario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_curtida_comentarioDeleteManyArgs>(args?: SelectSubset<T, tbl_curtida_comentarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_curtida_comentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_curtida_comentarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_curtida_comentarios
     * const tbl_curtida_comentario = await prisma.tbl_curtida_comentario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_curtida_comentarioUpdateManyArgs>(args: SelectSubset<T, tbl_curtida_comentarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_curtida_comentario.
     * @param {tbl_curtida_comentarioUpsertArgs} args - Arguments to update or create a Tbl_curtida_comentario.
     * @example
     * // Update or create a Tbl_curtida_comentario
     * const tbl_curtida_comentario = await prisma.tbl_curtida_comentario.upsert({
     *   create: {
     *     // ... data to create a Tbl_curtida_comentario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_curtida_comentario we want to update
     *   }
     * })
     */
    upsert<T extends tbl_curtida_comentarioUpsertArgs>(args: SelectSubset<T, tbl_curtida_comentarioUpsertArgs<ExtArgs>>): Prisma__tbl_curtida_comentarioClient<$Result.GetResult<Prisma.$tbl_curtida_comentarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_curtida_comentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_curtida_comentarioCountArgs} args - Arguments to filter Tbl_curtida_comentarios to count.
     * @example
     * // Count the number of Tbl_curtida_comentarios
     * const count = await prisma.tbl_curtida_comentario.count({
     *   where: {
     *     // ... the filter for the Tbl_curtida_comentarios we want to count
     *   }
     * })
    **/
    count<T extends tbl_curtida_comentarioCountArgs>(
      args?: Subset<T, tbl_curtida_comentarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_curtida_comentarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_curtida_comentario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_curtida_comentarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tbl_curtida_comentarioAggregateArgs>(args: Subset<T, Tbl_curtida_comentarioAggregateArgs>): Prisma.PrismaPromise<GetTbl_curtida_comentarioAggregateType<T>>

    /**
     * Group by Tbl_curtida_comentario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_curtida_comentarioGroupByArgs} args - Group by arguments.
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
      T extends tbl_curtida_comentarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_curtida_comentarioGroupByArgs['orderBy'] }
        : { orderBy?: tbl_curtida_comentarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tbl_curtida_comentarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_curtida_comentarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_curtida_comentario model
   */
  readonly fields: tbl_curtida_comentarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_curtida_comentario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_curtida_comentarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tbl_comentario<T extends tbl_comentarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tbl_comentarioDefaultArgs<ExtArgs>>): Prisma__tbl_comentarioClient<$Result.GetResult<Prisma.$tbl_comentarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tbl_user<T extends tbl_userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tbl_userDefaultArgs<ExtArgs>>): Prisma__tbl_userClient<$Result.GetResult<Prisma.$tbl_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tbl_notificacao<T extends tbl_curtida_comentario$tbl_notificacaoArgs<ExtArgs> = {}>(args?: Subset<T, tbl_curtida_comentario$tbl_notificacaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_notificacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the tbl_curtida_comentario model
   */
  interface tbl_curtida_comentarioFieldRefs {
    readonly id: FieldRef<"tbl_curtida_comentario", 'Int'>
    readonly id_comentario: FieldRef<"tbl_curtida_comentario", 'Int'>
    readonly id_user: FieldRef<"tbl_curtida_comentario", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * tbl_curtida_comentario findUnique
   */
  export type tbl_curtida_comentarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_curtida_comentario
     */
    select?: tbl_curtida_comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_curtida_comentario
     */
    omit?: tbl_curtida_comentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_curtida_comentarioInclude<ExtArgs> | null
    /**
     * Filter, which tbl_curtida_comentario to fetch.
     */
    where: tbl_curtida_comentarioWhereUniqueInput
  }

  /**
   * tbl_curtida_comentario findUniqueOrThrow
   */
  export type tbl_curtida_comentarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_curtida_comentario
     */
    select?: tbl_curtida_comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_curtida_comentario
     */
    omit?: tbl_curtida_comentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_curtida_comentarioInclude<ExtArgs> | null
    /**
     * Filter, which tbl_curtida_comentario to fetch.
     */
    where: tbl_curtida_comentarioWhereUniqueInput
  }

  /**
   * tbl_curtida_comentario findFirst
   */
  export type tbl_curtida_comentarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_curtida_comentario
     */
    select?: tbl_curtida_comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_curtida_comentario
     */
    omit?: tbl_curtida_comentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_curtida_comentarioInclude<ExtArgs> | null
    /**
     * Filter, which tbl_curtida_comentario to fetch.
     */
    where?: tbl_curtida_comentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_curtida_comentarios to fetch.
     */
    orderBy?: tbl_curtida_comentarioOrderByWithRelationInput | tbl_curtida_comentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_curtida_comentarios.
     */
    cursor?: tbl_curtida_comentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_curtida_comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_curtida_comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_curtida_comentarios.
     */
    distinct?: Tbl_curtida_comentarioScalarFieldEnum | Tbl_curtida_comentarioScalarFieldEnum[]
  }

  /**
   * tbl_curtida_comentario findFirstOrThrow
   */
  export type tbl_curtida_comentarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_curtida_comentario
     */
    select?: tbl_curtida_comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_curtida_comentario
     */
    omit?: tbl_curtida_comentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_curtida_comentarioInclude<ExtArgs> | null
    /**
     * Filter, which tbl_curtida_comentario to fetch.
     */
    where?: tbl_curtida_comentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_curtida_comentarios to fetch.
     */
    orderBy?: tbl_curtida_comentarioOrderByWithRelationInput | tbl_curtida_comentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_curtida_comentarios.
     */
    cursor?: tbl_curtida_comentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_curtida_comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_curtida_comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_curtida_comentarios.
     */
    distinct?: Tbl_curtida_comentarioScalarFieldEnum | Tbl_curtida_comentarioScalarFieldEnum[]
  }

  /**
   * tbl_curtida_comentario findMany
   */
  export type tbl_curtida_comentarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_curtida_comentario
     */
    select?: tbl_curtida_comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_curtida_comentario
     */
    omit?: tbl_curtida_comentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_curtida_comentarioInclude<ExtArgs> | null
    /**
     * Filter, which tbl_curtida_comentarios to fetch.
     */
    where?: tbl_curtida_comentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_curtida_comentarios to fetch.
     */
    orderBy?: tbl_curtida_comentarioOrderByWithRelationInput | tbl_curtida_comentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_curtida_comentarios.
     */
    cursor?: tbl_curtida_comentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_curtida_comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_curtida_comentarios.
     */
    skip?: number
    distinct?: Tbl_curtida_comentarioScalarFieldEnum | Tbl_curtida_comentarioScalarFieldEnum[]
  }

  /**
   * tbl_curtida_comentario create
   */
  export type tbl_curtida_comentarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_curtida_comentario
     */
    select?: tbl_curtida_comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_curtida_comentario
     */
    omit?: tbl_curtida_comentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_curtida_comentarioInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_curtida_comentario.
     */
    data: XOR<tbl_curtida_comentarioCreateInput, tbl_curtida_comentarioUncheckedCreateInput>
  }

  /**
   * tbl_curtida_comentario createMany
   */
  export type tbl_curtida_comentarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_curtida_comentarios.
     */
    data: tbl_curtida_comentarioCreateManyInput | tbl_curtida_comentarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_curtida_comentario update
   */
  export type tbl_curtida_comentarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_curtida_comentario
     */
    select?: tbl_curtida_comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_curtida_comentario
     */
    omit?: tbl_curtida_comentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_curtida_comentarioInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_curtida_comentario.
     */
    data: XOR<tbl_curtida_comentarioUpdateInput, tbl_curtida_comentarioUncheckedUpdateInput>
    /**
     * Choose, which tbl_curtida_comentario to update.
     */
    where: tbl_curtida_comentarioWhereUniqueInput
  }

  /**
   * tbl_curtida_comentario updateMany
   */
  export type tbl_curtida_comentarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_curtida_comentarios.
     */
    data: XOR<tbl_curtida_comentarioUpdateManyMutationInput, tbl_curtida_comentarioUncheckedUpdateManyInput>
    /**
     * Filter which tbl_curtida_comentarios to update
     */
    where?: tbl_curtida_comentarioWhereInput
    /**
     * Limit how many tbl_curtida_comentarios to update.
     */
    limit?: number
  }

  /**
   * tbl_curtida_comentario upsert
   */
  export type tbl_curtida_comentarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_curtida_comentario
     */
    select?: tbl_curtida_comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_curtida_comentario
     */
    omit?: tbl_curtida_comentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_curtida_comentarioInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_curtida_comentario to update in case it exists.
     */
    where: tbl_curtida_comentarioWhereUniqueInput
    /**
     * In case the tbl_curtida_comentario found by the `where` argument doesn't exist, create a new tbl_curtida_comentario with this data.
     */
    create: XOR<tbl_curtida_comentarioCreateInput, tbl_curtida_comentarioUncheckedCreateInput>
    /**
     * In case the tbl_curtida_comentario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_curtida_comentarioUpdateInput, tbl_curtida_comentarioUncheckedUpdateInput>
  }

  /**
   * tbl_curtida_comentario delete
   */
  export type tbl_curtida_comentarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_curtida_comentario
     */
    select?: tbl_curtida_comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_curtida_comentario
     */
    omit?: tbl_curtida_comentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_curtida_comentarioInclude<ExtArgs> | null
    /**
     * Filter which tbl_curtida_comentario to delete.
     */
    where: tbl_curtida_comentarioWhereUniqueInput
  }

  /**
   * tbl_curtida_comentario deleteMany
   */
  export type tbl_curtida_comentarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_curtida_comentarios to delete
     */
    where?: tbl_curtida_comentarioWhereInput
    /**
     * Limit how many tbl_curtida_comentarios to delete.
     */
    limit?: number
  }

  /**
   * tbl_curtida_comentario.tbl_notificacao
   */
  export type tbl_curtida_comentario$tbl_notificacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_notificacao
     */
    select?: tbl_notificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_notificacao
     */
    omit?: tbl_notificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_notificacaoInclude<ExtArgs> | null
    where?: tbl_notificacaoWhereInput
    orderBy?: tbl_notificacaoOrderByWithRelationInput | tbl_notificacaoOrderByWithRelationInput[]
    cursor?: tbl_notificacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_notificacaoScalarFieldEnum | Tbl_notificacaoScalarFieldEnum[]
  }

  /**
   * tbl_curtida_comentario without action
   */
  export type tbl_curtida_comentarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_curtida_comentario
     */
    select?: tbl_curtida_comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_curtida_comentario
     */
    omit?: tbl_curtida_comentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_curtida_comentarioInclude<ExtArgs> | null
  }


  /**
   * Model tbl_exercicio
   */

  export type AggregateTbl_exercicio = {
    _count: Tbl_exercicioCountAggregateOutputType | null
    _avg: Tbl_exercicioAvgAggregateOutputType | null
    _sum: Tbl_exercicioSumAggregateOutputType | null
    _min: Tbl_exercicioMinAggregateOutputType | null
    _max: Tbl_exercicioMaxAggregateOutputType | null
  }

  export type Tbl_exercicioAvgAggregateOutputType = {
    id: number | null
  }

  export type Tbl_exercicioSumAggregateOutputType = {
    id: number | null
  }

  export type Tbl_exercicioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    gif: string | null
    descricao: string | null
    grupo_muscular: string | null
  }

  export type Tbl_exercicioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    gif: string | null
    descricao: string | null
    grupo_muscular: string | null
  }

  export type Tbl_exercicioCountAggregateOutputType = {
    id: number
    nome: number
    gif: number
    descricao: number
    grupo_muscular: number
    _all: number
  }


  export type Tbl_exercicioAvgAggregateInputType = {
    id?: true
  }

  export type Tbl_exercicioSumAggregateInputType = {
    id?: true
  }

  export type Tbl_exercicioMinAggregateInputType = {
    id?: true
    nome?: true
    gif?: true
    descricao?: true
    grupo_muscular?: true
  }

  export type Tbl_exercicioMaxAggregateInputType = {
    id?: true
    nome?: true
    gif?: true
    descricao?: true
    grupo_muscular?: true
  }

  export type Tbl_exercicioCountAggregateInputType = {
    id?: true
    nome?: true
    gif?: true
    descricao?: true
    grupo_muscular?: true
    _all?: true
  }

  export type Tbl_exercicioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_exercicio to aggregate.
     */
    where?: tbl_exercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_exercicios to fetch.
     */
    orderBy?: tbl_exercicioOrderByWithRelationInput | tbl_exercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_exercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_exercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_exercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_exercicios
    **/
    _count?: true | Tbl_exercicioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_exercicioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_exercicioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_exercicioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_exercicioMaxAggregateInputType
  }

  export type GetTbl_exercicioAggregateType<T extends Tbl_exercicioAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_exercicio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_exercicio[P]>
      : GetScalarType<T[P], AggregateTbl_exercicio[P]>
  }




  export type tbl_exercicioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_exercicioWhereInput
    orderBy?: tbl_exercicioOrderByWithAggregationInput | tbl_exercicioOrderByWithAggregationInput[]
    by: Tbl_exercicioScalarFieldEnum[] | Tbl_exercicioScalarFieldEnum
    having?: tbl_exercicioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_exercicioCountAggregateInputType | true
    _avg?: Tbl_exercicioAvgAggregateInputType
    _sum?: Tbl_exercicioSumAggregateInputType
    _min?: Tbl_exercicioMinAggregateInputType
    _max?: Tbl_exercicioMaxAggregateInputType
  }

  export type Tbl_exercicioGroupByOutputType = {
    id: number
    nome: string
    gif: string
    descricao: string
    grupo_muscular: string
    _count: Tbl_exercicioCountAggregateOutputType | null
    _avg: Tbl_exercicioAvgAggregateOutputType | null
    _sum: Tbl_exercicioSumAggregateOutputType | null
    _min: Tbl_exercicioMinAggregateOutputType | null
    _max: Tbl_exercicioMaxAggregateOutputType | null
  }

  type GetTbl_exercicioGroupByPayload<T extends tbl_exercicioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_exercicioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_exercicioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_exercicioGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_exercicioGroupByOutputType[P]>
        }
      >
    >


  export type tbl_exercicioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    gif?: boolean
    descricao?: boolean
    grupo_muscular?: boolean
    tbl_exercicio_treino?: boolean | tbl_exercicio$tbl_exercicio_treinoArgs<ExtArgs>
    tbl_serie?: boolean | tbl_exercicio$tbl_serieArgs<ExtArgs>
    _count?: boolean | Tbl_exercicioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_exercicio"]>



  export type tbl_exercicioSelectScalar = {
    id?: boolean
    nome?: boolean
    gif?: boolean
    descricao?: boolean
    grupo_muscular?: boolean
  }

  export type tbl_exercicioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "gif" | "descricao" | "grupo_muscular", ExtArgs["result"]["tbl_exercicio"]>
  export type tbl_exercicioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tbl_exercicio_treino?: boolean | tbl_exercicio$tbl_exercicio_treinoArgs<ExtArgs>
    tbl_serie?: boolean | tbl_exercicio$tbl_serieArgs<ExtArgs>
    _count?: boolean | Tbl_exercicioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tbl_exercicioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_exercicio"
    objects: {
      tbl_exercicio_treino: Prisma.$tbl_exercicio_treinoPayload<ExtArgs>[]
      tbl_serie: Prisma.$tbl_seriePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      gif: string
      descricao: string
      grupo_muscular: string
    }, ExtArgs["result"]["tbl_exercicio"]>
    composites: {}
  }

  type tbl_exercicioGetPayload<S extends boolean | null | undefined | tbl_exercicioDefaultArgs> = $Result.GetResult<Prisma.$tbl_exercicioPayload, S>

  type tbl_exercicioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_exercicioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_exercicioCountAggregateInputType | true
    }

  export interface tbl_exercicioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_exercicio'], meta: { name: 'tbl_exercicio' } }
    /**
     * Find zero or one Tbl_exercicio that matches the filter.
     * @param {tbl_exercicioFindUniqueArgs} args - Arguments to find a Tbl_exercicio
     * @example
     * // Get one Tbl_exercicio
     * const tbl_exercicio = await prisma.tbl_exercicio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_exercicioFindUniqueArgs>(args: SelectSubset<T, tbl_exercicioFindUniqueArgs<ExtArgs>>): Prisma__tbl_exercicioClient<$Result.GetResult<Prisma.$tbl_exercicioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_exercicio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_exercicioFindUniqueOrThrowArgs} args - Arguments to find a Tbl_exercicio
     * @example
     * // Get one Tbl_exercicio
     * const tbl_exercicio = await prisma.tbl_exercicio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_exercicioFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_exercicioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_exercicioClient<$Result.GetResult<Prisma.$tbl_exercicioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_exercicio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_exercicioFindFirstArgs} args - Arguments to find a Tbl_exercicio
     * @example
     * // Get one Tbl_exercicio
     * const tbl_exercicio = await prisma.tbl_exercicio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_exercicioFindFirstArgs>(args?: SelectSubset<T, tbl_exercicioFindFirstArgs<ExtArgs>>): Prisma__tbl_exercicioClient<$Result.GetResult<Prisma.$tbl_exercicioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_exercicio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_exercicioFindFirstOrThrowArgs} args - Arguments to find a Tbl_exercicio
     * @example
     * // Get one Tbl_exercicio
     * const tbl_exercicio = await prisma.tbl_exercicio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_exercicioFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_exercicioFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_exercicioClient<$Result.GetResult<Prisma.$tbl_exercicioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_exercicios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_exercicioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_exercicios
     * const tbl_exercicios = await prisma.tbl_exercicio.findMany()
     * 
     * // Get first 10 Tbl_exercicios
     * const tbl_exercicios = await prisma.tbl_exercicio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbl_exercicioWithIdOnly = await prisma.tbl_exercicio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tbl_exercicioFindManyArgs>(args?: SelectSubset<T, tbl_exercicioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_exercicioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_exercicio.
     * @param {tbl_exercicioCreateArgs} args - Arguments to create a Tbl_exercicio.
     * @example
     * // Create one Tbl_exercicio
     * const Tbl_exercicio = await prisma.tbl_exercicio.create({
     *   data: {
     *     // ... data to create a Tbl_exercicio
     *   }
     * })
     * 
     */
    create<T extends tbl_exercicioCreateArgs>(args: SelectSubset<T, tbl_exercicioCreateArgs<ExtArgs>>): Prisma__tbl_exercicioClient<$Result.GetResult<Prisma.$tbl_exercicioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_exercicios.
     * @param {tbl_exercicioCreateManyArgs} args - Arguments to create many Tbl_exercicios.
     * @example
     * // Create many Tbl_exercicios
     * const tbl_exercicio = await prisma.tbl_exercicio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_exercicioCreateManyArgs>(args?: SelectSubset<T, tbl_exercicioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_exercicio.
     * @param {tbl_exercicioDeleteArgs} args - Arguments to delete one Tbl_exercicio.
     * @example
     * // Delete one Tbl_exercicio
     * const Tbl_exercicio = await prisma.tbl_exercicio.delete({
     *   where: {
     *     // ... filter to delete one Tbl_exercicio
     *   }
     * })
     * 
     */
    delete<T extends tbl_exercicioDeleteArgs>(args: SelectSubset<T, tbl_exercicioDeleteArgs<ExtArgs>>): Prisma__tbl_exercicioClient<$Result.GetResult<Prisma.$tbl_exercicioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_exercicio.
     * @param {tbl_exercicioUpdateArgs} args - Arguments to update one Tbl_exercicio.
     * @example
     * // Update one Tbl_exercicio
     * const tbl_exercicio = await prisma.tbl_exercicio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_exercicioUpdateArgs>(args: SelectSubset<T, tbl_exercicioUpdateArgs<ExtArgs>>): Prisma__tbl_exercicioClient<$Result.GetResult<Prisma.$tbl_exercicioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_exercicios.
     * @param {tbl_exercicioDeleteManyArgs} args - Arguments to filter Tbl_exercicios to delete.
     * @example
     * // Delete a few Tbl_exercicios
     * const { count } = await prisma.tbl_exercicio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_exercicioDeleteManyArgs>(args?: SelectSubset<T, tbl_exercicioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_exercicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_exercicioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_exercicios
     * const tbl_exercicio = await prisma.tbl_exercicio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_exercicioUpdateManyArgs>(args: SelectSubset<T, tbl_exercicioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_exercicio.
     * @param {tbl_exercicioUpsertArgs} args - Arguments to update or create a Tbl_exercicio.
     * @example
     * // Update or create a Tbl_exercicio
     * const tbl_exercicio = await prisma.tbl_exercicio.upsert({
     *   create: {
     *     // ... data to create a Tbl_exercicio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_exercicio we want to update
     *   }
     * })
     */
    upsert<T extends tbl_exercicioUpsertArgs>(args: SelectSubset<T, tbl_exercicioUpsertArgs<ExtArgs>>): Prisma__tbl_exercicioClient<$Result.GetResult<Prisma.$tbl_exercicioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_exercicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_exercicioCountArgs} args - Arguments to filter Tbl_exercicios to count.
     * @example
     * // Count the number of Tbl_exercicios
     * const count = await prisma.tbl_exercicio.count({
     *   where: {
     *     // ... the filter for the Tbl_exercicios we want to count
     *   }
     * })
    **/
    count<T extends tbl_exercicioCountArgs>(
      args?: Subset<T, tbl_exercicioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_exercicioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_exercicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_exercicioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tbl_exercicioAggregateArgs>(args: Subset<T, Tbl_exercicioAggregateArgs>): Prisma.PrismaPromise<GetTbl_exercicioAggregateType<T>>

    /**
     * Group by Tbl_exercicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_exercicioGroupByArgs} args - Group by arguments.
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
      T extends tbl_exercicioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_exercicioGroupByArgs['orderBy'] }
        : { orderBy?: tbl_exercicioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tbl_exercicioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_exercicioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_exercicio model
   */
  readonly fields: tbl_exercicioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_exercicio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_exercicioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tbl_exercicio_treino<T extends tbl_exercicio$tbl_exercicio_treinoArgs<ExtArgs> = {}>(args?: Subset<T, tbl_exercicio$tbl_exercicio_treinoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_exercicio_treinoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tbl_serie<T extends tbl_exercicio$tbl_serieArgs<ExtArgs> = {}>(args?: Subset<T, tbl_exercicio$tbl_serieArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_seriePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the tbl_exercicio model
   */
  interface tbl_exercicioFieldRefs {
    readonly id: FieldRef<"tbl_exercicio", 'Int'>
    readonly nome: FieldRef<"tbl_exercicio", 'String'>
    readonly gif: FieldRef<"tbl_exercicio", 'String'>
    readonly descricao: FieldRef<"tbl_exercicio", 'String'>
    readonly grupo_muscular: FieldRef<"tbl_exercicio", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tbl_exercicio findUnique
   */
  export type tbl_exercicioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_exercicio
     */
    select?: tbl_exercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_exercicio
     */
    omit?: tbl_exercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_exercicioInclude<ExtArgs> | null
    /**
     * Filter, which tbl_exercicio to fetch.
     */
    where: tbl_exercicioWhereUniqueInput
  }

  /**
   * tbl_exercicio findUniqueOrThrow
   */
  export type tbl_exercicioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_exercicio
     */
    select?: tbl_exercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_exercicio
     */
    omit?: tbl_exercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_exercicioInclude<ExtArgs> | null
    /**
     * Filter, which tbl_exercicio to fetch.
     */
    where: tbl_exercicioWhereUniqueInput
  }

  /**
   * tbl_exercicio findFirst
   */
  export type tbl_exercicioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_exercicio
     */
    select?: tbl_exercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_exercicio
     */
    omit?: tbl_exercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_exercicioInclude<ExtArgs> | null
    /**
     * Filter, which tbl_exercicio to fetch.
     */
    where?: tbl_exercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_exercicios to fetch.
     */
    orderBy?: tbl_exercicioOrderByWithRelationInput | tbl_exercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_exercicios.
     */
    cursor?: tbl_exercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_exercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_exercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_exercicios.
     */
    distinct?: Tbl_exercicioScalarFieldEnum | Tbl_exercicioScalarFieldEnum[]
  }

  /**
   * tbl_exercicio findFirstOrThrow
   */
  export type tbl_exercicioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_exercicio
     */
    select?: tbl_exercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_exercicio
     */
    omit?: tbl_exercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_exercicioInclude<ExtArgs> | null
    /**
     * Filter, which tbl_exercicio to fetch.
     */
    where?: tbl_exercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_exercicios to fetch.
     */
    orderBy?: tbl_exercicioOrderByWithRelationInput | tbl_exercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_exercicios.
     */
    cursor?: tbl_exercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_exercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_exercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_exercicios.
     */
    distinct?: Tbl_exercicioScalarFieldEnum | Tbl_exercicioScalarFieldEnum[]
  }

  /**
   * tbl_exercicio findMany
   */
  export type tbl_exercicioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_exercicio
     */
    select?: tbl_exercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_exercicio
     */
    omit?: tbl_exercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_exercicioInclude<ExtArgs> | null
    /**
     * Filter, which tbl_exercicios to fetch.
     */
    where?: tbl_exercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_exercicios to fetch.
     */
    orderBy?: tbl_exercicioOrderByWithRelationInput | tbl_exercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_exercicios.
     */
    cursor?: tbl_exercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_exercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_exercicios.
     */
    skip?: number
    distinct?: Tbl_exercicioScalarFieldEnum | Tbl_exercicioScalarFieldEnum[]
  }

  /**
   * tbl_exercicio create
   */
  export type tbl_exercicioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_exercicio
     */
    select?: tbl_exercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_exercicio
     */
    omit?: tbl_exercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_exercicioInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_exercicio.
     */
    data: XOR<tbl_exercicioCreateInput, tbl_exercicioUncheckedCreateInput>
  }

  /**
   * tbl_exercicio createMany
   */
  export type tbl_exercicioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_exercicios.
     */
    data: tbl_exercicioCreateManyInput | tbl_exercicioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_exercicio update
   */
  export type tbl_exercicioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_exercicio
     */
    select?: tbl_exercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_exercicio
     */
    omit?: tbl_exercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_exercicioInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_exercicio.
     */
    data: XOR<tbl_exercicioUpdateInput, tbl_exercicioUncheckedUpdateInput>
    /**
     * Choose, which tbl_exercicio to update.
     */
    where: tbl_exercicioWhereUniqueInput
  }

  /**
   * tbl_exercicio updateMany
   */
  export type tbl_exercicioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_exercicios.
     */
    data: XOR<tbl_exercicioUpdateManyMutationInput, tbl_exercicioUncheckedUpdateManyInput>
    /**
     * Filter which tbl_exercicios to update
     */
    where?: tbl_exercicioWhereInput
    /**
     * Limit how many tbl_exercicios to update.
     */
    limit?: number
  }

  /**
   * tbl_exercicio upsert
   */
  export type tbl_exercicioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_exercicio
     */
    select?: tbl_exercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_exercicio
     */
    omit?: tbl_exercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_exercicioInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_exercicio to update in case it exists.
     */
    where: tbl_exercicioWhereUniqueInput
    /**
     * In case the tbl_exercicio found by the `where` argument doesn't exist, create a new tbl_exercicio with this data.
     */
    create: XOR<tbl_exercicioCreateInput, tbl_exercicioUncheckedCreateInput>
    /**
     * In case the tbl_exercicio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_exercicioUpdateInput, tbl_exercicioUncheckedUpdateInput>
  }

  /**
   * tbl_exercicio delete
   */
  export type tbl_exercicioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_exercicio
     */
    select?: tbl_exercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_exercicio
     */
    omit?: tbl_exercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_exercicioInclude<ExtArgs> | null
    /**
     * Filter which tbl_exercicio to delete.
     */
    where: tbl_exercicioWhereUniqueInput
  }

  /**
   * tbl_exercicio deleteMany
   */
  export type tbl_exercicioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_exercicios to delete
     */
    where?: tbl_exercicioWhereInput
    /**
     * Limit how many tbl_exercicios to delete.
     */
    limit?: number
  }

  /**
   * tbl_exercicio.tbl_exercicio_treino
   */
  export type tbl_exercicio$tbl_exercicio_treinoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_exercicio_treino
     */
    select?: tbl_exercicio_treinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_exercicio_treino
     */
    omit?: tbl_exercicio_treinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_exercicio_treinoInclude<ExtArgs> | null
    where?: tbl_exercicio_treinoWhereInput
    orderBy?: tbl_exercicio_treinoOrderByWithRelationInput | tbl_exercicio_treinoOrderByWithRelationInput[]
    cursor?: tbl_exercicio_treinoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_exercicio_treinoScalarFieldEnum | Tbl_exercicio_treinoScalarFieldEnum[]
  }

  /**
   * tbl_exercicio.tbl_serie
   */
  export type tbl_exercicio$tbl_serieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_serie
     */
    select?: tbl_serieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_serie
     */
    omit?: tbl_serieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_serieInclude<ExtArgs> | null
    where?: tbl_serieWhereInput
    orderBy?: tbl_serieOrderByWithRelationInput | tbl_serieOrderByWithRelationInput[]
    cursor?: tbl_serieWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_serieScalarFieldEnum | Tbl_serieScalarFieldEnum[]
  }

  /**
   * tbl_exercicio without action
   */
  export type tbl_exercicioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_exercicio
     */
    select?: tbl_exercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_exercicio
     */
    omit?: tbl_exercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_exercicioInclude<ExtArgs> | null
  }


  /**
   * Model tbl_exercicio_treino
   */

  export type AggregateTbl_exercicio_treino = {
    _count: Tbl_exercicio_treinoCountAggregateOutputType | null
    _avg: Tbl_exercicio_treinoAvgAggregateOutputType | null
    _sum: Tbl_exercicio_treinoSumAggregateOutputType | null
    _min: Tbl_exercicio_treinoMinAggregateOutputType | null
    _max: Tbl_exercicio_treinoMaxAggregateOutputType | null
  }

  export type Tbl_exercicio_treinoAvgAggregateOutputType = {
    id: number | null
    id_treino: number | null
    id_exercicio: number | null
    id_serie: number | null
  }

  export type Tbl_exercicio_treinoSumAggregateOutputType = {
    id: number | null
    id_treino: number | null
    id_exercicio: number | null
    id_serie: number | null
  }

  export type Tbl_exercicio_treinoMinAggregateOutputType = {
    id: number | null
    id_treino: number | null
    id_exercicio: number | null
    id_serie: number | null
  }

  export type Tbl_exercicio_treinoMaxAggregateOutputType = {
    id: number | null
    id_treino: number | null
    id_exercicio: number | null
    id_serie: number | null
  }

  export type Tbl_exercicio_treinoCountAggregateOutputType = {
    id: number
    id_treino: number
    id_exercicio: number
    id_serie: number
    _all: number
  }


  export type Tbl_exercicio_treinoAvgAggregateInputType = {
    id?: true
    id_treino?: true
    id_exercicio?: true
    id_serie?: true
  }

  export type Tbl_exercicio_treinoSumAggregateInputType = {
    id?: true
    id_treino?: true
    id_exercicio?: true
    id_serie?: true
  }

  export type Tbl_exercicio_treinoMinAggregateInputType = {
    id?: true
    id_treino?: true
    id_exercicio?: true
    id_serie?: true
  }

  export type Tbl_exercicio_treinoMaxAggregateInputType = {
    id?: true
    id_treino?: true
    id_exercicio?: true
    id_serie?: true
  }

  export type Tbl_exercicio_treinoCountAggregateInputType = {
    id?: true
    id_treino?: true
    id_exercicio?: true
    id_serie?: true
    _all?: true
  }

  export type Tbl_exercicio_treinoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_exercicio_treino to aggregate.
     */
    where?: tbl_exercicio_treinoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_exercicio_treinos to fetch.
     */
    orderBy?: tbl_exercicio_treinoOrderByWithRelationInput | tbl_exercicio_treinoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_exercicio_treinoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_exercicio_treinos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_exercicio_treinos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_exercicio_treinos
    **/
    _count?: true | Tbl_exercicio_treinoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_exercicio_treinoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_exercicio_treinoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_exercicio_treinoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_exercicio_treinoMaxAggregateInputType
  }

  export type GetTbl_exercicio_treinoAggregateType<T extends Tbl_exercicio_treinoAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_exercicio_treino]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_exercicio_treino[P]>
      : GetScalarType<T[P], AggregateTbl_exercicio_treino[P]>
  }




  export type tbl_exercicio_treinoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_exercicio_treinoWhereInput
    orderBy?: tbl_exercicio_treinoOrderByWithAggregationInput | tbl_exercicio_treinoOrderByWithAggregationInput[]
    by: Tbl_exercicio_treinoScalarFieldEnum[] | Tbl_exercicio_treinoScalarFieldEnum
    having?: tbl_exercicio_treinoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_exercicio_treinoCountAggregateInputType | true
    _avg?: Tbl_exercicio_treinoAvgAggregateInputType
    _sum?: Tbl_exercicio_treinoSumAggregateInputType
    _min?: Tbl_exercicio_treinoMinAggregateInputType
    _max?: Tbl_exercicio_treinoMaxAggregateInputType
  }

  export type Tbl_exercicio_treinoGroupByOutputType = {
    id: number
    id_treino: number
    id_exercicio: number
    id_serie: number
    _count: Tbl_exercicio_treinoCountAggregateOutputType | null
    _avg: Tbl_exercicio_treinoAvgAggregateOutputType | null
    _sum: Tbl_exercicio_treinoSumAggregateOutputType | null
    _min: Tbl_exercicio_treinoMinAggregateOutputType | null
    _max: Tbl_exercicio_treinoMaxAggregateOutputType | null
  }

  type GetTbl_exercicio_treinoGroupByPayload<T extends tbl_exercicio_treinoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_exercicio_treinoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_exercicio_treinoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_exercicio_treinoGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_exercicio_treinoGroupByOutputType[P]>
        }
      >
    >


  export type tbl_exercicio_treinoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_treino?: boolean
    id_exercicio?: boolean
    id_serie?: boolean
    tbl_treino?: boolean | tbl_treinoDefaultArgs<ExtArgs>
    tbl_exercicio?: boolean | tbl_exercicioDefaultArgs<ExtArgs>
    tbl_serie?: boolean | tbl_serieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_exercicio_treino"]>



  export type tbl_exercicio_treinoSelectScalar = {
    id?: boolean
    id_treino?: boolean
    id_exercicio?: boolean
    id_serie?: boolean
  }

  export type tbl_exercicio_treinoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_treino" | "id_exercicio" | "id_serie", ExtArgs["result"]["tbl_exercicio_treino"]>
  export type tbl_exercicio_treinoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tbl_treino?: boolean | tbl_treinoDefaultArgs<ExtArgs>
    tbl_exercicio?: boolean | tbl_exercicioDefaultArgs<ExtArgs>
    tbl_serie?: boolean | tbl_serieDefaultArgs<ExtArgs>
  }

  export type $tbl_exercicio_treinoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_exercicio_treino"
    objects: {
      tbl_treino: Prisma.$tbl_treinoPayload<ExtArgs>
      tbl_exercicio: Prisma.$tbl_exercicioPayload<ExtArgs>
      tbl_serie: Prisma.$tbl_seriePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_treino: number
      id_exercicio: number
      id_serie: number
    }, ExtArgs["result"]["tbl_exercicio_treino"]>
    composites: {}
  }

  type tbl_exercicio_treinoGetPayload<S extends boolean | null | undefined | tbl_exercicio_treinoDefaultArgs> = $Result.GetResult<Prisma.$tbl_exercicio_treinoPayload, S>

  type tbl_exercicio_treinoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_exercicio_treinoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_exercicio_treinoCountAggregateInputType | true
    }

  export interface tbl_exercicio_treinoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_exercicio_treino'], meta: { name: 'tbl_exercicio_treino' } }
    /**
     * Find zero or one Tbl_exercicio_treino that matches the filter.
     * @param {tbl_exercicio_treinoFindUniqueArgs} args - Arguments to find a Tbl_exercicio_treino
     * @example
     * // Get one Tbl_exercicio_treino
     * const tbl_exercicio_treino = await prisma.tbl_exercicio_treino.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_exercicio_treinoFindUniqueArgs>(args: SelectSubset<T, tbl_exercicio_treinoFindUniqueArgs<ExtArgs>>): Prisma__tbl_exercicio_treinoClient<$Result.GetResult<Prisma.$tbl_exercicio_treinoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_exercicio_treino that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_exercicio_treinoFindUniqueOrThrowArgs} args - Arguments to find a Tbl_exercicio_treino
     * @example
     * // Get one Tbl_exercicio_treino
     * const tbl_exercicio_treino = await prisma.tbl_exercicio_treino.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_exercicio_treinoFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_exercicio_treinoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_exercicio_treinoClient<$Result.GetResult<Prisma.$tbl_exercicio_treinoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_exercicio_treino that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_exercicio_treinoFindFirstArgs} args - Arguments to find a Tbl_exercicio_treino
     * @example
     * // Get one Tbl_exercicio_treino
     * const tbl_exercicio_treino = await prisma.tbl_exercicio_treino.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_exercicio_treinoFindFirstArgs>(args?: SelectSubset<T, tbl_exercicio_treinoFindFirstArgs<ExtArgs>>): Prisma__tbl_exercicio_treinoClient<$Result.GetResult<Prisma.$tbl_exercicio_treinoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_exercicio_treino that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_exercicio_treinoFindFirstOrThrowArgs} args - Arguments to find a Tbl_exercicio_treino
     * @example
     * // Get one Tbl_exercicio_treino
     * const tbl_exercicio_treino = await prisma.tbl_exercicio_treino.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_exercicio_treinoFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_exercicio_treinoFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_exercicio_treinoClient<$Result.GetResult<Prisma.$tbl_exercicio_treinoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_exercicio_treinos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_exercicio_treinoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_exercicio_treinos
     * const tbl_exercicio_treinos = await prisma.tbl_exercicio_treino.findMany()
     * 
     * // Get first 10 Tbl_exercicio_treinos
     * const tbl_exercicio_treinos = await prisma.tbl_exercicio_treino.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbl_exercicio_treinoWithIdOnly = await prisma.tbl_exercicio_treino.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tbl_exercicio_treinoFindManyArgs>(args?: SelectSubset<T, tbl_exercicio_treinoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_exercicio_treinoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_exercicio_treino.
     * @param {tbl_exercicio_treinoCreateArgs} args - Arguments to create a Tbl_exercicio_treino.
     * @example
     * // Create one Tbl_exercicio_treino
     * const Tbl_exercicio_treino = await prisma.tbl_exercicio_treino.create({
     *   data: {
     *     // ... data to create a Tbl_exercicio_treino
     *   }
     * })
     * 
     */
    create<T extends tbl_exercicio_treinoCreateArgs>(args: SelectSubset<T, tbl_exercicio_treinoCreateArgs<ExtArgs>>): Prisma__tbl_exercicio_treinoClient<$Result.GetResult<Prisma.$tbl_exercicio_treinoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_exercicio_treinos.
     * @param {tbl_exercicio_treinoCreateManyArgs} args - Arguments to create many Tbl_exercicio_treinos.
     * @example
     * // Create many Tbl_exercicio_treinos
     * const tbl_exercicio_treino = await prisma.tbl_exercicio_treino.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_exercicio_treinoCreateManyArgs>(args?: SelectSubset<T, tbl_exercicio_treinoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_exercicio_treino.
     * @param {tbl_exercicio_treinoDeleteArgs} args - Arguments to delete one Tbl_exercicio_treino.
     * @example
     * // Delete one Tbl_exercicio_treino
     * const Tbl_exercicio_treino = await prisma.tbl_exercicio_treino.delete({
     *   where: {
     *     // ... filter to delete one Tbl_exercicio_treino
     *   }
     * })
     * 
     */
    delete<T extends tbl_exercicio_treinoDeleteArgs>(args: SelectSubset<T, tbl_exercicio_treinoDeleteArgs<ExtArgs>>): Prisma__tbl_exercicio_treinoClient<$Result.GetResult<Prisma.$tbl_exercicio_treinoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_exercicio_treino.
     * @param {tbl_exercicio_treinoUpdateArgs} args - Arguments to update one Tbl_exercicio_treino.
     * @example
     * // Update one Tbl_exercicio_treino
     * const tbl_exercicio_treino = await prisma.tbl_exercicio_treino.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_exercicio_treinoUpdateArgs>(args: SelectSubset<T, tbl_exercicio_treinoUpdateArgs<ExtArgs>>): Prisma__tbl_exercicio_treinoClient<$Result.GetResult<Prisma.$tbl_exercicio_treinoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_exercicio_treinos.
     * @param {tbl_exercicio_treinoDeleteManyArgs} args - Arguments to filter Tbl_exercicio_treinos to delete.
     * @example
     * // Delete a few Tbl_exercicio_treinos
     * const { count } = await prisma.tbl_exercicio_treino.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_exercicio_treinoDeleteManyArgs>(args?: SelectSubset<T, tbl_exercicio_treinoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_exercicio_treinos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_exercicio_treinoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_exercicio_treinos
     * const tbl_exercicio_treino = await prisma.tbl_exercicio_treino.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_exercicio_treinoUpdateManyArgs>(args: SelectSubset<T, tbl_exercicio_treinoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_exercicio_treino.
     * @param {tbl_exercicio_treinoUpsertArgs} args - Arguments to update or create a Tbl_exercicio_treino.
     * @example
     * // Update or create a Tbl_exercicio_treino
     * const tbl_exercicio_treino = await prisma.tbl_exercicio_treino.upsert({
     *   create: {
     *     // ... data to create a Tbl_exercicio_treino
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_exercicio_treino we want to update
     *   }
     * })
     */
    upsert<T extends tbl_exercicio_treinoUpsertArgs>(args: SelectSubset<T, tbl_exercicio_treinoUpsertArgs<ExtArgs>>): Prisma__tbl_exercicio_treinoClient<$Result.GetResult<Prisma.$tbl_exercicio_treinoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_exercicio_treinos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_exercicio_treinoCountArgs} args - Arguments to filter Tbl_exercicio_treinos to count.
     * @example
     * // Count the number of Tbl_exercicio_treinos
     * const count = await prisma.tbl_exercicio_treino.count({
     *   where: {
     *     // ... the filter for the Tbl_exercicio_treinos we want to count
     *   }
     * })
    **/
    count<T extends tbl_exercicio_treinoCountArgs>(
      args?: Subset<T, tbl_exercicio_treinoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_exercicio_treinoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_exercicio_treino.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_exercicio_treinoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tbl_exercicio_treinoAggregateArgs>(args: Subset<T, Tbl_exercicio_treinoAggregateArgs>): Prisma.PrismaPromise<GetTbl_exercicio_treinoAggregateType<T>>

    /**
     * Group by Tbl_exercicio_treino.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_exercicio_treinoGroupByArgs} args - Group by arguments.
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
      T extends tbl_exercicio_treinoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_exercicio_treinoGroupByArgs['orderBy'] }
        : { orderBy?: tbl_exercicio_treinoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tbl_exercicio_treinoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_exercicio_treinoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_exercicio_treino model
   */
  readonly fields: tbl_exercicio_treinoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_exercicio_treino.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_exercicio_treinoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tbl_treino<T extends tbl_treinoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tbl_treinoDefaultArgs<ExtArgs>>): Prisma__tbl_treinoClient<$Result.GetResult<Prisma.$tbl_treinoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tbl_exercicio<T extends tbl_exercicioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tbl_exercicioDefaultArgs<ExtArgs>>): Prisma__tbl_exercicioClient<$Result.GetResult<Prisma.$tbl_exercicioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tbl_serie<T extends tbl_serieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tbl_serieDefaultArgs<ExtArgs>>): Prisma__tbl_serieClient<$Result.GetResult<Prisma.$tbl_seriePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the tbl_exercicio_treino model
   */
  interface tbl_exercicio_treinoFieldRefs {
    readonly id: FieldRef<"tbl_exercicio_treino", 'Int'>
    readonly id_treino: FieldRef<"tbl_exercicio_treino", 'Int'>
    readonly id_exercicio: FieldRef<"tbl_exercicio_treino", 'Int'>
    readonly id_serie: FieldRef<"tbl_exercicio_treino", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * tbl_exercicio_treino findUnique
   */
  export type tbl_exercicio_treinoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_exercicio_treino
     */
    select?: tbl_exercicio_treinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_exercicio_treino
     */
    omit?: tbl_exercicio_treinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_exercicio_treinoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_exercicio_treino to fetch.
     */
    where: tbl_exercicio_treinoWhereUniqueInput
  }

  /**
   * tbl_exercicio_treino findUniqueOrThrow
   */
  export type tbl_exercicio_treinoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_exercicio_treino
     */
    select?: tbl_exercicio_treinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_exercicio_treino
     */
    omit?: tbl_exercicio_treinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_exercicio_treinoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_exercicio_treino to fetch.
     */
    where: tbl_exercicio_treinoWhereUniqueInput
  }

  /**
   * tbl_exercicio_treino findFirst
   */
  export type tbl_exercicio_treinoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_exercicio_treino
     */
    select?: tbl_exercicio_treinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_exercicio_treino
     */
    omit?: tbl_exercicio_treinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_exercicio_treinoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_exercicio_treino to fetch.
     */
    where?: tbl_exercicio_treinoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_exercicio_treinos to fetch.
     */
    orderBy?: tbl_exercicio_treinoOrderByWithRelationInput | tbl_exercicio_treinoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_exercicio_treinos.
     */
    cursor?: tbl_exercicio_treinoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_exercicio_treinos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_exercicio_treinos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_exercicio_treinos.
     */
    distinct?: Tbl_exercicio_treinoScalarFieldEnum | Tbl_exercicio_treinoScalarFieldEnum[]
  }

  /**
   * tbl_exercicio_treino findFirstOrThrow
   */
  export type tbl_exercicio_treinoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_exercicio_treino
     */
    select?: tbl_exercicio_treinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_exercicio_treino
     */
    omit?: tbl_exercicio_treinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_exercicio_treinoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_exercicio_treino to fetch.
     */
    where?: tbl_exercicio_treinoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_exercicio_treinos to fetch.
     */
    orderBy?: tbl_exercicio_treinoOrderByWithRelationInput | tbl_exercicio_treinoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_exercicio_treinos.
     */
    cursor?: tbl_exercicio_treinoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_exercicio_treinos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_exercicio_treinos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_exercicio_treinos.
     */
    distinct?: Tbl_exercicio_treinoScalarFieldEnum | Tbl_exercicio_treinoScalarFieldEnum[]
  }

  /**
   * tbl_exercicio_treino findMany
   */
  export type tbl_exercicio_treinoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_exercicio_treino
     */
    select?: tbl_exercicio_treinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_exercicio_treino
     */
    omit?: tbl_exercicio_treinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_exercicio_treinoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_exercicio_treinos to fetch.
     */
    where?: tbl_exercicio_treinoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_exercicio_treinos to fetch.
     */
    orderBy?: tbl_exercicio_treinoOrderByWithRelationInput | tbl_exercicio_treinoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_exercicio_treinos.
     */
    cursor?: tbl_exercicio_treinoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_exercicio_treinos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_exercicio_treinos.
     */
    skip?: number
    distinct?: Tbl_exercicio_treinoScalarFieldEnum | Tbl_exercicio_treinoScalarFieldEnum[]
  }

  /**
   * tbl_exercicio_treino create
   */
  export type tbl_exercicio_treinoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_exercicio_treino
     */
    select?: tbl_exercicio_treinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_exercicio_treino
     */
    omit?: tbl_exercicio_treinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_exercicio_treinoInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_exercicio_treino.
     */
    data: XOR<tbl_exercicio_treinoCreateInput, tbl_exercicio_treinoUncheckedCreateInput>
  }

  /**
   * tbl_exercicio_treino createMany
   */
  export type tbl_exercicio_treinoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_exercicio_treinos.
     */
    data: tbl_exercicio_treinoCreateManyInput | tbl_exercicio_treinoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_exercicio_treino update
   */
  export type tbl_exercicio_treinoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_exercicio_treino
     */
    select?: tbl_exercicio_treinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_exercicio_treino
     */
    omit?: tbl_exercicio_treinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_exercicio_treinoInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_exercicio_treino.
     */
    data: XOR<tbl_exercicio_treinoUpdateInput, tbl_exercicio_treinoUncheckedUpdateInput>
    /**
     * Choose, which tbl_exercicio_treino to update.
     */
    where: tbl_exercicio_treinoWhereUniqueInput
  }

  /**
   * tbl_exercicio_treino updateMany
   */
  export type tbl_exercicio_treinoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_exercicio_treinos.
     */
    data: XOR<tbl_exercicio_treinoUpdateManyMutationInput, tbl_exercicio_treinoUncheckedUpdateManyInput>
    /**
     * Filter which tbl_exercicio_treinos to update
     */
    where?: tbl_exercicio_treinoWhereInput
    /**
     * Limit how many tbl_exercicio_treinos to update.
     */
    limit?: number
  }

  /**
   * tbl_exercicio_treino upsert
   */
  export type tbl_exercicio_treinoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_exercicio_treino
     */
    select?: tbl_exercicio_treinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_exercicio_treino
     */
    omit?: tbl_exercicio_treinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_exercicio_treinoInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_exercicio_treino to update in case it exists.
     */
    where: tbl_exercicio_treinoWhereUniqueInput
    /**
     * In case the tbl_exercicio_treino found by the `where` argument doesn't exist, create a new tbl_exercicio_treino with this data.
     */
    create: XOR<tbl_exercicio_treinoCreateInput, tbl_exercicio_treinoUncheckedCreateInput>
    /**
     * In case the tbl_exercicio_treino was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_exercicio_treinoUpdateInput, tbl_exercicio_treinoUncheckedUpdateInput>
  }

  /**
   * tbl_exercicio_treino delete
   */
  export type tbl_exercicio_treinoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_exercicio_treino
     */
    select?: tbl_exercicio_treinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_exercicio_treino
     */
    omit?: tbl_exercicio_treinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_exercicio_treinoInclude<ExtArgs> | null
    /**
     * Filter which tbl_exercicio_treino to delete.
     */
    where: tbl_exercicio_treinoWhereUniqueInput
  }

  /**
   * tbl_exercicio_treino deleteMany
   */
  export type tbl_exercicio_treinoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_exercicio_treinos to delete
     */
    where?: tbl_exercicio_treinoWhereInput
    /**
     * Limit how many tbl_exercicio_treinos to delete.
     */
    limit?: number
  }

  /**
   * tbl_exercicio_treino without action
   */
  export type tbl_exercicio_treinoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_exercicio_treino
     */
    select?: tbl_exercicio_treinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_exercicio_treino
     */
    omit?: tbl_exercicio_treinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_exercicio_treinoInclude<ExtArgs> | null
  }


  /**
   * Model tbl_notificacao
   */

  export type AggregateTbl_notificacao = {
    _count: Tbl_notificacaoCountAggregateOutputType | null
    _avg: Tbl_notificacaoAvgAggregateOutputType | null
    _sum: Tbl_notificacaoSumAggregateOutputType | null
    _min: Tbl_notificacaoMinAggregateOutputType | null
    _max: Tbl_notificacaoMaxAggregateOutputType | null
  }

  export type Tbl_notificacaoAvgAggregateOutputType = {
    id: number | null
    id_usuario_destino: number | null
    id_usuario_origem: number | null
    id_publicacao: number | null
    id_comentario: number | null
    id_curtida: number | null
    id_curtida_comentario: number | null
  }

  export type Tbl_notificacaoSumAggregateOutputType = {
    id: number | null
    id_usuario_destino: number | null
    id_usuario_origem: number | null
    id_publicacao: number | null
    id_comentario: number | null
    id_curtida: number | null
    id_curtida_comentario: number | null
  }

  export type Tbl_notificacaoMinAggregateOutputType = {
    id: number | null
    id_usuario_destino: number | null
    id_usuario_origem: number | null
    id_publicacao: number | null
    id_comentario: number | null
    id_curtida: number | null
    id_curtida_comentario: number | null
    tipo_notificacao: string | null
    data_criacao: Date | null
    is_lida: boolean | null
  }

  export type Tbl_notificacaoMaxAggregateOutputType = {
    id: number | null
    id_usuario_destino: number | null
    id_usuario_origem: number | null
    id_publicacao: number | null
    id_comentario: number | null
    id_curtida: number | null
    id_curtida_comentario: number | null
    tipo_notificacao: string | null
    data_criacao: Date | null
    is_lida: boolean | null
  }

  export type Tbl_notificacaoCountAggregateOutputType = {
    id: number
    id_usuario_destino: number
    id_usuario_origem: number
    id_publicacao: number
    id_comentario: number
    id_curtida: number
    id_curtida_comentario: number
    tipo_notificacao: number
    data_criacao: number
    is_lida: number
    _all: number
  }


  export type Tbl_notificacaoAvgAggregateInputType = {
    id?: true
    id_usuario_destino?: true
    id_usuario_origem?: true
    id_publicacao?: true
    id_comentario?: true
    id_curtida?: true
    id_curtida_comentario?: true
  }

  export type Tbl_notificacaoSumAggregateInputType = {
    id?: true
    id_usuario_destino?: true
    id_usuario_origem?: true
    id_publicacao?: true
    id_comentario?: true
    id_curtida?: true
    id_curtida_comentario?: true
  }

  export type Tbl_notificacaoMinAggregateInputType = {
    id?: true
    id_usuario_destino?: true
    id_usuario_origem?: true
    id_publicacao?: true
    id_comentario?: true
    id_curtida?: true
    id_curtida_comentario?: true
    tipo_notificacao?: true
    data_criacao?: true
    is_lida?: true
  }

  export type Tbl_notificacaoMaxAggregateInputType = {
    id?: true
    id_usuario_destino?: true
    id_usuario_origem?: true
    id_publicacao?: true
    id_comentario?: true
    id_curtida?: true
    id_curtida_comentario?: true
    tipo_notificacao?: true
    data_criacao?: true
    is_lida?: true
  }

  export type Tbl_notificacaoCountAggregateInputType = {
    id?: true
    id_usuario_destino?: true
    id_usuario_origem?: true
    id_publicacao?: true
    id_comentario?: true
    id_curtida?: true
    id_curtida_comentario?: true
    tipo_notificacao?: true
    data_criacao?: true
    is_lida?: true
    _all?: true
  }

  export type Tbl_notificacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_notificacao to aggregate.
     */
    where?: tbl_notificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_notificacaos to fetch.
     */
    orderBy?: tbl_notificacaoOrderByWithRelationInput | tbl_notificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_notificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_notificacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_notificacaos
    **/
    _count?: true | Tbl_notificacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_notificacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_notificacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_notificacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_notificacaoMaxAggregateInputType
  }

  export type GetTbl_notificacaoAggregateType<T extends Tbl_notificacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_notificacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_notificacao[P]>
      : GetScalarType<T[P], AggregateTbl_notificacao[P]>
  }




  export type tbl_notificacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_notificacaoWhereInput
    orderBy?: tbl_notificacaoOrderByWithAggregationInput | tbl_notificacaoOrderByWithAggregationInput[]
    by: Tbl_notificacaoScalarFieldEnum[] | Tbl_notificacaoScalarFieldEnum
    having?: tbl_notificacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_notificacaoCountAggregateInputType | true
    _avg?: Tbl_notificacaoAvgAggregateInputType
    _sum?: Tbl_notificacaoSumAggregateInputType
    _min?: Tbl_notificacaoMinAggregateInputType
    _max?: Tbl_notificacaoMaxAggregateInputType
  }

  export type Tbl_notificacaoGroupByOutputType = {
    id: number
    id_usuario_destino: number
    id_usuario_origem: number
    id_publicacao: number | null
    id_comentario: number | null
    id_curtida: number | null
    id_curtida_comentario: number | null
    tipo_notificacao: string
    data_criacao: Date
    is_lida: boolean | null
    _count: Tbl_notificacaoCountAggregateOutputType | null
    _avg: Tbl_notificacaoAvgAggregateOutputType | null
    _sum: Tbl_notificacaoSumAggregateOutputType | null
    _min: Tbl_notificacaoMinAggregateOutputType | null
    _max: Tbl_notificacaoMaxAggregateOutputType | null
  }

  type GetTbl_notificacaoGroupByPayload<T extends tbl_notificacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_notificacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_notificacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_notificacaoGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_notificacaoGroupByOutputType[P]>
        }
      >
    >


  export type tbl_notificacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_usuario_destino?: boolean
    id_usuario_origem?: boolean
    id_publicacao?: boolean
    id_comentario?: boolean
    id_curtida?: boolean
    id_curtida_comentario?: boolean
    tipo_notificacao?: boolean
    data_criacao?: boolean
    is_lida?: boolean
    tbl_user_tbl_notificacao_id_usuario_destinoTotbl_user?: boolean | tbl_userDefaultArgs<ExtArgs>
    tbl_user_tbl_notificacao_id_usuario_origemTotbl_user?: boolean | tbl_userDefaultArgs<ExtArgs>
    tbl_publicacao?: boolean | tbl_notificacao$tbl_publicacaoArgs<ExtArgs>
    tbl_comentario?: boolean | tbl_notificacao$tbl_comentarioArgs<ExtArgs>
    tbl_curtida?: boolean | tbl_notificacao$tbl_curtidaArgs<ExtArgs>
    tbl_curtida_comentario?: boolean | tbl_notificacao$tbl_curtida_comentarioArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_notificacao"]>



  export type tbl_notificacaoSelectScalar = {
    id?: boolean
    id_usuario_destino?: boolean
    id_usuario_origem?: boolean
    id_publicacao?: boolean
    id_comentario?: boolean
    id_curtida?: boolean
    id_curtida_comentario?: boolean
    tipo_notificacao?: boolean
    data_criacao?: boolean
    is_lida?: boolean
  }

  export type tbl_notificacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_usuario_destino" | "id_usuario_origem" | "id_publicacao" | "id_comentario" | "id_curtida" | "id_curtida_comentario" | "tipo_notificacao" | "data_criacao" | "is_lida", ExtArgs["result"]["tbl_notificacao"]>
  export type tbl_notificacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tbl_user_tbl_notificacao_id_usuario_destinoTotbl_user?: boolean | tbl_userDefaultArgs<ExtArgs>
    tbl_user_tbl_notificacao_id_usuario_origemTotbl_user?: boolean | tbl_userDefaultArgs<ExtArgs>
    tbl_publicacao?: boolean | tbl_notificacao$tbl_publicacaoArgs<ExtArgs>
    tbl_comentario?: boolean | tbl_notificacao$tbl_comentarioArgs<ExtArgs>
    tbl_curtida?: boolean | tbl_notificacao$tbl_curtidaArgs<ExtArgs>
    tbl_curtida_comentario?: boolean | tbl_notificacao$tbl_curtida_comentarioArgs<ExtArgs>
  }

  export type $tbl_notificacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_notificacao"
    objects: {
      tbl_user_tbl_notificacao_id_usuario_destinoTotbl_user: Prisma.$tbl_userPayload<ExtArgs>
      tbl_user_tbl_notificacao_id_usuario_origemTotbl_user: Prisma.$tbl_userPayload<ExtArgs>
      tbl_publicacao: Prisma.$tbl_publicacaoPayload<ExtArgs> | null
      tbl_comentario: Prisma.$tbl_comentarioPayload<ExtArgs> | null
      tbl_curtida: Prisma.$tbl_curtidaPayload<ExtArgs> | null
      tbl_curtida_comentario: Prisma.$tbl_curtida_comentarioPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_usuario_destino: number
      id_usuario_origem: number
      id_publicacao: number | null
      id_comentario: number | null
      id_curtida: number | null
      id_curtida_comentario: number | null
      tipo_notificacao: string
      data_criacao: Date
      is_lida: boolean | null
    }, ExtArgs["result"]["tbl_notificacao"]>
    composites: {}
  }

  type tbl_notificacaoGetPayload<S extends boolean | null | undefined | tbl_notificacaoDefaultArgs> = $Result.GetResult<Prisma.$tbl_notificacaoPayload, S>

  type tbl_notificacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_notificacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_notificacaoCountAggregateInputType | true
    }

  export interface tbl_notificacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_notificacao'], meta: { name: 'tbl_notificacao' } }
    /**
     * Find zero or one Tbl_notificacao that matches the filter.
     * @param {tbl_notificacaoFindUniqueArgs} args - Arguments to find a Tbl_notificacao
     * @example
     * // Get one Tbl_notificacao
     * const tbl_notificacao = await prisma.tbl_notificacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_notificacaoFindUniqueArgs>(args: SelectSubset<T, tbl_notificacaoFindUniqueArgs<ExtArgs>>): Prisma__tbl_notificacaoClient<$Result.GetResult<Prisma.$tbl_notificacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_notificacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_notificacaoFindUniqueOrThrowArgs} args - Arguments to find a Tbl_notificacao
     * @example
     * // Get one Tbl_notificacao
     * const tbl_notificacao = await prisma.tbl_notificacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_notificacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_notificacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_notificacaoClient<$Result.GetResult<Prisma.$tbl_notificacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_notificacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_notificacaoFindFirstArgs} args - Arguments to find a Tbl_notificacao
     * @example
     * // Get one Tbl_notificacao
     * const tbl_notificacao = await prisma.tbl_notificacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_notificacaoFindFirstArgs>(args?: SelectSubset<T, tbl_notificacaoFindFirstArgs<ExtArgs>>): Prisma__tbl_notificacaoClient<$Result.GetResult<Prisma.$tbl_notificacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_notificacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_notificacaoFindFirstOrThrowArgs} args - Arguments to find a Tbl_notificacao
     * @example
     * // Get one Tbl_notificacao
     * const tbl_notificacao = await prisma.tbl_notificacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_notificacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_notificacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_notificacaoClient<$Result.GetResult<Prisma.$tbl_notificacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_notificacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_notificacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_notificacaos
     * const tbl_notificacaos = await prisma.tbl_notificacao.findMany()
     * 
     * // Get first 10 Tbl_notificacaos
     * const tbl_notificacaos = await prisma.tbl_notificacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbl_notificacaoWithIdOnly = await prisma.tbl_notificacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tbl_notificacaoFindManyArgs>(args?: SelectSubset<T, tbl_notificacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_notificacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_notificacao.
     * @param {tbl_notificacaoCreateArgs} args - Arguments to create a Tbl_notificacao.
     * @example
     * // Create one Tbl_notificacao
     * const Tbl_notificacao = await prisma.tbl_notificacao.create({
     *   data: {
     *     // ... data to create a Tbl_notificacao
     *   }
     * })
     * 
     */
    create<T extends tbl_notificacaoCreateArgs>(args: SelectSubset<T, tbl_notificacaoCreateArgs<ExtArgs>>): Prisma__tbl_notificacaoClient<$Result.GetResult<Prisma.$tbl_notificacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_notificacaos.
     * @param {tbl_notificacaoCreateManyArgs} args - Arguments to create many Tbl_notificacaos.
     * @example
     * // Create many Tbl_notificacaos
     * const tbl_notificacao = await prisma.tbl_notificacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_notificacaoCreateManyArgs>(args?: SelectSubset<T, tbl_notificacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_notificacao.
     * @param {tbl_notificacaoDeleteArgs} args - Arguments to delete one Tbl_notificacao.
     * @example
     * // Delete one Tbl_notificacao
     * const Tbl_notificacao = await prisma.tbl_notificacao.delete({
     *   where: {
     *     // ... filter to delete one Tbl_notificacao
     *   }
     * })
     * 
     */
    delete<T extends tbl_notificacaoDeleteArgs>(args: SelectSubset<T, tbl_notificacaoDeleteArgs<ExtArgs>>): Prisma__tbl_notificacaoClient<$Result.GetResult<Prisma.$tbl_notificacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_notificacao.
     * @param {tbl_notificacaoUpdateArgs} args - Arguments to update one Tbl_notificacao.
     * @example
     * // Update one Tbl_notificacao
     * const tbl_notificacao = await prisma.tbl_notificacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_notificacaoUpdateArgs>(args: SelectSubset<T, tbl_notificacaoUpdateArgs<ExtArgs>>): Prisma__tbl_notificacaoClient<$Result.GetResult<Prisma.$tbl_notificacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_notificacaos.
     * @param {tbl_notificacaoDeleteManyArgs} args - Arguments to filter Tbl_notificacaos to delete.
     * @example
     * // Delete a few Tbl_notificacaos
     * const { count } = await prisma.tbl_notificacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_notificacaoDeleteManyArgs>(args?: SelectSubset<T, tbl_notificacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_notificacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_notificacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_notificacaos
     * const tbl_notificacao = await prisma.tbl_notificacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_notificacaoUpdateManyArgs>(args: SelectSubset<T, tbl_notificacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_notificacao.
     * @param {tbl_notificacaoUpsertArgs} args - Arguments to update or create a Tbl_notificacao.
     * @example
     * // Update or create a Tbl_notificacao
     * const tbl_notificacao = await prisma.tbl_notificacao.upsert({
     *   create: {
     *     // ... data to create a Tbl_notificacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_notificacao we want to update
     *   }
     * })
     */
    upsert<T extends tbl_notificacaoUpsertArgs>(args: SelectSubset<T, tbl_notificacaoUpsertArgs<ExtArgs>>): Prisma__tbl_notificacaoClient<$Result.GetResult<Prisma.$tbl_notificacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_notificacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_notificacaoCountArgs} args - Arguments to filter Tbl_notificacaos to count.
     * @example
     * // Count the number of Tbl_notificacaos
     * const count = await prisma.tbl_notificacao.count({
     *   where: {
     *     // ... the filter for the Tbl_notificacaos we want to count
     *   }
     * })
    **/
    count<T extends tbl_notificacaoCountArgs>(
      args?: Subset<T, tbl_notificacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_notificacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_notificacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_notificacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tbl_notificacaoAggregateArgs>(args: Subset<T, Tbl_notificacaoAggregateArgs>): Prisma.PrismaPromise<GetTbl_notificacaoAggregateType<T>>

    /**
     * Group by Tbl_notificacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_notificacaoGroupByArgs} args - Group by arguments.
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
      T extends tbl_notificacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_notificacaoGroupByArgs['orderBy'] }
        : { orderBy?: tbl_notificacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tbl_notificacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_notificacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_notificacao model
   */
  readonly fields: tbl_notificacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_notificacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_notificacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tbl_user_tbl_notificacao_id_usuario_destinoTotbl_user<T extends tbl_userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tbl_userDefaultArgs<ExtArgs>>): Prisma__tbl_userClient<$Result.GetResult<Prisma.$tbl_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tbl_user_tbl_notificacao_id_usuario_origemTotbl_user<T extends tbl_userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tbl_userDefaultArgs<ExtArgs>>): Prisma__tbl_userClient<$Result.GetResult<Prisma.$tbl_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tbl_publicacao<T extends tbl_notificacao$tbl_publicacaoArgs<ExtArgs> = {}>(args?: Subset<T, tbl_notificacao$tbl_publicacaoArgs<ExtArgs>>): Prisma__tbl_publicacaoClient<$Result.GetResult<Prisma.$tbl_publicacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tbl_comentario<T extends tbl_notificacao$tbl_comentarioArgs<ExtArgs> = {}>(args?: Subset<T, tbl_notificacao$tbl_comentarioArgs<ExtArgs>>): Prisma__tbl_comentarioClient<$Result.GetResult<Prisma.$tbl_comentarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tbl_curtida<T extends tbl_notificacao$tbl_curtidaArgs<ExtArgs> = {}>(args?: Subset<T, tbl_notificacao$tbl_curtidaArgs<ExtArgs>>): Prisma__tbl_curtidaClient<$Result.GetResult<Prisma.$tbl_curtidaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tbl_curtida_comentario<T extends tbl_notificacao$tbl_curtida_comentarioArgs<ExtArgs> = {}>(args?: Subset<T, tbl_notificacao$tbl_curtida_comentarioArgs<ExtArgs>>): Prisma__tbl_curtida_comentarioClient<$Result.GetResult<Prisma.$tbl_curtida_comentarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the tbl_notificacao model
   */
  interface tbl_notificacaoFieldRefs {
    readonly id: FieldRef<"tbl_notificacao", 'Int'>
    readonly id_usuario_destino: FieldRef<"tbl_notificacao", 'Int'>
    readonly id_usuario_origem: FieldRef<"tbl_notificacao", 'Int'>
    readonly id_publicacao: FieldRef<"tbl_notificacao", 'Int'>
    readonly id_comentario: FieldRef<"tbl_notificacao", 'Int'>
    readonly id_curtida: FieldRef<"tbl_notificacao", 'Int'>
    readonly id_curtida_comentario: FieldRef<"tbl_notificacao", 'Int'>
    readonly tipo_notificacao: FieldRef<"tbl_notificacao", 'String'>
    readonly data_criacao: FieldRef<"tbl_notificacao", 'DateTime'>
    readonly is_lida: FieldRef<"tbl_notificacao", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * tbl_notificacao findUnique
   */
  export type tbl_notificacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_notificacao
     */
    select?: tbl_notificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_notificacao
     */
    omit?: tbl_notificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_notificacaoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_notificacao to fetch.
     */
    where: tbl_notificacaoWhereUniqueInput
  }

  /**
   * tbl_notificacao findUniqueOrThrow
   */
  export type tbl_notificacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_notificacao
     */
    select?: tbl_notificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_notificacao
     */
    omit?: tbl_notificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_notificacaoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_notificacao to fetch.
     */
    where: tbl_notificacaoWhereUniqueInput
  }

  /**
   * tbl_notificacao findFirst
   */
  export type tbl_notificacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_notificacao
     */
    select?: tbl_notificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_notificacao
     */
    omit?: tbl_notificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_notificacaoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_notificacao to fetch.
     */
    where?: tbl_notificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_notificacaos to fetch.
     */
    orderBy?: tbl_notificacaoOrderByWithRelationInput | tbl_notificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_notificacaos.
     */
    cursor?: tbl_notificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_notificacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_notificacaos.
     */
    distinct?: Tbl_notificacaoScalarFieldEnum | Tbl_notificacaoScalarFieldEnum[]
  }

  /**
   * tbl_notificacao findFirstOrThrow
   */
  export type tbl_notificacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_notificacao
     */
    select?: tbl_notificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_notificacao
     */
    omit?: tbl_notificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_notificacaoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_notificacao to fetch.
     */
    where?: tbl_notificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_notificacaos to fetch.
     */
    orderBy?: tbl_notificacaoOrderByWithRelationInput | tbl_notificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_notificacaos.
     */
    cursor?: tbl_notificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_notificacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_notificacaos.
     */
    distinct?: Tbl_notificacaoScalarFieldEnum | Tbl_notificacaoScalarFieldEnum[]
  }

  /**
   * tbl_notificacao findMany
   */
  export type tbl_notificacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_notificacao
     */
    select?: tbl_notificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_notificacao
     */
    omit?: tbl_notificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_notificacaoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_notificacaos to fetch.
     */
    where?: tbl_notificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_notificacaos to fetch.
     */
    orderBy?: tbl_notificacaoOrderByWithRelationInput | tbl_notificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_notificacaos.
     */
    cursor?: tbl_notificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_notificacaos.
     */
    skip?: number
    distinct?: Tbl_notificacaoScalarFieldEnum | Tbl_notificacaoScalarFieldEnum[]
  }

  /**
   * tbl_notificacao create
   */
  export type tbl_notificacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_notificacao
     */
    select?: tbl_notificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_notificacao
     */
    omit?: tbl_notificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_notificacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_notificacao.
     */
    data: XOR<tbl_notificacaoCreateInput, tbl_notificacaoUncheckedCreateInput>
  }

  /**
   * tbl_notificacao createMany
   */
  export type tbl_notificacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_notificacaos.
     */
    data: tbl_notificacaoCreateManyInput | tbl_notificacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_notificacao update
   */
  export type tbl_notificacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_notificacao
     */
    select?: tbl_notificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_notificacao
     */
    omit?: tbl_notificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_notificacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_notificacao.
     */
    data: XOR<tbl_notificacaoUpdateInput, tbl_notificacaoUncheckedUpdateInput>
    /**
     * Choose, which tbl_notificacao to update.
     */
    where: tbl_notificacaoWhereUniqueInput
  }

  /**
   * tbl_notificacao updateMany
   */
  export type tbl_notificacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_notificacaos.
     */
    data: XOR<tbl_notificacaoUpdateManyMutationInput, tbl_notificacaoUncheckedUpdateManyInput>
    /**
     * Filter which tbl_notificacaos to update
     */
    where?: tbl_notificacaoWhereInput
    /**
     * Limit how many tbl_notificacaos to update.
     */
    limit?: number
  }

  /**
   * tbl_notificacao upsert
   */
  export type tbl_notificacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_notificacao
     */
    select?: tbl_notificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_notificacao
     */
    omit?: tbl_notificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_notificacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_notificacao to update in case it exists.
     */
    where: tbl_notificacaoWhereUniqueInput
    /**
     * In case the tbl_notificacao found by the `where` argument doesn't exist, create a new tbl_notificacao with this data.
     */
    create: XOR<tbl_notificacaoCreateInput, tbl_notificacaoUncheckedCreateInput>
    /**
     * In case the tbl_notificacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_notificacaoUpdateInput, tbl_notificacaoUncheckedUpdateInput>
  }

  /**
   * tbl_notificacao delete
   */
  export type tbl_notificacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_notificacao
     */
    select?: tbl_notificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_notificacao
     */
    omit?: tbl_notificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_notificacaoInclude<ExtArgs> | null
    /**
     * Filter which tbl_notificacao to delete.
     */
    where: tbl_notificacaoWhereUniqueInput
  }

  /**
   * tbl_notificacao deleteMany
   */
  export type tbl_notificacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_notificacaos to delete
     */
    where?: tbl_notificacaoWhereInput
    /**
     * Limit how many tbl_notificacaos to delete.
     */
    limit?: number
  }

  /**
   * tbl_notificacao.tbl_publicacao
   */
  export type tbl_notificacao$tbl_publicacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_publicacao
     */
    select?: tbl_publicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_publicacao
     */
    omit?: tbl_publicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_publicacaoInclude<ExtArgs> | null
    where?: tbl_publicacaoWhereInput
  }

  /**
   * tbl_notificacao.tbl_comentario
   */
  export type tbl_notificacao$tbl_comentarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_comentario
     */
    select?: tbl_comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_comentario
     */
    omit?: tbl_comentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_comentarioInclude<ExtArgs> | null
    where?: tbl_comentarioWhereInput
  }

  /**
   * tbl_notificacao.tbl_curtida
   */
  export type tbl_notificacao$tbl_curtidaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_curtida
     */
    select?: tbl_curtidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_curtida
     */
    omit?: tbl_curtidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_curtidaInclude<ExtArgs> | null
    where?: tbl_curtidaWhereInput
  }

  /**
   * tbl_notificacao.tbl_curtida_comentario
   */
  export type tbl_notificacao$tbl_curtida_comentarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_curtida_comentario
     */
    select?: tbl_curtida_comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_curtida_comentario
     */
    omit?: tbl_curtida_comentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_curtida_comentarioInclude<ExtArgs> | null
    where?: tbl_curtida_comentarioWhereInput
  }

  /**
   * tbl_notificacao without action
   */
  export type tbl_notificacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_notificacao
     */
    select?: tbl_notificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_notificacao
     */
    omit?: tbl_notificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_notificacaoInclude<ExtArgs> | null
  }


  /**
   * Model tbl_publicacao
   */

  export type AggregateTbl_publicacao = {
    _count: Tbl_publicacaoCountAggregateOutputType | null
    _avg: Tbl_publicacaoAvgAggregateOutputType | null
    _sum: Tbl_publicacaoSumAggregateOutputType | null
    _min: Tbl_publicacaoMinAggregateOutputType | null
    _max: Tbl_publicacaoMaxAggregateOutputType | null
  }

  export type Tbl_publicacaoAvgAggregateOutputType = {
    id: number | null
    curtidas_count: number | null
    comentarios_count: number | null
    id_user: number | null
  }

  export type Tbl_publicacaoSumAggregateOutputType = {
    id: number | null
    curtidas_count: number | null
    comentarios_count: number | null
    id_user: number | null
  }

  export type Tbl_publicacaoMinAggregateOutputType = {
    id: number | null
    imagem: string | null
    descricao: string | null
    data_publicacao: Date | null
    localizacao: string | null
    curtidas_count: number | null
    comentarios_count: number | null
    id_user: number | null
  }

  export type Tbl_publicacaoMaxAggregateOutputType = {
    id: number | null
    imagem: string | null
    descricao: string | null
    data_publicacao: Date | null
    localizacao: string | null
    curtidas_count: number | null
    comentarios_count: number | null
    id_user: number | null
  }

  export type Tbl_publicacaoCountAggregateOutputType = {
    id: number
    imagem: number
    descricao: number
    data_publicacao: number
    localizacao: number
    curtidas_count: number
    comentarios_count: number
    id_user: number
    _all: number
  }


  export type Tbl_publicacaoAvgAggregateInputType = {
    id?: true
    curtidas_count?: true
    comentarios_count?: true
    id_user?: true
  }

  export type Tbl_publicacaoSumAggregateInputType = {
    id?: true
    curtidas_count?: true
    comentarios_count?: true
    id_user?: true
  }

  export type Tbl_publicacaoMinAggregateInputType = {
    id?: true
    imagem?: true
    descricao?: true
    data_publicacao?: true
    localizacao?: true
    curtidas_count?: true
    comentarios_count?: true
    id_user?: true
  }

  export type Tbl_publicacaoMaxAggregateInputType = {
    id?: true
    imagem?: true
    descricao?: true
    data_publicacao?: true
    localizacao?: true
    curtidas_count?: true
    comentarios_count?: true
    id_user?: true
  }

  export type Tbl_publicacaoCountAggregateInputType = {
    id?: true
    imagem?: true
    descricao?: true
    data_publicacao?: true
    localizacao?: true
    curtidas_count?: true
    comentarios_count?: true
    id_user?: true
    _all?: true
  }

  export type Tbl_publicacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_publicacao to aggregate.
     */
    where?: tbl_publicacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_publicacaos to fetch.
     */
    orderBy?: tbl_publicacaoOrderByWithRelationInput | tbl_publicacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_publicacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_publicacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_publicacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_publicacaos
    **/
    _count?: true | Tbl_publicacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_publicacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_publicacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_publicacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_publicacaoMaxAggregateInputType
  }

  export type GetTbl_publicacaoAggregateType<T extends Tbl_publicacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_publicacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_publicacao[P]>
      : GetScalarType<T[P], AggregateTbl_publicacao[P]>
  }




  export type tbl_publicacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_publicacaoWhereInput
    orderBy?: tbl_publicacaoOrderByWithAggregationInput | tbl_publicacaoOrderByWithAggregationInput[]
    by: Tbl_publicacaoScalarFieldEnum[] | Tbl_publicacaoScalarFieldEnum
    having?: tbl_publicacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_publicacaoCountAggregateInputType | true
    _avg?: Tbl_publicacaoAvgAggregateInputType
    _sum?: Tbl_publicacaoSumAggregateInputType
    _min?: Tbl_publicacaoMinAggregateInputType
    _max?: Tbl_publicacaoMaxAggregateInputType
  }

  export type Tbl_publicacaoGroupByOutputType = {
    id: number
    imagem: string
    descricao: string | null
    data_publicacao: Date | null
    localizacao: string | null
    curtidas_count: number | null
    comentarios_count: number | null
    id_user: number
    _count: Tbl_publicacaoCountAggregateOutputType | null
    _avg: Tbl_publicacaoAvgAggregateOutputType | null
    _sum: Tbl_publicacaoSumAggregateOutputType | null
    _min: Tbl_publicacaoMinAggregateOutputType | null
    _max: Tbl_publicacaoMaxAggregateOutputType | null
  }

  type GetTbl_publicacaoGroupByPayload<T extends tbl_publicacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_publicacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_publicacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_publicacaoGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_publicacaoGroupByOutputType[P]>
        }
      >
    >


  export type tbl_publicacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imagem?: boolean
    descricao?: boolean
    data_publicacao?: boolean
    localizacao?: boolean
    curtidas_count?: boolean
    comentarios_count?: boolean
    id_user?: boolean
    tbl_comentario?: boolean | tbl_publicacao$tbl_comentarioArgs<ExtArgs>
    tbl_curtida?: boolean | tbl_publicacao$tbl_curtidaArgs<ExtArgs>
    tbl_notificacao?: boolean | tbl_publicacao$tbl_notificacaoArgs<ExtArgs>
    tbl_user?: boolean | tbl_userDefaultArgs<ExtArgs>
    _count?: boolean | Tbl_publicacaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_publicacao"]>



  export type tbl_publicacaoSelectScalar = {
    id?: boolean
    imagem?: boolean
    descricao?: boolean
    data_publicacao?: boolean
    localizacao?: boolean
    curtidas_count?: boolean
    comentarios_count?: boolean
    id_user?: boolean
  }

  export type tbl_publicacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imagem" | "descricao" | "data_publicacao" | "localizacao" | "curtidas_count" | "comentarios_count" | "id_user", ExtArgs["result"]["tbl_publicacao"]>
  export type tbl_publicacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tbl_comentario?: boolean | tbl_publicacao$tbl_comentarioArgs<ExtArgs>
    tbl_curtida?: boolean | tbl_publicacao$tbl_curtidaArgs<ExtArgs>
    tbl_notificacao?: boolean | tbl_publicacao$tbl_notificacaoArgs<ExtArgs>
    tbl_user?: boolean | tbl_userDefaultArgs<ExtArgs>
    _count?: boolean | Tbl_publicacaoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tbl_publicacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_publicacao"
    objects: {
      tbl_comentario: Prisma.$tbl_comentarioPayload<ExtArgs>[]
      tbl_curtida: Prisma.$tbl_curtidaPayload<ExtArgs>[]
      tbl_notificacao: Prisma.$tbl_notificacaoPayload<ExtArgs>[]
      tbl_user: Prisma.$tbl_userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      imagem: string
      descricao: string | null
      data_publicacao: Date | null
      localizacao: string | null
      curtidas_count: number | null
      comentarios_count: number | null
      id_user: number
    }, ExtArgs["result"]["tbl_publicacao"]>
    composites: {}
  }

  type tbl_publicacaoGetPayload<S extends boolean | null | undefined | tbl_publicacaoDefaultArgs> = $Result.GetResult<Prisma.$tbl_publicacaoPayload, S>

  type tbl_publicacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_publicacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_publicacaoCountAggregateInputType | true
    }

  export interface tbl_publicacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_publicacao'], meta: { name: 'tbl_publicacao' } }
    /**
     * Find zero or one Tbl_publicacao that matches the filter.
     * @param {tbl_publicacaoFindUniqueArgs} args - Arguments to find a Tbl_publicacao
     * @example
     * // Get one Tbl_publicacao
     * const tbl_publicacao = await prisma.tbl_publicacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_publicacaoFindUniqueArgs>(args: SelectSubset<T, tbl_publicacaoFindUniqueArgs<ExtArgs>>): Prisma__tbl_publicacaoClient<$Result.GetResult<Prisma.$tbl_publicacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_publicacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_publicacaoFindUniqueOrThrowArgs} args - Arguments to find a Tbl_publicacao
     * @example
     * // Get one Tbl_publicacao
     * const tbl_publicacao = await prisma.tbl_publicacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_publicacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_publicacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_publicacaoClient<$Result.GetResult<Prisma.$tbl_publicacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_publicacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_publicacaoFindFirstArgs} args - Arguments to find a Tbl_publicacao
     * @example
     * // Get one Tbl_publicacao
     * const tbl_publicacao = await prisma.tbl_publicacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_publicacaoFindFirstArgs>(args?: SelectSubset<T, tbl_publicacaoFindFirstArgs<ExtArgs>>): Prisma__tbl_publicacaoClient<$Result.GetResult<Prisma.$tbl_publicacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_publicacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_publicacaoFindFirstOrThrowArgs} args - Arguments to find a Tbl_publicacao
     * @example
     * // Get one Tbl_publicacao
     * const tbl_publicacao = await prisma.tbl_publicacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_publicacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_publicacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_publicacaoClient<$Result.GetResult<Prisma.$tbl_publicacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_publicacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_publicacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_publicacaos
     * const tbl_publicacaos = await prisma.tbl_publicacao.findMany()
     * 
     * // Get first 10 Tbl_publicacaos
     * const tbl_publicacaos = await prisma.tbl_publicacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbl_publicacaoWithIdOnly = await prisma.tbl_publicacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tbl_publicacaoFindManyArgs>(args?: SelectSubset<T, tbl_publicacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_publicacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_publicacao.
     * @param {tbl_publicacaoCreateArgs} args - Arguments to create a Tbl_publicacao.
     * @example
     * // Create one Tbl_publicacao
     * const Tbl_publicacao = await prisma.tbl_publicacao.create({
     *   data: {
     *     // ... data to create a Tbl_publicacao
     *   }
     * })
     * 
     */
    create<T extends tbl_publicacaoCreateArgs>(args: SelectSubset<T, tbl_publicacaoCreateArgs<ExtArgs>>): Prisma__tbl_publicacaoClient<$Result.GetResult<Prisma.$tbl_publicacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_publicacaos.
     * @param {tbl_publicacaoCreateManyArgs} args - Arguments to create many Tbl_publicacaos.
     * @example
     * // Create many Tbl_publicacaos
     * const tbl_publicacao = await prisma.tbl_publicacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_publicacaoCreateManyArgs>(args?: SelectSubset<T, tbl_publicacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_publicacao.
     * @param {tbl_publicacaoDeleteArgs} args - Arguments to delete one Tbl_publicacao.
     * @example
     * // Delete one Tbl_publicacao
     * const Tbl_publicacao = await prisma.tbl_publicacao.delete({
     *   where: {
     *     // ... filter to delete one Tbl_publicacao
     *   }
     * })
     * 
     */
    delete<T extends tbl_publicacaoDeleteArgs>(args: SelectSubset<T, tbl_publicacaoDeleteArgs<ExtArgs>>): Prisma__tbl_publicacaoClient<$Result.GetResult<Prisma.$tbl_publicacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_publicacao.
     * @param {tbl_publicacaoUpdateArgs} args - Arguments to update one Tbl_publicacao.
     * @example
     * // Update one Tbl_publicacao
     * const tbl_publicacao = await prisma.tbl_publicacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_publicacaoUpdateArgs>(args: SelectSubset<T, tbl_publicacaoUpdateArgs<ExtArgs>>): Prisma__tbl_publicacaoClient<$Result.GetResult<Prisma.$tbl_publicacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_publicacaos.
     * @param {tbl_publicacaoDeleteManyArgs} args - Arguments to filter Tbl_publicacaos to delete.
     * @example
     * // Delete a few Tbl_publicacaos
     * const { count } = await prisma.tbl_publicacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_publicacaoDeleteManyArgs>(args?: SelectSubset<T, tbl_publicacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_publicacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_publicacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_publicacaos
     * const tbl_publicacao = await prisma.tbl_publicacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_publicacaoUpdateManyArgs>(args: SelectSubset<T, tbl_publicacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_publicacao.
     * @param {tbl_publicacaoUpsertArgs} args - Arguments to update or create a Tbl_publicacao.
     * @example
     * // Update or create a Tbl_publicacao
     * const tbl_publicacao = await prisma.tbl_publicacao.upsert({
     *   create: {
     *     // ... data to create a Tbl_publicacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_publicacao we want to update
     *   }
     * })
     */
    upsert<T extends tbl_publicacaoUpsertArgs>(args: SelectSubset<T, tbl_publicacaoUpsertArgs<ExtArgs>>): Prisma__tbl_publicacaoClient<$Result.GetResult<Prisma.$tbl_publicacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_publicacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_publicacaoCountArgs} args - Arguments to filter Tbl_publicacaos to count.
     * @example
     * // Count the number of Tbl_publicacaos
     * const count = await prisma.tbl_publicacao.count({
     *   where: {
     *     // ... the filter for the Tbl_publicacaos we want to count
     *   }
     * })
    **/
    count<T extends tbl_publicacaoCountArgs>(
      args?: Subset<T, tbl_publicacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_publicacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_publicacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_publicacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tbl_publicacaoAggregateArgs>(args: Subset<T, Tbl_publicacaoAggregateArgs>): Prisma.PrismaPromise<GetTbl_publicacaoAggregateType<T>>

    /**
     * Group by Tbl_publicacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_publicacaoGroupByArgs} args - Group by arguments.
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
      T extends tbl_publicacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_publicacaoGroupByArgs['orderBy'] }
        : { orderBy?: tbl_publicacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tbl_publicacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_publicacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_publicacao model
   */
  readonly fields: tbl_publicacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_publicacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_publicacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tbl_comentario<T extends tbl_publicacao$tbl_comentarioArgs<ExtArgs> = {}>(args?: Subset<T, tbl_publicacao$tbl_comentarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_comentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tbl_curtida<T extends tbl_publicacao$tbl_curtidaArgs<ExtArgs> = {}>(args?: Subset<T, tbl_publicacao$tbl_curtidaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_curtidaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tbl_notificacao<T extends tbl_publicacao$tbl_notificacaoArgs<ExtArgs> = {}>(args?: Subset<T, tbl_publicacao$tbl_notificacaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_notificacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tbl_user<T extends tbl_userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tbl_userDefaultArgs<ExtArgs>>): Prisma__tbl_userClient<$Result.GetResult<Prisma.$tbl_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the tbl_publicacao model
   */
  interface tbl_publicacaoFieldRefs {
    readonly id: FieldRef<"tbl_publicacao", 'Int'>
    readonly imagem: FieldRef<"tbl_publicacao", 'String'>
    readonly descricao: FieldRef<"tbl_publicacao", 'String'>
    readonly data_publicacao: FieldRef<"tbl_publicacao", 'DateTime'>
    readonly localizacao: FieldRef<"tbl_publicacao", 'String'>
    readonly curtidas_count: FieldRef<"tbl_publicacao", 'Int'>
    readonly comentarios_count: FieldRef<"tbl_publicacao", 'Int'>
    readonly id_user: FieldRef<"tbl_publicacao", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * tbl_publicacao findUnique
   */
  export type tbl_publicacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_publicacao
     */
    select?: tbl_publicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_publicacao
     */
    omit?: tbl_publicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_publicacaoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_publicacao to fetch.
     */
    where: tbl_publicacaoWhereUniqueInput
  }

  /**
   * tbl_publicacao findUniqueOrThrow
   */
  export type tbl_publicacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_publicacao
     */
    select?: tbl_publicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_publicacao
     */
    omit?: tbl_publicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_publicacaoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_publicacao to fetch.
     */
    where: tbl_publicacaoWhereUniqueInput
  }

  /**
   * tbl_publicacao findFirst
   */
  export type tbl_publicacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_publicacao
     */
    select?: tbl_publicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_publicacao
     */
    omit?: tbl_publicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_publicacaoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_publicacao to fetch.
     */
    where?: tbl_publicacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_publicacaos to fetch.
     */
    orderBy?: tbl_publicacaoOrderByWithRelationInput | tbl_publicacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_publicacaos.
     */
    cursor?: tbl_publicacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_publicacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_publicacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_publicacaos.
     */
    distinct?: Tbl_publicacaoScalarFieldEnum | Tbl_publicacaoScalarFieldEnum[]
  }

  /**
   * tbl_publicacao findFirstOrThrow
   */
  export type tbl_publicacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_publicacao
     */
    select?: tbl_publicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_publicacao
     */
    omit?: tbl_publicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_publicacaoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_publicacao to fetch.
     */
    where?: tbl_publicacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_publicacaos to fetch.
     */
    orderBy?: tbl_publicacaoOrderByWithRelationInput | tbl_publicacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_publicacaos.
     */
    cursor?: tbl_publicacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_publicacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_publicacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_publicacaos.
     */
    distinct?: Tbl_publicacaoScalarFieldEnum | Tbl_publicacaoScalarFieldEnum[]
  }

  /**
   * tbl_publicacao findMany
   */
  export type tbl_publicacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_publicacao
     */
    select?: tbl_publicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_publicacao
     */
    omit?: tbl_publicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_publicacaoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_publicacaos to fetch.
     */
    where?: tbl_publicacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_publicacaos to fetch.
     */
    orderBy?: tbl_publicacaoOrderByWithRelationInput | tbl_publicacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_publicacaos.
     */
    cursor?: tbl_publicacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_publicacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_publicacaos.
     */
    skip?: number
    distinct?: Tbl_publicacaoScalarFieldEnum | Tbl_publicacaoScalarFieldEnum[]
  }

  /**
   * tbl_publicacao create
   */
  export type tbl_publicacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_publicacao
     */
    select?: tbl_publicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_publicacao
     */
    omit?: tbl_publicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_publicacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_publicacao.
     */
    data: XOR<tbl_publicacaoCreateInput, tbl_publicacaoUncheckedCreateInput>
  }

  /**
   * tbl_publicacao createMany
   */
  export type tbl_publicacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_publicacaos.
     */
    data: tbl_publicacaoCreateManyInput | tbl_publicacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_publicacao update
   */
  export type tbl_publicacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_publicacao
     */
    select?: tbl_publicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_publicacao
     */
    omit?: tbl_publicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_publicacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_publicacao.
     */
    data: XOR<tbl_publicacaoUpdateInput, tbl_publicacaoUncheckedUpdateInput>
    /**
     * Choose, which tbl_publicacao to update.
     */
    where: tbl_publicacaoWhereUniqueInput
  }

  /**
   * tbl_publicacao updateMany
   */
  export type tbl_publicacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_publicacaos.
     */
    data: XOR<tbl_publicacaoUpdateManyMutationInput, tbl_publicacaoUncheckedUpdateManyInput>
    /**
     * Filter which tbl_publicacaos to update
     */
    where?: tbl_publicacaoWhereInput
    /**
     * Limit how many tbl_publicacaos to update.
     */
    limit?: number
  }

  /**
   * tbl_publicacao upsert
   */
  export type tbl_publicacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_publicacao
     */
    select?: tbl_publicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_publicacao
     */
    omit?: tbl_publicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_publicacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_publicacao to update in case it exists.
     */
    where: tbl_publicacaoWhereUniqueInput
    /**
     * In case the tbl_publicacao found by the `where` argument doesn't exist, create a new tbl_publicacao with this data.
     */
    create: XOR<tbl_publicacaoCreateInput, tbl_publicacaoUncheckedCreateInput>
    /**
     * In case the tbl_publicacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_publicacaoUpdateInput, tbl_publicacaoUncheckedUpdateInput>
  }

  /**
   * tbl_publicacao delete
   */
  export type tbl_publicacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_publicacao
     */
    select?: tbl_publicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_publicacao
     */
    omit?: tbl_publicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_publicacaoInclude<ExtArgs> | null
    /**
     * Filter which tbl_publicacao to delete.
     */
    where: tbl_publicacaoWhereUniqueInput
  }

  /**
   * tbl_publicacao deleteMany
   */
  export type tbl_publicacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_publicacaos to delete
     */
    where?: tbl_publicacaoWhereInput
    /**
     * Limit how many tbl_publicacaos to delete.
     */
    limit?: number
  }

  /**
   * tbl_publicacao.tbl_comentario
   */
  export type tbl_publicacao$tbl_comentarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_comentario
     */
    select?: tbl_comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_comentario
     */
    omit?: tbl_comentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_comentarioInclude<ExtArgs> | null
    where?: tbl_comentarioWhereInput
    orderBy?: tbl_comentarioOrderByWithRelationInput | tbl_comentarioOrderByWithRelationInput[]
    cursor?: tbl_comentarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_comentarioScalarFieldEnum | Tbl_comentarioScalarFieldEnum[]
  }

  /**
   * tbl_publicacao.tbl_curtida
   */
  export type tbl_publicacao$tbl_curtidaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_curtida
     */
    select?: tbl_curtidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_curtida
     */
    omit?: tbl_curtidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_curtidaInclude<ExtArgs> | null
    where?: tbl_curtidaWhereInput
    orderBy?: tbl_curtidaOrderByWithRelationInput | tbl_curtidaOrderByWithRelationInput[]
    cursor?: tbl_curtidaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_curtidaScalarFieldEnum | Tbl_curtidaScalarFieldEnum[]
  }

  /**
   * tbl_publicacao.tbl_notificacao
   */
  export type tbl_publicacao$tbl_notificacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_notificacao
     */
    select?: tbl_notificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_notificacao
     */
    omit?: tbl_notificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_notificacaoInclude<ExtArgs> | null
    where?: tbl_notificacaoWhereInput
    orderBy?: tbl_notificacaoOrderByWithRelationInput | tbl_notificacaoOrderByWithRelationInput[]
    cursor?: tbl_notificacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_notificacaoScalarFieldEnum | Tbl_notificacaoScalarFieldEnum[]
  }

  /**
   * tbl_publicacao without action
   */
  export type tbl_publicacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_publicacao
     */
    select?: tbl_publicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_publicacao
     */
    omit?: tbl_publicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_publicacaoInclude<ExtArgs> | null
  }


  /**
   * Model tbl_serie
   */

  export type AggregateTbl_serie = {
    _count: Tbl_serieCountAggregateOutputType | null
    _avg: Tbl_serieAvgAggregateOutputType | null
    _sum: Tbl_serieSumAggregateOutputType | null
    _min: Tbl_serieMinAggregateOutputType | null
    _max: Tbl_serieMaxAggregateOutputType | null
  }

  export type Tbl_serieAvgAggregateOutputType = {
    id: number | null
    id_exercicio: number | null
    peso: Decimal | null
    repeticoes: number | null
  }

  export type Tbl_serieSumAggregateOutputType = {
    id: number | null
    id_exercicio: number | null
    peso: Decimal | null
    repeticoes: number | null
  }

  export type Tbl_serieMinAggregateOutputType = {
    id: number | null
    id_exercicio: number | null
    nome: string | null
    peso: Decimal | null
    repeticoes: number | null
  }

  export type Tbl_serieMaxAggregateOutputType = {
    id: number | null
    id_exercicio: number | null
    nome: string | null
    peso: Decimal | null
    repeticoes: number | null
  }

  export type Tbl_serieCountAggregateOutputType = {
    id: number
    id_exercicio: number
    nome: number
    peso: number
    repeticoes: number
    _all: number
  }


  export type Tbl_serieAvgAggregateInputType = {
    id?: true
    id_exercicio?: true
    peso?: true
    repeticoes?: true
  }

  export type Tbl_serieSumAggregateInputType = {
    id?: true
    id_exercicio?: true
    peso?: true
    repeticoes?: true
  }

  export type Tbl_serieMinAggregateInputType = {
    id?: true
    id_exercicio?: true
    nome?: true
    peso?: true
    repeticoes?: true
  }

  export type Tbl_serieMaxAggregateInputType = {
    id?: true
    id_exercicio?: true
    nome?: true
    peso?: true
    repeticoes?: true
  }

  export type Tbl_serieCountAggregateInputType = {
    id?: true
    id_exercicio?: true
    nome?: true
    peso?: true
    repeticoes?: true
    _all?: true
  }

  export type Tbl_serieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_serie to aggregate.
     */
    where?: tbl_serieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_series to fetch.
     */
    orderBy?: tbl_serieOrderByWithRelationInput | tbl_serieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_serieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_series from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_series.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_series
    **/
    _count?: true | Tbl_serieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_serieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_serieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_serieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_serieMaxAggregateInputType
  }

  export type GetTbl_serieAggregateType<T extends Tbl_serieAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_serie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_serie[P]>
      : GetScalarType<T[P], AggregateTbl_serie[P]>
  }




  export type tbl_serieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_serieWhereInput
    orderBy?: tbl_serieOrderByWithAggregationInput | tbl_serieOrderByWithAggregationInput[]
    by: Tbl_serieScalarFieldEnum[] | Tbl_serieScalarFieldEnum
    having?: tbl_serieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_serieCountAggregateInputType | true
    _avg?: Tbl_serieAvgAggregateInputType
    _sum?: Tbl_serieSumAggregateInputType
    _min?: Tbl_serieMinAggregateInputType
    _max?: Tbl_serieMaxAggregateInputType
  }

  export type Tbl_serieGroupByOutputType = {
    id: number
    id_exercicio: number
    nome: string | null
    peso: Decimal
    repeticoes: number
    _count: Tbl_serieCountAggregateOutputType | null
    _avg: Tbl_serieAvgAggregateOutputType | null
    _sum: Tbl_serieSumAggregateOutputType | null
    _min: Tbl_serieMinAggregateOutputType | null
    _max: Tbl_serieMaxAggregateOutputType | null
  }

  type GetTbl_serieGroupByPayload<T extends tbl_serieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_serieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_serieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_serieGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_serieGroupByOutputType[P]>
        }
      >
    >


  export type tbl_serieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_exercicio?: boolean
    nome?: boolean
    peso?: boolean
    repeticoes?: boolean
    tbl_exercicio_treino?: boolean | tbl_serie$tbl_exercicio_treinoArgs<ExtArgs>
    tbl_exercicio?: boolean | tbl_exercicioDefaultArgs<ExtArgs>
    _count?: boolean | Tbl_serieCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_serie"]>



  export type tbl_serieSelectScalar = {
    id?: boolean
    id_exercicio?: boolean
    nome?: boolean
    peso?: boolean
    repeticoes?: boolean
  }

  export type tbl_serieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_exercicio" | "nome" | "peso" | "repeticoes", ExtArgs["result"]["tbl_serie"]>
  export type tbl_serieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tbl_exercicio_treino?: boolean | tbl_serie$tbl_exercicio_treinoArgs<ExtArgs>
    tbl_exercicio?: boolean | tbl_exercicioDefaultArgs<ExtArgs>
    _count?: boolean | Tbl_serieCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tbl_seriePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_serie"
    objects: {
      tbl_exercicio_treino: Prisma.$tbl_exercicio_treinoPayload<ExtArgs>[]
      tbl_exercicio: Prisma.$tbl_exercicioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_exercicio: number
      nome: string | null
      peso: Prisma.Decimal
      repeticoes: number
    }, ExtArgs["result"]["tbl_serie"]>
    composites: {}
  }

  type tbl_serieGetPayload<S extends boolean | null | undefined | tbl_serieDefaultArgs> = $Result.GetResult<Prisma.$tbl_seriePayload, S>

  type tbl_serieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_serieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_serieCountAggregateInputType | true
    }

  export interface tbl_serieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_serie'], meta: { name: 'tbl_serie' } }
    /**
     * Find zero or one Tbl_serie that matches the filter.
     * @param {tbl_serieFindUniqueArgs} args - Arguments to find a Tbl_serie
     * @example
     * // Get one Tbl_serie
     * const tbl_serie = await prisma.tbl_serie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_serieFindUniqueArgs>(args: SelectSubset<T, tbl_serieFindUniqueArgs<ExtArgs>>): Prisma__tbl_serieClient<$Result.GetResult<Prisma.$tbl_seriePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_serie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_serieFindUniqueOrThrowArgs} args - Arguments to find a Tbl_serie
     * @example
     * // Get one Tbl_serie
     * const tbl_serie = await prisma.tbl_serie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_serieFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_serieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_serieClient<$Result.GetResult<Prisma.$tbl_seriePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_serie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_serieFindFirstArgs} args - Arguments to find a Tbl_serie
     * @example
     * // Get one Tbl_serie
     * const tbl_serie = await prisma.tbl_serie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_serieFindFirstArgs>(args?: SelectSubset<T, tbl_serieFindFirstArgs<ExtArgs>>): Prisma__tbl_serieClient<$Result.GetResult<Prisma.$tbl_seriePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_serie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_serieFindFirstOrThrowArgs} args - Arguments to find a Tbl_serie
     * @example
     * // Get one Tbl_serie
     * const tbl_serie = await prisma.tbl_serie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_serieFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_serieFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_serieClient<$Result.GetResult<Prisma.$tbl_seriePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_series that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_serieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_series
     * const tbl_series = await prisma.tbl_serie.findMany()
     * 
     * // Get first 10 Tbl_series
     * const tbl_series = await prisma.tbl_serie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbl_serieWithIdOnly = await prisma.tbl_serie.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tbl_serieFindManyArgs>(args?: SelectSubset<T, tbl_serieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_seriePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_serie.
     * @param {tbl_serieCreateArgs} args - Arguments to create a Tbl_serie.
     * @example
     * // Create one Tbl_serie
     * const Tbl_serie = await prisma.tbl_serie.create({
     *   data: {
     *     // ... data to create a Tbl_serie
     *   }
     * })
     * 
     */
    create<T extends tbl_serieCreateArgs>(args: SelectSubset<T, tbl_serieCreateArgs<ExtArgs>>): Prisma__tbl_serieClient<$Result.GetResult<Prisma.$tbl_seriePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_series.
     * @param {tbl_serieCreateManyArgs} args - Arguments to create many Tbl_series.
     * @example
     * // Create many Tbl_series
     * const tbl_serie = await prisma.tbl_serie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_serieCreateManyArgs>(args?: SelectSubset<T, tbl_serieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_serie.
     * @param {tbl_serieDeleteArgs} args - Arguments to delete one Tbl_serie.
     * @example
     * // Delete one Tbl_serie
     * const Tbl_serie = await prisma.tbl_serie.delete({
     *   where: {
     *     // ... filter to delete one Tbl_serie
     *   }
     * })
     * 
     */
    delete<T extends tbl_serieDeleteArgs>(args: SelectSubset<T, tbl_serieDeleteArgs<ExtArgs>>): Prisma__tbl_serieClient<$Result.GetResult<Prisma.$tbl_seriePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_serie.
     * @param {tbl_serieUpdateArgs} args - Arguments to update one Tbl_serie.
     * @example
     * // Update one Tbl_serie
     * const tbl_serie = await prisma.tbl_serie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_serieUpdateArgs>(args: SelectSubset<T, tbl_serieUpdateArgs<ExtArgs>>): Prisma__tbl_serieClient<$Result.GetResult<Prisma.$tbl_seriePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_series.
     * @param {tbl_serieDeleteManyArgs} args - Arguments to filter Tbl_series to delete.
     * @example
     * // Delete a few Tbl_series
     * const { count } = await prisma.tbl_serie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_serieDeleteManyArgs>(args?: SelectSubset<T, tbl_serieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_series.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_serieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_series
     * const tbl_serie = await prisma.tbl_serie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_serieUpdateManyArgs>(args: SelectSubset<T, tbl_serieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_serie.
     * @param {tbl_serieUpsertArgs} args - Arguments to update or create a Tbl_serie.
     * @example
     * // Update or create a Tbl_serie
     * const tbl_serie = await prisma.tbl_serie.upsert({
     *   create: {
     *     // ... data to create a Tbl_serie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_serie we want to update
     *   }
     * })
     */
    upsert<T extends tbl_serieUpsertArgs>(args: SelectSubset<T, tbl_serieUpsertArgs<ExtArgs>>): Prisma__tbl_serieClient<$Result.GetResult<Prisma.$tbl_seriePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_series.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_serieCountArgs} args - Arguments to filter Tbl_series to count.
     * @example
     * // Count the number of Tbl_series
     * const count = await prisma.tbl_serie.count({
     *   where: {
     *     // ... the filter for the Tbl_series we want to count
     *   }
     * })
    **/
    count<T extends tbl_serieCountArgs>(
      args?: Subset<T, tbl_serieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_serieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_serie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_serieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tbl_serieAggregateArgs>(args: Subset<T, Tbl_serieAggregateArgs>): Prisma.PrismaPromise<GetTbl_serieAggregateType<T>>

    /**
     * Group by Tbl_serie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_serieGroupByArgs} args - Group by arguments.
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
      T extends tbl_serieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_serieGroupByArgs['orderBy'] }
        : { orderBy?: tbl_serieGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tbl_serieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_serieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_serie model
   */
  readonly fields: tbl_serieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_serie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_serieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tbl_exercicio_treino<T extends tbl_serie$tbl_exercicio_treinoArgs<ExtArgs> = {}>(args?: Subset<T, tbl_serie$tbl_exercicio_treinoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_exercicio_treinoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tbl_exercicio<T extends tbl_exercicioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tbl_exercicioDefaultArgs<ExtArgs>>): Prisma__tbl_exercicioClient<$Result.GetResult<Prisma.$tbl_exercicioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the tbl_serie model
   */
  interface tbl_serieFieldRefs {
    readonly id: FieldRef<"tbl_serie", 'Int'>
    readonly id_exercicio: FieldRef<"tbl_serie", 'Int'>
    readonly nome: FieldRef<"tbl_serie", 'String'>
    readonly peso: FieldRef<"tbl_serie", 'Decimal'>
    readonly repeticoes: FieldRef<"tbl_serie", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * tbl_serie findUnique
   */
  export type tbl_serieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_serie
     */
    select?: tbl_serieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_serie
     */
    omit?: tbl_serieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_serieInclude<ExtArgs> | null
    /**
     * Filter, which tbl_serie to fetch.
     */
    where: tbl_serieWhereUniqueInput
  }

  /**
   * tbl_serie findUniqueOrThrow
   */
  export type tbl_serieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_serie
     */
    select?: tbl_serieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_serie
     */
    omit?: tbl_serieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_serieInclude<ExtArgs> | null
    /**
     * Filter, which tbl_serie to fetch.
     */
    where: tbl_serieWhereUniqueInput
  }

  /**
   * tbl_serie findFirst
   */
  export type tbl_serieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_serie
     */
    select?: tbl_serieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_serie
     */
    omit?: tbl_serieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_serieInclude<ExtArgs> | null
    /**
     * Filter, which tbl_serie to fetch.
     */
    where?: tbl_serieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_series to fetch.
     */
    orderBy?: tbl_serieOrderByWithRelationInput | tbl_serieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_series.
     */
    cursor?: tbl_serieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_series from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_series.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_series.
     */
    distinct?: Tbl_serieScalarFieldEnum | Tbl_serieScalarFieldEnum[]
  }

  /**
   * tbl_serie findFirstOrThrow
   */
  export type tbl_serieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_serie
     */
    select?: tbl_serieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_serie
     */
    omit?: tbl_serieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_serieInclude<ExtArgs> | null
    /**
     * Filter, which tbl_serie to fetch.
     */
    where?: tbl_serieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_series to fetch.
     */
    orderBy?: tbl_serieOrderByWithRelationInput | tbl_serieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_series.
     */
    cursor?: tbl_serieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_series from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_series.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_series.
     */
    distinct?: Tbl_serieScalarFieldEnum | Tbl_serieScalarFieldEnum[]
  }

  /**
   * tbl_serie findMany
   */
  export type tbl_serieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_serie
     */
    select?: tbl_serieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_serie
     */
    omit?: tbl_serieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_serieInclude<ExtArgs> | null
    /**
     * Filter, which tbl_series to fetch.
     */
    where?: tbl_serieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_series to fetch.
     */
    orderBy?: tbl_serieOrderByWithRelationInput | tbl_serieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_series.
     */
    cursor?: tbl_serieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_series from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_series.
     */
    skip?: number
    distinct?: Tbl_serieScalarFieldEnum | Tbl_serieScalarFieldEnum[]
  }

  /**
   * tbl_serie create
   */
  export type tbl_serieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_serie
     */
    select?: tbl_serieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_serie
     */
    omit?: tbl_serieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_serieInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_serie.
     */
    data: XOR<tbl_serieCreateInput, tbl_serieUncheckedCreateInput>
  }

  /**
   * tbl_serie createMany
   */
  export type tbl_serieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_series.
     */
    data: tbl_serieCreateManyInput | tbl_serieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_serie update
   */
  export type tbl_serieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_serie
     */
    select?: tbl_serieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_serie
     */
    omit?: tbl_serieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_serieInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_serie.
     */
    data: XOR<tbl_serieUpdateInput, tbl_serieUncheckedUpdateInput>
    /**
     * Choose, which tbl_serie to update.
     */
    where: tbl_serieWhereUniqueInput
  }

  /**
   * tbl_serie updateMany
   */
  export type tbl_serieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_series.
     */
    data: XOR<tbl_serieUpdateManyMutationInput, tbl_serieUncheckedUpdateManyInput>
    /**
     * Filter which tbl_series to update
     */
    where?: tbl_serieWhereInput
    /**
     * Limit how many tbl_series to update.
     */
    limit?: number
  }

  /**
   * tbl_serie upsert
   */
  export type tbl_serieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_serie
     */
    select?: tbl_serieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_serie
     */
    omit?: tbl_serieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_serieInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_serie to update in case it exists.
     */
    where: tbl_serieWhereUniqueInput
    /**
     * In case the tbl_serie found by the `where` argument doesn't exist, create a new tbl_serie with this data.
     */
    create: XOR<tbl_serieCreateInput, tbl_serieUncheckedCreateInput>
    /**
     * In case the tbl_serie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_serieUpdateInput, tbl_serieUncheckedUpdateInput>
  }

  /**
   * tbl_serie delete
   */
  export type tbl_serieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_serie
     */
    select?: tbl_serieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_serie
     */
    omit?: tbl_serieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_serieInclude<ExtArgs> | null
    /**
     * Filter which tbl_serie to delete.
     */
    where: tbl_serieWhereUniqueInput
  }

  /**
   * tbl_serie deleteMany
   */
  export type tbl_serieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_series to delete
     */
    where?: tbl_serieWhereInput
    /**
     * Limit how many tbl_series to delete.
     */
    limit?: number
  }

  /**
   * tbl_serie.tbl_exercicio_treino
   */
  export type tbl_serie$tbl_exercicio_treinoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_exercicio_treino
     */
    select?: tbl_exercicio_treinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_exercicio_treino
     */
    omit?: tbl_exercicio_treinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_exercicio_treinoInclude<ExtArgs> | null
    where?: tbl_exercicio_treinoWhereInput
    orderBy?: tbl_exercicio_treinoOrderByWithRelationInput | tbl_exercicio_treinoOrderByWithRelationInput[]
    cursor?: tbl_exercicio_treinoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_exercicio_treinoScalarFieldEnum | Tbl_exercicio_treinoScalarFieldEnum[]
  }

  /**
   * tbl_serie without action
   */
  export type tbl_serieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_serie
     */
    select?: tbl_serieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_serie
     */
    omit?: tbl_serieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_serieInclude<ExtArgs> | null
  }


  /**
   * Model tbl_treino
   */

  export type AggregateTbl_treino = {
    _count: Tbl_treinoCountAggregateOutputType | null
    _avg: Tbl_treinoAvgAggregateOutputType | null
    _sum: Tbl_treinoSumAggregateOutputType | null
    _min: Tbl_treinoMinAggregateOutputType | null
    _max: Tbl_treinoMaxAggregateOutputType | null
  }

  export type Tbl_treinoAvgAggregateOutputType = {
    id: number | null
    id_user: number | null
  }

  export type Tbl_treinoSumAggregateOutputType = {
    id: number | null
    id_user: number | null
  }

  export type Tbl_treinoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    id_user: number | null
  }

  export type Tbl_treinoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    id_user: number | null
  }

  export type Tbl_treinoCountAggregateOutputType = {
    id: number
    nome: number
    id_user: number
    _all: number
  }


  export type Tbl_treinoAvgAggregateInputType = {
    id?: true
    id_user?: true
  }

  export type Tbl_treinoSumAggregateInputType = {
    id?: true
    id_user?: true
  }

  export type Tbl_treinoMinAggregateInputType = {
    id?: true
    nome?: true
    id_user?: true
  }

  export type Tbl_treinoMaxAggregateInputType = {
    id?: true
    nome?: true
    id_user?: true
  }

  export type Tbl_treinoCountAggregateInputType = {
    id?: true
    nome?: true
    id_user?: true
    _all?: true
  }

  export type Tbl_treinoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_treino to aggregate.
     */
    where?: tbl_treinoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_treinos to fetch.
     */
    orderBy?: tbl_treinoOrderByWithRelationInput | tbl_treinoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_treinoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_treinos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_treinos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_treinos
    **/
    _count?: true | Tbl_treinoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_treinoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_treinoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_treinoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_treinoMaxAggregateInputType
  }

  export type GetTbl_treinoAggregateType<T extends Tbl_treinoAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_treino]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_treino[P]>
      : GetScalarType<T[P], AggregateTbl_treino[P]>
  }




  export type tbl_treinoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_treinoWhereInput
    orderBy?: tbl_treinoOrderByWithAggregationInput | tbl_treinoOrderByWithAggregationInput[]
    by: Tbl_treinoScalarFieldEnum[] | Tbl_treinoScalarFieldEnum
    having?: tbl_treinoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_treinoCountAggregateInputType | true
    _avg?: Tbl_treinoAvgAggregateInputType
    _sum?: Tbl_treinoSumAggregateInputType
    _min?: Tbl_treinoMinAggregateInputType
    _max?: Tbl_treinoMaxAggregateInputType
  }

  export type Tbl_treinoGroupByOutputType = {
    id: number
    nome: string
    id_user: number
    _count: Tbl_treinoCountAggregateOutputType | null
    _avg: Tbl_treinoAvgAggregateOutputType | null
    _sum: Tbl_treinoSumAggregateOutputType | null
    _min: Tbl_treinoMinAggregateOutputType | null
    _max: Tbl_treinoMaxAggregateOutputType | null
  }

  type GetTbl_treinoGroupByPayload<T extends tbl_treinoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_treinoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_treinoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_treinoGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_treinoGroupByOutputType[P]>
        }
      >
    >


  export type tbl_treinoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    id_user?: boolean
    tbl_exercicio_treino?: boolean | tbl_treino$tbl_exercicio_treinoArgs<ExtArgs>
    tbl_user?: boolean | tbl_userDefaultArgs<ExtArgs>
    _count?: boolean | Tbl_treinoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_treino"]>



  export type tbl_treinoSelectScalar = {
    id?: boolean
    nome?: boolean
    id_user?: boolean
  }

  export type tbl_treinoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "id_user", ExtArgs["result"]["tbl_treino"]>
  export type tbl_treinoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tbl_exercicio_treino?: boolean | tbl_treino$tbl_exercicio_treinoArgs<ExtArgs>
    tbl_user?: boolean | tbl_userDefaultArgs<ExtArgs>
    _count?: boolean | Tbl_treinoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tbl_treinoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_treino"
    objects: {
      tbl_exercicio_treino: Prisma.$tbl_exercicio_treinoPayload<ExtArgs>[]
      tbl_user: Prisma.$tbl_userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      id_user: number
    }, ExtArgs["result"]["tbl_treino"]>
    composites: {}
  }

  type tbl_treinoGetPayload<S extends boolean | null | undefined | tbl_treinoDefaultArgs> = $Result.GetResult<Prisma.$tbl_treinoPayload, S>

  type tbl_treinoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_treinoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_treinoCountAggregateInputType | true
    }

  export interface tbl_treinoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_treino'], meta: { name: 'tbl_treino' } }
    /**
     * Find zero or one Tbl_treino that matches the filter.
     * @param {tbl_treinoFindUniqueArgs} args - Arguments to find a Tbl_treino
     * @example
     * // Get one Tbl_treino
     * const tbl_treino = await prisma.tbl_treino.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_treinoFindUniqueArgs>(args: SelectSubset<T, tbl_treinoFindUniqueArgs<ExtArgs>>): Prisma__tbl_treinoClient<$Result.GetResult<Prisma.$tbl_treinoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_treino that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_treinoFindUniqueOrThrowArgs} args - Arguments to find a Tbl_treino
     * @example
     * // Get one Tbl_treino
     * const tbl_treino = await prisma.tbl_treino.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_treinoFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_treinoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_treinoClient<$Result.GetResult<Prisma.$tbl_treinoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_treino that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_treinoFindFirstArgs} args - Arguments to find a Tbl_treino
     * @example
     * // Get one Tbl_treino
     * const tbl_treino = await prisma.tbl_treino.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_treinoFindFirstArgs>(args?: SelectSubset<T, tbl_treinoFindFirstArgs<ExtArgs>>): Prisma__tbl_treinoClient<$Result.GetResult<Prisma.$tbl_treinoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_treino that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_treinoFindFirstOrThrowArgs} args - Arguments to find a Tbl_treino
     * @example
     * // Get one Tbl_treino
     * const tbl_treino = await prisma.tbl_treino.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_treinoFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_treinoFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_treinoClient<$Result.GetResult<Prisma.$tbl_treinoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_treinos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_treinoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_treinos
     * const tbl_treinos = await prisma.tbl_treino.findMany()
     * 
     * // Get first 10 Tbl_treinos
     * const tbl_treinos = await prisma.tbl_treino.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbl_treinoWithIdOnly = await prisma.tbl_treino.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tbl_treinoFindManyArgs>(args?: SelectSubset<T, tbl_treinoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_treinoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_treino.
     * @param {tbl_treinoCreateArgs} args - Arguments to create a Tbl_treino.
     * @example
     * // Create one Tbl_treino
     * const Tbl_treino = await prisma.tbl_treino.create({
     *   data: {
     *     // ... data to create a Tbl_treino
     *   }
     * })
     * 
     */
    create<T extends tbl_treinoCreateArgs>(args: SelectSubset<T, tbl_treinoCreateArgs<ExtArgs>>): Prisma__tbl_treinoClient<$Result.GetResult<Prisma.$tbl_treinoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_treinos.
     * @param {tbl_treinoCreateManyArgs} args - Arguments to create many Tbl_treinos.
     * @example
     * // Create many Tbl_treinos
     * const tbl_treino = await prisma.tbl_treino.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_treinoCreateManyArgs>(args?: SelectSubset<T, tbl_treinoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_treino.
     * @param {tbl_treinoDeleteArgs} args - Arguments to delete one Tbl_treino.
     * @example
     * // Delete one Tbl_treino
     * const Tbl_treino = await prisma.tbl_treino.delete({
     *   where: {
     *     // ... filter to delete one Tbl_treino
     *   }
     * })
     * 
     */
    delete<T extends tbl_treinoDeleteArgs>(args: SelectSubset<T, tbl_treinoDeleteArgs<ExtArgs>>): Prisma__tbl_treinoClient<$Result.GetResult<Prisma.$tbl_treinoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_treino.
     * @param {tbl_treinoUpdateArgs} args - Arguments to update one Tbl_treino.
     * @example
     * // Update one Tbl_treino
     * const tbl_treino = await prisma.tbl_treino.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_treinoUpdateArgs>(args: SelectSubset<T, tbl_treinoUpdateArgs<ExtArgs>>): Prisma__tbl_treinoClient<$Result.GetResult<Prisma.$tbl_treinoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_treinos.
     * @param {tbl_treinoDeleteManyArgs} args - Arguments to filter Tbl_treinos to delete.
     * @example
     * // Delete a few Tbl_treinos
     * const { count } = await prisma.tbl_treino.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_treinoDeleteManyArgs>(args?: SelectSubset<T, tbl_treinoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_treinos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_treinoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_treinos
     * const tbl_treino = await prisma.tbl_treino.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_treinoUpdateManyArgs>(args: SelectSubset<T, tbl_treinoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_treino.
     * @param {tbl_treinoUpsertArgs} args - Arguments to update or create a Tbl_treino.
     * @example
     * // Update or create a Tbl_treino
     * const tbl_treino = await prisma.tbl_treino.upsert({
     *   create: {
     *     // ... data to create a Tbl_treino
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_treino we want to update
     *   }
     * })
     */
    upsert<T extends tbl_treinoUpsertArgs>(args: SelectSubset<T, tbl_treinoUpsertArgs<ExtArgs>>): Prisma__tbl_treinoClient<$Result.GetResult<Prisma.$tbl_treinoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_treinos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_treinoCountArgs} args - Arguments to filter Tbl_treinos to count.
     * @example
     * // Count the number of Tbl_treinos
     * const count = await prisma.tbl_treino.count({
     *   where: {
     *     // ... the filter for the Tbl_treinos we want to count
     *   }
     * })
    **/
    count<T extends tbl_treinoCountArgs>(
      args?: Subset<T, tbl_treinoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_treinoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_treino.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_treinoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tbl_treinoAggregateArgs>(args: Subset<T, Tbl_treinoAggregateArgs>): Prisma.PrismaPromise<GetTbl_treinoAggregateType<T>>

    /**
     * Group by Tbl_treino.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_treinoGroupByArgs} args - Group by arguments.
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
      T extends tbl_treinoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_treinoGroupByArgs['orderBy'] }
        : { orderBy?: tbl_treinoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tbl_treinoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_treinoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_treino model
   */
  readonly fields: tbl_treinoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_treino.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_treinoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tbl_exercicio_treino<T extends tbl_treino$tbl_exercicio_treinoArgs<ExtArgs> = {}>(args?: Subset<T, tbl_treino$tbl_exercicio_treinoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_exercicio_treinoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tbl_user<T extends tbl_userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tbl_userDefaultArgs<ExtArgs>>): Prisma__tbl_userClient<$Result.GetResult<Prisma.$tbl_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the tbl_treino model
   */
  interface tbl_treinoFieldRefs {
    readonly id: FieldRef<"tbl_treino", 'Int'>
    readonly nome: FieldRef<"tbl_treino", 'String'>
    readonly id_user: FieldRef<"tbl_treino", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * tbl_treino findUnique
   */
  export type tbl_treinoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_treino
     */
    select?: tbl_treinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_treino
     */
    omit?: tbl_treinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_treinoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_treino to fetch.
     */
    where: tbl_treinoWhereUniqueInput
  }

  /**
   * tbl_treino findUniqueOrThrow
   */
  export type tbl_treinoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_treino
     */
    select?: tbl_treinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_treino
     */
    omit?: tbl_treinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_treinoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_treino to fetch.
     */
    where: tbl_treinoWhereUniqueInput
  }

  /**
   * tbl_treino findFirst
   */
  export type tbl_treinoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_treino
     */
    select?: tbl_treinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_treino
     */
    omit?: tbl_treinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_treinoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_treino to fetch.
     */
    where?: tbl_treinoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_treinos to fetch.
     */
    orderBy?: tbl_treinoOrderByWithRelationInput | tbl_treinoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_treinos.
     */
    cursor?: tbl_treinoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_treinos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_treinos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_treinos.
     */
    distinct?: Tbl_treinoScalarFieldEnum | Tbl_treinoScalarFieldEnum[]
  }

  /**
   * tbl_treino findFirstOrThrow
   */
  export type tbl_treinoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_treino
     */
    select?: tbl_treinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_treino
     */
    omit?: tbl_treinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_treinoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_treino to fetch.
     */
    where?: tbl_treinoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_treinos to fetch.
     */
    orderBy?: tbl_treinoOrderByWithRelationInput | tbl_treinoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_treinos.
     */
    cursor?: tbl_treinoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_treinos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_treinos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_treinos.
     */
    distinct?: Tbl_treinoScalarFieldEnum | Tbl_treinoScalarFieldEnum[]
  }

  /**
   * tbl_treino findMany
   */
  export type tbl_treinoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_treino
     */
    select?: tbl_treinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_treino
     */
    omit?: tbl_treinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_treinoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_treinos to fetch.
     */
    where?: tbl_treinoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_treinos to fetch.
     */
    orderBy?: tbl_treinoOrderByWithRelationInput | tbl_treinoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_treinos.
     */
    cursor?: tbl_treinoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_treinos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_treinos.
     */
    skip?: number
    distinct?: Tbl_treinoScalarFieldEnum | Tbl_treinoScalarFieldEnum[]
  }

  /**
   * tbl_treino create
   */
  export type tbl_treinoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_treino
     */
    select?: tbl_treinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_treino
     */
    omit?: tbl_treinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_treinoInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_treino.
     */
    data: XOR<tbl_treinoCreateInput, tbl_treinoUncheckedCreateInput>
  }

  /**
   * tbl_treino createMany
   */
  export type tbl_treinoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_treinos.
     */
    data: tbl_treinoCreateManyInput | tbl_treinoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_treino update
   */
  export type tbl_treinoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_treino
     */
    select?: tbl_treinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_treino
     */
    omit?: tbl_treinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_treinoInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_treino.
     */
    data: XOR<tbl_treinoUpdateInput, tbl_treinoUncheckedUpdateInput>
    /**
     * Choose, which tbl_treino to update.
     */
    where: tbl_treinoWhereUniqueInput
  }

  /**
   * tbl_treino updateMany
   */
  export type tbl_treinoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_treinos.
     */
    data: XOR<tbl_treinoUpdateManyMutationInput, tbl_treinoUncheckedUpdateManyInput>
    /**
     * Filter which tbl_treinos to update
     */
    where?: tbl_treinoWhereInput
    /**
     * Limit how many tbl_treinos to update.
     */
    limit?: number
  }

  /**
   * tbl_treino upsert
   */
  export type tbl_treinoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_treino
     */
    select?: tbl_treinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_treino
     */
    omit?: tbl_treinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_treinoInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_treino to update in case it exists.
     */
    where: tbl_treinoWhereUniqueInput
    /**
     * In case the tbl_treino found by the `where` argument doesn't exist, create a new tbl_treino with this data.
     */
    create: XOR<tbl_treinoCreateInput, tbl_treinoUncheckedCreateInput>
    /**
     * In case the tbl_treino was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_treinoUpdateInput, tbl_treinoUncheckedUpdateInput>
  }

  /**
   * tbl_treino delete
   */
  export type tbl_treinoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_treino
     */
    select?: tbl_treinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_treino
     */
    omit?: tbl_treinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_treinoInclude<ExtArgs> | null
    /**
     * Filter which tbl_treino to delete.
     */
    where: tbl_treinoWhereUniqueInput
  }

  /**
   * tbl_treino deleteMany
   */
  export type tbl_treinoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_treinos to delete
     */
    where?: tbl_treinoWhereInput
    /**
     * Limit how many tbl_treinos to delete.
     */
    limit?: number
  }

  /**
   * tbl_treino.tbl_exercicio_treino
   */
  export type tbl_treino$tbl_exercicio_treinoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_exercicio_treino
     */
    select?: tbl_exercicio_treinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_exercicio_treino
     */
    omit?: tbl_exercicio_treinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_exercicio_treinoInclude<ExtArgs> | null
    where?: tbl_exercicio_treinoWhereInput
    orderBy?: tbl_exercicio_treinoOrderByWithRelationInput | tbl_exercicio_treinoOrderByWithRelationInput[]
    cursor?: tbl_exercicio_treinoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_exercicio_treinoScalarFieldEnum | Tbl_exercicio_treinoScalarFieldEnum[]
  }

  /**
   * tbl_treino without action
   */
  export type tbl_treinoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_treino
     */
    select?: tbl_treinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_treino
     */
    omit?: tbl_treinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_treinoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Tbl_userScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    peso: 'peso',
    altura: 'altura',
    imc: 'imc',
    nickname: 'nickname',
    data_nascimento: 'data_nascimento',
    foto: 'foto',
    descricao: 'descricao',
    localizacao: 'localizacao',
    is_bloqueado: 'is_bloqueado'
  };

  export type Tbl_userScalarFieldEnum = (typeof Tbl_userScalarFieldEnum)[keyof typeof Tbl_userScalarFieldEnum]


  export const Tbl_recuperacao_senhaScalarFieldEnum: {
    id: 'id',
    id_user: 'id_user',
    token: 'token',
    data_criacao: 'data_criacao'
  };

  export type Tbl_recuperacao_senhaScalarFieldEnum = (typeof Tbl_recuperacao_senhaScalarFieldEnum)[keyof typeof Tbl_recuperacao_senhaScalarFieldEnum]


  export const Tbl_comentarioScalarFieldEnum: {
    id: 'id',
    conteudo: 'conteudo',
    data_comentario: 'data_comentario',
    id_publicacao: 'id_publicacao',
    id_user: 'id_user',
    curtidas_count: 'curtidas_count'
  };

  export type Tbl_comentarioScalarFieldEnum = (typeof Tbl_comentarioScalarFieldEnum)[keyof typeof Tbl_comentarioScalarFieldEnum]


  export const Tbl_curtidaScalarFieldEnum: {
    id: 'id',
    id_publicacao: 'id_publicacao',
    id_user: 'id_user'
  };

  export type Tbl_curtidaScalarFieldEnum = (typeof Tbl_curtidaScalarFieldEnum)[keyof typeof Tbl_curtidaScalarFieldEnum]


  export const Tbl_curtida_comentarioScalarFieldEnum: {
    id: 'id',
    id_comentario: 'id_comentario',
    id_user: 'id_user'
  };

  export type Tbl_curtida_comentarioScalarFieldEnum = (typeof Tbl_curtida_comentarioScalarFieldEnum)[keyof typeof Tbl_curtida_comentarioScalarFieldEnum]


  export const Tbl_exercicioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    gif: 'gif',
    descricao: 'descricao',
    grupo_muscular: 'grupo_muscular'
  };

  export type Tbl_exercicioScalarFieldEnum = (typeof Tbl_exercicioScalarFieldEnum)[keyof typeof Tbl_exercicioScalarFieldEnum]


  export const Tbl_exercicio_treinoScalarFieldEnum: {
    id: 'id',
    id_treino: 'id_treino',
    id_exercicio: 'id_exercicio',
    id_serie: 'id_serie'
  };

  export type Tbl_exercicio_treinoScalarFieldEnum = (typeof Tbl_exercicio_treinoScalarFieldEnum)[keyof typeof Tbl_exercicio_treinoScalarFieldEnum]


  export const Tbl_notificacaoScalarFieldEnum: {
    id: 'id',
    id_usuario_destino: 'id_usuario_destino',
    id_usuario_origem: 'id_usuario_origem',
    id_publicacao: 'id_publicacao',
    id_comentario: 'id_comentario',
    id_curtida: 'id_curtida',
    id_curtida_comentario: 'id_curtida_comentario',
    tipo_notificacao: 'tipo_notificacao',
    data_criacao: 'data_criacao',
    is_lida: 'is_lida'
  };

  export type Tbl_notificacaoScalarFieldEnum = (typeof Tbl_notificacaoScalarFieldEnum)[keyof typeof Tbl_notificacaoScalarFieldEnum]


  export const Tbl_publicacaoScalarFieldEnum: {
    id: 'id',
    imagem: 'imagem',
    descricao: 'descricao',
    data_publicacao: 'data_publicacao',
    localizacao: 'localizacao',
    curtidas_count: 'curtidas_count',
    comentarios_count: 'comentarios_count',
    id_user: 'id_user'
  };

  export type Tbl_publicacaoScalarFieldEnum = (typeof Tbl_publicacaoScalarFieldEnum)[keyof typeof Tbl_publicacaoScalarFieldEnum]


  export const Tbl_serieScalarFieldEnum: {
    id: 'id',
    id_exercicio: 'id_exercicio',
    nome: 'nome',
    peso: 'peso',
    repeticoes: 'repeticoes'
  };

  export type Tbl_serieScalarFieldEnum = (typeof Tbl_serieScalarFieldEnum)[keyof typeof Tbl_serieScalarFieldEnum]


  export const Tbl_treinoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    id_user: 'id_user'
  };

  export type Tbl_treinoScalarFieldEnum = (typeof Tbl_treinoScalarFieldEnum)[keyof typeof Tbl_treinoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const tbl_userOrderByRelevanceFieldEnum: {
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    nickname: 'nickname',
    foto: 'foto',
    descricao: 'descricao',
    localizacao: 'localizacao'
  };

  export type tbl_userOrderByRelevanceFieldEnum = (typeof tbl_userOrderByRelevanceFieldEnum)[keyof typeof tbl_userOrderByRelevanceFieldEnum]


  export const tbl_comentarioOrderByRelevanceFieldEnum: {
    conteudo: 'conteudo'
  };

  export type tbl_comentarioOrderByRelevanceFieldEnum = (typeof tbl_comentarioOrderByRelevanceFieldEnum)[keyof typeof tbl_comentarioOrderByRelevanceFieldEnum]


  export const tbl_exercicioOrderByRelevanceFieldEnum: {
    nome: 'nome',
    gif: 'gif',
    descricao: 'descricao',
    grupo_muscular: 'grupo_muscular'
  };

  export type tbl_exercicioOrderByRelevanceFieldEnum = (typeof tbl_exercicioOrderByRelevanceFieldEnum)[keyof typeof tbl_exercicioOrderByRelevanceFieldEnum]


  export const tbl_notificacaoOrderByRelevanceFieldEnum: {
    tipo_notificacao: 'tipo_notificacao'
  };

  export type tbl_notificacaoOrderByRelevanceFieldEnum = (typeof tbl_notificacaoOrderByRelevanceFieldEnum)[keyof typeof tbl_notificacaoOrderByRelevanceFieldEnum]


  export const tbl_publicacaoOrderByRelevanceFieldEnum: {
    imagem: 'imagem',
    descricao: 'descricao',
    localizacao: 'localizacao'
  };

  export type tbl_publicacaoOrderByRelevanceFieldEnum = (typeof tbl_publicacaoOrderByRelevanceFieldEnum)[keyof typeof tbl_publicacaoOrderByRelevanceFieldEnum]


  export const tbl_serieOrderByRelevanceFieldEnum: {
    nome: 'nome'
  };

  export type tbl_serieOrderByRelevanceFieldEnum = (typeof tbl_serieOrderByRelevanceFieldEnum)[keyof typeof tbl_serieOrderByRelevanceFieldEnum]


  export const tbl_treinoOrderByRelevanceFieldEnum: {
    nome: 'nome'
  };

  export type tbl_treinoOrderByRelevanceFieldEnum = (typeof tbl_treinoOrderByRelevanceFieldEnum)[keyof typeof tbl_treinoOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type tbl_userWhereInput = {
    AND?: tbl_userWhereInput | tbl_userWhereInput[]
    OR?: tbl_userWhereInput[]
    NOT?: tbl_userWhereInput | tbl_userWhereInput[]
    id?: IntFilter<"tbl_user"> | number
    nome?: StringFilter<"tbl_user"> | string
    email?: StringFilter<"tbl_user"> | string
    senha?: StringFilter<"tbl_user"> | string
    peso?: DecimalNullableFilter<"tbl_user"> | Decimal | DecimalJsLike | number | string | null
    altura?: DecimalNullableFilter<"tbl_user"> | Decimal | DecimalJsLike | number | string | null
    imc?: DecimalNullableFilter<"tbl_user"> | Decimal | DecimalJsLike | number | string | null
    nickname?: StringFilter<"tbl_user"> | string
    data_nascimento?: DateTimeNullableFilter<"tbl_user"> | Date | string | null
    foto?: StringNullableFilter<"tbl_user"> | string | null
    descricao?: StringNullableFilter<"tbl_user"> | string | null
    localizacao?: StringNullableFilter<"tbl_user"> | string | null
    is_bloqueado?: BoolNullableFilter<"tbl_user"> | boolean | null
    tbl_comentario?: Tbl_comentarioListRelationFilter
    tbl_curtida?: Tbl_curtidaListRelationFilter
    tbl_curtida_comentario?: Tbl_curtida_comentarioListRelationFilter
    tbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_user?: Tbl_notificacaoListRelationFilter
    tbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_user?: Tbl_notificacaoListRelationFilter
    tbl_publicacao?: Tbl_publicacaoListRelationFilter
    recuperacaoSenha?: Tbl_recuperacao_senhaListRelationFilter
    tbl_treino?: Tbl_treinoListRelationFilter
  }

  export type tbl_userOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    peso?: SortOrderInput | SortOrder
    altura?: SortOrderInput | SortOrder
    imc?: SortOrderInput | SortOrder
    nickname?: SortOrder
    data_nascimento?: SortOrderInput | SortOrder
    foto?: SortOrderInput | SortOrder
    descricao?: SortOrderInput | SortOrder
    localizacao?: SortOrderInput | SortOrder
    is_bloqueado?: SortOrderInput | SortOrder
    tbl_comentario?: tbl_comentarioOrderByRelationAggregateInput
    tbl_curtida?: tbl_curtidaOrderByRelationAggregateInput
    tbl_curtida_comentario?: tbl_curtida_comentarioOrderByRelationAggregateInput
    tbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_user?: tbl_notificacaoOrderByRelationAggregateInput
    tbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_user?: tbl_notificacaoOrderByRelationAggregateInput
    tbl_publicacao?: tbl_publicacaoOrderByRelationAggregateInput
    recuperacaoSenha?: tbl_recuperacao_senhaOrderByRelationAggregateInput
    tbl_treino?: tbl_treinoOrderByRelationAggregateInput
    _relevance?: tbl_userOrderByRelevanceInput
  }

  export type tbl_userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: tbl_userWhereInput | tbl_userWhereInput[]
    OR?: tbl_userWhereInput[]
    NOT?: tbl_userWhereInput | tbl_userWhereInput[]
    nome?: StringFilter<"tbl_user"> | string
    senha?: StringFilter<"tbl_user"> | string
    peso?: DecimalNullableFilter<"tbl_user"> | Decimal | DecimalJsLike | number | string | null
    altura?: DecimalNullableFilter<"tbl_user"> | Decimal | DecimalJsLike | number | string | null
    imc?: DecimalNullableFilter<"tbl_user"> | Decimal | DecimalJsLike | number | string | null
    nickname?: StringFilter<"tbl_user"> | string
    data_nascimento?: DateTimeNullableFilter<"tbl_user"> | Date | string | null
    foto?: StringNullableFilter<"tbl_user"> | string | null
    descricao?: StringNullableFilter<"tbl_user"> | string | null
    localizacao?: StringNullableFilter<"tbl_user"> | string | null
    is_bloqueado?: BoolNullableFilter<"tbl_user"> | boolean | null
    tbl_comentario?: Tbl_comentarioListRelationFilter
    tbl_curtida?: Tbl_curtidaListRelationFilter
    tbl_curtida_comentario?: Tbl_curtida_comentarioListRelationFilter
    tbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_user?: Tbl_notificacaoListRelationFilter
    tbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_user?: Tbl_notificacaoListRelationFilter
    tbl_publicacao?: Tbl_publicacaoListRelationFilter
    recuperacaoSenha?: Tbl_recuperacao_senhaListRelationFilter
    tbl_treino?: Tbl_treinoListRelationFilter
  }, "id" | "email">

  export type tbl_userOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    peso?: SortOrderInput | SortOrder
    altura?: SortOrderInput | SortOrder
    imc?: SortOrderInput | SortOrder
    nickname?: SortOrder
    data_nascimento?: SortOrderInput | SortOrder
    foto?: SortOrderInput | SortOrder
    descricao?: SortOrderInput | SortOrder
    localizacao?: SortOrderInput | SortOrder
    is_bloqueado?: SortOrderInput | SortOrder
    _count?: tbl_userCountOrderByAggregateInput
    _avg?: tbl_userAvgOrderByAggregateInput
    _max?: tbl_userMaxOrderByAggregateInput
    _min?: tbl_userMinOrderByAggregateInput
    _sum?: tbl_userSumOrderByAggregateInput
  }

  export type tbl_userScalarWhereWithAggregatesInput = {
    AND?: tbl_userScalarWhereWithAggregatesInput | tbl_userScalarWhereWithAggregatesInput[]
    OR?: tbl_userScalarWhereWithAggregatesInput[]
    NOT?: tbl_userScalarWhereWithAggregatesInput | tbl_userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tbl_user"> | number
    nome?: StringWithAggregatesFilter<"tbl_user"> | string
    email?: StringWithAggregatesFilter<"tbl_user"> | string
    senha?: StringWithAggregatesFilter<"tbl_user"> | string
    peso?: DecimalNullableWithAggregatesFilter<"tbl_user"> | Decimal | DecimalJsLike | number | string | null
    altura?: DecimalNullableWithAggregatesFilter<"tbl_user"> | Decimal | DecimalJsLike | number | string | null
    imc?: DecimalNullableWithAggregatesFilter<"tbl_user"> | Decimal | DecimalJsLike | number | string | null
    nickname?: StringWithAggregatesFilter<"tbl_user"> | string
    data_nascimento?: DateTimeNullableWithAggregatesFilter<"tbl_user"> | Date | string | null
    foto?: StringNullableWithAggregatesFilter<"tbl_user"> | string | null
    descricao?: StringNullableWithAggregatesFilter<"tbl_user"> | string | null
    localizacao?: StringNullableWithAggregatesFilter<"tbl_user"> | string | null
    is_bloqueado?: BoolNullableWithAggregatesFilter<"tbl_user"> | boolean | null
  }

  export type tbl_recuperacao_senhaWhereInput = {
    AND?: tbl_recuperacao_senhaWhereInput | tbl_recuperacao_senhaWhereInput[]
    OR?: tbl_recuperacao_senhaWhereInput[]
    NOT?: tbl_recuperacao_senhaWhereInput | tbl_recuperacao_senhaWhereInput[]
    id?: IntFilter<"tbl_recuperacao_senha"> | number
    id_user?: IntFilter<"tbl_recuperacao_senha"> | number
    token?: IntFilter<"tbl_recuperacao_senha"> | number
    data_criacao?: DateTimeFilter<"tbl_recuperacao_senha"> | Date | string
    usuario?: XOR<Tbl_userScalarRelationFilter, tbl_userWhereInput>
  }

  export type tbl_recuperacao_senhaOrderByWithRelationInput = {
    id?: SortOrder
    id_user?: SortOrder
    token?: SortOrder
    data_criacao?: SortOrder
    usuario?: tbl_userOrderByWithRelationInput
  }

  export type tbl_recuperacao_senhaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    token?: number
    AND?: tbl_recuperacao_senhaWhereInput | tbl_recuperacao_senhaWhereInput[]
    OR?: tbl_recuperacao_senhaWhereInput[]
    NOT?: tbl_recuperacao_senhaWhereInput | tbl_recuperacao_senhaWhereInput[]
    id_user?: IntFilter<"tbl_recuperacao_senha"> | number
    data_criacao?: DateTimeFilter<"tbl_recuperacao_senha"> | Date | string
    usuario?: XOR<Tbl_userScalarRelationFilter, tbl_userWhereInput>
  }, "id" | "token">

  export type tbl_recuperacao_senhaOrderByWithAggregationInput = {
    id?: SortOrder
    id_user?: SortOrder
    token?: SortOrder
    data_criacao?: SortOrder
    _count?: tbl_recuperacao_senhaCountOrderByAggregateInput
    _avg?: tbl_recuperacao_senhaAvgOrderByAggregateInput
    _max?: tbl_recuperacao_senhaMaxOrderByAggregateInput
    _min?: tbl_recuperacao_senhaMinOrderByAggregateInput
    _sum?: tbl_recuperacao_senhaSumOrderByAggregateInput
  }

  export type tbl_recuperacao_senhaScalarWhereWithAggregatesInput = {
    AND?: tbl_recuperacao_senhaScalarWhereWithAggregatesInput | tbl_recuperacao_senhaScalarWhereWithAggregatesInput[]
    OR?: tbl_recuperacao_senhaScalarWhereWithAggregatesInput[]
    NOT?: tbl_recuperacao_senhaScalarWhereWithAggregatesInput | tbl_recuperacao_senhaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tbl_recuperacao_senha"> | number
    id_user?: IntWithAggregatesFilter<"tbl_recuperacao_senha"> | number
    token?: IntWithAggregatesFilter<"tbl_recuperacao_senha"> | number
    data_criacao?: DateTimeWithAggregatesFilter<"tbl_recuperacao_senha"> | Date | string
  }

  export type tbl_comentarioWhereInput = {
    AND?: tbl_comentarioWhereInput | tbl_comentarioWhereInput[]
    OR?: tbl_comentarioWhereInput[]
    NOT?: tbl_comentarioWhereInput | tbl_comentarioWhereInput[]
    id?: IntFilter<"tbl_comentario"> | number
    conteudo?: StringFilter<"tbl_comentario"> | string
    data_comentario?: DateTimeFilter<"tbl_comentario"> | Date | string
    id_publicacao?: IntFilter<"tbl_comentario"> | number
    id_user?: IntFilter<"tbl_comentario"> | number
    curtidas_count?: IntNullableFilter<"tbl_comentario"> | number | null
    tbl_publicacao?: XOR<Tbl_publicacaoScalarRelationFilter, tbl_publicacaoWhereInput>
    tbl_user?: XOR<Tbl_userScalarRelationFilter, tbl_userWhereInput>
    tbl_curtida_comentario?: Tbl_curtida_comentarioListRelationFilter
    tbl_notificacao?: Tbl_notificacaoListRelationFilter
  }

  export type tbl_comentarioOrderByWithRelationInput = {
    id?: SortOrder
    conteudo?: SortOrder
    data_comentario?: SortOrder
    id_publicacao?: SortOrder
    id_user?: SortOrder
    curtidas_count?: SortOrderInput | SortOrder
    tbl_publicacao?: tbl_publicacaoOrderByWithRelationInput
    tbl_user?: tbl_userOrderByWithRelationInput
    tbl_curtida_comentario?: tbl_curtida_comentarioOrderByRelationAggregateInput
    tbl_notificacao?: tbl_notificacaoOrderByRelationAggregateInput
    _relevance?: tbl_comentarioOrderByRelevanceInput
  }

  export type tbl_comentarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tbl_comentarioWhereInput | tbl_comentarioWhereInput[]
    OR?: tbl_comentarioWhereInput[]
    NOT?: tbl_comentarioWhereInput | tbl_comentarioWhereInput[]
    conteudo?: StringFilter<"tbl_comentario"> | string
    data_comentario?: DateTimeFilter<"tbl_comentario"> | Date | string
    id_publicacao?: IntFilter<"tbl_comentario"> | number
    id_user?: IntFilter<"tbl_comentario"> | number
    curtidas_count?: IntNullableFilter<"tbl_comentario"> | number | null
    tbl_publicacao?: XOR<Tbl_publicacaoScalarRelationFilter, tbl_publicacaoWhereInput>
    tbl_user?: XOR<Tbl_userScalarRelationFilter, tbl_userWhereInput>
    tbl_curtida_comentario?: Tbl_curtida_comentarioListRelationFilter
    tbl_notificacao?: Tbl_notificacaoListRelationFilter
  }, "id">

  export type tbl_comentarioOrderByWithAggregationInput = {
    id?: SortOrder
    conteudo?: SortOrder
    data_comentario?: SortOrder
    id_publicacao?: SortOrder
    id_user?: SortOrder
    curtidas_count?: SortOrderInput | SortOrder
    _count?: tbl_comentarioCountOrderByAggregateInput
    _avg?: tbl_comentarioAvgOrderByAggregateInput
    _max?: tbl_comentarioMaxOrderByAggregateInput
    _min?: tbl_comentarioMinOrderByAggregateInput
    _sum?: tbl_comentarioSumOrderByAggregateInput
  }

  export type tbl_comentarioScalarWhereWithAggregatesInput = {
    AND?: tbl_comentarioScalarWhereWithAggregatesInput | tbl_comentarioScalarWhereWithAggregatesInput[]
    OR?: tbl_comentarioScalarWhereWithAggregatesInput[]
    NOT?: tbl_comentarioScalarWhereWithAggregatesInput | tbl_comentarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tbl_comentario"> | number
    conteudo?: StringWithAggregatesFilter<"tbl_comentario"> | string
    data_comentario?: DateTimeWithAggregatesFilter<"tbl_comentario"> | Date | string
    id_publicacao?: IntWithAggregatesFilter<"tbl_comentario"> | number
    id_user?: IntWithAggregatesFilter<"tbl_comentario"> | number
    curtidas_count?: IntNullableWithAggregatesFilter<"tbl_comentario"> | number | null
  }

  export type tbl_curtidaWhereInput = {
    AND?: tbl_curtidaWhereInput | tbl_curtidaWhereInput[]
    OR?: tbl_curtidaWhereInput[]
    NOT?: tbl_curtidaWhereInput | tbl_curtidaWhereInput[]
    id?: IntFilter<"tbl_curtida"> | number
    id_publicacao?: IntFilter<"tbl_curtida"> | number
    id_user?: IntFilter<"tbl_curtida"> | number
    tbl_publicacao?: XOR<Tbl_publicacaoScalarRelationFilter, tbl_publicacaoWhereInput>
    tbl_user?: XOR<Tbl_userScalarRelationFilter, tbl_userWhereInput>
    tbl_notificacao?: Tbl_notificacaoListRelationFilter
  }

  export type tbl_curtidaOrderByWithRelationInput = {
    id?: SortOrder
    id_publicacao?: SortOrder
    id_user?: SortOrder
    tbl_publicacao?: tbl_publicacaoOrderByWithRelationInput
    tbl_user?: tbl_userOrderByWithRelationInput
    tbl_notificacao?: tbl_notificacaoOrderByRelationAggregateInput
  }

  export type tbl_curtidaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    id_publicacao_id_user?: tbl_curtidaId_publicacaoId_userCompoundUniqueInput
    AND?: tbl_curtidaWhereInput | tbl_curtidaWhereInput[]
    OR?: tbl_curtidaWhereInput[]
    NOT?: tbl_curtidaWhereInput | tbl_curtidaWhereInput[]
    id_publicacao?: IntFilter<"tbl_curtida"> | number
    id_user?: IntFilter<"tbl_curtida"> | number
    tbl_publicacao?: XOR<Tbl_publicacaoScalarRelationFilter, tbl_publicacaoWhereInput>
    tbl_user?: XOR<Tbl_userScalarRelationFilter, tbl_userWhereInput>
    tbl_notificacao?: Tbl_notificacaoListRelationFilter
  }, "id" | "id_publicacao_id_user">

  export type tbl_curtidaOrderByWithAggregationInput = {
    id?: SortOrder
    id_publicacao?: SortOrder
    id_user?: SortOrder
    _count?: tbl_curtidaCountOrderByAggregateInput
    _avg?: tbl_curtidaAvgOrderByAggregateInput
    _max?: tbl_curtidaMaxOrderByAggregateInput
    _min?: tbl_curtidaMinOrderByAggregateInput
    _sum?: tbl_curtidaSumOrderByAggregateInput
  }

  export type tbl_curtidaScalarWhereWithAggregatesInput = {
    AND?: tbl_curtidaScalarWhereWithAggregatesInput | tbl_curtidaScalarWhereWithAggregatesInput[]
    OR?: tbl_curtidaScalarWhereWithAggregatesInput[]
    NOT?: tbl_curtidaScalarWhereWithAggregatesInput | tbl_curtidaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tbl_curtida"> | number
    id_publicacao?: IntWithAggregatesFilter<"tbl_curtida"> | number
    id_user?: IntWithAggregatesFilter<"tbl_curtida"> | number
  }

  export type tbl_curtida_comentarioWhereInput = {
    AND?: tbl_curtida_comentarioWhereInput | tbl_curtida_comentarioWhereInput[]
    OR?: tbl_curtida_comentarioWhereInput[]
    NOT?: tbl_curtida_comentarioWhereInput | tbl_curtida_comentarioWhereInput[]
    id?: IntFilter<"tbl_curtida_comentario"> | number
    id_comentario?: IntFilter<"tbl_curtida_comentario"> | number
    id_user?: IntFilter<"tbl_curtida_comentario"> | number
    tbl_comentario?: XOR<Tbl_comentarioScalarRelationFilter, tbl_comentarioWhereInput>
    tbl_user?: XOR<Tbl_userScalarRelationFilter, tbl_userWhereInput>
    tbl_notificacao?: Tbl_notificacaoListRelationFilter
  }

  export type tbl_curtida_comentarioOrderByWithRelationInput = {
    id?: SortOrder
    id_comentario?: SortOrder
    id_user?: SortOrder
    tbl_comentario?: tbl_comentarioOrderByWithRelationInput
    tbl_user?: tbl_userOrderByWithRelationInput
    tbl_notificacao?: tbl_notificacaoOrderByRelationAggregateInput
  }

  export type tbl_curtida_comentarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    id_comentario_id_user?: tbl_curtida_comentarioId_comentarioId_userCompoundUniqueInput
    AND?: tbl_curtida_comentarioWhereInput | tbl_curtida_comentarioWhereInput[]
    OR?: tbl_curtida_comentarioWhereInput[]
    NOT?: tbl_curtida_comentarioWhereInput | tbl_curtida_comentarioWhereInput[]
    id_comentario?: IntFilter<"tbl_curtida_comentario"> | number
    id_user?: IntFilter<"tbl_curtida_comentario"> | number
    tbl_comentario?: XOR<Tbl_comentarioScalarRelationFilter, tbl_comentarioWhereInput>
    tbl_user?: XOR<Tbl_userScalarRelationFilter, tbl_userWhereInput>
    tbl_notificacao?: Tbl_notificacaoListRelationFilter
  }, "id" | "id_comentario_id_user">

  export type tbl_curtida_comentarioOrderByWithAggregationInput = {
    id?: SortOrder
    id_comentario?: SortOrder
    id_user?: SortOrder
    _count?: tbl_curtida_comentarioCountOrderByAggregateInput
    _avg?: tbl_curtida_comentarioAvgOrderByAggregateInput
    _max?: tbl_curtida_comentarioMaxOrderByAggregateInput
    _min?: tbl_curtida_comentarioMinOrderByAggregateInput
    _sum?: tbl_curtida_comentarioSumOrderByAggregateInput
  }

  export type tbl_curtida_comentarioScalarWhereWithAggregatesInput = {
    AND?: tbl_curtida_comentarioScalarWhereWithAggregatesInput | tbl_curtida_comentarioScalarWhereWithAggregatesInput[]
    OR?: tbl_curtida_comentarioScalarWhereWithAggregatesInput[]
    NOT?: tbl_curtida_comentarioScalarWhereWithAggregatesInput | tbl_curtida_comentarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tbl_curtida_comentario"> | number
    id_comentario?: IntWithAggregatesFilter<"tbl_curtida_comentario"> | number
    id_user?: IntWithAggregatesFilter<"tbl_curtida_comentario"> | number
  }

  export type tbl_exercicioWhereInput = {
    AND?: tbl_exercicioWhereInput | tbl_exercicioWhereInput[]
    OR?: tbl_exercicioWhereInput[]
    NOT?: tbl_exercicioWhereInput | tbl_exercicioWhereInput[]
    id?: IntFilter<"tbl_exercicio"> | number
    nome?: StringFilter<"tbl_exercicio"> | string
    gif?: StringFilter<"tbl_exercicio"> | string
    descricao?: StringFilter<"tbl_exercicio"> | string
    grupo_muscular?: StringFilter<"tbl_exercicio"> | string
    tbl_exercicio_treino?: Tbl_exercicio_treinoListRelationFilter
    tbl_serie?: Tbl_serieListRelationFilter
  }

  export type tbl_exercicioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    gif?: SortOrder
    descricao?: SortOrder
    grupo_muscular?: SortOrder
    tbl_exercicio_treino?: tbl_exercicio_treinoOrderByRelationAggregateInput
    tbl_serie?: tbl_serieOrderByRelationAggregateInput
    _relevance?: tbl_exercicioOrderByRelevanceInput
  }

  export type tbl_exercicioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tbl_exercicioWhereInput | tbl_exercicioWhereInput[]
    OR?: tbl_exercicioWhereInput[]
    NOT?: tbl_exercicioWhereInput | tbl_exercicioWhereInput[]
    nome?: StringFilter<"tbl_exercicio"> | string
    gif?: StringFilter<"tbl_exercicio"> | string
    descricao?: StringFilter<"tbl_exercicio"> | string
    grupo_muscular?: StringFilter<"tbl_exercicio"> | string
    tbl_exercicio_treino?: Tbl_exercicio_treinoListRelationFilter
    tbl_serie?: Tbl_serieListRelationFilter
  }, "id">

  export type tbl_exercicioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    gif?: SortOrder
    descricao?: SortOrder
    grupo_muscular?: SortOrder
    _count?: tbl_exercicioCountOrderByAggregateInput
    _avg?: tbl_exercicioAvgOrderByAggregateInput
    _max?: tbl_exercicioMaxOrderByAggregateInput
    _min?: tbl_exercicioMinOrderByAggregateInput
    _sum?: tbl_exercicioSumOrderByAggregateInput
  }

  export type tbl_exercicioScalarWhereWithAggregatesInput = {
    AND?: tbl_exercicioScalarWhereWithAggregatesInput | tbl_exercicioScalarWhereWithAggregatesInput[]
    OR?: tbl_exercicioScalarWhereWithAggregatesInput[]
    NOT?: tbl_exercicioScalarWhereWithAggregatesInput | tbl_exercicioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tbl_exercicio"> | number
    nome?: StringWithAggregatesFilter<"tbl_exercicio"> | string
    gif?: StringWithAggregatesFilter<"tbl_exercicio"> | string
    descricao?: StringWithAggregatesFilter<"tbl_exercicio"> | string
    grupo_muscular?: StringWithAggregatesFilter<"tbl_exercicio"> | string
  }

  export type tbl_exercicio_treinoWhereInput = {
    AND?: tbl_exercicio_treinoWhereInput | tbl_exercicio_treinoWhereInput[]
    OR?: tbl_exercicio_treinoWhereInput[]
    NOT?: tbl_exercicio_treinoWhereInput | tbl_exercicio_treinoWhereInput[]
    id?: IntFilter<"tbl_exercicio_treino"> | number
    id_treino?: IntFilter<"tbl_exercicio_treino"> | number
    id_exercicio?: IntFilter<"tbl_exercicio_treino"> | number
    id_serie?: IntFilter<"tbl_exercicio_treino"> | number
    tbl_treino?: XOR<Tbl_treinoScalarRelationFilter, tbl_treinoWhereInput>
    tbl_exercicio?: XOR<Tbl_exercicioScalarRelationFilter, tbl_exercicioWhereInput>
    tbl_serie?: XOR<Tbl_serieScalarRelationFilter, tbl_serieWhereInput>
  }

  export type tbl_exercicio_treinoOrderByWithRelationInput = {
    id?: SortOrder
    id_treino?: SortOrder
    id_exercicio?: SortOrder
    id_serie?: SortOrder
    tbl_treino?: tbl_treinoOrderByWithRelationInput
    tbl_exercicio?: tbl_exercicioOrderByWithRelationInput
    tbl_serie?: tbl_serieOrderByWithRelationInput
  }

  export type tbl_exercicio_treinoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    id_treino_id_exercicio_id_serie?: tbl_exercicio_treinoId_treinoId_exercicioId_serieCompoundUniqueInput
    AND?: tbl_exercicio_treinoWhereInput | tbl_exercicio_treinoWhereInput[]
    OR?: tbl_exercicio_treinoWhereInput[]
    NOT?: tbl_exercicio_treinoWhereInput | tbl_exercicio_treinoWhereInput[]
    id_treino?: IntFilter<"tbl_exercicio_treino"> | number
    id_exercicio?: IntFilter<"tbl_exercicio_treino"> | number
    id_serie?: IntFilter<"tbl_exercicio_treino"> | number
    tbl_treino?: XOR<Tbl_treinoScalarRelationFilter, tbl_treinoWhereInput>
    tbl_exercicio?: XOR<Tbl_exercicioScalarRelationFilter, tbl_exercicioWhereInput>
    tbl_serie?: XOR<Tbl_serieScalarRelationFilter, tbl_serieWhereInput>
  }, "id" | "id_treino_id_exercicio_id_serie">

  export type tbl_exercicio_treinoOrderByWithAggregationInput = {
    id?: SortOrder
    id_treino?: SortOrder
    id_exercicio?: SortOrder
    id_serie?: SortOrder
    _count?: tbl_exercicio_treinoCountOrderByAggregateInput
    _avg?: tbl_exercicio_treinoAvgOrderByAggregateInput
    _max?: tbl_exercicio_treinoMaxOrderByAggregateInput
    _min?: tbl_exercicio_treinoMinOrderByAggregateInput
    _sum?: tbl_exercicio_treinoSumOrderByAggregateInput
  }

  export type tbl_exercicio_treinoScalarWhereWithAggregatesInput = {
    AND?: tbl_exercicio_treinoScalarWhereWithAggregatesInput | tbl_exercicio_treinoScalarWhereWithAggregatesInput[]
    OR?: tbl_exercicio_treinoScalarWhereWithAggregatesInput[]
    NOT?: tbl_exercicio_treinoScalarWhereWithAggregatesInput | tbl_exercicio_treinoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tbl_exercicio_treino"> | number
    id_treino?: IntWithAggregatesFilter<"tbl_exercicio_treino"> | number
    id_exercicio?: IntWithAggregatesFilter<"tbl_exercicio_treino"> | number
    id_serie?: IntWithAggregatesFilter<"tbl_exercicio_treino"> | number
  }

  export type tbl_notificacaoWhereInput = {
    AND?: tbl_notificacaoWhereInput | tbl_notificacaoWhereInput[]
    OR?: tbl_notificacaoWhereInput[]
    NOT?: tbl_notificacaoWhereInput | tbl_notificacaoWhereInput[]
    id?: IntFilter<"tbl_notificacao"> | number
    id_usuario_destino?: IntFilter<"tbl_notificacao"> | number
    id_usuario_origem?: IntFilter<"tbl_notificacao"> | number
    id_publicacao?: IntNullableFilter<"tbl_notificacao"> | number | null
    id_comentario?: IntNullableFilter<"tbl_notificacao"> | number | null
    id_curtida?: IntNullableFilter<"tbl_notificacao"> | number | null
    id_curtida_comentario?: IntNullableFilter<"tbl_notificacao"> | number | null
    tipo_notificacao?: StringFilter<"tbl_notificacao"> | string
    data_criacao?: DateTimeFilter<"tbl_notificacao"> | Date | string
    is_lida?: BoolNullableFilter<"tbl_notificacao"> | boolean | null
    tbl_user_tbl_notificacao_id_usuario_destinoTotbl_user?: XOR<Tbl_userScalarRelationFilter, tbl_userWhereInput>
    tbl_user_tbl_notificacao_id_usuario_origemTotbl_user?: XOR<Tbl_userScalarRelationFilter, tbl_userWhereInput>
    tbl_publicacao?: XOR<Tbl_publicacaoNullableScalarRelationFilter, tbl_publicacaoWhereInput> | null
    tbl_comentario?: XOR<Tbl_comentarioNullableScalarRelationFilter, tbl_comentarioWhereInput> | null
    tbl_curtida?: XOR<Tbl_curtidaNullableScalarRelationFilter, tbl_curtidaWhereInput> | null
    tbl_curtida_comentario?: XOR<Tbl_curtida_comentarioNullableScalarRelationFilter, tbl_curtida_comentarioWhereInput> | null
  }

  export type tbl_notificacaoOrderByWithRelationInput = {
    id?: SortOrder
    id_usuario_destino?: SortOrder
    id_usuario_origem?: SortOrder
    id_publicacao?: SortOrderInput | SortOrder
    id_comentario?: SortOrderInput | SortOrder
    id_curtida?: SortOrderInput | SortOrder
    id_curtida_comentario?: SortOrderInput | SortOrder
    tipo_notificacao?: SortOrder
    data_criacao?: SortOrder
    is_lida?: SortOrderInput | SortOrder
    tbl_user_tbl_notificacao_id_usuario_destinoTotbl_user?: tbl_userOrderByWithRelationInput
    tbl_user_tbl_notificacao_id_usuario_origemTotbl_user?: tbl_userOrderByWithRelationInput
    tbl_publicacao?: tbl_publicacaoOrderByWithRelationInput
    tbl_comentario?: tbl_comentarioOrderByWithRelationInput
    tbl_curtida?: tbl_curtidaOrderByWithRelationInput
    tbl_curtida_comentario?: tbl_curtida_comentarioOrderByWithRelationInput
    _relevance?: tbl_notificacaoOrderByRelevanceInput
  }

  export type tbl_notificacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tbl_notificacaoWhereInput | tbl_notificacaoWhereInput[]
    OR?: tbl_notificacaoWhereInput[]
    NOT?: tbl_notificacaoWhereInput | tbl_notificacaoWhereInput[]
    id_usuario_destino?: IntFilter<"tbl_notificacao"> | number
    id_usuario_origem?: IntFilter<"tbl_notificacao"> | number
    id_publicacao?: IntNullableFilter<"tbl_notificacao"> | number | null
    id_comentario?: IntNullableFilter<"tbl_notificacao"> | number | null
    id_curtida?: IntNullableFilter<"tbl_notificacao"> | number | null
    id_curtida_comentario?: IntNullableFilter<"tbl_notificacao"> | number | null
    tipo_notificacao?: StringFilter<"tbl_notificacao"> | string
    data_criacao?: DateTimeFilter<"tbl_notificacao"> | Date | string
    is_lida?: BoolNullableFilter<"tbl_notificacao"> | boolean | null
    tbl_user_tbl_notificacao_id_usuario_destinoTotbl_user?: XOR<Tbl_userScalarRelationFilter, tbl_userWhereInput>
    tbl_user_tbl_notificacao_id_usuario_origemTotbl_user?: XOR<Tbl_userScalarRelationFilter, tbl_userWhereInput>
    tbl_publicacao?: XOR<Tbl_publicacaoNullableScalarRelationFilter, tbl_publicacaoWhereInput> | null
    tbl_comentario?: XOR<Tbl_comentarioNullableScalarRelationFilter, tbl_comentarioWhereInput> | null
    tbl_curtida?: XOR<Tbl_curtidaNullableScalarRelationFilter, tbl_curtidaWhereInput> | null
    tbl_curtida_comentario?: XOR<Tbl_curtida_comentarioNullableScalarRelationFilter, tbl_curtida_comentarioWhereInput> | null
  }, "id">

  export type tbl_notificacaoOrderByWithAggregationInput = {
    id?: SortOrder
    id_usuario_destino?: SortOrder
    id_usuario_origem?: SortOrder
    id_publicacao?: SortOrderInput | SortOrder
    id_comentario?: SortOrderInput | SortOrder
    id_curtida?: SortOrderInput | SortOrder
    id_curtida_comentario?: SortOrderInput | SortOrder
    tipo_notificacao?: SortOrder
    data_criacao?: SortOrder
    is_lida?: SortOrderInput | SortOrder
    _count?: tbl_notificacaoCountOrderByAggregateInput
    _avg?: tbl_notificacaoAvgOrderByAggregateInput
    _max?: tbl_notificacaoMaxOrderByAggregateInput
    _min?: tbl_notificacaoMinOrderByAggregateInput
    _sum?: tbl_notificacaoSumOrderByAggregateInput
  }

  export type tbl_notificacaoScalarWhereWithAggregatesInput = {
    AND?: tbl_notificacaoScalarWhereWithAggregatesInput | tbl_notificacaoScalarWhereWithAggregatesInput[]
    OR?: tbl_notificacaoScalarWhereWithAggregatesInput[]
    NOT?: tbl_notificacaoScalarWhereWithAggregatesInput | tbl_notificacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tbl_notificacao"> | number
    id_usuario_destino?: IntWithAggregatesFilter<"tbl_notificacao"> | number
    id_usuario_origem?: IntWithAggregatesFilter<"tbl_notificacao"> | number
    id_publicacao?: IntNullableWithAggregatesFilter<"tbl_notificacao"> | number | null
    id_comentario?: IntNullableWithAggregatesFilter<"tbl_notificacao"> | number | null
    id_curtida?: IntNullableWithAggregatesFilter<"tbl_notificacao"> | number | null
    id_curtida_comentario?: IntNullableWithAggregatesFilter<"tbl_notificacao"> | number | null
    tipo_notificacao?: StringWithAggregatesFilter<"tbl_notificacao"> | string
    data_criacao?: DateTimeWithAggregatesFilter<"tbl_notificacao"> | Date | string
    is_lida?: BoolNullableWithAggregatesFilter<"tbl_notificacao"> | boolean | null
  }

  export type tbl_publicacaoWhereInput = {
    AND?: tbl_publicacaoWhereInput | tbl_publicacaoWhereInput[]
    OR?: tbl_publicacaoWhereInput[]
    NOT?: tbl_publicacaoWhereInput | tbl_publicacaoWhereInput[]
    id?: IntFilter<"tbl_publicacao"> | number
    imagem?: StringFilter<"tbl_publicacao"> | string
    descricao?: StringNullableFilter<"tbl_publicacao"> | string | null
    data_publicacao?: DateTimeNullableFilter<"tbl_publicacao"> | Date | string | null
    localizacao?: StringNullableFilter<"tbl_publicacao"> | string | null
    curtidas_count?: IntNullableFilter<"tbl_publicacao"> | number | null
    comentarios_count?: IntNullableFilter<"tbl_publicacao"> | number | null
    id_user?: IntFilter<"tbl_publicacao"> | number
    tbl_comentario?: Tbl_comentarioListRelationFilter
    tbl_curtida?: Tbl_curtidaListRelationFilter
    tbl_notificacao?: Tbl_notificacaoListRelationFilter
    tbl_user?: XOR<Tbl_userScalarRelationFilter, tbl_userWhereInput>
  }

  export type tbl_publicacaoOrderByWithRelationInput = {
    id?: SortOrder
    imagem?: SortOrder
    descricao?: SortOrderInput | SortOrder
    data_publicacao?: SortOrderInput | SortOrder
    localizacao?: SortOrderInput | SortOrder
    curtidas_count?: SortOrderInput | SortOrder
    comentarios_count?: SortOrderInput | SortOrder
    id_user?: SortOrder
    tbl_comentario?: tbl_comentarioOrderByRelationAggregateInput
    tbl_curtida?: tbl_curtidaOrderByRelationAggregateInput
    tbl_notificacao?: tbl_notificacaoOrderByRelationAggregateInput
    tbl_user?: tbl_userOrderByWithRelationInput
    _relevance?: tbl_publicacaoOrderByRelevanceInput
  }

  export type tbl_publicacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tbl_publicacaoWhereInput | tbl_publicacaoWhereInput[]
    OR?: tbl_publicacaoWhereInput[]
    NOT?: tbl_publicacaoWhereInput | tbl_publicacaoWhereInput[]
    imagem?: StringFilter<"tbl_publicacao"> | string
    descricao?: StringNullableFilter<"tbl_publicacao"> | string | null
    data_publicacao?: DateTimeNullableFilter<"tbl_publicacao"> | Date | string | null
    localizacao?: StringNullableFilter<"tbl_publicacao"> | string | null
    curtidas_count?: IntNullableFilter<"tbl_publicacao"> | number | null
    comentarios_count?: IntNullableFilter<"tbl_publicacao"> | number | null
    id_user?: IntFilter<"tbl_publicacao"> | number
    tbl_comentario?: Tbl_comentarioListRelationFilter
    tbl_curtida?: Tbl_curtidaListRelationFilter
    tbl_notificacao?: Tbl_notificacaoListRelationFilter
    tbl_user?: XOR<Tbl_userScalarRelationFilter, tbl_userWhereInput>
  }, "id">

  export type tbl_publicacaoOrderByWithAggregationInput = {
    id?: SortOrder
    imagem?: SortOrder
    descricao?: SortOrderInput | SortOrder
    data_publicacao?: SortOrderInput | SortOrder
    localizacao?: SortOrderInput | SortOrder
    curtidas_count?: SortOrderInput | SortOrder
    comentarios_count?: SortOrderInput | SortOrder
    id_user?: SortOrder
    _count?: tbl_publicacaoCountOrderByAggregateInput
    _avg?: tbl_publicacaoAvgOrderByAggregateInput
    _max?: tbl_publicacaoMaxOrderByAggregateInput
    _min?: tbl_publicacaoMinOrderByAggregateInput
    _sum?: tbl_publicacaoSumOrderByAggregateInput
  }

  export type tbl_publicacaoScalarWhereWithAggregatesInput = {
    AND?: tbl_publicacaoScalarWhereWithAggregatesInput | tbl_publicacaoScalarWhereWithAggregatesInput[]
    OR?: tbl_publicacaoScalarWhereWithAggregatesInput[]
    NOT?: tbl_publicacaoScalarWhereWithAggregatesInput | tbl_publicacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tbl_publicacao"> | number
    imagem?: StringWithAggregatesFilter<"tbl_publicacao"> | string
    descricao?: StringNullableWithAggregatesFilter<"tbl_publicacao"> | string | null
    data_publicacao?: DateTimeNullableWithAggregatesFilter<"tbl_publicacao"> | Date | string | null
    localizacao?: StringNullableWithAggregatesFilter<"tbl_publicacao"> | string | null
    curtidas_count?: IntNullableWithAggregatesFilter<"tbl_publicacao"> | number | null
    comentarios_count?: IntNullableWithAggregatesFilter<"tbl_publicacao"> | number | null
    id_user?: IntWithAggregatesFilter<"tbl_publicacao"> | number
  }

  export type tbl_serieWhereInput = {
    AND?: tbl_serieWhereInput | tbl_serieWhereInput[]
    OR?: tbl_serieWhereInput[]
    NOT?: tbl_serieWhereInput | tbl_serieWhereInput[]
    id?: IntFilter<"tbl_serie"> | number
    id_exercicio?: IntFilter<"tbl_serie"> | number
    nome?: StringNullableFilter<"tbl_serie"> | string | null
    peso?: DecimalFilter<"tbl_serie"> | Decimal | DecimalJsLike | number | string
    repeticoes?: IntFilter<"tbl_serie"> | number
    tbl_exercicio_treino?: Tbl_exercicio_treinoListRelationFilter
    tbl_exercicio?: XOR<Tbl_exercicioScalarRelationFilter, tbl_exercicioWhereInput>
  }

  export type tbl_serieOrderByWithRelationInput = {
    id?: SortOrder
    id_exercicio?: SortOrder
    nome?: SortOrderInput | SortOrder
    peso?: SortOrder
    repeticoes?: SortOrder
    tbl_exercicio_treino?: tbl_exercicio_treinoOrderByRelationAggregateInput
    tbl_exercicio?: tbl_exercicioOrderByWithRelationInput
    _relevance?: tbl_serieOrderByRelevanceInput
  }

  export type tbl_serieWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tbl_serieWhereInput | tbl_serieWhereInput[]
    OR?: tbl_serieWhereInput[]
    NOT?: tbl_serieWhereInput | tbl_serieWhereInput[]
    id_exercicio?: IntFilter<"tbl_serie"> | number
    nome?: StringNullableFilter<"tbl_serie"> | string | null
    peso?: DecimalFilter<"tbl_serie"> | Decimal | DecimalJsLike | number | string
    repeticoes?: IntFilter<"tbl_serie"> | number
    tbl_exercicio_treino?: Tbl_exercicio_treinoListRelationFilter
    tbl_exercicio?: XOR<Tbl_exercicioScalarRelationFilter, tbl_exercicioWhereInput>
  }, "id">

  export type tbl_serieOrderByWithAggregationInput = {
    id?: SortOrder
    id_exercicio?: SortOrder
    nome?: SortOrderInput | SortOrder
    peso?: SortOrder
    repeticoes?: SortOrder
    _count?: tbl_serieCountOrderByAggregateInput
    _avg?: tbl_serieAvgOrderByAggregateInput
    _max?: tbl_serieMaxOrderByAggregateInput
    _min?: tbl_serieMinOrderByAggregateInput
    _sum?: tbl_serieSumOrderByAggregateInput
  }

  export type tbl_serieScalarWhereWithAggregatesInput = {
    AND?: tbl_serieScalarWhereWithAggregatesInput | tbl_serieScalarWhereWithAggregatesInput[]
    OR?: tbl_serieScalarWhereWithAggregatesInput[]
    NOT?: tbl_serieScalarWhereWithAggregatesInput | tbl_serieScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tbl_serie"> | number
    id_exercicio?: IntWithAggregatesFilter<"tbl_serie"> | number
    nome?: StringNullableWithAggregatesFilter<"tbl_serie"> | string | null
    peso?: DecimalWithAggregatesFilter<"tbl_serie"> | Decimal | DecimalJsLike | number | string
    repeticoes?: IntWithAggregatesFilter<"tbl_serie"> | number
  }

  export type tbl_treinoWhereInput = {
    AND?: tbl_treinoWhereInput | tbl_treinoWhereInput[]
    OR?: tbl_treinoWhereInput[]
    NOT?: tbl_treinoWhereInput | tbl_treinoWhereInput[]
    id?: IntFilter<"tbl_treino"> | number
    nome?: StringFilter<"tbl_treino"> | string
    id_user?: IntFilter<"tbl_treino"> | number
    tbl_exercicio_treino?: Tbl_exercicio_treinoListRelationFilter
    tbl_user?: XOR<Tbl_userScalarRelationFilter, tbl_userWhereInput>
  }

  export type tbl_treinoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    id_user?: SortOrder
    tbl_exercicio_treino?: tbl_exercicio_treinoOrderByRelationAggregateInput
    tbl_user?: tbl_userOrderByWithRelationInput
    _relevance?: tbl_treinoOrderByRelevanceInput
  }

  export type tbl_treinoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tbl_treinoWhereInput | tbl_treinoWhereInput[]
    OR?: tbl_treinoWhereInput[]
    NOT?: tbl_treinoWhereInput | tbl_treinoWhereInput[]
    nome?: StringFilter<"tbl_treino"> | string
    id_user?: IntFilter<"tbl_treino"> | number
    tbl_exercicio_treino?: Tbl_exercicio_treinoListRelationFilter
    tbl_user?: XOR<Tbl_userScalarRelationFilter, tbl_userWhereInput>
  }, "id">

  export type tbl_treinoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    id_user?: SortOrder
    _count?: tbl_treinoCountOrderByAggregateInput
    _avg?: tbl_treinoAvgOrderByAggregateInput
    _max?: tbl_treinoMaxOrderByAggregateInput
    _min?: tbl_treinoMinOrderByAggregateInput
    _sum?: tbl_treinoSumOrderByAggregateInput
  }

  export type tbl_treinoScalarWhereWithAggregatesInput = {
    AND?: tbl_treinoScalarWhereWithAggregatesInput | tbl_treinoScalarWhereWithAggregatesInput[]
    OR?: tbl_treinoScalarWhereWithAggregatesInput[]
    NOT?: tbl_treinoScalarWhereWithAggregatesInput | tbl_treinoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tbl_treino"> | number
    nome?: StringWithAggregatesFilter<"tbl_treino"> | string
    id_user?: IntWithAggregatesFilter<"tbl_treino"> | number
  }

  export type tbl_userCreateInput = {
    nome: string
    email: string
    senha: string
    peso?: Decimal | DecimalJsLike | number | string | null
    altura?: Decimal | DecimalJsLike | number | string | null
    imc?: Decimal | DecimalJsLike | number | string | null
    nickname: string
    data_nascimento?: Date | string | null
    foto?: string | null
    descricao?: string | null
    localizacao?: string | null
    is_bloqueado?: boolean | null
    tbl_comentario?: tbl_comentarioCreateNestedManyWithoutTbl_userInput
    tbl_curtida?: tbl_curtidaCreateNestedManyWithoutTbl_userInput
    tbl_curtida_comentario?: tbl_curtida_comentarioCreateNestedManyWithoutTbl_userInput
    tbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_user?: tbl_notificacaoCreateNestedManyWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput
    tbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_user?: tbl_notificacaoCreateNestedManyWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput
    tbl_publicacao?: tbl_publicacaoCreateNestedManyWithoutTbl_userInput
    recuperacaoSenha?: tbl_recuperacao_senhaCreateNestedManyWithoutUsuarioInput
    tbl_treino?: tbl_treinoCreateNestedManyWithoutTbl_userInput
  }

  export type tbl_userUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    senha: string
    peso?: Decimal | DecimalJsLike | number | string | null
    altura?: Decimal | DecimalJsLike | number | string | null
    imc?: Decimal | DecimalJsLike | number | string | null
    nickname: string
    data_nascimento?: Date | string | null
    foto?: string | null
    descricao?: string | null
    localizacao?: string | null
    is_bloqueado?: boolean | null
    tbl_comentario?: tbl_comentarioUncheckedCreateNestedManyWithoutTbl_userInput
    tbl_curtida?: tbl_curtidaUncheckedCreateNestedManyWithoutTbl_userInput
    tbl_curtida_comentario?: tbl_curtida_comentarioUncheckedCreateNestedManyWithoutTbl_userInput
    tbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_user?: tbl_notificacaoUncheckedCreateNestedManyWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput
    tbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_user?: tbl_notificacaoUncheckedCreateNestedManyWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput
    tbl_publicacao?: tbl_publicacaoUncheckedCreateNestedManyWithoutTbl_userInput
    recuperacaoSenha?: tbl_recuperacao_senhaUncheckedCreateNestedManyWithoutUsuarioInput
    tbl_treino?: tbl_treinoUncheckedCreateNestedManyWithoutTbl_userInput
  }

  export type tbl_userUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    peso?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    imc?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    is_bloqueado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tbl_comentario?: tbl_comentarioUpdateManyWithoutTbl_userNestedInput
    tbl_curtida?: tbl_curtidaUpdateManyWithoutTbl_userNestedInput
    tbl_curtida_comentario?: tbl_curtida_comentarioUpdateManyWithoutTbl_userNestedInput
    tbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_user?: tbl_notificacaoUpdateManyWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userNestedInput
    tbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_user?: tbl_notificacaoUpdateManyWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userNestedInput
    tbl_publicacao?: tbl_publicacaoUpdateManyWithoutTbl_userNestedInput
    recuperacaoSenha?: tbl_recuperacao_senhaUpdateManyWithoutUsuarioNestedInput
    tbl_treino?: tbl_treinoUpdateManyWithoutTbl_userNestedInput
  }

  export type tbl_userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    peso?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    imc?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    is_bloqueado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tbl_comentario?: tbl_comentarioUncheckedUpdateManyWithoutTbl_userNestedInput
    tbl_curtida?: tbl_curtidaUncheckedUpdateManyWithoutTbl_userNestedInput
    tbl_curtida_comentario?: tbl_curtida_comentarioUncheckedUpdateManyWithoutTbl_userNestedInput
    tbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_user?: tbl_notificacaoUncheckedUpdateManyWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userNestedInput
    tbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_user?: tbl_notificacaoUncheckedUpdateManyWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userNestedInput
    tbl_publicacao?: tbl_publicacaoUncheckedUpdateManyWithoutTbl_userNestedInput
    recuperacaoSenha?: tbl_recuperacao_senhaUncheckedUpdateManyWithoutUsuarioNestedInput
    tbl_treino?: tbl_treinoUncheckedUpdateManyWithoutTbl_userNestedInput
  }

  export type tbl_userCreateManyInput = {
    id?: number
    nome: string
    email: string
    senha: string
    peso?: Decimal | DecimalJsLike | number | string | null
    altura?: Decimal | DecimalJsLike | number | string | null
    imc?: Decimal | DecimalJsLike | number | string | null
    nickname: string
    data_nascimento?: Date | string | null
    foto?: string | null
    descricao?: string | null
    localizacao?: string | null
    is_bloqueado?: boolean | null
  }

  export type tbl_userUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    peso?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    imc?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    is_bloqueado?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type tbl_userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    peso?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    imc?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    is_bloqueado?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type tbl_recuperacao_senhaCreateInput = {
    token: number
    data_criacao: Date | string
    usuario: tbl_userCreateNestedOneWithoutRecuperacaoSenhaInput
  }

  export type tbl_recuperacao_senhaUncheckedCreateInput = {
    id?: number
    id_user: number
    token: number
    data_criacao: Date | string
  }

  export type tbl_recuperacao_senhaUpdateInput = {
    token?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: tbl_userUpdateOneRequiredWithoutRecuperacaoSenhaNestedInput
  }

  export type tbl_recuperacao_senhaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    token?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_recuperacao_senhaCreateManyInput = {
    id?: number
    id_user: number
    token: number
    data_criacao: Date | string
  }

  export type tbl_recuperacao_senhaUpdateManyMutationInput = {
    token?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_recuperacao_senhaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    token?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_comentarioCreateInput = {
    conteudo: string
    data_comentario: Date | string
    curtidas_count?: number | null
    tbl_publicacao: tbl_publicacaoCreateNestedOneWithoutTbl_comentarioInput
    tbl_user: tbl_userCreateNestedOneWithoutTbl_comentarioInput
    tbl_curtida_comentario?: tbl_curtida_comentarioCreateNestedManyWithoutTbl_comentarioInput
    tbl_notificacao?: tbl_notificacaoCreateNestedManyWithoutTbl_comentarioInput
  }

  export type tbl_comentarioUncheckedCreateInput = {
    id?: number
    conteudo: string
    data_comentario: Date | string
    id_publicacao: number
    id_user: number
    curtidas_count?: number | null
    tbl_curtida_comentario?: tbl_curtida_comentarioUncheckedCreateNestedManyWithoutTbl_comentarioInput
    tbl_notificacao?: tbl_notificacaoUncheckedCreateNestedManyWithoutTbl_comentarioInput
  }

  export type tbl_comentarioUpdateInput = {
    conteudo?: StringFieldUpdateOperationsInput | string
    data_comentario?: DateTimeFieldUpdateOperationsInput | Date | string
    curtidas_count?: NullableIntFieldUpdateOperationsInput | number | null
    tbl_publicacao?: tbl_publicacaoUpdateOneRequiredWithoutTbl_comentarioNestedInput
    tbl_user?: tbl_userUpdateOneRequiredWithoutTbl_comentarioNestedInput
    tbl_curtida_comentario?: tbl_curtida_comentarioUpdateManyWithoutTbl_comentarioNestedInput
    tbl_notificacao?: tbl_notificacaoUpdateManyWithoutTbl_comentarioNestedInput
  }

  export type tbl_comentarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
    data_comentario?: DateTimeFieldUpdateOperationsInput | Date | string
    id_publicacao?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    curtidas_count?: NullableIntFieldUpdateOperationsInput | number | null
    tbl_curtida_comentario?: tbl_curtida_comentarioUncheckedUpdateManyWithoutTbl_comentarioNestedInput
    tbl_notificacao?: tbl_notificacaoUncheckedUpdateManyWithoutTbl_comentarioNestedInput
  }

  export type tbl_comentarioCreateManyInput = {
    id?: number
    conteudo: string
    data_comentario: Date | string
    id_publicacao: number
    id_user: number
    curtidas_count?: number | null
  }

  export type tbl_comentarioUpdateManyMutationInput = {
    conteudo?: StringFieldUpdateOperationsInput | string
    data_comentario?: DateTimeFieldUpdateOperationsInput | Date | string
    curtidas_count?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type tbl_comentarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
    data_comentario?: DateTimeFieldUpdateOperationsInput | Date | string
    id_publicacao?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    curtidas_count?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type tbl_curtidaCreateInput = {
    tbl_publicacao: tbl_publicacaoCreateNestedOneWithoutTbl_curtidaInput
    tbl_user: tbl_userCreateNestedOneWithoutTbl_curtidaInput
    tbl_notificacao?: tbl_notificacaoCreateNestedManyWithoutTbl_curtidaInput
  }

  export type tbl_curtidaUncheckedCreateInput = {
    id?: number
    id_publicacao: number
    id_user: number
    tbl_notificacao?: tbl_notificacaoUncheckedCreateNestedManyWithoutTbl_curtidaInput
  }

  export type tbl_curtidaUpdateInput = {
    tbl_publicacao?: tbl_publicacaoUpdateOneRequiredWithoutTbl_curtidaNestedInput
    tbl_user?: tbl_userUpdateOneRequiredWithoutTbl_curtidaNestedInput
    tbl_notificacao?: tbl_notificacaoUpdateManyWithoutTbl_curtidaNestedInput
  }

  export type tbl_curtidaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_publicacao?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    tbl_notificacao?: tbl_notificacaoUncheckedUpdateManyWithoutTbl_curtidaNestedInput
  }

  export type tbl_curtidaCreateManyInput = {
    id?: number
    id_publicacao: number
    id_user: number
  }

  export type tbl_curtidaUpdateManyMutationInput = {

  }

  export type tbl_curtidaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_publicacao?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_curtida_comentarioCreateInput = {
    tbl_comentario: tbl_comentarioCreateNestedOneWithoutTbl_curtida_comentarioInput
    tbl_user: tbl_userCreateNestedOneWithoutTbl_curtida_comentarioInput
    tbl_notificacao?: tbl_notificacaoCreateNestedManyWithoutTbl_curtida_comentarioInput
  }

  export type tbl_curtida_comentarioUncheckedCreateInput = {
    id?: number
    id_comentario: number
    id_user: number
    tbl_notificacao?: tbl_notificacaoUncheckedCreateNestedManyWithoutTbl_curtida_comentarioInput
  }

  export type tbl_curtida_comentarioUpdateInput = {
    tbl_comentario?: tbl_comentarioUpdateOneRequiredWithoutTbl_curtida_comentarioNestedInput
    tbl_user?: tbl_userUpdateOneRequiredWithoutTbl_curtida_comentarioNestedInput
    tbl_notificacao?: tbl_notificacaoUpdateManyWithoutTbl_curtida_comentarioNestedInput
  }

  export type tbl_curtida_comentarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_comentario?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    tbl_notificacao?: tbl_notificacaoUncheckedUpdateManyWithoutTbl_curtida_comentarioNestedInput
  }

  export type tbl_curtida_comentarioCreateManyInput = {
    id?: number
    id_comentario: number
    id_user: number
  }

  export type tbl_curtida_comentarioUpdateManyMutationInput = {

  }

  export type tbl_curtida_comentarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_comentario?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_exercicioCreateInput = {
    nome: string
    gif: string
    descricao: string
    grupo_muscular: string
    tbl_exercicio_treino?: tbl_exercicio_treinoCreateNestedManyWithoutTbl_exercicioInput
    tbl_serie?: tbl_serieCreateNestedManyWithoutTbl_exercicioInput
  }

  export type tbl_exercicioUncheckedCreateInput = {
    id?: number
    nome: string
    gif: string
    descricao: string
    grupo_muscular: string
    tbl_exercicio_treino?: tbl_exercicio_treinoUncheckedCreateNestedManyWithoutTbl_exercicioInput
    tbl_serie?: tbl_serieUncheckedCreateNestedManyWithoutTbl_exercicioInput
  }

  export type tbl_exercicioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    gif?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    grupo_muscular?: StringFieldUpdateOperationsInput | string
    tbl_exercicio_treino?: tbl_exercicio_treinoUpdateManyWithoutTbl_exercicioNestedInput
    tbl_serie?: tbl_serieUpdateManyWithoutTbl_exercicioNestedInput
  }

  export type tbl_exercicioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    gif?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    grupo_muscular?: StringFieldUpdateOperationsInput | string
    tbl_exercicio_treino?: tbl_exercicio_treinoUncheckedUpdateManyWithoutTbl_exercicioNestedInput
    tbl_serie?: tbl_serieUncheckedUpdateManyWithoutTbl_exercicioNestedInput
  }

  export type tbl_exercicioCreateManyInput = {
    id?: number
    nome: string
    gif: string
    descricao: string
    grupo_muscular: string
  }

  export type tbl_exercicioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    gif?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    grupo_muscular?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_exercicioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    gif?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    grupo_muscular?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_exercicio_treinoCreateInput = {
    tbl_treino: tbl_treinoCreateNestedOneWithoutTbl_exercicio_treinoInput
    tbl_exercicio: tbl_exercicioCreateNestedOneWithoutTbl_exercicio_treinoInput
    tbl_serie: tbl_serieCreateNestedOneWithoutTbl_exercicio_treinoInput
  }

  export type tbl_exercicio_treinoUncheckedCreateInput = {
    id?: number
    id_treino: number
    id_exercicio: number
    id_serie: number
  }

  export type tbl_exercicio_treinoUpdateInput = {
    tbl_treino?: tbl_treinoUpdateOneRequiredWithoutTbl_exercicio_treinoNestedInput
    tbl_exercicio?: tbl_exercicioUpdateOneRequiredWithoutTbl_exercicio_treinoNestedInput
    tbl_serie?: tbl_serieUpdateOneRequiredWithoutTbl_exercicio_treinoNestedInput
  }

  export type tbl_exercicio_treinoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_treino?: IntFieldUpdateOperationsInput | number
    id_exercicio?: IntFieldUpdateOperationsInput | number
    id_serie?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_exercicio_treinoCreateManyInput = {
    id?: number
    id_treino: number
    id_exercicio: number
    id_serie: number
  }

  export type tbl_exercicio_treinoUpdateManyMutationInput = {

  }

  export type tbl_exercicio_treinoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_treino?: IntFieldUpdateOperationsInput | number
    id_exercicio?: IntFieldUpdateOperationsInput | number
    id_serie?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_notificacaoCreateInput = {
    tipo_notificacao: string
    data_criacao: Date | string
    is_lida?: boolean | null
    tbl_user_tbl_notificacao_id_usuario_destinoTotbl_user: tbl_userCreateNestedOneWithoutTbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_userInput
    tbl_user_tbl_notificacao_id_usuario_origemTotbl_user: tbl_userCreateNestedOneWithoutTbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_userInput
    tbl_publicacao?: tbl_publicacaoCreateNestedOneWithoutTbl_notificacaoInput
    tbl_comentario?: tbl_comentarioCreateNestedOneWithoutTbl_notificacaoInput
    tbl_curtida?: tbl_curtidaCreateNestedOneWithoutTbl_notificacaoInput
    tbl_curtida_comentario?: tbl_curtida_comentarioCreateNestedOneWithoutTbl_notificacaoInput
  }

  export type tbl_notificacaoUncheckedCreateInput = {
    id?: number
    id_usuario_destino: number
    id_usuario_origem: number
    id_publicacao?: number | null
    id_comentario?: number | null
    id_curtida?: number | null
    id_curtida_comentario?: number | null
    tipo_notificacao: string
    data_criacao: Date | string
    is_lida?: boolean | null
  }

  export type tbl_notificacaoUpdateInput = {
    tipo_notificacao?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    is_lida?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tbl_user_tbl_notificacao_id_usuario_destinoTotbl_user?: tbl_userUpdateOneRequiredWithoutTbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_userNestedInput
    tbl_user_tbl_notificacao_id_usuario_origemTotbl_user?: tbl_userUpdateOneRequiredWithoutTbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_userNestedInput
    tbl_publicacao?: tbl_publicacaoUpdateOneWithoutTbl_notificacaoNestedInput
    tbl_comentario?: tbl_comentarioUpdateOneWithoutTbl_notificacaoNestedInput
    tbl_curtida?: tbl_curtidaUpdateOneWithoutTbl_notificacaoNestedInput
    tbl_curtida_comentario?: tbl_curtida_comentarioUpdateOneWithoutTbl_notificacaoNestedInput
  }

  export type tbl_notificacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_usuario_destino?: IntFieldUpdateOperationsInput | number
    id_usuario_origem?: IntFieldUpdateOperationsInput | number
    id_publicacao?: NullableIntFieldUpdateOperationsInput | number | null
    id_comentario?: NullableIntFieldUpdateOperationsInput | number | null
    id_curtida?: NullableIntFieldUpdateOperationsInput | number | null
    id_curtida_comentario?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_notificacao?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    is_lida?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type tbl_notificacaoCreateManyInput = {
    id?: number
    id_usuario_destino: number
    id_usuario_origem: number
    id_publicacao?: number | null
    id_comentario?: number | null
    id_curtida?: number | null
    id_curtida_comentario?: number | null
    tipo_notificacao: string
    data_criacao: Date | string
    is_lida?: boolean | null
  }

  export type tbl_notificacaoUpdateManyMutationInput = {
    tipo_notificacao?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    is_lida?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type tbl_notificacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_usuario_destino?: IntFieldUpdateOperationsInput | number
    id_usuario_origem?: IntFieldUpdateOperationsInput | number
    id_publicacao?: NullableIntFieldUpdateOperationsInput | number | null
    id_comentario?: NullableIntFieldUpdateOperationsInput | number | null
    id_curtida?: NullableIntFieldUpdateOperationsInput | number | null
    id_curtida_comentario?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_notificacao?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    is_lida?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type tbl_publicacaoCreateInput = {
    imagem: string
    descricao?: string | null
    data_publicacao?: Date | string | null
    localizacao?: string | null
    curtidas_count?: number | null
    comentarios_count?: number | null
    tbl_comentario?: tbl_comentarioCreateNestedManyWithoutTbl_publicacaoInput
    tbl_curtida?: tbl_curtidaCreateNestedManyWithoutTbl_publicacaoInput
    tbl_notificacao?: tbl_notificacaoCreateNestedManyWithoutTbl_publicacaoInput
    tbl_user: tbl_userCreateNestedOneWithoutTbl_publicacaoInput
  }

  export type tbl_publicacaoUncheckedCreateInput = {
    id?: number
    imagem: string
    descricao?: string | null
    data_publicacao?: Date | string | null
    localizacao?: string | null
    curtidas_count?: number | null
    comentarios_count?: number | null
    id_user: number
    tbl_comentario?: tbl_comentarioUncheckedCreateNestedManyWithoutTbl_publicacaoInput
    tbl_curtida?: tbl_curtidaUncheckedCreateNestedManyWithoutTbl_publicacaoInput
    tbl_notificacao?: tbl_notificacaoUncheckedCreateNestedManyWithoutTbl_publicacaoInput
  }

  export type tbl_publicacaoUpdateInput = {
    imagem?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data_publicacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    curtidas_count?: NullableIntFieldUpdateOperationsInput | number | null
    comentarios_count?: NullableIntFieldUpdateOperationsInput | number | null
    tbl_comentario?: tbl_comentarioUpdateManyWithoutTbl_publicacaoNestedInput
    tbl_curtida?: tbl_curtidaUpdateManyWithoutTbl_publicacaoNestedInput
    tbl_notificacao?: tbl_notificacaoUpdateManyWithoutTbl_publicacaoNestedInput
    tbl_user?: tbl_userUpdateOneRequiredWithoutTbl_publicacaoNestedInput
  }

  export type tbl_publicacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    imagem?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data_publicacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    curtidas_count?: NullableIntFieldUpdateOperationsInput | number | null
    comentarios_count?: NullableIntFieldUpdateOperationsInput | number | null
    id_user?: IntFieldUpdateOperationsInput | number
    tbl_comentario?: tbl_comentarioUncheckedUpdateManyWithoutTbl_publicacaoNestedInput
    tbl_curtida?: tbl_curtidaUncheckedUpdateManyWithoutTbl_publicacaoNestedInput
    tbl_notificacao?: tbl_notificacaoUncheckedUpdateManyWithoutTbl_publicacaoNestedInput
  }

  export type tbl_publicacaoCreateManyInput = {
    id?: number
    imagem: string
    descricao?: string | null
    data_publicacao?: Date | string | null
    localizacao?: string | null
    curtidas_count?: number | null
    comentarios_count?: number | null
    id_user: number
  }

  export type tbl_publicacaoUpdateManyMutationInput = {
    imagem?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data_publicacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    curtidas_count?: NullableIntFieldUpdateOperationsInput | number | null
    comentarios_count?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type tbl_publicacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    imagem?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data_publicacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    curtidas_count?: NullableIntFieldUpdateOperationsInput | number | null
    comentarios_count?: NullableIntFieldUpdateOperationsInput | number | null
    id_user?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_serieCreateInput = {
    nome?: string | null
    peso: Decimal | DecimalJsLike | number | string
    repeticoes: number
    tbl_exercicio_treino?: tbl_exercicio_treinoCreateNestedManyWithoutTbl_serieInput
    tbl_exercicio: tbl_exercicioCreateNestedOneWithoutTbl_serieInput
  }

  export type tbl_serieUncheckedCreateInput = {
    id?: number
    id_exercicio: number
    nome?: string | null
    peso: Decimal | DecimalJsLike | number | string
    repeticoes: number
    tbl_exercicio_treino?: tbl_exercicio_treinoUncheckedCreateNestedManyWithoutTbl_serieInput
  }

  export type tbl_serieUpdateInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    repeticoes?: IntFieldUpdateOperationsInput | number
    tbl_exercicio_treino?: tbl_exercicio_treinoUpdateManyWithoutTbl_serieNestedInput
    tbl_exercicio?: tbl_exercicioUpdateOneRequiredWithoutTbl_serieNestedInput
  }

  export type tbl_serieUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_exercicio?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    repeticoes?: IntFieldUpdateOperationsInput | number
    tbl_exercicio_treino?: tbl_exercicio_treinoUncheckedUpdateManyWithoutTbl_serieNestedInput
  }

  export type tbl_serieCreateManyInput = {
    id?: number
    id_exercicio: number
    nome?: string | null
    peso: Decimal | DecimalJsLike | number | string
    repeticoes: number
  }

  export type tbl_serieUpdateManyMutationInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    repeticoes?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_serieUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_exercicio?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    repeticoes?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_treinoCreateInput = {
    nome: string
    tbl_exercicio_treino?: tbl_exercicio_treinoCreateNestedManyWithoutTbl_treinoInput
    tbl_user: tbl_userCreateNestedOneWithoutTbl_treinoInput
  }

  export type tbl_treinoUncheckedCreateInput = {
    id?: number
    nome: string
    id_user: number
    tbl_exercicio_treino?: tbl_exercicio_treinoUncheckedCreateNestedManyWithoutTbl_treinoInput
  }

  export type tbl_treinoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tbl_exercicio_treino?: tbl_exercicio_treinoUpdateManyWithoutTbl_treinoNestedInput
    tbl_user?: tbl_userUpdateOneRequiredWithoutTbl_treinoNestedInput
  }

  export type tbl_treinoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    id_user?: IntFieldUpdateOperationsInput | number
    tbl_exercicio_treino?: tbl_exercicio_treinoUncheckedUpdateManyWithoutTbl_treinoNestedInput
  }

  export type tbl_treinoCreateManyInput = {
    id?: number
    nome: string
    id_user: number
  }

  export type tbl_treinoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_treinoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    id_user?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type Tbl_comentarioListRelationFilter = {
    every?: tbl_comentarioWhereInput
    some?: tbl_comentarioWhereInput
    none?: tbl_comentarioWhereInput
  }

  export type Tbl_curtidaListRelationFilter = {
    every?: tbl_curtidaWhereInput
    some?: tbl_curtidaWhereInput
    none?: tbl_curtidaWhereInput
  }

  export type Tbl_curtida_comentarioListRelationFilter = {
    every?: tbl_curtida_comentarioWhereInput
    some?: tbl_curtida_comentarioWhereInput
    none?: tbl_curtida_comentarioWhereInput
  }

  export type Tbl_notificacaoListRelationFilter = {
    every?: tbl_notificacaoWhereInput
    some?: tbl_notificacaoWhereInput
    none?: tbl_notificacaoWhereInput
  }

  export type Tbl_publicacaoListRelationFilter = {
    every?: tbl_publicacaoWhereInput
    some?: tbl_publicacaoWhereInput
    none?: tbl_publicacaoWhereInput
  }

  export type Tbl_recuperacao_senhaListRelationFilter = {
    every?: tbl_recuperacao_senhaWhereInput
    some?: tbl_recuperacao_senhaWhereInput
    none?: tbl_recuperacao_senhaWhereInput
  }

  export type Tbl_treinoListRelationFilter = {
    every?: tbl_treinoWhereInput
    some?: tbl_treinoWhereInput
    none?: tbl_treinoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type tbl_comentarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tbl_curtidaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tbl_curtida_comentarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tbl_notificacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tbl_publicacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tbl_recuperacao_senhaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tbl_treinoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tbl_userOrderByRelevanceInput = {
    fields: tbl_userOrderByRelevanceFieldEnum | tbl_userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tbl_userCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    peso?: SortOrder
    altura?: SortOrder
    imc?: SortOrder
    nickname?: SortOrder
    data_nascimento?: SortOrder
    foto?: SortOrder
    descricao?: SortOrder
    localizacao?: SortOrder
    is_bloqueado?: SortOrder
  }

  export type tbl_userAvgOrderByAggregateInput = {
    id?: SortOrder
    peso?: SortOrder
    altura?: SortOrder
    imc?: SortOrder
  }

  export type tbl_userMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    peso?: SortOrder
    altura?: SortOrder
    imc?: SortOrder
    nickname?: SortOrder
    data_nascimento?: SortOrder
    foto?: SortOrder
    descricao?: SortOrder
    localizacao?: SortOrder
    is_bloqueado?: SortOrder
  }

  export type tbl_userMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    peso?: SortOrder
    altura?: SortOrder
    imc?: SortOrder
    nickname?: SortOrder
    data_nascimento?: SortOrder
    foto?: SortOrder
    descricao?: SortOrder
    localizacao?: SortOrder
    is_bloqueado?: SortOrder
  }

  export type tbl_userSumOrderByAggregateInput = {
    id?: SortOrder
    peso?: SortOrder
    altura?: SortOrder
    imc?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Tbl_userScalarRelationFilter = {
    is?: tbl_userWhereInput
    isNot?: tbl_userWhereInput
  }

  export type tbl_recuperacao_senhaCountOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
    token?: SortOrder
    data_criacao?: SortOrder
  }

  export type tbl_recuperacao_senhaAvgOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
    token?: SortOrder
  }

  export type tbl_recuperacao_senhaMaxOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
    token?: SortOrder
    data_criacao?: SortOrder
  }

  export type tbl_recuperacao_senhaMinOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
    token?: SortOrder
    data_criacao?: SortOrder
  }

  export type tbl_recuperacao_senhaSumOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
    token?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Tbl_publicacaoScalarRelationFilter = {
    is?: tbl_publicacaoWhereInput
    isNot?: tbl_publicacaoWhereInput
  }

  export type tbl_comentarioOrderByRelevanceInput = {
    fields: tbl_comentarioOrderByRelevanceFieldEnum | tbl_comentarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tbl_comentarioCountOrderByAggregateInput = {
    id?: SortOrder
    conteudo?: SortOrder
    data_comentario?: SortOrder
    id_publicacao?: SortOrder
    id_user?: SortOrder
    curtidas_count?: SortOrder
  }

  export type tbl_comentarioAvgOrderByAggregateInput = {
    id?: SortOrder
    id_publicacao?: SortOrder
    id_user?: SortOrder
    curtidas_count?: SortOrder
  }

  export type tbl_comentarioMaxOrderByAggregateInput = {
    id?: SortOrder
    conteudo?: SortOrder
    data_comentario?: SortOrder
    id_publicacao?: SortOrder
    id_user?: SortOrder
    curtidas_count?: SortOrder
  }

  export type tbl_comentarioMinOrderByAggregateInput = {
    id?: SortOrder
    conteudo?: SortOrder
    data_comentario?: SortOrder
    id_publicacao?: SortOrder
    id_user?: SortOrder
    curtidas_count?: SortOrder
  }

  export type tbl_comentarioSumOrderByAggregateInput = {
    id?: SortOrder
    id_publicacao?: SortOrder
    id_user?: SortOrder
    curtidas_count?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type tbl_curtidaId_publicacaoId_userCompoundUniqueInput = {
    id_publicacao: number
    id_user: number
  }

  export type tbl_curtidaCountOrderByAggregateInput = {
    id?: SortOrder
    id_publicacao?: SortOrder
    id_user?: SortOrder
  }

  export type tbl_curtidaAvgOrderByAggregateInput = {
    id?: SortOrder
    id_publicacao?: SortOrder
    id_user?: SortOrder
  }

  export type tbl_curtidaMaxOrderByAggregateInput = {
    id?: SortOrder
    id_publicacao?: SortOrder
    id_user?: SortOrder
  }

  export type tbl_curtidaMinOrderByAggregateInput = {
    id?: SortOrder
    id_publicacao?: SortOrder
    id_user?: SortOrder
  }

  export type tbl_curtidaSumOrderByAggregateInput = {
    id?: SortOrder
    id_publicacao?: SortOrder
    id_user?: SortOrder
  }

  export type Tbl_comentarioScalarRelationFilter = {
    is?: tbl_comentarioWhereInput
    isNot?: tbl_comentarioWhereInput
  }

  export type tbl_curtida_comentarioId_comentarioId_userCompoundUniqueInput = {
    id_comentario: number
    id_user: number
  }

  export type tbl_curtida_comentarioCountOrderByAggregateInput = {
    id?: SortOrder
    id_comentario?: SortOrder
    id_user?: SortOrder
  }

  export type tbl_curtida_comentarioAvgOrderByAggregateInput = {
    id?: SortOrder
    id_comentario?: SortOrder
    id_user?: SortOrder
  }

  export type tbl_curtida_comentarioMaxOrderByAggregateInput = {
    id?: SortOrder
    id_comentario?: SortOrder
    id_user?: SortOrder
  }

  export type tbl_curtida_comentarioMinOrderByAggregateInput = {
    id?: SortOrder
    id_comentario?: SortOrder
    id_user?: SortOrder
  }

  export type tbl_curtida_comentarioSumOrderByAggregateInput = {
    id?: SortOrder
    id_comentario?: SortOrder
    id_user?: SortOrder
  }

  export type Tbl_exercicio_treinoListRelationFilter = {
    every?: tbl_exercicio_treinoWhereInput
    some?: tbl_exercicio_treinoWhereInput
    none?: tbl_exercicio_treinoWhereInput
  }

  export type Tbl_serieListRelationFilter = {
    every?: tbl_serieWhereInput
    some?: tbl_serieWhereInput
    none?: tbl_serieWhereInput
  }

  export type tbl_exercicio_treinoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tbl_serieOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tbl_exercicioOrderByRelevanceInput = {
    fields: tbl_exercicioOrderByRelevanceFieldEnum | tbl_exercicioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tbl_exercicioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    gif?: SortOrder
    descricao?: SortOrder
    grupo_muscular?: SortOrder
  }

  export type tbl_exercicioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tbl_exercicioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    gif?: SortOrder
    descricao?: SortOrder
    grupo_muscular?: SortOrder
  }

  export type tbl_exercicioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    gif?: SortOrder
    descricao?: SortOrder
    grupo_muscular?: SortOrder
  }

  export type tbl_exercicioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Tbl_treinoScalarRelationFilter = {
    is?: tbl_treinoWhereInput
    isNot?: tbl_treinoWhereInput
  }

  export type Tbl_exercicioScalarRelationFilter = {
    is?: tbl_exercicioWhereInput
    isNot?: tbl_exercicioWhereInput
  }

  export type Tbl_serieScalarRelationFilter = {
    is?: tbl_serieWhereInput
    isNot?: tbl_serieWhereInput
  }

  export type tbl_exercicio_treinoId_treinoId_exercicioId_serieCompoundUniqueInput = {
    id_treino: number
    id_exercicio: number
    id_serie: number
  }

  export type tbl_exercicio_treinoCountOrderByAggregateInput = {
    id?: SortOrder
    id_treino?: SortOrder
    id_exercicio?: SortOrder
    id_serie?: SortOrder
  }

  export type tbl_exercicio_treinoAvgOrderByAggregateInput = {
    id?: SortOrder
    id_treino?: SortOrder
    id_exercicio?: SortOrder
    id_serie?: SortOrder
  }

  export type tbl_exercicio_treinoMaxOrderByAggregateInput = {
    id?: SortOrder
    id_treino?: SortOrder
    id_exercicio?: SortOrder
    id_serie?: SortOrder
  }

  export type tbl_exercicio_treinoMinOrderByAggregateInput = {
    id?: SortOrder
    id_treino?: SortOrder
    id_exercicio?: SortOrder
    id_serie?: SortOrder
  }

  export type tbl_exercicio_treinoSumOrderByAggregateInput = {
    id?: SortOrder
    id_treino?: SortOrder
    id_exercicio?: SortOrder
    id_serie?: SortOrder
  }

  export type Tbl_publicacaoNullableScalarRelationFilter = {
    is?: tbl_publicacaoWhereInput | null
    isNot?: tbl_publicacaoWhereInput | null
  }

  export type Tbl_comentarioNullableScalarRelationFilter = {
    is?: tbl_comentarioWhereInput | null
    isNot?: tbl_comentarioWhereInput | null
  }

  export type Tbl_curtidaNullableScalarRelationFilter = {
    is?: tbl_curtidaWhereInput | null
    isNot?: tbl_curtidaWhereInput | null
  }

  export type Tbl_curtida_comentarioNullableScalarRelationFilter = {
    is?: tbl_curtida_comentarioWhereInput | null
    isNot?: tbl_curtida_comentarioWhereInput | null
  }

  export type tbl_notificacaoOrderByRelevanceInput = {
    fields: tbl_notificacaoOrderByRelevanceFieldEnum | tbl_notificacaoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tbl_notificacaoCountOrderByAggregateInput = {
    id?: SortOrder
    id_usuario_destino?: SortOrder
    id_usuario_origem?: SortOrder
    id_publicacao?: SortOrder
    id_comentario?: SortOrder
    id_curtida?: SortOrder
    id_curtida_comentario?: SortOrder
    tipo_notificacao?: SortOrder
    data_criacao?: SortOrder
    is_lida?: SortOrder
  }

  export type tbl_notificacaoAvgOrderByAggregateInput = {
    id?: SortOrder
    id_usuario_destino?: SortOrder
    id_usuario_origem?: SortOrder
    id_publicacao?: SortOrder
    id_comentario?: SortOrder
    id_curtida?: SortOrder
    id_curtida_comentario?: SortOrder
  }

  export type tbl_notificacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    id_usuario_destino?: SortOrder
    id_usuario_origem?: SortOrder
    id_publicacao?: SortOrder
    id_comentario?: SortOrder
    id_curtida?: SortOrder
    id_curtida_comentario?: SortOrder
    tipo_notificacao?: SortOrder
    data_criacao?: SortOrder
    is_lida?: SortOrder
  }

  export type tbl_notificacaoMinOrderByAggregateInput = {
    id?: SortOrder
    id_usuario_destino?: SortOrder
    id_usuario_origem?: SortOrder
    id_publicacao?: SortOrder
    id_comentario?: SortOrder
    id_curtida?: SortOrder
    id_curtida_comentario?: SortOrder
    tipo_notificacao?: SortOrder
    data_criacao?: SortOrder
    is_lida?: SortOrder
  }

  export type tbl_notificacaoSumOrderByAggregateInput = {
    id?: SortOrder
    id_usuario_destino?: SortOrder
    id_usuario_origem?: SortOrder
    id_publicacao?: SortOrder
    id_comentario?: SortOrder
    id_curtida?: SortOrder
    id_curtida_comentario?: SortOrder
  }

  export type tbl_publicacaoOrderByRelevanceInput = {
    fields: tbl_publicacaoOrderByRelevanceFieldEnum | tbl_publicacaoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tbl_publicacaoCountOrderByAggregateInput = {
    id?: SortOrder
    imagem?: SortOrder
    descricao?: SortOrder
    data_publicacao?: SortOrder
    localizacao?: SortOrder
    curtidas_count?: SortOrder
    comentarios_count?: SortOrder
    id_user?: SortOrder
  }

  export type tbl_publicacaoAvgOrderByAggregateInput = {
    id?: SortOrder
    curtidas_count?: SortOrder
    comentarios_count?: SortOrder
    id_user?: SortOrder
  }

  export type tbl_publicacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    imagem?: SortOrder
    descricao?: SortOrder
    data_publicacao?: SortOrder
    localizacao?: SortOrder
    curtidas_count?: SortOrder
    comentarios_count?: SortOrder
    id_user?: SortOrder
  }

  export type tbl_publicacaoMinOrderByAggregateInput = {
    id?: SortOrder
    imagem?: SortOrder
    descricao?: SortOrder
    data_publicacao?: SortOrder
    localizacao?: SortOrder
    curtidas_count?: SortOrder
    comentarios_count?: SortOrder
    id_user?: SortOrder
  }

  export type tbl_publicacaoSumOrderByAggregateInput = {
    id?: SortOrder
    curtidas_count?: SortOrder
    comentarios_count?: SortOrder
    id_user?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type tbl_serieOrderByRelevanceInput = {
    fields: tbl_serieOrderByRelevanceFieldEnum | tbl_serieOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tbl_serieCountOrderByAggregateInput = {
    id?: SortOrder
    id_exercicio?: SortOrder
    nome?: SortOrder
    peso?: SortOrder
    repeticoes?: SortOrder
  }

  export type tbl_serieAvgOrderByAggregateInput = {
    id?: SortOrder
    id_exercicio?: SortOrder
    peso?: SortOrder
    repeticoes?: SortOrder
  }

  export type tbl_serieMaxOrderByAggregateInput = {
    id?: SortOrder
    id_exercicio?: SortOrder
    nome?: SortOrder
    peso?: SortOrder
    repeticoes?: SortOrder
  }

  export type tbl_serieMinOrderByAggregateInput = {
    id?: SortOrder
    id_exercicio?: SortOrder
    nome?: SortOrder
    peso?: SortOrder
    repeticoes?: SortOrder
  }

  export type tbl_serieSumOrderByAggregateInput = {
    id?: SortOrder
    id_exercicio?: SortOrder
    peso?: SortOrder
    repeticoes?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type tbl_treinoOrderByRelevanceInput = {
    fields: tbl_treinoOrderByRelevanceFieldEnum | tbl_treinoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tbl_treinoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    id_user?: SortOrder
  }

  export type tbl_treinoAvgOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
  }

  export type tbl_treinoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    id_user?: SortOrder
  }

  export type tbl_treinoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    id_user?: SortOrder
  }

  export type tbl_treinoSumOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
  }

  export type tbl_comentarioCreateNestedManyWithoutTbl_userInput = {
    create?: XOR<tbl_comentarioCreateWithoutTbl_userInput, tbl_comentarioUncheckedCreateWithoutTbl_userInput> | tbl_comentarioCreateWithoutTbl_userInput[] | tbl_comentarioUncheckedCreateWithoutTbl_userInput[]
    connectOrCreate?: tbl_comentarioCreateOrConnectWithoutTbl_userInput | tbl_comentarioCreateOrConnectWithoutTbl_userInput[]
    createMany?: tbl_comentarioCreateManyTbl_userInputEnvelope
    connect?: tbl_comentarioWhereUniqueInput | tbl_comentarioWhereUniqueInput[]
  }

  export type tbl_curtidaCreateNestedManyWithoutTbl_userInput = {
    create?: XOR<tbl_curtidaCreateWithoutTbl_userInput, tbl_curtidaUncheckedCreateWithoutTbl_userInput> | tbl_curtidaCreateWithoutTbl_userInput[] | tbl_curtidaUncheckedCreateWithoutTbl_userInput[]
    connectOrCreate?: tbl_curtidaCreateOrConnectWithoutTbl_userInput | tbl_curtidaCreateOrConnectWithoutTbl_userInput[]
    createMany?: tbl_curtidaCreateManyTbl_userInputEnvelope
    connect?: tbl_curtidaWhereUniqueInput | tbl_curtidaWhereUniqueInput[]
  }

  export type tbl_curtida_comentarioCreateNestedManyWithoutTbl_userInput = {
    create?: XOR<tbl_curtida_comentarioCreateWithoutTbl_userInput, tbl_curtida_comentarioUncheckedCreateWithoutTbl_userInput> | tbl_curtida_comentarioCreateWithoutTbl_userInput[] | tbl_curtida_comentarioUncheckedCreateWithoutTbl_userInput[]
    connectOrCreate?: tbl_curtida_comentarioCreateOrConnectWithoutTbl_userInput | tbl_curtida_comentarioCreateOrConnectWithoutTbl_userInput[]
    createMany?: tbl_curtida_comentarioCreateManyTbl_userInputEnvelope
    connect?: tbl_curtida_comentarioWhereUniqueInput | tbl_curtida_comentarioWhereUniqueInput[]
  }

  export type tbl_notificacaoCreateNestedManyWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput = {
    create?: XOR<tbl_notificacaoCreateWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput, tbl_notificacaoUncheckedCreateWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput> | tbl_notificacaoCreateWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput[] | tbl_notificacaoUncheckedCreateWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput[]
    connectOrCreate?: tbl_notificacaoCreateOrConnectWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput | tbl_notificacaoCreateOrConnectWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput[]
    createMany?: tbl_notificacaoCreateManyTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInputEnvelope
    connect?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
  }

  export type tbl_notificacaoCreateNestedManyWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput = {
    create?: XOR<tbl_notificacaoCreateWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput, tbl_notificacaoUncheckedCreateWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput> | tbl_notificacaoCreateWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput[] | tbl_notificacaoUncheckedCreateWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput[]
    connectOrCreate?: tbl_notificacaoCreateOrConnectWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput | tbl_notificacaoCreateOrConnectWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput[]
    createMany?: tbl_notificacaoCreateManyTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInputEnvelope
    connect?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
  }

  export type tbl_publicacaoCreateNestedManyWithoutTbl_userInput = {
    create?: XOR<tbl_publicacaoCreateWithoutTbl_userInput, tbl_publicacaoUncheckedCreateWithoutTbl_userInput> | tbl_publicacaoCreateWithoutTbl_userInput[] | tbl_publicacaoUncheckedCreateWithoutTbl_userInput[]
    connectOrCreate?: tbl_publicacaoCreateOrConnectWithoutTbl_userInput | tbl_publicacaoCreateOrConnectWithoutTbl_userInput[]
    createMany?: tbl_publicacaoCreateManyTbl_userInputEnvelope
    connect?: tbl_publicacaoWhereUniqueInput | tbl_publicacaoWhereUniqueInput[]
  }

  export type tbl_recuperacao_senhaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<tbl_recuperacao_senhaCreateWithoutUsuarioInput, tbl_recuperacao_senhaUncheckedCreateWithoutUsuarioInput> | tbl_recuperacao_senhaCreateWithoutUsuarioInput[] | tbl_recuperacao_senhaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: tbl_recuperacao_senhaCreateOrConnectWithoutUsuarioInput | tbl_recuperacao_senhaCreateOrConnectWithoutUsuarioInput[]
    createMany?: tbl_recuperacao_senhaCreateManyUsuarioInputEnvelope
    connect?: tbl_recuperacao_senhaWhereUniqueInput | tbl_recuperacao_senhaWhereUniqueInput[]
  }

  export type tbl_treinoCreateNestedManyWithoutTbl_userInput = {
    create?: XOR<tbl_treinoCreateWithoutTbl_userInput, tbl_treinoUncheckedCreateWithoutTbl_userInput> | tbl_treinoCreateWithoutTbl_userInput[] | tbl_treinoUncheckedCreateWithoutTbl_userInput[]
    connectOrCreate?: tbl_treinoCreateOrConnectWithoutTbl_userInput | tbl_treinoCreateOrConnectWithoutTbl_userInput[]
    createMany?: tbl_treinoCreateManyTbl_userInputEnvelope
    connect?: tbl_treinoWhereUniqueInput | tbl_treinoWhereUniqueInput[]
  }

  export type tbl_comentarioUncheckedCreateNestedManyWithoutTbl_userInput = {
    create?: XOR<tbl_comentarioCreateWithoutTbl_userInput, tbl_comentarioUncheckedCreateWithoutTbl_userInput> | tbl_comentarioCreateWithoutTbl_userInput[] | tbl_comentarioUncheckedCreateWithoutTbl_userInput[]
    connectOrCreate?: tbl_comentarioCreateOrConnectWithoutTbl_userInput | tbl_comentarioCreateOrConnectWithoutTbl_userInput[]
    createMany?: tbl_comentarioCreateManyTbl_userInputEnvelope
    connect?: tbl_comentarioWhereUniqueInput | tbl_comentarioWhereUniqueInput[]
  }

  export type tbl_curtidaUncheckedCreateNestedManyWithoutTbl_userInput = {
    create?: XOR<tbl_curtidaCreateWithoutTbl_userInput, tbl_curtidaUncheckedCreateWithoutTbl_userInput> | tbl_curtidaCreateWithoutTbl_userInput[] | tbl_curtidaUncheckedCreateWithoutTbl_userInput[]
    connectOrCreate?: tbl_curtidaCreateOrConnectWithoutTbl_userInput | tbl_curtidaCreateOrConnectWithoutTbl_userInput[]
    createMany?: tbl_curtidaCreateManyTbl_userInputEnvelope
    connect?: tbl_curtidaWhereUniqueInput | tbl_curtidaWhereUniqueInput[]
  }

  export type tbl_curtida_comentarioUncheckedCreateNestedManyWithoutTbl_userInput = {
    create?: XOR<tbl_curtida_comentarioCreateWithoutTbl_userInput, tbl_curtida_comentarioUncheckedCreateWithoutTbl_userInput> | tbl_curtida_comentarioCreateWithoutTbl_userInput[] | tbl_curtida_comentarioUncheckedCreateWithoutTbl_userInput[]
    connectOrCreate?: tbl_curtida_comentarioCreateOrConnectWithoutTbl_userInput | tbl_curtida_comentarioCreateOrConnectWithoutTbl_userInput[]
    createMany?: tbl_curtida_comentarioCreateManyTbl_userInputEnvelope
    connect?: tbl_curtida_comentarioWhereUniqueInput | tbl_curtida_comentarioWhereUniqueInput[]
  }

  export type tbl_notificacaoUncheckedCreateNestedManyWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput = {
    create?: XOR<tbl_notificacaoCreateWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput, tbl_notificacaoUncheckedCreateWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput> | tbl_notificacaoCreateWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput[] | tbl_notificacaoUncheckedCreateWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput[]
    connectOrCreate?: tbl_notificacaoCreateOrConnectWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput | tbl_notificacaoCreateOrConnectWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput[]
    createMany?: tbl_notificacaoCreateManyTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInputEnvelope
    connect?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
  }

  export type tbl_notificacaoUncheckedCreateNestedManyWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput = {
    create?: XOR<tbl_notificacaoCreateWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput, tbl_notificacaoUncheckedCreateWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput> | tbl_notificacaoCreateWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput[] | tbl_notificacaoUncheckedCreateWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput[]
    connectOrCreate?: tbl_notificacaoCreateOrConnectWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput | tbl_notificacaoCreateOrConnectWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput[]
    createMany?: tbl_notificacaoCreateManyTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInputEnvelope
    connect?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
  }

  export type tbl_publicacaoUncheckedCreateNestedManyWithoutTbl_userInput = {
    create?: XOR<tbl_publicacaoCreateWithoutTbl_userInput, tbl_publicacaoUncheckedCreateWithoutTbl_userInput> | tbl_publicacaoCreateWithoutTbl_userInput[] | tbl_publicacaoUncheckedCreateWithoutTbl_userInput[]
    connectOrCreate?: tbl_publicacaoCreateOrConnectWithoutTbl_userInput | tbl_publicacaoCreateOrConnectWithoutTbl_userInput[]
    createMany?: tbl_publicacaoCreateManyTbl_userInputEnvelope
    connect?: tbl_publicacaoWhereUniqueInput | tbl_publicacaoWhereUniqueInput[]
  }

  export type tbl_recuperacao_senhaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<tbl_recuperacao_senhaCreateWithoutUsuarioInput, tbl_recuperacao_senhaUncheckedCreateWithoutUsuarioInput> | tbl_recuperacao_senhaCreateWithoutUsuarioInput[] | tbl_recuperacao_senhaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: tbl_recuperacao_senhaCreateOrConnectWithoutUsuarioInput | tbl_recuperacao_senhaCreateOrConnectWithoutUsuarioInput[]
    createMany?: tbl_recuperacao_senhaCreateManyUsuarioInputEnvelope
    connect?: tbl_recuperacao_senhaWhereUniqueInput | tbl_recuperacao_senhaWhereUniqueInput[]
  }

  export type tbl_treinoUncheckedCreateNestedManyWithoutTbl_userInput = {
    create?: XOR<tbl_treinoCreateWithoutTbl_userInput, tbl_treinoUncheckedCreateWithoutTbl_userInput> | tbl_treinoCreateWithoutTbl_userInput[] | tbl_treinoUncheckedCreateWithoutTbl_userInput[]
    connectOrCreate?: tbl_treinoCreateOrConnectWithoutTbl_userInput | tbl_treinoCreateOrConnectWithoutTbl_userInput[]
    createMany?: tbl_treinoCreateManyTbl_userInputEnvelope
    connect?: tbl_treinoWhereUniqueInput | tbl_treinoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type tbl_comentarioUpdateManyWithoutTbl_userNestedInput = {
    create?: XOR<tbl_comentarioCreateWithoutTbl_userInput, tbl_comentarioUncheckedCreateWithoutTbl_userInput> | tbl_comentarioCreateWithoutTbl_userInput[] | tbl_comentarioUncheckedCreateWithoutTbl_userInput[]
    connectOrCreate?: tbl_comentarioCreateOrConnectWithoutTbl_userInput | tbl_comentarioCreateOrConnectWithoutTbl_userInput[]
    upsert?: tbl_comentarioUpsertWithWhereUniqueWithoutTbl_userInput | tbl_comentarioUpsertWithWhereUniqueWithoutTbl_userInput[]
    createMany?: tbl_comentarioCreateManyTbl_userInputEnvelope
    set?: tbl_comentarioWhereUniqueInput | tbl_comentarioWhereUniqueInput[]
    disconnect?: tbl_comentarioWhereUniqueInput | tbl_comentarioWhereUniqueInput[]
    delete?: tbl_comentarioWhereUniqueInput | tbl_comentarioWhereUniqueInput[]
    connect?: tbl_comentarioWhereUniqueInput | tbl_comentarioWhereUniqueInput[]
    update?: tbl_comentarioUpdateWithWhereUniqueWithoutTbl_userInput | tbl_comentarioUpdateWithWhereUniqueWithoutTbl_userInput[]
    updateMany?: tbl_comentarioUpdateManyWithWhereWithoutTbl_userInput | tbl_comentarioUpdateManyWithWhereWithoutTbl_userInput[]
    deleteMany?: tbl_comentarioScalarWhereInput | tbl_comentarioScalarWhereInput[]
  }

  export type tbl_curtidaUpdateManyWithoutTbl_userNestedInput = {
    create?: XOR<tbl_curtidaCreateWithoutTbl_userInput, tbl_curtidaUncheckedCreateWithoutTbl_userInput> | tbl_curtidaCreateWithoutTbl_userInput[] | tbl_curtidaUncheckedCreateWithoutTbl_userInput[]
    connectOrCreate?: tbl_curtidaCreateOrConnectWithoutTbl_userInput | tbl_curtidaCreateOrConnectWithoutTbl_userInput[]
    upsert?: tbl_curtidaUpsertWithWhereUniqueWithoutTbl_userInput | tbl_curtidaUpsertWithWhereUniqueWithoutTbl_userInput[]
    createMany?: tbl_curtidaCreateManyTbl_userInputEnvelope
    set?: tbl_curtidaWhereUniqueInput | tbl_curtidaWhereUniqueInput[]
    disconnect?: tbl_curtidaWhereUniqueInput | tbl_curtidaWhereUniqueInput[]
    delete?: tbl_curtidaWhereUniqueInput | tbl_curtidaWhereUniqueInput[]
    connect?: tbl_curtidaWhereUniqueInput | tbl_curtidaWhereUniqueInput[]
    update?: tbl_curtidaUpdateWithWhereUniqueWithoutTbl_userInput | tbl_curtidaUpdateWithWhereUniqueWithoutTbl_userInput[]
    updateMany?: tbl_curtidaUpdateManyWithWhereWithoutTbl_userInput | tbl_curtidaUpdateManyWithWhereWithoutTbl_userInput[]
    deleteMany?: tbl_curtidaScalarWhereInput | tbl_curtidaScalarWhereInput[]
  }

  export type tbl_curtida_comentarioUpdateManyWithoutTbl_userNestedInput = {
    create?: XOR<tbl_curtida_comentarioCreateWithoutTbl_userInput, tbl_curtida_comentarioUncheckedCreateWithoutTbl_userInput> | tbl_curtida_comentarioCreateWithoutTbl_userInput[] | tbl_curtida_comentarioUncheckedCreateWithoutTbl_userInput[]
    connectOrCreate?: tbl_curtida_comentarioCreateOrConnectWithoutTbl_userInput | tbl_curtida_comentarioCreateOrConnectWithoutTbl_userInput[]
    upsert?: tbl_curtida_comentarioUpsertWithWhereUniqueWithoutTbl_userInput | tbl_curtida_comentarioUpsertWithWhereUniqueWithoutTbl_userInput[]
    createMany?: tbl_curtida_comentarioCreateManyTbl_userInputEnvelope
    set?: tbl_curtida_comentarioWhereUniqueInput | tbl_curtida_comentarioWhereUniqueInput[]
    disconnect?: tbl_curtida_comentarioWhereUniqueInput | tbl_curtida_comentarioWhereUniqueInput[]
    delete?: tbl_curtida_comentarioWhereUniqueInput | tbl_curtida_comentarioWhereUniqueInput[]
    connect?: tbl_curtida_comentarioWhereUniqueInput | tbl_curtida_comentarioWhereUniqueInput[]
    update?: tbl_curtida_comentarioUpdateWithWhereUniqueWithoutTbl_userInput | tbl_curtida_comentarioUpdateWithWhereUniqueWithoutTbl_userInput[]
    updateMany?: tbl_curtida_comentarioUpdateManyWithWhereWithoutTbl_userInput | tbl_curtida_comentarioUpdateManyWithWhereWithoutTbl_userInput[]
    deleteMany?: tbl_curtida_comentarioScalarWhereInput | tbl_curtida_comentarioScalarWhereInput[]
  }

  export type tbl_notificacaoUpdateManyWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userNestedInput = {
    create?: XOR<tbl_notificacaoCreateWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput, tbl_notificacaoUncheckedCreateWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput> | tbl_notificacaoCreateWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput[] | tbl_notificacaoUncheckedCreateWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput[]
    connectOrCreate?: tbl_notificacaoCreateOrConnectWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput | tbl_notificacaoCreateOrConnectWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput[]
    upsert?: tbl_notificacaoUpsertWithWhereUniqueWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput | tbl_notificacaoUpsertWithWhereUniqueWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput[]
    createMany?: tbl_notificacaoCreateManyTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInputEnvelope
    set?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
    disconnect?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
    delete?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
    connect?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
    update?: tbl_notificacaoUpdateWithWhereUniqueWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput | tbl_notificacaoUpdateWithWhereUniqueWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput[]
    updateMany?: tbl_notificacaoUpdateManyWithWhereWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput | tbl_notificacaoUpdateManyWithWhereWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput[]
    deleteMany?: tbl_notificacaoScalarWhereInput | tbl_notificacaoScalarWhereInput[]
  }

  export type tbl_notificacaoUpdateManyWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userNestedInput = {
    create?: XOR<tbl_notificacaoCreateWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput, tbl_notificacaoUncheckedCreateWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput> | tbl_notificacaoCreateWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput[] | tbl_notificacaoUncheckedCreateWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput[]
    connectOrCreate?: tbl_notificacaoCreateOrConnectWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput | tbl_notificacaoCreateOrConnectWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput[]
    upsert?: tbl_notificacaoUpsertWithWhereUniqueWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput | tbl_notificacaoUpsertWithWhereUniqueWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput[]
    createMany?: tbl_notificacaoCreateManyTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInputEnvelope
    set?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
    disconnect?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
    delete?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
    connect?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
    update?: tbl_notificacaoUpdateWithWhereUniqueWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput | tbl_notificacaoUpdateWithWhereUniqueWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput[]
    updateMany?: tbl_notificacaoUpdateManyWithWhereWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput | tbl_notificacaoUpdateManyWithWhereWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput[]
    deleteMany?: tbl_notificacaoScalarWhereInput | tbl_notificacaoScalarWhereInput[]
  }

  export type tbl_publicacaoUpdateManyWithoutTbl_userNestedInput = {
    create?: XOR<tbl_publicacaoCreateWithoutTbl_userInput, tbl_publicacaoUncheckedCreateWithoutTbl_userInput> | tbl_publicacaoCreateWithoutTbl_userInput[] | tbl_publicacaoUncheckedCreateWithoutTbl_userInput[]
    connectOrCreate?: tbl_publicacaoCreateOrConnectWithoutTbl_userInput | tbl_publicacaoCreateOrConnectWithoutTbl_userInput[]
    upsert?: tbl_publicacaoUpsertWithWhereUniqueWithoutTbl_userInput | tbl_publicacaoUpsertWithWhereUniqueWithoutTbl_userInput[]
    createMany?: tbl_publicacaoCreateManyTbl_userInputEnvelope
    set?: tbl_publicacaoWhereUniqueInput | tbl_publicacaoWhereUniqueInput[]
    disconnect?: tbl_publicacaoWhereUniqueInput | tbl_publicacaoWhereUniqueInput[]
    delete?: tbl_publicacaoWhereUniqueInput | tbl_publicacaoWhereUniqueInput[]
    connect?: tbl_publicacaoWhereUniqueInput | tbl_publicacaoWhereUniqueInput[]
    update?: tbl_publicacaoUpdateWithWhereUniqueWithoutTbl_userInput | tbl_publicacaoUpdateWithWhereUniqueWithoutTbl_userInput[]
    updateMany?: tbl_publicacaoUpdateManyWithWhereWithoutTbl_userInput | tbl_publicacaoUpdateManyWithWhereWithoutTbl_userInput[]
    deleteMany?: tbl_publicacaoScalarWhereInput | tbl_publicacaoScalarWhereInput[]
  }

  export type tbl_recuperacao_senhaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<tbl_recuperacao_senhaCreateWithoutUsuarioInput, tbl_recuperacao_senhaUncheckedCreateWithoutUsuarioInput> | tbl_recuperacao_senhaCreateWithoutUsuarioInput[] | tbl_recuperacao_senhaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: tbl_recuperacao_senhaCreateOrConnectWithoutUsuarioInput | tbl_recuperacao_senhaCreateOrConnectWithoutUsuarioInput[]
    upsert?: tbl_recuperacao_senhaUpsertWithWhereUniqueWithoutUsuarioInput | tbl_recuperacao_senhaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: tbl_recuperacao_senhaCreateManyUsuarioInputEnvelope
    set?: tbl_recuperacao_senhaWhereUniqueInput | tbl_recuperacao_senhaWhereUniqueInput[]
    disconnect?: tbl_recuperacao_senhaWhereUniqueInput | tbl_recuperacao_senhaWhereUniqueInput[]
    delete?: tbl_recuperacao_senhaWhereUniqueInput | tbl_recuperacao_senhaWhereUniqueInput[]
    connect?: tbl_recuperacao_senhaWhereUniqueInput | tbl_recuperacao_senhaWhereUniqueInput[]
    update?: tbl_recuperacao_senhaUpdateWithWhereUniqueWithoutUsuarioInput | tbl_recuperacao_senhaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: tbl_recuperacao_senhaUpdateManyWithWhereWithoutUsuarioInput | tbl_recuperacao_senhaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: tbl_recuperacao_senhaScalarWhereInput | tbl_recuperacao_senhaScalarWhereInput[]
  }

  export type tbl_treinoUpdateManyWithoutTbl_userNestedInput = {
    create?: XOR<tbl_treinoCreateWithoutTbl_userInput, tbl_treinoUncheckedCreateWithoutTbl_userInput> | tbl_treinoCreateWithoutTbl_userInput[] | tbl_treinoUncheckedCreateWithoutTbl_userInput[]
    connectOrCreate?: tbl_treinoCreateOrConnectWithoutTbl_userInput | tbl_treinoCreateOrConnectWithoutTbl_userInput[]
    upsert?: tbl_treinoUpsertWithWhereUniqueWithoutTbl_userInput | tbl_treinoUpsertWithWhereUniqueWithoutTbl_userInput[]
    createMany?: tbl_treinoCreateManyTbl_userInputEnvelope
    set?: tbl_treinoWhereUniqueInput | tbl_treinoWhereUniqueInput[]
    disconnect?: tbl_treinoWhereUniqueInput | tbl_treinoWhereUniqueInput[]
    delete?: tbl_treinoWhereUniqueInput | tbl_treinoWhereUniqueInput[]
    connect?: tbl_treinoWhereUniqueInput | tbl_treinoWhereUniqueInput[]
    update?: tbl_treinoUpdateWithWhereUniqueWithoutTbl_userInput | tbl_treinoUpdateWithWhereUniqueWithoutTbl_userInput[]
    updateMany?: tbl_treinoUpdateManyWithWhereWithoutTbl_userInput | tbl_treinoUpdateManyWithWhereWithoutTbl_userInput[]
    deleteMany?: tbl_treinoScalarWhereInput | tbl_treinoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type tbl_comentarioUncheckedUpdateManyWithoutTbl_userNestedInput = {
    create?: XOR<tbl_comentarioCreateWithoutTbl_userInput, tbl_comentarioUncheckedCreateWithoutTbl_userInput> | tbl_comentarioCreateWithoutTbl_userInput[] | tbl_comentarioUncheckedCreateWithoutTbl_userInput[]
    connectOrCreate?: tbl_comentarioCreateOrConnectWithoutTbl_userInput | tbl_comentarioCreateOrConnectWithoutTbl_userInput[]
    upsert?: tbl_comentarioUpsertWithWhereUniqueWithoutTbl_userInput | tbl_comentarioUpsertWithWhereUniqueWithoutTbl_userInput[]
    createMany?: tbl_comentarioCreateManyTbl_userInputEnvelope
    set?: tbl_comentarioWhereUniqueInput | tbl_comentarioWhereUniqueInput[]
    disconnect?: tbl_comentarioWhereUniqueInput | tbl_comentarioWhereUniqueInput[]
    delete?: tbl_comentarioWhereUniqueInput | tbl_comentarioWhereUniqueInput[]
    connect?: tbl_comentarioWhereUniqueInput | tbl_comentarioWhereUniqueInput[]
    update?: tbl_comentarioUpdateWithWhereUniqueWithoutTbl_userInput | tbl_comentarioUpdateWithWhereUniqueWithoutTbl_userInput[]
    updateMany?: tbl_comentarioUpdateManyWithWhereWithoutTbl_userInput | tbl_comentarioUpdateManyWithWhereWithoutTbl_userInput[]
    deleteMany?: tbl_comentarioScalarWhereInput | tbl_comentarioScalarWhereInput[]
  }

  export type tbl_curtidaUncheckedUpdateManyWithoutTbl_userNestedInput = {
    create?: XOR<tbl_curtidaCreateWithoutTbl_userInput, tbl_curtidaUncheckedCreateWithoutTbl_userInput> | tbl_curtidaCreateWithoutTbl_userInput[] | tbl_curtidaUncheckedCreateWithoutTbl_userInput[]
    connectOrCreate?: tbl_curtidaCreateOrConnectWithoutTbl_userInput | tbl_curtidaCreateOrConnectWithoutTbl_userInput[]
    upsert?: tbl_curtidaUpsertWithWhereUniqueWithoutTbl_userInput | tbl_curtidaUpsertWithWhereUniqueWithoutTbl_userInput[]
    createMany?: tbl_curtidaCreateManyTbl_userInputEnvelope
    set?: tbl_curtidaWhereUniqueInput | tbl_curtidaWhereUniqueInput[]
    disconnect?: tbl_curtidaWhereUniqueInput | tbl_curtidaWhereUniqueInput[]
    delete?: tbl_curtidaWhereUniqueInput | tbl_curtidaWhereUniqueInput[]
    connect?: tbl_curtidaWhereUniqueInput | tbl_curtidaWhereUniqueInput[]
    update?: tbl_curtidaUpdateWithWhereUniqueWithoutTbl_userInput | tbl_curtidaUpdateWithWhereUniqueWithoutTbl_userInput[]
    updateMany?: tbl_curtidaUpdateManyWithWhereWithoutTbl_userInput | tbl_curtidaUpdateManyWithWhereWithoutTbl_userInput[]
    deleteMany?: tbl_curtidaScalarWhereInput | tbl_curtidaScalarWhereInput[]
  }

  export type tbl_curtida_comentarioUncheckedUpdateManyWithoutTbl_userNestedInput = {
    create?: XOR<tbl_curtida_comentarioCreateWithoutTbl_userInput, tbl_curtida_comentarioUncheckedCreateWithoutTbl_userInput> | tbl_curtida_comentarioCreateWithoutTbl_userInput[] | tbl_curtida_comentarioUncheckedCreateWithoutTbl_userInput[]
    connectOrCreate?: tbl_curtida_comentarioCreateOrConnectWithoutTbl_userInput | tbl_curtida_comentarioCreateOrConnectWithoutTbl_userInput[]
    upsert?: tbl_curtida_comentarioUpsertWithWhereUniqueWithoutTbl_userInput | tbl_curtida_comentarioUpsertWithWhereUniqueWithoutTbl_userInput[]
    createMany?: tbl_curtida_comentarioCreateManyTbl_userInputEnvelope
    set?: tbl_curtida_comentarioWhereUniqueInput | tbl_curtida_comentarioWhereUniqueInput[]
    disconnect?: tbl_curtida_comentarioWhereUniqueInput | tbl_curtida_comentarioWhereUniqueInput[]
    delete?: tbl_curtida_comentarioWhereUniqueInput | tbl_curtida_comentarioWhereUniqueInput[]
    connect?: tbl_curtida_comentarioWhereUniqueInput | tbl_curtida_comentarioWhereUniqueInput[]
    update?: tbl_curtida_comentarioUpdateWithWhereUniqueWithoutTbl_userInput | tbl_curtida_comentarioUpdateWithWhereUniqueWithoutTbl_userInput[]
    updateMany?: tbl_curtida_comentarioUpdateManyWithWhereWithoutTbl_userInput | tbl_curtida_comentarioUpdateManyWithWhereWithoutTbl_userInput[]
    deleteMany?: tbl_curtida_comentarioScalarWhereInput | tbl_curtida_comentarioScalarWhereInput[]
  }

  export type tbl_notificacaoUncheckedUpdateManyWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userNestedInput = {
    create?: XOR<tbl_notificacaoCreateWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput, tbl_notificacaoUncheckedCreateWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput> | tbl_notificacaoCreateWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput[] | tbl_notificacaoUncheckedCreateWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput[]
    connectOrCreate?: tbl_notificacaoCreateOrConnectWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput | tbl_notificacaoCreateOrConnectWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput[]
    upsert?: tbl_notificacaoUpsertWithWhereUniqueWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput | tbl_notificacaoUpsertWithWhereUniqueWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput[]
    createMany?: tbl_notificacaoCreateManyTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInputEnvelope
    set?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
    disconnect?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
    delete?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
    connect?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
    update?: tbl_notificacaoUpdateWithWhereUniqueWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput | tbl_notificacaoUpdateWithWhereUniqueWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput[]
    updateMany?: tbl_notificacaoUpdateManyWithWhereWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput | tbl_notificacaoUpdateManyWithWhereWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput[]
    deleteMany?: tbl_notificacaoScalarWhereInput | tbl_notificacaoScalarWhereInput[]
  }

  export type tbl_notificacaoUncheckedUpdateManyWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userNestedInput = {
    create?: XOR<tbl_notificacaoCreateWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput, tbl_notificacaoUncheckedCreateWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput> | tbl_notificacaoCreateWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput[] | tbl_notificacaoUncheckedCreateWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput[]
    connectOrCreate?: tbl_notificacaoCreateOrConnectWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput | tbl_notificacaoCreateOrConnectWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput[]
    upsert?: tbl_notificacaoUpsertWithWhereUniqueWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput | tbl_notificacaoUpsertWithWhereUniqueWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput[]
    createMany?: tbl_notificacaoCreateManyTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInputEnvelope
    set?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
    disconnect?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
    delete?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
    connect?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
    update?: tbl_notificacaoUpdateWithWhereUniqueWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput | tbl_notificacaoUpdateWithWhereUniqueWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput[]
    updateMany?: tbl_notificacaoUpdateManyWithWhereWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput | tbl_notificacaoUpdateManyWithWhereWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput[]
    deleteMany?: tbl_notificacaoScalarWhereInput | tbl_notificacaoScalarWhereInput[]
  }

  export type tbl_publicacaoUncheckedUpdateManyWithoutTbl_userNestedInput = {
    create?: XOR<tbl_publicacaoCreateWithoutTbl_userInput, tbl_publicacaoUncheckedCreateWithoutTbl_userInput> | tbl_publicacaoCreateWithoutTbl_userInput[] | tbl_publicacaoUncheckedCreateWithoutTbl_userInput[]
    connectOrCreate?: tbl_publicacaoCreateOrConnectWithoutTbl_userInput | tbl_publicacaoCreateOrConnectWithoutTbl_userInput[]
    upsert?: tbl_publicacaoUpsertWithWhereUniqueWithoutTbl_userInput | tbl_publicacaoUpsertWithWhereUniqueWithoutTbl_userInput[]
    createMany?: tbl_publicacaoCreateManyTbl_userInputEnvelope
    set?: tbl_publicacaoWhereUniqueInput | tbl_publicacaoWhereUniqueInput[]
    disconnect?: tbl_publicacaoWhereUniqueInput | tbl_publicacaoWhereUniqueInput[]
    delete?: tbl_publicacaoWhereUniqueInput | tbl_publicacaoWhereUniqueInput[]
    connect?: tbl_publicacaoWhereUniqueInput | tbl_publicacaoWhereUniqueInput[]
    update?: tbl_publicacaoUpdateWithWhereUniqueWithoutTbl_userInput | tbl_publicacaoUpdateWithWhereUniqueWithoutTbl_userInput[]
    updateMany?: tbl_publicacaoUpdateManyWithWhereWithoutTbl_userInput | tbl_publicacaoUpdateManyWithWhereWithoutTbl_userInput[]
    deleteMany?: tbl_publicacaoScalarWhereInput | tbl_publicacaoScalarWhereInput[]
  }

  export type tbl_recuperacao_senhaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<tbl_recuperacao_senhaCreateWithoutUsuarioInput, tbl_recuperacao_senhaUncheckedCreateWithoutUsuarioInput> | tbl_recuperacao_senhaCreateWithoutUsuarioInput[] | tbl_recuperacao_senhaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: tbl_recuperacao_senhaCreateOrConnectWithoutUsuarioInput | tbl_recuperacao_senhaCreateOrConnectWithoutUsuarioInput[]
    upsert?: tbl_recuperacao_senhaUpsertWithWhereUniqueWithoutUsuarioInput | tbl_recuperacao_senhaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: tbl_recuperacao_senhaCreateManyUsuarioInputEnvelope
    set?: tbl_recuperacao_senhaWhereUniqueInput | tbl_recuperacao_senhaWhereUniqueInput[]
    disconnect?: tbl_recuperacao_senhaWhereUniqueInput | tbl_recuperacao_senhaWhereUniqueInput[]
    delete?: tbl_recuperacao_senhaWhereUniqueInput | tbl_recuperacao_senhaWhereUniqueInput[]
    connect?: tbl_recuperacao_senhaWhereUniqueInput | tbl_recuperacao_senhaWhereUniqueInput[]
    update?: tbl_recuperacao_senhaUpdateWithWhereUniqueWithoutUsuarioInput | tbl_recuperacao_senhaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: tbl_recuperacao_senhaUpdateManyWithWhereWithoutUsuarioInput | tbl_recuperacao_senhaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: tbl_recuperacao_senhaScalarWhereInput | tbl_recuperacao_senhaScalarWhereInput[]
  }

  export type tbl_treinoUncheckedUpdateManyWithoutTbl_userNestedInput = {
    create?: XOR<tbl_treinoCreateWithoutTbl_userInput, tbl_treinoUncheckedCreateWithoutTbl_userInput> | tbl_treinoCreateWithoutTbl_userInput[] | tbl_treinoUncheckedCreateWithoutTbl_userInput[]
    connectOrCreate?: tbl_treinoCreateOrConnectWithoutTbl_userInput | tbl_treinoCreateOrConnectWithoutTbl_userInput[]
    upsert?: tbl_treinoUpsertWithWhereUniqueWithoutTbl_userInput | tbl_treinoUpsertWithWhereUniqueWithoutTbl_userInput[]
    createMany?: tbl_treinoCreateManyTbl_userInputEnvelope
    set?: tbl_treinoWhereUniqueInput | tbl_treinoWhereUniqueInput[]
    disconnect?: tbl_treinoWhereUniqueInput | tbl_treinoWhereUniqueInput[]
    delete?: tbl_treinoWhereUniqueInput | tbl_treinoWhereUniqueInput[]
    connect?: tbl_treinoWhereUniqueInput | tbl_treinoWhereUniqueInput[]
    update?: tbl_treinoUpdateWithWhereUniqueWithoutTbl_userInput | tbl_treinoUpdateWithWhereUniqueWithoutTbl_userInput[]
    updateMany?: tbl_treinoUpdateManyWithWhereWithoutTbl_userInput | tbl_treinoUpdateManyWithWhereWithoutTbl_userInput[]
    deleteMany?: tbl_treinoScalarWhereInput | tbl_treinoScalarWhereInput[]
  }

  export type tbl_userCreateNestedOneWithoutRecuperacaoSenhaInput = {
    create?: XOR<tbl_userCreateWithoutRecuperacaoSenhaInput, tbl_userUncheckedCreateWithoutRecuperacaoSenhaInput>
    connectOrCreate?: tbl_userCreateOrConnectWithoutRecuperacaoSenhaInput
    connect?: tbl_userWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type tbl_userUpdateOneRequiredWithoutRecuperacaoSenhaNestedInput = {
    create?: XOR<tbl_userCreateWithoutRecuperacaoSenhaInput, tbl_userUncheckedCreateWithoutRecuperacaoSenhaInput>
    connectOrCreate?: tbl_userCreateOrConnectWithoutRecuperacaoSenhaInput
    upsert?: tbl_userUpsertWithoutRecuperacaoSenhaInput
    connect?: tbl_userWhereUniqueInput
    update?: XOR<XOR<tbl_userUpdateToOneWithWhereWithoutRecuperacaoSenhaInput, tbl_userUpdateWithoutRecuperacaoSenhaInput>, tbl_userUncheckedUpdateWithoutRecuperacaoSenhaInput>
  }

  export type tbl_publicacaoCreateNestedOneWithoutTbl_comentarioInput = {
    create?: XOR<tbl_publicacaoCreateWithoutTbl_comentarioInput, tbl_publicacaoUncheckedCreateWithoutTbl_comentarioInput>
    connectOrCreate?: tbl_publicacaoCreateOrConnectWithoutTbl_comentarioInput
    connect?: tbl_publicacaoWhereUniqueInput
  }

  export type tbl_userCreateNestedOneWithoutTbl_comentarioInput = {
    create?: XOR<tbl_userCreateWithoutTbl_comentarioInput, tbl_userUncheckedCreateWithoutTbl_comentarioInput>
    connectOrCreate?: tbl_userCreateOrConnectWithoutTbl_comentarioInput
    connect?: tbl_userWhereUniqueInput
  }

  export type tbl_curtida_comentarioCreateNestedManyWithoutTbl_comentarioInput = {
    create?: XOR<tbl_curtida_comentarioCreateWithoutTbl_comentarioInput, tbl_curtida_comentarioUncheckedCreateWithoutTbl_comentarioInput> | tbl_curtida_comentarioCreateWithoutTbl_comentarioInput[] | tbl_curtida_comentarioUncheckedCreateWithoutTbl_comentarioInput[]
    connectOrCreate?: tbl_curtida_comentarioCreateOrConnectWithoutTbl_comentarioInput | tbl_curtida_comentarioCreateOrConnectWithoutTbl_comentarioInput[]
    createMany?: tbl_curtida_comentarioCreateManyTbl_comentarioInputEnvelope
    connect?: tbl_curtida_comentarioWhereUniqueInput | tbl_curtida_comentarioWhereUniqueInput[]
  }

  export type tbl_notificacaoCreateNestedManyWithoutTbl_comentarioInput = {
    create?: XOR<tbl_notificacaoCreateWithoutTbl_comentarioInput, tbl_notificacaoUncheckedCreateWithoutTbl_comentarioInput> | tbl_notificacaoCreateWithoutTbl_comentarioInput[] | tbl_notificacaoUncheckedCreateWithoutTbl_comentarioInput[]
    connectOrCreate?: tbl_notificacaoCreateOrConnectWithoutTbl_comentarioInput | tbl_notificacaoCreateOrConnectWithoutTbl_comentarioInput[]
    createMany?: tbl_notificacaoCreateManyTbl_comentarioInputEnvelope
    connect?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
  }

  export type tbl_curtida_comentarioUncheckedCreateNestedManyWithoutTbl_comentarioInput = {
    create?: XOR<tbl_curtida_comentarioCreateWithoutTbl_comentarioInput, tbl_curtida_comentarioUncheckedCreateWithoutTbl_comentarioInput> | tbl_curtida_comentarioCreateWithoutTbl_comentarioInput[] | tbl_curtida_comentarioUncheckedCreateWithoutTbl_comentarioInput[]
    connectOrCreate?: tbl_curtida_comentarioCreateOrConnectWithoutTbl_comentarioInput | tbl_curtida_comentarioCreateOrConnectWithoutTbl_comentarioInput[]
    createMany?: tbl_curtida_comentarioCreateManyTbl_comentarioInputEnvelope
    connect?: tbl_curtida_comentarioWhereUniqueInput | tbl_curtida_comentarioWhereUniqueInput[]
  }

  export type tbl_notificacaoUncheckedCreateNestedManyWithoutTbl_comentarioInput = {
    create?: XOR<tbl_notificacaoCreateWithoutTbl_comentarioInput, tbl_notificacaoUncheckedCreateWithoutTbl_comentarioInput> | tbl_notificacaoCreateWithoutTbl_comentarioInput[] | tbl_notificacaoUncheckedCreateWithoutTbl_comentarioInput[]
    connectOrCreate?: tbl_notificacaoCreateOrConnectWithoutTbl_comentarioInput | tbl_notificacaoCreateOrConnectWithoutTbl_comentarioInput[]
    createMany?: tbl_notificacaoCreateManyTbl_comentarioInputEnvelope
    connect?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type tbl_publicacaoUpdateOneRequiredWithoutTbl_comentarioNestedInput = {
    create?: XOR<tbl_publicacaoCreateWithoutTbl_comentarioInput, tbl_publicacaoUncheckedCreateWithoutTbl_comentarioInput>
    connectOrCreate?: tbl_publicacaoCreateOrConnectWithoutTbl_comentarioInput
    upsert?: tbl_publicacaoUpsertWithoutTbl_comentarioInput
    connect?: tbl_publicacaoWhereUniqueInput
    update?: XOR<XOR<tbl_publicacaoUpdateToOneWithWhereWithoutTbl_comentarioInput, tbl_publicacaoUpdateWithoutTbl_comentarioInput>, tbl_publicacaoUncheckedUpdateWithoutTbl_comentarioInput>
  }

  export type tbl_userUpdateOneRequiredWithoutTbl_comentarioNestedInput = {
    create?: XOR<tbl_userCreateWithoutTbl_comentarioInput, tbl_userUncheckedCreateWithoutTbl_comentarioInput>
    connectOrCreate?: tbl_userCreateOrConnectWithoutTbl_comentarioInput
    upsert?: tbl_userUpsertWithoutTbl_comentarioInput
    connect?: tbl_userWhereUniqueInput
    update?: XOR<XOR<tbl_userUpdateToOneWithWhereWithoutTbl_comentarioInput, tbl_userUpdateWithoutTbl_comentarioInput>, tbl_userUncheckedUpdateWithoutTbl_comentarioInput>
  }

  export type tbl_curtida_comentarioUpdateManyWithoutTbl_comentarioNestedInput = {
    create?: XOR<tbl_curtida_comentarioCreateWithoutTbl_comentarioInput, tbl_curtida_comentarioUncheckedCreateWithoutTbl_comentarioInput> | tbl_curtida_comentarioCreateWithoutTbl_comentarioInput[] | tbl_curtida_comentarioUncheckedCreateWithoutTbl_comentarioInput[]
    connectOrCreate?: tbl_curtida_comentarioCreateOrConnectWithoutTbl_comentarioInput | tbl_curtida_comentarioCreateOrConnectWithoutTbl_comentarioInput[]
    upsert?: tbl_curtida_comentarioUpsertWithWhereUniqueWithoutTbl_comentarioInput | tbl_curtida_comentarioUpsertWithWhereUniqueWithoutTbl_comentarioInput[]
    createMany?: tbl_curtida_comentarioCreateManyTbl_comentarioInputEnvelope
    set?: tbl_curtida_comentarioWhereUniqueInput | tbl_curtida_comentarioWhereUniqueInput[]
    disconnect?: tbl_curtida_comentarioWhereUniqueInput | tbl_curtida_comentarioWhereUniqueInput[]
    delete?: tbl_curtida_comentarioWhereUniqueInput | tbl_curtida_comentarioWhereUniqueInput[]
    connect?: tbl_curtida_comentarioWhereUniqueInput | tbl_curtida_comentarioWhereUniqueInput[]
    update?: tbl_curtida_comentarioUpdateWithWhereUniqueWithoutTbl_comentarioInput | tbl_curtida_comentarioUpdateWithWhereUniqueWithoutTbl_comentarioInput[]
    updateMany?: tbl_curtida_comentarioUpdateManyWithWhereWithoutTbl_comentarioInput | tbl_curtida_comentarioUpdateManyWithWhereWithoutTbl_comentarioInput[]
    deleteMany?: tbl_curtida_comentarioScalarWhereInput | tbl_curtida_comentarioScalarWhereInput[]
  }

  export type tbl_notificacaoUpdateManyWithoutTbl_comentarioNestedInput = {
    create?: XOR<tbl_notificacaoCreateWithoutTbl_comentarioInput, tbl_notificacaoUncheckedCreateWithoutTbl_comentarioInput> | tbl_notificacaoCreateWithoutTbl_comentarioInput[] | tbl_notificacaoUncheckedCreateWithoutTbl_comentarioInput[]
    connectOrCreate?: tbl_notificacaoCreateOrConnectWithoutTbl_comentarioInput | tbl_notificacaoCreateOrConnectWithoutTbl_comentarioInput[]
    upsert?: tbl_notificacaoUpsertWithWhereUniqueWithoutTbl_comentarioInput | tbl_notificacaoUpsertWithWhereUniqueWithoutTbl_comentarioInput[]
    createMany?: tbl_notificacaoCreateManyTbl_comentarioInputEnvelope
    set?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
    disconnect?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
    delete?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
    connect?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
    update?: tbl_notificacaoUpdateWithWhereUniqueWithoutTbl_comentarioInput | tbl_notificacaoUpdateWithWhereUniqueWithoutTbl_comentarioInput[]
    updateMany?: tbl_notificacaoUpdateManyWithWhereWithoutTbl_comentarioInput | tbl_notificacaoUpdateManyWithWhereWithoutTbl_comentarioInput[]
    deleteMany?: tbl_notificacaoScalarWhereInput | tbl_notificacaoScalarWhereInput[]
  }

  export type tbl_curtida_comentarioUncheckedUpdateManyWithoutTbl_comentarioNestedInput = {
    create?: XOR<tbl_curtida_comentarioCreateWithoutTbl_comentarioInput, tbl_curtida_comentarioUncheckedCreateWithoutTbl_comentarioInput> | tbl_curtida_comentarioCreateWithoutTbl_comentarioInput[] | tbl_curtida_comentarioUncheckedCreateWithoutTbl_comentarioInput[]
    connectOrCreate?: tbl_curtida_comentarioCreateOrConnectWithoutTbl_comentarioInput | tbl_curtida_comentarioCreateOrConnectWithoutTbl_comentarioInput[]
    upsert?: tbl_curtida_comentarioUpsertWithWhereUniqueWithoutTbl_comentarioInput | tbl_curtida_comentarioUpsertWithWhereUniqueWithoutTbl_comentarioInput[]
    createMany?: tbl_curtida_comentarioCreateManyTbl_comentarioInputEnvelope
    set?: tbl_curtida_comentarioWhereUniqueInput | tbl_curtida_comentarioWhereUniqueInput[]
    disconnect?: tbl_curtida_comentarioWhereUniqueInput | tbl_curtida_comentarioWhereUniqueInput[]
    delete?: tbl_curtida_comentarioWhereUniqueInput | tbl_curtida_comentarioWhereUniqueInput[]
    connect?: tbl_curtida_comentarioWhereUniqueInput | tbl_curtida_comentarioWhereUniqueInput[]
    update?: tbl_curtida_comentarioUpdateWithWhereUniqueWithoutTbl_comentarioInput | tbl_curtida_comentarioUpdateWithWhereUniqueWithoutTbl_comentarioInput[]
    updateMany?: tbl_curtida_comentarioUpdateManyWithWhereWithoutTbl_comentarioInput | tbl_curtida_comentarioUpdateManyWithWhereWithoutTbl_comentarioInput[]
    deleteMany?: tbl_curtida_comentarioScalarWhereInput | tbl_curtida_comentarioScalarWhereInput[]
  }

  export type tbl_notificacaoUncheckedUpdateManyWithoutTbl_comentarioNestedInput = {
    create?: XOR<tbl_notificacaoCreateWithoutTbl_comentarioInput, tbl_notificacaoUncheckedCreateWithoutTbl_comentarioInput> | tbl_notificacaoCreateWithoutTbl_comentarioInput[] | tbl_notificacaoUncheckedCreateWithoutTbl_comentarioInput[]
    connectOrCreate?: tbl_notificacaoCreateOrConnectWithoutTbl_comentarioInput | tbl_notificacaoCreateOrConnectWithoutTbl_comentarioInput[]
    upsert?: tbl_notificacaoUpsertWithWhereUniqueWithoutTbl_comentarioInput | tbl_notificacaoUpsertWithWhereUniqueWithoutTbl_comentarioInput[]
    createMany?: tbl_notificacaoCreateManyTbl_comentarioInputEnvelope
    set?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
    disconnect?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
    delete?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
    connect?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
    update?: tbl_notificacaoUpdateWithWhereUniqueWithoutTbl_comentarioInput | tbl_notificacaoUpdateWithWhereUniqueWithoutTbl_comentarioInput[]
    updateMany?: tbl_notificacaoUpdateManyWithWhereWithoutTbl_comentarioInput | tbl_notificacaoUpdateManyWithWhereWithoutTbl_comentarioInput[]
    deleteMany?: tbl_notificacaoScalarWhereInput | tbl_notificacaoScalarWhereInput[]
  }

  export type tbl_publicacaoCreateNestedOneWithoutTbl_curtidaInput = {
    create?: XOR<tbl_publicacaoCreateWithoutTbl_curtidaInput, tbl_publicacaoUncheckedCreateWithoutTbl_curtidaInput>
    connectOrCreate?: tbl_publicacaoCreateOrConnectWithoutTbl_curtidaInput
    connect?: tbl_publicacaoWhereUniqueInput
  }

  export type tbl_userCreateNestedOneWithoutTbl_curtidaInput = {
    create?: XOR<tbl_userCreateWithoutTbl_curtidaInput, tbl_userUncheckedCreateWithoutTbl_curtidaInput>
    connectOrCreate?: tbl_userCreateOrConnectWithoutTbl_curtidaInput
    connect?: tbl_userWhereUniqueInput
  }

  export type tbl_notificacaoCreateNestedManyWithoutTbl_curtidaInput = {
    create?: XOR<tbl_notificacaoCreateWithoutTbl_curtidaInput, tbl_notificacaoUncheckedCreateWithoutTbl_curtidaInput> | tbl_notificacaoCreateWithoutTbl_curtidaInput[] | tbl_notificacaoUncheckedCreateWithoutTbl_curtidaInput[]
    connectOrCreate?: tbl_notificacaoCreateOrConnectWithoutTbl_curtidaInput | tbl_notificacaoCreateOrConnectWithoutTbl_curtidaInput[]
    createMany?: tbl_notificacaoCreateManyTbl_curtidaInputEnvelope
    connect?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
  }

  export type tbl_notificacaoUncheckedCreateNestedManyWithoutTbl_curtidaInput = {
    create?: XOR<tbl_notificacaoCreateWithoutTbl_curtidaInput, tbl_notificacaoUncheckedCreateWithoutTbl_curtidaInput> | tbl_notificacaoCreateWithoutTbl_curtidaInput[] | tbl_notificacaoUncheckedCreateWithoutTbl_curtidaInput[]
    connectOrCreate?: tbl_notificacaoCreateOrConnectWithoutTbl_curtidaInput | tbl_notificacaoCreateOrConnectWithoutTbl_curtidaInput[]
    createMany?: tbl_notificacaoCreateManyTbl_curtidaInputEnvelope
    connect?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
  }

  export type tbl_publicacaoUpdateOneRequiredWithoutTbl_curtidaNestedInput = {
    create?: XOR<tbl_publicacaoCreateWithoutTbl_curtidaInput, tbl_publicacaoUncheckedCreateWithoutTbl_curtidaInput>
    connectOrCreate?: tbl_publicacaoCreateOrConnectWithoutTbl_curtidaInput
    upsert?: tbl_publicacaoUpsertWithoutTbl_curtidaInput
    connect?: tbl_publicacaoWhereUniqueInput
    update?: XOR<XOR<tbl_publicacaoUpdateToOneWithWhereWithoutTbl_curtidaInput, tbl_publicacaoUpdateWithoutTbl_curtidaInput>, tbl_publicacaoUncheckedUpdateWithoutTbl_curtidaInput>
  }

  export type tbl_userUpdateOneRequiredWithoutTbl_curtidaNestedInput = {
    create?: XOR<tbl_userCreateWithoutTbl_curtidaInput, tbl_userUncheckedCreateWithoutTbl_curtidaInput>
    connectOrCreate?: tbl_userCreateOrConnectWithoutTbl_curtidaInput
    upsert?: tbl_userUpsertWithoutTbl_curtidaInput
    connect?: tbl_userWhereUniqueInput
    update?: XOR<XOR<tbl_userUpdateToOneWithWhereWithoutTbl_curtidaInput, tbl_userUpdateWithoutTbl_curtidaInput>, tbl_userUncheckedUpdateWithoutTbl_curtidaInput>
  }

  export type tbl_notificacaoUpdateManyWithoutTbl_curtidaNestedInput = {
    create?: XOR<tbl_notificacaoCreateWithoutTbl_curtidaInput, tbl_notificacaoUncheckedCreateWithoutTbl_curtidaInput> | tbl_notificacaoCreateWithoutTbl_curtidaInput[] | tbl_notificacaoUncheckedCreateWithoutTbl_curtidaInput[]
    connectOrCreate?: tbl_notificacaoCreateOrConnectWithoutTbl_curtidaInput | tbl_notificacaoCreateOrConnectWithoutTbl_curtidaInput[]
    upsert?: tbl_notificacaoUpsertWithWhereUniqueWithoutTbl_curtidaInput | tbl_notificacaoUpsertWithWhereUniqueWithoutTbl_curtidaInput[]
    createMany?: tbl_notificacaoCreateManyTbl_curtidaInputEnvelope
    set?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
    disconnect?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
    delete?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
    connect?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
    update?: tbl_notificacaoUpdateWithWhereUniqueWithoutTbl_curtidaInput | tbl_notificacaoUpdateWithWhereUniqueWithoutTbl_curtidaInput[]
    updateMany?: tbl_notificacaoUpdateManyWithWhereWithoutTbl_curtidaInput | tbl_notificacaoUpdateManyWithWhereWithoutTbl_curtidaInput[]
    deleteMany?: tbl_notificacaoScalarWhereInput | tbl_notificacaoScalarWhereInput[]
  }

  export type tbl_notificacaoUncheckedUpdateManyWithoutTbl_curtidaNestedInput = {
    create?: XOR<tbl_notificacaoCreateWithoutTbl_curtidaInput, tbl_notificacaoUncheckedCreateWithoutTbl_curtidaInput> | tbl_notificacaoCreateWithoutTbl_curtidaInput[] | tbl_notificacaoUncheckedCreateWithoutTbl_curtidaInput[]
    connectOrCreate?: tbl_notificacaoCreateOrConnectWithoutTbl_curtidaInput | tbl_notificacaoCreateOrConnectWithoutTbl_curtidaInput[]
    upsert?: tbl_notificacaoUpsertWithWhereUniqueWithoutTbl_curtidaInput | tbl_notificacaoUpsertWithWhereUniqueWithoutTbl_curtidaInput[]
    createMany?: tbl_notificacaoCreateManyTbl_curtidaInputEnvelope
    set?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
    disconnect?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
    delete?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
    connect?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
    update?: tbl_notificacaoUpdateWithWhereUniqueWithoutTbl_curtidaInput | tbl_notificacaoUpdateWithWhereUniqueWithoutTbl_curtidaInput[]
    updateMany?: tbl_notificacaoUpdateManyWithWhereWithoutTbl_curtidaInput | tbl_notificacaoUpdateManyWithWhereWithoutTbl_curtidaInput[]
    deleteMany?: tbl_notificacaoScalarWhereInput | tbl_notificacaoScalarWhereInput[]
  }

  export type tbl_comentarioCreateNestedOneWithoutTbl_curtida_comentarioInput = {
    create?: XOR<tbl_comentarioCreateWithoutTbl_curtida_comentarioInput, tbl_comentarioUncheckedCreateWithoutTbl_curtida_comentarioInput>
    connectOrCreate?: tbl_comentarioCreateOrConnectWithoutTbl_curtida_comentarioInput
    connect?: tbl_comentarioWhereUniqueInput
  }

  export type tbl_userCreateNestedOneWithoutTbl_curtida_comentarioInput = {
    create?: XOR<tbl_userCreateWithoutTbl_curtida_comentarioInput, tbl_userUncheckedCreateWithoutTbl_curtida_comentarioInput>
    connectOrCreate?: tbl_userCreateOrConnectWithoutTbl_curtida_comentarioInput
    connect?: tbl_userWhereUniqueInput
  }

  export type tbl_notificacaoCreateNestedManyWithoutTbl_curtida_comentarioInput = {
    create?: XOR<tbl_notificacaoCreateWithoutTbl_curtida_comentarioInput, tbl_notificacaoUncheckedCreateWithoutTbl_curtida_comentarioInput> | tbl_notificacaoCreateWithoutTbl_curtida_comentarioInput[] | tbl_notificacaoUncheckedCreateWithoutTbl_curtida_comentarioInput[]
    connectOrCreate?: tbl_notificacaoCreateOrConnectWithoutTbl_curtida_comentarioInput | tbl_notificacaoCreateOrConnectWithoutTbl_curtida_comentarioInput[]
    createMany?: tbl_notificacaoCreateManyTbl_curtida_comentarioInputEnvelope
    connect?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
  }

  export type tbl_notificacaoUncheckedCreateNestedManyWithoutTbl_curtida_comentarioInput = {
    create?: XOR<tbl_notificacaoCreateWithoutTbl_curtida_comentarioInput, tbl_notificacaoUncheckedCreateWithoutTbl_curtida_comentarioInput> | tbl_notificacaoCreateWithoutTbl_curtida_comentarioInput[] | tbl_notificacaoUncheckedCreateWithoutTbl_curtida_comentarioInput[]
    connectOrCreate?: tbl_notificacaoCreateOrConnectWithoutTbl_curtida_comentarioInput | tbl_notificacaoCreateOrConnectWithoutTbl_curtida_comentarioInput[]
    createMany?: tbl_notificacaoCreateManyTbl_curtida_comentarioInputEnvelope
    connect?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
  }

  export type tbl_comentarioUpdateOneRequiredWithoutTbl_curtida_comentarioNestedInput = {
    create?: XOR<tbl_comentarioCreateWithoutTbl_curtida_comentarioInput, tbl_comentarioUncheckedCreateWithoutTbl_curtida_comentarioInput>
    connectOrCreate?: tbl_comentarioCreateOrConnectWithoutTbl_curtida_comentarioInput
    upsert?: tbl_comentarioUpsertWithoutTbl_curtida_comentarioInput
    connect?: tbl_comentarioWhereUniqueInput
    update?: XOR<XOR<tbl_comentarioUpdateToOneWithWhereWithoutTbl_curtida_comentarioInput, tbl_comentarioUpdateWithoutTbl_curtida_comentarioInput>, tbl_comentarioUncheckedUpdateWithoutTbl_curtida_comentarioInput>
  }

  export type tbl_userUpdateOneRequiredWithoutTbl_curtida_comentarioNestedInput = {
    create?: XOR<tbl_userCreateWithoutTbl_curtida_comentarioInput, tbl_userUncheckedCreateWithoutTbl_curtida_comentarioInput>
    connectOrCreate?: tbl_userCreateOrConnectWithoutTbl_curtida_comentarioInput
    upsert?: tbl_userUpsertWithoutTbl_curtida_comentarioInput
    connect?: tbl_userWhereUniqueInput
    update?: XOR<XOR<tbl_userUpdateToOneWithWhereWithoutTbl_curtida_comentarioInput, tbl_userUpdateWithoutTbl_curtida_comentarioInput>, tbl_userUncheckedUpdateWithoutTbl_curtida_comentarioInput>
  }

  export type tbl_notificacaoUpdateManyWithoutTbl_curtida_comentarioNestedInput = {
    create?: XOR<tbl_notificacaoCreateWithoutTbl_curtida_comentarioInput, tbl_notificacaoUncheckedCreateWithoutTbl_curtida_comentarioInput> | tbl_notificacaoCreateWithoutTbl_curtida_comentarioInput[] | tbl_notificacaoUncheckedCreateWithoutTbl_curtida_comentarioInput[]
    connectOrCreate?: tbl_notificacaoCreateOrConnectWithoutTbl_curtida_comentarioInput | tbl_notificacaoCreateOrConnectWithoutTbl_curtida_comentarioInput[]
    upsert?: tbl_notificacaoUpsertWithWhereUniqueWithoutTbl_curtida_comentarioInput | tbl_notificacaoUpsertWithWhereUniqueWithoutTbl_curtida_comentarioInput[]
    createMany?: tbl_notificacaoCreateManyTbl_curtida_comentarioInputEnvelope
    set?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
    disconnect?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
    delete?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
    connect?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
    update?: tbl_notificacaoUpdateWithWhereUniqueWithoutTbl_curtida_comentarioInput | tbl_notificacaoUpdateWithWhereUniqueWithoutTbl_curtida_comentarioInput[]
    updateMany?: tbl_notificacaoUpdateManyWithWhereWithoutTbl_curtida_comentarioInput | tbl_notificacaoUpdateManyWithWhereWithoutTbl_curtida_comentarioInput[]
    deleteMany?: tbl_notificacaoScalarWhereInput | tbl_notificacaoScalarWhereInput[]
  }

  export type tbl_notificacaoUncheckedUpdateManyWithoutTbl_curtida_comentarioNestedInput = {
    create?: XOR<tbl_notificacaoCreateWithoutTbl_curtida_comentarioInput, tbl_notificacaoUncheckedCreateWithoutTbl_curtida_comentarioInput> | tbl_notificacaoCreateWithoutTbl_curtida_comentarioInput[] | tbl_notificacaoUncheckedCreateWithoutTbl_curtida_comentarioInput[]
    connectOrCreate?: tbl_notificacaoCreateOrConnectWithoutTbl_curtida_comentarioInput | tbl_notificacaoCreateOrConnectWithoutTbl_curtida_comentarioInput[]
    upsert?: tbl_notificacaoUpsertWithWhereUniqueWithoutTbl_curtida_comentarioInput | tbl_notificacaoUpsertWithWhereUniqueWithoutTbl_curtida_comentarioInput[]
    createMany?: tbl_notificacaoCreateManyTbl_curtida_comentarioInputEnvelope
    set?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
    disconnect?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
    delete?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
    connect?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
    update?: tbl_notificacaoUpdateWithWhereUniqueWithoutTbl_curtida_comentarioInput | tbl_notificacaoUpdateWithWhereUniqueWithoutTbl_curtida_comentarioInput[]
    updateMany?: tbl_notificacaoUpdateManyWithWhereWithoutTbl_curtida_comentarioInput | tbl_notificacaoUpdateManyWithWhereWithoutTbl_curtida_comentarioInput[]
    deleteMany?: tbl_notificacaoScalarWhereInput | tbl_notificacaoScalarWhereInput[]
  }

  export type tbl_exercicio_treinoCreateNestedManyWithoutTbl_exercicioInput = {
    create?: XOR<tbl_exercicio_treinoCreateWithoutTbl_exercicioInput, tbl_exercicio_treinoUncheckedCreateWithoutTbl_exercicioInput> | tbl_exercicio_treinoCreateWithoutTbl_exercicioInput[] | tbl_exercicio_treinoUncheckedCreateWithoutTbl_exercicioInput[]
    connectOrCreate?: tbl_exercicio_treinoCreateOrConnectWithoutTbl_exercicioInput | tbl_exercicio_treinoCreateOrConnectWithoutTbl_exercicioInput[]
    createMany?: tbl_exercicio_treinoCreateManyTbl_exercicioInputEnvelope
    connect?: tbl_exercicio_treinoWhereUniqueInput | tbl_exercicio_treinoWhereUniqueInput[]
  }

  export type tbl_serieCreateNestedManyWithoutTbl_exercicioInput = {
    create?: XOR<tbl_serieCreateWithoutTbl_exercicioInput, tbl_serieUncheckedCreateWithoutTbl_exercicioInput> | tbl_serieCreateWithoutTbl_exercicioInput[] | tbl_serieUncheckedCreateWithoutTbl_exercicioInput[]
    connectOrCreate?: tbl_serieCreateOrConnectWithoutTbl_exercicioInput | tbl_serieCreateOrConnectWithoutTbl_exercicioInput[]
    createMany?: tbl_serieCreateManyTbl_exercicioInputEnvelope
    connect?: tbl_serieWhereUniqueInput | tbl_serieWhereUniqueInput[]
  }

  export type tbl_exercicio_treinoUncheckedCreateNestedManyWithoutTbl_exercicioInput = {
    create?: XOR<tbl_exercicio_treinoCreateWithoutTbl_exercicioInput, tbl_exercicio_treinoUncheckedCreateWithoutTbl_exercicioInput> | tbl_exercicio_treinoCreateWithoutTbl_exercicioInput[] | tbl_exercicio_treinoUncheckedCreateWithoutTbl_exercicioInput[]
    connectOrCreate?: tbl_exercicio_treinoCreateOrConnectWithoutTbl_exercicioInput | tbl_exercicio_treinoCreateOrConnectWithoutTbl_exercicioInput[]
    createMany?: tbl_exercicio_treinoCreateManyTbl_exercicioInputEnvelope
    connect?: tbl_exercicio_treinoWhereUniqueInput | tbl_exercicio_treinoWhereUniqueInput[]
  }

  export type tbl_serieUncheckedCreateNestedManyWithoutTbl_exercicioInput = {
    create?: XOR<tbl_serieCreateWithoutTbl_exercicioInput, tbl_serieUncheckedCreateWithoutTbl_exercicioInput> | tbl_serieCreateWithoutTbl_exercicioInput[] | tbl_serieUncheckedCreateWithoutTbl_exercicioInput[]
    connectOrCreate?: tbl_serieCreateOrConnectWithoutTbl_exercicioInput | tbl_serieCreateOrConnectWithoutTbl_exercicioInput[]
    createMany?: tbl_serieCreateManyTbl_exercicioInputEnvelope
    connect?: tbl_serieWhereUniqueInput | tbl_serieWhereUniqueInput[]
  }

  export type tbl_exercicio_treinoUpdateManyWithoutTbl_exercicioNestedInput = {
    create?: XOR<tbl_exercicio_treinoCreateWithoutTbl_exercicioInput, tbl_exercicio_treinoUncheckedCreateWithoutTbl_exercicioInput> | tbl_exercicio_treinoCreateWithoutTbl_exercicioInput[] | tbl_exercicio_treinoUncheckedCreateWithoutTbl_exercicioInput[]
    connectOrCreate?: tbl_exercicio_treinoCreateOrConnectWithoutTbl_exercicioInput | tbl_exercicio_treinoCreateOrConnectWithoutTbl_exercicioInput[]
    upsert?: tbl_exercicio_treinoUpsertWithWhereUniqueWithoutTbl_exercicioInput | tbl_exercicio_treinoUpsertWithWhereUniqueWithoutTbl_exercicioInput[]
    createMany?: tbl_exercicio_treinoCreateManyTbl_exercicioInputEnvelope
    set?: tbl_exercicio_treinoWhereUniqueInput | tbl_exercicio_treinoWhereUniqueInput[]
    disconnect?: tbl_exercicio_treinoWhereUniqueInput | tbl_exercicio_treinoWhereUniqueInput[]
    delete?: tbl_exercicio_treinoWhereUniqueInput | tbl_exercicio_treinoWhereUniqueInput[]
    connect?: tbl_exercicio_treinoWhereUniqueInput | tbl_exercicio_treinoWhereUniqueInput[]
    update?: tbl_exercicio_treinoUpdateWithWhereUniqueWithoutTbl_exercicioInput | tbl_exercicio_treinoUpdateWithWhereUniqueWithoutTbl_exercicioInput[]
    updateMany?: tbl_exercicio_treinoUpdateManyWithWhereWithoutTbl_exercicioInput | tbl_exercicio_treinoUpdateManyWithWhereWithoutTbl_exercicioInput[]
    deleteMany?: tbl_exercicio_treinoScalarWhereInput | tbl_exercicio_treinoScalarWhereInput[]
  }

  export type tbl_serieUpdateManyWithoutTbl_exercicioNestedInput = {
    create?: XOR<tbl_serieCreateWithoutTbl_exercicioInput, tbl_serieUncheckedCreateWithoutTbl_exercicioInput> | tbl_serieCreateWithoutTbl_exercicioInput[] | tbl_serieUncheckedCreateWithoutTbl_exercicioInput[]
    connectOrCreate?: tbl_serieCreateOrConnectWithoutTbl_exercicioInput | tbl_serieCreateOrConnectWithoutTbl_exercicioInput[]
    upsert?: tbl_serieUpsertWithWhereUniqueWithoutTbl_exercicioInput | tbl_serieUpsertWithWhereUniqueWithoutTbl_exercicioInput[]
    createMany?: tbl_serieCreateManyTbl_exercicioInputEnvelope
    set?: tbl_serieWhereUniqueInput | tbl_serieWhereUniqueInput[]
    disconnect?: tbl_serieWhereUniqueInput | tbl_serieWhereUniqueInput[]
    delete?: tbl_serieWhereUniqueInput | tbl_serieWhereUniqueInput[]
    connect?: tbl_serieWhereUniqueInput | tbl_serieWhereUniqueInput[]
    update?: tbl_serieUpdateWithWhereUniqueWithoutTbl_exercicioInput | tbl_serieUpdateWithWhereUniqueWithoutTbl_exercicioInput[]
    updateMany?: tbl_serieUpdateManyWithWhereWithoutTbl_exercicioInput | tbl_serieUpdateManyWithWhereWithoutTbl_exercicioInput[]
    deleteMany?: tbl_serieScalarWhereInput | tbl_serieScalarWhereInput[]
  }

  export type tbl_exercicio_treinoUncheckedUpdateManyWithoutTbl_exercicioNestedInput = {
    create?: XOR<tbl_exercicio_treinoCreateWithoutTbl_exercicioInput, tbl_exercicio_treinoUncheckedCreateWithoutTbl_exercicioInput> | tbl_exercicio_treinoCreateWithoutTbl_exercicioInput[] | tbl_exercicio_treinoUncheckedCreateWithoutTbl_exercicioInput[]
    connectOrCreate?: tbl_exercicio_treinoCreateOrConnectWithoutTbl_exercicioInput | tbl_exercicio_treinoCreateOrConnectWithoutTbl_exercicioInput[]
    upsert?: tbl_exercicio_treinoUpsertWithWhereUniqueWithoutTbl_exercicioInput | tbl_exercicio_treinoUpsertWithWhereUniqueWithoutTbl_exercicioInput[]
    createMany?: tbl_exercicio_treinoCreateManyTbl_exercicioInputEnvelope
    set?: tbl_exercicio_treinoWhereUniqueInput | tbl_exercicio_treinoWhereUniqueInput[]
    disconnect?: tbl_exercicio_treinoWhereUniqueInput | tbl_exercicio_treinoWhereUniqueInput[]
    delete?: tbl_exercicio_treinoWhereUniqueInput | tbl_exercicio_treinoWhereUniqueInput[]
    connect?: tbl_exercicio_treinoWhereUniqueInput | tbl_exercicio_treinoWhereUniqueInput[]
    update?: tbl_exercicio_treinoUpdateWithWhereUniqueWithoutTbl_exercicioInput | tbl_exercicio_treinoUpdateWithWhereUniqueWithoutTbl_exercicioInput[]
    updateMany?: tbl_exercicio_treinoUpdateManyWithWhereWithoutTbl_exercicioInput | tbl_exercicio_treinoUpdateManyWithWhereWithoutTbl_exercicioInput[]
    deleteMany?: tbl_exercicio_treinoScalarWhereInput | tbl_exercicio_treinoScalarWhereInput[]
  }

  export type tbl_serieUncheckedUpdateManyWithoutTbl_exercicioNestedInput = {
    create?: XOR<tbl_serieCreateWithoutTbl_exercicioInput, tbl_serieUncheckedCreateWithoutTbl_exercicioInput> | tbl_serieCreateWithoutTbl_exercicioInput[] | tbl_serieUncheckedCreateWithoutTbl_exercicioInput[]
    connectOrCreate?: tbl_serieCreateOrConnectWithoutTbl_exercicioInput | tbl_serieCreateOrConnectWithoutTbl_exercicioInput[]
    upsert?: tbl_serieUpsertWithWhereUniqueWithoutTbl_exercicioInput | tbl_serieUpsertWithWhereUniqueWithoutTbl_exercicioInput[]
    createMany?: tbl_serieCreateManyTbl_exercicioInputEnvelope
    set?: tbl_serieWhereUniqueInput | tbl_serieWhereUniqueInput[]
    disconnect?: tbl_serieWhereUniqueInput | tbl_serieWhereUniqueInput[]
    delete?: tbl_serieWhereUniqueInput | tbl_serieWhereUniqueInput[]
    connect?: tbl_serieWhereUniqueInput | tbl_serieWhereUniqueInput[]
    update?: tbl_serieUpdateWithWhereUniqueWithoutTbl_exercicioInput | tbl_serieUpdateWithWhereUniqueWithoutTbl_exercicioInput[]
    updateMany?: tbl_serieUpdateManyWithWhereWithoutTbl_exercicioInput | tbl_serieUpdateManyWithWhereWithoutTbl_exercicioInput[]
    deleteMany?: tbl_serieScalarWhereInput | tbl_serieScalarWhereInput[]
  }

  export type tbl_treinoCreateNestedOneWithoutTbl_exercicio_treinoInput = {
    create?: XOR<tbl_treinoCreateWithoutTbl_exercicio_treinoInput, tbl_treinoUncheckedCreateWithoutTbl_exercicio_treinoInput>
    connectOrCreate?: tbl_treinoCreateOrConnectWithoutTbl_exercicio_treinoInput
    connect?: tbl_treinoWhereUniqueInput
  }

  export type tbl_exercicioCreateNestedOneWithoutTbl_exercicio_treinoInput = {
    create?: XOR<tbl_exercicioCreateWithoutTbl_exercicio_treinoInput, tbl_exercicioUncheckedCreateWithoutTbl_exercicio_treinoInput>
    connectOrCreate?: tbl_exercicioCreateOrConnectWithoutTbl_exercicio_treinoInput
    connect?: tbl_exercicioWhereUniqueInput
  }

  export type tbl_serieCreateNestedOneWithoutTbl_exercicio_treinoInput = {
    create?: XOR<tbl_serieCreateWithoutTbl_exercicio_treinoInput, tbl_serieUncheckedCreateWithoutTbl_exercicio_treinoInput>
    connectOrCreate?: tbl_serieCreateOrConnectWithoutTbl_exercicio_treinoInput
    connect?: tbl_serieWhereUniqueInput
  }

  export type tbl_treinoUpdateOneRequiredWithoutTbl_exercicio_treinoNestedInput = {
    create?: XOR<tbl_treinoCreateWithoutTbl_exercicio_treinoInput, tbl_treinoUncheckedCreateWithoutTbl_exercicio_treinoInput>
    connectOrCreate?: tbl_treinoCreateOrConnectWithoutTbl_exercicio_treinoInput
    upsert?: tbl_treinoUpsertWithoutTbl_exercicio_treinoInput
    connect?: tbl_treinoWhereUniqueInput
    update?: XOR<XOR<tbl_treinoUpdateToOneWithWhereWithoutTbl_exercicio_treinoInput, tbl_treinoUpdateWithoutTbl_exercicio_treinoInput>, tbl_treinoUncheckedUpdateWithoutTbl_exercicio_treinoInput>
  }

  export type tbl_exercicioUpdateOneRequiredWithoutTbl_exercicio_treinoNestedInput = {
    create?: XOR<tbl_exercicioCreateWithoutTbl_exercicio_treinoInput, tbl_exercicioUncheckedCreateWithoutTbl_exercicio_treinoInput>
    connectOrCreate?: tbl_exercicioCreateOrConnectWithoutTbl_exercicio_treinoInput
    upsert?: tbl_exercicioUpsertWithoutTbl_exercicio_treinoInput
    connect?: tbl_exercicioWhereUniqueInput
    update?: XOR<XOR<tbl_exercicioUpdateToOneWithWhereWithoutTbl_exercicio_treinoInput, tbl_exercicioUpdateWithoutTbl_exercicio_treinoInput>, tbl_exercicioUncheckedUpdateWithoutTbl_exercicio_treinoInput>
  }

  export type tbl_serieUpdateOneRequiredWithoutTbl_exercicio_treinoNestedInput = {
    create?: XOR<tbl_serieCreateWithoutTbl_exercicio_treinoInput, tbl_serieUncheckedCreateWithoutTbl_exercicio_treinoInput>
    connectOrCreate?: tbl_serieCreateOrConnectWithoutTbl_exercicio_treinoInput
    upsert?: tbl_serieUpsertWithoutTbl_exercicio_treinoInput
    connect?: tbl_serieWhereUniqueInput
    update?: XOR<XOR<tbl_serieUpdateToOneWithWhereWithoutTbl_exercicio_treinoInput, tbl_serieUpdateWithoutTbl_exercicio_treinoInput>, tbl_serieUncheckedUpdateWithoutTbl_exercicio_treinoInput>
  }

  export type tbl_userCreateNestedOneWithoutTbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_userInput = {
    create?: XOR<tbl_userCreateWithoutTbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_userInput, tbl_userUncheckedCreateWithoutTbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_userInput>
    connectOrCreate?: tbl_userCreateOrConnectWithoutTbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_userInput
    connect?: tbl_userWhereUniqueInput
  }

  export type tbl_userCreateNestedOneWithoutTbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_userInput = {
    create?: XOR<tbl_userCreateWithoutTbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_userInput, tbl_userUncheckedCreateWithoutTbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_userInput>
    connectOrCreate?: tbl_userCreateOrConnectWithoutTbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_userInput
    connect?: tbl_userWhereUniqueInput
  }

  export type tbl_publicacaoCreateNestedOneWithoutTbl_notificacaoInput = {
    create?: XOR<tbl_publicacaoCreateWithoutTbl_notificacaoInput, tbl_publicacaoUncheckedCreateWithoutTbl_notificacaoInput>
    connectOrCreate?: tbl_publicacaoCreateOrConnectWithoutTbl_notificacaoInput
    connect?: tbl_publicacaoWhereUniqueInput
  }

  export type tbl_comentarioCreateNestedOneWithoutTbl_notificacaoInput = {
    create?: XOR<tbl_comentarioCreateWithoutTbl_notificacaoInput, tbl_comentarioUncheckedCreateWithoutTbl_notificacaoInput>
    connectOrCreate?: tbl_comentarioCreateOrConnectWithoutTbl_notificacaoInput
    connect?: tbl_comentarioWhereUniqueInput
  }

  export type tbl_curtidaCreateNestedOneWithoutTbl_notificacaoInput = {
    create?: XOR<tbl_curtidaCreateWithoutTbl_notificacaoInput, tbl_curtidaUncheckedCreateWithoutTbl_notificacaoInput>
    connectOrCreate?: tbl_curtidaCreateOrConnectWithoutTbl_notificacaoInput
    connect?: tbl_curtidaWhereUniqueInput
  }

  export type tbl_curtida_comentarioCreateNestedOneWithoutTbl_notificacaoInput = {
    create?: XOR<tbl_curtida_comentarioCreateWithoutTbl_notificacaoInput, tbl_curtida_comentarioUncheckedCreateWithoutTbl_notificacaoInput>
    connectOrCreate?: tbl_curtida_comentarioCreateOrConnectWithoutTbl_notificacaoInput
    connect?: tbl_curtida_comentarioWhereUniqueInput
  }

  export type tbl_userUpdateOneRequiredWithoutTbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_userNestedInput = {
    create?: XOR<tbl_userCreateWithoutTbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_userInput, tbl_userUncheckedCreateWithoutTbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_userInput>
    connectOrCreate?: tbl_userCreateOrConnectWithoutTbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_userInput
    upsert?: tbl_userUpsertWithoutTbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_userInput
    connect?: tbl_userWhereUniqueInput
    update?: XOR<XOR<tbl_userUpdateToOneWithWhereWithoutTbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_userInput, tbl_userUpdateWithoutTbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_userInput>, tbl_userUncheckedUpdateWithoutTbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_userInput>
  }

  export type tbl_userUpdateOneRequiredWithoutTbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_userNestedInput = {
    create?: XOR<tbl_userCreateWithoutTbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_userInput, tbl_userUncheckedCreateWithoutTbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_userInput>
    connectOrCreate?: tbl_userCreateOrConnectWithoutTbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_userInput
    upsert?: tbl_userUpsertWithoutTbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_userInput
    connect?: tbl_userWhereUniqueInput
    update?: XOR<XOR<tbl_userUpdateToOneWithWhereWithoutTbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_userInput, tbl_userUpdateWithoutTbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_userInput>, tbl_userUncheckedUpdateWithoutTbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_userInput>
  }

  export type tbl_publicacaoUpdateOneWithoutTbl_notificacaoNestedInput = {
    create?: XOR<tbl_publicacaoCreateWithoutTbl_notificacaoInput, tbl_publicacaoUncheckedCreateWithoutTbl_notificacaoInput>
    connectOrCreate?: tbl_publicacaoCreateOrConnectWithoutTbl_notificacaoInput
    upsert?: tbl_publicacaoUpsertWithoutTbl_notificacaoInput
    disconnect?: tbl_publicacaoWhereInput | boolean
    delete?: tbl_publicacaoWhereInput | boolean
    connect?: tbl_publicacaoWhereUniqueInput
    update?: XOR<XOR<tbl_publicacaoUpdateToOneWithWhereWithoutTbl_notificacaoInput, tbl_publicacaoUpdateWithoutTbl_notificacaoInput>, tbl_publicacaoUncheckedUpdateWithoutTbl_notificacaoInput>
  }

  export type tbl_comentarioUpdateOneWithoutTbl_notificacaoNestedInput = {
    create?: XOR<tbl_comentarioCreateWithoutTbl_notificacaoInput, tbl_comentarioUncheckedCreateWithoutTbl_notificacaoInput>
    connectOrCreate?: tbl_comentarioCreateOrConnectWithoutTbl_notificacaoInput
    upsert?: tbl_comentarioUpsertWithoutTbl_notificacaoInput
    disconnect?: tbl_comentarioWhereInput | boolean
    delete?: tbl_comentarioWhereInput | boolean
    connect?: tbl_comentarioWhereUniqueInput
    update?: XOR<XOR<tbl_comentarioUpdateToOneWithWhereWithoutTbl_notificacaoInput, tbl_comentarioUpdateWithoutTbl_notificacaoInput>, tbl_comentarioUncheckedUpdateWithoutTbl_notificacaoInput>
  }

  export type tbl_curtidaUpdateOneWithoutTbl_notificacaoNestedInput = {
    create?: XOR<tbl_curtidaCreateWithoutTbl_notificacaoInput, tbl_curtidaUncheckedCreateWithoutTbl_notificacaoInput>
    connectOrCreate?: tbl_curtidaCreateOrConnectWithoutTbl_notificacaoInput
    upsert?: tbl_curtidaUpsertWithoutTbl_notificacaoInput
    disconnect?: tbl_curtidaWhereInput | boolean
    delete?: tbl_curtidaWhereInput | boolean
    connect?: tbl_curtidaWhereUniqueInput
    update?: XOR<XOR<tbl_curtidaUpdateToOneWithWhereWithoutTbl_notificacaoInput, tbl_curtidaUpdateWithoutTbl_notificacaoInput>, tbl_curtidaUncheckedUpdateWithoutTbl_notificacaoInput>
  }

  export type tbl_curtida_comentarioUpdateOneWithoutTbl_notificacaoNestedInput = {
    create?: XOR<tbl_curtida_comentarioCreateWithoutTbl_notificacaoInput, tbl_curtida_comentarioUncheckedCreateWithoutTbl_notificacaoInput>
    connectOrCreate?: tbl_curtida_comentarioCreateOrConnectWithoutTbl_notificacaoInput
    upsert?: tbl_curtida_comentarioUpsertWithoutTbl_notificacaoInput
    disconnect?: tbl_curtida_comentarioWhereInput | boolean
    delete?: tbl_curtida_comentarioWhereInput | boolean
    connect?: tbl_curtida_comentarioWhereUniqueInput
    update?: XOR<XOR<tbl_curtida_comentarioUpdateToOneWithWhereWithoutTbl_notificacaoInput, tbl_curtida_comentarioUpdateWithoutTbl_notificacaoInput>, tbl_curtida_comentarioUncheckedUpdateWithoutTbl_notificacaoInput>
  }

  export type tbl_comentarioCreateNestedManyWithoutTbl_publicacaoInput = {
    create?: XOR<tbl_comentarioCreateWithoutTbl_publicacaoInput, tbl_comentarioUncheckedCreateWithoutTbl_publicacaoInput> | tbl_comentarioCreateWithoutTbl_publicacaoInput[] | tbl_comentarioUncheckedCreateWithoutTbl_publicacaoInput[]
    connectOrCreate?: tbl_comentarioCreateOrConnectWithoutTbl_publicacaoInput | tbl_comentarioCreateOrConnectWithoutTbl_publicacaoInput[]
    createMany?: tbl_comentarioCreateManyTbl_publicacaoInputEnvelope
    connect?: tbl_comentarioWhereUniqueInput | tbl_comentarioWhereUniqueInput[]
  }

  export type tbl_curtidaCreateNestedManyWithoutTbl_publicacaoInput = {
    create?: XOR<tbl_curtidaCreateWithoutTbl_publicacaoInput, tbl_curtidaUncheckedCreateWithoutTbl_publicacaoInput> | tbl_curtidaCreateWithoutTbl_publicacaoInput[] | tbl_curtidaUncheckedCreateWithoutTbl_publicacaoInput[]
    connectOrCreate?: tbl_curtidaCreateOrConnectWithoutTbl_publicacaoInput | tbl_curtidaCreateOrConnectWithoutTbl_publicacaoInput[]
    createMany?: tbl_curtidaCreateManyTbl_publicacaoInputEnvelope
    connect?: tbl_curtidaWhereUniqueInput | tbl_curtidaWhereUniqueInput[]
  }

  export type tbl_notificacaoCreateNestedManyWithoutTbl_publicacaoInput = {
    create?: XOR<tbl_notificacaoCreateWithoutTbl_publicacaoInput, tbl_notificacaoUncheckedCreateWithoutTbl_publicacaoInput> | tbl_notificacaoCreateWithoutTbl_publicacaoInput[] | tbl_notificacaoUncheckedCreateWithoutTbl_publicacaoInput[]
    connectOrCreate?: tbl_notificacaoCreateOrConnectWithoutTbl_publicacaoInput | tbl_notificacaoCreateOrConnectWithoutTbl_publicacaoInput[]
    createMany?: tbl_notificacaoCreateManyTbl_publicacaoInputEnvelope
    connect?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
  }

  export type tbl_userCreateNestedOneWithoutTbl_publicacaoInput = {
    create?: XOR<tbl_userCreateWithoutTbl_publicacaoInput, tbl_userUncheckedCreateWithoutTbl_publicacaoInput>
    connectOrCreate?: tbl_userCreateOrConnectWithoutTbl_publicacaoInput
    connect?: tbl_userWhereUniqueInput
  }

  export type tbl_comentarioUncheckedCreateNestedManyWithoutTbl_publicacaoInput = {
    create?: XOR<tbl_comentarioCreateWithoutTbl_publicacaoInput, tbl_comentarioUncheckedCreateWithoutTbl_publicacaoInput> | tbl_comentarioCreateWithoutTbl_publicacaoInput[] | tbl_comentarioUncheckedCreateWithoutTbl_publicacaoInput[]
    connectOrCreate?: tbl_comentarioCreateOrConnectWithoutTbl_publicacaoInput | tbl_comentarioCreateOrConnectWithoutTbl_publicacaoInput[]
    createMany?: tbl_comentarioCreateManyTbl_publicacaoInputEnvelope
    connect?: tbl_comentarioWhereUniqueInput | tbl_comentarioWhereUniqueInput[]
  }

  export type tbl_curtidaUncheckedCreateNestedManyWithoutTbl_publicacaoInput = {
    create?: XOR<tbl_curtidaCreateWithoutTbl_publicacaoInput, tbl_curtidaUncheckedCreateWithoutTbl_publicacaoInput> | tbl_curtidaCreateWithoutTbl_publicacaoInput[] | tbl_curtidaUncheckedCreateWithoutTbl_publicacaoInput[]
    connectOrCreate?: tbl_curtidaCreateOrConnectWithoutTbl_publicacaoInput | tbl_curtidaCreateOrConnectWithoutTbl_publicacaoInput[]
    createMany?: tbl_curtidaCreateManyTbl_publicacaoInputEnvelope
    connect?: tbl_curtidaWhereUniqueInput | tbl_curtidaWhereUniqueInput[]
  }

  export type tbl_notificacaoUncheckedCreateNestedManyWithoutTbl_publicacaoInput = {
    create?: XOR<tbl_notificacaoCreateWithoutTbl_publicacaoInput, tbl_notificacaoUncheckedCreateWithoutTbl_publicacaoInput> | tbl_notificacaoCreateWithoutTbl_publicacaoInput[] | tbl_notificacaoUncheckedCreateWithoutTbl_publicacaoInput[]
    connectOrCreate?: tbl_notificacaoCreateOrConnectWithoutTbl_publicacaoInput | tbl_notificacaoCreateOrConnectWithoutTbl_publicacaoInput[]
    createMany?: tbl_notificacaoCreateManyTbl_publicacaoInputEnvelope
    connect?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
  }

  export type tbl_comentarioUpdateManyWithoutTbl_publicacaoNestedInput = {
    create?: XOR<tbl_comentarioCreateWithoutTbl_publicacaoInput, tbl_comentarioUncheckedCreateWithoutTbl_publicacaoInput> | tbl_comentarioCreateWithoutTbl_publicacaoInput[] | tbl_comentarioUncheckedCreateWithoutTbl_publicacaoInput[]
    connectOrCreate?: tbl_comentarioCreateOrConnectWithoutTbl_publicacaoInput | tbl_comentarioCreateOrConnectWithoutTbl_publicacaoInput[]
    upsert?: tbl_comentarioUpsertWithWhereUniqueWithoutTbl_publicacaoInput | tbl_comentarioUpsertWithWhereUniqueWithoutTbl_publicacaoInput[]
    createMany?: tbl_comentarioCreateManyTbl_publicacaoInputEnvelope
    set?: tbl_comentarioWhereUniqueInput | tbl_comentarioWhereUniqueInput[]
    disconnect?: tbl_comentarioWhereUniqueInput | tbl_comentarioWhereUniqueInput[]
    delete?: tbl_comentarioWhereUniqueInput | tbl_comentarioWhereUniqueInput[]
    connect?: tbl_comentarioWhereUniqueInput | tbl_comentarioWhereUniqueInput[]
    update?: tbl_comentarioUpdateWithWhereUniqueWithoutTbl_publicacaoInput | tbl_comentarioUpdateWithWhereUniqueWithoutTbl_publicacaoInput[]
    updateMany?: tbl_comentarioUpdateManyWithWhereWithoutTbl_publicacaoInput | tbl_comentarioUpdateManyWithWhereWithoutTbl_publicacaoInput[]
    deleteMany?: tbl_comentarioScalarWhereInput | tbl_comentarioScalarWhereInput[]
  }

  export type tbl_curtidaUpdateManyWithoutTbl_publicacaoNestedInput = {
    create?: XOR<tbl_curtidaCreateWithoutTbl_publicacaoInput, tbl_curtidaUncheckedCreateWithoutTbl_publicacaoInput> | tbl_curtidaCreateWithoutTbl_publicacaoInput[] | tbl_curtidaUncheckedCreateWithoutTbl_publicacaoInput[]
    connectOrCreate?: tbl_curtidaCreateOrConnectWithoutTbl_publicacaoInput | tbl_curtidaCreateOrConnectWithoutTbl_publicacaoInput[]
    upsert?: tbl_curtidaUpsertWithWhereUniqueWithoutTbl_publicacaoInput | tbl_curtidaUpsertWithWhereUniqueWithoutTbl_publicacaoInput[]
    createMany?: tbl_curtidaCreateManyTbl_publicacaoInputEnvelope
    set?: tbl_curtidaWhereUniqueInput | tbl_curtidaWhereUniqueInput[]
    disconnect?: tbl_curtidaWhereUniqueInput | tbl_curtidaWhereUniqueInput[]
    delete?: tbl_curtidaWhereUniqueInput | tbl_curtidaWhereUniqueInput[]
    connect?: tbl_curtidaWhereUniqueInput | tbl_curtidaWhereUniqueInput[]
    update?: tbl_curtidaUpdateWithWhereUniqueWithoutTbl_publicacaoInput | tbl_curtidaUpdateWithWhereUniqueWithoutTbl_publicacaoInput[]
    updateMany?: tbl_curtidaUpdateManyWithWhereWithoutTbl_publicacaoInput | tbl_curtidaUpdateManyWithWhereWithoutTbl_publicacaoInput[]
    deleteMany?: tbl_curtidaScalarWhereInput | tbl_curtidaScalarWhereInput[]
  }

  export type tbl_notificacaoUpdateManyWithoutTbl_publicacaoNestedInput = {
    create?: XOR<tbl_notificacaoCreateWithoutTbl_publicacaoInput, tbl_notificacaoUncheckedCreateWithoutTbl_publicacaoInput> | tbl_notificacaoCreateWithoutTbl_publicacaoInput[] | tbl_notificacaoUncheckedCreateWithoutTbl_publicacaoInput[]
    connectOrCreate?: tbl_notificacaoCreateOrConnectWithoutTbl_publicacaoInput | tbl_notificacaoCreateOrConnectWithoutTbl_publicacaoInput[]
    upsert?: tbl_notificacaoUpsertWithWhereUniqueWithoutTbl_publicacaoInput | tbl_notificacaoUpsertWithWhereUniqueWithoutTbl_publicacaoInput[]
    createMany?: tbl_notificacaoCreateManyTbl_publicacaoInputEnvelope
    set?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
    disconnect?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
    delete?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
    connect?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
    update?: tbl_notificacaoUpdateWithWhereUniqueWithoutTbl_publicacaoInput | tbl_notificacaoUpdateWithWhereUniqueWithoutTbl_publicacaoInput[]
    updateMany?: tbl_notificacaoUpdateManyWithWhereWithoutTbl_publicacaoInput | tbl_notificacaoUpdateManyWithWhereWithoutTbl_publicacaoInput[]
    deleteMany?: tbl_notificacaoScalarWhereInput | tbl_notificacaoScalarWhereInput[]
  }

  export type tbl_userUpdateOneRequiredWithoutTbl_publicacaoNestedInput = {
    create?: XOR<tbl_userCreateWithoutTbl_publicacaoInput, tbl_userUncheckedCreateWithoutTbl_publicacaoInput>
    connectOrCreate?: tbl_userCreateOrConnectWithoutTbl_publicacaoInput
    upsert?: tbl_userUpsertWithoutTbl_publicacaoInput
    connect?: tbl_userWhereUniqueInput
    update?: XOR<XOR<tbl_userUpdateToOneWithWhereWithoutTbl_publicacaoInput, tbl_userUpdateWithoutTbl_publicacaoInput>, tbl_userUncheckedUpdateWithoutTbl_publicacaoInput>
  }

  export type tbl_comentarioUncheckedUpdateManyWithoutTbl_publicacaoNestedInput = {
    create?: XOR<tbl_comentarioCreateWithoutTbl_publicacaoInput, tbl_comentarioUncheckedCreateWithoutTbl_publicacaoInput> | tbl_comentarioCreateWithoutTbl_publicacaoInput[] | tbl_comentarioUncheckedCreateWithoutTbl_publicacaoInput[]
    connectOrCreate?: tbl_comentarioCreateOrConnectWithoutTbl_publicacaoInput | tbl_comentarioCreateOrConnectWithoutTbl_publicacaoInput[]
    upsert?: tbl_comentarioUpsertWithWhereUniqueWithoutTbl_publicacaoInput | tbl_comentarioUpsertWithWhereUniqueWithoutTbl_publicacaoInput[]
    createMany?: tbl_comentarioCreateManyTbl_publicacaoInputEnvelope
    set?: tbl_comentarioWhereUniqueInput | tbl_comentarioWhereUniqueInput[]
    disconnect?: tbl_comentarioWhereUniqueInput | tbl_comentarioWhereUniqueInput[]
    delete?: tbl_comentarioWhereUniqueInput | tbl_comentarioWhereUniqueInput[]
    connect?: tbl_comentarioWhereUniqueInput | tbl_comentarioWhereUniqueInput[]
    update?: tbl_comentarioUpdateWithWhereUniqueWithoutTbl_publicacaoInput | tbl_comentarioUpdateWithWhereUniqueWithoutTbl_publicacaoInput[]
    updateMany?: tbl_comentarioUpdateManyWithWhereWithoutTbl_publicacaoInput | tbl_comentarioUpdateManyWithWhereWithoutTbl_publicacaoInput[]
    deleteMany?: tbl_comentarioScalarWhereInput | tbl_comentarioScalarWhereInput[]
  }

  export type tbl_curtidaUncheckedUpdateManyWithoutTbl_publicacaoNestedInput = {
    create?: XOR<tbl_curtidaCreateWithoutTbl_publicacaoInput, tbl_curtidaUncheckedCreateWithoutTbl_publicacaoInput> | tbl_curtidaCreateWithoutTbl_publicacaoInput[] | tbl_curtidaUncheckedCreateWithoutTbl_publicacaoInput[]
    connectOrCreate?: tbl_curtidaCreateOrConnectWithoutTbl_publicacaoInput | tbl_curtidaCreateOrConnectWithoutTbl_publicacaoInput[]
    upsert?: tbl_curtidaUpsertWithWhereUniqueWithoutTbl_publicacaoInput | tbl_curtidaUpsertWithWhereUniqueWithoutTbl_publicacaoInput[]
    createMany?: tbl_curtidaCreateManyTbl_publicacaoInputEnvelope
    set?: tbl_curtidaWhereUniqueInput | tbl_curtidaWhereUniqueInput[]
    disconnect?: tbl_curtidaWhereUniqueInput | tbl_curtidaWhereUniqueInput[]
    delete?: tbl_curtidaWhereUniqueInput | tbl_curtidaWhereUniqueInput[]
    connect?: tbl_curtidaWhereUniqueInput | tbl_curtidaWhereUniqueInput[]
    update?: tbl_curtidaUpdateWithWhereUniqueWithoutTbl_publicacaoInput | tbl_curtidaUpdateWithWhereUniqueWithoutTbl_publicacaoInput[]
    updateMany?: tbl_curtidaUpdateManyWithWhereWithoutTbl_publicacaoInput | tbl_curtidaUpdateManyWithWhereWithoutTbl_publicacaoInput[]
    deleteMany?: tbl_curtidaScalarWhereInput | tbl_curtidaScalarWhereInput[]
  }

  export type tbl_notificacaoUncheckedUpdateManyWithoutTbl_publicacaoNestedInput = {
    create?: XOR<tbl_notificacaoCreateWithoutTbl_publicacaoInput, tbl_notificacaoUncheckedCreateWithoutTbl_publicacaoInput> | tbl_notificacaoCreateWithoutTbl_publicacaoInput[] | tbl_notificacaoUncheckedCreateWithoutTbl_publicacaoInput[]
    connectOrCreate?: tbl_notificacaoCreateOrConnectWithoutTbl_publicacaoInput | tbl_notificacaoCreateOrConnectWithoutTbl_publicacaoInput[]
    upsert?: tbl_notificacaoUpsertWithWhereUniqueWithoutTbl_publicacaoInput | tbl_notificacaoUpsertWithWhereUniqueWithoutTbl_publicacaoInput[]
    createMany?: tbl_notificacaoCreateManyTbl_publicacaoInputEnvelope
    set?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
    disconnect?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
    delete?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
    connect?: tbl_notificacaoWhereUniqueInput | tbl_notificacaoWhereUniqueInput[]
    update?: tbl_notificacaoUpdateWithWhereUniqueWithoutTbl_publicacaoInput | tbl_notificacaoUpdateWithWhereUniqueWithoutTbl_publicacaoInput[]
    updateMany?: tbl_notificacaoUpdateManyWithWhereWithoutTbl_publicacaoInput | tbl_notificacaoUpdateManyWithWhereWithoutTbl_publicacaoInput[]
    deleteMany?: tbl_notificacaoScalarWhereInput | tbl_notificacaoScalarWhereInput[]
  }

  export type tbl_exercicio_treinoCreateNestedManyWithoutTbl_serieInput = {
    create?: XOR<tbl_exercicio_treinoCreateWithoutTbl_serieInput, tbl_exercicio_treinoUncheckedCreateWithoutTbl_serieInput> | tbl_exercicio_treinoCreateWithoutTbl_serieInput[] | tbl_exercicio_treinoUncheckedCreateWithoutTbl_serieInput[]
    connectOrCreate?: tbl_exercicio_treinoCreateOrConnectWithoutTbl_serieInput | tbl_exercicio_treinoCreateOrConnectWithoutTbl_serieInput[]
    createMany?: tbl_exercicio_treinoCreateManyTbl_serieInputEnvelope
    connect?: tbl_exercicio_treinoWhereUniqueInput | tbl_exercicio_treinoWhereUniqueInput[]
  }

  export type tbl_exercicioCreateNestedOneWithoutTbl_serieInput = {
    create?: XOR<tbl_exercicioCreateWithoutTbl_serieInput, tbl_exercicioUncheckedCreateWithoutTbl_serieInput>
    connectOrCreate?: tbl_exercicioCreateOrConnectWithoutTbl_serieInput
    connect?: tbl_exercicioWhereUniqueInput
  }

  export type tbl_exercicio_treinoUncheckedCreateNestedManyWithoutTbl_serieInput = {
    create?: XOR<tbl_exercicio_treinoCreateWithoutTbl_serieInput, tbl_exercicio_treinoUncheckedCreateWithoutTbl_serieInput> | tbl_exercicio_treinoCreateWithoutTbl_serieInput[] | tbl_exercicio_treinoUncheckedCreateWithoutTbl_serieInput[]
    connectOrCreate?: tbl_exercicio_treinoCreateOrConnectWithoutTbl_serieInput | tbl_exercicio_treinoCreateOrConnectWithoutTbl_serieInput[]
    createMany?: tbl_exercicio_treinoCreateManyTbl_serieInputEnvelope
    connect?: tbl_exercicio_treinoWhereUniqueInput | tbl_exercicio_treinoWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type tbl_exercicio_treinoUpdateManyWithoutTbl_serieNestedInput = {
    create?: XOR<tbl_exercicio_treinoCreateWithoutTbl_serieInput, tbl_exercicio_treinoUncheckedCreateWithoutTbl_serieInput> | tbl_exercicio_treinoCreateWithoutTbl_serieInput[] | tbl_exercicio_treinoUncheckedCreateWithoutTbl_serieInput[]
    connectOrCreate?: tbl_exercicio_treinoCreateOrConnectWithoutTbl_serieInput | tbl_exercicio_treinoCreateOrConnectWithoutTbl_serieInput[]
    upsert?: tbl_exercicio_treinoUpsertWithWhereUniqueWithoutTbl_serieInput | tbl_exercicio_treinoUpsertWithWhereUniqueWithoutTbl_serieInput[]
    createMany?: tbl_exercicio_treinoCreateManyTbl_serieInputEnvelope
    set?: tbl_exercicio_treinoWhereUniqueInput | tbl_exercicio_treinoWhereUniqueInput[]
    disconnect?: tbl_exercicio_treinoWhereUniqueInput | tbl_exercicio_treinoWhereUniqueInput[]
    delete?: tbl_exercicio_treinoWhereUniqueInput | tbl_exercicio_treinoWhereUniqueInput[]
    connect?: tbl_exercicio_treinoWhereUniqueInput | tbl_exercicio_treinoWhereUniqueInput[]
    update?: tbl_exercicio_treinoUpdateWithWhereUniqueWithoutTbl_serieInput | tbl_exercicio_treinoUpdateWithWhereUniqueWithoutTbl_serieInput[]
    updateMany?: tbl_exercicio_treinoUpdateManyWithWhereWithoutTbl_serieInput | tbl_exercicio_treinoUpdateManyWithWhereWithoutTbl_serieInput[]
    deleteMany?: tbl_exercicio_treinoScalarWhereInput | tbl_exercicio_treinoScalarWhereInput[]
  }

  export type tbl_exercicioUpdateOneRequiredWithoutTbl_serieNestedInput = {
    create?: XOR<tbl_exercicioCreateWithoutTbl_serieInput, tbl_exercicioUncheckedCreateWithoutTbl_serieInput>
    connectOrCreate?: tbl_exercicioCreateOrConnectWithoutTbl_serieInput
    upsert?: tbl_exercicioUpsertWithoutTbl_serieInput
    connect?: tbl_exercicioWhereUniqueInput
    update?: XOR<XOR<tbl_exercicioUpdateToOneWithWhereWithoutTbl_serieInput, tbl_exercicioUpdateWithoutTbl_serieInput>, tbl_exercicioUncheckedUpdateWithoutTbl_serieInput>
  }

  export type tbl_exercicio_treinoUncheckedUpdateManyWithoutTbl_serieNestedInput = {
    create?: XOR<tbl_exercicio_treinoCreateWithoutTbl_serieInput, tbl_exercicio_treinoUncheckedCreateWithoutTbl_serieInput> | tbl_exercicio_treinoCreateWithoutTbl_serieInput[] | tbl_exercicio_treinoUncheckedCreateWithoutTbl_serieInput[]
    connectOrCreate?: tbl_exercicio_treinoCreateOrConnectWithoutTbl_serieInput | tbl_exercicio_treinoCreateOrConnectWithoutTbl_serieInput[]
    upsert?: tbl_exercicio_treinoUpsertWithWhereUniqueWithoutTbl_serieInput | tbl_exercicio_treinoUpsertWithWhereUniqueWithoutTbl_serieInput[]
    createMany?: tbl_exercicio_treinoCreateManyTbl_serieInputEnvelope
    set?: tbl_exercicio_treinoWhereUniqueInput | tbl_exercicio_treinoWhereUniqueInput[]
    disconnect?: tbl_exercicio_treinoWhereUniqueInput | tbl_exercicio_treinoWhereUniqueInput[]
    delete?: tbl_exercicio_treinoWhereUniqueInput | tbl_exercicio_treinoWhereUniqueInput[]
    connect?: tbl_exercicio_treinoWhereUniqueInput | tbl_exercicio_treinoWhereUniqueInput[]
    update?: tbl_exercicio_treinoUpdateWithWhereUniqueWithoutTbl_serieInput | tbl_exercicio_treinoUpdateWithWhereUniqueWithoutTbl_serieInput[]
    updateMany?: tbl_exercicio_treinoUpdateManyWithWhereWithoutTbl_serieInput | tbl_exercicio_treinoUpdateManyWithWhereWithoutTbl_serieInput[]
    deleteMany?: tbl_exercicio_treinoScalarWhereInput | tbl_exercicio_treinoScalarWhereInput[]
  }

  export type tbl_exercicio_treinoCreateNestedManyWithoutTbl_treinoInput = {
    create?: XOR<tbl_exercicio_treinoCreateWithoutTbl_treinoInput, tbl_exercicio_treinoUncheckedCreateWithoutTbl_treinoInput> | tbl_exercicio_treinoCreateWithoutTbl_treinoInput[] | tbl_exercicio_treinoUncheckedCreateWithoutTbl_treinoInput[]
    connectOrCreate?: tbl_exercicio_treinoCreateOrConnectWithoutTbl_treinoInput | tbl_exercicio_treinoCreateOrConnectWithoutTbl_treinoInput[]
    createMany?: tbl_exercicio_treinoCreateManyTbl_treinoInputEnvelope
    connect?: tbl_exercicio_treinoWhereUniqueInput | tbl_exercicio_treinoWhereUniqueInput[]
  }

  export type tbl_userCreateNestedOneWithoutTbl_treinoInput = {
    create?: XOR<tbl_userCreateWithoutTbl_treinoInput, tbl_userUncheckedCreateWithoutTbl_treinoInput>
    connectOrCreate?: tbl_userCreateOrConnectWithoutTbl_treinoInput
    connect?: tbl_userWhereUniqueInput
  }

  export type tbl_exercicio_treinoUncheckedCreateNestedManyWithoutTbl_treinoInput = {
    create?: XOR<tbl_exercicio_treinoCreateWithoutTbl_treinoInput, tbl_exercicio_treinoUncheckedCreateWithoutTbl_treinoInput> | tbl_exercicio_treinoCreateWithoutTbl_treinoInput[] | tbl_exercicio_treinoUncheckedCreateWithoutTbl_treinoInput[]
    connectOrCreate?: tbl_exercicio_treinoCreateOrConnectWithoutTbl_treinoInput | tbl_exercicio_treinoCreateOrConnectWithoutTbl_treinoInput[]
    createMany?: tbl_exercicio_treinoCreateManyTbl_treinoInputEnvelope
    connect?: tbl_exercicio_treinoWhereUniqueInput | tbl_exercicio_treinoWhereUniqueInput[]
  }

  export type tbl_exercicio_treinoUpdateManyWithoutTbl_treinoNestedInput = {
    create?: XOR<tbl_exercicio_treinoCreateWithoutTbl_treinoInput, tbl_exercicio_treinoUncheckedCreateWithoutTbl_treinoInput> | tbl_exercicio_treinoCreateWithoutTbl_treinoInput[] | tbl_exercicio_treinoUncheckedCreateWithoutTbl_treinoInput[]
    connectOrCreate?: tbl_exercicio_treinoCreateOrConnectWithoutTbl_treinoInput | tbl_exercicio_treinoCreateOrConnectWithoutTbl_treinoInput[]
    upsert?: tbl_exercicio_treinoUpsertWithWhereUniqueWithoutTbl_treinoInput | tbl_exercicio_treinoUpsertWithWhereUniqueWithoutTbl_treinoInput[]
    createMany?: tbl_exercicio_treinoCreateManyTbl_treinoInputEnvelope
    set?: tbl_exercicio_treinoWhereUniqueInput | tbl_exercicio_treinoWhereUniqueInput[]
    disconnect?: tbl_exercicio_treinoWhereUniqueInput | tbl_exercicio_treinoWhereUniqueInput[]
    delete?: tbl_exercicio_treinoWhereUniqueInput | tbl_exercicio_treinoWhereUniqueInput[]
    connect?: tbl_exercicio_treinoWhereUniqueInput | tbl_exercicio_treinoWhereUniqueInput[]
    update?: tbl_exercicio_treinoUpdateWithWhereUniqueWithoutTbl_treinoInput | tbl_exercicio_treinoUpdateWithWhereUniqueWithoutTbl_treinoInput[]
    updateMany?: tbl_exercicio_treinoUpdateManyWithWhereWithoutTbl_treinoInput | tbl_exercicio_treinoUpdateManyWithWhereWithoutTbl_treinoInput[]
    deleteMany?: tbl_exercicio_treinoScalarWhereInput | tbl_exercicio_treinoScalarWhereInput[]
  }

  export type tbl_userUpdateOneRequiredWithoutTbl_treinoNestedInput = {
    create?: XOR<tbl_userCreateWithoutTbl_treinoInput, tbl_userUncheckedCreateWithoutTbl_treinoInput>
    connectOrCreate?: tbl_userCreateOrConnectWithoutTbl_treinoInput
    upsert?: tbl_userUpsertWithoutTbl_treinoInput
    connect?: tbl_userWhereUniqueInput
    update?: XOR<XOR<tbl_userUpdateToOneWithWhereWithoutTbl_treinoInput, tbl_userUpdateWithoutTbl_treinoInput>, tbl_userUncheckedUpdateWithoutTbl_treinoInput>
  }

  export type tbl_exercicio_treinoUncheckedUpdateManyWithoutTbl_treinoNestedInput = {
    create?: XOR<tbl_exercicio_treinoCreateWithoutTbl_treinoInput, tbl_exercicio_treinoUncheckedCreateWithoutTbl_treinoInput> | tbl_exercicio_treinoCreateWithoutTbl_treinoInput[] | tbl_exercicio_treinoUncheckedCreateWithoutTbl_treinoInput[]
    connectOrCreate?: tbl_exercicio_treinoCreateOrConnectWithoutTbl_treinoInput | tbl_exercicio_treinoCreateOrConnectWithoutTbl_treinoInput[]
    upsert?: tbl_exercicio_treinoUpsertWithWhereUniqueWithoutTbl_treinoInput | tbl_exercicio_treinoUpsertWithWhereUniqueWithoutTbl_treinoInput[]
    createMany?: tbl_exercicio_treinoCreateManyTbl_treinoInputEnvelope
    set?: tbl_exercicio_treinoWhereUniqueInput | tbl_exercicio_treinoWhereUniqueInput[]
    disconnect?: tbl_exercicio_treinoWhereUniqueInput | tbl_exercicio_treinoWhereUniqueInput[]
    delete?: tbl_exercicio_treinoWhereUniqueInput | tbl_exercicio_treinoWhereUniqueInput[]
    connect?: tbl_exercicio_treinoWhereUniqueInput | tbl_exercicio_treinoWhereUniqueInput[]
    update?: tbl_exercicio_treinoUpdateWithWhereUniqueWithoutTbl_treinoInput | tbl_exercicio_treinoUpdateWithWhereUniqueWithoutTbl_treinoInput[]
    updateMany?: tbl_exercicio_treinoUpdateManyWithWhereWithoutTbl_treinoInput | tbl_exercicio_treinoUpdateManyWithWhereWithoutTbl_treinoInput[]
    deleteMany?: tbl_exercicio_treinoScalarWhereInput | tbl_exercicio_treinoScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type tbl_comentarioCreateWithoutTbl_userInput = {
    conteudo: string
    data_comentario: Date | string
    curtidas_count?: number | null
    tbl_publicacao: tbl_publicacaoCreateNestedOneWithoutTbl_comentarioInput
    tbl_curtida_comentario?: tbl_curtida_comentarioCreateNestedManyWithoutTbl_comentarioInput
    tbl_notificacao?: tbl_notificacaoCreateNestedManyWithoutTbl_comentarioInput
  }

  export type tbl_comentarioUncheckedCreateWithoutTbl_userInput = {
    id?: number
    conteudo: string
    data_comentario: Date | string
    id_publicacao: number
    curtidas_count?: number | null
    tbl_curtida_comentario?: tbl_curtida_comentarioUncheckedCreateNestedManyWithoutTbl_comentarioInput
    tbl_notificacao?: tbl_notificacaoUncheckedCreateNestedManyWithoutTbl_comentarioInput
  }

  export type tbl_comentarioCreateOrConnectWithoutTbl_userInput = {
    where: tbl_comentarioWhereUniqueInput
    create: XOR<tbl_comentarioCreateWithoutTbl_userInput, tbl_comentarioUncheckedCreateWithoutTbl_userInput>
  }

  export type tbl_comentarioCreateManyTbl_userInputEnvelope = {
    data: tbl_comentarioCreateManyTbl_userInput | tbl_comentarioCreateManyTbl_userInput[]
    skipDuplicates?: boolean
  }

  export type tbl_curtidaCreateWithoutTbl_userInput = {
    tbl_publicacao: tbl_publicacaoCreateNestedOneWithoutTbl_curtidaInput
    tbl_notificacao?: tbl_notificacaoCreateNestedManyWithoutTbl_curtidaInput
  }

  export type tbl_curtidaUncheckedCreateWithoutTbl_userInput = {
    id?: number
    id_publicacao: number
    tbl_notificacao?: tbl_notificacaoUncheckedCreateNestedManyWithoutTbl_curtidaInput
  }

  export type tbl_curtidaCreateOrConnectWithoutTbl_userInput = {
    where: tbl_curtidaWhereUniqueInput
    create: XOR<tbl_curtidaCreateWithoutTbl_userInput, tbl_curtidaUncheckedCreateWithoutTbl_userInput>
  }

  export type tbl_curtidaCreateManyTbl_userInputEnvelope = {
    data: tbl_curtidaCreateManyTbl_userInput | tbl_curtidaCreateManyTbl_userInput[]
    skipDuplicates?: boolean
  }

  export type tbl_curtida_comentarioCreateWithoutTbl_userInput = {
    tbl_comentario: tbl_comentarioCreateNestedOneWithoutTbl_curtida_comentarioInput
    tbl_notificacao?: tbl_notificacaoCreateNestedManyWithoutTbl_curtida_comentarioInput
  }

  export type tbl_curtida_comentarioUncheckedCreateWithoutTbl_userInput = {
    id?: number
    id_comentario: number
    tbl_notificacao?: tbl_notificacaoUncheckedCreateNestedManyWithoutTbl_curtida_comentarioInput
  }

  export type tbl_curtida_comentarioCreateOrConnectWithoutTbl_userInput = {
    where: tbl_curtida_comentarioWhereUniqueInput
    create: XOR<tbl_curtida_comentarioCreateWithoutTbl_userInput, tbl_curtida_comentarioUncheckedCreateWithoutTbl_userInput>
  }

  export type tbl_curtida_comentarioCreateManyTbl_userInputEnvelope = {
    data: tbl_curtida_comentarioCreateManyTbl_userInput | tbl_curtida_comentarioCreateManyTbl_userInput[]
    skipDuplicates?: boolean
  }

  export type tbl_notificacaoCreateWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput = {
    tipo_notificacao: string
    data_criacao: Date | string
    is_lida?: boolean | null
    tbl_user_tbl_notificacao_id_usuario_origemTotbl_user: tbl_userCreateNestedOneWithoutTbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_userInput
    tbl_publicacao?: tbl_publicacaoCreateNestedOneWithoutTbl_notificacaoInput
    tbl_comentario?: tbl_comentarioCreateNestedOneWithoutTbl_notificacaoInput
    tbl_curtida?: tbl_curtidaCreateNestedOneWithoutTbl_notificacaoInput
    tbl_curtida_comentario?: tbl_curtida_comentarioCreateNestedOneWithoutTbl_notificacaoInput
  }

  export type tbl_notificacaoUncheckedCreateWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput = {
    id?: number
    id_usuario_origem: number
    id_publicacao?: number | null
    id_comentario?: number | null
    id_curtida?: number | null
    id_curtida_comentario?: number | null
    tipo_notificacao: string
    data_criacao: Date | string
    is_lida?: boolean | null
  }

  export type tbl_notificacaoCreateOrConnectWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput = {
    where: tbl_notificacaoWhereUniqueInput
    create: XOR<tbl_notificacaoCreateWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput, tbl_notificacaoUncheckedCreateWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput>
  }

  export type tbl_notificacaoCreateManyTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInputEnvelope = {
    data: tbl_notificacaoCreateManyTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput | tbl_notificacaoCreateManyTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput[]
    skipDuplicates?: boolean
  }

  export type tbl_notificacaoCreateWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput = {
    tipo_notificacao: string
    data_criacao: Date | string
    is_lida?: boolean | null
    tbl_user_tbl_notificacao_id_usuario_destinoTotbl_user: tbl_userCreateNestedOneWithoutTbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_userInput
    tbl_publicacao?: tbl_publicacaoCreateNestedOneWithoutTbl_notificacaoInput
    tbl_comentario?: tbl_comentarioCreateNestedOneWithoutTbl_notificacaoInput
    tbl_curtida?: tbl_curtidaCreateNestedOneWithoutTbl_notificacaoInput
    tbl_curtida_comentario?: tbl_curtida_comentarioCreateNestedOneWithoutTbl_notificacaoInput
  }

  export type tbl_notificacaoUncheckedCreateWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput = {
    id?: number
    id_usuario_destino: number
    id_publicacao?: number | null
    id_comentario?: number | null
    id_curtida?: number | null
    id_curtida_comentario?: number | null
    tipo_notificacao: string
    data_criacao: Date | string
    is_lida?: boolean | null
  }

  export type tbl_notificacaoCreateOrConnectWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput = {
    where: tbl_notificacaoWhereUniqueInput
    create: XOR<tbl_notificacaoCreateWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput, tbl_notificacaoUncheckedCreateWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput>
  }

  export type tbl_notificacaoCreateManyTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInputEnvelope = {
    data: tbl_notificacaoCreateManyTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput | tbl_notificacaoCreateManyTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput[]
    skipDuplicates?: boolean
  }

  export type tbl_publicacaoCreateWithoutTbl_userInput = {
    imagem: string
    descricao?: string | null
    data_publicacao?: Date | string | null
    localizacao?: string | null
    curtidas_count?: number | null
    comentarios_count?: number | null
    tbl_comentario?: tbl_comentarioCreateNestedManyWithoutTbl_publicacaoInput
    tbl_curtida?: tbl_curtidaCreateNestedManyWithoutTbl_publicacaoInput
    tbl_notificacao?: tbl_notificacaoCreateNestedManyWithoutTbl_publicacaoInput
  }

  export type tbl_publicacaoUncheckedCreateWithoutTbl_userInput = {
    id?: number
    imagem: string
    descricao?: string | null
    data_publicacao?: Date | string | null
    localizacao?: string | null
    curtidas_count?: number | null
    comentarios_count?: number | null
    tbl_comentario?: tbl_comentarioUncheckedCreateNestedManyWithoutTbl_publicacaoInput
    tbl_curtida?: tbl_curtidaUncheckedCreateNestedManyWithoutTbl_publicacaoInput
    tbl_notificacao?: tbl_notificacaoUncheckedCreateNestedManyWithoutTbl_publicacaoInput
  }

  export type tbl_publicacaoCreateOrConnectWithoutTbl_userInput = {
    where: tbl_publicacaoWhereUniqueInput
    create: XOR<tbl_publicacaoCreateWithoutTbl_userInput, tbl_publicacaoUncheckedCreateWithoutTbl_userInput>
  }

  export type tbl_publicacaoCreateManyTbl_userInputEnvelope = {
    data: tbl_publicacaoCreateManyTbl_userInput | tbl_publicacaoCreateManyTbl_userInput[]
    skipDuplicates?: boolean
  }

  export type tbl_recuperacao_senhaCreateWithoutUsuarioInput = {
    token: number
    data_criacao: Date | string
  }

  export type tbl_recuperacao_senhaUncheckedCreateWithoutUsuarioInput = {
    id?: number
    token: number
    data_criacao: Date | string
  }

  export type tbl_recuperacao_senhaCreateOrConnectWithoutUsuarioInput = {
    where: tbl_recuperacao_senhaWhereUniqueInput
    create: XOR<tbl_recuperacao_senhaCreateWithoutUsuarioInput, tbl_recuperacao_senhaUncheckedCreateWithoutUsuarioInput>
  }

  export type tbl_recuperacao_senhaCreateManyUsuarioInputEnvelope = {
    data: tbl_recuperacao_senhaCreateManyUsuarioInput | tbl_recuperacao_senhaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type tbl_treinoCreateWithoutTbl_userInput = {
    nome: string
    tbl_exercicio_treino?: tbl_exercicio_treinoCreateNestedManyWithoutTbl_treinoInput
  }

  export type tbl_treinoUncheckedCreateWithoutTbl_userInput = {
    id?: number
    nome: string
    tbl_exercicio_treino?: tbl_exercicio_treinoUncheckedCreateNestedManyWithoutTbl_treinoInput
  }

  export type tbl_treinoCreateOrConnectWithoutTbl_userInput = {
    where: tbl_treinoWhereUniqueInput
    create: XOR<tbl_treinoCreateWithoutTbl_userInput, tbl_treinoUncheckedCreateWithoutTbl_userInput>
  }

  export type tbl_treinoCreateManyTbl_userInputEnvelope = {
    data: tbl_treinoCreateManyTbl_userInput | tbl_treinoCreateManyTbl_userInput[]
    skipDuplicates?: boolean
  }

  export type tbl_comentarioUpsertWithWhereUniqueWithoutTbl_userInput = {
    where: tbl_comentarioWhereUniqueInput
    update: XOR<tbl_comentarioUpdateWithoutTbl_userInput, tbl_comentarioUncheckedUpdateWithoutTbl_userInput>
    create: XOR<tbl_comentarioCreateWithoutTbl_userInput, tbl_comentarioUncheckedCreateWithoutTbl_userInput>
  }

  export type tbl_comentarioUpdateWithWhereUniqueWithoutTbl_userInput = {
    where: tbl_comentarioWhereUniqueInput
    data: XOR<tbl_comentarioUpdateWithoutTbl_userInput, tbl_comentarioUncheckedUpdateWithoutTbl_userInput>
  }

  export type tbl_comentarioUpdateManyWithWhereWithoutTbl_userInput = {
    where: tbl_comentarioScalarWhereInput
    data: XOR<tbl_comentarioUpdateManyMutationInput, tbl_comentarioUncheckedUpdateManyWithoutTbl_userInput>
  }

  export type tbl_comentarioScalarWhereInput = {
    AND?: tbl_comentarioScalarWhereInput | tbl_comentarioScalarWhereInput[]
    OR?: tbl_comentarioScalarWhereInput[]
    NOT?: tbl_comentarioScalarWhereInput | tbl_comentarioScalarWhereInput[]
    id?: IntFilter<"tbl_comentario"> | number
    conteudo?: StringFilter<"tbl_comentario"> | string
    data_comentario?: DateTimeFilter<"tbl_comentario"> | Date | string
    id_publicacao?: IntFilter<"tbl_comentario"> | number
    id_user?: IntFilter<"tbl_comentario"> | number
    curtidas_count?: IntNullableFilter<"tbl_comentario"> | number | null
  }

  export type tbl_curtidaUpsertWithWhereUniqueWithoutTbl_userInput = {
    where: tbl_curtidaWhereUniqueInput
    update: XOR<tbl_curtidaUpdateWithoutTbl_userInput, tbl_curtidaUncheckedUpdateWithoutTbl_userInput>
    create: XOR<tbl_curtidaCreateWithoutTbl_userInput, tbl_curtidaUncheckedCreateWithoutTbl_userInput>
  }

  export type tbl_curtidaUpdateWithWhereUniqueWithoutTbl_userInput = {
    where: tbl_curtidaWhereUniqueInput
    data: XOR<tbl_curtidaUpdateWithoutTbl_userInput, tbl_curtidaUncheckedUpdateWithoutTbl_userInput>
  }

  export type tbl_curtidaUpdateManyWithWhereWithoutTbl_userInput = {
    where: tbl_curtidaScalarWhereInput
    data: XOR<tbl_curtidaUpdateManyMutationInput, tbl_curtidaUncheckedUpdateManyWithoutTbl_userInput>
  }

  export type tbl_curtidaScalarWhereInput = {
    AND?: tbl_curtidaScalarWhereInput | tbl_curtidaScalarWhereInput[]
    OR?: tbl_curtidaScalarWhereInput[]
    NOT?: tbl_curtidaScalarWhereInput | tbl_curtidaScalarWhereInput[]
    id?: IntFilter<"tbl_curtida"> | number
    id_publicacao?: IntFilter<"tbl_curtida"> | number
    id_user?: IntFilter<"tbl_curtida"> | number
  }

  export type tbl_curtida_comentarioUpsertWithWhereUniqueWithoutTbl_userInput = {
    where: tbl_curtida_comentarioWhereUniqueInput
    update: XOR<tbl_curtida_comentarioUpdateWithoutTbl_userInput, tbl_curtida_comentarioUncheckedUpdateWithoutTbl_userInput>
    create: XOR<tbl_curtida_comentarioCreateWithoutTbl_userInput, tbl_curtida_comentarioUncheckedCreateWithoutTbl_userInput>
  }

  export type tbl_curtida_comentarioUpdateWithWhereUniqueWithoutTbl_userInput = {
    where: tbl_curtida_comentarioWhereUniqueInput
    data: XOR<tbl_curtida_comentarioUpdateWithoutTbl_userInput, tbl_curtida_comentarioUncheckedUpdateWithoutTbl_userInput>
  }

  export type tbl_curtida_comentarioUpdateManyWithWhereWithoutTbl_userInput = {
    where: tbl_curtida_comentarioScalarWhereInput
    data: XOR<tbl_curtida_comentarioUpdateManyMutationInput, tbl_curtida_comentarioUncheckedUpdateManyWithoutTbl_userInput>
  }

  export type tbl_curtida_comentarioScalarWhereInput = {
    AND?: tbl_curtida_comentarioScalarWhereInput | tbl_curtida_comentarioScalarWhereInput[]
    OR?: tbl_curtida_comentarioScalarWhereInput[]
    NOT?: tbl_curtida_comentarioScalarWhereInput | tbl_curtida_comentarioScalarWhereInput[]
    id?: IntFilter<"tbl_curtida_comentario"> | number
    id_comentario?: IntFilter<"tbl_curtida_comentario"> | number
    id_user?: IntFilter<"tbl_curtida_comentario"> | number
  }

  export type tbl_notificacaoUpsertWithWhereUniqueWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput = {
    where: tbl_notificacaoWhereUniqueInput
    update: XOR<tbl_notificacaoUpdateWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput, tbl_notificacaoUncheckedUpdateWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput>
    create: XOR<tbl_notificacaoCreateWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput, tbl_notificacaoUncheckedCreateWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput>
  }

  export type tbl_notificacaoUpdateWithWhereUniqueWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput = {
    where: tbl_notificacaoWhereUniqueInput
    data: XOR<tbl_notificacaoUpdateWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput, tbl_notificacaoUncheckedUpdateWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput>
  }

  export type tbl_notificacaoUpdateManyWithWhereWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput = {
    where: tbl_notificacaoScalarWhereInput
    data: XOR<tbl_notificacaoUpdateManyMutationInput, tbl_notificacaoUncheckedUpdateManyWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput>
  }

  export type tbl_notificacaoScalarWhereInput = {
    AND?: tbl_notificacaoScalarWhereInput | tbl_notificacaoScalarWhereInput[]
    OR?: tbl_notificacaoScalarWhereInput[]
    NOT?: tbl_notificacaoScalarWhereInput | tbl_notificacaoScalarWhereInput[]
    id?: IntFilter<"tbl_notificacao"> | number
    id_usuario_destino?: IntFilter<"tbl_notificacao"> | number
    id_usuario_origem?: IntFilter<"tbl_notificacao"> | number
    id_publicacao?: IntNullableFilter<"tbl_notificacao"> | number | null
    id_comentario?: IntNullableFilter<"tbl_notificacao"> | number | null
    id_curtida?: IntNullableFilter<"tbl_notificacao"> | number | null
    id_curtida_comentario?: IntNullableFilter<"tbl_notificacao"> | number | null
    tipo_notificacao?: StringFilter<"tbl_notificacao"> | string
    data_criacao?: DateTimeFilter<"tbl_notificacao"> | Date | string
    is_lida?: BoolNullableFilter<"tbl_notificacao"> | boolean | null
  }

  export type tbl_notificacaoUpsertWithWhereUniqueWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput = {
    where: tbl_notificacaoWhereUniqueInput
    update: XOR<tbl_notificacaoUpdateWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput, tbl_notificacaoUncheckedUpdateWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput>
    create: XOR<tbl_notificacaoCreateWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput, tbl_notificacaoUncheckedCreateWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput>
  }

  export type tbl_notificacaoUpdateWithWhereUniqueWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput = {
    where: tbl_notificacaoWhereUniqueInput
    data: XOR<tbl_notificacaoUpdateWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput, tbl_notificacaoUncheckedUpdateWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput>
  }

  export type tbl_notificacaoUpdateManyWithWhereWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput = {
    where: tbl_notificacaoScalarWhereInput
    data: XOR<tbl_notificacaoUpdateManyMutationInput, tbl_notificacaoUncheckedUpdateManyWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput>
  }

  export type tbl_publicacaoUpsertWithWhereUniqueWithoutTbl_userInput = {
    where: tbl_publicacaoWhereUniqueInput
    update: XOR<tbl_publicacaoUpdateWithoutTbl_userInput, tbl_publicacaoUncheckedUpdateWithoutTbl_userInput>
    create: XOR<tbl_publicacaoCreateWithoutTbl_userInput, tbl_publicacaoUncheckedCreateWithoutTbl_userInput>
  }

  export type tbl_publicacaoUpdateWithWhereUniqueWithoutTbl_userInput = {
    where: tbl_publicacaoWhereUniqueInput
    data: XOR<tbl_publicacaoUpdateWithoutTbl_userInput, tbl_publicacaoUncheckedUpdateWithoutTbl_userInput>
  }

  export type tbl_publicacaoUpdateManyWithWhereWithoutTbl_userInput = {
    where: tbl_publicacaoScalarWhereInput
    data: XOR<tbl_publicacaoUpdateManyMutationInput, tbl_publicacaoUncheckedUpdateManyWithoutTbl_userInput>
  }

  export type tbl_publicacaoScalarWhereInput = {
    AND?: tbl_publicacaoScalarWhereInput | tbl_publicacaoScalarWhereInput[]
    OR?: tbl_publicacaoScalarWhereInput[]
    NOT?: tbl_publicacaoScalarWhereInput | tbl_publicacaoScalarWhereInput[]
    id?: IntFilter<"tbl_publicacao"> | number
    imagem?: StringFilter<"tbl_publicacao"> | string
    descricao?: StringNullableFilter<"tbl_publicacao"> | string | null
    data_publicacao?: DateTimeNullableFilter<"tbl_publicacao"> | Date | string | null
    localizacao?: StringNullableFilter<"tbl_publicacao"> | string | null
    curtidas_count?: IntNullableFilter<"tbl_publicacao"> | number | null
    comentarios_count?: IntNullableFilter<"tbl_publicacao"> | number | null
    id_user?: IntFilter<"tbl_publicacao"> | number
  }

  export type tbl_recuperacao_senhaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: tbl_recuperacao_senhaWhereUniqueInput
    update: XOR<tbl_recuperacao_senhaUpdateWithoutUsuarioInput, tbl_recuperacao_senhaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<tbl_recuperacao_senhaCreateWithoutUsuarioInput, tbl_recuperacao_senhaUncheckedCreateWithoutUsuarioInput>
  }

  export type tbl_recuperacao_senhaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: tbl_recuperacao_senhaWhereUniqueInput
    data: XOR<tbl_recuperacao_senhaUpdateWithoutUsuarioInput, tbl_recuperacao_senhaUncheckedUpdateWithoutUsuarioInput>
  }

  export type tbl_recuperacao_senhaUpdateManyWithWhereWithoutUsuarioInput = {
    where: tbl_recuperacao_senhaScalarWhereInput
    data: XOR<tbl_recuperacao_senhaUpdateManyMutationInput, tbl_recuperacao_senhaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type tbl_recuperacao_senhaScalarWhereInput = {
    AND?: tbl_recuperacao_senhaScalarWhereInput | tbl_recuperacao_senhaScalarWhereInput[]
    OR?: tbl_recuperacao_senhaScalarWhereInput[]
    NOT?: tbl_recuperacao_senhaScalarWhereInput | tbl_recuperacao_senhaScalarWhereInput[]
    id?: IntFilter<"tbl_recuperacao_senha"> | number
    id_user?: IntFilter<"tbl_recuperacao_senha"> | number
    token?: IntFilter<"tbl_recuperacao_senha"> | number
    data_criacao?: DateTimeFilter<"tbl_recuperacao_senha"> | Date | string
  }

  export type tbl_treinoUpsertWithWhereUniqueWithoutTbl_userInput = {
    where: tbl_treinoWhereUniqueInput
    update: XOR<tbl_treinoUpdateWithoutTbl_userInput, tbl_treinoUncheckedUpdateWithoutTbl_userInput>
    create: XOR<tbl_treinoCreateWithoutTbl_userInput, tbl_treinoUncheckedCreateWithoutTbl_userInput>
  }

  export type tbl_treinoUpdateWithWhereUniqueWithoutTbl_userInput = {
    where: tbl_treinoWhereUniqueInput
    data: XOR<tbl_treinoUpdateWithoutTbl_userInput, tbl_treinoUncheckedUpdateWithoutTbl_userInput>
  }

  export type tbl_treinoUpdateManyWithWhereWithoutTbl_userInput = {
    where: tbl_treinoScalarWhereInput
    data: XOR<tbl_treinoUpdateManyMutationInput, tbl_treinoUncheckedUpdateManyWithoutTbl_userInput>
  }

  export type tbl_treinoScalarWhereInput = {
    AND?: tbl_treinoScalarWhereInput | tbl_treinoScalarWhereInput[]
    OR?: tbl_treinoScalarWhereInput[]
    NOT?: tbl_treinoScalarWhereInput | tbl_treinoScalarWhereInput[]
    id?: IntFilter<"tbl_treino"> | number
    nome?: StringFilter<"tbl_treino"> | string
    id_user?: IntFilter<"tbl_treino"> | number
  }

  export type tbl_userCreateWithoutRecuperacaoSenhaInput = {
    nome: string
    email: string
    senha: string
    peso?: Decimal | DecimalJsLike | number | string | null
    altura?: Decimal | DecimalJsLike | number | string | null
    imc?: Decimal | DecimalJsLike | number | string | null
    nickname: string
    data_nascimento?: Date | string | null
    foto?: string | null
    descricao?: string | null
    localizacao?: string | null
    is_bloqueado?: boolean | null
    tbl_comentario?: tbl_comentarioCreateNestedManyWithoutTbl_userInput
    tbl_curtida?: tbl_curtidaCreateNestedManyWithoutTbl_userInput
    tbl_curtida_comentario?: tbl_curtida_comentarioCreateNestedManyWithoutTbl_userInput
    tbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_user?: tbl_notificacaoCreateNestedManyWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput
    tbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_user?: tbl_notificacaoCreateNestedManyWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput
    tbl_publicacao?: tbl_publicacaoCreateNestedManyWithoutTbl_userInput
    tbl_treino?: tbl_treinoCreateNestedManyWithoutTbl_userInput
  }

  export type tbl_userUncheckedCreateWithoutRecuperacaoSenhaInput = {
    id?: number
    nome: string
    email: string
    senha: string
    peso?: Decimal | DecimalJsLike | number | string | null
    altura?: Decimal | DecimalJsLike | number | string | null
    imc?: Decimal | DecimalJsLike | number | string | null
    nickname: string
    data_nascimento?: Date | string | null
    foto?: string | null
    descricao?: string | null
    localizacao?: string | null
    is_bloqueado?: boolean | null
    tbl_comentario?: tbl_comentarioUncheckedCreateNestedManyWithoutTbl_userInput
    tbl_curtida?: tbl_curtidaUncheckedCreateNestedManyWithoutTbl_userInput
    tbl_curtida_comentario?: tbl_curtida_comentarioUncheckedCreateNestedManyWithoutTbl_userInput
    tbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_user?: tbl_notificacaoUncheckedCreateNestedManyWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput
    tbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_user?: tbl_notificacaoUncheckedCreateNestedManyWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput
    tbl_publicacao?: tbl_publicacaoUncheckedCreateNestedManyWithoutTbl_userInput
    tbl_treino?: tbl_treinoUncheckedCreateNestedManyWithoutTbl_userInput
  }

  export type tbl_userCreateOrConnectWithoutRecuperacaoSenhaInput = {
    where: tbl_userWhereUniqueInput
    create: XOR<tbl_userCreateWithoutRecuperacaoSenhaInput, tbl_userUncheckedCreateWithoutRecuperacaoSenhaInput>
  }

  export type tbl_userUpsertWithoutRecuperacaoSenhaInput = {
    update: XOR<tbl_userUpdateWithoutRecuperacaoSenhaInput, tbl_userUncheckedUpdateWithoutRecuperacaoSenhaInput>
    create: XOR<tbl_userCreateWithoutRecuperacaoSenhaInput, tbl_userUncheckedCreateWithoutRecuperacaoSenhaInput>
    where?: tbl_userWhereInput
  }

  export type tbl_userUpdateToOneWithWhereWithoutRecuperacaoSenhaInput = {
    where?: tbl_userWhereInput
    data: XOR<tbl_userUpdateWithoutRecuperacaoSenhaInput, tbl_userUncheckedUpdateWithoutRecuperacaoSenhaInput>
  }

  export type tbl_userUpdateWithoutRecuperacaoSenhaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    peso?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    imc?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    is_bloqueado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tbl_comentario?: tbl_comentarioUpdateManyWithoutTbl_userNestedInput
    tbl_curtida?: tbl_curtidaUpdateManyWithoutTbl_userNestedInput
    tbl_curtida_comentario?: tbl_curtida_comentarioUpdateManyWithoutTbl_userNestedInput
    tbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_user?: tbl_notificacaoUpdateManyWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userNestedInput
    tbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_user?: tbl_notificacaoUpdateManyWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userNestedInput
    tbl_publicacao?: tbl_publicacaoUpdateManyWithoutTbl_userNestedInput
    tbl_treino?: tbl_treinoUpdateManyWithoutTbl_userNestedInput
  }

  export type tbl_userUncheckedUpdateWithoutRecuperacaoSenhaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    peso?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    imc?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    is_bloqueado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tbl_comentario?: tbl_comentarioUncheckedUpdateManyWithoutTbl_userNestedInput
    tbl_curtida?: tbl_curtidaUncheckedUpdateManyWithoutTbl_userNestedInput
    tbl_curtida_comentario?: tbl_curtida_comentarioUncheckedUpdateManyWithoutTbl_userNestedInput
    tbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_user?: tbl_notificacaoUncheckedUpdateManyWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userNestedInput
    tbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_user?: tbl_notificacaoUncheckedUpdateManyWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userNestedInput
    tbl_publicacao?: tbl_publicacaoUncheckedUpdateManyWithoutTbl_userNestedInput
    tbl_treino?: tbl_treinoUncheckedUpdateManyWithoutTbl_userNestedInput
  }

  export type tbl_publicacaoCreateWithoutTbl_comentarioInput = {
    imagem: string
    descricao?: string | null
    data_publicacao?: Date | string | null
    localizacao?: string | null
    curtidas_count?: number | null
    comentarios_count?: number | null
    tbl_curtida?: tbl_curtidaCreateNestedManyWithoutTbl_publicacaoInput
    tbl_notificacao?: tbl_notificacaoCreateNestedManyWithoutTbl_publicacaoInput
    tbl_user: tbl_userCreateNestedOneWithoutTbl_publicacaoInput
  }

  export type tbl_publicacaoUncheckedCreateWithoutTbl_comentarioInput = {
    id?: number
    imagem: string
    descricao?: string | null
    data_publicacao?: Date | string | null
    localizacao?: string | null
    curtidas_count?: number | null
    comentarios_count?: number | null
    id_user: number
    tbl_curtida?: tbl_curtidaUncheckedCreateNestedManyWithoutTbl_publicacaoInput
    tbl_notificacao?: tbl_notificacaoUncheckedCreateNestedManyWithoutTbl_publicacaoInput
  }

  export type tbl_publicacaoCreateOrConnectWithoutTbl_comentarioInput = {
    where: tbl_publicacaoWhereUniqueInput
    create: XOR<tbl_publicacaoCreateWithoutTbl_comentarioInput, tbl_publicacaoUncheckedCreateWithoutTbl_comentarioInput>
  }

  export type tbl_userCreateWithoutTbl_comentarioInput = {
    nome: string
    email: string
    senha: string
    peso?: Decimal | DecimalJsLike | number | string | null
    altura?: Decimal | DecimalJsLike | number | string | null
    imc?: Decimal | DecimalJsLike | number | string | null
    nickname: string
    data_nascimento?: Date | string | null
    foto?: string | null
    descricao?: string | null
    localizacao?: string | null
    is_bloqueado?: boolean | null
    tbl_curtida?: tbl_curtidaCreateNestedManyWithoutTbl_userInput
    tbl_curtida_comentario?: tbl_curtida_comentarioCreateNestedManyWithoutTbl_userInput
    tbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_user?: tbl_notificacaoCreateNestedManyWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput
    tbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_user?: tbl_notificacaoCreateNestedManyWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput
    tbl_publicacao?: tbl_publicacaoCreateNestedManyWithoutTbl_userInput
    recuperacaoSenha?: tbl_recuperacao_senhaCreateNestedManyWithoutUsuarioInput
    tbl_treino?: tbl_treinoCreateNestedManyWithoutTbl_userInput
  }

  export type tbl_userUncheckedCreateWithoutTbl_comentarioInput = {
    id?: number
    nome: string
    email: string
    senha: string
    peso?: Decimal | DecimalJsLike | number | string | null
    altura?: Decimal | DecimalJsLike | number | string | null
    imc?: Decimal | DecimalJsLike | number | string | null
    nickname: string
    data_nascimento?: Date | string | null
    foto?: string | null
    descricao?: string | null
    localizacao?: string | null
    is_bloqueado?: boolean | null
    tbl_curtida?: tbl_curtidaUncheckedCreateNestedManyWithoutTbl_userInput
    tbl_curtida_comentario?: tbl_curtida_comentarioUncheckedCreateNestedManyWithoutTbl_userInput
    tbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_user?: tbl_notificacaoUncheckedCreateNestedManyWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput
    tbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_user?: tbl_notificacaoUncheckedCreateNestedManyWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput
    tbl_publicacao?: tbl_publicacaoUncheckedCreateNestedManyWithoutTbl_userInput
    recuperacaoSenha?: tbl_recuperacao_senhaUncheckedCreateNestedManyWithoutUsuarioInput
    tbl_treino?: tbl_treinoUncheckedCreateNestedManyWithoutTbl_userInput
  }

  export type tbl_userCreateOrConnectWithoutTbl_comentarioInput = {
    where: tbl_userWhereUniqueInput
    create: XOR<tbl_userCreateWithoutTbl_comentarioInput, tbl_userUncheckedCreateWithoutTbl_comentarioInput>
  }

  export type tbl_curtida_comentarioCreateWithoutTbl_comentarioInput = {
    tbl_user: tbl_userCreateNestedOneWithoutTbl_curtida_comentarioInput
    tbl_notificacao?: tbl_notificacaoCreateNestedManyWithoutTbl_curtida_comentarioInput
  }

  export type tbl_curtida_comentarioUncheckedCreateWithoutTbl_comentarioInput = {
    id?: number
    id_user: number
    tbl_notificacao?: tbl_notificacaoUncheckedCreateNestedManyWithoutTbl_curtida_comentarioInput
  }

  export type tbl_curtida_comentarioCreateOrConnectWithoutTbl_comentarioInput = {
    where: tbl_curtida_comentarioWhereUniqueInput
    create: XOR<tbl_curtida_comentarioCreateWithoutTbl_comentarioInput, tbl_curtida_comentarioUncheckedCreateWithoutTbl_comentarioInput>
  }

  export type tbl_curtida_comentarioCreateManyTbl_comentarioInputEnvelope = {
    data: tbl_curtida_comentarioCreateManyTbl_comentarioInput | tbl_curtida_comentarioCreateManyTbl_comentarioInput[]
    skipDuplicates?: boolean
  }

  export type tbl_notificacaoCreateWithoutTbl_comentarioInput = {
    tipo_notificacao: string
    data_criacao: Date | string
    is_lida?: boolean | null
    tbl_user_tbl_notificacao_id_usuario_destinoTotbl_user: tbl_userCreateNestedOneWithoutTbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_userInput
    tbl_user_tbl_notificacao_id_usuario_origemTotbl_user: tbl_userCreateNestedOneWithoutTbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_userInput
    tbl_publicacao?: tbl_publicacaoCreateNestedOneWithoutTbl_notificacaoInput
    tbl_curtida?: tbl_curtidaCreateNestedOneWithoutTbl_notificacaoInput
    tbl_curtida_comentario?: tbl_curtida_comentarioCreateNestedOneWithoutTbl_notificacaoInput
  }

  export type tbl_notificacaoUncheckedCreateWithoutTbl_comentarioInput = {
    id?: number
    id_usuario_destino: number
    id_usuario_origem: number
    id_publicacao?: number | null
    id_curtida?: number | null
    id_curtida_comentario?: number | null
    tipo_notificacao: string
    data_criacao: Date | string
    is_lida?: boolean | null
  }

  export type tbl_notificacaoCreateOrConnectWithoutTbl_comentarioInput = {
    where: tbl_notificacaoWhereUniqueInput
    create: XOR<tbl_notificacaoCreateWithoutTbl_comentarioInput, tbl_notificacaoUncheckedCreateWithoutTbl_comentarioInput>
  }

  export type tbl_notificacaoCreateManyTbl_comentarioInputEnvelope = {
    data: tbl_notificacaoCreateManyTbl_comentarioInput | tbl_notificacaoCreateManyTbl_comentarioInput[]
    skipDuplicates?: boolean
  }

  export type tbl_publicacaoUpsertWithoutTbl_comentarioInput = {
    update: XOR<tbl_publicacaoUpdateWithoutTbl_comentarioInput, tbl_publicacaoUncheckedUpdateWithoutTbl_comentarioInput>
    create: XOR<tbl_publicacaoCreateWithoutTbl_comentarioInput, tbl_publicacaoUncheckedCreateWithoutTbl_comentarioInput>
    where?: tbl_publicacaoWhereInput
  }

  export type tbl_publicacaoUpdateToOneWithWhereWithoutTbl_comentarioInput = {
    where?: tbl_publicacaoWhereInput
    data: XOR<tbl_publicacaoUpdateWithoutTbl_comentarioInput, tbl_publicacaoUncheckedUpdateWithoutTbl_comentarioInput>
  }

  export type tbl_publicacaoUpdateWithoutTbl_comentarioInput = {
    imagem?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data_publicacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    curtidas_count?: NullableIntFieldUpdateOperationsInput | number | null
    comentarios_count?: NullableIntFieldUpdateOperationsInput | number | null
    tbl_curtida?: tbl_curtidaUpdateManyWithoutTbl_publicacaoNestedInput
    tbl_notificacao?: tbl_notificacaoUpdateManyWithoutTbl_publicacaoNestedInput
    tbl_user?: tbl_userUpdateOneRequiredWithoutTbl_publicacaoNestedInput
  }

  export type tbl_publicacaoUncheckedUpdateWithoutTbl_comentarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    imagem?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data_publicacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    curtidas_count?: NullableIntFieldUpdateOperationsInput | number | null
    comentarios_count?: NullableIntFieldUpdateOperationsInput | number | null
    id_user?: IntFieldUpdateOperationsInput | number
    tbl_curtida?: tbl_curtidaUncheckedUpdateManyWithoutTbl_publicacaoNestedInput
    tbl_notificacao?: tbl_notificacaoUncheckedUpdateManyWithoutTbl_publicacaoNestedInput
  }

  export type tbl_userUpsertWithoutTbl_comentarioInput = {
    update: XOR<tbl_userUpdateWithoutTbl_comentarioInput, tbl_userUncheckedUpdateWithoutTbl_comentarioInput>
    create: XOR<tbl_userCreateWithoutTbl_comentarioInput, tbl_userUncheckedCreateWithoutTbl_comentarioInput>
    where?: tbl_userWhereInput
  }

  export type tbl_userUpdateToOneWithWhereWithoutTbl_comentarioInput = {
    where?: tbl_userWhereInput
    data: XOR<tbl_userUpdateWithoutTbl_comentarioInput, tbl_userUncheckedUpdateWithoutTbl_comentarioInput>
  }

  export type tbl_userUpdateWithoutTbl_comentarioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    peso?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    imc?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    is_bloqueado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tbl_curtida?: tbl_curtidaUpdateManyWithoutTbl_userNestedInput
    tbl_curtida_comentario?: tbl_curtida_comentarioUpdateManyWithoutTbl_userNestedInput
    tbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_user?: tbl_notificacaoUpdateManyWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userNestedInput
    tbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_user?: tbl_notificacaoUpdateManyWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userNestedInput
    tbl_publicacao?: tbl_publicacaoUpdateManyWithoutTbl_userNestedInput
    recuperacaoSenha?: tbl_recuperacao_senhaUpdateManyWithoutUsuarioNestedInput
    tbl_treino?: tbl_treinoUpdateManyWithoutTbl_userNestedInput
  }

  export type tbl_userUncheckedUpdateWithoutTbl_comentarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    peso?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    imc?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    is_bloqueado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tbl_curtida?: tbl_curtidaUncheckedUpdateManyWithoutTbl_userNestedInput
    tbl_curtida_comentario?: tbl_curtida_comentarioUncheckedUpdateManyWithoutTbl_userNestedInput
    tbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_user?: tbl_notificacaoUncheckedUpdateManyWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userNestedInput
    tbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_user?: tbl_notificacaoUncheckedUpdateManyWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userNestedInput
    tbl_publicacao?: tbl_publicacaoUncheckedUpdateManyWithoutTbl_userNestedInput
    recuperacaoSenha?: tbl_recuperacao_senhaUncheckedUpdateManyWithoutUsuarioNestedInput
    tbl_treino?: tbl_treinoUncheckedUpdateManyWithoutTbl_userNestedInput
  }

  export type tbl_curtida_comentarioUpsertWithWhereUniqueWithoutTbl_comentarioInput = {
    where: tbl_curtida_comentarioWhereUniqueInput
    update: XOR<tbl_curtida_comentarioUpdateWithoutTbl_comentarioInput, tbl_curtida_comentarioUncheckedUpdateWithoutTbl_comentarioInput>
    create: XOR<tbl_curtida_comentarioCreateWithoutTbl_comentarioInput, tbl_curtida_comentarioUncheckedCreateWithoutTbl_comentarioInput>
  }

  export type tbl_curtida_comentarioUpdateWithWhereUniqueWithoutTbl_comentarioInput = {
    where: tbl_curtida_comentarioWhereUniqueInput
    data: XOR<tbl_curtida_comentarioUpdateWithoutTbl_comentarioInput, tbl_curtida_comentarioUncheckedUpdateWithoutTbl_comentarioInput>
  }

  export type tbl_curtida_comentarioUpdateManyWithWhereWithoutTbl_comentarioInput = {
    where: tbl_curtida_comentarioScalarWhereInput
    data: XOR<tbl_curtida_comentarioUpdateManyMutationInput, tbl_curtida_comentarioUncheckedUpdateManyWithoutTbl_comentarioInput>
  }

  export type tbl_notificacaoUpsertWithWhereUniqueWithoutTbl_comentarioInput = {
    where: tbl_notificacaoWhereUniqueInput
    update: XOR<tbl_notificacaoUpdateWithoutTbl_comentarioInput, tbl_notificacaoUncheckedUpdateWithoutTbl_comentarioInput>
    create: XOR<tbl_notificacaoCreateWithoutTbl_comentarioInput, tbl_notificacaoUncheckedCreateWithoutTbl_comentarioInput>
  }

  export type tbl_notificacaoUpdateWithWhereUniqueWithoutTbl_comentarioInput = {
    where: tbl_notificacaoWhereUniqueInput
    data: XOR<tbl_notificacaoUpdateWithoutTbl_comentarioInput, tbl_notificacaoUncheckedUpdateWithoutTbl_comentarioInput>
  }

  export type tbl_notificacaoUpdateManyWithWhereWithoutTbl_comentarioInput = {
    where: tbl_notificacaoScalarWhereInput
    data: XOR<tbl_notificacaoUpdateManyMutationInput, tbl_notificacaoUncheckedUpdateManyWithoutTbl_comentarioInput>
  }

  export type tbl_publicacaoCreateWithoutTbl_curtidaInput = {
    imagem: string
    descricao?: string | null
    data_publicacao?: Date | string | null
    localizacao?: string | null
    curtidas_count?: number | null
    comentarios_count?: number | null
    tbl_comentario?: tbl_comentarioCreateNestedManyWithoutTbl_publicacaoInput
    tbl_notificacao?: tbl_notificacaoCreateNestedManyWithoutTbl_publicacaoInput
    tbl_user: tbl_userCreateNestedOneWithoutTbl_publicacaoInput
  }

  export type tbl_publicacaoUncheckedCreateWithoutTbl_curtidaInput = {
    id?: number
    imagem: string
    descricao?: string | null
    data_publicacao?: Date | string | null
    localizacao?: string | null
    curtidas_count?: number | null
    comentarios_count?: number | null
    id_user: number
    tbl_comentario?: tbl_comentarioUncheckedCreateNestedManyWithoutTbl_publicacaoInput
    tbl_notificacao?: tbl_notificacaoUncheckedCreateNestedManyWithoutTbl_publicacaoInput
  }

  export type tbl_publicacaoCreateOrConnectWithoutTbl_curtidaInput = {
    where: tbl_publicacaoWhereUniqueInput
    create: XOR<tbl_publicacaoCreateWithoutTbl_curtidaInput, tbl_publicacaoUncheckedCreateWithoutTbl_curtidaInput>
  }

  export type tbl_userCreateWithoutTbl_curtidaInput = {
    nome: string
    email: string
    senha: string
    peso?: Decimal | DecimalJsLike | number | string | null
    altura?: Decimal | DecimalJsLike | number | string | null
    imc?: Decimal | DecimalJsLike | number | string | null
    nickname: string
    data_nascimento?: Date | string | null
    foto?: string | null
    descricao?: string | null
    localizacao?: string | null
    is_bloqueado?: boolean | null
    tbl_comentario?: tbl_comentarioCreateNestedManyWithoutTbl_userInput
    tbl_curtida_comentario?: tbl_curtida_comentarioCreateNestedManyWithoutTbl_userInput
    tbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_user?: tbl_notificacaoCreateNestedManyWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput
    tbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_user?: tbl_notificacaoCreateNestedManyWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput
    tbl_publicacao?: tbl_publicacaoCreateNestedManyWithoutTbl_userInput
    recuperacaoSenha?: tbl_recuperacao_senhaCreateNestedManyWithoutUsuarioInput
    tbl_treino?: tbl_treinoCreateNestedManyWithoutTbl_userInput
  }

  export type tbl_userUncheckedCreateWithoutTbl_curtidaInput = {
    id?: number
    nome: string
    email: string
    senha: string
    peso?: Decimal | DecimalJsLike | number | string | null
    altura?: Decimal | DecimalJsLike | number | string | null
    imc?: Decimal | DecimalJsLike | number | string | null
    nickname: string
    data_nascimento?: Date | string | null
    foto?: string | null
    descricao?: string | null
    localizacao?: string | null
    is_bloqueado?: boolean | null
    tbl_comentario?: tbl_comentarioUncheckedCreateNestedManyWithoutTbl_userInput
    tbl_curtida_comentario?: tbl_curtida_comentarioUncheckedCreateNestedManyWithoutTbl_userInput
    tbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_user?: tbl_notificacaoUncheckedCreateNestedManyWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput
    tbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_user?: tbl_notificacaoUncheckedCreateNestedManyWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput
    tbl_publicacao?: tbl_publicacaoUncheckedCreateNestedManyWithoutTbl_userInput
    recuperacaoSenha?: tbl_recuperacao_senhaUncheckedCreateNestedManyWithoutUsuarioInput
    tbl_treino?: tbl_treinoUncheckedCreateNestedManyWithoutTbl_userInput
  }

  export type tbl_userCreateOrConnectWithoutTbl_curtidaInput = {
    where: tbl_userWhereUniqueInput
    create: XOR<tbl_userCreateWithoutTbl_curtidaInput, tbl_userUncheckedCreateWithoutTbl_curtidaInput>
  }

  export type tbl_notificacaoCreateWithoutTbl_curtidaInput = {
    tipo_notificacao: string
    data_criacao: Date | string
    is_lida?: boolean | null
    tbl_user_tbl_notificacao_id_usuario_destinoTotbl_user: tbl_userCreateNestedOneWithoutTbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_userInput
    tbl_user_tbl_notificacao_id_usuario_origemTotbl_user: tbl_userCreateNestedOneWithoutTbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_userInput
    tbl_publicacao?: tbl_publicacaoCreateNestedOneWithoutTbl_notificacaoInput
    tbl_comentario?: tbl_comentarioCreateNestedOneWithoutTbl_notificacaoInput
    tbl_curtida_comentario?: tbl_curtida_comentarioCreateNestedOneWithoutTbl_notificacaoInput
  }

  export type tbl_notificacaoUncheckedCreateWithoutTbl_curtidaInput = {
    id?: number
    id_usuario_destino: number
    id_usuario_origem: number
    id_publicacao?: number | null
    id_comentario?: number | null
    id_curtida_comentario?: number | null
    tipo_notificacao: string
    data_criacao: Date | string
    is_lida?: boolean | null
  }

  export type tbl_notificacaoCreateOrConnectWithoutTbl_curtidaInput = {
    where: tbl_notificacaoWhereUniqueInput
    create: XOR<tbl_notificacaoCreateWithoutTbl_curtidaInput, tbl_notificacaoUncheckedCreateWithoutTbl_curtidaInput>
  }

  export type tbl_notificacaoCreateManyTbl_curtidaInputEnvelope = {
    data: tbl_notificacaoCreateManyTbl_curtidaInput | tbl_notificacaoCreateManyTbl_curtidaInput[]
    skipDuplicates?: boolean
  }

  export type tbl_publicacaoUpsertWithoutTbl_curtidaInput = {
    update: XOR<tbl_publicacaoUpdateWithoutTbl_curtidaInput, tbl_publicacaoUncheckedUpdateWithoutTbl_curtidaInput>
    create: XOR<tbl_publicacaoCreateWithoutTbl_curtidaInput, tbl_publicacaoUncheckedCreateWithoutTbl_curtidaInput>
    where?: tbl_publicacaoWhereInput
  }

  export type tbl_publicacaoUpdateToOneWithWhereWithoutTbl_curtidaInput = {
    where?: tbl_publicacaoWhereInput
    data: XOR<tbl_publicacaoUpdateWithoutTbl_curtidaInput, tbl_publicacaoUncheckedUpdateWithoutTbl_curtidaInput>
  }

  export type tbl_publicacaoUpdateWithoutTbl_curtidaInput = {
    imagem?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data_publicacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    curtidas_count?: NullableIntFieldUpdateOperationsInput | number | null
    comentarios_count?: NullableIntFieldUpdateOperationsInput | number | null
    tbl_comentario?: tbl_comentarioUpdateManyWithoutTbl_publicacaoNestedInput
    tbl_notificacao?: tbl_notificacaoUpdateManyWithoutTbl_publicacaoNestedInput
    tbl_user?: tbl_userUpdateOneRequiredWithoutTbl_publicacaoNestedInput
  }

  export type tbl_publicacaoUncheckedUpdateWithoutTbl_curtidaInput = {
    id?: IntFieldUpdateOperationsInput | number
    imagem?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data_publicacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    curtidas_count?: NullableIntFieldUpdateOperationsInput | number | null
    comentarios_count?: NullableIntFieldUpdateOperationsInput | number | null
    id_user?: IntFieldUpdateOperationsInput | number
    tbl_comentario?: tbl_comentarioUncheckedUpdateManyWithoutTbl_publicacaoNestedInput
    tbl_notificacao?: tbl_notificacaoUncheckedUpdateManyWithoutTbl_publicacaoNestedInput
  }

  export type tbl_userUpsertWithoutTbl_curtidaInput = {
    update: XOR<tbl_userUpdateWithoutTbl_curtidaInput, tbl_userUncheckedUpdateWithoutTbl_curtidaInput>
    create: XOR<tbl_userCreateWithoutTbl_curtidaInput, tbl_userUncheckedCreateWithoutTbl_curtidaInput>
    where?: tbl_userWhereInput
  }

  export type tbl_userUpdateToOneWithWhereWithoutTbl_curtidaInput = {
    where?: tbl_userWhereInput
    data: XOR<tbl_userUpdateWithoutTbl_curtidaInput, tbl_userUncheckedUpdateWithoutTbl_curtidaInput>
  }

  export type tbl_userUpdateWithoutTbl_curtidaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    peso?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    imc?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    is_bloqueado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tbl_comentario?: tbl_comentarioUpdateManyWithoutTbl_userNestedInput
    tbl_curtida_comentario?: tbl_curtida_comentarioUpdateManyWithoutTbl_userNestedInput
    tbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_user?: tbl_notificacaoUpdateManyWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userNestedInput
    tbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_user?: tbl_notificacaoUpdateManyWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userNestedInput
    tbl_publicacao?: tbl_publicacaoUpdateManyWithoutTbl_userNestedInput
    recuperacaoSenha?: tbl_recuperacao_senhaUpdateManyWithoutUsuarioNestedInput
    tbl_treino?: tbl_treinoUpdateManyWithoutTbl_userNestedInput
  }

  export type tbl_userUncheckedUpdateWithoutTbl_curtidaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    peso?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    imc?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    is_bloqueado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tbl_comentario?: tbl_comentarioUncheckedUpdateManyWithoutTbl_userNestedInput
    tbl_curtida_comentario?: tbl_curtida_comentarioUncheckedUpdateManyWithoutTbl_userNestedInput
    tbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_user?: tbl_notificacaoUncheckedUpdateManyWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userNestedInput
    tbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_user?: tbl_notificacaoUncheckedUpdateManyWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userNestedInput
    tbl_publicacao?: tbl_publicacaoUncheckedUpdateManyWithoutTbl_userNestedInput
    recuperacaoSenha?: tbl_recuperacao_senhaUncheckedUpdateManyWithoutUsuarioNestedInput
    tbl_treino?: tbl_treinoUncheckedUpdateManyWithoutTbl_userNestedInput
  }

  export type tbl_notificacaoUpsertWithWhereUniqueWithoutTbl_curtidaInput = {
    where: tbl_notificacaoWhereUniqueInput
    update: XOR<tbl_notificacaoUpdateWithoutTbl_curtidaInput, tbl_notificacaoUncheckedUpdateWithoutTbl_curtidaInput>
    create: XOR<tbl_notificacaoCreateWithoutTbl_curtidaInput, tbl_notificacaoUncheckedCreateWithoutTbl_curtidaInput>
  }

  export type tbl_notificacaoUpdateWithWhereUniqueWithoutTbl_curtidaInput = {
    where: tbl_notificacaoWhereUniqueInput
    data: XOR<tbl_notificacaoUpdateWithoutTbl_curtidaInput, tbl_notificacaoUncheckedUpdateWithoutTbl_curtidaInput>
  }

  export type tbl_notificacaoUpdateManyWithWhereWithoutTbl_curtidaInput = {
    where: tbl_notificacaoScalarWhereInput
    data: XOR<tbl_notificacaoUpdateManyMutationInput, tbl_notificacaoUncheckedUpdateManyWithoutTbl_curtidaInput>
  }

  export type tbl_comentarioCreateWithoutTbl_curtida_comentarioInput = {
    conteudo: string
    data_comentario: Date | string
    curtidas_count?: number | null
    tbl_publicacao: tbl_publicacaoCreateNestedOneWithoutTbl_comentarioInput
    tbl_user: tbl_userCreateNestedOneWithoutTbl_comentarioInput
    tbl_notificacao?: tbl_notificacaoCreateNestedManyWithoutTbl_comentarioInput
  }

  export type tbl_comentarioUncheckedCreateWithoutTbl_curtida_comentarioInput = {
    id?: number
    conteudo: string
    data_comentario: Date | string
    id_publicacao: number
    id_user: number
    curtidas_count?: number | null
    tbl_notificacao?: tbl_notificacaoUncheckedCreateNestedManyWithoutTbl_comentarioInput
  }

  export type tbl_comentarioCreateOrConnectWithoutTbl_curtida_comentarioInput = {
    where: tbl_comentarioWhereUniqueInput
    create: XOR<tbl_comentarioCreateWithoutTbl_curtida_comentarioInput, tbl_comentarioUncheckedCreateWithoutTbl_curtida_comentarioInput>
  }

  export type tbl_userCreateWithoutTbl_curtida_comentarioInput = {
    nome: string
    email: string
    senha: string
    peso?: Decimal | DecimalJsLike | number | string | null
    altura?: Decimal | DecimalJsLike | number | string | null
    imc?: Decimal | DecimalJsLike | number | string | null
    nickname: string
    data_nascimento?: Date | string | null
    foto?: string | null
    descricao?: string | null
    localizacao?: string | null
    is_bloqueado?: boolean | null
    tbl_comentario?: tbl_comentarioCreateNestedManyWithoutTbl_userInput
    tbl_curtida?: tbl_curtidaCreateNestedManyWithoutTbl_userInput
    tbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_user?: tbl_notificacaoCreateNestedManyWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput
    tbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_user?: tbl_notificacaoCreateNestedManyWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput
    tbl_publicacao?: tbl_publicacaoCreateNestedManyWithoutTbl_userInput
    recuperacaoSenha?: tbl_recuperacao_senhaCreateNestedManyWithoutUsuarioInput
    tbl_treino?: tbl_treinoCreateNestedManyWithoutTbl_userInput
  }

  export type tbl_userUncheckedCreateWithoutTbl_curtida_comentarioInput = {
    id?: number
    nome: string
    email: string
    senha: string
    peso?: Decimal | DecimalJsLike | number | string | null
    altura?: Decimal | DecimalJsLike | number | string | null
    imc?: Decimal | DecimalJsLike | number | string | null
    nickname: string
    data_nascimento?: Date | string | null
    foto?: string | null
    descricao?: string | null
    localizacao?: string | null
    is_bloqueado?: boolean | null
    tbl_comentario?: tbl_comentarioUncheckedCreateNestedManyWithoutTbl_userInput
    tbl_curtida?: tbl_curtidaUncheckedCreateNestedManyWithoutTbl_userInput
    tbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_user?: tbl_notificacaoUncheckedCreateNestedManyWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput
    tbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_user?: tbl_notificacaoUncheckedCreateNestedManyWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput
    tbl_publicacao?: tbl_publicacaoUncheckedCreateNestedManyWithoutTbl_userInput
    recuperacaoSenha?: tbl_recuperacao_senhaUncheckedCreateNestedManyWithoutUsuarioInput
    tbl_treino?: tbl_treinoUncheckedCreateNestedManyWithoutTbl_userInput
  }

  export type tbl_userCreateOrConnectWithoutTbl_curtida_comentarioInput = {
    where: tbl_userWhereUniqueInput
    create: XOR<tbl_userCreateWithoutTbl_curtida_comentarioInput, tbl_userUncheckedCreateWithoutTbl_curtida_comentarioInput>
  }

  export type tbl_notificacaoCreateWithoutTbl_curtida_comentarioInput = {
    tipo_notificacao: string
    data_criacao: Date | string
    is_lida?: boolean | null
    tbl_user_tbl_notificacao_id_usuario_destinoTotbl_user: tbl_userCreateNestedOneWithoutTbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_userInput
    tbl_user_tbl_notificacao_id_usuario_origemTotbl_user: tbl_userCreateNestedOneWithoutTbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_userInput
    tbl_publicacao?: tbl_publicacaoCreateNestedOneWithoutTbl_notificacaoInput
    tbl_comentario?: tbl_comentarioCreateNestedOneWithoutTbl_notificacaoInput
    tbl_curtida?: tbl_curtidaCreateNestedOneWithoutTbl_notificacaoInput
  }

  export type tbl_notificacaoUncheckedCreateWithoutTbl_curtida_comentarioInput = {
    id?: number
    id_usuario_destino: number
    id_usuario_origem: number
    id_publicacao?: number | null
    id_comentario?: number | null
    id_curtida?: number | null
    tipo_notificacao: string
    data_criacao: Date | string
    is_lida?: boolean | null
  }

  export type tbl_notificacaoCreateOrConnectWithoutTbl_curtida_comentarioInput = {
    where: tbl_notificacaoWhereUniqueInput
    create: XOR<tbl_notificacaoCreateWithoutTbl_curtida_comentarioInput, tbl_notificacaoUncheckedCreateWithoutTbl_curtida_comentarioInput>
  }

  export type tbl_notificacaoCreateManyTbl_curtida_comentarioInputEnvelope = {
    data: tbl_notificacaoCreateManyTbl_curtida_comentarioInput | tbl_notificacaoCreateManyTbl_curtida_comentarioInput[]
    skipDuplicates?: boolean
  }

  export type tbl_comentarioUpsertWithoutTbl_curtida_comentarioInput = {
    update: XOR<tbl_comentarioUpdateWithoutTbl_curtida_comentarioInput, tbl_comentarioUncheckedUpdateWithoutTbl_curtida_comentarioInput>
    create: XOR<tbl_comentarioCreateWithoutTbl_curtida_comentarioInput, tbl_comentarioUncheckedCreateWithoutTbl_curtida_comentarioInput>
    where?: tbl_comentarioWhereInput
  }

  export type tbl_comentarioUpdateToOneWithWhereWithoutTbl_curtida_comentarioInput = {
    where?: tbl_comentarioWhereInput
    data: XOR<tbl_comentarioUpdateWithoutTbl_curtida_comentarioInput, tbl_comentarioUncheckedUpdateWithoutTbl_curtida_comentarioInput>
  }

  export type tbl_comentarioUpdateWithoutTbl_curtida_comentarioInput = {
    conteudo?: StringFieldUpdateOperationsInput | string
    data_comentario?: DateTimeFieldUpdateOperationsInput | Date | string
    curtidas_count?: NullableIntFieldUpdateOperationsInput | number | null
    tbl_publicacao?: tbl_publicacaoUpdateOneRequiredWithoutTbl_comentarioNestedInput
    tbl_user?: tbl_userUpdateOneRequiredWithoutTbl_comentarioNestedInput
    tbl_notificacao?: tbl_notificacaoUpdateManyWithoutTbl_comentarioNestedInput
  }

  export type tbl_comentarioUncheckedUpdateWithoutTbl_curtida_comentarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
    data_comentario?: DateTimeFieldUpdateOperationsInput | Date | string
    id_publicacao?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    curtidas_count?: NullableIntFieldUpdateOperationsInput | number | null
    tbl_notificacao?: tbl_notificacaoUncheckedUpdateManyWithoutTbl_comentarioNestedInput
  }

  export type tbl_userUpsertWithoutTbl_curtida_comentarioInput = {
    update: XOR<tbl_userUpdateWithoutTbl_curtida_comentarioInput, tbl_userUncheckedUpdateWithoutTbl_curtida_comentarioInput>
    create: XOR<tbl_userCreateWithoutTbl_curtida_comentarioInput, tbl_userUncheckedCreateWithoutTbl_curtida_comentarioInput>
    where?: tbl_userWhereInput
  }

  export type tbl_userUpdateToOneWithWhereWithoutTbl_curtida_comentarioInput = {
    where?: tbl_userWhereInput
    data: XOR<tbl_userUpdateWithoutTbl_curtida_comentarioInput, tbl_userUncheckedUpdateWithoutTbl_curtida_comentarioInput>
  }

  export type tbl_userUpdateWithoutTbl_curtida_comentarioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    peso?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    imc?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    is_bloqueado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tbl_comentario?: tbl_comentarioUpdateManyWithoutTbl_userNestedInput
    tbl_curtida?: tbl_curtidaUpdateManyWithoutTbl_userNestedInput
    tbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_user?: tbl_notificacaoUpdateManyWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userNestedInput
    tbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_user?: tbl_notificacaoUpdateManyWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userNestedInput
    tbl_publicacao?: tbl_publicacaoUpdateManyWithoutTbl_userNestedInput
    recuperacaoSenha?: tbl_recuperacao_senhaUpdateManyWithoutUsuarioNestedInput
    tbl_treino?: tbl_treinoUpdateManyWithoutTbl_userNestedInput
  }

  export type tbl_userUncheckedUpdateWithoutTbl_curtida_comentarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    peso?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    imc?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    is_bloqueado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tbl_comentario?: tbl_comentarioUncheckedUpdateManyWithoutTbl_userNestedInput
    tbl_curtida?: tbl_curtidaUncheckedUpdateManyWithoutTbl_userNestedInput
    tbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_user?: tbl_notificacaoUncheckedUpdateManyWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userNestedInput
    tbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_user?: tbl_notificacaoUncheckedUpdateManyWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userNestedInput
    tbl_publicacao?: tbl_publicacaoUncheckedUpdateManyWithoutTbl_userNestedInput
    recuperacaoSenha?: tbl_recuperacao_senhaUncheckedUpdateManyWithoutUsuarioNestedInput
    tbl_treino?: tbl_treinoUncheckedUpdateManyWithoutTbl_userNestedInput
  }

  export type tbl_notificacaoUpsertWithWhereUniqueWithoutTbl_curtida_comentarioInput = {
    where: tbl_notificacaoWhereUniqueInput
    update: XOR<tbl_notificacaoUpdateWithoutTbl_curtida_comentarioInput, tbl_notificacaoUncheckedUpdateWithoutTbl_curtida_comentarioInput>
    create: XOR<tbl_notificacaoCreateWithoutTbl_curtida_comentarioInput, tbl_notificacaoUncheckedCreateWithoutTbl_curtida_comentarioInput>
  }

  export type tbl_notificacaoUpdateWithWhereUniqueWithoutTbl_curtida_comentarioInput = {
    where: tbl_notificacaoWhereUniqueInput
    data: XOR<tbl_notificacaoUpdateWithoutTbl_curtida_comentarioInput, tbl_notificacaoUncheckedUpdateWithoutTbl_curtida_comentarioInput>
  }

  export type tbl_notificacaoUpdateManyWithWhereWithoutTbl_curtida_comentarioInput = {
    where: tbl_notificacaoScalarWhereInput
    data: XOR<tbl_notificacaoUpdateManyMutationInput, tbl_notificacaoUncheckedUpdateManyWithoutTbl_curtida_comentarioInput>
  }

  export type tbl_exercicio_treinoCreateWithoutTbl_exercicioInput = {
    tbl_treino: tbl_treinoCreateNestedOneWithoutTbl_exercicio_treinoInput
    tbl_serie: tbl_serieCreateNestedOneWithoutTbl_exercicio_treinoInput
  }

  export type tbl_exercicio_treinoUncheckedCreateWithoutTbl_exercicioInput = {
    id?: number
    id_treino: number
    id_serie: number
  }

  export type tbl_exercicio_treinoCreateOrConnectWithoutTbl_exercicioInput = {
    where: tbl_exercicio_treinoWhereUniqueInput
    create: XOR<tbl_exercicio_treinoCreateWithoutTbl_exercicioInput, tbl_exercicio_treinoUncheckedCreateWithoutTbl_exercicioInput>
  }

  export type tbl_exercicio_treinoCreateManyTbl_exercicioInputEnvelope = {
    data: tbl_exercicio_treinoCreateManyTbl_exercicioInput | tbl_exercicio_treinoCreateManyTbl_exercicioInput[]
    skipDuplicates?: boolean
  }

  export type tbl_serieCreateWithoutTbl_exercicioInput = {
    nome?: string | null
    peso: Decimal | DecimalJsLike | number | string
    repeticoes: number
    tbl_exercicio_treino?: tbl_exercicio_treinoCreateNestedManyWithoutTbl_serieInput
  }

  export type tbl_serieUncheckedCreateWithoutTbl_exercicioInput = {
    id?: number
    nome?: string | null
    peso: Decimal | DecimalJsLike | number | string
    repeticoes: number
    tbl_exercicio_treino?: tbl_exercicio_treinoUncheckedCreateNestedManyWithoutTbl_serieInput
  }

  export type tbl_serieCreateOrConnectWithoutTbl_exercicioInput = {
    where: tbl_serieWhereUniqueInput
    create: XOR<tbl_serieCreateWithoutTbl_exercicioInput, tbl_serieUncheckedCreateWithoutTbl_exercicioInput>
  }

  export type tbl_serieCreateManyTbl_exercicioInputEnvelope = {
    data: tbl_serieCreateManyTbl_exercicioInput | tbl_serieCreateManyTbl_exercicioInput[]
    skipDuplicates?: boolean
  }

  export type tbl_exercicio_treinoUpsertWithWhereUniqueWithoutTbl_exercicioInput = {
    where: tbl_exercicio_treinoWhereUniqueInput
    update: XOR<tbl_exercicio_treinoUpdateWithoutTbl_exercicioInput, tbl_exercicio_treinoUncheckedUpdateWithoutTbl_exercicioInput>
    create: XOR<tbl_exercicio_treinoCreateWithoutTbl_exercicioInput, tbl_exercicio_treinoUncheckedCreateWithoutTbl_exercicioInput>
  }

  export type tbl_exercicio_treinoUpdateWithWhereUniqueWithoutTbl_exercicioInput = {
    where: tbl_exercicio_treinoWhereUniqueInput
    data: XOR<tbl_exercicio_treinoUpdateWithoutTbl_exercicioInput, tbl_exercicio_treinoUncheckedUpdateWithoutTbl_exercicioInput>
  }

  export type tbl_exercicio_treinoUpdateManyWithWhereWithoutTbl_exercicioInput = {
    where: tbl_exercicio_treinoScalarWhereInput
    data: XOR<tbl_exercicio_treinoUpdateManyMutationInput, tbl_exercicio_treinoUncheckedUpdateManyWithoutTbl_exercicioInput>
  }

  export type tbl_exercicio_treinoScalarWhereInput = {
    AND?: tbl_exercicio_treinoScalarWhereInput | tbl_exercicio_treinoScalarWhereInput[]
    OR?: tbl_exercicio_treinoScalarWhereInput[]
    NOT?: tbl_exercicio_treinoScalarWhereInput | tbl_exercicio_treinoScalarWhereInput[]
    id?: IntFilter<"tbl_exercicio_treino"> | number
    id_treino?: IntFilter<"tbl_exercicio_treino"> | number
    id_exercicio?: IntFilter<"tbl_exercicio_treino"> | number
    id_serie?: IntFilter<"tbl_exercicio_treino"> | number
  }

  export type tbl_serieUpsertWithWhereUniqueWithoutTbl_exercicioInput = {
    where: tbl_serieWhereUniqueInput
    update: XOR<tbl_serieUpdateWithoutTbl_exercicioInput, tbl_serieUncheckedUpdateWithoutTbl_exercicioInput>
    create: XOR<tbl_serieCreateWithoutTbl_exercicioInput, tbl_serieUncheckedCreateWithoutTbl_exercicioInput>
  }

  export type tbl_serieUpdateWithWhereUniqueWithoutTbl_exercicioInput = {
    where: tbl_serieWhereUniqueInput
    data: XOR<tbl_serieUpdateWithoutTbl_exercicioInput, tbl_serieUncheckedUpdateWithoutTbl_exercicioInput>
  }

  export type tbl_serieUpdateManyWithWhereWithoutTbl_exercicioInput = {
    where: tbl_serieScalarWhereInput
    data: XOR<tbl_serieUpdateManyMutationInput, tbl_serieUncheckedUpdateManyWithoutTbl_exercicioInput>
  }

  export type tbl_serieScalarWhereInput = {
    AND?: tbl_serieScalarWhereInput | tbl_serieScalarWhereInput[]
    OR?: tbl_serieScalarWhereInput[]
    NOT?: tbl_serieScalarWhereInput | tbl_serieScalarWhereInput[]
    id?: IntFilter<"tbl_serie"> | number
    id_exercicio?: IntFilter<"tbl_serie"> | number
    nome?: StringNullableFilter<"tbl_serie"> | string | null
    peso?: DecimalFilter<"tbl_serie"> | Decimal | DecimalJsLike | number | string
    repeticoes?: IntFilter<"tbl_serie"> | number
  }

  export type tbl_treinoCreateWithoutTbl_exercicio_treinoInput = {
    nome: string
    tbl_user: tbl_userCreateNestedOneWithoutTbl_treinoInput
  }

  export type tbl_treinoUncheckedCreateWithoutTbl_exercicio_treinoInput = {
    id?: number
    nome: string
    id_user: number
  }

  export type tbl_treinoCreateOrConnectWithoutTbl_exercicio_treinoInput = {
    where: tbl_treinoWhereUniqueInput
    create: XOR<tbl_treinoCreateWithoutTbl_exercicio_treinoInput, tbl_treinoUncheckedCreateWithoutTbl_exercicio_treinoInput>
  }

  export type tbl_exercicioCreateWithoutTbl_exercicio_treinoInput = {
    nome: string
    gif: string
    descricao: string
    grupo_muscular: string
    tbl_serie?: tbl_serieCreateNestedManyWithoutTbl_exercicioInput
  }

  export type tbl_exercicioUncheckedCreateWithoutTbl_exercicio_treinoInput = {
    id?: number
    nome: string
    gif: string
    descricao: string
    grupo_muscular: string
    tbl_serie?: tbl_serieUncheckedCreateNestedManyWithoutTbl_exercicioInput
  }

  export type tbl_exercicioCreateOrConnectWithoutTbl_exercicio_treinoInput = {
    where: tbl_exercicioWhereUniqueInput
    create: XOR<tbl_exercicioCreateWithoutTbl_exercicio_treinoInput, tbl_exercicioUncheckedCreateWithoutTbl_exercicio_treinoInput>
  }

  export type tbl_serieCreateWithoutTbl_exercicio_treinoInput = {
    nome?: string | null
    peso: Decimal | DecimalJsLike | number | string
    repeticoes: number
    tbl_exercicio: tbl_exercicioCreateNestedOneWithoutTbl_serieInput
  }

  export type tbl_serieUncheckedCreateWithoutTbl_exercicio_treinoInput = {
    id?: number
    id_exercicio: number
    nome?: string | null
    peso: Decimal | DecimalJsLike | number | string
    repeticoes: number
  }

  export type tbl_serieCreateOrConnectWithoutTbl_exercicio_treinoInput = {
    where: tbl_serieWhereUniqueInput
    create: XOR<tbl_serieCreateWithoutTbl_exercicio_treinoInput, tbl_serieUncheckedCreateWithoutTbl_exercicio_treinoInput>
  }

  export type tbl_treinoUpsertWithoutTbl_exercicio_treinoInput = {
    update: XOR<tbl_treinoUpdateWithoutTbl_exercicio_treinoInput, tbl_treinoUncheckedUpdateWithoutTbl_exercicio_treinoInput>
    create: XOR<tbl_treinoCreateWithoutTbl_exercicio_treinoInput, tbl_treinoUncheckedCreateWithoutTbl_exercicio_treinoInput>
    where?: tbl_treinoWhereInput
  }

  export type tbl_treinoUpdateToOneWithWhereWithoutTbl_exercicio_treinoInput = {
    where?: tbl_treinoWhereInput
    data: XOR<tbl_treinoUpdateWithoutTbl_exercicio_treinoInput, tbl_treinoUncheckedUpdateWithoutTbl_exercicio_treinoInput>
  }

  export type tbl_treinoUpdateWithoutTbl_exercicio_treinoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tbl_user?: tbl_userUpdateOneRequiredWithoutTbl_treinoNestedInput
  }

  export type tbl_treinoUncheckedUpdateWithoutTbl_exercicio_treinoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    id_user?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_exercicioUpsertWithoutTbl_exercicio_treinoInput = {
    update: XOR<tbl_exercicioUpdateWithoutTbl_exercicio_treinoInput, tbl_exercicioUncheckedUpdateWithoutTbl_exercicio_treinoInput>
    create: XOR<tbl_exercicioCreateWithoutTbl_exercicio_treinoInput, tbl_exercicioUncheckedCreateWithoutTbl_exercicio_treinoInput>
    where?: tbl_exercicioWhereInput
  }

  export type tbl_exercicioUpdateToOneWithWhereWithoutTbl_exercicio_treinoInput = {
    where?: tbl_exercicioWhereInput
    data: XOR<tbl_exercicioUpdateWithoutTbl_exercicio_treinoInput, tbl_exercicioUncheckedUpdateWithoutTbl_exercicio_treinoInput>
  }

  export type tbl_exercicioUpdateWithoutTbl_exercicio_treinoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    gif?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    grupo_muscular?: StringFieldUpdateOperationsInput | string
    tbl_serie?: tbl_serieUpdateManyWithoutTbl_exercicioNestedInput
  }

  export type tbl_exercicioUncheckedUpdateWithoutTbl_exercicio_treinoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    gif?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    grupo_muscular?: StringFieldUpdateOperationsInput | string
    tbl_serie?: tbl_serieUncheckedUpdateManyWithoutTbl_exercicioNestedInput
  }

  export type tbl_serieUpsertWithoutTbl_exercicio_treinoInput = {
    update: XOR<tbl_serieUpdateWithoutTbl_exercicio_treinoInput, tbl_serieUncheckedUpdateWithoutTbl_exercicio_treinoInput>
    create: XOR<tbl_serieCreateWithoutTbl_exercicio_treinoInput, tbl_serieUncheckedCreateWithoutTbl_exercicio_treinoInput>
    where?: tbl_serieWhereInput
  }

  export type tbl_serieUpdateToOneWithWhereWithoutTbl_exercicio_treinoInput = {
    where?: tbl_serieWhereInput
    data: XOR<tbl_serieUpdateWithoutTbl_exercicio_treinoInput, tbl_serieUncheckedUpdateWithoutTbl_exercicio_treinoInput>
  }

  export type tbl_serieUpdateWithoutTbl_exercicio_treinoInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    repeticoes?: IntFieldUpdateOperationsInput | number
    tbl_exercicio?: tbl_exercicioUpdateOneRequiredWithoutTbl_serieNestedInput
  }

  export type tbl_serieUncheckedUpdateWithoutTbl_exercicio_treinoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_exercicio?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    repeticoes?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_userCreateWithoutTbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_userInput = {
    nome: string
    email: string
    senha: string
    peso?: Decimal | DecimalJsLike | number | string | null
    altura?: Decimal | DecimalJsLike | number | string | null
    imc?: Decimal | DecimalJsLike | number | string | null
    nickname: string
    data_nascimento?: Date | string | null
    foto?: string | null
    descricao?: string | null
    localizacao?: string | null
    is_bloqueado?: boolean | null
    tbl_comentario?: tbl_comentarioCreateNestedManyWithoutTbl_userInput
    tbl_curtida?: tbl_curtidaCreateNestedManyWithoutTbl_userInput
    tbl_curtida_comentario?: tbl_curtida_comentarioCreateNestedManyWithoutTbl_userInput
    tbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_user?: tbl_notificacaoCreateNestedManyWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput
    tbl_publicacao?: tbl_publicacaoCreateNestedManyWithoutTbl_userInput
    recuperacaoSenha?: tbl_recuperacao_senhaCreateNestedManyWithoutUsuarioInput
    tbl_treino?: tbl_treinoCreateNestedManyWithoutTbl_userInput
  }

  export type tbl_userUncheckedCreateWithoutTbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_userInput = {
    id?: number
    nome: string
    email: string
    senha: string
    peso?: Decimal | DecimalJsLike | number | string | null
    altura?: Decimal | DecimalJsLike | number | string | null
    imc?: Decimal | DecimalJsLike | number | string | null
    nickname: string
    data_nascimento?: Date | string | null
    foto?: string | null
    descricao?: string | null
    localizacao?: string | null
    is_bloqueado?: boolean | null
    tbl_comentario?: tbl_comentarioUncheckedCreateNestedManyWithoutTbl_userInput
    tbl_curtida?: tbl_curtidaUncheckedCreateNestedManyWithoutTbl_userInput
    tbl_curtida_comentario?: tbl_curtida_comentarioUncheckedCreateNestedManyWithoutTbl_userInput
    tbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_user?: tbl_notificacaoUncheckedCreateNestedManyWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput
    tbl_publicacao?: tbl_publicacaoUncheckedCreateNestedManyWithoutTbl_userInput
    recuperacaoSenha?: tbl_recuperacao_senhaUncheckedCreateNestedManyWithoutUsuarioInput
    tbl_treino?: tbl_treinoUncheckedCreateNestedManyWithoutTbl_userInput
  }

  export type tbl_userCreateOrConnectWithoutTbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_userInput = {
    where: tbl_userWhereUniqueInput
    create: XOR<tbl_userCreateWithoutTbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_userInput, tbl_userUncheckedCreateWithoutTbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_userInput>
  }

  export type tbl_userCreateWithoutTbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_userInput = {
    nome: string
    email: string
    senha: string
    peso?: Decimal | DecimalJsLike | number | string | null
    altura?: Decimal | DecimalJsLike | number | string | null
    imc?: Decimal | DecimalJsLike | number | string | null
    nickname: string
    data_nascimento?: Date | string | null
    foto?: string | null
    descricao?: string | null
    localizacao?: string | null
    is_bloqueado?: boolean | null
    tbl_comentario?: tbl_comentarioCreateNestedManyWithoutTbl_userInput
    tbl_curtida?: tbl_curtidaCreateNestedManyWithoutTbl_userInput
    tbl_curtida_comentario?: tbl_curtida_comentarioCreateNestedManyWithoutTbl_userInput
    tbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_user?: tbl_notificacaoCreateNestedManyWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput
    tbl_publicacao?: tbl_publicacaoCreateNestedManyWithoutTbl_userInput
    recuperacaoSenha?: tbl_recuperacao_senhaCreateNestedManyWithoutUsuarioInput
    tbl_treino?: tbl_treinoCreateNestedManyWithoutTbl_userInput
  }

  export type tbl_userUncheckedCreateWithoutTbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_userInput = {
    id?: number
    nome: string
    email: string
    senha: string
    peso?: Decimal | DecimalJsLike | number | string | null
    altura?: Decimal | DecimalJsLike | number | string | null
    imc?: Decimal | DecimalJsLike | number | string | null
    nickname: string
    data_nascimento?: Date | string | null
    foto?: string | null
    descricao?: string | null
    localizacao?: string | null
    is_bloqueado?: boolean | null
    tbl_comentario?: tbl_comentarioUncheckedCreateNestedManyWithoutTbl_userInput
    tbl_curtida?: tbl_curtidaUncheckedCreateNestedManyWithoutTbl_userInput
    tbl_curtida_comentario?: tbl_curtida_comentarioUncheckedCreateNestedManyWithoutTbl_userInput
    tbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_user?: tbl_notificacaoUncheckedCreateNestedManyWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput
    tbl_publicacao?: tbl_publicacaoUncheckedCreateNestedManyWithoutTbl_userInput
    recuperacaoSenha?: tbl_recuperacao_senhaUncheckedCreateNestedManyWithoutUsuarioInput
    tbl_treino?: tbl_treinoUncheckedCreateNestedManyWithoutTbl_userInput
  }

  export type tbl_userCreateOrConnectWithoutTbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_userInput = {
    where: tbl_userWhereUniqueInput
    create: XOR<tbl_userCreateWithoutTbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_userInput, tbl_userUncheckedCreateWithoutTbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_userInput>
  }

  export type tbl_publicacaoCreateWithoutTbl_notificacaoInput = {
    imagem: string
    descricao?: string | null
    data_publicacao?: Date | string | null
    localizacao?: string | null
    curtidas_count?: number | null
    comentarios_count?: number | null
    tbl_comentario?: tbl_comentarioCreateNestedManyWithoutTbl_publicacaoInput
    tbl_curtida?: tbl_curtidaCreateNestedManyWithoutTbl_publicacaoInput
    tbl_user: tbl_userCreateNestedOneWithoutTbl_publicacaoInput
  }

  export type tbl_publicacaoUncheckedCreateWithoutTbl_notificacaoInput = {
    id?: number
    imagem: string
    descricao?: string | null
    data_publicacao?: Date | string | null
    localizacao?: string | null
    curtidas_count?: number | null
    comentarios_count?: number | null
    id_user: number
    tbl_comentario?: tbl_comentarioUncheckedCreateNestedManyWithoutTbl_publicacaoInput
    tbl_curtida?: tbl_curtidaUncheckedCreateNestedManyWithoutTbl_publicacaoInput
  }

  export type tbl_publicacaoCreateOrConnectWithoutTbl_notificacaoInput = {
    where: tbl_publicacaoWhereUniqueInput
    create: XOR<tbl_publicacaoCreateWithoutTbl_notificacaoInput, tbl_publicacaoUncheckedCreateWithoutTbl_notificacaoInput>
  }

  export type tbl_comentarioCreateWithoutTbl_notificacaoInput = {
    conteudo: string
    data_comentario: Date | string
    curtidas_count?: number | null
    tbl_publicacao: tbl_publicacaoCreateNestedOneWithoutTbl_comentarioInput
    tbl_user: tbl_userCreateNestedOneWithoutTbl_comentarioInput
    tbl_curtida_comentario?: tbl_curtida_comentarioCreateNestedManyWithoutTbl_comentarioInput
  }

  export type tbl_comentarioUncheckedCreateWithoutTbl_notificacaoInput = {
    id?: number
    conteudo: string
    data_comentario: Date | string
    id_publicacao: number
    id_user: number
    curtidas_count?: number | null
    tbl_curtida_comentario?: tbl_curtida_comentarioUncheckedCreateNestedManyWithoutTbl_comentarioInput
  }

  export type tbl_comentarioCreateOrConnectWithoutTbl_notificacaoInput = {
    where: tbl_comentarioWhereUniqueInput
    create: XOR<tbl_comentarioCreateWithoutTbl_notificacaoInput, tbl_comentarioUncheckedCreateWithoutTbl_notificacaoInput>
  }

  export type tbl_curtidaCreateWithoutTbl_notificacaoInput = {
    tbl_publicacao: tbl_publicacaoCreateNestedOneWithoutTbl_curtidaInput
    tbl_user: tbl_userCreateNestedOneWithoutTbl_curtidaInput
  }

  export type tbl_curtidaUncheckedCreateWithoutTbl_notificacaoInput = {
    id?: number
    id_publicacao: number
    id_user: number
  }

  export type tbl_curtidaCreateOrConnectWithoutTbl_notificacaoInput = {
    where: tbl_curtidaWhereUniqueInput
    create: XOR<tbl_curtidaCreateWithoutTbl_notificacaoInput, tbl_curtidaUncheckedCreateWithoutTbl_notificacaoInput>
  }

  export type tbl_curtida_comentarioCreateWithoutTbl_notificacaoInput = {
    tbl_comentario: tbl_comentarioCreateNestedOneWithoutTbl_curtida_comentarioInput
    tbl_user: tbl_userCreateNestedOneWithoutTbl_curtida_comentarioInput
  }

  export type tbl_curtida_comentarioUncheckedCreateWithoutTbl_notificacaoInput = {
    id?: number
    id_comentario: number
    id_user: number
  }

  export type tbl_curtida_comentarioCreateOrConnectWithoutTbl_notificacaoInput = {
    where: tbl_curtida_comentarioWhereUniqueInput
    create: XOR<tbl_curtida_comentarioCreateWithoutTbl_notificacaoInput, tbl_curtida_comentarioUncheckedCreateWithoutTbl_notificacaoInput>
  }

  export type tbl_userUpsertWithoutTbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_userInput = {
    update: XOR<tbl_userUpdateWithoutTbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_userInput, tbl_userUncheckedUpdateWithoutTbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_userInput>
    create: XOR<tbl_userCreateWithoutTbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_userInput, tbl_userUncheckedCreateWithoutTbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_userInput>
    where?: tbl_userWhereInput
  }

  export type tbl_userUpdateToOneWithWhereWithoutTbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_userInput = {
    where?: tbl_userWhereInput
    data: XOR<tbl_userUpdateWithoutTbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_userInput, tbl_userUncheckedUpdateWithoutTbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_userInput>
  }

  export type tbl_userUpdateWithoutTbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_userInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    peso?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    imc?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    is_bloqueado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tbl_comentario?: tbl_comentarioUpdateManyWithoutTbl_userNestedInput
    tbl_curtida?: tbl_curtidaUpdateManyWithoutTbl_userNestedInput
    tbl_curtida_comentario?: tbl_curtida_comentarioUpdateManyWithoutTbl_userNestedInput
    tbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_user?: tbl_notificacaoUpdateManyWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userNestedInput
    tbl_publicacao?: tbl_publicacaoUpdateManyWithoutTbl_userNestedInput
    recuperacaoSenha?: tbl_recuperacao_senhaUpdateManyWithoutUsuarioNestedInput
    tbl_treino?: tbl_treinoUpdateManyWithoutTbl_userNestedInput
  }

  export type tbl_userUncheckedUpdateWithoutTbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_userInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    peso?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    imc?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    is_bloqueado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tbl_comentario?: tbl_comentarioUncheckedUpdateManyWithoutTbl_userNestedInput
    tbl_curtida?: tbl_curtidaUncheckedUpdateManyWithoutTbl_userNestedInput
    tbl_curtida_comentario?: tbl_curtida_comentarioUncheckedUpdateManyWithoutTbl_userNestedInput
    tbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_user?: tbl_notificacaoUncheckedUpdateManyWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userNestedInput
    tbl_publicacao?: tbl_publicacaoUncheckedUpdateManyWithoutTbl_userNestedInput
    recuperacaoSenha?: tbl_recuperacao_senhaUncheckedUpdateManyWithoutUsuarioNestedInput
    tbl_treino?: tbl_treinoUncheckedUpdateManyWithoutTbl_userNestedInput
  }

  export type tbl_userUpsertWithoutTbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_userInput = {
    update: XOR<tbl_userUpdateWithoutTbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_userInput, tbl_userUncheckedUpdateWithoutTbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_userInput>
    create: XOR<tbl_userCreateWithoutTbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_userInput, tbl_userUncheckedCreateWithoutTbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_userInput>
    where?: tbl_userWhereInput
  }

  export type tbl_userUpdateToOneWithWhereWithoutTbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_userInput = {
    where?: tbl_userWhereInput
    data: XOR<tbl_userUpdateWithoutTbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_userInput, tbl_userUncheckedUpdateWithoutTbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_userInput>
  }

  export type tbl_userUpdateWithoutTbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_userInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    peso?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    imc?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    is_bloqueado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tbl_comentario?: tbl_comentarioUpdateManyWithoutTbl_userNestedInput
    tbl_curtida?: tbl_curtidaUpdateManyWithoutTbl_userNestedInput
    tbl_curtida_comentario?: tbl_curtida_comentarioUpdateManyWithoutTbl_userNestedInput
    tbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_user?: tbl_notificacaoUpdateManyWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userNestedInput
    tbl_publicacao?: tbl_publicacaoUpdateManyWithoutTbl_userNestedInput
    recuperacaoSenha?: tbl_recuperacao_senhaUpdateManyWithoutUsuarioNestedInput
    tbl_treino?: tbl_treinoUpdateManyWithoutTbl_userNestedInput
  }

  export type tbl_userUncheckedUpdateWithoutTbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_userInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    peso?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    imc?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    is_bloqueado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tbl_comentario?: tbl_comentarioUncheckedUpdateManyWithoutTbl_userNestedInput
    tbl_curtida?: tbl_curtidaUncheckedUpdateManyWithoutTbl_userNestedInput
    tbl_curtida_comentario?: tbl_curtida_comentarioUncheckedUpdateManyWithoutTbl_userNestedInput
    tbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_user?: tbl_notificacaoUncheckedUpdateManyWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userNestedInput
    tbl_publicacao?: tbl_publicacaoUncheckedUpdateManyWithoutTbl_userNestedInput
    recuperacaoSenha?: tbl_recuperacao_senhaUncheckedUpdateManyWithoutUsuarioNestedInput
    tbl_treino?: tbl_treinoUncheckedUpdateManyWithoutTbl_userNestedInput
  }

  export type tbl_publicacaoUpsertWithoutTbl_notificacaoInput = {
    update: XOR<tbl_publicacaoUpdateWithoutTbl_notificacaoInput, tbl_publicacaoUncheckedUpdateWithoutTbl_notificacaoInput>
    create: XOR<tbl_publicacaoCreateWithoutTbl_notificacaoInput, tbl_publicacaoUncheckedCreateWithoutTbl_notificacaoInput>
    where?: tbl_publicacaoWhereInput
  }

  export type tbl_publicacaoUpdateToOneWithWhereWithoutTbl_notificacaoInput = {
    where?: tbl_publicacaoWhereInput
    data: XOR<tbl_publicacaoUpdateWithoutTbl_notificacaoInput, tbl_publicacaoUncheckedUpdateWithoutTbl_notificacaoInput>
  }

  export type tbl_publicacaoUpdateWithoutTbl_notificacaoInput = {
    imagem?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data_publicacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    curtidas_count?: NullableIntFieldUpdateOperationsInput | number | null
    comentarios_count?: NullableIntFieldUpdateOperationsInput | number | null
    tbl_comentario?: tbl_comentarioUpdateManyWithoutTbl_publicacaoNestedInput
    tbl_curtida?: tbl_curtidaUpdateManyWithoutTbl_publicacaoNestedInput
    tbl_user?: tbl_userUpdateOneRequiredWithoutTbl_publicacaoNestedInput
  }

  export type tbl_publicacaoUncheckedUpdateWithoutTbl_notificacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    imagem?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data_publicacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    curtidas_count?: NullableIntFieldUpdateOperationsInput | number | null
    comentarios_count?: NullableIntFieldUpdateOperationsInput | number | null
    id_user?: IntFieldUpdateOperationsInput | number
    tbl_comentario?: tbl_comentarioUncheckedUpdateManyWithoutTbl_publicacaoNestedInput
    tbl_curtida?: tbl_curtidaUncheckedUpdateManyWithoutTbl_publicacaoNestedInput
  }

  export type tbl_comentarioUpsertWithoutTbl_notificacaoInput = {
    update: XOR<tbl_comentarioUpdateWithoutTbl_notificacaoInput, tbl_comentarioUncheckedUpdateWithoutTbl_notificacaoInput>
    create: XOR<tbl_comentarioCreateWithoutTbl_notificacaoInput, tbl_comentarioUncheckedCreateWithoutTbl_notificacaoInput>
    where?: tbl_comentarioWhereInput
  }

  export type tbl_comentarioUpdateToOneWithWhereWithoutTbl_notificacaoInput = {
    where?: tbl_comentarioWhereInput
    data: XOR<tbl_comentarioUpdateWithoutTbl_notificacaoInput, tbl_comentarioUncheckedUpdateWithoutTbl_notificacaoInput>
  }

  export type tbl_comentarioUpdateWithoutTbl_notificacaoInput = {
    conteudo?: StringFieldUpdateOperationsInput | string
    data_comentario?: DateTimeFieldUpdateOperationsInput | Date | string
    curtidas_count?: NullableIntFieldUpdateOperationsInput | number | null
    tbl_publicacao?: tbl_publicacaoUpdateOneRequiredWithoutTbl_comentarioNestedInput
    tbl_user?: tbl_userUpdateOneRequiredWithoutTbl_comentarioNestedInput
    tbl_curtida_comentario?: tbl_curtida_comentarioUpdateManyWithoutTbl_comentarioNestedInput
  }

  export type tbl_comentarioUncheckedUpdateWithoutTbl_notificacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
    data_comentario?: DateTimeFieldUpdateOperationsInput | Date | string
    id_publicacao?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    curtidas_count?: NullableIntFieldUpdateOperationsInput | number | null
    tbl_curtida_comentario?: tbl_curtida_comentarioUncheckedUpdateManyWithoutTbl_comentarioNestedInput
  }

  export type tbl_curtidaUpsertWithoutTbl_notificacaoInput = {
    update: XOR<tbl_curtidaUpdateWithoutTbl_notificacaoInput, tbl_curtidaUncheckedUpdateWithoutTbl_notificacaoInput>
    create: XOR<tbl_curtidaCreateWithoutTbl_notificacaoInput, tbl_curtidaUncheckedCreateWithoutTbl_notificacaoInput>
    where?: tbl_curtidaWhereInput
  }

  export type tbl_curtidaUpdateToOneWithWhereWithoutTbl_notificacaoInput = {
    where?: tbl_curtidaWhereInput
    data: XOR<tbl_curtidaUpdateWithoutTbl_notificacaoInput, tbl_curtidaUncheckedUpdateWithoutTbl_notificacaoInput>
  }

  export type tbl_curtidaUpdateWithoutTbl_notificacaoInput = {
    tbl_publicacao?: tbl_publicacaoUpdateOneRequiredWithoutTbl_curtidaNestedInput
    tbl_user?: tbl_userUpdateOneRequiredWithoutTbl_curtidaNestedInput
  }

  export type tbl_curtidaUncheckedUpdateWithoutTbl_notificacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_publicacao?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_curtida_comentarioUpsertWithoutTbl_notificacaoInput = {
    update: XOR<tbl_curtida_comentarioUpdateWithoutTbl_notificacaoInput, tbl_curtida_comentarioUncheckedUpdateWithoutTbl_notificacaoInput>
    create: XOR<tbl_curtida_comentarioCreateWithoutTbl_notificacaoInput, tbl_curtida_comentarioUncheckedCreateWithoutTbl_notificacaoInput>
    where?: tbl_curtida_comentarioWhereInput
  }

  export type tbl_curtida_comentarioUpdateToOneWithWhereWithoutTbl_notificacaoInput = {
    where?: tbl_curtida_comentarioWhereInput
    data: XOR<tbl_curtida_comentarioUpdateWithoutTbl_notificacaoInput, tbl_curtida_comentarioUncheckedUpdateWithoutTbl_notificacaoInput>
  }

  export type tbl_curtida_comentarioUpdateWithoutTbl_notificacaoInput = {
    tbl_comentario?: tbl_comentarioUpdateOneRequiredWithoutTbl_curtida_comentarioNestedInput
    tbl_user?: tbl_userUpdateOneRequiredWithoutTbl_curtida_comentarioNestedInput
  }

  export type tbl_curtida_comentarioUncheckedUpdateWithoutTbl_notificacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_comentario?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_comentarioCreateWithoutTbl_publicacaoInput = {
    conteudo: string
    data_comentario: Date | string
    curtidas_count?: number | null
    tbl_user: tbl_userCreateNestedOneWithoutTbl_comentarioInput
    tbl_curtida_comentario?: tbl_curtida_comentarioCreateNestedManyWithoutTbl_comentarioInput
    tbl_notificacao?: tbl_notificacaoCreateNestedManyWithoutTbl_comentarioInput
  }

  export type tbl_comentarioUncheckedCreateWithoutTbl_publicacaoInput = {
    id?: number
    conteudo: string
    data_comentario: Date | string
    id_user: number
    curtidas_count?: number | null
    tbl_curtida_comentario?: tbl_curtida_comentarioUncheckedCreateNestedManyWithoutTbl_comentarioInput
    tbl_notificacao?: tbl_notificacaoUncheckedCreateNestedManyWithoutTbl_comentarioInput
  }

  export type tbl_comentarioCreateOrConnectWithoutTbl_publicacaoInput = {
    where: tbl_comentarioWhereUniqueInput
    create: XOR<tbl_comentarioCreateWithoutTbl_publicacaoInput, tbl_comentarioUncheckedCreateWithoutTbl_publicacaoInput>
  }

  export type tbl_comentarioCreateManyTbl_publicacaoInputEnvelope = {
    data: tbl_comentarioCreateManyTbl_publicacaoInput | tbl_comentarioCreateManyTbl_publicacaoInput[]
    skipDuplicates?: boolean
  }

  export type tbl_curtidaCreateWithoutTbl_publicacaoInput = {
    tbl_user: tbl_userCreateNestedOneWithoutTbl_curtidaInput
    tbl_notificacao?: tbl_notificacaoCreateNestedManyWithoutTbl_curtidaInput
  }

  export type tbl_curtidaUncheckedCreateWithoutTbl_publicacaoInput = {
    id?: number
    id_user: number
    tbl_notificacao?: tbl_notificacaoUncheckedCreateNestedManyWithoutTbl_curtidaInput
  }

  export type tbl_curtidaCreateOrConnectWithoutTbl_publicacaoInput = {
    where: tbl_curtidaWhereUniqueInput
    create: XOR<tbl_curtidaCreateWithoutTbl_publicacaoInput, tbl_curtidaUncheckedCreateWithoutTbl_publicacaoInput>
  }

  export type tbl_curtidaCreateManyTbl_publicacaoInputEnvelope = {
    data: tbl_curtidaCreateManyTbl_publicacaoInput | tbl_curtidaCreateManyTbl_publicacaoInput[]
    skipDuplicates?: boolean
  }

  export type tbl_notificacaoCreateWithoutTbl_publicacaoInput = {
    tipo_notificacao: string
    data_criacao: Date | string
    is_lida?: boolean | null
    tbl_user_tbl_notificacao_id_usuario_destinoTotbl_user: tbl_userCreateNestedOneWithoutTbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_userInput
    tbl_user_tbl_notificacao_id_usuario_origemTotbl_user: tbl_userCreateNestedOneWithoutTbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_userInput
    tbl_comentario?: tbl_comentarioCreateNestedOneWithoutTbl_notificacaoInput
    tbl_curtida?: tbl_curtidaCreateNestedOneWithoutTbl_notificacaoInput
    tbl_curtida_comentario?: tbl_curtida_comentarioCreateNestedOneWithoutTbl_notificacaoInput
  }

  export type tbl_notificacaoUncheckedCreateWithoutTbl_publicacaoInput = {
    id?: number
    id_usuario_destino: number
    id_usuario_origem: number
    id_comentario?: number | null
    id_curtida?: number | null
    id_curtida_comentario?: number | null
    tipo_notificacao: string
    data_criacao: Date | string
    is_lida?: boolean | null
  }

  export type tbl_notificacaoCreateOrConnectWithoutTbl_publicacaoInput = {
    where: tbl_notificacaoWhereUniqueInput
    create: XOR<tbl_notificacaoCreateWithoutTbl_publicacaoInput, tbl_notificacaoUncheckedCreateWithoutTbl_publicacaoInput>
  }

  export type tbl_notificacaoCreateManyTbl_publicacaoInputEnvelope = {
    data: tbl_notificacaoCreateManyTbl_publicacaoInput | tbl_notificacaoCreateManyTbl_publicacaoInput[]
    skipDuplicates?: boolean
  }

  export type tbl_userCreateWithoutTbl_publicacaoInput = {
    nome: string
    email: string
    senha: string
    peso?: Decimal | DecimalJsLike | number | string | null
    altura?: Decimal | DecimalJsLike | number | string | null
    imc?: Decimal | DecimalJsLike | number | string | null
    nickname: string
    data_nascimento?: Date | string | null
    foto?: string | null
    descricao?: string | null
    localizacao?: string | null
    is_bloqueado?: boolean | null
    tbl_comentario?: tbl_comentarioCreateNestedManyWithoutTbl_userInput
    tbl_curtida?: tbl_curtidaCreateNestedManyWithoutTbl_userInput
    tbl_curtida_comentario?: tbl_curtida_comentarioCreateNestedManyWithoutTbl_userInput
    tbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_user?: tbl_notificacaoCreateNestedManyWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput
    tbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_user?: tbl_notificacaoCreateNestedManyWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput
    recuperacaoSenha?: tbl_recuperacao_senhaCreateNestedManyWithoutUsuarioInput
    tbl_treino?: tbl_treinoCreateNestedManyWithoutTbl_userInput
  }

  export type tbl_userUncheckedCreateWithoutTbl_publicacaoInput = {
    id?: number
    nome: string
    email: string
    senha: string
    peso?: Decimal | DecimalJsLike | number | string | null
    altura?: Decimal | DecimalJsLike | number | string | null
    imc?: Decimal | DecimalJsLike | number | string | null
    nickname: string
    data_nascimento?: Date | string | null
    foto?: string | null
    descricao?: string | null
    localizacao?: string | null
    is_bloqueado?: boolean | null
    tbl_comentario?: tbl_comentarioUncheckedCreateNestedManyWithoutTbl_userInput
    tbl_curtida?: tbl_curtidaUncheckedCreateNestedManyWithoutTbl_userInput
    tbl_curtida_comentario?: tbl_curtida_comentarioUncheckedCreateNestedManyWithoutTbl_userInput
    tbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_user?: tbl_notificacaoUncheckedCreateNestedManyWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput
    tbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_user?: tbl_notificacaoUncheckedCreateNestedManyWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput
    recuperacaoSenha?: tbl_recuperacao_senhaUncheckedCreateNestedManyWithoutUsuarioInput
    tbl_treino?: tbl_treinoUncheckedCreateNestedManyWithoutTbl_userInput
  }

  export type tbl_userCreateOrConnectWithoutTbl_publicacaoInput = {
    where: tbl_userWhereUniqueInput
    create: XOR<tbl_userCreateWithoutTbl_publicacaoInput, tbl_userUncheckedCreateWithoutTbl_publicacaoInput>
  }

  export type tbl_comentarioUpsertWithWhereUniqueWithoutTbl_publicacaoInput = {
    where: tbl_comentarioWhereUniqueInput
    update: XOR<tbl_comentarioUpdateWithoutTbl_publicacaoInput, tbl_comentarioUncheckedUpdateWithoutTbl_publicacaoInput>
    create: XOR<tbl_comentarioCreateWithoutTbl_publicacaoInput, tbl_comentarioUncheckedCreateWithoutTbl_publicacaoInput>
  }

  export type tbl_comentarioUpdateWithWhereUniqueWithoutTbl_publicacaoInput = {
    where: tbl_comentarioWhereUniqueInput
    data: XOR<tbl_comentarioUpdateWithoutTbl_publicacaoInput, tbl_comentarioUncheckedUpdateWithoutTbl_publicacaoInput>
  }

  export type tbl_comentarioUpdateManyWithWhereWithoutTbl_publicacaoInput = {
    where: tbl_comentarioScalarWhereInput
    data: XOR<tbl_comentarioUpdateManyMutationInput, tbl_comentarioUncheckedUpdateManyWithoutTbl_publicacaoInput>
  }

  export type tbl_curtidaUpsertWithWhereUniqueWithoutTbl_publicacaoInput = {
    where: tbl_curtidaWhereUniqueInput
    update: XOR<tbl_curtidaUpdateWithoutTbl_publicacaoInput, tbl_curtidaUncheckedUpdateWithoutTbl_publicacaoInput>
    create: XOR<tbl_curtidaCreateWithoutTbl_publicacaoInput, tbl_curtidaUncheckedCreateWithoutTbl_publicacaoInput>
  }

  export type tbl_curtidaUpdateWithWhereUniqueWithoutTbl_publicacaoInput = {
    where: tbl_curtidaWhereUniqueInput
    data: XOR<tbl_curtidaUpdateWithoutTbl_publicacaoInput, tbl_curtidaUncheckedUpdateWithoutTbl_publicacaoInput>
  }

  export type tbl_curtidaUpdateManyWithWhereWithoutTbl_publicacaoInput = {
    where: tbl_curtidaScalarWhereInput
    data: XOR<tbl_curtidaUpdateManyMutationInput, tbl_curtidaUncheckedUpdateManyWithoutTbl_publicacaoInput>
  }

  export type tbl_notificacaoUpsertWithWhereUniqueWithoutTbl_publicacaoInput = {
    where: tbl_notificacaoWhereUniqueInput
    update: XOR<tbl_notificacaoUpdateWithoutTbl_publicacaoInput, tbl_notificacaoUncheckedUpdateWithoutTbl_publicacaoInput>
    create: XOR<tbl_notificacaoCreateWithoutTbl_publicacaoInput, tbl_notificacaoUncheckedCreateWithoutTbl_publicacaoInput>
  }

  export type tbl_notificacaoUpdateWithWhereUniqueWithoutTbl_publicacaoInput = {
    where: tbl_notificacaoWhereUniqueInput
    data: XOR<tbl_notificacaoUpdateWithoutTbl_publicacaoInput, tbl_notificacaoUncheckedUpdateWithoutTbl_publicacaoInput>
  }

  export type tbl_notificacaoUpdateManyWithWhereWithoutTbl_publicacaoInput = {
    where: tbl_notificacaoScalarWhereInput
    data: XOR<tbl_notificacaoUpdateManyMutationInput, tbl_notificacaoUncheckedUpdateManyWithoutTbl_publicacaoInput>
  }

  export type tbl_userUpsertWithoutTbl_publicacaoInput = {
    update: XOR<tbl_userUpdateWithoutTbl_publicacaoInput, tbl_userUncheckedUpdateWithoutTbl_publicacaoInput>
    create: XOR<tbl_userCreateWithoutTbl_publicacaoInput, tbl_userUncheckedCreateWithoutTbl_publicacaoInput>
    where?: tbl_userWhereInput
  }

  export type tbl_userUpdateToOneWithWhereWithoutTbl_publicacaoInput = {
    where?: tbl_userWhereInput
    data: XOR<tbl_userUpdateWithoutTbl_publicacaoInput, tbl_userUncheckedUpdateWithoutTbl_publicacaoInput>
  }

  export type tbl_userUpdateWithoutTbl_publicacaoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    peso?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    imc?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    is_bloqueado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tbl_comentario?: tbl_comentarioUpdateManyWithoutTbl_userNestedInput
    tbl_curtida?: tbl_curtidaUpdateManyWithoutTbl_userNestedInput
    tbl_curtida_comentario?: tbl_curtida_comentarioUpdateManyWithoutTbl_userNestedInput
    tbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_user?: tbl_notificacaoUpdateManyWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userNestedInput
    tbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_user?: tbl_notificacaoUpdateManyWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userNestedInput
    recuperacaoSenha?: tbl_recuperacao_senhaUpdateManyWithoutUsuarioNestedInput
    tbl_treino?: tbl_treinoUpdateManyWithoutTbl_userNestedInput
  }

  export type tbl_userUncheckedUpdateWithoutTbl_publicacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    peso?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    imc?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    is_bloqueado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tbl_comentario?: tbl_comentarioUncheckedUpdateManyWithoutTbl_userNestedInput
    tbl_curtida?: tbl_curtidaUncheckedUpdateManyWithoutTbl_userNestedInput
    tbl_curtida_comentario?: tbl_curtida_comentarioUncheckedUpdateManyWithoutTbl_userNestedInput
    tbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_user?: tbl_notificacaoUncheckedUpdateManyWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userNestedInput
    tbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_user?: tbl_notificacaoUncheckedUpdateManyWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userNestedInput
    recuperacaoSenha?: tbl_recuperacao_senhaUncheckedUpdateManyWithoutUsuarioNestedInput
    tbl_treino?: tbl_treinoUncheckedUpdateManyWithoutTbl_userNestedInput
  }

  export type tbl_exercicio_treinoCreateWithoutTbl_serieInput = {
    tbl_treino: tbl_treinoCreateNestedOneWithoutTbl_exercicio_treinoInput
    tbl_exercicio: tbl_exercicioCreateNestedOneWithoutTbl_exercicio_treinoInput
  }

  export type tbl_exercicio_treinoUncheckedCreateWithoutTbl_serieInput = {
    id?: number
    id_treino: number
    id_exercicio: number
  }

  export type tbl_exercicio_treinoCreateOrConnectWithoutTbl_serieInput = {
    where: tbl_exercicio_treinoWhereUniqueInput
    create: XOR<tbl_exercicio_treinoCreateWithoutTbl_serieInput, tbl_exercicio_treinoUncheckedCreateWithoutTbl_serieInput>
  }

  export type tbl_exercicio_treinoCreateManyTbl_serieInputEnvelope = {
    data: tbl_exercicio_treinoCreateManyTbl_serieInput | tbl_exercicio_treinoCreateManyTbl_serieInput[]
    skipDuplicates?: boolean
  }

  export type tbl_exercicioCreateWithoutTbl_serieInput = {
    nome: string
    gif: string
    descricao: string
    grupo_muscular: string
    tbl_exercicio_treino?: tbl_exercicio_treinoCreateNestedManyWithoutTbl_exercicioInput
  }

  export type tbl_exercicioUncheckedCreateWithoutTbl_serieInput = {
    id?: number
    nome: string
    gif: string
    descricao: string
    grupo_muscular: string
    tbl_exercicio_treino?: tbl_exercicio_treinoUncheckedCreateNestedManyWithoutTbl_exercicioInput
  }

  export type tbl_exercicioCreateOrConnectWithoutTbl_serieInput = {
    where: tbl_exercicioWhereUniqueInput
    create: XOR<tbl_exercicioCreateWithoutTbl_serieInput, tbl_exercicioUncheckedCreateWithoutTbl_serieInput>
  }

  export type tbl_exercicio_treinoUpsertWithWhereUniqueWithoutTbl_serieInput = {
    where: tbl_exercicio_treinoWhereUniqueInput
    update: XOR<tbl_exercicio_treinoUpdateWithoutTbl_serieInput, tbl_exercicio_treinoUncheckedUpdateWithoutTbl_serieInput>
    create: XOR<tbl_exercicio_treinoCreateWithoutTbl_serieInput, tbl_exercicio_treinoUncheckedCreateWithoutTbl_serieInput>
  }

  export type tbl_exercicio_treinoUpdateWithWhereUniqueWithoutTbl_serieInput = {
    where: tbl_exercicio_treinoWhereUniqueInput
    data: XOR<tbl_exercicio_treinoUpdateWithoutTbl_serieInput, tbl_exercicio_treinoUncheckedUpdateWithoutTbl_serieInput>
  }

  export type tbl_exercicio_treinoUpdateManyWithWhereWithoutTbl_serieInput = {
    where: tbl_exercicio_treinoScalarWhereInput
    data: XOR<tbl_exercicio_treinoUpdateManyMutationInput, tbl_exercicio_treinoUncheckedUpdateManyWithoutTbl_serieInput>
  }

  export type tbl_exercicioUpsertWithoutTbl_serieInput = {
    update: XOR<tbl_exercicioUpdateWithoutTbl_serieInput, tbl_exercicioUncheckedUpdateWithoutTbl_serieInput>
    create: XOR<tbl_exercicioCreateWithoutTbl_serieInput, tbl_exercicioUncheckedCreateWithoutTbl_serieInput>
    where?: tbl_exercicioWhereInput
  }

  export type tbl_exercicioUpdateToOneWithWhereWithoutTbl_serieInput = {
    where?: tbl_exercicioWhereInput
    data: XOR<tbl_exercicioUpdateWithoutTbl_serieInput, tbl_exercicioUncheckedUpdateWithoutTbl_serieInput>
  }

  export type tbl_exercicioUpdateWithoutTbl_serieInput = {
    nome?: StringFieldUpdateOperationsInput | string
    gif?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    grupo_muscular?: StringFieldUpdateOperationsInput | string
    tbl_exercicio_treino?: tbl_exercicio_treinoUpdateManyWithoutTbl_exercicioNestedInput
  }

  export type tbl_exercicioUncheckedUpdateWithoutTbl_serieInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    gif?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    grupo_muscular?: StringFieldUpdateOperationsInput | string
    tbl_exercicio_treino?: tbl_exercicio_treinoUncheckedUpdateManyWithoutTbl_exercicioNestedInput
  }

  export type tbl_exercicio_treinoCreateWithoutTbl_treinoInput = {
    tbl_exercicio: tbl_exercicioCreateNestedOneWithoutTbl_exercicio_treinoInput
    tbl_serie: tbl_serieCreateNestedOneWithoutTbl_exercicio_treinoInput
  }

  export type tbl_exercicio_treinoUncheckedCreateWithoutTbl_treinoInput = {
    id?: number
    id_exercicio: number
    id_serie: number
  }

  export type tbl_exercicio_treinoCreateOrConnectWithoutTbl_treinoInput = {
    where: tbl_exercicio_treinoWhereUniqueInput
    create: XOR<tbl_exercicio_treinoCreateWithoutTbl_treinoInput, tbl_exercicio_treinoUncheckedCreateWithoutTbl_treinoInput>
  }

  export type tbl_exercicio_treinoCreateManyTbl_treinoInputEnvelope = {
    data: tbl_exercicio_treinoCreateManyTbl_treinoInput | tbl_exercicio_treinoCreateManyTbl_treinoInput[]
    skipDuplicates?: boolean
  }

  export type tbl_userCreateWithoutTbl_treinoInput = {
    nome: string
    email: string
    senha: string
    peso?: Decimal | DecimalJsLike | number | string | null
    altura?: Decimal | DecimalJsLike | number | string | null
    imc?: Decimal | DecimalJsLike | number | string | null
    nickname: string
    data_nascimento?: Date | string | null
    foto?: string | null
    descricao?: string | null
    localizacao?: string | null
    is_bloqueado?: boolean | null
    tbl_comentario?: tbl_comentarioCreateNestedManyWithoutTbl_userInput
    tbl_curtida?: tbl_curtidaCreateNestedManyWithoutTbl_userInput
    tbl_curtida_comentario?: tbl_curtida_comentarioCreateNestedManyWithoutTbl_userInput
    tbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_user?: tbl_notificacaoCreateNestedManyWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput
    tbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_user?: tbl_notificacaoCreateNestedManyWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput
    tbl_publicacao?: tbl_publicacaoCreateNestedManyWithoutTbl_userInput
    recuperacaoSenha?: tbl_recuperacao_senhaCreateNestedManyWithoutUsuarioInput
  }

  export type tbl_userUncheckedCreateWithoutTbl_treinoInput = {
    id?: number
    nome: string
    email: string
    senha: string
    peso?: Decimal | DecimalJsLike | number | string | null
    altura?: Decimal | DecimalJsLike | number | string | null
    imc?: Decimal | DecimalJsLike | number | string | null
    nickname: string
    data_nascimento?: Date | string | null
    foto?: string | null
    descricao?: string | null
    localizacao?: string | null
    is_bloqueado?: boolean | null
    tbl_comentario?: tbl_comentarioUncheckedCreateNestedManyWithoutTbl_userInput
    tbl_curtida?: tbl_curtidaUncheckedCreateNestedManyWithoutTbl_userInput
    tbl_curtida_comentario?: tbl_curtida_comentarioUncheckedCreateNestedManyWithoutTbl_userInput
    tbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_user?: tbl_notificacaoUncheckedCreateNestedManyWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput
    tbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_user?: tbl_notificacaoUncheckedCreateNestedManyWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput
    tbl_publicacao?: tbl_publicacaoUncheckedCreateNestedManyWithoutTbl_userInput
    recuperacaoSenha?: tbl_recuperacao_senhaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type tbl_userCreateOrConnectWithoutTbl_treinoInput = {
    where: tbl_userWhereUniqueInput
    create: XOR<tbl_userCreateWithoutTbl_treinoInput, tbl_userUncheckedCreateWithoutTbl_treinoInput>
  }

  export type tbl_exercicio_treinoUpsertWithWhereUniqueWithoutTbl_treinoInput = {
    where: tbl_exercicio_treinoWhereUniqueInput
    update: XOR<tbl_exercicio_treinoUpdateWithoutTbl_treinoInput, tbl_exercicio_treinoUncheckedUpdateWithoutTbl_treinoInput>
    create: XOR<tbl_exercicio_treinoCreateWithoutTbl_treinoInput, tbl_exercicio_treinoUncheckedCreateWithoutTbl_treinoInput>
  }

  export type tbl_exercicio_treinoUpdateWithWhereUniqueWithoutTbl_treinoInput = {
    where: tbl_exercicio_treinoWhereUniqueInput
    data: XOR<tbl_exercicio_treinoUpdateWithoutTbl_treinoInput, tbl_exercicio_treinoUncheckedUpdateWithoutTbl_treinoInput>
  }

  export type tbl_exercicio_treinoUpdateManyWithWhereWithoutTbl_treinoInput = {
    where: tbl_exercicio_treinoScalarWhereInput
    data: XOR<tbl_exercicio_treinoUpdateManyMutationInput, tbl_exercicio_treinoUncheckedUpdateManyWithoutTbl_treinoInput>
  }

  export type tbl_userUpsertWithoutTbl_treinoInput = {
    update: XOR<tbl_userUpdateWithoutTbl_treinoInput, tbl_userUncheckedUpdateWithoutTbl_treinoInput>
    create: XOR<tbl_userCreateWithoutTbl_treinoInput, tbl_userUncheckedCreateWithoutTbl_treinoInput>
    where?: tbl_userWhereInput
  }

  export type tbl_userUpdateToOneWithWhereWithoutTbl_treinoInput = {
    where?: tbl_userWhereInput
    data: XOR<tbl_userUpdateWithoutTbl_treinoInput, tbl_userUncheckedUpdateWithoutTbl_treinoInput>
  }

  export type tbl_userUpdateWithoutTbl_treinoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    peso?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    imc?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    is_bloqueado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tbl_comentario?: tbl_comentarioUpdateManyWithoutTbl_userNestedInput
    tbl_curtida?: tbl_curtidaUpdateManyWithoutTbl_userNestedInput
    tbl_curtida_comentario?: tbl_curtida_comentarioUpdateManyWithoutTbl_userNestedInput
    tbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_user?: tbl_notificacaoUpdateManyWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userNestedInput
    tbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_user?: tbl_notificacaoUpdateManyWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userNestedInput
    tbl_publicacao?: tbl_publicacaoUpdateManyWithoutTbl_userNestedInput
    recuperacaoSenha?: tbl_recuperacao_senhaUpdateManyWithoutUsuarioNestedInput
  }

  export type tbl_userUncheckedUpdateWithoutTbl_treinoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    peso?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    imc?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    is_bloqueado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tbl_comentario?: tbl_comentarioUncheckedUpdateManyWithoutTbl_userNestedInput
    tbl_curtida?: tbl_curtidaUncheckedUpdateManyWithoutTbl_userNestedInput
    tbl_curtida_comentario?: tbl_curtida_comentarioUncheckedUpdateManyWithoutTbl_userNestedInput
    tbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_user?: tbl_notificacaoUncheckedUpdateManyWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userNestedInput
    tbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_user?: tbl_notificacaoUncheckedUpdateManyWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userNestedInput
    tbl_publicacao?: tbl_publicacaoUncheckedUpdateManyWithoutTbl_userNestedInput
    recuperacaoSenha?: tbl_recuperacao_senhaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type tbl_comentarioCreateManyTbl_userInput = {
    id?: number
    conteudo: string
    data_comentario: Date | string
    id_publicacao: number
    curtidas_count?: number | null
  }

  export type tbl_curtidaCreateManyTbl_userInput = {
    id?: number
    id_publicacao: number
  }

  export type tbl_curtida_comentarioCreateManyTbl_userInput = {
    id?: number
    id_comentario: number
  }

  export type tbl_notificacaoCreateManyTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput = {
    id?: number
    id_usuario_origem: number
    id_publicacao?: number | null
    id_comentario?: number | null
    id_curtida?: number | null
    id_curtida_comentario?: number | null
    tipo_notificacao: string
    data_criacao: Date | string
    is_lida?: boolean | null
  }

  export type tbl_notificacaoCreateManyTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput = {
    id?: number
    id_usuario_destino: number
    id_publicacao?: number | null
    id_comentario?: number | null
    id_curtida?: number | null
    id_curtida_comentario?: number | null
    tipo_notificacao: string
    data_criacao: Date | string
    is_lida?: boolean | null
  }

  export type tbl_publicacaoCreateManyTbl_userInput = {
    id?: number
    imagem: string
    descricao?: string | null
    data_publicacao?: Date | string | null
    localizacao?: string | null
    curtidas_count?: number | null
    comentarios_count?: number | null
  }

  export type tbl_recuperacao_senhaCreateManyUsuarioInput = {
    id?: number
    token: number
    data_criacao: Date | string
  }

  export type tbl_treinoCreateManyTbl_userInput = {
    id?: number
    nome: string
  }

  export type tbl_comentarioUpdateWithoutTbl_userInput = {
    conteudo?: StringFieldUpdateOperationsInput | string
    data_comentario?: DateTimeFieldUpdateOperationsInput | Date | string
    curtidas_count?: NullableIntFieldUpdateOperationsInput | number | null
    tbl_publicacao?: tbl_publicacaoUpdateOneRequiredWithoutTbl_comentarioNestedInput
    tbl_curtida_comentario?: tbl_curtida_comentarioUpdateManyWithoutTbl_comentarioNestedInput
    tbl_notificacao?: tbl_notificacaoUpdateManyWithoutTbl_comentarioNestedInput
  }

  export type tbl_comentarioUncheckedUpdateWithoutTbl_userInput = {
    id?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
    data_comentario?: DateTimeFieldUpdateOperationsInput | Date | string
    id_publicacao?: IntFieldUpdateOperationsInput | number
    curtidas_count?: NullableIntFieldUpdateOperationsInput | number | null
    tbl_curtida_comentario?: tbl_curtida_comentarioUncheckedUpdateManyWithoutTbl_comentarioNestedInput
    tbl_notificacao?: tbl_notificacaoUncheckedUpdateManyWithoutTbl_comentarioNestedInput
  }

  export type tbl_comentarioUncheckedUpdateManyWithoutTbl_userInput = {
    id?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
    data_comentario?: DateTimeFieldUpdateOperationsInput | Date | string
    id_publicacao?: IntFieldUpdateOperationsInput | number
    curtidas_count?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type tbl_curtidaUpdateWithoutTbl_userInput = {
    tbl_publicacao?: tbl_publicacaoUpdateOneRequiredWithoutTbl_curtidaNestedInput
    tbl_notificacao?: tbl_notificacaoUpdateManyWithoutTbl_curtidaNestedInput
  }

  export type tbl_curtidaUncheckedUpdateWithoutTbl_userInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_publicacao?: IntFieldUpdateOperationsInput | number
    tbl_notificacao?: tbl_notificacaoUncheckedUpdateManyWithoutTbl_curtidaNestedInput
  }

  export type tbl_curtidaUncheckedUpdateManyWithoutTbl_userInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_publicacao?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_curtida_comentarioUpdateWithoutTbl_userInput = {
    tbl_comentario?: tbl_comentarioUpdateOneRequiredWithoutTbl_curtida_comentarioNestedInput
    tbl_notificacao?: tbl_notificacaoUpdateManyWithoutTbl_curtida_comentarioNestedInput
  }

  export type tbl_curtida_comentarioUncheckedUpdateWithoutTbl_userInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_comentario?: IntFieldUpdateOperationsInput | number
    tbl_notificacao?: tbl_notificacaoUncheckedUpdateManyWithoutTbl_curtida_comentarioNestedInput
  }

  export type tbl_curtida_comentarioUncheckedUpdateManyWithoutTbl_userInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_comentario?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_notificacaoUpdateWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput = {
    tipo_notificacao?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    is_lida?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tbl_user_tbl_notificacao_id_usuario_origemTotbl_user?: tbl_userUpdateOneRequiredWithoutTbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_userNestedInput
    tbl_publicacao?: tbl_publicacaoUpdateOneWithoutTbl_notificacaoNestedInput
    tbl_comentario?: tbl_comentarioUpdateOneWithoutTbl_notificacaoNestedInput
    tbl_curtida?: tbl_curtidaUpdateOneWithoutTbl_notificacaoNestedInput
    tbl_curtida_comentario?: tbl_curtida_comentarioUpdateOneWithoutTbl_notificacaoNestedInput
  }

  export type tbl_notificacaoUncheckedUpdateWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_usuario_origem?: IntFieldUpdateOperationsInput | number
    id_publicacao?: NullableIntFieldUpdateOperationsInput | number | null
    id_comentario?: NullableIntFieldUpdateOperationsInput | number | null
    id_curtida?: NullableIntFieldUpdateOperationsInput | number | null
    id_curtida_comentario?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_notificacao?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    is_lida?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type tbl_notificacaoUncheckedUpdateManyWithoutTbl_user_tbl_notificacao_id_usuario_destinoTotbl_userInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_usuario_origem?: IntFieldUpdateOperationsInput | number
    id_publicacao?: NullableIntFieldUpdateOperationsInput | number | null
    id_comentario?: NullableIntFieldUpdateOperationsInput | number | null
    id_curtida?: NullableIntFieldUpdateOperationsInput | number | null
    id_curtida_comentario?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_notificacao?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    is_lida?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type tbl_notificacaoUpdateWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput = {
    tipo_notificacao?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    is_lida?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tbl_user_tbl_notificacao_id_usuario_destinoTotbl_user?: tbl_userUpdateOneRequiredWithoutTbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_userNestedInput
    tbl_publicacao?: tbl_publicacaoUpdateOneWithoutTbl_notificacaoNestedInput
    tbl_comentario?: tbl_comentarioUpdateOneWithoutTbl_notificacaoNestedInput
    tbl_curtida?: tbl_curtidaUpdateOneWithoutTbl_notificacaoNestedInput
    tbl_curtida_comentario?: tbl_curtida_comentarioUpdateOneWithoutTbl_notificacaoNestedInput
  }

  export type tbl_notificacaoUncheckedUpdateWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_usuario_destino?: IntFieldUpdateOperationsInput | number
    id_publicacao?: NullableIntFieldUpdateOperationsInput | number | null
    id_comentario?: NullableIntFieldUpdateOperationsInput | number | null
    id_curtida?: NullableIntFieldUpdateOperationsInput | number | null
    id_curtida_comentario?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_notificacao?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    is_lida?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type tbl_notificacaoUncheckedUpdateManyWithoutTbl_user_tbl_notificacao_id_usuario_origemTotbl_userInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_usuario_destino?: IntFieldUpdateOperationsInput | number
    id_publicacao?: NullableIntFieldUpdateOperationsInput | number | null
    id_comentario?: NullableIntFieldUpdateOperationsInput | number | null
    id_curtida?: NullableIntFieldUpdateOperationsInput | number | null
    id_curtida_comentario?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_notificacao?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    is_lida?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type tbl_publicacaoUpdateWithoutTbl_userInput = {
    imagem?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data_publicacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    curtidas_count?: NullableIntFieldUpdateOperationsInput | number | null
    comentarios_count?: NullableIntFieldUpdateOperationsInput | number | null
    tbl_comentario?: tbl_comentarioUpdateManyWithoutTbl_publicacaoNestedInput
    tbl_curtida?: tbl_curtidaUpdateManyWithoutTbl_publicacaoNestedInput
    tbl_notificacao?: tbl_notificacaoUpdateManyWithoutTbl_publicacaoNestedInput
  }

  export type tbl_publicacaoUncheckedUpdateWithoutTbl_userInput = {
    id?: IntFieldUpdateOperationsInput | number
    imagem?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data_publicacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    curtidas_count?: NullableIntFieldUpdateOperationsInput | number | null
    comentarios_count?: NullableIntFieldUpdateOperationsInput | number | null
    tbl_comentario?: tbl_comentarioUncheckedUpdateManyWithoutTbl_publicacaoNestedInput
    tbl_curtida?: tbl_curtidaUncheckedUpdateManyWithoutTbl_publicacaoNestedInput
    tbl_notificacao?: tbl_notificacaoUncheckedUpdateManyWithoutTbl_publicacaoNestedInput
  }

  export type tbl_publicacaoUncheckedUpdateManyWithoutTbl_userInput = {
    id?: IntFieldUpdateOperationsInput | number
    imagem?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data_publicacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    curtidas_count?: NullableIntFieldUpdateOperationsInput | number | null
    comentarios_count?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type tbl_recuperacao_senhaUpdateWithoutUsuarioInput = {
    token?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_recuperacao_senhaUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_recuperacao_senhaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_treinoUpdateWithoutTbl_userInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tbl_exercicio_treino?: tbl_exercicio_treinoUpdateManyWithoutTbl_treinoNestedInput
  }

  export type tbl_treinoUncheckedUpdateWithoutTbl_userInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tbl_exercicio_treino?: tbl_exercicio_treinoUncheckedUpdateManyWithoutTbl_treinoNestedInput
  }

  export type tbl_treinoUncheckedUpdateManyWithoutTbl_userInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_curtida_comentarioCreateManyTbl_comentarioInput = {
    id?: number
    id_user: number
  }

  export type tbl_notificacaoCreateManyTbl_comentarioInput = {
    id?: number
    id_usuario_destino: number
    id_usuario_origem: number
    id_publicacao?: number | null
    id_curtida?: number | null
    id_curtida_comentario?: number | null
    tipo_notificacao: string
    data_criacao: Date | string
    is_lida?: boolean | null
  }

  export type tbl_curtida_comentarioUpdateWithoutTbl_comentarioInput = {
    tbl_user?: tbl_userUpdateOneRequiredWithoutTbl_curtida_comentarioNestedInput
    tbl_notificacao?: tbl_notificacaoUpdateManyWithoutTbl_curtida_comentarioNestedInput
  }

  export type tbl_curtida_comentarioUncheckedUpdateWithoutTbl_comentarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    tbl_notificacao?: tbl_notificacaoUncheckedUpdateManyWithoutTbl_curtida_comentarioNestedInput
  }

  export type tbl_curtida_comentarioUncheckedUpdateManyWithoutTbl_comentarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_notificacaoUpdateWithoutTbl_comentarioInput = {
    tipo_notificacao?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    is_lida?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tbl_user_tbl_notificacao_id_usuario_destinoTotbl_user?: tbl_userUpdateOneRequiredWithoutTbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_userNestedInput
    tbl_user_tbl_notificacao_id_usuario_origemTotbl_user?: tbl_userUpdateOneRequiredWithoutTbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_userNestedInput
    tbl_publicacao?: tbl_publicacaoUpdateOneWithoutTbl_notificacaoNestedInput
    tbl_curtida?: tbl_curtidaUpdateOneWithoutTbl_notificacaoNestedInput
    tbl_curtida_comentario?: tbl_curtida_comentarioUpdateOneWithoutTbl_notificacaoNestedInput
  }

  export type tbl_notificacaoUncheckedUpdateWithoutTbl_comentarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_usuario_destino?: IntFieldUpdateOperationsInput | number
    id_usuario_origem?: IntFieldUpdateOperationsInput | number
    id_publicacao?: NullableIntFieldUpdateOperationsInput | number | null
    id_curtida?: NullableIntFieldUpdateOperationsInput | number | null
    id_curtida_comentario?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_notificacao?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    is_lida?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type tbl_notificacaoUncheckedUpdateManyWithoutTbl_comentarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_usuario_destino?: IntFieldUpdateOperationsInput | number
    id_usuario_origem?: IntFieldUpdateOperationsInput | number
    id_publicacao?: NullableIntFieldUpdateOperationsInput | number | null
    id_curtida?: NullableIntFieldUpdateOperationsInput | number | null
    id_curtida_comentario?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_notificacao?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    is_lida?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type tbl_notificacaoCreateManyTbl_curtidaInput = {
    id?: number
    id_usuario_destino: number
    id_usuario_origem: number
    id_publicacao?: number | null
    id_comentario?: number | null
    id_curtida_comentario?: number | null
    tipo_notificacao: string
    data_criacao: Date | string
    is_lida?: boolean | null
  }

  export type tbl_notificacaoUpdateWithoutTbl_curtidaInput = {
    tipo_notificacao?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    is_lida?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tbl_user_tbl_notificacao_id_usuario_destinoTotbl_user?: tbl_userUpdateOneRequiredWithoutTbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_userNestedInput
    tbl_user_tbl_notificacao_id_usuario_origemTotbl_user?: tbl_userUpdateOneRequiredWithoutTbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_userNestedInput
    tbl_publicacao?: tbl_publicacaoUpdateOneWithoutTbl_notificacaoNestedInput
    tbl_comentario?: tbl_comentarioUpdateOneWithoutTbl_notificacaoNestedInput
    tbl_curtida_comentario?: tbl_curtida_comentarioUpdateOneWithoutTbl_notificacaoNestedInput
  }

  export type tbl_notificacaoUncheckedUpdateWithoutTbl_curtidaInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_usuario_destino?: IntFieldUpdateOperationsInput | number
    id_usuario_origem?: IntFieldUpdateOperationsInput | number
    id_publicacao?: NullableIntFieldUpdateOperationsInput | number | null
    id_comentario?: NullableIntFieldUpdateOperationsInput | number | null
    id_curtida_comentario?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_notificacao?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    is_lida?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type tbl_notificacaoUncheckedUpdateManyWithoutTbl_curtidaInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_usuario_destino?: IntFieldUpdateOperationsInput | number
    id_usuario_origem?: IntFieldUpdateOperationsInput | number
    id_publicacao?: NullableIntFieldUpdateOperationsInput | number | null
    id_comentario?: NullableIntFieldUpdateOperationsInput | number | null
    id_curtida_comentario?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_notificacao?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    is_lida?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type tbl_notificacaoCreateManyTbl_curtida_comentarioInput = {
    id?: number
    id_usuario_destino: number
    id_usuario_origem: number
    id_publicacao?: number | null
    id_comentario?: number | null
    id_curtida?: number | null
    tipo_notificacao: string
    data_criacao: Date | string
    is_lida?: boolean | null
  }

  export type tbl_notificacaoUpdateWithoutTbl_curtida_comentarioInput = {
    tipo_notificacao?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    is_lida?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tbl_user_tbl_notificacao_id_usuario_destinoTotbl_user?: tbl_userUpdateOneRequiredWithoutTbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_userNestedInput
    tbl_user_tbl_notificacao_id_usuario_origemTotbl_user?: tbl_userUpdateOneRequiredWithoutTbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_userNestedInput
    tbl_publicacao?: tbl_publicacaoUpdateOneWithoutTbl_notificacaoNestedInput
    tbl_comentario?: tbl_comentarioUpdateOneWithoutTbl_notificacaoNestedInput
    tbl_curtida?: tbl_curtidaUpdateOneWithoutTbl_notificacaoNestedInput
  }

  export type tbl_notificacaoUncheckedUpdateWithoutTbl_curtida_comentarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_usuario_destino?: IntFieldUpdateOperationsInput | number
    id_usuario_origem?: IntFieldUpdateOperationsInput | number
    id_publicacao?: NullableIntFieldUpdateOperationsInput | number | null
    id_comentario?: NullableIntFieldUpdateOperationsInput | number | null
    id_curtida?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_notificacao?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    is_lida?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type tbl_notificacaoUncheckedUpdateManyWithoutTbl_curtida_comentarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_usuario_destino?: IntFieldUpdateOperationsInput | number
    id_usuario_origem?: IntFieldUpdateOperationsInput | number
    id_publicacao?: NullableIntFieldUpdateOperationsInput | number | null
    id_comentario?: NullableIntFieldUpdateOperationsInput | number | null
    id_curtida?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_notificacao?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    is_lida?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type tbl_exercicio_treinoCreateManyTbl_exercicioInput = {
    id?: number
    id_treino: number
    id_serie: number
  }

  export type tbl_serieCreateManyTbl_exercicioInput = {
    id?: number
    nome?: string | null
    peso: Decimal | DecimalJsLike | number | string
    repeticoes: number
  }

  export type tbl_exercicio_treinoUpdateWithoutTbl_exercicioInput = {
    tbl_treino?: tbl_treinoUpdateOneRequiredWithoutTbl_exercicio_treinoNestedInput
    tbl_serie?: tbl_serieUpdateOneRequiredWithoutTbl_exercicio_treinoNestedInput
  }

  export type tbl_exercicio_treinoUncheckedUpdateWithoutTbl_exercicioInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_treino?: IntFieldUpdateOperationsInput | number
    id_serie?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_exercicio_treinoUncheckedUpdateManyWithoutTbl_exercicioInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_treino?: IntFieldUpdateOperationsInput | number
    id_serie?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_serieUpdateWithoutTbl_exercicioInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    repeticoes?: IntFieldUpdateOperationsInput | number
    tbl_exercicio_treino?: tbl_exercicio_treinoUpdateManyWithoutTbl_serieNestedInput
  }

  export type tbl_serieUncheckedUpdateWithoutTbl_exercicioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    repeticoes?: IntFieldUpdateOperationsInput | number
    tbl_exercicio_treino?: tbl_exercicio_treinoUncheckedUpdateManyWithoutTbl_serieNestedInput
  }

  export type tbl_serieUncheckedUpdateManyWithoutTbl_exercicioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    repeticoes?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_comentarioCreateManyTbl_publicacaoInput = {
    id?: number
    conteudo: string
    data_comentario: Date | string
    id_user: number
    curtidas_count?: number | null
  }

  export type tbl_curtidaCreateManyTbl_publicacaoInput = {
    id?: number
    id_user: number
  }

  export type tbl_notificacaoCreateManyTbl_publicacaoInput = {
    id?: number
    id_usuario_destino: number
    id_usuario_origem: number
    id_comentario?: number | null
    id_curtida?: number | null
    id_curtida_comentario?: number | null
    tipo_notificacao: string
    data_criacao: Date | string
    is_lida?: boolean | null
  }

  export type tbl_comentarioUpdateWithoutTbl_publicacaoInput = {
    conteudo?: StringFieldUpdateOperationsInput | string
    data_comentario?: DateTimeFieldUpdateOperationsInput | Date | string
    curtidas_count?: NullableIntFieldUpdateOperationsInput | number | null
    tbl_user?: tbl_userUpdateOneRequiredWithoutTbl_comentarioNestedInput
    tbl_curtida_comentario?: tbl_curtida_comentarioUpdateManyWithoutTbl_comentarioNestedInput
    tbl_notificacao?: tbl_notificacaoUpdateManyWithoutTbl_comentarioNestedInput
  }

  export type tbl_comentarioUncheckedUpdateWithoutTbl_publicacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
    data_comentario?: DateTimeFieldUpdateOperationsInput | Date | string
    id_user?: IntFieldUpdateOperationsInput | number
    curtidas_count?: NullableIntFieldUpdateOperationsInput | number | null
    tbl_curtida_comentario?: tbl_curtida_comentarioUncheckedUpdateManyWithoutTbl_comentarioNestedInput
    tbl_notificacao?: tbl_notificacaoUncheckedUpdateManyWithoutTbl_comentarioNestedInput
  }

  export type tbl_comentarioUncheckedUpdateManyWithoutTbl_publicacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
    data_comentario?: DateTimeFieldUpdateOperationsInput | Date | string
    id_user?: IntFieldUpdateOperationsInput | number
    curtidas_count?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type tbl_curtidaUpdateWithoutTbl_publicacaoInput = {
    tbl_user?: tbl_userUpdateOneRequiredWithoutTbl_curtidaNestedInput
    tbl_notificacao?: tbl_notificacaoUpdateManyWithoutTbl_curtidaNestedInput
  }

  export type tbl_curtidaUncheckedUpdateWithoutTbl_publicacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    tbl_notificacao?: tbl_notificacaoUncheckedUpdateManyWithoutTbl_curtidaNestedInput
  }

  export type tbl_curtidaUncheckedUpdateManyWithoutTbl_publicacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_notificacaoUpdateWithoutTbl_publicacaoInput = {
    tipo_notificacao?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    is_lida?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tbl_user_tbl_notificacao_id_usuario_destinoTotbl_user?: tbl_userUpdateOneRequiredWithoutTbl_notificacao_tbl_notificacao_id_usuario_destinoTotbl_userNestedInput
    tbl_user_tbl_notificacao_id_usuario_origemTotbl_user?: tbl_userUpdateOneRequiredWithoutTbl_notificacao_tbl_notificacao_id_usuario_origemTotbl_userNestedInput
    tbl_comentario?: tbl_comentarioUpdateOneWithoutTbl_notificacaoNestedInput
    tbl_curtida?: tbl_curtidaUpdateOneWithoutTbl_notificacaoNestedInput
    tbl_curtida_comentario?: tbl_curtida_comentarioUpdateOneWithoutTbl_notificacaoNestedInput
  }

  export type tbl_notificacaoUncheckedUpdateWithoutTbl_publicacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_usuario_destino?: IntFieldUpdateOperationsInput | number
    id_usuario_origem?: IntFieldUpdateOperationsInput | number
    id_comentario?: NullableIntFieldUpdateOperationsInput | number | null
    id_curtida?: NullableIntFieldUpdateOperationsInput | number | null
    id_curtida_comentario?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_notificacao?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    is_lida?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type tbl_notificacaoUncheckedUpdateManyWithoutTbl_publicacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_usuario_destino?: IntFieldUpdateOperationsInput | number
    id_usuario_origem?: IntFieldUpdateOperationsInput | number
    id_comentario?: NullableIntFieldUpdateOperationsInput | number | null
    id_curtida?: NullableIntFieldUpdateOperationsInput | number | null
    id_curtida_comentario?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_notificacao?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    is_lida?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type tbl_exercicio_treinoCreateManyTbl_serieInput = {
    id?: number
    id_treino: number
    id_exercicio: number
  }

  export type tbl_exercicio_treinoUpdateWithoutTbl_serieInput = {
    tbl_treino?: tbl_treinoUpdateOneRequiredWithoutTbl_exercicio_treinoNestedInput
    tbl_exercicio?: tbl_exercicioUpdateOneRequiredWithoutTbl_exercicio_treinoNestedInput
  }

  export type tbl_exercicio_treinoUncheckedUpdateWithoutTbl_serieInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_treino?: IntFieldUpdateOperationsInput | number
    id_exercicio?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_exercicio_treinoUncheckedUpdateManyWithoutTbl_serieInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_treino?: IntFieldUpdateOperationsInput | number
    id_exercicio?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_exercicio_treinoCreateManyTbl_treinoInput = {
    id?: number
    id_exercicio: number
    id_serie: number
  }

  export type tbl_exercicio_treinoUpdateWithoutTbl_treinoInput = {
    tbl_exercicio?: tbl_exercicioUpdateOneRequiredWithoutTbl_exercicio_treinoNestedInput
    tbl_serie?: tbl_serieUpdateOneRequiredWithoutTbl_exercicio_treinoNestedInput
  }

  export type tbl_exercicio_treinoUncheckedUpdateWithoutTbl_treinoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_exercicio?: IntFieldUpdateOperationsInput | number
    id_serie?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_exercicio_treinoUncheckedUpdateManyWithoutTbl_treinoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_exercicio?: IntFieldUpdateOperationsInput | number
    id_serie?: IntFieldUpdateOperationsInput | number
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