---
title: Should you (still) use/learn GraphQL?
published: 2022-09-26
description: ""
image: ""
tags: ["graphql", "backend", "webdev"]
category: My tech journey
draft: false
---

GraphQL is fast becoming a go-to query language for companies to interact with their data. Although data management is one of the top concerns for a lot of companies, many people don’t really understand what GraphQL does or why it’s so popular. 

When GraphQL was first introduced it offered a radically new way to build APIs, with more control, more granularity, and more flexibility.
I know this technology is not a hot topic anymore unlike 2 years ago when literally everyone was talking about it and how fascinating it was.
I used GraphQL for two projects for now and I think it's good, but the real question here is it still worth learning and using in your project or is it just a phase?

## TL;DR
- GraphQL is not needed for every project.
- A solid REST API is good enough.
- GraphQL is for when REST is Just Too Slow.

## GraphQL Vs. REST
![GraphQL Vs. REST](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/f4qr805foun473d25t8e.png)

<center>source: mobilelive.ca</center>

- **REST** is Stateless meaning that it doesn’t require any knowledge of the client's state to correctly interpret the request. all of the necessary information is included in the request itself.
REST fetches JSON data and is available to any server-side language and any frontend framework.
- **GraphQL** was designed to make APIs fast, flexible, and developer-friendly. And just like REST, it is both stateless, available to any frontend framework and any server-side language, and usually fetches JSON data. But where GraphQL becomes very unique, is its way of communicating with the front end.

## What GraphQL does better
![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bxzwegtpl3lzadalxu9w.png)

<center>
source: <a href="https://medium.com/@vitaliysteffensen/should-i-use-graphql-or-rest-in-2022-7291cc882cab">Should I use GraphQL or REST in 2022?</a>
</center>

- **Quick Product Development on the Frontend**: frontend development groups have to wait a certain amount of time for the backend group to finish writing these APIs for the client app to fetch and post the data. The GraphQL lifecycle provides an approach where both frontend and backend developers can work in parallel without obstructing the overall development process.

- **A single API call**: This allows you to request multiple resources. this minimizes both time and bandwidth by reducing the number of network round trips to the server. It also helps to prevent waterfall network requests, where you are dependent on the result of one call, to create another.

- **Customizable response**: It makes it a great benefit to the front end of the application. This involves the ability to define an alias for fields and resolve each of the values into different values. 

## What REST does better
REST is still the leading architecture and most developers know it inside out.
![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mhx3muna6uq4gecgwdh4.png)
<center>
source: <a href="https://medium.com/@vitaliysteffensen/should-i-use-graphql-or-rest-in-2022-7291cc882cab">Should I use GraphQL or REST in 2022?</a>
</center>

- REST has **many build-in features**: that make it super easy to implement a simplified cache, file upload, or even a rate limitation per API key.

- Rest is still **a better choice for Complex queries**: GraphQL's nested architecture can turn into a bottleneck when creating complex queries.

- It is still **easier to create good error handling** in RESTful APIs: GraphQL always returns the 200 Ok status for every API request, including those with errors. 

## Conclusion
Both GraphQL and REST API development lifecycle approaches are useful depending on the need, and both have their advantages and disadvantages. GraphQL is exponentially gaining popularity, mainly because of its “no over and under-fetching” ability.

--------

sources: 
- https://www.mobilelive.ca/blog/graphql-vs-rest-what-you-didnt-know
- https://medium.com/@vitaliysteffensen/should-i-use-graphql-or-rest-in-2022-7291cc882cab 
- https://blog.logrocket.com/graphql-vs-rest-api-why-you-shouldnt-use-graphql/
- https://thenewstack.io/graphql-for-when-rest-just-doesnt-cut-it/

-----------
This article is also available on:  
* [DEV](https://dev.to/ayoub3bidi/should-you-still-uselearn-graphql-34g5)
* [Medium](https://ayoub3bidi.medium.com/should-you-still-use-learn-graphql-d3642fd42de)