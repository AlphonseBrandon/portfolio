self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": function() { return /* binding */ projects; },
/* harmony export */   "TimeLineData": function() { return /* binding */ TimeLineData; },
/* harmony export */   "articles": function() { return /* binding */ articles; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var projects = [{
  title: 'Movie Recommendation Engine',
  description: "Think of Netflix, YouTube. How do they know you would enjoy watching video B after watching video A ? Oh yes! you guest it right, through a recommendation algorithm. The key component behind this content based filtering technique is the use of cosine similarity which is  the measure of the similarity between two vectors in a vectors of an inner product space",
  image: '/images/recommendation-engine.drawio.png',
  tags: ['Python', 'Jupyter', 'Maths', 'Git'],
  source: '',
  visit: 'https://github.com/AlphonseBrandon/recommendation-engine',
  id: 0
}, {
  title: 'Sentiment Analysis Based on User Reviews',
  description: "In this project, I use NLP to classify user comments on movies they have watch by scrapping the comments from TMDB website and passing it to my model which classifies the comment as either a 'Good' or 'Bad' comment after analysing the sentiment in the comment.",
  image: '/images/sentiment-analysis.drawio.png',
  tags: ['Python', 'Machine Learning', 'NLP'],
  source: '',
  visit: 'https://github.com/AlphonseBrandon/sentiment-analysis-based-on-users-comments',
  id: 1
}, {
  title: 'Movie API',
  description: "APIs make a great deal in the datascience industries today, and being able to render machine learning models as a microservice through RESTFUL APIs id no doubt an invaluable skillset to have! This project is a full implementation of a flask REST that accepts the movie title of a movie and returns in JSON movie properties of the searched movie",
  image: '/images/movie-api.drawio.png',
  tags: ['Python', 'Flask', 'RESTFUL api', 'Postman'],
  source: '',
  visit: 'https://github.com/AlphonseBrandon/movie-api',
  id: 2
}, {
  title: 'Web Scraper',
  description: "There are tons of information on websites today, being able to scrap off any information I want from any website has been a game changer for me. At the end of this project, I build a datapipeline that automatically fetches and preprocess movies from any given year into a suitable format and saves to disc",
  image: '/images/webscraper.drawio.png',
  tags: ['Data Collection', 'Data mining', 'Data engineerin', 'Data pipeline'],
  source: '',
  visit: 'https://github.com/AlphonseBrandon/web-scraper',
  id: 3
}];
var TimeLineData = [{
  year: 2018,
  text: 'Started my journey'
}, {
  year: 2019,
  text: 'Appointed programs coordinator at Nervtek'
}, {
  year: 2020,
  text: 'Became Google Developers Student Club Lead'
}, {
  year: 2021,
  text: 'Became Explore ML Fascilitator for Google Crowdsource'
}, {
  year: 2022,
  text: 'Worked with Deloitte'
}];
var articles = [{
  title: 'MERN Memories',
  description: "Using React, Node.js, Express & MongoDB you'll learn how to build a Full Stack MERN Application - from start to finish. The App is called Memories and it is a simple social media app that allows users to post interesting events that happened in their lives.",
  image: '/images/1.png',
  tags: ['Mongo', 'Express', 'React', 'Node'],
  source: 'https://google.com',
  visit: 'https://google.com',
  id: 0
}, {
  title: 'E-Commerce',
  description: "While building it you're going to learn many advanced React & JavaScript topics, as well as how to use Stripe for card transactions. On top of that, at the end of the video, you will have this unique and complex webshop app that you will be able to add to your portfolio. And trust me, e-commerce applications are impressive.",
  image: '/images/2.png',
  tags: ['React', 'JavaScript'],
  source: 'https://google.com',
  visit: 'https://google.com',
  id: 1
}];

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsicHJvamVjdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWdzIiwic291cmNlIiwidmlzaXQiLCJpZCIsIlRpbWVMaW5lRGF0YSIsInllYXIiLCJ0ZXh0IiwiYXJ0aWNsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxRQUFRLEdBQUcsQ0FDdEI7QUFDRUMsT0FBSyxFQUFFLDZCQURUO0FBRUVDLGFBQVcsRUFBRSwwV0FGZjtBQUdJQyxPQUFLLEVBQUUsMENBSFg7QUFJSUMsTUFBSSxFQUFFLENBQUMsUUFBRCxFQUFXLFNBQVgsRUFBc0IsT0FBdEIsRUFBK0IsS0FBL0IsQ0FKVjtBQUtFQyxRQUFNLEVBQUUsRUFMVjtBQU1FQyxPQUFLLEVBQUUsMERBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0FEc0IsRUFVdEI7QUFDRU4sT0FBSyxFQUFFLDBDQURUO0FBRUVDLGFBQVcsRUFBQyxzUUFGZDtBQUdFQyxPQUFLLEVBQUUsdUNBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsUUFBRCxFQUFXLGtCQUFYLEVBQStCLEtBQS9CLENBSlI7QUFLRUMsUUFBTSxFQUFFLEVBTFY7QUFNRUMsT0FBSyxFQUFFLCtFQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBVnNCLEVBbUJ0QjtBQUNFTixPQUFLLEVBQUUsV0FEVDtBQUVFQyxhQUFXLEVBQUUsMFZBRmY7QUFHSUMsT0FBSyxFQUFFLDhCQUhYO0FBSUlDLE1BQUksRUFBRSxDQUFDLFFBQUQsRUFBVyxPQUFYLEVBQW9CLGFBQXBCLEVBQW1DLFNBQW5DLENBSlY7QUFLRUMsUUFBTSxFQUFFLEVBTFY7QUFNRUMsT0FBSyxFQUFFLDhDQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBbkJzQixFQTRCdEI7QUFDRU4sT0FBSyxFQUFFLGFBRFQ7QUFFRUMsYUFBVyxFQUFFLG1UQUZmO0FBR0VDLE9BQUssRUFBRSwrQkFIVDtBQUlFQyxNQUFJLEVBQUUsQ0FBQyxpQkFBRCxFQUFvQixhQUFwQixFQUFtQyxpQkFBbkMsRUFBc0QsZUFBdEQsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsRUFMVjtBQU1FQyxPQUFLLEVBQUUsZ0RBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0E1QnNCLENBQWpCO0FBdUNBLElBQU1DLFlBQVksR0FBRyxDQUMxQjtBQUFFQyxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FEMEIsRUFFMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBRjBCLEVBRzFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUgwQixFQUkxQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FKMEIsRUFLMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBTDBCLENBQXJCO0FBU0EsSUFBTUMsUUFBUSxHQUFHLENBQ3RCO0FBQ0VWLE9BQUssRUFBRSxlQURUO0FBRUVDLGFBQVcsRUFBRSxtUUFGZjtBQUdJQyxPQUFLLEVBQUUsZUFIWDtBQUlJQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsU0FBVixFQUFxQixPQUFyQixFQUE4QixNQUE5QixDQUpWO0FBS0VDLFFBQU0sRUFBRSxvQkFMVjtBQU1FQyxPQUFLLEVBQUUsb0JBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0FEc0IsRUFVdEI7QUFDRU4sT0FBSyxFQUFFLFlBRFQ7QUFFRUMsYUFBVyxFQUFDLHVVQUZkO0FBR0VDLE9BQUssRUFBRSxlQUhUO0FBSUVDLE1BQUksRUFBRSxDQUFDLE9BQUQsRUFBVSxZQUFWLENBSlI7QUFLRUMsUUFBTSxFQUFFLG9CQUxWO0FBTUVDLE9BQUssRUFBRSxvQkFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQVZzQixDQUFqQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hNzU2MWI2NGEwMjhmYjY5MjcyMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiAnTW92aWUgUmVjb21tZW5kYXRpb24gRW5naW5lJyxcclxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaW5rIG9mIE5ldGZsaXgsIFlvdVR1YmUuIEhvdyBkbyB0aGV5IGtub3cgeW91IHdvdWxkIGVuam95IHdhdGNoaW5nIHZpZGVvIEIgYWZ0ZXIgd2F0Y2hpbmcgdmlkZW8gQSA/IE9oIHllcyEgeW91IGd1ZXN0IGl0IHJpZ2h0LCB0aHJvdWdoIGEgcmVjb21tZW5kYXRpb24gYWxnb3JpdGhtLiBUaGUga2V5IGNvbXBvbmVudCBiZWhpbmQgdGhpcyBjb250ZW50IGJhc2VkIGZpbHRlcmluZyB0ZWNobmlxdWUgaXMgdGhlIHVzZSBvZiBjb3NpbmUgc2ltaWxhcml0eSB3aGljaCBpcyAgdGhlIG1lYXN1cmUgb2YgdGhlIHNpbWlsYXJpdHkgYmV0d2VlbiB0d28gdmVjdG9ycyBpbiBhIHZlY3RvcnMgb2YgYW4gaW5uZXIgcHJvZHVjdCBzcGFjZVwiLFxyXG4gICAgICBpbWFnZTogJy9pbWFnZXMvcmVjb21tZW5kYXRpb24tZW5naW5lLmRyYXdpby5wbmcnLFxyXG4gICAgICB0YWdzOiBbJ1B5dGhvbicsICdKdXB5dGVyJywgJ01hdGhzJywgJ0dpdCddLFxyXG4gICAgc291cmNlOiAnJyxcclxuICAgIHZpc2l0OiAnaHR0cHM6Ly9naXRodWIuY29tL0FscGhvbnNlQnJhbmRvbi9yZWNvbW1lbmRhdGlvbi1lbmdpbmUnLFxyXG4gICAgaWQ6IDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ1NlbnRpbWVudCBBbmFseXNpcyBCYXNlZCBvbiBVc2VyIFJldmlld3MnLFxyXG4gICAgZGVzY3JpcHRpb246XCJJbiB0aGlzIHByb2plY3QsIEkgdXNlIE5MUCB0byBjbGFzc2lmeSB1c2VyIGNvbW1lbnRzIG9uIG1vdmllcyB0aGV5IGhhdmUgd2F0Y2ggYnkgc2NyYXBwaW5nIHRoZSBjb21tZW50cyBmcm9tIFRNREIgd2Vic2l0ZSBhbmQgcGFzc2luZyBpdCB0byBteSBtb2RlbCB3aGljaCBjbGFzc2lmaWVzIHRoZSBjb21tZW50IGFzIGVpdGhlciBhICdHb29kJyBvciAnQmFkJyBjb21tZW50IGFmdGVyIGFuYWx5c2luZyB0aGUgc2VudGltZW50IGluIHRoZSBjb21tZW50LlwiLFxyXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL3NlbnRpbWVudC1hbmFseXNpcy5kcmF3aW8ucG5nJyxcclxuICAgIHRhZ3M6IFsnUHl0aG9uJywgJ01hY2hpbmUgTGVhcm5pbmcnLCAnTkxQJ10sXHJcbiAgICBzb3VyY2U6ICcnLFxyXG4gICAgdmlzaXQ6ICdodHRwczovL2dpdGh1Yi5jb20vQWxwaG9uc2VCcmFuZG9uL3NlbnRpbWVudC1hbmFseXNpcy1iYXNlZC1vbi11c2Vycy1jb21tZW50cycsXHJcbiAgICBpZDogMSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnTW92aWUgQVBJJyxcclxuICAgIGRlc2NyaXB0aW9uOiBcIkFQSXMgbWFrZSBhIGdyZWF0IGRlYWwgaW4gdGhlIGRhdGFzY2llbmNlIGluZHVzdHJpZXMgdG9kYXksIGFuZCBiZWluZyBhYmxlIHRvIHJlbmRlciBtYWNoaW5lIGxlYXJuaW5nIG1vZGVscyBhcyBhIG1pY3Jvc2VydmljZSB0aHJvdWdoIFJFU1RGVUwgQVBJcyBpZCBubyBkb3VidCBhbiBpbnZhbHVhYmxlIHNraWxsc2V0IHRvIGhhdmUhIFRoaXMgcHJvamVjdCBpcyBhIGZ1bGwgaW1wbGVtZW50YXRpb24gb2YgYSBmbGFzayBSRVNUIHRoYXQgYWNjZXB0cyB0aGUgbW92aWUgdGl0bGUgb2YgYSBtb3ZpZSBhbmQgcmV0dXJucyBpbiBKU09OIG1vdmllIHByb3BlcnRpZXMgb2YgdGhlIHNlYXJjaGVkIG1vdmllXCIsXHJcbiAgICAgIGltYWdlOiAnL2ltYWdlcy9tb3ZpZS1hcGkuZHJhd2lvLnBuZycsXHJcbiAgICAgIHRhZ3M6IFsnUHl0aG9uJywgJ0ZsYXNrJywgJ1JFU1RGVUwgYXBpJywgJ1Bvc3RtYW4nXSxcclxuICAgIHNvdXJjZTogJycsXHJcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9BbHBob25zZUJyYW5kb24vbW92aWUtYXBpJyxcclxuICAgIGlkOiAyLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdXZWIgU2NyYXBlcicsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJUaGVyZSBhcmUgdG9ucyBvZiBpbmZvcm1hdGlvbiBvbiB3ZWJzaXRlcyB0b2RheSwgYmVpbmcgYWJsZSB0byBzY3JhcCBvZmYgYW55IGluZm9ybWF0aW9uIEkgd2FudCBmcm9tIGFueSB3ZWJzaXRlIGhhcyBiZWVuIGEgZ2FtZSBjaGFuZ2VyIGZvciBtZS4gQXQgdGhlIGVuZCBvZiB0aGlzIHByb2plY3QsIEkgYnVpbGQgYSBkYXRhcGlwZWxpbmUgdGhhdCBhdXRvbWF0aWNhbGx5IGZldGNoZXMgYW5kIHByZXByb2Nlc3MgbW92aWVzIGZyb20gYW55IGdpdmVuIHllYXIgaW50byBhIHN1aXRhYmxlIGZvcm1hdCBhbmQgc2F2ZXMgdG8gZGlzY1wiLFxyXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL3dlYnNjcmFwZXIuZHJhd2lvLnBuZycsXHJcbiAgICB0YWdzOiBbJ0RhdGEgQ29sbGVjdGlvbicsICdEYXRhIG1pbmluZycsICdEYXRhIGVuZ2luZWVyaW4nLCAnRGF0YSBwaXBlbGluZSddLFxyXG4gICAgc291cmNlOiAnJyxcclxuICAgIHZpc2l0OiAnaHR0cHM6Ly9naXRodWIuY29tL0FscGhvbnNlQnJhbmRvbi93ZWItc2NyYXBlcicsXHJcbiAgICBpZDogMyxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRpbWVMaW5lRGF0YSA9IFtcclxuICB7IHllYXI6IDIwMTgsIHRleHQ6ICdTdGFydGVkIG15IGpvdXJuZXknLCB9LFxyXG4gIHsgeWVhcjogMjAxOSwgdGV4dDogJ0FwcG9pbnRlZCBwcm9ncmFtcyBjb29yZGluYXRvciBhdCBOZXJ2dGVrJywgfSxcclxuICB7IHllYXI6IDIwMjAsIHRleHQ6ICdCZWNhbWUgR29vZ2xlIERldmVsb3BlcnMgU3R1ZGVudCBDbHViIExlYWQnLCB9LFxyXG4gIHsgeWVhcjogMjAyMSwgdGV4dDogJ0JlY2FtZSBFeHBsb3JlIE1MIEZhc2NpbGl0YXRvciBmb3IgR29vZ2xlIENyb3dkc291cmNlJywgfSxcclxuICB7IHllYXI6IDIwMjIsIHRleHQ6ICdXb3JrZWQgd2l0aCBEZWxvaXR0ZScsIH0sXHJcbl07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGFydGljbGVzID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiAnTUVSTiBNZW1vcmllcycsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJVc2luZyBSZWFjdCwgTm9kZS5qcywgRXhwcmVzcyAmIE1vbmdvREIgeW91J2xsIGxlYXJuIGhvdyB0byBidWlsZCBhIEZ1bGwgU3RhY2sgTUVSTiBBcHBsaWNhdGlvbiAtIGZyb20gc3RhcnQgdG8gZmluaXNoLiBUaGUgQXBwIGlzIGNhbGxlZCBNZW1vcmllcyBhbmQgaXQgaXMgYSBzaW1wbGUgc29jaWFsIG1lZGlhIGFwcCB0aGF0IGFsbG93cyB1c2VycyB0byBwb3N0IGludGVyZXN0aW5nIGV2ZW50cyB0aGF0IGhhcHBlbmVkIGluIHRoZWlyIGxpdmVzLlwiLFxyXG4gICAgICBpbWFnZTogJy9pbWFnZXMvMS5wbmcnLFxyXG4gICAgICB0YWdzOiBbJ01vbmdvJywgJ0V4cHJlc3MnLCAnUmVhY3QnLCAnTm9kZSddLFxyXG4gICAgc291cmNlOiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcclxuICAgIHZpc2l0OiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcclxuICAgIGlkOiAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdFLUNvbW1lcmNlJyxcclxuICAgIGRlc2NyaXB0aW9uOlwiV2hpbGUgYnVpbGRpbmcgaXQgeW91J3JlIGdvaW5nIHRvIGxlYXJuIG1hbnkgYWR2YW5jZWQgUmVhY3QgJiBKYXZhU2NyaXB0IHRvcGljcywgYXMgd2VsbCBhcyBob3cgdG8gdXNlIFN0cmlwZSBmb3IgY2FyZCB0cmFuc2FjdGlvbnMuIE9uIHRvcCBvZiB0aGF0LCBhdCB0aGUgZW5kIG9mIHRoZSB2aWRlbywgeW91IHdpbGwgaGF2ZSB0aGlzIHVuaXF1ZSBhbmQgY29tcGxleCB3ZWJzaG9wIGFwcCB0aGF0IHlvdSB3aWxsIGJlIGFibGUgdG8gYWRkIHRvIHlvdXIgcG9ydGZvbGlvLiBBbmQgdHJ1c3QgbWUsIGUtY29tbWVyY2UgYXBwbGljYXRpb25zIGFyZSBpbXByZXNzaXZlLlwiLFxyXG4gICAgaW1hZ2U6ICcvaW1hZ2VzLzIucG5nJyxcclxuICAgIHRhZ3M6IFsnUmVhY3QnLCAnSmF2YVNjcmlwdCddLFxyXG4gICAgc291cmNlOiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcclxuICAgIHZpc2l0OiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcclxuICAgIGlkOiAxLFxyXG4gIH0sXHJcbiAgXHJcbl07Il0sInNvdXJjZVJvb3QiOiIifQ==