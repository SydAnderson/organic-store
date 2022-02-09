# Organic store

# Playwright

Using init command​

The easiest way to get started with Playwright Test is to run the init command.
```bash
# Run from your project's root directory
npm init playwright
```
```bash
# Or create a new project
npm init playwright new-project
```
This will create a configuration file, optionally add examples, a GitHub Action workflow and a first test example.spec.ts. You can now jump directly to writing assertions section.

# Manually​
Add dependency and install browsers.

```bash
npm i -D @playwright/test
# install supported browsers
npx playwright install
```
## Execute Test



- Run all the tests
```bash
npx playwright test
```
- Run a single test file
```bash
npx playwright test tests/todo-page.spec.ts
```
- Run a set of test files
```bash
npx playwright test tests/todo-page/ tests/landing-page/
```

- Run files that have my-spec or my-spec-2 in the file name
```bash
npx playwright test my-spec my-spec-2
```
Run the test with the title
```bash
npx playwright test -g "add a todo item"
```
- Run tests in headed browsers
```bash
npx playwright test --headed
```

- Run tests in a particular configuration (project)
```bash
npx playwright test --project=firefox
```
- Disable parallelization
```bash
npx playwright test --workers=1
```
- Choose a reporter
```bash
npx playwright test --reporter=dot
```
Run in debug mode with Playwright Inspector
```bash
npx playwright test --debug
```
- Ask for help
```bash
npx playwright test --help
```
