---
title: "Let’s settle things out [2]: NPM Vs. YARN Vs. PNPM"
published: 2023-02-04
description: ""
image: ""
tags: ["npm", "yarn", "pnpm"]
category: My tech journey
draft: false
---

<center style="border: 2px solid #4CAF50; padding: 10px; border-radius: 5px;">
  <strong>🎉 Exciting News! 🎉</strong><br>
  This article got published on <a href="https://hackernoon.com/choosing-the-right-package-manager-npm-yarn-or-pnpm">HackerNoon</a>, and has garnered over <strong>40K reads</strong>. <br/>
  Thank you all for your incredible support!
</center>


----------

Last year I wrote an [article](/posts/npmvsyarn/) to compare NPM and Yarn, and since then I always used yarn as my main package manager but lately, I saw some hype over a new package manager called PNPM and I think it has a promising future.


## What is PNPM?
PNPM is a drop-in replacement for npm. It is built on top of npm and is much faster and more efficient than its predecessor. It is highly disk efficient and solves inherent issues in npm. In this article, we will discuss pnpm in detail. We will explain how it works and will go through why pnpm is a perfect replacement for npm or yarn.

## Why not NPM or YARN?
NPM uses flattened node_modules. The flattened dependency results in many issues, such as:

* The algorithm for flattening a dependency tree is complex
Some of the packages have to be duplicated inside another project’s node_modules folder.
* Modules have access to packages they do not depend on
Let’s explain this with a basic example. One of your projects needs an express module, and express has a dependency package named “debug”. Your code can require(‘debug’), even if you do not depend on it explicitly in the package.json file. Let’s discuss two scenarios that can cause issues:
    1. Express updates its debug dependency with breaking changes.
    2. Express does not depend on debugging anymore.

In both cases, your code will fail because it has an implicit dependency to debug. That is a big problem. Similarly, if you work with a large mono repo, then it will be much more difficult to track particular dependencies a project uses.

* Duplicate packages are another issue here. Now yarn is slightly better in terms of optimizing disk space as it makes use of hoisting, however, that approach fails in some cases.

## How does PNPM solve these problems?
PNPM uses hard links and symlinks to maintain a semistrict node_modules structure. So what’s the difference between a hard link and a soft link?

Well, a hard link is a different reference to the same file. In soft link, you create a new file and the contents of the file point to another path. Symlinks are symbolic links that pnpm uses to create a nested structure of dependencies.

### The pnpm version of the express and node modules.
The first thing you will notice is that your code cannot access the “debug” package because it is not directly under the root level node_modules directory.

PNPM has created a special folder named “.pnpm” that contains hard links to all the modules.

When you download a dependency, pnpm first checks whether the dependency is present in this store or not. If it finds the dependency in the store, pnpm fetches it by creating a hard link.

Because of this approach, pnpm re-uses the same packages if they are already installed for another project. This brings us to the many benefits which pnpm provides. Let’s discuss some of those.

## Performance and Disk Efficiency

![performance comparison](https://miro.medium.com/v2/resize:fit:720/format:webp/0*rBW3KFbpRGBbpf3x.png)
<center>Source: PNPM docs</center>

For NPM It is still a bit slower when compared to Yarn and PNPM. Yarn uses the same flattened node_modules directory but is comparable to NPM in speed and installs packages parallelly.

On the other hand, PNPM is 3 times faster and more efficient than NPM.
With both cold and hot cache, PNPM is faster than Yarn.
PNPM simply links files from the global store, while yarn copies files from its cache. Package versions are never saved more than once on a disk.
The algorithm of pnpm does not use a flattened dependency tree, which makes it easier to implement, and maintain, and requires less computation.

## Security
For NPM, there have been some security vulnerabilities that have directly affected many projects due to the way npm handles bad packages.
For YARN, checksums stored in yarn.lock have been used by Yarn Classic and Yarn Berry ever since. Yarn also prevents you from installing malicious packages, if a mismatch is detected, the installation will be aborted.
Similar to Yarn, PNPM also uses checksums and in addition to the use of checksums, pnpm also verifies the integrity of its code before executing it.

## Structure of the projects
We all know that with npm install it takes the package-lock.json and generates the node_modules folder. Yarn creates yarn.lock file and a node_modules folder. PNPM doesn’t create a flattened dependency tree.

In node_modules, everything had its own node_modules folder within package.json, and every dependency was precisely specified in package.json. Before npm version 3, the node_modules structure was predictable. The problem with this approach was twofold:

* Windows were frequently having trouble with long directory paths caused by packages with too deep dependency trees
* Packages were copied several times to satisfy multiple dependencies PNPM solved this issue without flattening the dependency tree. Each package’s dependencies were grouped together in a node_modules folder and symlinks were used to group dependencies together, so the directory tree is flat.

```shell
.
├── node_modules/
│ └── .pnpm/
├── .npmrc
├── package.json
└── pnpm-lock.yml
```

A package.json file is created once you install the dependencies using pnpm, also a node_modules folder is generated but the structure of it will differ completely from npm and yarn because of its content-addressable storage approach.

## Conclusion
Pnpm has brought many improvements, built on top of existing npm features. pnpm has adopted all the good things of npm while removing its weaknesses, making pnpm the best of both worlds.

```shell
npm install -g pnpm
```
![pnpm commands](https://miro.medium.com/v2/resize:fit:720/format:webp/0*nemZL6auZCDSw2u2.png)
<center>Source: refine.dev</center>

-----------
Sources:
- [PNPM bechmark](https://pnpm.io/benchmarks)
- [JavaScript Package Managers: NPM Vs YARN Vs PNPM](https://www.atatus.com/blog/npm-vs-yarn-vs-pnpm/#:~:text=NPM%3A%20It%20is%20bit%20slower,PNPM%20is%20faster%20than%20Yarn.)
- [Why you should prefer using pnpm over npm and yarn?](https://refine.dev/blog/pnpm-vs-npm-and-yarn)

-----------
This article is also available on:  
* [Medium](https://ayoub3bidi.medium.com/lets-settle-things-out-2-npm-vs-yarn-vs-pnpm-e980f6257530)
* [HackerNoon](https://hackernoon.com/choosing-the-right-package-manager-npm-yarn-or-pnpm)

