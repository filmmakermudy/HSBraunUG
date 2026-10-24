# Website workflow

The user has authorized automatic publication of completed website changes to
this repository and its GitHub Pages site. This authorization applies to future
tasks in this project unless the user explicitly asks to keep changes local,
prepare a draft, or avoid publication.

After completing a requested change:

1. Run checks appropriate to the change and review the diff.
2. Stage only files belonging to the requested change. Do not include credentials,
   private files, temporary artifacts, or unrelated user work.
3. Commit with a descriptive message and push to `origin/main` without asking
   again for routine commit, push, or publication approval. GitHub Pages is
   configured to publish from `main` at the repository root.
4. Use a normal, non-force push. If the current branch has a different name,
   `git push origin HEAD:main` is appropriate after confirming the history is
   compatible. Fetch and preserve remote changes; never overwrite remote history.
5. Report whether the push succeeded. Do not claim that a deployment is live
   unless verified. If authentication, network access, conflicts, or failing checks
   block publication, explain the blocker rather than claiming completion.

Publish once the requested change is complete and checked, not after each partial
file write. This file guides coding agents; it is not a background file watcher
and does not automatically publish manual edits made outside an agent task.
