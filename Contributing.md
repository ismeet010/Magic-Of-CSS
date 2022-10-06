# Contributing Guidelines

This documentation contains a set of guidelines to help you during the contribution process. 

# Rules for Contribution
1. Issues will be assigned on **First Come First Service Basis**.
2. You can create a new `issue`.
3. Maintainer will add `hactoberfest` lable, if the issue created by you is relevant.
4. Don't `Spam` the `PR` otherwise `spam` label can be added to your `PR`.
5. After creating a `PR` link the issue also.


# Submitting Contributions👩‍💻👨‍💻
Below you will find the process and workflow used to review and merge your changes.

## Step 1 : Find an issue
- Take a look at the Existing issues or create your **own** issues!
- Wait for the issue to be assigned to you after which you can start working on it.

## Step 2 : Fork the Project
- Fork this Repository. This will create a Local Copy of this Repository on your Github Profile. Keep a reference to the original project in `upstream` remote.
```
$ git clone https://github.com/<your-username>/Magic-Of-CSS
$ cd Magic-Of-CSS
$ git remote add upstream https://github.com/ismeet010/Magic-Of-CSS
```

- If you have already forked the project, update your copy before working.
```
$ git remote update
$ git checkout <branch-name>
$ git rebase upstream/<branch-name>
```
## Step 3 : Branch
```
# To create a new branch with name branch_name and switch to that branch 
$ git checkout -b <branch_name>
```
## Step 4 : Work on the issue assigned
- **Create a new folder** and work on the issue assigned to you
- After you've made changes or made your contribution to the project add changes to the branch you've just created by:
```
# To add all new files to branch branch_name
$ git add .
```
## Step 5 : Commit

- To commit give a descriptive message for the convenience of reveiwer by:
```
# This message get associated with all files you have changed
$ git commit -m "message"
```

## Step 6 : Work Remotely
- Now you are ready to your work to the remote repository.
- When your work is ready and complies with the project conventions, upload your changes to your fork:

```
# To push your work to your remote repository
$ git push -u origin <branch_name>
```

## Step 7 : Pull Request
- Go to your repository in browser. Click on `contribute` and click `open pull request`.
- Write an appropriate comment and click `create pull request`.
- Your Pull Request has been submitted and will be reviewed by the owner and merged.🥳
  
  ---
  ### Few things to keep in mind while creating a pull request (PR):
- Add relevant title that clearly specifies what you have done in your commit.
- Mention the **issue number in your PR.**
- Give a brief description about the changes.

## Need more help?🤔
You can refer to the following articles on basics of Git and Github in case you are stuck:
- [Forking a Repo](https://help.github.com/en/github/getting-started-with-github/fork-a-repo)
- [Cloning a Repo](https://help.github.com/en/desktop/contributing-to-projects/creating-an-issue-or-pull-request)
- [How to create a Pull Request](https://opensource.com/article/19/7/create-pull-request-github)
- [Getting started with Git and GitHub](https://towardsdatascience.com/getting-started-with-git-and-github-6fcd0f2d4ac6)
- [Learn GitHub from Scratch](https://lab.github.com/githubtraining/introduction-to-github)

## Tip from us😇
**No contribution is too small💪.** Any contributions you make are **greatly appreciated.**
