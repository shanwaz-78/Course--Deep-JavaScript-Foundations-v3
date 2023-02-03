var teacher = 'Kyle'

export default function ask(question) {
    console.log(teacher,question)
}

import ask from './workshop.mjs'
ask("This is export method")

import * as workshop from './workshop.mjs'
workshop.ask('This is 2nd export method')