# ReviveToday Contributing Guidelines

Thank you for wishing to participate in the ReviveToday site guidances! We have a set of guidelines to follow to ensure your contributions get accepted and to help avoid wasting effort.

The site is constructed in **[Jekyll](https://jekyllrb.com/)**, so a familiarity with [Markdown](https://www.markdownguide.org/tools/jekyll/) & [Kramdown](https://kramdown.gettalong.org/) will help to understand how the repository content works, but not required.

## Contribution Process

### Guides / Content

*Please locally test & spell-check your content changes first.*

1. Fork the repository to your own account.
2. Edit the files you wish to adjust the content of, or create a new one.
3. Submit a PR to the ReviveToday repository.
   * Feel free to leave it to the default destination merge branch, currently set to main but is due to change.
4. Await and react to contributor feedback. **There is no time frame for responses, please be patient**.
5. Done!

For content tone, we generally follow the [Monzo Tone of Voice guidelines](https://monzo.com/tone-of-voice/) to keep the content active. We aren't strict on enforcing this, but it keeps articles modern and engaging.

**Submissions changing styling will be up to owner/reviewer discretion.** In terms of styling, there is currently an unwritten standard in place, primarily to ensure unity amongst the content types across the site. The design can generally be followed from visiting the site, but if you are unsure try replicating the content from a matching type from a different system (e.g. if you're adding a "what to buy" for PS2, check "what to buy" for PSP to see the style). Deviations are to be expected, but check with the repository contributors first (if it's simple, make a PR with the changes in and the reviewers will check it out - **don't commit to a full redesign, it'll likely be denied**).

### Bigger Changes (overhauls)

**Do not submit a PR containing significant structural changes**. Instead, please submit an issue stating your views to engage a community discussion on the subject. If the community and owners generally agree, a new branch will be formed to initiate the restructuring.

### Other Aspects

Please be aware that the styling aspects are managed by the [ReviveToday Modoki theme repository](https://github.com/ReviveToday/Modoki-Lite). PRs that add JavaScript or Jekyll over-rides will generally not be accepted unless absolutely necessary.

## Local Testing

The preferable way to test this locally is to use the provided `docker-compose.yml`. With **[Docker](https://www.docker.com/)** installed, run `docker-compose up` to get a Jekyll instance running on http://localhost:4000 that will dynamically rebuild the site to your content adjustments.
