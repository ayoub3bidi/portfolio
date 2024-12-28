---
title: "Let's settle things out: NPM vs Yarn"
published: 2022-04-12
description: ""
image: ""
tags: ["npm", "yarn", "javascript"]
category: My tech journey
draft: false
---


<center style="border: 2px solid #4CAF50; padding: 10px; border-radius: 5px;">
  <strong>🎉 Exciting News! 🎉</strong><br>
  This article got published on <a href="https://hackernoon.com/choosing-the-right-package-manager-npm-yarn-or-pnpm">HackerNoon</a>, and has garnered over <strong>3K reads</strong>. <br/>
  Thank you all for your incredible support!
</center>

-----------

Yarn and NPM are two of the most popular Node.js package managers. They allow downloading, installing, and managing packages when developing in JavaScript.

Yarn (Yet Another Resource Negotiator) and NPM (Node Package Manager) are package managers used for JavaScript coding. They work with Node.js, which serves to help users develop and run JavaScript code outside a web browser.

Node.js uses a large number of open-source packages and libraries to make coding more straightforward and efficient. Package managers like Yarn and NPM allow users to easily install, manage, update, and remove packages, libraries, and dependencies.

As a said we're going to settle things out: We are going to compare Yarn vs. NPM similarities and differences.

## History
Before talking about anything we need to talk about the history about of these two in some points:
- 2010: npm is released with support for Node.

- 2016: Yarn is released. It shows much greater performance than npm. It also generate a yarn.lock file that makes sharing and exact replication of repos much easier and predictable.

- 2017: npm 5 is released. It offers auto-generation of a package-lock.json file in answer to yarn.lock.

- 2018: npm 6 is released with improved security. Now npm checks security vulnerabilities before dependencies are installed.

- 2020: Yarn 2 and npm 7 are released. Both packages come with great new features, as we’ll see later in this tutorial.

- 2021: Yarn 3 is released with various improvements.

## Popularity
Choosing a technology that is widely adopted can assist you in getting help faster when experiencing any implementation challenges. While Yarn is newer as compared to npm, it seems to be catching up quickly in popularity.
For example, if we compare the number of downloads between npm and Yarn in the past 5 years, we can see that npm is the clear winner here.
However, if we use the extent of their GitHub activity to compare the popularity of the two tools, we notice a totally different story.

## Installation
Installing npm seems much easier than that of Yarn—npm comes already bundled with your Node.js installation, so there’ll be no need to install it.

Yarn is available as an npm package. So, you can simply install it by running the following command on the terminal:
```npm install yarn```

## Managing dependencies
However, the Yarn core team does not recommend installing it via npm. Depending on your system requirements, you can go for any of these installation options.

Yarn and npm have more or less similar ways of managing dependencies. They both provide the package.json file that exists at the root of the project’s working directory. This file keeps all the relevant metadata associated with the project. It assists in managing the project’s dependencies version, scripts, and more.

In Yarn, it is called yarn.lock while in npm, it is called package-lock.json. As the name implies, this file locks the dependencies to their stipulated versions during the installation process, after establishing the versioning parameters in the package.json file.

When installing a dependency, the lock file ensures the same file structure in node_modules is maintained across all environments. This provides determinism, supports collaboration with other developers, and prevents code breakages from installing new or incompatible dependencies.

While Yarn and npm follow a similar style of managing dependencies, it’s advised not to use them together, unless they are pointed at different registries from their default installations. If used together, they can create conflicts, particularly due to resolution inconsistencies arising from unsynchronized lock files.

## Performance
One of the main reasons why Yarn was developed was to overcome the performance issues with npm. So, initially, Yarn was the clear winner in terms of performance.

However, in recent times, especially from v5 and v6, npm has been considerably bridging the gap with Yarn. While Yarn is still faster in most cases, npm is quickly tightening this competition.

Several benchmark tests have been done to compare the speed of these two stacks. For example, here is a table that summarizes the results of one test that compared the speed of installing some simple dependencies under different conditions:
![Benchmark](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/prmqs8mp5e3aeidxwwoy.png)

## CLI commands
Developers usually spend a lot of time interfacing with terminals; it’s where they live. Therefore, another vital point for comparison is the CLI. Let’s look at some commands common to both tools:
![CLI commands](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tqwyyttby2e3ba7b0wqo.png)

## Lifecycle scripts
Both npm and Yarn support lifecycle scripts. These are entries in the scripts property of the package.json file that let you define various commands you can use to automate tasks related to your package. Lifecycle scripts greatly ease the lives of developers, especially in automating repetitive tasks.

## Security
One of the main criticisms of npm is regarding security. Previous npm versions have a couple of serious security vulnerabilities.

As of version 6, npm audits packages during installation and tells you if any vulnerabilities are found. We can do this check manually by running ```npm audit``` against the installed packages. If any vulnerabilities are found, npm will give us security recommendations.
![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tsxnkximp33s5fvgdexh.png)
As you can see in the screenshot above, we can run npm audit fix to fix package vulnerabilities, and the dependency trees will be fixed if it’s possible to do so.
Both Yarn and npm use cryptographic hash algorithms to ensure the integrity of the packages.

## Conclusion
We’ve seen how important package managers are for modern web development, and we’ve compared the two most popular rivals on the market. They both have their advantages and shortcomings, and in order to choose the best for you, you need to have a clear idea of your requirements. The best way to decide which is more suitable for you is to try them both and see which performs better.

----------

Sources:
- https://www.imaginarycloud.com/blog/npm-vs-yarn-which-is-better/#:~:text=As%20previously%20stated%2C%20Yarn%20installs,files%20to%20the%20offline%20cache.
- https://phoenixnap.com/kb/yarn-vs-npm
- https://www.section.io/engineering-education/npm-vs-yarn-which-one-to-choose
- https://www.geeksforgeeks.org/difference-between-npm-and-yarn
- https://www.mend.io/free-developer-tools/blog/npm-vs-yarn-which-should-you-choose

-----------
This article is also available on:  
* [DEV](https://dev.to/ayoub3bidi/npm-vs-yarn-lets-settle-things-out-28m6)
* [Medium](https://ayoub3bidi.medium.com/npm-vs-yarn-lets-settle-things-out-9df0280246c)
* [HackerNoon](https://hackernoon.com/npm-vs-yarn-settling-the-debate)