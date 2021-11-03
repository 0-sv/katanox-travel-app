# For Katanox

For the assignment I created this app per the discussed requirements. It's a basic create-react-app, please find the documentation below how to do basic operations like start and build. But you will probably want to use:

`npm start` 

I've inserted comments starting with `TD` to indicate "Technical Debt" as per the requirements.

## E2E tests

I decided to not spend too much time on it, but here's an idea of how I would approach it.

We could describe a "feature" in Gherkin and pull it through Cucumber (preprocessor) + the Cypress E2E framework. We could describe a test scenario as follows, e.g. if we want to verify the outcome when a user presses the button "Show statistics":

```yaml
Feature: Show statistics

  Scenario: User opens the travel app
    Given: User selects one or more hotel rows in the "Select" column 
    When: User clicks on "Show statistics"
    Then: User sees a list of the selected hotel names
```

## Addressing ambiguities in assessment

My retrospective would be now (2-11-2021):

- "Once the user selects a value from the filtered hotels, it should print it in the console." -- I only enabled the user to select the name once the filtered list is down to one. It's not very intuitive and user friendly like this, it should've been done for all columns or at least some css:hover, but I am a bit on a tight schedule this week with many assessments.
- "You can use bootstrap or any other framework for it’s grid system (not the js part though)" -- I think I misinterpreted this, since I used a React component called `rc-table`, while you in fact expected me to create a 2D grid for the main table.
- For task 2 I was figuring out how to maintain the state between components, and it seemed useful to add an extra prop. But for task 3, I maintained state with the `useState` hook. In hindsight it would've been nicer to keep the state both with useState as the extra prop is unnecessarily limiting, or with Redux.
- In an e-mail I asked whether I could dynamically print the list, but it was easier to place a button because the event logic is much simpler. I think this insight should come with experience, so I will pay attention next time.
