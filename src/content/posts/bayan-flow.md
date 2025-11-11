---
title: "I Built an App That Makes Learning Algorithms Way Easier"
published: 2025-11-11
description: ""
image: "./covers/bayan-flow.jpg"
tags: ["software development", "algorithms", "learning", "visualization", "projects", "bayan-flow"]
category: My tech journey
draft: false
---

For the longest time, I’ve always felt that learning algorithms was harder than it needed to be.  
Not because the concepts were too complicated, but because they were always presented in such a "dry" way.

Slides, PDFs, snippets of pseudocode… they explain what’s happening, sure, but they don’t really make it *click* in your head. At least, not for me.

So I decided to build something that would.

A few days ago, I quietly released a small project called **Bayan Flow**, an interactive visualizer that helps you see how algorithms actually work, step by step. Honestly, it’s one of those “I wish I had this when I was learning” projects. But then it started to grow into something that others might actually find useful.

The name “Bayan” comes from Arabic, it literally means *clarity*. That’s the main goal here: to make learning algorithms more intuitive and less abstract.

<iframe width="100%" height="468" src="https://www.youtube.com/embed/WcE3O2x77lU" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## What It Actually Does

Right now, Bayan Flow focuses on two main algorithm types: **Sorting** and **Pathfinding**.

- In **Sorting Mode**, you can visualize Bubble Sort, Quick Sort, and Merge Sort as they rearrange arrays in real time. You can watch comparisons, swaps, and the final order forming right in front of you. Each element changes color to reflect what’s happening and you can even control playback speed or step manually.

- In **Pathfinding Mode**, you can watch algorithms like BFS, Dijkstra, and A* as they search for the shortest path on a grid. It’s almost like watching the algorithm think, expanding, checking cells, finding the route.

And when everything’s done, there’s a **Complexity Panel** that shows you time complexity, graphs, and performance metrics.

## Under the Hood

Bayan Flow is built with **React 19**, **Vite**, **Tailwind CSS 4**, and **Framer Motion** for smooth animations. Everything’s designed to feel lightweight, fast, and responsive. You can even use it on mobile.

For developers who want to explore the codebase, the project is **open-source** on GitHub. Each algorithm is split into two parts: one version handles visualization, and the other is a pure implementation for testing. If you want to contribute, you can literally just define your algorithm and plug it in.

## The Bigger Goal

I didn’t want this to just be another “algorithm visualizer”  
The goal is to make it a small **learning platform**, something that blends visualization, explanation, and interactivity.  

Future updates will include:
- More sorting and pathfinding algorithms  
- A deeper **Complexity Analyzer**  
- Python integration for code + visuals learning  
- Possibly, small challenges where users can tweak logic live

It’s still early, but I’m happy with how it’s shaping up. And that’s what this whole thing is about: sharing that experience.  

- **App:** [https://bayanflow.netlify.app](https://bayanflow.netlify.app)  
- **GitHub Repo:** [https://github.com/ayoub3bidi/bayan-flow](https://github.com/ayoub3bidi/bayan-flow)  
- **Product Hunt:** [https://www.producthunt.com/products/bayan-flow](https://www.producthunt.com/products/bayan-flow)  

Thanks for reading, and if you’re into projects like this, feel free to check out the video or subscribe on YouTube. More devlogs and experiments are coming soon.

-----------
This article is also available on:  
* [Dev.to](https://dev.to/ayoub3bidi/i-built-an-app-that-makes-learning-algorithms-way-easier-nce)
* [Medium](https://ayoub3bidi.medium.com/i-built-an-app-that-makes-learning-algorithms-way-easier-37922be63b57)