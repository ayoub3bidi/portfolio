---
title: Vite.js or How I Become the fastest programmer alive
published: 2021-07-17
description: ""
image: ""
tags: ["vue", "vite", "webdev"]
category: My tech journey
draft: false
---

<center style="border: 2px solid #4CAF50; padding: 10px; border-radius: 5px;">
  <strong>🎉 Exciting News! 🎉</strong><br>
  This article has garnered over <strong>9K reads</strong> on <a href="https://dev.to/ayoub3bidi/vite-js-or-how-i-became-the-fastest-programmer-alive-hi2">DEV</a>.<br/>
  Thank you all for your incredible support!
</center>

----------

Created by Evan You (also the creator of Vue.js), Vite is a build tool that significantly improves the front-end development experience. You can use Vite to set up a development environment for frameworks like Vue and React, and even for a vanilla JavaScript app with a dev server and hot reloading in just three commands.
FYI: Vite is a french word that means "fast".  

![image](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pd6yl7w2crjypiakre56.png)

## Why vite ?  
Before ES modules were invented, the bundling process eased the lives of developers by providing a mechanism that could process and concatenate the source modules into files. These files could easily run in the browser.

Bundlers (like webpack, Parcel, snowpack, etc.) improved the development efficiency to a great extent. However, as we moved to more ambitious applications, it increased the complexity of the project along with the code volume and number of modules.

The problem is with this huge code volume it will start impacting the performance level. In another words, it will take an unreasonably long time to run and as Benjamin Franklin said once: "Remember that time is money."

## How vite works ?  
Vite follows a recent trend of tools like Svelte (where the framework is basically compiled away) and Snowpack that leverage modern JavaScript features (such as ES modules) to provide a smooth, fast dev experience with little or no configuration at all.
In other words, you install Vite with a plugin or two, do very little configuration et voilà! you just need to start working on your app.

Vite is really fast, because it leverages native ES modules and doesn’t need to rebuild the whole bundle when something changes. This makes it fast, regardless of the size of your application.

Now, let’s take Vite for a spin and see how we go. It will be interesting to see how much of our normal workflow would be better handled with Vite.

## Performance
The [Why Vite](https://vitejs.dev/guide/why.html) page is primarily about performance and developer experience.
The pre-bundling Vite does with esbuild increases the page loading speed by 10 to 100 times than any JS bundler.
Vite dev server starts in an instant and with the Hot Module Replacement, every code change is reflected in the browser quickly, sometimes instantly.

## Conclusion
Vite is pretty cool! It’s a fine addition to the recent trend of tools that simplifies tooling like Parcel and Snowpack. That's why you should give it a try.

-----------
This article is also available on:  
* [DEV](https://dev.to/ayoub3bidi/vite-js-or-how-i-became-the-fastest-programmer-alive-hi2)
* [Medium](https://ayoub3bidi.medium.com/vite-js-or-how-i-became-the-fastest-programmer-alive-621983eb893c)