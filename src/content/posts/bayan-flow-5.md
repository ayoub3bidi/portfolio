---
title: "Bayan Flow 0.5.0: Tree Traversals, Graph Algorithms, and Turning a Visualizer Into a Platform"
published: 2026-09-12
description: ""
image: "./covers/devlog-5.png"
tags: ["software development", "algorithms", "learning", "visualization", "projects", "bayan-flow"]
category: My tech journey
draft: false
---

Version 0.5.0 of [Bayan Flow](https://bayanflow.com) just shipped, and it's the biggest one so far. I'd promised tree traversals and graph algorithms a while back. They're finally in, plus Google sign-in, saved favorites, study notes, a Pro waitlist, and a full infra move.

Bayan means "clarity" in Arabic. That's still the whole bet of this project: algorithms that look intimidating on a whiteboard should feel obvious once you can actually watch them run.

<iframe width="100%" height="468" src="https://www.youtube.com/embed/CkRRPMIE9_g" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Tree Traversals

Six new algorithms. Inorder, Preorder, Postorder on the DFS side. Level-order and Zigzag for BFS. And Morris Traversal, which I'm a little obsessed with. It visits every node in O(1) extra space by temporarily rewiring right pointers instead of using a stack or recursion. The first time you trace through it by hand, it genuinely feels like a trick.

The tree generates as a real BST with in-order values, so it's never a random blob that means nothing. Size it from 3 to 31 nodes, step manually or autoplay, and every algorithm has a full Python implementation sitting in the code panel.

## Graph Algorithms

Seven: Topological Sort, Kahn's, Kruskal's, Prim's, Tarjan's, Kosaraju's, Floyd-Warshall.

Most render as a node-link graph. Floyd-Warshall doesn't. It gets a matrix view instead, and honestly that wasn't a design choice so much as a retreat. I tried rendering all-pairs shortest paths on the graph layout first, and it was unreadable. The matrix is just the correct substrate for that algorithm. There's also an 18-scenario dropdown now, so you get something resembling a real graph instead of random noise every time.

## It's a platform now, not just a tool

This is the release where Bayan Flow got accounts.

Sign in with Google, and you get all 45 algorithms, manual stepping, every speed preset, fullscreen, sound, video export, code and insight panels. Favorite up to 20 algorithms, write notes on any of them, all synced through Supabase. Auth runs behind Supabase RLS, and deleting your account is self-service: an edge function clears your profile, favorites, and notes for you.

I want to be upfront about the free tier, because I went back and forth on it more than I'd like to admit: no account still gets you 18 algorithms across all five categories and 12 visualizations a session, then a prompt to sign in. Nothing that used to be free got taken away. I just couldn't keep everything unlimited forever and pretend that was a sustainable plan.

There's also a `/pro` waitlist now. Nothing's built yet, but early sign-ups get 50% off the lifetime price whenever it ships.

## The boring infra stuff

Moved off Netlify onto Cloudflare Workers. Finally bought the actual domain too, so production is bayanflow.com and staging is dev.bayanflow.com. Swapped Umami for PostHog.

SEO got the full treatment: hreflang for English, French, Arabic, real Open Graph and dynamic meta tags, a 404 page, sitemap, robots.txt, and an llms.txt and API catalog so AI agents crawling the site have something structured to parse.

## Tests

65 files to 173. Roughly 925 tests at 0.3.0 to over 1,800 now. I added completeness checks that make sure the algorithm registries stay in sync across categories, Python code, pseudocode, and sound descriptions. So if I add an algorithm and forget to wire up one layer, CI catches it instead of it shipping quietly broken, which is exactly what used to happen.

Smaller stuff: settings collapse into a bottom sheet on mobile, reduced-motion support, sound controls moved into the main control panel (should've been there from day one), video export got a share modal with captions.

## The hard part

Graphs. A node-link layout isn't something you render like an array. You need an actual layout pass that keeps edges legible while nodes are in motion, and I underestimated how long that would take to not look like spaghetti. Floyd-Warshall needed its own separate matrix substrate, basically a second rendering path for one algorithm. And localizing step descriptions for 13 new algorithms across three languages, with Arabic running right-to-left, was slow in a way that never shows up in a changelog but quietly eats a week.

What kept paying off: the registry-driven architecture. Adding two entire categories was mostly config, barely any new component logic. The boring architecture work I did months ago is the only reason this release didn't take twice as long.

## What's Next?

0.6.0 is Dynamic Programming and String Algorithms. Then the Pro plan features (after hopefully getting enough waitlist signups)

If you're learning data structures and algorithms, this kind of feedback-driven environment can significantly improve how quickly you progress.

- **App:** [https://bayanflow.com](https://bayanflow.com)  
- **GitHub Repo:** [https://github.com/ayoub3bidi/bayan-flow](https://github.com/ayoub3bidi/bayan-flow)  
- **Product Hunt:** [https://www.producthunt.com/products/bayan-flow](https://www.producthunt.com/products/bayan-flow)  

Thanks for reading, and if you’re into projects like this, feel free to check out the video or subscribe on YouTube. More devlogs and experiments are coming soon.

-----------
This article is also available on:  
* [Dev.to](https://dev.to/ayoub3bidi/bayan-flow-050-tree-traversals-graph-algorithms-and-turning-a-visualizer-into-a-platform-22c3)
* [Medium](https://ayoub3bidi.medium.com/bayan-flow-0-5-0-tree-traversals-graph-algorithms-and-turning-a-visualizer-into-a-platform-5cb56944596d)