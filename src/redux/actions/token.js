import { SAVE_TOKEN, DELETE_TOKEN } from './tokenTypes'

export const saveToken = (token) => ({
    type: SAVE_TOKEN,
    token: token
})

export const deleteToken = () => ({
    type: DELETE_TOKEN
})