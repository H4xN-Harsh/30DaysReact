#Backend API Documentation
## `/users/register` Endpoint
### Description

Registers a new user by creating a user account with the provider information
### HTTP Methods

`POST`

### Endpoint

`/users/register`

The request body should be in JSON format and include the following fields:

- `fullname`(object):
    - `firstname` (string, required): User's Frist name(minimum 3 characters).
    - `lastname` (string, optional): User's Last name(minimum 3 characters).
- `email` (string, required): User's email addresse(must be a valid email).
- `password` (string, required): User's password(minimum 6 characters).

### Example  Response

- `user`(object):
    - `fullname` (Object).
        - `firstname` (string): User's Frist name(minimum 3 characters).
        - `lastname` (string): User's Last name(minimum 3 characters).
    - `email` (string): User's email addresse(must be a valid email).
    - `password` (string): User's password(minimum 6 characters).
- `token`(String):JWT Token.

## `/users/login` Endpoint

### HTTP Methods

`POST`

The request body should be in JSON format and include the following fields:

- `email` (string, required): User's email addresse(must be a valid email).
- `password` (string, required): User's password(minimum 6 characters).


### Example  Response


- `user`(object):
    - `fullname` (Object).
        - `firstname` (string): User's Frist name(minimum 3 characters).
        - `lastname` (string): User's Last name(minimum 3 characters).
    - `email` (string): User's email addresse(must be a valid email).
    - `password` (string): User's password(minimum 6 characters).
- `token`(String):JWT Token.