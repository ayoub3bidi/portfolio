---
title: "Docker in a Nutshell: A Powerful Platform for Containers"
published: 2022-03-05
description: ""
image: ""
tags: ["docker", "devops"]
category: My tech journey
draft: false
---

Docker has become a standard tool for software developers and system administrators. It’s a neat way to quickly launch applications without impacting the rest of your system. You can spin up a new service with a single docker run command.
Containers encapsulate everything needed to run an application, from OS package dependencies to your own source code.

## How Does Docker Work?
Containers utilize operating system kernel features to provide partially virtualized environments. It’s possible to create containers from scratch with commands like chroot.

Docker is a complete solution for the production, distribution, and use of containers. Modern Docker releases are comprised of several independent components.

First, there’s the Docker CLI, which is what you interact with in your terminal. The CLI sends commands to a Docker daemon. This can run locally or on a remote host. The daemon is responsible for managing containers and the images they’re created from.

The final component is called the container runtime. The runtime invokes kernel features to actually launch containers. Docker is compatible with runtimes that adhere to the OCI specification. This open standard allows for interoperability between different containerization tools.

You don’t need to worry too much about Docker’s inner workings when you’re first getting started. Installing docker on your system will give you everything you need to build and run containers.

## Why Do Developers Like Docker ?
Containers have become so popular because they solve many common challenges in software development. The ability to containerize once and run everywhere reduces the gap between your development environment and your production servers.

Using containers gives you confidence that every environment is identical no matter what. If you have a new team member, they only need to docker run to set up their own development instance. When you launch your service, you can use your Docker image to deploy to production. The live environment will exactly match your local instance, avoiding “but it works on my machine” silly scenarios.

## Docker is not a hardware virtualization system
When Docker was released, many people compared it to the hypervisor of virtual machines as VMware, KVM and Virtualbox. Even if Docker has some points in common with hypervisors, actually has a total different approach. Virtual machines emulate the hardware. The abstractions needed to make this operation have a cost. This means that you can only run a few virtual machines on the same hardware before to see some problems. On the other side, theoretically you can run hundreds of containers on the same machine without this kind of worries.

## Docker Terminology
Hear me out, I'm not gonna turn this article into a long tutorial or something but you should know those:
- Image: It is basically an executable package that has everything that is needed for running applications, which includes a configuration file, environment variables, runtime, and libraries.

- Dockerfile: This contains all the instructions for building the Docker image. It is basically a simple text file with instructions to build an image. You can also refer to this as the automation of Docker image creation.

- Build: Creates an image snapshot from the Dockerfile.

- Tag: Version of an image. Every image will have a tag name.

- Container: A lightweight software package/unit created from a specific image version.

- DockerHub: Image repository where we can find different types of images.

- Docker Daemon: this runs on the host system. Users cannot communicate directly with Docker Daemon, only with Docker clients.

- Docker Engine: The system that allows you to create and run Docker containers.

- Docker Client: It is the chief user interface for Docker in the Docker binary format. Docker Daemon will receive the Docker commands from users and authenticates to and from communication with Docker daemon.

- Docker registry: It is a solution that stores your Docker images. This service is responsible for hosting and distributing images. The default registry is the Docker Hub.

## Docker Graphical Management
If the terminal’s not your thing (weirdo -_-), you can use third-party tools to set up a graphical interface for Docker. Web dashboards let you quickly monitor and manage your installation. They also help you take remote control of your containers.

## Maintaining Security
Dockerized workloads can be more secure than their bare metal counterparts, as Docker provides some separation between the operating system and your services. Nonetheless, Docker is a potential security issue, as it normally runs as root and could be exploited to run malicious software.
If you’re only running Docker as a development tool, the default installation is generally safe to use. Production servers and machines with a network-exposed daemon socket should be hardened before you go live.

## Working with Multiple Containers
The docker command only works with one container at a time. You’ll often want to use containers in aggregate. Docker Compose is a tool that lets you define your containers declaratively in a YAML file. You can start them all up with a single command.
This is helpful when your project depends on other services, such as a web backend that relies on a database server. You can define both containers in your docker-compose.yml and benefit from streamlined management with automatic networking.

## Containers Orchestration
You know I'm not gonna talk about docker without talking about the beauty of Kubernetes.

Docker isn’t normally run as-is in production. It’s now more common to use an orchestration platform such as Kubernetes or Docker Swarm mode. These tools are designed to handle multiple container replicas, which improves scalability and reliability.

Docker is only one component in the broader containerization movement. Orchestrators utilize the same container runtime technologies to provide an environment that’s a better fit for production. Using multiple container instances allows for rolling updates as well as distribution across machines, making your deployment more resilient to change and outage.  

The regular docker CLI targets one host and works with individual containers.

## Conclusion
Docker gives you everything you need to work with containers. It has become a key tool for software development and system administration. The principal benefits are increased isolation and portability for individual services.

Sources:
- https://www.infoworld.com/article/3310941/why-you-should-use-docker-and-containers.html
- https://www.jobsity.com/blog/8-reasons-why-docker-matter-for-devs
- https://www.geeksforgeeks.org/why-should-you-use-docker-7-major-reasons
- https://www.docker.com/why-docker

-----------
This article is also available on:  
* [DEV](https://dev.to/ayoub3bidi/docker-in-a-nutshell-a-powerful-platform-for-containers-5af6)
* [Medium](https://ayoub3bidi.medium.com/docker-in-a-nutshell-a-powerful-platform-for-containers-2897ef6492b9)