## Branches

The `development` branch is the next release - create branches for new features and non-urgent bug fixes from here.

The `master` branch is the current release - create branches for urgent bug fixes from here.

All complete branches should be pull requested back into `development` or `master`.

A single-issue branch (1 bug fix or 1 feature) should be merged into development via `Squash & Merge`.

`development` should be the only multi-issue branch as it consists of all features and bug fixes due to be released - this must NOT be merged with `Squash & Merge` - all commits should be kept.

## Commits

A commit that fixes a bug or adds an entire feature should follow [these guidelines](https://conventionalcommits.org/).

If you're unsure look at existing commits or fire a message to a contributor.

It's worth noting that if you're working on a branch you don't have to care about this - the name of the pull request must follow the guidelines instead.

## Releasing

`development` should be merged into `master` via pull request.

On `master` run: `npm run release` to build the project, build the demo, generate the changelog, and bump the version.

If unsure of the output run `npm run release -- --dry-run` for a preview.

If something goes wrong revert the automatic commit produced by `release` with: `git reset HEAD~1`

If all is well at this stage run `npm run publish` to push the new changelog, version, tag and publish to npm.

After release make sure to merge `master` back into `development` - no pull request required.
