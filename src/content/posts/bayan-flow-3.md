---
title: "Bayan Flow 0.3.0: From 6 to +20 Algorithms"
published: 2026-03-29
description: ""
image: "./covers/devlog-3.png"
tags: ["software development", "algorithms", "learning", "visualization", "projects", "bayan-flow"]
category: My tech journey
draft: false
---

I shipped 0.3.0 of Bayan Flow last week. This one was mostly about filling things out.

Quick background, if you haven’t seen it before: Bayan Flow is an interactive algorithm visualizer. Sorting algorithms rearranging arrays, pathfinding algorithms crawling across grids, step by step, in real time. English, French, and Arabic, with full RTL support. Built with React 19, Vite, Tailwind, and Framer Motion.

<iframe width="100%" height="468" src="https://www.youtube.com/embed/hqxLovhkhrU" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

0.2.0 was the infrastructure release: i18n, landing page, fullscreen, sound, tests, CI/CD. 0.3.0 is the "okay, now add the actual algorithms" release.

## Sorting: 3 → 14

The original three were Bubble, Quick, and Merge. Fine for a start, but those are also the three that show up in every tutorial. I wanted the fuller picture.

So I added eleven more. The classics that somehow didn't make the first cut: **Selection Sort, Insertion Sort, Heap Sort**. Then **Shell Sort** (insertion sort with shrinking gaps, better average-case). Then the non-comparison group: **Radix Sort, Counting Sort, Bucket Sort**: these work on a completely different principle than the comparison-based algorithms, and I wanted that contrast visible in the visualizer.

**Cycle Sort** was an interesting one to add. It minimizes writes, which sounds academic until you think about flash memory or anything with write-cycle limits. **Comb Sort** is bubble sort, but with shrinking gap sizes instead of always comparing adjacent elements: a small tweak with a real impact on performance.

**Tim Sort** is the one Python and Java actually use in production. It's a hybrid of merge and insertion sort, optimized for real-world data patterns that tend to have already-sorted subsequences. Writing the step descriptions for it in three languages was genuinely tedious.

And then there's **Bogo Sort**. Randomly shuffles the array until it happens to be sorted. Technically, a sorting algorithm. Worst-case runtime is unbounded. I included it because it's funny, and also because it's a surprisingly clean way to explain what "sorting" actually means. If you can tell when it's done, you have a sorting algorithm.

Each one has its own step descriptions, color states, and a Python implementation in the code panel.

## Pathfinding: 3 → 9

The original three were BFS, Dijkstra, and A*. Standard algorithm curriculum. Not the whole story.

**Bidirectional Search** runs from both endpoints simultaneously and meets in the middle, cutting the search space roughly in half. **Greedy Best-First** uses a heuristic to aim toward the goal without caring about path cost, which makes it faster than A* on some inputs but non-optimal. **Jump Point Search** prunes symmetric paths on uniform-cost grids and is noticeably faster than A* on open grids.

**Bellman-Ford** handles negative edge weights, which Dijkstra can't. **IDA\*** is memory-efficient A* via iterative deepening. **D\* Lite** does incremental replanning when the environment changes after the initial search. It's the kind of algorithm that shows up in robotics.

All nine support walls, variable grid sizes, and localized step descriptions across English, French, and Arabic.

## A couple of perf fixes

I wrapped `ArrayBar` and `GridCell` with `React.memo`. When you've got dozens of elements animating at once, you don't want them re-rendering on every tick. I also fixed the FAB disabled state, which was only checking the selected sorting algorithm and ignoring whether a pathfinding algorithm was selected. And some pathfinding implementations weren't consistently checking `grid[row][col] === 1` before processing neighbors, fixed across BFS, Dijkstra, A*, and Greedy.

## Tests

925 tests now. I added step-structure assertions for the sorting visualizations, so you can verify the algorithm generates the right *sequence* of steps, not just the right final output. For pathfinding, I extracted a shared helper `assertPathfindingStepStructure`. Having one assertion to maintain instead of nine copies made a real difference when adding new algorithms.

## What's next

0.4.0 will have new algorithm family categories beyond sorting and pathfinding. I'm also planning video export, an educational panel with some historical context, and an interactive code panel where you can edit the implementation and run it against tests.

- **App:** [https://bayanflow.netlify.app](https://bayanflow.netlify.app)  
- **GitHub Repo:** [https://github.com/ayoub3bidi/bayan-flow](https://github.com/ayoub3bidi/bayan-flow)  
- **Product Hunt:** [https://www.producthunt.com/products/bayan-flow](https://www.producthunt.com/products/bayan-flow)  

Thanks for reading, and if you’re into projects like this, feel free to check out the video or subscribe on YouTube. More devlogs and experiments are coming soon.

-----------
This article is also available on:  
* [Dev.to](https://dev.to/ayoub3bidi/bayan-flow-030-from-6-to-20-algorithms-df0)
* [Medium](https://ayoub3bidi.medium.com/bayan-flow-0-3-0-from-6-to-20-algorithms-1ae8f6c2d079)