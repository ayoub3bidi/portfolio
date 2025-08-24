---
title: "Quick tutorial: How to add a release GitHub workflow"
published: 2024-03-01
description: ""
image: "./covers/github.jpeg"
tags: ["tutuorial", "devops", "git", "github", "CI-CD"]
category: My tech journey
draft: false
---

<center style="border: 2px solid #4CAF50; padding: 10px; border-radius: 5px;">
  <strong>🎉 Exciting News! 🎉</strong><br>
  This article has gathered over <strong>10K reads</strong> on <a href="https://dev.to/ayoub3bidi/quick-tutorial-how-to-add-a-release-github-workflow-56ib">DEV</a>.<br/>
  Thank you all for your incredible support!
</center>

----------

As developers, we often find ourselves repeating manual steps when releasing new versions of our software. GitHub Actions allows us to automate these tasks, ensuring consistency and saving valuable time. Whether you’re deploying a web app, a library, or any other project, setting up a release workflow can significantly improve your development process.

## Prerequisites
Before we dive into the tutorial, make sure you have the following:
1. GitHub Repository: You’ll need a GitHub repository where you want to set up the release workflow.
2. Basic YAML Knowledge: We’ll be writing our workflow in YAML format, so a basic understanding of YAML syntax will be helpful.

## Creating a Simple Release Workflow
### Step 1: Understanding GitHub Actions Workflows
GitHub Actions workflows consist of triggers, jobs, and steps:
* **Triggers:** Events that initiate a workflow (e.g., pushes to specific branches).
* **Jobs:** Units of work within a workflow.
* **Steps:** Individual actions performed within a job.

### Step 2: Creating a Workflow File
1. Go to your GitHub repository.
2. Navigate to the `.github/workflows directory`.
3. Create a new YAML file (e.g., `release.yml`).

### Step 3: Define Your Workflow
Here’s a basic example of a release workflow:

```shell
name: Create release

on:
  push:
    tags:
      - "v*"

permissions:
  contents: write

jobs:
  release:
    name: Release pushed tag
    runs-on: ubuntu-22.04
    steps:
      - name: Create release
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          tag: ${{ github.ref_name }}
        run: |
          gh release create "$tag" \
              --repo="$GITHUB_REPOSITORY" \
              --title="${tag#v}" \
              --generate-notes
```

This GitHub workflow, named "Create release," triggers whenever a tag starting with "v" is pushed to the repository, granting write access to repository contents.
It defines a job named "release" that runs on an Ubuntu 22.04 virtual machine. This job executes steps to create a release using the GitHub CLI (gh).
The necessary environment variables, `GITHUB_TOKEN`, and `tag` are set automatically from GitHub so no need to worry about that.
The gh release create command is used to create a release, specifying the tag name, repository, and title (stripping the initial "v"), and generating release notes automatically. 

### Step 4: How to push your first release:
To demonstrate, you can create a tag locally using `git tag v1.0.0` and then push the tag to GitHub with `git push origin v1.0.0`.
This would trigger the workflow, resulting in the creation of a release with the specified tag and release notes on the GitHub repository's Releases page.

## Conclusion
Congratulations! You’ve set up a simple release workflow using GitHub Actions. Remember to customize it based on your project’s specific requirements. Explore more advanced features and integrations to supercharge your development process.

Happy automating! 🚀

-----------
This article is also available on:  
* [DEV](https://dev.to/ayoub3bidi/quick-tutorial-how-to-add-a-release-github-workflow-56ib)