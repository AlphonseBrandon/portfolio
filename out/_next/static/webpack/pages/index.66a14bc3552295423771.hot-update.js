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
  title: 'The Six Data Analytics Phases',
  description: "Keep in mind, these are different from the data life cycle, which describes the changes data goes through over its lifetime. Let’s walk through the steps to see how they can help you solve problems you might face on the job: Ask, prepare, process, analyze, share, and act.",
  image: '/images/data-analytics-cycle.jpeg',
  tags: ['Data analytics', 'Technical writing'],
  source: 'https://www.linkedin.com/pulse/six-data-analysis-phases-alphonse-brandon/',
  visit: '',
  id: 0
}, {
  title: 'Python Functions: A Beginners Guide',
  description: "Here are simple rules to define a function in Python: Any input parameters or arguments should be placed within these parentheses. You can also define parameters inside these parentheses, The first statement of a function can be an optional statement — the documentation string of the function or docstring. ",
  image: '/images/functions.jpeg',
  tags: ['Python', 'Clean Code', 'Technical Writting'],
  source: 'https://medium.com/@alphonse.brand/python-functions-a-beginners-guide-d6c88ef36f42',
  visit: '',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsicHJvamVjdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWdzIiwic291cmNlIiwidmlzaXQiLCJpZCIsIlRpbWVMaW5lRGF0YSIsInllYXIiLCJ0ZXh0IiwiYXJ0aWNsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxRQUFRLEdBQUcsQ0FDdEI7QUFDRUMsT0FBSyxFQUFFLDZCQURUO0FBRUVDLGFBQVcsRUFBRSwwV0FGZjtBQUdJQyxPQUFLLEVBQUUsMENBSFg7QUFJSUMsTUFBSSxFQUFFLENBQUMsUUFBRCxFQUFXLFNBQVgsRUFBc0IsT0FBdEIsRUFBK0IsS0FBL0IsQ0FKVjtBQUtFQyxRQUFNLEVBQUUsRUFMVjtBQU1FQyxPQUFLLEVBQUUsMERBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0FEc0IsRUFVdEI7QUFDRU4sT0FBSyxFQUFFLDBDQURUO0FBRUVDLGFBQVcsRUFBQyxzUUFGZDtBQUdFQyxPQUFLLEVBQUUsdUNBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsUUFBRCxFQUFXLGtCQUFYLEVBQStCLEtBQS9CLENBSlI7QUFLRUMsUUFBTSxFQUFFLEVBTFY7QUFNRUMsT0FBSyxFQUFFLCtFQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBVnNCLEVBbUJ0QjtBQUNFTixPQUFLLEVBQUUsV0FEVDtBQUVFQyxhQUFXLEVBQUUsMFZBRmY7QUFHSUMsT0FBSyxFQUFFLDhCQUhYO0FBSUlDLE1BQUksRUFBRSxDQUFDLFFBQUQsRUFBVyxPQUFYLEVBQW9CLGFBQXBCLEVBQW1DLFNBQW5DLENBSlY7QUFLRUMsUUFBTSxFQUFFLEVBTFY7QUFNRUMsT0FBSyxFQUFFLDhDQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBbkJzQixFQTRCdEI7QUFDRU4sT0FBSyxFQUFFLGFBRFQ7QUFFRUMsYUFBVyxFQUFFLG1UQUZmO0FBR0VDLE9BQUssRUFBRSwrQkFIVDtBQUlFQyxNQUFJLEVBQUUsQ0FBQyxpQkFBRCxFQUFvQixhQUFwQixFQUFtQyxpQkFBbkMsRUFBc0QsZUFBdEQsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsRUFMVjtBQU1FQyxPQUFLLEVBQUUsZ0RBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0E1QnNCLENBQWpCO0FBdUNBLElBQU1DLFlBQVksR0FBRyxDQUMxQjtBQUFFQyxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FEMEIsRUFFMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBRjBCLEVBRzFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUgwQixFQUkxQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FKMEIsRUFLMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBTDBCLENBQXJCO0FBU0EsSUFBTUMsUUFBUSxHQUFHLENBQ3RCO0FBQ0VWLE9BQUssRUFBRSwrQkFEVDtBQUVFQyxhQUFXLEVBQUUsa1JBRmY7QUFHSUMsT0FBSyxFQUFFLG1DQUhYO0FBSUlDLE1BQUksRUFBRSxDQUFDLGdCQUFELEVBQW1CLG1CQUFuQixDQUpWO0FBS0VDLFFBQU0sRUFBRSwyRUFMVjtBQU1FQyxPQUFLLEVBQUUsRUFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQURzQixFQVV0QjtBQUNFTixPQUFLLEVBQUUscUNBRFQ7QUFFRUMsYUFBVyxFQUFDLHNUQUZkO0FBR0VDLE9BQUssRUFBRSx3QkFIVDtBQUlFQyxNQUFJLEVBQUUsQ0FBQyxRQUFELEVBQVcsWUFBWCxFQUF5QixvQkFBekIsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsb0ZBTFY7QUFNRUMsT0FBSyxFQUFFLEVBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0FWc0IsQ0FBakIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjZhMTRiYzM1NTIyOTU0MjM3NzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogJ01vdmllIFJlY29tbWVuZGF0aW9uIEVuZ2luZScsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJUaGluayBvZiBOZXRmbGl4LCBZb3VUdWJlLiBIb3cgZG8gdGhleSBrbm93IHlvdSB3b3VsZCBlbmpveSB3YXRjaGluZyB2aWRlbyBCIGFmdGVyIHdhdGNoaW5nIHZpZGVvIEEgPyBPaCB5ZXMhIHlvdSBndWVzdCBpdCByaWdodCwgdGhyb3VnaCBhIHJlY29tbWVuZGF0aW9uIGFsZ29yaXRobS4gVGhlIGtleSBjb21wb25lbnQgYmVoaW5kIHRoaXMgY29udGVudCBiYXNlZCBmaWx0ZXJpbmcgdGVjaG5pcXVlIGlzIHRoZSB1c2Ugb2YgY29zaW5lIHNpbWlsYXJpdHkgd2hpY2ggaXMgIHRoZSBtZWFzdXJlIG9mIHRoZSBzaW1pbGFyaXR5IGJldHdlZW4gdHdvIHZlY3RvcnMgaW4gYSB2ZWN0b3JzIG9mIGFuIGlubmVyIHByb2R1Y3Qgc3BhY2VcIixcclxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzL3JlY29tbWVuZGF0aW9uLWVuZ2luZS5kcmF3aW8ucG5nJyxcclxuICAgICAgdGFnczogWydQeXRob24nLCAnSnVweXRlcicsICdNYXRocycsICdHaXQnXSxcclxuICAgIHNvdXJjZTogJycsXHJcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9BbHBob25zZUJyYW5kb24vcmVjb21tZW5kYXRpb24tZW5naW5lJyxcclxuICAgIGlkOiAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdTZW50aW1lbnQgQW5hbHlzaXMgQmFzZWQgb24gVXNlciBSZXZpZXdzJyxcclxuICAgIGRlc2NyaXB0aW9uOlwiSW4gdGhpcyBwcm9qZWN0LCBJIHVzZSBOTFAgdG8gY2xhc3NpZnkgdXNlciBjb21tZW50cyBvbiBtb3ZpZXMgdGhleSBoYXZlIHdhdGNoIGJ5IHNjcmFwcGluZyB0aGUgY29tbWVudHMgZnJvbSBUTURCIHdlYnNpdGUgYW5kIHBhc3NpbmcgaXQgdG8gbXkgbW9kZWwgd2hpY2ggY2xhc3NpZmllcyB0aGUgY29tbWVudCBhcyBlaXRoZXIgYSAnR29vZCcgb3IgJ0JhZCcgY29tbWVudCBhZnRlciBhbmFseXNpbmcgdGhlIHNlbnRpbWVudCBpbiB0aGUgY29tbWVudC5cIixcclxuICAgIGltYWdlOiAnL2ltYWdlcy9zZW50aW1lbnQtYW5hbHlzaXMuZHJhd2lvLnBuZycsXHJcbiAgICB0YWdzOiBbJ1B5dGhvbicsICdNYWNoaW5lIExlYXJuaW5nJywgJ05MUCddLFxyXG4gICAgc291cmNlOiAnJyxcclxuICAgIHZpc2l0OiAnaHR0cHM6Ly9naXRodWIuY29tL0FscGhvbnNlQnJhbmRvbi9zZW50aW1lbnQtYW5hbHlzaXMtYmFzZWQtb24tdXNlcnMtY29tbWVudHMnLFxyXG4gICAgaWQ6IDEsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ01vdmllIEFQSScsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJBUElzIG1ha2UgYSBncmVhdCBkZWFsIGluIHRoZSBkYXRhc2NpZW5jZSBpbmR1c3RyaWVzIHRvZGF5LCBhbmQgYmVpbmcgYWJsZSB0byByZW5kZXIgbWFjaGluZSBsZWFybmluZyBtb2RlbHMgYXMgYSBtaWNyb3NlcnZpY2UgdGhyb3VnaCBSRVNURlVMIEFQSXMgaWQgbm8gZG91YnQgYW4gaW52YWx1YWJsZSBza2lsbHNldCB0byBoYXZlISBUaGlzIHByb2plY3QgaXMgYSBmdWxsIGltcGxlbWVudGF0aW9uIG9mIGEgZmxhc2sgUkVTVCB0aGF0IGFjY2VwdHMgdGhlIG1vdmllIHRpdGxlIG9mIGEgbW92aWUgYW5kIHJldHVybnMgaW4gSlNPTiBtb3ZpZSBwcm9wZXJ0aWVzIG9mIHRoZSBzZWFyY2hlZCBtb3ZpZVwiLFxyXG4gICAgICBpbWFnZTogJy9pbWFnZXMvbW92aWUtYXBpLmRyYXdpby5wbmcnLFxyXG4gICAgICB0YWdzOiBbJ1B5dGhvbicsICdGbGFzaycsICdSRVNURlVMIGFwaScsICdQb3N0bWFuJ10sXHJcbiAgICBzb3VyY2U6ICcnLFxyXG4gICAgdmlzaXQ6ICdodHRwczovL2dpdGh1Yi5jb20vQWxwaG9uc2VCcmFuZG9uL21vdmllLWFwaScsXHJcbiAgICBpZDogMixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnV2ViIFNjcmFwZXInLFxyXG4gICAgZGVzY3JpcHRpb246IFwiVGhlcmUgYXJlIHRvbnMgb2YgaW5mb3JtYXRpb24gb24gd2Vic2l0ZXMgdG9kYXksIGJlaW5nIGFibGUgdG8gc2NyYXAgb2ZmIGFueSBpbmZvcm1hdGlvbiBJIHdhbnQgZnJvbSBhbnkgd2Vic2l0ZSBoYXMgYmVlbiBhIGdhbWUgY2hhbmdlciBmb3IgbWUuIEF0IHRoZSBlbmQgb2YgdGhpcyBwcm9qZWN0LCBJIGJ1aWxkIGEgZGF0YXBpcGVsaW5lIHRoYXQgYXV0b21hdGljYWxseSBmZXRjaGVzIGFuZCBwcmVwcm9jZXNzIG1vdmllcyBmcm9tIGFueSBnaXZlbiB5ZWFyIGludG8gYSBzdWl0YWJsZSBmb3JtYXQgYW5kIHNhdmVzIHRvIGRpc2NcIixcclxuICAgIGltYWdlOiAnL2ltYWdlcy93ZWJzY3JhcGVyLmRyYXdpby5wbmcnLFxyXG4gICAgdGFnczogWydEYXRhIENvbGxlY3Rpb24nLCAnRGF0YSBtaW5pbmcnLCAnRGF0YSBlbmdpbmVlcmluJywgJ0RhdGEgcGlwZWxpbmUnXSxcclxuICAgIHNvdXJjZTogJycsXHJcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9BbHBob25zZUJyYW5kb24vd2ViLXNjcmFwZXInLFxyXG4gICAgaWQ6IDMsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBUaW1lTGluZURhdGEgPSBbXHJcbiAgeyB5ZWFyOiAyMDE4LCB0ZXh0OiAnU3RhcnRlZCBteSBqb3VybmV5JywgfSxcclxuICB7IHllYXI6IDIwMTksIHRleHQ6ICdBcHBvaW50ZWQgcHJvZ3JhbXMgY29vcmRpbmF0b3IgYXQgTmVydnRlaycsIH0sXHJcbiAgeyB5ZWFyOiAyMDIwLCB0ZXh0OiAnQmVjYW1lIEdvb2dsZSBEZXZlbG9wZXJzIFN0dWRlbnQgQ2x1YiBMZWFkJywgfSxcclxuICB7IHllYXI6IDIwMjEsIHRleHQ6ICdCZWNhbWUgRXhwbG9yZSBNTCBGYXNjaWxpdGF0b3IgZm9yIEdvb2dsZSBDcm93ZHNvdXJjZScsIH0sXHJcbiAgeyB5ZWFyOiAyMDIyLCB0ZXh0OiAnV29ya2VkIHdpdGggRGVsb2l0dGUnLCB9LFxyXG5dO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBhcnRpY2xlcyA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogJ1RoZSBTaXggRGF0YSBBbmFseXRpY3MgUGhhc2VzJyxcclxuICAgIGRlc2NyaXB0aW9uOiBcIktlZXAgaW4gbWluZCwgdGhlc2UgYXJlIGRpZmZlcmVudCBmcm9tIHRoZSBkYXRhIGxpZmUgY3ljbGUsIHdoaWNoIGRlc2NyaWJlcyB0aGUgY2hhbmdlcyBkYXRhIGdvZXMgdGhyb3VnaCBvdmVyIGl0cyBsaWZldGltZS4gTGV04oCZcyB3YWxrIHRocm91Z2ggdGhlIHN0ZXBzIHRvIHNlZSBob3cgdGhleSBjYW4gaGVscCB5b3Ugc29sdmUgcHJvYmxlbXMgeW91IG1pZ2h0IGZhY2Ugb24gdGhlIGpvYjogQXNrLCBwcmVwYXJlLCBwcm9jZXNzLCBhbmFseXplLCBzaGFyZSwgYW5kIGFjdC5cIixcclxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2RhdGEtYW5hbHl0aWNzLWN5Y2xlLmpwZWcnLFxyXG4gICAgICB0YWdzOiBbJ0RhdGEgYW5hbHl0aWNzJywgJ1RlY2huaWNhbCB3cml0aW5nJ10sXHJcbiAgICBzb3VyY2U6ICdodHRwczovL3d3dy5saW5rZWRpbi5jb20vcHVsc2Uvc2l4LWRhdGEtYW5hbHlzaXMtcGhhc2VzLWFscGhvbnNlLWJyYW5kb24vJyxcclxuICAgIHZpc2l0OiAnJyxcclxuICAgIGlkOiAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdQeXRob24gRnVuY3Rpb25zOiBBIEJlZ2lubmVycyBHdWlkZScsXHJcbiAgICBkZXNjcmlwdGlvbjpcIkhlcmUgYXJlIHNpbXBsZSBydWxlcyB0byBkZWZpbmUgYSBmdW5jdGlvbiBpbiBQeXRob246IEFueSBpbnB1dCBwYXJhbWV0ZXJzIG9yIGFyZ3VtZW50cyBzaG91bGQgYmUgcGxhY2VkIHdpdGhpbiB0aGVzZSBwYXJlbnRoZXNlcy4gWW91IGNhbiBhbHNvIGRlZmluZSBwYXJhbWV0ZXJzIGluc2lkZSB0aGVzZSBwYXJlbnRoZXNlcywgVGhlIGZpcnN0IHN0YXRlbWVudCBvZiBhIGZ1bmN0aW9uIGNhbiBiZSBhbiBvcHRpb25hbCBzdGF0ZW1lbnQg4oCUIHRoZSBkb2N1bWVudGF0aW9uIHN0cmluZyBvZiB0aGUgZnVuY3Rpb24gb3IgZG9jc3RyaW5nLiBcIixcclxuICAgIGltYWdlOiAnL2ltYWdlcy9mdW5jdGlvbnMuanBlZycsXHJcbiAgICB0YWdzOiBbJ1B5dGhvbicsICdDbGVhbiBDb2RlJywgJ1RlY2huaWNhbCBXcml0dGluZyddLFxyXG4gICAgc291cmNlOiAnaHR0cHM6Ly9tZWRpdW0uY29tL0BhbHBob25zZS5icmFuZC9weXRob24tZnVuY3Rpb25zLWEtYmVnaW5uZXJzLWd1aWRlLWQ2Yzg4ZWYzNmY0MicsXHJcbiAgICB2aXNpdDogJycsXHJcbiAgICBpZDogMSxcclxuICB9LFxyXG4gIFxyXG5dOyJdLCJzb3VyY2VSb290IjoiIn0=