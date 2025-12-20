---
title: "Bayan Flow 0.2.0: finishing the foundations (i18n, RTL, tests, and small UX wins)"
published: 2025-12-20
description: ""
image: "./covers/devlog-2.png"
tags: ["software development", "algorithms", "learning", "visualization", "projects", "bayan-flow"]
category: My tech journey
draft: false
---

A few weeks after shipping version 0.1.0, I realized the hard part wasn’t new algorithms, it was the stuff that makes an app feel usable and maintainable. Version 0.2.0 isn’t flashy. It’s the set of changes that stop future work from turning into a refactor nightmare.

This DevLog covers what I actually did: why I prioritized internationalization and RTL, what I added to make the UI feel finished, and the infrastructure work that lets me iterate safely.

<iframe width="100%" height="468" src="https://www.youtube.com/embed/8t4vh3ovldo" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Quick recap

If you’re new: **Bayan Flow** is an interactive algorithm visualizer built with **React 19**, **Vite**, **Tailwind**, and **Framer Motion**. The goal is to make algorithms feel intuitive, not just correct.

## Why this release exists

Three drivers for 0.2.0:

* **Accessibility/i18n**: English-only felt wrong for an educational tool; added French and Arabic.
* **Polish/UX**: Landing page, onboarding, sound, fullscreen, and finer UI behavior so it doesn’t feel like a dev toy.
* **Maintainability/infrastructure**: tests, CI/CD, dependency automation, so future features don’t break everything.

## Internationalization and RTL

I used **i18next** for English, French, and Arabic. Extracting strings into JSON was the easy part. Arabic introduced the real challenge: layout direction.

Tailwind 4 supports RTL, but the work was in being intentional:

* Replace directional classes (`ml-4`, `pl-2`) with logical ones (`ms-4`, `ps-2`) where appropriate.
* Audit components for animation direction: things like slide-in need to invert when text direction flips.
* Make language detection automatic (browser locale) but allow manual overrides.

Result: the app flips cleanly. It’s not obvious when it’s right, but painfully obvious when it’s not, so doing this now saves pain later.

## Sound effects (experimental)

I added opt-in audio feedback with **Tone.js**:

* Beeps on comparisons during sorts.
* Grid-based tones for pathfinding exploration.
* A small chord when the path completes.

Totally optional, labeled experimental. It adds a tactile layer to the visuals. If you’re a sound nerd and it’s janky, please open an issue or send a PR.

## Landing page, routing, and onboarding

Version 0.1.0 dropped users straight into the visualizer. That’s fine for devs, not for learners.

Now there’s:

* A simple landing hero and features section.
* A roadmap preview and basic onboarding copy.
* **React Router** for landing, visualizer app, and roadmap pages.

This basic structure makes the project approachable for first-time visitors and teachers.

## Fullscreen mode and UI refinements

Small UX changes that matter:

* Fullscreen mode to hide other components and focus on the visualization.
* Auto-hiding legend panel: shows when needed, fades when idle.
* Control panel layout fixes (Windows and non-Linux screen ratios).
* Little accessibility touches that improve discoverability and clarity.

## Testing and infrastructure

The boring-but-critical work:

* Using **Vitest**, we now have 31 test files (666 tests in total). Component tests, hooks, and utilities.
* CI/CD overhaul: Netlify branch deployments, PR protections, Codecov for coverage.
* **Renovate** to automate dependency updates.

Not 100% coverage yet (but really, who arrived there in the first place), but enough to refactor confidently without breaking core flows.

## What I didn’t do

I didn’t add a ton of new algorithms. Why? Because adding algorithms on top of shaky foundations becomes a maintenance tax. Fixing RTL, wiring tests, and adding routing now makes future feature work simple and low-risk.

Also, I got distracted and shipped a beta of another side project called [Swiss Knife](https://pypi.org/project/swiss-knife-py/). Story of every dev, I guess.

## Challenges and lessons

* **Thinking in start/end vs left/right** is surprisingly hard. One missed class breaks the whole RTL layout.
* **Vitest + Vite module resolution** caused longer debugging sessions than expected.
* The sound effects system is fun but subjective; user feedback will decide whether it stays or not.

## What’s next

Now that the foundation exists, I’ll return to the core feature set:

* More sorting and pathfinding algorithms.
* Better complexity analytics.
* Side-by-side Python code integration so you can see visualization and implementation together.

## Conclusion

Version 0.2.0 wasn’t about new algorithms. It was about making Bayan Flow reliable, accessible, and maintainable. Those are boring changes on paper, but they pay off when you want to ship features fast and keep contributors sane.

If you try it, tell me what you think, especially about the audio and the mobile experience. I’ll keep logging progress; next episode should be algorithm-heavy again.  

- **App:** [https://bayanflow.netlify.app](https://bayanflow.netlify.app)  
- **GitHub Repo:** [https://github.com/ayoub3bidi/bayan-flow](https://github.com/ayoub3bidi/bayan-flow)  
- **Product Hunt:** [https://www.producthunt.com/products/bayan-flow](https://www.producthunt.com/products/bayan-flow)  

Thanks for reading, and if you’re into projects like this, feel free to check out the video or subscribe on YouTube. More devlogs and experiments are coming soon.

-----------
This article is also available on:  
* [Dev.to](https://dev.to/ayoub3bidi/bayan-flow-020-finishing-the-foundations-i18n-rtl-tests-and-small-ux-wins-4lb7)
* [Medium](https://ayoub3bidi.medium.com/bayan-flow-0-2-0-finishing-the-foundations-i18n-rtl-tests-and-small-ux-wins-8a747b30d5e5)