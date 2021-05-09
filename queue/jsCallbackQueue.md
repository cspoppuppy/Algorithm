# JS Asynchromous Callback Queue

![callback queue](/docs/event-loop.png)

Example:

```JavaScript
setTimeout(() => console.log(2), 0)
console.log(1) // execute first
```
