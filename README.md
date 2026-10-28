# Playwright Automation Framework
**UI and API testing practice with TypeScript and Playwright.**

A QA portfolio project demonstrating page objects, fixtures, assertions, browser workflows, and HTTP request tests.

## Technology
TypeScript · Playwright Test · Chromium · Node.js · npm

## Coverage and structure
| Path | Purpose |
| --- | --- |
| `Pages/` | Login and product page objects |
| `tests/login.spec.ts`, `tests/multiplelogin.spec.ts` | Login examples |
| `tests/cart.spec.ts`, `tests/cartvalidation.spec.ts` | Cart workflows |
| `tests/api.spec.ts` | GET and POST API examples |
| `tests/Fixtures/` | Custom fixture example |
| `tests/hooks.spec.ts` | Test lifecycle examples |
| `playwright.config.ts` | Browser, retries, and artifact configuration |

## Getting started
Use a Node.js version supported by the locked Playwright dependencies.

```bash
git clone https://github.com/mohnish141-byte/playwright-automation-framework.git
cd playwright-automation-framework
npm ci
npx playwright install chromium
npx playwright test
```

On Linux, browser system libraries may also be needed: `npx playwright install --with-deps chromium`.

## Useful commands
| Task | Command |
| --- | --- |
| List discovered tests | `npx playwright test --list` |
| Run login examples | `npx playwright test tests/login.spec.ts` |
| Run API examples | `npx playwright test tests/api.spec.ts` |
| Show browser | `npx playwright test --headed` |
| Debug a test | `npx playwright test --debug` |
| Open HTML report | `npx playwright show-report` |

## Configuration and artifacts
The configured browser project is Chromium. Tests run in parallel, with two retries and one worker when `CI` is set. HTML reporting is enabled; screenshots are captured on failure, videos retained on failure, and traces captured on the first retry.

## Current scope
This is a learning and portfolio project. `tests/dataDrivenLogin.spec.ts` and `tests/test- data/users.json` are currently empty placeholders. API examples call an external service; access requirements and service changes can affect execution. Test targets and assertions should be reviewed before running. No current pass rate is claimed.

## Author
[Mohnish Saxena](https://github.com/mohnish141-byte) · QA Automation
