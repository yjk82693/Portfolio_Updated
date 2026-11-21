# What can and cannot be published

This repository is public-only. Do not mix it with company or school repositories. When in doubt, leave it out.

## Allowed (with conditions)
| Item | Condition |
|---|---|
| Hackathon results (FactoryPulse, HackPrinceton) | **Do not copy code.** Link to the original (already public) repo + a 3-line summary of my own role. No teammate real names in the role summary. Check that the event rules allow it. |
| Publishable parts of balance-forge | Company code: only parts that passed technical review and the owner confirmed. |
| Past-semester coursework | Only where the instructor or course policy allows publishing. |
| Small tools, writing, study notes | My own work. Third-party code only after checking its license, with attribution. |

## Not allowed
- Company game platform code and internal design (the codename is in the local blocklist)
- Unreleased company world/story material (setting bible, design documents)
- AI agent configuration files, permission maps, internal memos
- Personal information beyond the public name: contact details, address, student ID, accounts, local paths (`/Users/...` etc.)
- Student materials (student work or grades seen as an LA)
- **Assignments from courses currently being taken** (academic integrity)
- Original source from company repositories
- Secrets (API keys, tokens, passwords, `.env`), files over 5 MB

## Before the first push
1. Run `bash tools/install-hooks.sh` to enable the pre-commit guard. Fill `tools/blocklist.txt` with blocked words.
2. The technical lead (Tony) and the chief of staff (Yooj) check the file list against this document.
3. The owner creates the GitHub repository and pushes.
