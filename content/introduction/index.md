---
title: Introduction
layout: compform_chapter.pug

hero_title: Introduction
description: Using a computer to explore aesthetics is a powerful creative process. This class explores a variety of tools and techniques for creating algorithmic images, generative art, parametric designs, and procedurally generated content.
software: p5.js + p5.dom
---

## What Computational Form Is

> Q: Can the computer substitute for the Designer?
>
> A: Probably, in some special cases, but usually the computer is an aid to the Designer.
>
> Charles Eames, Design Q&A [Transcript](http://www.markwunsch.com/eames.html) [Video](https://www.youtube.com/watch?v=bmgxDCujTUw&feature=emb_logo){attrib}

This is a class about computational form, algorithmic images, generative art, parametric design, and procedural generation. In this class, you will explore a creative process in which forms are created indirectly, by first creating and then following specific processes. You will write instructions that a computer will follow to create images, animations, sounds, and sculptures.

You will make things that make things.

There are many reasons artists and designers employ algorithmic methods. Some important ones include:

- exploring new aesthetics
- automating complex tasks
- enhancing variety
- creating dynamic, responsive content

This class will focus on exploration, experimentation, and skill building.

<!-- ::: slides .contain
// needs @@ before inclue
include('./compform_slides.yaml')
/:: -->

<!-- ::: slides .contain
@@include('../procedures/compform_slides.yaml')
/:: -->

### What Computational Form is Not

While we use computer programming throughout this class, it is important to understand that procedural generation doesn't require a computer. Procedural generation is about defining instructions, systems, and processes that create form. Computers are very useful tools for carrying out such instructions, but artists have also created systems that rely on humans or purpose-built machines instead.

<!-- Many of the works included in the slideshow above embody principles of computation and instruction without using computers. -->

<!-- ::: .activity

## The Sierpinski Triangle

Draw a Sierpinski triangle with pencil&nbsp;and&nbsp;paper.

The [Sierpinski Triangle](http://en.wikipedia.org/wiki/Sierpinski_triangle) is a fractal. It is **infinitely detailed** and **self-similar**. There are many, many ways to generate a Sierpinski triangle. The amazing [Sierpinski triangle page to end most Sierpinski triangle pages](http://www.oftenpaper.net/sierpinski.htm) details many of them. Here is another.

### Instructions

Please take out a sheet of paper and pen and follow these instructions:

1. Draw an up-pointing equilateral triangle that fills most of the page.
2. Lightly mark the midpoint of each line of that triangle.
3. Draw straight lines connecting each of those marks. This forms **four** new triangles: **three** that point up, **one** that points down.
4. Choose any empty, up-pointing triangle on the page.
5. Go to instruction 2.

Yes, these instructions will go on forever. I'll interrupt you in a minute.

[stand-alone instructions](./sierpinski.html){boxed right}

/:: -->

## About this Class

In this class, you will make things that make things. You will **explore** a variety of programming languages, tools, and methods. You will **create** a variety of forms: graphics, sounds, videos, animations, even 3D-printed objects. The primary goals of this class are to introduce **new ways of making** and to encourage **aesthetic investigation**.

![Make Things that Make Things](./figures/make_things.png){wide}

We'll work in Javascript most weeks, using a variety of libraries including p5.js, paper.js, and tone.js. We'll also look at some other languages and tools, like OpenSCAD. As we go we'll examine the differences between these tools and how these tools influence what we make.

We will also explore interesting programming topics including:

- pseudo-random numbers
- Perlin noise
- composing strategies and tactics
- Markov chains
- Context Free Grammers
- Imparative vs Declaritive programming

### Prerequisites

This class is designed to support beginning, intermediate, and advanced students. That said, to be comfortable in this class, it is best if you have had an introduction to a procedural programming language such as Javascript or Processing.

We will be exploring and creating projects in a variety of programming tools and languages. It is very likely that some of them will be completely new to you, no matter your current level of experience.

Coming into this class, you should:

- understand the basics of procedural programming: variables, conditionals `if`, looping `for`, functions, etc.
- be able to create a simple project in Javascript (with p5.js) or Processing from scratch, using the tools of your choice.
- be comfortable working in Adobe Illustrator and Photoshop.
- be comfortable capturing digital images with a camera and scanner.

That said, this class offers a good deal of flexibility. If you are not sure if you are ready for this class, please speak with me to make a plan.

### Class Format + Homework

This semester the class will be held online. We will meet every week for the full class time, and each class will be packed. Long Zoom lectures are boring and tiring. To maximize our time together, most class time will be used for hands-on activities, group breakouts, and interactive Q+A and livecoding.

Each week will focus on a new topic or tool. Before the class meeting, you will prepare by studying a chapter from this website and completing small coding challenges. In class, we will discuss the reading and challenges and complete hands-on activities in groups. After each meeting you will create a series of four "code sketches" exploring the week's themes, which we will review in the next class.

This sketching process is central to the approach of the class. There are NO long term projects in this class. No midterm project, no final project. Just sketching.

**The emphasis in this class will be on personal exploration, learning to learn, and skill building—not on outcomes.**

![This not That](figures/this_not_that.png){wide}

## Notes on Sketching

Each week you will create 4 "sketches" in code. These are small computer programs that generate form. Your goal for **each sketch** should be to explore a different aspect of the weekly theme. Ideally, you will spend **1 to 2 hours on a sketch**, resulting in an image or other artifact. One to two hours isn't enough time for a full project. You don't need to do any formal research or ideation. Your scope can be very small. Your progams don't even need to always work. Try something out, post your results, rest, repeat. This is an unusual homework format. You probably have some questions...

### Frequently Asked Questions

<style>
    .q {color: black; font-weight: 400; margin-top: 1em !important; margin-bottom: 0em !important;}
    .q + p {color: black; margin-top: .5em !important;}
</style>

Do I have to post something _every single day_? {q}

Not quite. In spirit this assignment format combines daily practice with flexibility. Each week you should post four sketches exploring the weekly theme in a variety of ways. Ideally you will complete each sketch on a different day, spacing them out over the week.

<!-- Normally I require 5 skeches each week. I'm reducing this to four because I'm going to be assigning a weekly advanced reading and coding challenge to fit the online class format.{callout} -->

What if I miss a few days? {q}

That is fine, you can post two in a row to catch up.

Can I spend 6 hours all in one day and do them all at once? Maybe I'll pull an all-nighter. {q}

Don't do that. It won't work as well; you won't learn as much. This process is about exploring different ideas. Spacing out your work gives you time to think and reflect. Creativity often comes in the space between actions.

How long should I spend on a sketch? {?}

Between 1 and 2 hours. Ideally 90 minutes.

What if I make something I like in 15 minutes? {q}

Post it! We want to see it. Then keep working, use the full time, and then add your final result to the post also.

What if I work for two hours and I'm not done or I don't really like what I've made? {q}

Post it! Then stop working. Part of the value of sketching is that you can stop. You can stop before you burn a lot of time stuck or frustrated. Just set it aside. Try something different tomorrow.

What if I'm _never_ able to finish? {q}

Then you are probably trying to make things that are too complex. Try to make something very simple, get a few working sketches under your belt, and then gradually increase the complexity of your ideas.

1 to 2 hours is too short. Can I work longer? {q}

No. Two hours should be a daily _maximum_.

If after two hours you feel excited about what you are doing, make an in-progress post, take a break, and build on it the next day.

If after two hours you feel frustrated, just post what you've got. Don't ever put more than 2 hours into a frustrating sketch. Just post what you've got and start fresh on something else the next day.

If you find you often need more than 90 minutes, you are probably trying to make things that are too complex.

Can I post a work in progress and keep working on it tomorrow? {q}

Yes, if you are having fun. But don't work on one thing the whole week. Sketch a variety of ideas each week.

I can't decide what to work on today. {q}

If you have more than one idea, just pick one at random. Don't change your mind, just run with it. You are only investing an hour or two and you can try another idea tomorrow.

If you have no ideas, review the class notes, look at the sketch site, do some Google image searches, and be open to _any_ idea that pops up. Just run with the first idea even if it seems bad.

I can't get whatever technology we are working on this week to work; my computer is broken; I missed class and I don't know whats going on; I'm just lost this week. What should I do? {q}

Sketch anyway. Post anyway. Focus on the themes rather than the technology. If the tech isn't working use something else. Most weeks you can make interesting sketches, related to the weekly themes, without even using a computer.

What about the challenges? Do they count as sketches? {q}

Yes, they do. Each week I'll include an individual and a pair challenge. Trying the challenges is _required_, succeeding is not. Each challenge counts towards your weekly sketches and follows the sketching guidelines: spend 1 to 2 hours, its okay if it doesn't work.

I'm tired of looking at the computer screen. Can I do a couple of posts with paper/paint/glue/wood/whatever? {q}

Absolutely. **I highly recommend that you do!** The more variety between your posts the better. As long as the work relates to the weekly topic, you can make it however you want. I strongly suggest making at least one sketch without a computer each week.

I'm a data vis major. I'm a game design major. I like making websites. I'm interested in dance. Can I make data visualizations/games/websites/dances in this class? {q}

Yes, absolutely! I encourage you to think about how each weekly theme relates to your own interests and practice. It is a great idea to make sketches that explore those relationships.

What about in-class work? Does that count? {q}

Some weeks we'll have time set aside in class to make something, some weeks we won't. If we do start something in class, you can finish it after class and post it as one of your sketches.

Bottom line, how much time do I have to spend on these sketches? {q}

Four sketches per week. 90 minutes per sketch.

Don't put more than 2 hours into a sketch. If your sketch takes that long it is too complex or too difficult for your current skill level. It is okay to stop at 2 hours even if your sketch is incomplete or broken. Post whatever you have. If you put in the time, you'll get full marks for the sketch.

Don't put in less than an hour. Sometimes, you'll make a really nice sketch pretty quickly. If that happens, post it! But keep exploring variations on your idea. If you often get done very quickly, you probably need to work on more challenging sketches.

Four sketches at 90 minutes each is 6 hours. The weekly chapter reading and coding challenges will take one to two hours. Expect to spend about 7 to 8 hours each week on homework for this class.

I'm still worried about this. {q}

That isn't a exactly a question, but it is a very common feeling, especially in the first couple of weeks. After the first too weeks, the structure of the class will feel familiar.

## Syllabus Notes

### Attend every class, arrive early, stay late.

Attend every class. This class moves fast. New content is introduced in every meeting. We will have individual or group activities in most if not all meetings. Try not to miss any. Per school policy, you are allowed two absences but you should avoid taking them if you can.

Arrive early. Use a few mintues before class to review the sketches of your fellow students, review the questions on the notion, and make sure your av is working. Get yourself mentally settled and ready for class.

Stay late. After class, take some time to summarize the week's key content in your sketchbook, make note of ideas you'd like to explore in your sketches.

**Arriving early and staying late is advise, not a formal requirement. You are busy and have things to do. But its good advice so adapt it to your schedule as you can.**

<!-- ### Be Prepared

Bring your computer + a Comp Form sketchbook + red pen + black pen + pencil + camera/phone to every class. -->

### Original Work

All the work you submit for this class should be your own. For the most part you should create all the code, images, and writing used in your sketches yourself. In some cases it might make sense to incorporate something you didn't make yourself but make it clear when you do so.

**If your work builds on or includes anyone else's work, make sure you cite it and give them credit!**

## Who I am

I am Justin Bakse. I am an associate professor of interaction design at Parsons. I am personally very interested in computational form and have used computational methods in a great deal of my work. You can see some of my work below or [on my website](http://justinbakse.com/).

{% slides %}
{% include ./justin_slides.yaml %}
{% endslides %}
