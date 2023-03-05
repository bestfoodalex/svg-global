import { writable, type Writable } from 'svelte/store'
import type { Continents } from './types'

export const continent: Writable<Continents | null> = writable(null)
export const country: Writable<string | null> = writable(null)