# Report of Issue in Next.js 14 with "src/" Instead of "app/"

This repository aims to report an issue that occurs when using Next.js 14 with the "src/" folder structure instead of the current Next Route convention using "app/". In certain cases, this configuration may lead to a page loop.

## Problem Description

When utilizing the "src/" folder structure instead of "app/" in a Next.js 14-based project, unexpected behavior has been observed resulting in an infinite loop when loading pages. This repository is created with the goal of highlighting and addressing this issue.

## Steps to Reproduce the Issue

To reproduce the problem, follow these steps:

1. Clone this repository to your local environment.
2. Install dependencies using the following command:
   ```bash
   yarn
   yarn dev
   ```
3. Open following url in your browser http://localhost:3000
