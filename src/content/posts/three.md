---
title: The Three.js Supremacy
published: 2023-07-02
description: ""
image: ""
tags: ["javascript", "webdev", "design", "frontend"]
category: My tech journey
draft: false
---

I have used Three.js for a good amount of time now (still a total noob for now), and it does a really great job of abstracting away the headaches of getting going with 3D in the browser. With it you can create cameras, objects, lights, materials and more, and you have a choice of renderer, which means you can decide if you want your scene to be drawn using HTML 5's canvas, WebGL or SVG.

In this article we will explore Three.js and why you should care about it especially if you are a Frontend developer.

## Why should you care about Three.js?
Three.js was released by Ricardo Cabello in April 2010. At that time, the code was developed in ActionScript and then the code was ported to JavaScript. Three.js was introduced with the rendering code in the form of the module instead of the core itself. Later on in March 2011, Joshua Koo came on the board after the introduction of WebGL. In September 2011, Koo released his first three.js demo for 3D text.

Three.js allows for the rendering of graphics on the client side, but can also be rendered server side with some node.js magic. This means you can use Three.js to render a simple model on your site from your server, but also allow users to interact with something much more complex on the same site if their specs allow for it. The application of this kind of things are endless.

## Three.js is all that you need in one library
A big part of any rendering, 3D or otherwise, is the math involved. Typically, you’d have a separate math library that handles all of the fancy linear algebra and calculus that might go into rendering a complex graphic, but Three.js includes all of this in its massive library.

It has classes that are specifically designed for 3D math, and since it’s all contained under the same library, you can be sure that everything will work together, of course that will be better than 20 libraries that potentially can't fit with each other, so having everything come under the same roof.

## Three.js is easy to learn
The Three.js learning curve won’t be too steep. It organizes all of the renders you’ll do, whether 3D or 2D, under a “Scene” container. This is analogous to a body tag in HTML, in the sense that everything else that you render will fall inside this container.

Why? Well, the typical DOM used for rendering graphics such as canvases and SVGs are very limited in how you can manipulate elements (you’re typically allowed to rotate on only one axis and can only move elements in a 2D space).

Three.js includes a variety of subclasses that do exactly what you’d expect: “Light” renders a light source, “Mesh” renders an object, and “Camera” renders a, well, you know, a camera. Things can not be simpler than that.

## Three.js relies heavily on WebGL
While Three.js handles the setting up of scenes, it really relies on WebGL for a lot of its rendering so it’s important that you understand how it works too.

WebGL expands on a lot of traditionally non-3D APIs, like the ‘canvas’ and ‘svg’ tags that you can use to tell the browser to draw certain shapes. WebGL simply offers you the ability to use these 2D drawing elements to render 3D elements (whatever you’re drawing, you’re doing it to a 2D screen in the end).

WebGL makes good use of hardware acceleration to efficiently render these objects on your screen.
In Three.js, 3D objects are rendered through the “WebGLRenderer” class, which is what translates your life-like model of the Eiffel Tower into numbers that your GPU can efficiently process in memory.

## Should you rely on Three.js to create games?
Three.js is the most flexible and powerful 3D engine for web browsers. With it, you can create anything from simple 3D models to photorealistic, real-time scenes. You can even optionally render THREE.JS layers on top of each other instead of traditional DOM elements, meaning you can create incredibly realistic and immersive scenes with minimal effort.

There are many reasons to choose Three.js over Unity, including but not exclusive to the following:

- A great asset management system.
- A high-performance 3D graphics engine.
- A modern GUI that can be extended by plugins.

## Conclusion
Three.js is an emerging web technology that has the potential to change the face of web development. It provides a powerful toolset for creating 3D graphics and visualizations on the web. With its ease of use and cross-browser compatibility, Three.js has gained popularity among web developers.

---------

Sources:  
https://web.dev/three-intro/
https://www.kofi-group.com/threejs-explained-in-10-minutes/
https://www.linkedin.com/pulse/exploring-potential-threejs-emerging-web-technology-chris-chiancone/
https://discourse.threejs.org/t/pros-and-cons-of-three-js/7050/2
https://www.digiprima.com/blogs/is-threejs-better-for-developing-web-based-3d-games#:~:text=js%3F-,Three.,geometries%20using%20just%20JavaScript%20APIs.
https://eternitech.com/technologies/three-js/

-----------
This article is also available on:  
* [DEV](https://dev.to/ayoub3bidi/the-threejs-supermacy-4a45)
* [Medium](https://ayoub3bidi.medium.com/the-three-js-supremacy-515fbb849cb2)