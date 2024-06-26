"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const myPair = {
    first: 1,
    second: 'Alexandre'
};
console.log(myPair);
async function fetchJson(url) {
    const response = await fetch(url);
    const headers = {};
    response.headers.forEach((value, key) => {
        headers[key] = value;
    });
    const data = await response.json();
    return {
        data: data,
        status: response.status,
        statusText: response.statusText,
        headers: headers
    };
}
(async () => {
    const response = await fetchJson('https://jsonplaceholder.typicode.com/todos/1');
    console.log(response.data.title);
})();
