# Project Instructions

## Working Directory

**Always make all changes inside this folder:**

```
F:\IEEE project\Important\Sinduja Code\Buffer\magic-glasses-minu-v3
```

**Never modify files inside this folder:**

```
F:\IEEE project\Important\Sinduja Code\magic-glasses-minu-v3
```

The `magic-glasses-minu-v3` folder at the top level is the original source and must remain untouched.
All development work, edits, and new files go into the `Buffer\magic-glasses-minu-v3` copy only.

## Git Repositories

| Local Folder (under `Buffer\`) | Remote Name | GitHub URL | Purpose |
|-------------------------------|-------------|------------|---------|
| `magic-glasses-minu-v3` | `origin` | https://github.com/pradeep1001/Minu-Buffer.git | **Active working copy — always push here** |
| `magic-glasses-minu-v3` | `original` | https://github.com/pradeep1001/magic-glasses-minu-v3.git | Read-only reference to original |
| `magic-glasses-minu-v3-fix` | `origin` | https://github.com/pradeep1001/magic-glasses-minu-v3.git | Temporary fix clone (used to recover files from original) |

### Rules
- **Always push to `Minu-Buffer`** (`origin` on `magic-glasses-minu-v3`)
- **Never push from `magic-glasses-minu-v3`** using the `original` remote
- `magic-glasses-minu-v3-fix` points to the **original repo** — only use it for recovering old file versions, not for active development
- Vercel deploys from `pradeep1001/magic-glasses-minu-v3` (the original repo), not from Minu-Buffer
