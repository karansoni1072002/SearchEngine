# HUSHH Search Engine
------
An ML and NLP integrated Search Engine which makes easier to do quick search and get a brief summary about your query.


## Getting Started

### Dependencies

### Tech Stack
* Frontend - ReactJS
* Backend - NodeJS + ExpressJS
* UI - Tailwind
* API - Google API
* Library - Playwright (Chromium), Hugging Face
* Model Used - facebook/bart-large-cnn 

## Application workflow

#### Search query
* A user enters the search quesry in the search bar in frontend
* This data is sent to backend server using `fetch` API by `POST` method

### Getting Search Results in backend
* The query entered by user is received in the backend
* Using Google API, the search results are requested from google for the query using Axios
* The search results received are saved
* The links of first 5 results are saved in a separate array for next processes

### Data Scraping
* The links of the first five results, that were saved in separate array are used here
* The links are passed through a scraping function
* This function then scrapes the text on the website
* This scraped data is used further in next process

### Summarization using NLP
* The scraped data generated from the links is used here
* The scraped data from each link is passed through the summarization function separately
* This generates a short summary of all the information on each webpage
* The individual summariees generated from each link is then concatenated in a single string
* This string is then again passed through the summarization function to generate a comprehensive summary
* This summary is then sent to frontend along with all the search results

### Installing

* Clone the repository
* Install dependencies using `npm install`
* Make `.env` file and add required variables

### Executing program

* Start backend server
```
nodemon
```
* Start frontend server
```
npm run dev
```
