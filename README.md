---
createdDate: 2021-11-29
timeRequired: 1 Hour
topics: instruction,workshop
---

# Workshop Example Template

## Getting Started

This template is designed to be used as a starting place for the creation of basic JavaScript workshops led by an instructor. Please read the steps below to ensure that your workshop follows the pattern that the instructional team has found to work and have used in prior events.

### New Workshop Setup Steps

To base your new workshop repository on this one, follow the steps below.

#### Copy this Workshop Repository

Run the following commands to copy the repository from Github to your local filesystem, without any of the Git history or references to this repository as an upstream.

```sh
# install degit if you do not have it
npm install -g degit

# create the directory to contain your workshop code
mkdir my-awesome-workshop
cd my-awesome-workshop

# copy repository as if git were performing a clone
degit github:BurlingtonCodeAcademy/workshop-example-template --mode=git
```

> Degit is a tool to download the source-code of a repository without the Git history, or repository references. [Degit Project Documentation](https://github.com/Rich-Harris/degit)

#### Write complete solution

_Rename_ the `main.js` file to a new filename that matches your workshop. If, for example, you are writing a workshop to cover timers, `main.js` would become `timers.js`.

_Write_ the completed version of the workshop to exist as teacher reference; this should be a 100% functional piece of software that the workshop will reproduce. Comment thoroughly and line-by-line to provide step-by-step scaffolding for students.

> Comments should be in every file you write, including CSS files and servers.

An example of this would be:

```js
//adding a click event listener to our stop time out button; the callback function is what occurs on click
stopTimeOutButton.addEventListener('click', () => {
  //disabling the stop button
  stopTimeOutButton.style.pointerEvents = 'none';
  //enabling the start button
  startTimeOutButton.style.pointerEvents = 'auto';
  //alerting the user that the time out has been stopped
  timeOutDisplay.textContent = 'I am no longer timing out!';
  //stop the time out with the start variable as its argument
  clearTimeout(timeOutTimer);
});
```

#### Add a Complete Branch

_After_ commiting the changes to your `main` branch, create a new branch called 'complete'. `Complete` is where the complete piece of software will live; this will serve as a reference for the workshop's facilitator.

_Back_ in `main`, remove the sections of code that represent the intent of the workshop. For example, if you are writing a workshop for DOM scripting, you can leave the CSS file complete. Generally speaking, imports, function names, and other infrastructure will remain.

> Leave all comments regardless of code's removal. This is a critical feature that provides step-by-step scaffolding for students as they code-along.

This is what the previous example would look like in `main` by comparison:

```js
//adding a click event listener to our stop time out button; the callback function is what occurs on click
stopTimeOutButton.addEventListener('click', () => {
  //disabling the stop button
  //enabling the start button
  //alerting the user that the time out has been stopped
  //stop the time out with the start variable as its argument
});
```

#### Remove the Getting Started Section

The [Getting Started](#getting-started) section is for instructors to know how to adapt this template to their own workshops, and is not meant for students to follow. Remove it from the copy of the workshop that you distribute to students.

#### Rewrite the Subsections

_Update_ the README.md file to include subsections specific to your workshop content. All the following sub-sections should be edited.

**These sections should be written with a student audience in mind.**

- [ ] Overview: a short explanation of the workshop
- [ ] Objective: what the student should achieve by the end
- [ ] Topics: a list of the high-level topics
- [ ] Prior Knowledge: any subjects the student is assumed to know
- [ ] Context: Broader concepts and technical knowledge for students to read and gain more insight into the workshop.

#### Edit the package.json

_Change_ the contents of the `package.json` to reflect:

- Yourself as the author
- The workshop name as the package name
- The Github repository as the `homepage`
- The Github repository as the `bugs` URL
- The Github repository as the `repository` URL
- The description to be accurate to you workshop
- The `main` file that is the primary file to run
- Any keywords as appropriate for the subject and content

#### Update the LICENSE file

_Add_ your name to the `LICENSE.md` file within the repository, keeping the Copyright information the same.

#### Create and Initialize a New Git Repository

```sh
git init
git add .
git commit -m "Initial commit"
```

#### Push the Repository to Github

_Create_ a new repository for your workshop under the `BurlingtonCodeAcademy` parent organization. You can use the `gh` command-line tool from Github to do this without leaving your terminal.

> The `gh` command-line tool can be used to create a new repository and push it to Github under the BurlingtonCodeAcademy organization. [Github CLI Installation](https://cli.github.com/manual/installation)

The format of the workshop should match the example below:

```
[OrganizationName]/[lower-case-workshop-template-name]
BurlingtonCodeAcademy/my-amazing-workshop
```

**Example command:**

```sh
# run from within the repository directory
gh auth login
gh repo create BurlingtonCodeAcademy/my-amazing-workshop
```

#### Change the Repository to be a Template

Navigate to your repository on the GitHub website. On the horizontal nav bar containing 'Code' and 'Issues', go all the way to the right and click on 'Settings'. Beneath the name of the repository, click the checkbox that says 'Template repository'.

This check is automatically saved, and with that, you can safely navigate away with your workshop completed!

## README Section

> NOTE: Update the following sections to be specific for your workshop

### Overview

A short description of your workshop, 1-2 paragraphs, that explains at a high level what the students will be expected to do and how.

**This is also where you write broad instructions for if the student was attempting to complete the workshop without instructor facilitation. The step-by-step instructions should exist in the file as the scaffolded comments.**

Example:

> "In this workshop you will learn how to create a function that accepts two or more arguments, and then combines them into a single message, which is finally printed as output to the console.
>
> To complete this, begin in `message.js` and complete the code according to the preexisting scaffolding."

### Objective

A description of what will be achieved by the end of the workshop.

Example:

> "Create a function that combines two or more parts of a person's name, and prints it to the console"

### Topics

A list of the concepts that this workshop will cover, in descending order of importance.

Example:

> - JavaScript
> - Functions
> - Arguments

### Context

Here is where you would cover the broader knowledge associated with the topics covered by the workshop. You could break down the syntax of specific methods, explain some under-the-hood functionality, and reiterate information necessary to success in the workshop. This should create a reference point for students if they felt they did not understand something during the workshop or are looking for more information that might provide a 'click' moment.

### Additional Resources

Link to any third-party resources that are related to the subject matter and would expand the students understanding beyond the scope of this workshop.

Make sure that your link has the following qualities:

- Topical: Keep the link focused on the workshop content.
- Enjoyable: Is this resource fun to learn from?
- Authoritative: Ensure that the author of the content is considered an authority on the subject.
- Reliable: Consider whether the link will still be valid in 5 years, how about 10 years?
- Open: Confirm that there is no paywall required to access the resource.
