
JavaScript Essentials 1: Module 4 Challenge

## How to Run

1. Save the code as `festival.js`.
2. Open a terminal in the same folder.
3. Run:

```bash
node festival.js
```

To test the control menu, change `let option = 2;` to any value from 1 to 7 and run again.

## Submission Questions and Answers

### 1. Why did you use && for festival entry?

Entry requires two conditions to both be true: the attendee is 18 or older and has a valid ticket. The `&&` operator is only true when both conditions are true. If I used `||`, an under-18 with a ticket, or an adult without a ticket, would be let in.

### 2. Where did you use else if and why?

- **Challenge 2:** to separate the two denial reasons (UNDER 18 and NO VALID TICKET).
- **Challenge 7:** for the voucher tiers. I check from the highest amount to the lowest, so someone who spent R1200 gets the R200 voucher instead of matching a lower tier first.
- **Challenges 8 and 11:** to count VIP and General ticket holders, and to show the 5-minute and 2-minute messages.

### 3. Why is switch appropriate for the control menu?

The menu compares one variable (`option`) against a fixed set of values (1 to 7). A `switch` statement is cleaner and easier to read than seven `if / else if` blocks, and the `default` case handles invalid options.

### 4. What is the difference between break in your search and continue in the security check?

`break` exits the loop completely. In the search, once the attendee is found there is no reason to keep looking, so `break` stops the loop.

`continue` skips only the current attendee and moves to the next one. In the security fast lane, Jason has no valid ticket and is skipped, but everyone after him still needs to be checked. Using `break` there would stop the loop at Jason and skip the rest.

### 5. How did you determine the biggest spender?

I start with `let biggestSpender = attendees[0];` and loop through every attendee. If someone's `spend` is greater than the current `biggestSpender.spend`, they replace it. When the loop ends, `biggestSpender` holds the person with the highest spend. This still works if the data changes, for example if Neo is added with R1500.

### 6. How did you prevent the venue from exceeding capacity?

I keep a counter called `peopleInside` and increase it for every successful entry. After each entry I check whether `peopleInside === capacity`. When it is true, I display VENUE FULL and use `break` to stop processing the queue, so nobody else is admitted.

### 7. What would happen if another 20 attendees were added to the array?

All the loops read from the `attendees` array, so the new people are processed automatically. The statistics and the average (which uses `attendees.length`) update, the biggest spender is recalculated, and the venue still stops admitting people once `capacity` is reached.

### 8. Which part of the project required the most problem-solving?

Challenge 10 required the most problem-solving. I had to combine the entry check (18 or older and a valid ticket), the `peopleInside` counter and `break` in the right order, so that the venue stops exactly when it reaches capacity and people who are denied entry are not counted.
