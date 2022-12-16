
# Sneaktreat API

An API to manage data for Sneaktreat projects.


## How to use:

To host the api in localhost:

```bash
  node .
```


## Using the API:

to fetch data from the API:

```bash
  fetch("https:localhost:8080/products")
  .then((res) => res.json())
  .then((json) => console.log(json));
```
    
