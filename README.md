# dss_project
Course Projects

# Work flow
``` mermaid
graph LR
A((front-end)) --> B((block-chain))
A --> C((cloud / backend))
```

<details> 
<summary></summary>
custom_mark10
  digraph G {
    size ="4,4";
    frontend [shape=box];
    frontend -> block-chain [weight=8];
    block-chain -> frontend;
    frontend -> cloud/backend [style=dotted];
    cloud/backend -> frontend;
  }
custom_mark10
</details>