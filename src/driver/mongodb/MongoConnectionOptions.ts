import {BaseConnectionOptions} from "../../connection/BaseConnectionOptions";

/**
 * MongoDB specific connection options.
 * Synced with http://mongodb.github.io/node-mongodb-native/3.1/api/MongoClient.html
 */
export interface MongoConnectionOptions extends BaseConnectionOptions {

    /**
     * Database type.
     */
    readonly type: "mongodb";

    /**
     * Connection url where perform connection to.
     */
    readonly url?: string;

    /**
     * Database host.
     */
    readonly host?: string;

    /**
     * Database host port.
     */
    readonly port?: number;

    /**
     * Database username.
     */
    readonly username?: string;

    /**
     * Database password.
     */
    readonly password?: string;

    /**
     * Database name to connect to.
     */
    readonly database?: string;
    /** Specifies the name of the replica set, if the mongod is a member of a replica set. */
    replicaSet?: string;
    /** Enables or disables TLS/SSL for the connection. */
    tls?: boolean;
    /** A boolean to enable or disables TLS/SSL for the connection. (The ssl option is equivalent to the tls option.) */
    ssl?: boolean;
    /** Specifies the location of a local TLS Certificate */
    tlsCertificateFile?: string;
    /** Specifies the location of a local .pem file that contains either the client's TLS/SSL certificate and key or only the client's TLS/SSL key when tlsCertificateFile is used to provide the certificate. */
    tlsCertificateKeyFile?: string;
    /** Specifies the password to de-crypt the tlsCertificateKeyFile. */
    tlsCertificateKeyFilePassword?: string;
    /** Specifies the location of a local .pem file that contains the root certificate chain from the Certificate Authority. This file is used to validate the certificate presented by the mongod/mongos instance. */
    tlsCAFile?: string;
    /** Bypasses validation of the certificates presented by the mongod/mongos instance */
    tlsAllowInvalidCertificates?: boolean;
    /** Disables hostname validation of the certificate presented by the mongod/mongos instance. */
    tlsAllowInvalidHostnames?: boolean;
    /** Disables various certificate validations. */
    tlsInsecure?: boolean;
    /** The time in milliseconds to attempt a connection before timing out. */
    connectTimeoutMS?: number;
    /** The time in milliseconds to attempt a send or receive on a socket before the attempt times out. */
    socketTimeoutMS?: number;
    /** An array or comma-delimited string of compressors to enable network compression for communication between this client and a mongod/mongos instance. */
    compressors?: string[] | string;
    /** An integer that specifies the compression level if using zlib for network compression. */
    zlibCompressionLevel?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | undefined;
    /** The maximum number of hosts to connect to when using an srv connection string, a setting of `0` means unlimited hosts */
    srvMaxHosts?: number;
    /**
     * Modifies the srv URI to look like:
     *
     * `_{srvServiceName}._tcp.{hostname}.{domainname}`
     *
     * Querying this DNS URI is expected to respond with SRV records
     */
    srvServiceName?: string;
    /** The maximum number of connections in the connection pool. */
    maxPoolSize?: number;
    /** The minimum number of connections in the connection pool. */
    minPoolSize?: number;
    /** The maximum number of milliseconds that a connection can remain idle in the pool before being removed and closed. */
    maxIdleTimeMS?: number;
    /** The maximum time in milliseconds that a thread can wait for a connection to become available. */
    waitQueueTimeoutMS?: number;
    /** Specify a read concern for the collection (only MongoDB 3.2 or higher supported) */
    readConcern?: string | {level: string};
    /** The level of isolation */
    readConcernLevel?: string;
    /** Specifies the read preferences for this connection */
    readPreference?: string;
    /** Specifies, in seconds, how stale a secondary can be before the client stops using it for read operations. */
    maxStalenessSeconds?: number;
    /** Specifies the tags document as a comma-separated list of colon-separated key-value pairs.  */
    readPreferenceTags?: Record<string, string>[];
    /** Specify the database name associated with the user’s credentials. */
    authSource?: string;
    /** Specify the authentication mechanism that MongoDB will use to authenticate the connection. */
    authMechanism?: string;
    /** Specify properties for the specified authMechanism as a comma-separated list of colon-separated key-value pairs. */
    authMechanismProperties?: Record<string, unknown>;
    /** The size (in milliseconds) of the latency window for selecting among multiple suitable MongoDB instances. */
    localThresholdMS?: number;
    /** Specifies how long (in milliseconds) to block for server selection before throwing an exception.  */
    serverSelectionTimeoutMS?: number;
    /** heartbeatFrequencyMS controls when the driver checks the state of the MongoDB deployment. Specify the interval (in milliseconds) between checks, counted from the end of the previous check until the beginning of the next one. */
    heartbeatFrequencyMS?: number;
    /** Sets the minimum heartbeat frequency. In the event that the driver has to frequently re-check a server's availability, it will wait at least this long since the previous check to avoid wasted effort. */
    minHeartbeatFrequencyMS?: number;
    /** The name of the application that created this MongoClient instance. MongoDB 3.4 and newer will print this value in the server log upon establishing each connection. It is also recorded in the slow query log and profile collections */
    appName?: string;
    /** Enables retryable reads. */
    retryReads?: boolean;
    /** Enable retryable writes. */
    retryWrites?: boolean;
    /** Allow a driver to force a Single topology type with a connection string containing one host */
    directConnection?: boolean;
    /** Instruct the driver it is connecting to a load balancer fronting a mongos like service */
    loadBalanced?: boolean;
    /** The write concern w value */
    w?: number | 'majority';
    /** The write concern timeout */
    wtimeoutMS?: number;
    /** The journal write concern */
    journal?: boolean;
    /** Validate mongod server certificate against Certificate Authority */
    sslValidate?: boolean;
    /** SSL Certificate file path. */
    sslCA?: string;
    /** SSL Certificate file path. */
    sslCert?: string;
    /** SSL Key file file path. */
    sslKey?: string;
    /** SSL Certificate pass phrase. */
    sslPass?: string;
    /** SSL Certificate revocation list file path. */
    sslCRL?: string;
    /** TCP Connection no delay */
    noDelay?: boolean;
    /** TCP Connection keep alive enabled */
    keepAlive?: boolean;
    /** The number of milliseconds to wait before initiating keepAlive on the TCP socket */
    keepAliveInitialDelay?: number;
    /** Force server to assign `_id` values instead of driver */
    forceServerObjectId?: boolean;
    /** Return document results as raw BSON buffers */
    raw?: boolean;
    /** A Promise library class the application wishes to use such as Bluebird, must be ES6 compatible */
    promiseLibrary?: any;
    /** Enable command monitoring for this client */
    monitorCommands?: boolean;
    /** Server API version */
    serverApi?: {
          version: {
              readonly v1: "1";
          };
          strict?: boolean;
          deprecationErrors?: boolean;
      }
      | {
        readonly v1: "1";
    };
    /** Configures a Socks5 proxy host used for creating TCP connections. */
    proxyHost?: string;
    /** Configures a Socks5 proxy port used for creating TCP connections. */
    proxyPort?: number;
    /** Configures a Socks5 proxy username when the proxy in proxyHost requires username/password authentication. */
    proxyUsername?: string;
    /** Configures a Socks5 proxy password when the proxy in proxyHost requires username/password authentication. */
    proxyPassword?: string;
}
