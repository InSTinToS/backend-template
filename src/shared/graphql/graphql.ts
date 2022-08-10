
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface ReadUserInput {
    id: string;
}

export interface CreateUserInput {
    email: string;
    username: string;
    password: string;
}

export interface DeleteUserInput {
    id: string;
}

export interface UpdateUserInput {
    id: string;
    email?: Nullable<string>;
    avatar?: Nullable<Bytes>;
    username?: Nullable<string>;
    password?: Nullable<string>;
    full_name?: Nullable<string>;
}

export interface User {
    id: string;
    email: string;
    username: string;
    password: string;
    created_at: DateTime;
    updated_at: DateTime;
    avatar?: Nullable<Bytes>;
    full_name?: Nullable<string>;
}

export interface IQuery {
    users(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
    user(readUserInput?: Nullable<ReadUserInput>): Nullable<User> | Promise<Nullable<User>>;
}

export interface IMutation {
    deleteUser(deleteUserInput: DeleteUserInput): User | Promise<User>;
    createUser(createUserInput: CreateUserInput): User | Promise<User>;
    updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;
}

export type DateTime = any;
export type Bytes = any;
type Nullable<T> = T | null;
