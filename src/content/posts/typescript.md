---
title: TypeScript (or Oh god why I didn't learn it sooner ?)
published: 2022-08-19
description: ""
image: ""
tags: ["typescript", "javascript", "vue", "react", "webdev"]
category: My tech journey
draft: false
---

TypeScript has been increasing in its popularity for the last couple of years. Angular, one of the largest frontend frameworks, is using TypeScript. About [60% of JS programmers](https://2019.stateofjs.com/javascript-flavors/typescript) already use TypeScript, But why ?

## What is TypeScript ?

In short, TypeScript is a superset of JavaScript that has optional typing and compiles to plain JavaScript.
In simpler words, TypeScript technically is JavaScript with static typing, whenever you want to have it.
But why you need to add static typing to JavaScript ? isn't this will add more "unnecessary" code (and isn't will make it more like Java ?) ?
Here are some reasons may change your mind:
- You can avoid masterfully-hidden-ninja errors: The freedom of dynamic typing often leads to bugs that not only decrease the efficiency of the programmer’s work, but can also grind development to halt due to increasing costs of adding new lines of code.
- It is easier to refactor code without breaking it significantly.
- Orienting oneself in complex, large-scale systems is not a nightmare anymore.

TypeScript is essentially a JS linter. Or, JS with documentation that the compiler can understand.
Types in TS are optional, and every JS file is a valid TypeScript file. While the compiler will complain if you have type errors in your initial files, it does give you back a JavaScript file that works as it did before.  

## TS vs JS & why you should choose TypeScript over JavaScript ? & why you shouldn't ?
You should because:
- **TypeScript is more reliable**: TypeScript code is more reliable and easier to refactor. This enables developers to evade errors and do rewrites much easier.
Types invalidate most of the silly errors that can sneak into JavaScript codebases, and create a quick feedback loop to fix all the little mistakes when writing new code and refactoring.
- **TypeScript is more explicit**: Making types explicit focuses our attention on how exactly our system is built, and how different parts of it interact with each other. In large-scale systems, it is important to be able to abstract away the rest of the system while keeping the context in mind. Types enable us to do that.
- **TypeScript and JavaScript are practically interchangeable, so why not?**: Since JavaScript is a subset of 

TypeScript, you can use all JavaScript libraries and code that you want in your TypeScript code.
This means that you can gradually adopt TypeScript in your JavaScript codebase, first adding types to individual modules and then scale from there to the moon.

You shouldn't because:

- You can’t just take a JavaScript team or a JavaScript repository and instantly switch them to idiomatic TypeScript. There are tradeoffs, and upfront time sacrifices you have to make.
- Types give you in the long run, in the short run, it does take more time to add them. This is arguably not a huge deal, but it is an argument in favor of JavaScript.
- You might not choose TypeScript for small projects and prototypes for your own use (totally not worth it).

## My (recent) experience with TS in Vue.js, React.js & Backend generally (an unnecessary story you can skip)

My first experience with TS was actually with Angular (it was a university project and my first/last experience with that framework) and I really didn't know what is TS so I google it and knew that you can write JS in TS file without any problem so I did it.

My first real experience with TS was with Vue.js, I wanted to know what TS will benefit me in my code and it was actually good and weird at the same time (I got some horrible Java flashbacks while doing it) but I felt it wasn't necessary for my code at that time.

My second experience with TS was with a full-stack project (React.js as the frontend framework), that when I felt that TS is a significant solution for my barbarian JS code.

## Conclusion
Overall, TypeScript is a great tool to have in your toolset even if you don’t use it to its full capacity. It’s easy to start small and grow slowly, learning and adding new features as you go.

-----------

Sources:
- https://www.vox.com/science-and-health/2019/1/31/18200497/dunning-kruger-effect-explained-trump
- https://serokell.io/blog/why-typescript
- https://dzone.com/articles/what-is-typescript-and-why-use-it
- https://www.typescriptlang.org/why-create-typescript

-----------
This article is also available on:  
* [DEV](https://dev.to/ayoub3bidi/typescript-or-oh-god-why-i-didnt-learn-it-sooner--52h0)
* [Medium](https://ayoub3bidi.medium.com/typescript-or-oh-god-why-i-didnt-learn-it-sooner-3c4e8af515e4)