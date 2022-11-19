export const projects = [
  {
    title: 'Movie Recommendation Engine',
    description: "Think of Netflix, YouTube. How do they know you would enjoy watching video B after watching video A ? Oh yes! you guest it right, through a recommendation algorithm. The key component behind this content based filtering technique is the use of cosine similarity which is  the measure of the similarity between two vectors in a vectors of an inner product space",
      image: '/images/recommendation-engine.drawio.png',
      tags: ['Python', 'Jupyter', 'Maths', 'Git'],
    source: '',
    visit: 'https://github.com/AlphonseBrandon/recommendation-engine',
    id: 0,
  },
  {
    title: 'Sentiment Analysis Based on User Reviews',
    description:"In this project, I use NLP to classify user comments on movies they have watch by scrapping the comments from TMDB website and passing it to my model which classifies the comment as either a 'Good' or 'Bad' comment after analysing the sentiment in the comment.",
    image: '/images/sentiment-analysis.drawio.png',
    tags: ['Python', 'Machine Learning', 'NLP'],
    source: '',
    visit: 'https://github.com/AlphonseBrandon/sentiment-analysis-based-on-users-comments',
    id: 1,
  },
  {
    title: 'Movie API',
    description: "APIs make a great deal in the datascience industries today, and being able to render machine learning models as a microservice through RESTFUL APIs id no doubt an invaluable skillset to have! This project is a full implementation of a flask REST that accepts the movie title of a movie and returns in JSON movie properties of the searched movie",
      image: '/images/movie-api.drawio.png',
      tags: ['Python', 'Flask', 'RESTFUL api', 'Postman'],
    source: '',
    visit: 'https://github.com/AlphonseBrandon/movie-api',
    id: 2,
  },
  {
    title: 'Web Scraper',
    description: "There are tons of information on websites today, being able to scrap off any information I want from any website has been a game changer for me. At the end of this project, I build a datapipeline that automatically fetches and preprocess movies from any given year into a suitable format and saves to disc",
    image: '/images/webscraper.drawio.png',
    tags: ['Data Collection', 'Data mining', 'Data engineerin', 'Data pipeline'],
    source: '',
    visit: 'https://github.com/AlphonseBrandon/web-scraper',
    id: 3,
  },
];

export const TimeLineData = [
  { year: 2018, text: 'Started my journey', },
  { year: 2019, text: 'Appointed programs coordinator at Nervtek', },
  { year: 2020, text: 'Became Google Developers Student Club Lead', },
  { year: 2021, text: 'Became Explore ML Fascilitator for Google Crowdsource', },
  { year: 2022, text: 'Worked with Deloitte', },
];


export const articles = [
  {
    title: 'The Six Data Analytics Phases',
    description: "Keep in mind, these are different from the data life cycle, which describes the changes data goes through over its lifetime. Let’s walk through the steps to see how they can help you solve problems you might face on the job: Ask, prepare, process, analyze, share, and act.",
      image: '/images/data-analytics-cycle.jpeg',
      tags: ['Data analytics', 'Technical writing'],
    source: 'https://www.linkedin.com/pulse/six-data-analysis-phases-alphonse-brandon/',
    visit: '',
    id: 0,
  },
  {
    title: 'Python Functions: A Beginners Guide',
    description:"Here are simple rules to define a function in Python: Any input parameters or arguments should be placed within these parentheses. You can also define parameters inside these parentheses, The first statement of a function can be an optional statement — the documentation string of the function or docstring. ",
    image: '/images/functions.jpeg',
    tags: ['Python', 'Clean Code', 'Technical Writting'],
    source: 'https://medium.com/@alphonse.brand/python-functions-a-beginners-guide-d6c88ef36f42',
    visit: '',
    id: 1,
  },
  
];