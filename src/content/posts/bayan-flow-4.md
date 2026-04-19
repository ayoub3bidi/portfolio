---
title: "Bayan Flow 0.4.0: From Algorithm Visualization to Real Understanding"
published: 2026-04-19
description: ""
image: "./covers/devlog-4.png"
tags: ["software development", "algorithms", "learning", "visualization", "projects", "bayan-flow"]
category: My tech journey
draft: false
---

Most algorithm visualizers do one thing well: they *show* how algorithms work.

But watching an animation is not the same as understanding it—let alone implementing it.

[Bayan Flow](https://bayanflow.netlify.app) **0.4.0** is designed to bridge that gap.

<iframe width="100%" height="468" src="https://www.youtube.com/embed/uL3G3nvjGh4" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## What This Update Is Really About

The core idea behind Bayan Flow is simple: **clarity**.

Not just clean visuals, but:
- Clear mental models
- Immediate feedback
- Practical interaction

Version 0.4.0 expands this vision significantly.

## A Full Searching Suite (Not Just the Basics)


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mu46zoyciawuojbhwi8x.png)


Searching is often oversimplified. This update introduces a broader set of algorithms:

- Linear Search
- Binary Search
- Jump Search
- Interpolation Search
- Exponential Search
- Fibonacci Search
- Ternary Search
- DFS & BFS (graph-based)

### Why This Matters

Different algorithms perform better under different conditions. By exposing multiple approaches, learners can:

- Compare strategies
- Understand trade-offs
- Choose the right tool for the problem

### Adaptive Visualization


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/yg8ntuf8h782wvmj8e2g.png)


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pz2htztsblwzobq6q69u.png)


One standout feature is the **dual-substrate UI**:

- Array-based searches → visualized as narrowing ranges
- Graph-based searches → rendered as node-link structures

This allows a single interface to adapt to fundamentally different data models.

## Built-in Python IDE with Instant Feedback


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/aycvfb0dz6azilbwaigx.png)


Understanding an algorithm conceptually is one step.

Writing it yourself is another.

To support this, Bayan Flow now includes an **in-browser Python IDE** powered by Pyodide.

### Features

- No installation required
- Runs entirely in the browser
- Instant execution

### LeetCode-Style Testing

The IDE also includes a test harness:

- Run predefined test cases
- Add custom inputs
- Get immediate pass/fail results

```python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1
```

This tight feedback loop is critical for turning passive learning into active mastery.

## In-Browser Video Export (Powered by Remotion)


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dqc1t5nkqcjeb05smvss.png)



One of the most powerful additions in 0.4.0 is the ability to export visualizations as videos.

### What You Can Do

* Export any algorithm run as an **HD MP4**
* Choose format:

  * Horizontal (YouTube)
  * Vertical (Shorts, TikTok)

### Built-in Enhancements

Each exported video includes:

* Smooth rendering
* Clean transitions
* A final **complexity analysis segment**

### Why It Matters

This feature transforms Bayan Flow into more than a learning tool:

* Students can document their understanding
* Educators can generate teaching material
* Creators can produce algorithm content effortlessly

## Algorithm Insight Panel


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xx30dh6olvdssvbc297s.png)


To complement visual learning, the new Insight Panel provides quick references:

* Algorithm history
* Common use cases
* Time and space complexity

This reduces context switching and keeps learning focused.

## What’s Coming Next (0.5.0)

The roadmap is already moving forward.

Upcoming features include:

* Tree Traversals
* Advanced Graph Algorithms (e.g., Kruskal’s, Prim’s)

## Key Takeaways

* Visualization alone is not enough for learning algorithms
* Interactive coding + testing accelerates understanding
* Adaptive UI helps match the structure of the data
* Built-in video export enables learning *and* sharing
* Contextual insights reduce friction during study

## Final Thoughts

Bayan Flow 0.4.0 shifts the focus from *watching algorithms* to *working with them*.

If you're learning data structures and algorithms, this kind of feedback-driven environment can significantly improve how quickly you progress.

- **App:** [https://bayanflow.netlify.app](https://bayanflow.netlify.app)  
- **GitHub Repo:** [https://github.com/ayoub3bidi/bayan-flow](https://github.com/ayoub3bidi/bayan-flow)  
- **Product Hunt:** [https://www.producthunt.com/products/bayan-flow](https://www.producthunt.com/products/bayan-flow)  

Thanks for reading, and if you’re into projects like this, feel free to check out the video or subscribe on YouTube. More devlogs and experiments are coming soon.

-----------
This article is also available on:  
* [Dev.to](https://dev.to/ayoub3bidi/bayan-flow-040-from-algorithm-visualization-to-real-understanding-3oj3)
* [Medium](https://ayoub3bidi.medium.com/bayan-flow-0-4-0-from-algorithm-visualization-to-real-understanding-ce01b06de2a3)