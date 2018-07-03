---
title: "From Dabbler to Developer: Tips to Level-Up Self-Taught Programmers"
date: 2016-07-18
path: level-up-self-taught-programmers
tags:
  - open source
  - node
  - web development
  - open education resources
  - self-directed learning
comments: true
published: true
---

About a year ago, I decided that my journey as a self-taught programmer and developer was stalling out. I was becoming an expert at completing tutorials, but I didn't feel any closer to being comfortable starting and maintaining projects of my own. If you're a self-directed learner in the early phases of learning to code, read on for some helpful tips that you can use to break into the next level of growth.

![So hot right now.](/assets/mugatu-coding.jpg)

It's a wonderful time to learn about web development and software engineering, with an ever-growing heap of online resources at your disposal. However, learning to code is a time-consuming process, and it only becomes more difficult if you're juggling a full-time job that doesn't give you very much opportunity to flex your technical skills at work. To make the most effective use of my time, I developed several habits that improved my workflow and ensured a more steady progression with the goal of taking myself from hobbyist to professional:

## Find a mentor

As an educator, I'm a firm believer in the apprenticeship model of education. The most surefire way to ramp up your learning is to ally yourself with a professional and lean on their experience. A mentor has already been through many of the struggles you will be facing, and can offer advice, tips and tricks, and encouragement when needed.

This is a practice you can implement for free, as long as you are respectful of other people's time and energy. Getting started is as simple as heading to your local tech meetups or, better yet, leveraging your network of friends and colleagues to locate a professional developer who doesn't mind offering a bit of advice every now and then. Just ask around. You have nothing to lose and everything to gain.

Once you've found your new coding buddy, you need to make life easier for them by setting up the processes and workflows that will allow you to easily collaborate - see the rest of the tips below for some ideas on how to accomplish this.

If you're in an area without an active tech community, or if you're shy about putting yourself out there and asking for help, or even if you just prefer a more formal mentor relationship, there are many options for you. I personally chose to do a program with [Thinkful](https://www.thinkful.com/), and it was one of the best decisions I ever made as far pushing myself to become a job-ready developer. Their programs are reasonably priced, and you'll have the opportunity to work with a dedicated professional who is highly invested in imparting their knowledge and supporting your growth.

No matter how you locate your mentor, there are several ways you can make the most effective use of their time:

- Set up a short block of time every week or so to pair program, and work through a particularly difficult problem you're encountering on one of your projects. You can even do this remotely, thanks to wide assortment of collaborative code-editing platforms that are springing up (e.g., [Floobits](https://floobits.com/)).
- Have your mentor act as "product manager": they can check in on your project every now and then, submit new feature requests, and comment on pull requests or code reviews.
- Keep a shared Google doc or other shared resource that records helpful resources, articles, and other items of mutual interest.

## Break complex problems down into reasonable units of work

When it comes to self-directed learning, time is usually our enemy. Between work, family, and other obligations, it can be easy to feel overwhelmed. This usually leads to the unfortunate circumstance of looking at your personal projects, and feeling like you don't even know where to start, resulting in the project getting sidelined. Don't let this happen to you!

Take a cue from pros: read up on agile methodology and start to break down your work into bite-size chunks. You can get started with this practice easily by recording tasks and features using GitHub's issues. It can feel a little silly to open an issue on your own project if you're not even collaborating with anybody and you know that nobody else is likely to read the issue, but set that aside. Recording your tasks as issues serves the same purpose as writing comments in your code: it's just as useful for reference by "future you" as it is for anybody else.

If, like me, you're a fan of visualizing your workflow, there are several "kanban"-style tools that integrate nicely with GitHub: [waffle.io](https://waffle.io/) is a great app that will even move issues automatically based on your GitHub branch/pull request activity, while [zenhub](https://www.zenhub.com/) inserts your kanban board directly into GitHub and provides some other useful agile tools.

These tools will not only keep you more organized - they will also make it easier for other people to check out your work in progress and collaborate. Your mentor (and prospective employers) will thank you!

Perhaps even more importantly, using these tools and breaking your work down into manageable chunks makes it easy to break through that feeling of not knowing where to start. Working on your projects becomes a "pull process" in which you just grab the next issue that needs to be worked on, create a new branch, and get to work. This is crucially important when you have limited time and need to be able to make progress on your personal projects whenever you can find a few extra minutes or hours.

## Emulate real project management and build processes

In addition to the project management tools referred to above, consider using some deployment best practices to ensure that you can work on your project in incremental steps. Host your app on a cloud service like Heroku and make use of their [pipelines feature](https://devcenter.heroku.com/articles/pipelines) to ensure that you've always got access to live versions of your apps throughout your development process. Even on simple personal projects, I have Heroku set up such that:

- I always have a live, stable "production" version of my app that can be listed on my projects page.
- I have a staging app that allows me to QA the app before I promote it to "production"
- Individual pull requests to my codebase automatically generate their own one-off apps, to allow me to test my changes in an environment identical to my "production" app

Part of moving from hobbyist to professional is getting comfortable managing multiple environment across your development process, and ensuring that you are putting your best foot forward in your production app while giving yourself space to tinker and experiment.

## Focus on functionality over presentation

Those of us who are less design-minded are fortunate today in that we have a plethora of CSS frameworks to choose from, allowing us to put a little polish on our app design without having to always code up a new stylesheet from scratch. From more full-featured offerings such as [Semantic-UI](http://semantic-ui.com/) and Twitter [Bootstrap](http://getbootstrap.com/), to more lightweight boilerplate like [skeleton css](http://getskeleton.com/), options abound.

However, unless you want to become a designer, try not to get to wound up with making your project look perfect at first. Focus instead on acheiving the desired functionality. Once your project is behaving correctly, you can go back and get all of your styles looking spiffy.

When I was first getting started, I always had a tendency to try and build out the front-end/UI and server-side application at the same time; this can be a big drag on productivity. Use tools like [postman](https://www.getpostman.com/) to interactively test your API endpoints without having to worry about hooking up your client app.

## Give test-driven/behavior-driven development a try

When working on personal projects, one of my biggest problems is sticking to the highest priority issues without constantly tumbling down rabbit holes as I think of other features in need of implementation or bugs in need of squashing. You can partly ameliorate this problem with some of the tips I used above, such as using your issue tracker to break down your work.

Sometimes, however, we don't do the best job of describing what "done" looks like for a given unit of work. It may be worthwhile to give TDD (test-driven development) or BDD (behavior-driven development) a try. By defining the specifications and acceptance criteria for your work in advance, you'll know exactly when you're finished: when your tests address the main piece of functionality you are implementing, and when those tests pass!

## Wrapping up

I hope these tips have been useful for all of you new coders out there. There's never been a better time to learn about web development, with the vast amount of online resources we have at our disposal. However, if you want to take the step from expert tutorial-completer to beginning developer, make sure you pay close attention to organizing your personal projects and processes to support your own success. Good luck! Got more tips? Drop a comment below.