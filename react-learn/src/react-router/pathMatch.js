import { pathToRegexp} from "path-to-regexp"

const keys = [];

const result = pathToRegexp("/news/:id/:page(\\d+)?", keys)
console.log(result)

console.log(keys);