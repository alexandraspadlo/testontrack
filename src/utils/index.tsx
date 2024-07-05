import { ChangeEvent } from 'react'

export const JsonObject = (str: string) => {
    if (!str) return null
    try {
        return JSON.parse(str)
    } catch (e) {
        return null
    }
}

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const handleInputs = (ev: ChangeEvent<HTMLInputElement>, callback: (p: object) => void) => {
    if (!ev?.target || !callback) return null
    const { type, value, id, name, checked } = ev.target
    const key = type === 'radio' ? name : id
    if (!key) return null
    let finalValue: string | boolean = value
    if (type === 'checkbox') finalValue = checked
    if (type === 'radio') finalValue = id
    return callback({
        [key]: finalValue,
    })
}

export const validChar = (wordName: string) => typeof wordName === 'string' && wordName?.trim?.() !== ''

export const validArrayChar = (wordArrays: string[]) => {
    if (!Array.isArray(wordArrays) || !wordArrays?.length) return false
    return !(wordArrays.some((cv) => !validChar(cv)))
}