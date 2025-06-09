## Step 1 — June 7, 2025
- Connected local repo to private Github repo ('Origin').
- Generated my first PAT with Contents: Read & Write, pasted it at push prompt.
- First push was successful; branch 'main' now tracks 'origin/main'.
- Feeling: relief and clarity on remote.

## Step 2 — June 9, 2025
- Created Badge.jsx, committed & pushed.  
- Feels solid." >> JOURNAL.md

## Step 3 — [June 9, 2025]
- What I did: initialized Storybook in the project, configured it for React/webpack5, wrote `badge/Badge.stories.jsx`, updated `Badge.jsx` to accept `size`, and loaded the stories successfully.
- Can I do it blind? (Try running `npm run storybook`—does it spin up without errors and show your badge?)
- Can I explain it? (Describe how Storybook’s `stories` array controls which folders it scans and why we updated it to `../badge/**/*.stories.@(js|jsx|mjs|ts|tsx)`.)