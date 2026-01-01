# Type Conversions


## String Conversions
```js
   let value = true;
   console.log(typeof value); // boolean

   value = String(value); // now value is string "true"
   console.log(typeof value); // string
```

## Numeric Conversion
```js
   let str = "123"; // string

   let num = Number(str); // becomes a number
```

Numeric Conversion rules:
| Value | becomes |
|-----|-----|
|undefined | nan |
| null | 0 |
| true and false | 1 and 0 | 
| string | NAN |
------------------------------
Example:
```js
Number("   123    "); // 123
Number("123z");  // NaN (z)
Number(true); // 1
Number(false);  // 0
```

-------------------

## Boolean Conversion

rule: 
   - Values that are intuitively "empty" like 0, and empty sting, null, undefined, and NaN become false
   - other value become true