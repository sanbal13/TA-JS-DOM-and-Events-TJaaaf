Code to extract data:

``` js
let description = {};
let article = document.querySelector("article");
let definition =  article.querySelector("p").innerText;
description.about = definition;
let syntax = document.querySelector("pre").innerText;
description.syntax = syntax;
let returnValue = document.querySelector("#return_value").nextElementSibling.innerText;
description.return = returnValue;
```

Code to extract the example:

``` js
let description = {};
let code = [... document.querySelectorAll(".CodeMirror-line")].map((ele) => ele.innerText);
description.code = code;
```