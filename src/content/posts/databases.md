---
title: Databases you should know as a developer
published: 2021-09-14
description: ""
image: ""
tags: ["database", "backend", "webdev"]
category: My tech journey
draft: false
---

Every company needs a database to store and organize data. Data can be very sensitive so we always have to be careful while accessing or manipulating it in the database.

## Redis

Redis is an in-memory data store. Since main memory(RAM) read/write operation is faster than the disk read/write ( databases like MySQL, Mongo, h2 are storing data in hard disk), you can massively improve the performance of your application.Remember, since Redis is in memory, it is volatile in nature by default, but you can configure it for write to disk at regular intervals so if the server fails you won't lose your data.

Redis is not a replacement for your database. One common use case is using it as the data cache, by loading frequently accessing data sets to Redis, you can avoid too many reads to your database and can improve the performance of the application.

## Cassandra

The Apache Cassandra database is the right choice of database if you are looking for scalability and high availability without compromising performance for your mission-critical applications.
* Easily Deals With Velocity, Variety, and Complexity Issues.
* Can Handle Massive Datasets.
* Homogeneous Environment.
* Ease of Administration.

## MongoDB

MongoDB is a cross-platform NoSQL database. You can use this database for mobile apps, real-time analytics, IoT, and can provide a real-time view for all your data. MongoDB is a high-speed database and the data is stored in the form of JSON style documents. It has deployment flexibility, high performance, high availability and easy scalability.

## MySQL

MySQL is a very popular open-source RDBMS which is used by most of the major tech companies
such as Facebook, Google, Twitter and Adobe. It was acquired by Oracle as a part of Sun Microsystems’ acquisition in 2009.
MySQL has different features for different editions (Enterprise Edition, Standard Edition, and Classic Edition).

## PostgreSQL

This database is also an open-source Object-Relational DBMS but users are free to create NoSQL databases.
It is ideal for companies that frequently deal with large volumes of data. A lot of gaming apps, database automation tools, and domain registries use this database. Companies such as Apple (macOS Server operating system uses this database), Cisco, Fujitsu, Skype, and IMDb, etc use this database.

## Neo4j

Neo4j is the first and dominant mover in the graph market. The company’s goal is to bring graph technology into the mainstream by connecting the community, customers, partners and even competitors as they adopt graph best practices everywhere.
* Highly Performant Read and Write Scalability, Without Compromise.
* Rock-Solid Reliability for Mission-Critical Production Applications.
* Whiteboard-friendly Data Modeling to Simplify the Development Cycle.

## Elasticsearch

ElasticSearch is a search engine based on the Lucene library. It is a distributed and open-source full-text search and analytics engine. It provides a distributed, multitenant-capable full-text search engine with an HTTP web interface and schema-free JSON documents. A lot of big organizations like Wikipedia, The Guardian, StackOverflow, GitHub, etc.
* It allows you to create replicas of their indexes and shards.
* It is scalable up to petabytes of structured and unstructured data.
* Multi tenancy and extremely fast search.
* Designed to operate in real-time.

## GraphQL

GraphQL allows making multiple resources request in a single query call, which saves a lot of time and bandwidth by reducing the number of network round trips to the server. It also helps to save waterfall network requests, where you need to resolve dependent resources on previous requests. For example, consider a blog’s homepage where you need to display multiple widgets, such as recent posts, the most popular posts, categories, and featured posts. With REST architecture, displaying these would take at least five requests, while a similar scenario using GraphQL requires a single GraphQL request.

## Conclusion
There are multiple popular databases. According to  your project requirements you should find out the best tool for the job.

-----------
This article is also available on:  

* [DEV](https://dev.to/ayoub3bidi/databases-you-should-know-as-a-developer-2449)
* [Medium](https://ayoub3bidi.medium.com/databases-you-should-know-as-a-developer-1f2f1d357d2)
* [HackerNoon](https://hackernoon.com/essential-databases-every-developer-should-be-familiar-with)