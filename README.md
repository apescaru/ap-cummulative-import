# AP CUMULATIVE IMPORT

## v1.0.0

## Accumulator class

### Usage

#### Accumulator takes no parameters

### <b>Functions</b>


#### - getData: Function = returns the array of data

#### - setData: Function = adds data to the data array by category. Has 2 required parameters and 1 optional parameter:

- category: string = tells the method where should the data be put;
- data: any = data to be appended in the data object [data.category];
- spread?: boolean <default: false> = if this is set to true and the data is an array, object or string (can be destructured), the data array will be destructured before appending to the data array.

#### - findDataByCategory: Function = returns an item from the data array. Takes 2 parameters:

- category: string = category in which the search shoudl apply;
- callback: Function = function passed in the .find array method. Needs to return true (to stop and return the item) or false (to continue searching)

#### - findAllDataGlobally: Function = returns all items in the data array that meet the requirement. Takes 1 parameter:

- callback: Function = function passed in the .find array method. Needs to return true (append the item to the result array) or false (to continue searching)

#### - findOneDataGlobally: Function = returns the first item that meets the requirement in the whole data array. Takes 1 paramenter: 

- callback: Function = function passed in the .find array method. Needs to return true (to stop and return the item) or false (to continue searching)

### Examples

```Javascript
    import Accumulator from "./index.js";

    const acc = new Accumulator();

    const a = { a: 1, b: "findMeeee" };
    const b = { a: 5, c: "find" };
    const c = { a: "g", c: "m" };
    const d = { a: { b: { c: 5 } }, d: [1, 2] };

    acc.setData("generala", a);
    acc.setData("generalb", b);
    acc.setData("generalc", c);
    acc.setData("generald", d);
    acc.setData("spread", "asd");
    acc.setData("spread", ["one", "two", "tree"], true);

    console.log(acc.getData());

    /*
        {
            generala: [ { a: 1, b: 'findMeeee' } ],
            generalb: [ { a: 5, c: 'find' } ],
            generalc: [ { a: 'g', c: 'm' } ],
            generald: [ { a: [Object], d: [Array] } ],
            spread: [ 'asd', 'one', 'two', 'tree' ]
        }
    */

    console.log(
    acc.findDataByCategory("generala", (item) => {
        return item.b == "findMeeee";
    })
    );

    // { a: 1, b: 'findMeeee' }

    console.log(
    acc.findDataByCategory("generalb", (item) => {
        return item.a === 5 && item.c === "find";
    })
    );

    // { a: 5, c: 'find' }

    console.log(
        acc.findAllDataGlobally((item) => {
            return item.c && typeof item.a === "number";
        })
    );

    // [ { a: 5, c: 'find' } ]

    console.log(
        acc.findAllDataGlobally((item) => {
            return item.c;
        })
    );

    // [ { a: 5, c: 'find' }, { a: 'g', c: 'm' } ]

    console.log(
        acc.findOneDataGlobally((item) => {
            return item.c;
        })
    );

    // { a: 5, c: 'find' }

    console.log(
        acc.findDataByCategory("generald", (item) => {
            return item.a.b.c === 5 && typeof item.d === "object";
        })
    );

    // { a: { b: { c: 5 } }, d: [ 1, 2 ] }

    console.log(
        acc.findAllDataGlobally((item) => {
            return (item.c && typeof item.a === "number") || item === "one";
        })
    );

    // [ { a: 5, c: 'find' }, 'one' ]
```
