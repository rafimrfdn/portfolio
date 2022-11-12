---
title: How Version Number Software Works
slug: how-version-number-software-works
tags: ['DevOps', 'Software Development', 'Versioning']
categories: ['DevOps']
date: 2022-11-12T21:06:00.000Z
image: /assets/img/blog/0025-how-version-number-software-works/how-version-number-software-works.png
author: MKAbuMattar
description: 'Software versioning is a way to keep track of the changes made to a software product. It is a way to identify the different versions of a software product.'
prev: how-to-connect-a-two-ec2-instances-data-transfer-using-aws-cli-without-aws-efs
next: undefined
featured: true
draft: false
---

## Introduction

Introducing new package versions in systems with a lot of dependencies may rapidly turn into a headache. You run the risk of experiencing version lock if the dependency specifications are overly restrictive (the inability to upgrade a package without having to release new versions of every dependent package). If dependencies are defined too loosely, version promiscuity will ultimately bite you (assuming compatibility with more future versions than is reasonable).

## Why Versioning?

versioning is a set of rules and requirements that dictate how version numbers are assigned and incremented. These rules are based on but not necessarily limited to pre-existing widespread common practices in use in both closed and open-source software.

## Versioning Order

The versioning order is the order in which the version numbers are compared when determining precedence. For example, the precedence of 1.0.0 < 2.0.0 < 2.1.0 < 2.1.1.

## Versioning Format

The versioning format is a standard way of representing version numbers in text. For example, the version number 1.0.0-alpha+001 would be represented as 1.0.0-alpha.001.

## Versioning Rules

The versioning rules are a set of requirements that dictate how version numbers are assigned and incremented. For example, the semantic versioning rules dictate that once a version number has been assigned, it MUST NOT be changed.

## Versioning Scheme

The versioning scheme is a standard way of assigning version numbers and incrementing them. For example, the semantic versioning scheme defines how to assign and increment version numbers in the format major.minor.patch.

## Versioning Types

The versioning types are a set of categories that version numbers can be classified into. For example, the semantic versioning types are major, minor, patch, pre-release, and build metadata.

- Major: when you make incompatible API changes.
- Minor: when you add functionality in a backwards compatible manner.
- Patch: when you make backwards compatible bug fixes.
- Pre-release: for initial development before version 1.0.0. Anything may change at any time. The public API should not be considered stable.
- Build metadata: for build metadata that does not affect the versioning.
- Precedence: for build metadata that does not affect the versioning.

## Versioning Examples

The versioning examples are a set of version numbers that demonstrate how versioning works.

- For example

- `1.0.0`: is the initial release.
- `1.0.1`: is a patch release.
- `1.1.0`: is a minor release.
- `2.0.0`: is a major release.
- `1.0.0-alpha`: is a pre-release.
- `1.0.0-0.3.7`: is a pre-release.
- `1.0.0-x.7.z.92`: is a pre-release.
- `1.0.0-alpha+001`: is a pre-release with build metadata.
- `1.0.0+20130313144700`: is a release with build metadata.
- `1.0.0-beta+exp.sha.5114f85`: is a pre-release with build metadata.
- `1.0.0+21AF26D3—117B344092BD`: is a release with build metadata.
- `1.0.0-beta+exp.sha.5114f85`: is a pre-release with build metadata.

## Versioning Tools

The versioning tools are a set of tools that can be used to manage version numbers. For example, the semantic versioning tools are npm, Composer, and Maven.

## Conclusion

In this article, we have learned about versioning. We have learned about the versioning order, the versioning format, the versioning rules, the versioning scheme, the versioning types, the versioning examples, and the versioning tools.

## References

- [Semantic Versioning](https://semver.org/)
- [NPM - Semantic Versioning](https://docs.npmjs.com/about-semantic-versioning)
- [Composer - Semantic Versioning](https://getcomposer.org/doc/articles/versions.md)
- [Maven - Semantic Versioning](https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html)
- [GitLab - Semantic Versioning](https://docs.gitlab.com/ee/user/project/releases/#semantic-versioning)
- [Atlassian - Semantic Versioning](https://www.atlassian.com/git/tutorials/inspecting-a-repository/git-tag)
