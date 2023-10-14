# React Jam

## How I have approached the problem
I have decided to choose the Material UI components library for fast prototyping and CSS in JS support.

The articles data fetches in the following way:
1. Fetch the top articles.
2. Get the 9 last articles from the list.
3. Fetch the data for each article in the parallel.
4. Return the resulted list.

Comment form uses the same data to allow the user select the article to comment.

All the components are covered with tests.

## Tech Stack

| Technology                  | Description                                                                         |
| --------------------------- | ----------------------------------------------------------------------------------- |
| React                       | The core components rendering library                                               |
| Material UI                 | The components library for fast and high quality prototyping with CSS in JS support |
| TanStack React Query        | The library for fetching, caching, synchronizing and updating server state          |
| ESlint, Prettier            | Standard code quality tools                                                         |
| Jest, React Testing Library | Standard React testing tools                                                        |

## The interactive features of the page

| Feature                                   | Description                                                                                                      |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Header Menu button (mobile)               | The user could click to show the pop-up with the navigation items                                                |
| Articles Catalog (loading state: slow 3G) | The user could see the loading skeletons that replaced with the article cards after the successful data fetching |
| Comment Form                              | The user could select the article, write the comment message and get the required result in the console          |
| Footer link                               | The user could navigate to the 3rd party service (People web site)  tools                                        |

## Cover note

### General description
The solution is a simple SPA created with React library. For the fast and high quality prototyping we have choose the most popular and reliable open source libraries.
The design is fully responsible.
Additionally, the code was covered with tests to have higher confidence.

### Features
**Header**:
- **User** visiting the page using the desktop device:
  - The **logo** and the required **navigation items** are displayed.
- **User** visiting the page using the mobile device:
  - The **menu button** is displayed.
  - **User** click on the **menu button** => the **popup** with navigation items is displayed.

**Articles Catalog**:
- **User** visiting the page:
  - While the articles **data is loading**, the **loading skeletons** are displayed.
  - After the **successful data loading**, the **articles cards** are displayed.
  
**Comment Form**:
- **User** visiting the page:
  - The **comment form** is displayed with the following components:
    - **articles select field** to allow the user choose the article.
    - **article comment field** to allow the user write a comment.
    - **submit button** to allow the user submit the form and get the result in the browser console.

