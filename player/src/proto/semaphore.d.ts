import * as $protobuf from "protobufjs";
/** Namespace semaphore. */
export namespace semaphore {

    /** Properties of an Action. */
    interface IAction {

        /** Action x */
        x?: (number|null);

        /** Action y */
        y?: (number|null);
    }

    /** Represents an Action. */
    class Action implements IAction {

        /**
         * Constructs a new Action.
         * @param [properties] Properties to set
         */
        constructor(properties?: semaphore.IAction);

        /** Action x. */
        public x: number;

        /** Action y. */
        public y: number;

        /**
         * Creates a new Action instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Action instance
         */
        public static create(properties?: semaphore.IAction): semaphore.Action;

        /**
         * Encodes the specified Action message. Does not implicitly {@link semaphore.Action.verify|verify} messages.
         * @param message Action message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: semaphore.IAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Action message, length delimited. Does not implicitly {@link semaphore.Action.verify|verify} messages.
         * @param message Action message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: semaphore.IAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Action message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Action
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): semaphore.Action;

        /**
         * Decodes an Action message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Action
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): semaphore.Action;

        /**
         * Verifies an Action message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Action message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Action
         */
        public static fromObject(object: { [k: string]: any }): semaphore.Action;

        /**
         * Creates a plain object from an Action message. Also converts values to other types if specified.
         * @param message Action
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: semaphore.Action, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Action to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Options. */
    interface IOptions {
    }

    /** Represents an Options. */
    class Options implements IOptions {

        /**
         * Constructs a new Options.
         * @param [properties] Properties to set
         */
        constructor(properties?: semaphore.IOptions);

        /**
         * Creates a new Options instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Options instance
         */
        public static create(properties?: semaphore.IOptions): semaphore.Options;

        /**
         * Encodes the specified Options message. Does not implicitly {@link semaphore.Options.verify|verify} messages.
         * @param message Options message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: semaphore.IOptions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Options message, length delimited. Does not implicitly {@link semaphore.Options.verify|verify} messages.
         * @param message Options message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: semaphore.IOptions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Options message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Options
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): semaphore.Options;

        /**
         * Decodes an Options message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Options
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): semaphore.Options;

        /**
         * Verifies an Options message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Options message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Options
         */
        public static fromObject(object: { [k: string]: any }): semaphore.Options;

        /**
         * Creates a plain object from an Options message. Also converts values to other types if specified.
         * @param message Options
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: semaphore.Options, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Options to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a State. */
    interface IState {

        /** State field */
        field?: (semaphore.Cell[]|null);

        /** State curUser */
        curUser?: (number|null);
    }

    /** Represents a State. */
    class State implements IState {

        /**
         * Constructs a new State.
         * @param [properties] Properties to set
         */
        constructor(properties?: semaphore.IState);

        /** State field. */
        public field: semaphore.Cell[];

        /** State curUser. */
        public curUser: number;

        /**
         * Creates a new State instance using the specified properties.
         * @param [properties] Properties to set
         * @returns State instance
         */
        public static create(properties?: semaphore.IState): semaphore.State;

        /**
         * Encodes the specified State message. Does not implicitly {@link semaphore.State.verify|verify} messages.
         * @param message State message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: semaphore.IState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified State message, length delimited. Does not implicitly {@link semaphore.State.verify|verify} messages.
         * @param message State message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: semaphore.IState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a State message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns State
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): semaphore.State;

        /**
         * Decodes a State message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns State
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): semaphore.State;

        /**
         * Verifies a State message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a State message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns State
         */
        public static fromObject(object: { [k: string]: any }): semaphore.State;

        /**
         * Creates a plain object from a State message. Also converts values to other types if specified.
         * @param message State
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: semaphore.State, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this State to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Cell enum. */
    enum Cell {
        Empty = 0,
        Green = 1,
        Yellow = 2,
        Red = 3
    }
}
