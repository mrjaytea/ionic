import { Hobbies } from './hobbies'

export interface AboutMe{
    id: number,
    surname: string,
    givenname: string,
    dob: string,
    hobbies: Hobbies[]
}