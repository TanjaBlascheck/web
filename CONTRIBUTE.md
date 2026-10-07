# Contribute

### Instructions for directly contributing to the website's content

#### Small changes

* Log in to [github.com](https://github.com) and navigate back to this website.
* Click the `Issues` option in the top menu bar and then click `New Issue` in the top right.
* Briefly describe the changes you would like to have made and click `Create`.
* Once the changes have been applied, the issue will be closed, and you will be notified via the email address associated with your **github.com** account.

#### Larger changes

* Create a [**Fork**](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) of the repository.
* Edit the content of the respective files, for example, directly in the [**browser**](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files).
* [**Commit**](https://docs.github.com/en/desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project-in-github-desktop) your changes and add a descriptive commit message.
* Create a [**Pull Request**](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).

**Note:** If you use the small link at the bottom of each page ("suggest a fix"), the GitHub UX will basically force you to do it this way:
- you get a green button for making a fork if necessary
- another green button for committing the changes
- and a last green button for creating the pull request
We can then see the changes and approve and integrate them into the live page. The build process takes about a minute. 

## Conventions

#### Deadlines
Please add deadlines to the [database](src/data/deadlines.json) and use the Deadlineitem component. It will automatically translate timezones for the reader (and give a countdown as tooltip). Example:
```
import DeadlineItem from '../../components/DeadlineItem.astro';
<DeadlineItem category="STARs" type="Abstract Submission" /><br/>
```
This is important because all deadlines will be compiled into a [table](src/submissions/all-deadlines.mdx) automatically.

#### External links
External link should open in a new window. This is automatically done for links in Markdown files by `rehype-external-links`.

#### Obfuscate email addresses
Email addresses should always be obfuscated to minimize misuse:
```HTML
<span><a href="mailto:XXX@XXX.de" data-obfuscation><span>XXX[at]XXX.de</span></a><noscript>JavaScript required to show obfuscated email address.</noscript></span>
```
