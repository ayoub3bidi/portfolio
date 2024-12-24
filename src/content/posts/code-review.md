---
title: "Code Review Culture: Orchestrating Excellence in Software"
published: 2024-02-01
description: ""
image: "./covers/code-review.jpg"
tags: ["code-review"]
category: Worth talking subjects
draft: false
---

In software development, beyond the syntax and structure of code lies a transformative force: The Code Review Culture.

It’s the collaborative symphony where minds converge, creating an ecosystem where critique fuels innovation.


This article delves into the essence of Code Review Culture, unraveling its impact on successful software engineering. From industry giants to agile startups, we explore how this culture transcends scrutiny, catalyzing creativity, resilience, and the relentless pursuit of excellence.

## What is a code review exactly?
Code Review is **managing changes** in the source codebase. Usually, we like to perform code reviews for direct codebase changes, design evolution, and obtaining/sharing knowledge.

But the question here is: **why do we need code reviews in the first place?**

The answer here is that because we need to:
• Ensure code satisfies requirements (does what it has to do compared to ticket description, modeling, etc…)
• Find bugs before the code reaches production.
• Check that the code is understandable, effective, maintainable, and secure.

We can mark the code review **completed** only when no tasks and comments were left unresolved and all CI checks passed.

The **code reviewer** can be one or more and it is usually the senior (or seniors) in your team.

Software engineers whose code is getting reviewed are called **Code Authors**, and they are responsible for overall changes and for the PR itself. You should merge or decline your PR (sometimes the code reviewer does that himself) depending on code review and testing results rather than the code reviewers.

## Aside from all this, what you can gain from code reviews on a personal level?
### You become a better developer
Code reviewing gives you a great set of skills like paying attention to the small details, keeping in mind the code’s readability, and being familiar with the company’s coding guidelines.

While doing code reviews, You can read technical articles to support your comments, practice reading and understanding the code of other developers, and learn from them.
By developing your reviewing skills, you will become more aware of your code quality and how to improve it.

### Confidence baby!
Code reviews make you realize that your opinion matters, that you have good comments to suggest, and that developers, at any level, can learn something new from you. And that can be a really big boost to self-confidence and drives you to keep up the good work.

## Before passing a PR
### Review it yourself
Before passing a PR, it’s always advised to do a self-review first to avoid any time-consuming problems by checking these points before passing a PR and sending it to your code reviewer:

* Does the design match the implementation?
* Do all CI pipeline checks pass?
* Were backward compatibility managed necessary?
* Do the unit tests manage the requirements?
* Were code annotations necessary?
* Did you review your code yourself?

If you feel that the self-review checklist above is not enough to make you feel comfortable sending your PR, check that the solution meets requirements (ticket description) and modeling (design) first. Then consider the following checks:

* The solution fits overall architecture and meets Corporate Guides
* Over-engineering
* Readability
* Code reuse
* Performance (efficiency)
* Security
* Testing the right things, testing completeness

### Code Review Anti-patterns
Please avoid the following anti-patterns:

1. **Nit-picking:** You skip formatting, whitespace, and style issues and leave them to automated tools
2. **Design change requests:** If you still need to change what was agreed on at the design (modeling) stage, think about creating a separate ticket.

3. **Inconsistent feedback:** Try to be explicit and precise in your comments.

4. **Ghost reviewer:** Sometimes someone in the review process simply doesn’t respond.

5. **Ping-pong reviews:** When the code author makes more changes after more comments and suggestions from code reviewers, which repeats forever.

### A PR final touches
> Every pull request should have a good title, a good description, and an image if needed.

Before diving into the code review itself, Every code reviewer starts with a simple, yet crucial step: understanding what the PR is all about.

When the code reviewer understands the context of the PR and its goals, he will be able to pay attention to small details and identify potential issues.

If those are not there he probably will request them. And if they need to be clearer? he probably will ask you to refine them.

If the PR includes a UI change you need to add an image or a short video that demonstrates it.

A good title and description help focus on the idea of what your reviewer is about to review, and it also encourages you to be more explicit.
As a bonus: it creates wonderful documentation of your work (and it can defend you sometimes too).

## During and after the code review: How to communicate with your code reviewer properly

<center style="border: 2px solid #4CAF50; padding: 10px; border-radius: 5px;">
  <a href="/posts/communication/">The Role of Communication in Software Development</a>.
</center>

The harsh reality is that ***code review is a conflict by design***. It can start with a small disagreement and can easily escalate to an unpleasant argument.

Navigating code review comments is key to maintaining a high-quality codebase. Remember, critiques are aimed at the code, not the individual.

* When seeking clarification, ask questions respectfully, using ‘@mention’ for specific queries. For extensive discussions, use separate channels or schedule one-on-one calls.
* Respond promptly to comments, addressing all except those marked as Minor. If comments impact the scope significantly, create separate tickets for clarity.
* Regularly review notifications, ensuring a smooth process. After addressing comments, leave a message signaling completion to prompt reviewers to revisit the pull request.

## How to set up a good review culture in your company
### Make it clear that quality is a priority (politely)
Emphasize the quality of delivery. Emphasize the importance of maintaining a high-quality bar in the product. Explain that high-quality reviews are part of the quality control process and that the investment in quality reviews is important to your team, your customers, and the business.

### Critical reviews take time and are worthy of thanks
When someone gives you a critical code review, say thank you. When someone makes recommendations, say thank you. When your code is criticized, say thank you.

At any moment when you might feel the urge to be defensive of your work, say thank you. Encouraging constructive feedback starts with recognizing its worth!

### Discuss
It’s important to avoid the defensiveness of your work, but it’s also important to ask questions to ensure you thoroughly understand feedback comments.

Discuss the changes, don’t fight over them. If things start to go south, get on a call between you the author, and the reviewer or meet in person.

Remember that the goal is to create a great product, not to be right. When implementation improves, the whole team wins together.

### A review is not a direct approval for anyone!
Never assume that your code is ready for rubber-stamp approval when it heads into code review. This is especially important if you’re in any position of authority (technical lead, very senior individual contributor, management, etc…).

### Don’t let urgency break quality

<center style="border: 2px solid #4CAF50; padding: 10px; border-radius: 5px;">
  <a href="/posts/code-quality/">Junior Developers: Balancing code quality with speed of delivery</a>.
</center>

There will always be pressure to deliver more in less time. There will always be pressure from the business side of the house to move more quickly, to work harder, and to deliver faster.

It’s best to recognize that the desires of the business side of all organizations are inherently insatiable. By allowing urgency to keep you from maintaining a quality bar, you’re going to lose time in the long run.

Push back on unreasonable expectations and create the time and space necessary to iterate on work to reach a good quality.

### Invite suggestions for improvement
When you see reviews in the form of approval without any comment try to challenge it (politely of course).

Try something like: “While I’m flattered that you trust me this much, may I please have a deeper review? I’m trying to improve and would love some constructive feedback from the team on how I can improve the implementation here.”

Ask for feedback on your PRs. Point out areas you’re not sure about. Guide reviewers towards places where your work felt rushed.

You may think this is stupid but actually, that’s exactly what will make you a better developer.

### Code reviews engagement rules
* As the **author**, you need to learn how to add context to a commit message: our commit message explains “what” is being done in this specific commit, it does not explain “why”. This “why” is the context.
* As the **reviewer**, the rules are:
    1. “ask, don’t tell”.
    2. No “YOU” attitude while requesting changes in pull requests.

Try something like “What do you think about… ?”, “Did you consider…?”, or Could you please clarify…?

## Conclusion
An effective code review process is comprehensive, timely, regular, and inclusive. It emphasizes constructive feedback, considers the bigger picture, and makes use of appropriate tools to aid the process. Through such a process, teams can maintain high code quality, foster continuous learning, and ensure the successful execution of their projects.

--------

Sources:
- https://aarashkevich.medium.com/code-review-best-practices-1e2b1a292bc5
- https://medium.com/meliopayments/maximizing-the-value-of-code-reviews-a-guide-for-reviewers-5b60edf6e637
- https://www.pullrequest.com/blog/how-to-build-a-great-code-review-culture/
- https://levelup.gitconnected.com/my-takeaways-implementing-a-strong-code-review-culture-21dbe795618b

-----------
This article is also available on:  
* [Medium](https://ayoub3bidi.medium.com/code-review-culture-orchestrating-excellence-in-software-b39a77c6c7a1)