---
title: "Open Source, Man-Hour Multiplier Effect, and Implications for Educators"
date: 2016-06-02
path: open-source-for-educators
tags:
  - open source
  - node
  - web development
  - open education resources

comments: true
published: true
---

I've been hard at work on revamping and sprucing up some of my personal projects, and neglecting my writing. So I apologize for the long read in advance, but this is a topic I've been thinking about for a while. Read on for some brief ruminations on lessons educators can learn from open source software communities!

## Standing on the Shoulders of Giants

I was recently at a tech meetup in Arlington VA that was focused on cultivating the skill set of a full stack developer. If you're not sure what that phrase means, don't worry - it's actually not super complicated. People who work on web applications (and other software projects) frequently specialize in certain areas: a front-end developer focuses on creating what the user sees - they code up all of the user interactions and figure out how to display information to the user in an effective way. Back-end developers, on the other hand, work on the nuts and bolts of the app that is hidden away from a user - the "business logic" or set of instructions that determine what data to send over to the front-end, the databases that will be used to store the data, etc. For a variety of reasons, it is now fairly common for people to meld these two domains together and refer to themselves as "full stack" developers - people who contribute to both the front-end and back-end of the app, and sometimes other concerns as well, such as design basics and infrastructure (i.e., managing the servers or cloud hosting for the app).

In any case, the speaker at this meetup made a number of excellent points, but the key theme that began to emerge was that you can easily rely on freely available, open source solutions to common problems to ensure that you are spending the majority of your time creating the custom functionality of your app, and therefore delivering the value that your customer expects. In other words, your customer likely won't care _how_ you solved a problem, as long as the app does what it's supposed to - because your customer, after all, has a job to be done, otherwise they wouldn't be paying you to build a custom solution.

An example: a common optimization web developers seek to implement is to ensure that "above the fold" content renders quickly. "Above the fold" is a term that actually comes from print media days: think of the top half of the first page of a newspaper - this is some high value page real estate, since it's the first thing people see when they're perusing a news stand. Same concept for a web page: "above the fold" content is the stuff that shows up in your browser as soon as the page loads, before you have a chance to scroll around.

Without boring my less technically inclined readers with a bunch of details, the way web developers solve this problem is by attempting to load all of the information needed to style this "above the fold" content _first_, and then having the rest of page styles (all the information about how headings and paragraphs should be displayed, etc) load afterward. It's a small change that the user is typically not even aware of, except that, from their perspective, the page seems to load faster. It's only a few hundred milliseconds at most, but web users are notoriously impatient folks who are likely to browse away from a page if they feel like it's taking too long to load.

While it may sound like a fairly straightforward problem to solve, people who don't work regularly on front-end app development might be surprised at the underlying complexity: the style information for a page is typically stored in a CSS file that provides all the directions needed to make all the different elements on the page look nice and spiffy - so to complete your "above the fold" optimization, you are required to programatically determine which elements on the page appear above the fold, and insert the style information directly into your HTML so that it will render correctly as soon as the page loads.

Fortunately, the web development community is full of smart people who solve problems like this every day. I typically use a tool called [Grunt](http://gruntjs.com/) to automate certain tasks during my development process. You can write your own tasks with Grunt, but the real immediate value comes from the huge ecosystem of plugins that other people have written, allowing you to drop pre-made tasks into your project right away with just a little configuration.

And wouldn't you know it? There are [at least three](https://github.com/addyosmani/critical-path-css-tools) different Grunt plugins just sitting there, waiting to solve our "above the fold" problem. Some of these solutions have even been developed by software engineers at Google. Needless to say, I trust those dudes to solve the problem more effectively than I probably could on my own, particularly because this isn't a problem I really wanted to solve in the first place! I just wanted to build, for example, a website for a friend's nonprofit, or a landing page for an app.

So, __why not stand on the shoulders of giants, borrow their solution, and focus on the real problem at hand?__ What we achieve by doing so is the realization of a beautiful spontaneous order, in which people are constantly building on the work of others, multiplying the impact of their individual man-hours of labor. Instead of just benefiting an individual project, the work of a developer can fuel the progress of thousands of other projects as well.

## Can educators mimic the dynamism of the open source software community?

Anybody who has taught in a K12 setting knows that being a teacher can be a lonely existence. Even though school systems are making some inroads when it comes to encouraging collaboration among their faculty, teachers tend to live on a bit of an island, isolated in their own classroom.

In education and ed tech circles there is an increasing interest, however, in Open Education Resources (OER). The basic idea is that releasing curriculum materials under a less restrictive license (for instance, a [Creative Commons](https://creativecommons.org/) license that allows anybody to reproduce, alter/edit, and reuse your work) will make it easier for teachers and professors to share and collaborate, rather than relying on a binder full of lesson plans and worksheets or whatever other resources they have locked up in their individual classroom. For more info on OER, check out this [resource page](http://www.oeconsortium.org/info-center/topic/introduction-to-oer/).

This is cool stuff - so why isn't use of OER more widespread already? Well, it's getting there, but I honestly think it's because tracking down OER is a bit of a chore.

Think about my example with the Grunt plugins above. To use these plugins, I download them as "packages" that can be reused in my project. I can even make changes to these packages if I really want to. The process of finding software packages and integrating them into your project is facilitated by specialized tools called "package managers".

Is it possible to have a "package manager" for curriculum materials - a tool that would allow you to easily search an index of OER and plop the required stuff right into your own project? I think so, but it would have to solve a few problems:

### Intuitive version control is hard

One of the most crucial tools for working effectively on a software development team is a version control system, like git and [github](http://github.com). Keeping clear logs of how your files are changing, making it easy to revert to old versions as necessary, and showing who made what changes - these features save a lot of time and headaches.

In the education space, teachers and professors usually only get exposure to lightweight version control via wiki-type applications. While it is indeed possible to collaborate effectively as a team using a wiki, it can still be a bit bewildering to a new user - and software development-oriented tools like git are even more esoteric. How can we lower the barrier of entry for teachers who want to collaborate on curriculum materials?

There are few key features that teachers would need:

- The ability to "fork" a resource; that is, create a new copy that they can edit to their heart's content, without affecting the original.
- The ability to submit edit suggestions to "upstream" versions - for example, let's say you fork a resource and find out that it's working really well for your students. Perhaps you would want to pass those changes up to the people maintaining the original resource, so it can get out in front of a wider audience?
- The ability to easily compare edits and changes side by side in a friendly graphical interface.

If you're into software, you already recognize that these are all features that come packed into github. So where is the github for OER? A few organizations have tried different approaches (see [OpenStax](https://openstax.org/) and their original Connexions project, or the very ambitious [p2pu](http://howto.p2pu.org/modules/start/create-your-course/) project, which actually uses github to solve these problems). For the past few years, I've been working closely with people in the ed tech industry and philanthropy sectors, and the story always seems to be the same: teachers are already overwhelmed with their current workloads, and going through the process of learning how to use these tools, and the entire collaborative ethos, is too large of a lift for too many.

So it would appear, then that progress in solving this problem is more cultural than technological - educators have to be given more time to plan, more time to work with their peers outside of class, and more time working with specialist curriculum developers in order to develop this skill set.

### Some measure of community endorsement or reliability is needed

[Social proof](https://en.wikipedia.org/wiki/Social_proof) can be misleading, but it can also provide a useful gut check about whether to trust a particular resource. When using a software package manager like [npm](https://npmjs.org) (for javascript projects) or forking a code repository on github, you can see some clear indications of how many other people are using that resource. In npm, for example, you are given info about how many times people have downloaded and used the package recently, and information about when the maintainers last pushed out a new version or made an update.

OER collections seem to have a big problem, in that very few offer this level of detailed community feedback, and those that do can't seem to attract many users who are willing to provide useful feedback in the form of reviews or ratings.

### A common specification is needed to ensure interoperability

Package managers work because every software package is accompanied with a set of metadata that makes the package easy to index, and therefore, easy for other people to find and download.

In my opinion, this is still the wild wild west of OER, despite the efforts of organizations like [IMS Global Learning Consortium](https://www.imsglobal.org/) to develop standards like Common Cartridge, Learning Tools Interoperability, etc. These people are doing great work, but it still remains to be seen how well the ed tech community can rally around common standards that will facilitate the man-hour multiplier effect that comes so naturally to open source software communities.

### Curriculum materials can't hide their implementation like software modules can

This is, in my opinion, _the key_ issue that needs to be tackled in order to bring the dynamism of open source software practices to education technology and curriculum development.

When you download a software package and drop it into your project, you don't really have to know _anything_ about how the internals of the package work. A well developed module/package keeps the implementation details private, and then provides an application programming interface (API) that other developers can use to access the functionaly of the module. In other words, if I download that Grunt plugin I talked about above that'll help me load my page faster, I don't really have to know _how_ it works - I just need to know the correct commands to tell it to do what I want it do.

Open Education Resources, which often take the form of written curriculum materials, cannot be so neatly encapsulated. Can you imagine a teacher downloading, for example, an online course module and dropping it in front of their students without carefully scrutinizing it?

This is the point where many people seem to give up, and say that curriculum development is just too different (compared to software development) - the analogy seems to break down.

I recognize the difference, but I'm also optimistic about the potential here. We will never get to the point where OER can be "dragged and dropped" in front of students without any care given to the contents of the resource, but that's not the point - what we _can_ do is use the best parts of open source software development to make these resources easier for educators to track down and sift through, to lower the barrier of entry for those who seek to leverage OER in their classes and programs.

## Looking ahead

This is a highly dynamic field of inquiry, and it can be hard to keep up with developments in the open education movement and the wider ed tech industry. While we haven't yet discovered our killer app, or our so-called "github for curriculum development" there are a lot of people out there making serious strides towards opening up education resources to make them more widely accessible to educators and students around the world.

If you've got any other leads on organizations doing awesome in this field, drop a note in the comments below or chat me up on [twitter](https://twitter.com/justinmhill). Thanks for reading!