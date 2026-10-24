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
   again for routine commit, push, or publication approval. The user explicitly
   confirmed automatic public publication on 2026-10-24. GitHub Pages publishes
   every push from `main` at the repository root using its native workflow.
4. Use a normal, non-force push. If the current branch has a different name,
   `git push origin HEAD:main` is appropriate after confirming the history is
   compatible. Fetch and preserve remote changes; never overwrite remote history.
5. After pushing, wait for the `Verify public website` workflow for that commit
   to complete. `.github/workflows/pages.yml` checks that the public HTML, CSS,
   JavaScript, and image files match the pushed commit, allowing for deployment
   and cache delays. Report the public URL after successful verification.
   A successful push alone does not prove publication. If authentication, network
   access, conflicts, or failing checks block publication or verification,
   explain the blocker rather than claiming completion.

Publish once the requested change is complete and checked, not after each partial
file write. This file guides coding agents; it is not a background file watcher
and does not automatically publish manual edits made outside an agent task.
