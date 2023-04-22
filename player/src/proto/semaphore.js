/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const semaphore = $root.semaphore = (() => {

    /**
     * Namespace semaphore.
     * @exports semaphore
     * @namespace
     */
    const semaphore = {};

    semaphore.Action = (function() {

        /**
         * Properties of an Action.
         * @memberof semaphore
         * @interface IAction
         * @property {number|null} [x] Action x
         * @property {number|null} [y] Action y
         */

        /**
         * Constructs a new Action.
         * @memberof semaphore
         * @classdesc Represents an Action.
         * @implements IAction
         * @constructor
         * @param {semaphore.IAction=} [properties] Properties to set
         */
        function Action(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Action x.
         * @member {number} x
         * @memberof semaphore.Action
         * @instance
         */
        Action.prototype.x = 0;

        /**
         * Action y.
         * @member {number} y
         * @memberof semaphore.Action
         * @instance
         */
        Action.prototype.y = 0;

        /**
         * Creates a new Action instance using the specified properties.
         * @function create
         * @memberof semaphore.Action
         * @static
         * @param {semaphore.IAction=} [properties] Properties to set
         * @returns {semaphore.Action} Action instance
         */
        Action.create = function create(properties) {
            return new Action(properties);
        };

        /**
         * Encodes the specified Action message. Does not implicitly {@link semaphore.Action.verify|verify} messages.
         * @function encode
         * @memberof semaphore.Action
         * @static
         * @param {semaphore.IAction} message Action message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Action.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.y);
            return writer;
        };

        /**
         * Encodes the specified Action message, length delimited. Does not implicitly {@link semaphore.Action.verify|verify} messages.
         * @function encodeDelimited
         * @memberof semaphore.Action
         * @static
         * @param {semaphore.IAction} message Action message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Action.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Action message from the specified reader or buffer.
         * @function decode
         * @memberof semaphore.Action
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {semaphore.Action} Action
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Action.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.semaphore.Action();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.x = reader.uint32();
                    break;
                case 2:
                    message.y = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Action message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof semaphore.Action
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {semaphore.Action} Action
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Action.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Action message.
         * @function verify
         * @memberof semaphore.Action
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Action.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (!$util.isInteger(message.x))
                    return "x: integer expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (!$util.isInteger(message.y))
                    return "y: integer expected";
            return null;
        };

        /**
         * Creates an Action message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof semaphore.Action
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {semaphore.Action} Action
         */
        Action.fromObject = function fromObject(object) {
            if (object instanceof $root.semaphore.Action)
                return object;
            let message = new $root.semaphore.Action();
            if (object.x != null)
                message.x = object.x >>> 0;
            if (object.y != null)
                message.y = object.y >>> 0;
            return message;
        };

        /**
         * Creates a plain object from an Action message. Also converts values to other types if specified.
         * @function toObject
         * @memberof semaphore.Action
         * @static
         * @param {semaphore.Action} message Action
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Action.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = message.y;
            return object;
        };

        /**
         * Converts this Action to JSON.
         * @function toJSON
         * @memberof semaphore.Action
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Action.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Action;
    })();

    semaphore.Options = (function() {

        /**
         * Properties of an Options.
         * @memberof semaphore
         * @interface IOptions
         */

        /**
         * Constructs a new Options.
         * @memberof semaphore
         * @classdesc Represents an Options.
         * @implements IOptions
         * @constructor
         * @param {semaphore.IOptions=} [properties] Properties to set
         */
        function Options(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Options instance using the specified properties.
         * @function create
         * @memberof semaphore.Options
         * @static
         * @param {semaphore.IOptions=} [properties] Properties to set
         * @returns {semaphore.Options} Options instance
         */
        Options.create = function create(properties) {
            return new Options(properties);
        };

        /**
         * Encodes the specified Options message. Does not implicitly {@link semaphore.Options.verify|verify} messages.
         * @function encode
         * @memberof semaphore.Options
         * @static
         * @param {semaphore.IOptions} message Options message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Options.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified Options message, length delimited. Does not implicitly {@link semaphore.Options.verify|verify} messages.
         * @function encodeDelimited
         * @memberof semaphore.Options
         * @static
         * @param {semaphore.IOptions} message Options message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Options.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Options message from the specified reader or buffer.
         * @function decode
         * @memberof semaphore.Options
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {semaphore.Options} Options
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Options.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.semaphore.Options();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Options message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof semaphore.Options
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {semaphore.Options} Options
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Options.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Options message.
         * @function verify
         * @memberof semaphore.Options
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Options.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an Options message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof semaphore.Options
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {semaphore.Options} Options
         */
        Options.fromObject = function fromObject(object) {
            if (object instanceof $root.semaphore.Options)
                return object;
            return new $root.semaphore.Options();
        };

        /**
         * Creates a plain object from an Options message. Also converts values to other types if specified.
         * @function toObject
         * @memberof semaphore.Options
         * @static
         * @param {semaphore.Options} message Options
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Options.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this Options to JSON.
         * @function toJSON
         * @memberof semaphore.Options
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Options.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Options;
    })();

    semaphore.State = (function() {

        /**
         * Properties of a State.
         * @memberof semaphore
         * @interface IState
         * @property {Array.<semaphore.Cell>|null} [field] State field
         * @property {number|null} [curUser] State curUser
         */

        /**
         * Constructs a new State.
         * @memberof semaphore
         * @classdesc Represents a State.
         * @implements IState
         * @constructor
         * @param {semaphore.IState=} [properties] Properties to set
         */
        function State(properties) {
            this.field = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * State field.
         * @member {Array.<semaphore.Cell>} field
         * @memberof semaphore.State
         * @instance
         */
        State.prototype.field = $util.emptyArray;

        /**
         * State curUser.
         * @member {number} curUser
         * @memberof semaphore.State
         * @instance
         */
        State.prototype.curUser = 0;

        /**
         * Creates a new State instance using the specified properties.
         * @function create
         * @memberof semaphore.State
         * @static
         * @param {semaphore.IState=} [properties] Properties to set
         * @returns {semaphore.State} State instance
         */
        State.create = function create(properties) {
            return new State(properties);
        };

        /**
         * Encodes the specified State message. Does not implicitly {@link semaphore.State.verify|verify} messages.
         * @function encode
         * @memberof semaphore.State
         * @static
         * @param {semaphore.IState} message State message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        State.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.field != null && message.field.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (let i = 0; i < message.field.length; ++i)
                    writer.int32(message.field[i]);
                writer.ldelim();
            }
            if (message.curUser != null && Object.hasOwnProperty.call(message, "curUser"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.curUser);
            return writer;
        };

        /**
         * Encodes the specified State message, length delimited. Does not implicitly {@link semaphore.State.verify|verify} messages.
         * @function encodeDelimited
         * @memberof semaphore.State
         * @static
         * @param {semaphore.IState} message State message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        State.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a State message from the specified reader or buffer.
         * @function decode
         * @memberof semaphore.State
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {semaphore.State} State
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        State.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.semaphore.State();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.field && message.field.length))
                        message.field = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.field.push(reader.int32());
                    } else
                        message.field.push(reader.int32());
                    break;
                case 2:
                    message.curUser = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a State message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof semaphore.State
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {semaphore.State} State
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        State.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a State message.
         * @function verify
         * @memberof semaphore.State
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        State.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.field != null && message.hasOwnProperty("field")) {
                if (!Array.isArray(message.field))
                    return "field: array expected";
                for (let i = 0; i < message.field.length; ++i)
                    switch (message.field[i]) {
                    default:
                        return "field: enum value[] expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
            }
            if (message.curUser != null && message.hasOwnProperty("curUser"))
                if (!$util.isInteger(message.curUser))
                    return "curUser: integer expected";
            return null;
        };

        /**
         * Creates a State message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof semaphore.State
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {semaphore.State} State
         */
        State.fromObject = function fromObject(object) {
            if (object instanceof $root.semaphore.State)
                return object;
            let message = new $root.semaphore.State();
            if (object.field) {
                if (!Array.isArray(object.field))
                    throw TypeError(".semaphore.State.field: array expected");
                message.field = [];
                for (let i = 0; i < object.field.length; ++i)
                    switch (object.field[i]) {
                    default:
                    case "Empty":
                    case 0:
                        message.field[i] = 0;
                        break;
                    case "Green":
                    case 1:
                        message.field[i] = 1;
                        break;
                    case "Yellow":
                    case 2:
                        message.field[i] = 2;
                        break;
                    case "Red":
                    case 3:
                        message.field[i] = 3;
                        break;
                    }
            }
            if (object.curUser != null)
                message.curUser = object.curUser >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a State message. Also converts values to other types if specified.
         * @function toObject
         * @memberof semaphore.State
         * @static
         * @param {semaphore.State} message State
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        State.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.field = [];
            if (options.defaults)
                object.curUser = 0;
            if (message.field && message.field.length) {
                object.field = [];
                for (let j = 0; j < message.field.length; ++j)
                    object.field[j] = options.enums === String ? $root.semaphore.Cell[message.field[j]] : message.field[j];
            }
            if (message.curUser != null && message.hasOwnProperty("curUser"))
                object.curUser = message.curUser;
            return object;
        };

        /**
         * Converts this State to JSON.
         * @function toJSON
         * @memberof semaphore.State
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        State.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return State;
    })();

    /**
     * Cell enum.
     * @name semaphore.Cell
     * @enum {number}
     * @property {number} Empty=0 Empty value
     * @property {number} Green=1 Green value
     * @property {number} Yellow=2 Yellow value
     * @property {number} Red=3 Red value
     */
    semaphore.Cell = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Empty"] = 0;
        values[valuesById[1] = "Green"] = 1;
        values[valuesById[2] = "Yellow"] = 2;
        values[valuesById[3] = "Red"] = 3;
        return values;
    })();

    return semaphore;
})();

export { $root as default };
