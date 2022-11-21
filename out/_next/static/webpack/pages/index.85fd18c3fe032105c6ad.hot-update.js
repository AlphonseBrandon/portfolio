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
  title: 'Unichat',
  description: "This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application",
  image: '/images/4.jpg',
  tags: ['React', 'ChatEngine', 'Firebase'],
  source: 'https://google.com',
  visit: 'https://google.com',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsicHJvamVjdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWdzIiwic291cmNlIiwidmlzaXQiLCJpZCIsIlRpbWVMaW5lRGF0YSIsInllYXIiLCJ0ZXh0IiwiYXJ0aWNsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxRQUFRLEdBQUcsQ0FDdEI7QUFDRUMsT0FBSyxFQUFFLDZCQURUO0FBRUVDLGFBQVcsRUFBRSwwV0FGZjtBQUdJQyxPQUFLLEVBQUUsMENBSFg7QUFJSUMsTUFBSSxFQUFFLENBQUMsUUFBRCxFQUFXLFNBQVgsRUFBc0IsT0FBdEIsRUFBK0IsS0FBL0IsQ0FKVjtBQUtFQyxRQUFNLEVBQUUsRUFMVjtBQU1FQyxPQUFLLEVBQUUsMERBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0FEc0IsRUFVdEI7QUFDRU4sT0FBSyxFQUFFLDBDQURUO0FBRUVDLGFBQVcsRUFBQyxzUUFGZDtBQUdFQyxPQUFLLEVBQUUsdUNBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsUUFBRCxFQUFXLGtCQUFYLEVBQStCLEtBQS9CLENBSlI7QUFLRUMsUUFBTSxFQUFFLEVBTFY7QUFNRUMsT0FBSyxFQUFFLCtFQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBVnNCLEVBbUJ0QjtBQUNFTixPQUFLLEVBQUUsV0FEVDtBQUVFQyxhQUFXLEVBQUUsMFZBRmY7QUFHSUMsT0FBSyxFQUFFLDhCQUhYO0FBSUlDLE1BQUksRUFBRSxDQUFDLFFBQUQsRUFBVyxPQUFYLEVBQW9CLGFBQXBCLEVBQW1DLFNBQW5DLENBSlY7QUFLRUMsUUFBTSxFQUFFLEVBTFY7QUFNRUMsT0FBSyxFQUFFLDhDQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBbkJzQixFQTRCdEI7QUFDRU4sT0FBSyxFQUFFLFNBRFQ7QUFFRUMsYUFBVyxFQUFFLGdJQUZmO0FBR0VDLE9BQUssRUFBRSxlQUhUO0FBSUVDLE1BQUksRUFBRSxDQUFDLE9BQUQsRUFBVSxZQUFWLEVBQXdCLFVBQXhCLENBSlI7QUFLRUMsUUFBTSxFQUFFLG9CQUxWO0FBTUVDLE9BQUssRUFBRSxvQkFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQTVCc0IsQ0FBakI7QUF1Q0EsSUFBTUMsWUFBWSxHQUFHLENBQzFCO0FBQUVDLE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUQwQixFQUUxQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FGMEIsRUFHMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBSDBCLEVBSTFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUowQixFQUsxQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FMMEIsQ0FBckI7QUFTQSxJQUFNQyxRQUFRLEdBQUcsQ0FDdEI7QUFDRVYsT0FBSyxFQUFFLGVBRFQ7QUFFRUMsYUFBVyxFQUFFLG1RQUZmO0FBR0lDLE9BQUssRUFBRSxlQUhYO0FBSUlDLE1BQUksRUFBRSxDQUFDLE9BQUQsRUFBVSxTQUFWLEVBQXFCLE9BQXJCLEVBQThCLE1BQTlCLENBSlY7QUFLRUMsUUFBTSxFQUFFLG9CQUxWO0FBTUVDLE9BQUssRUFBRSxvQkFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQURzQixFQVV0QjtBQUNFTixPQUFLLEVBQUUsWUFEVDtBQUVFQyxhQUFXLEVBQUMsdVVBRmQ7QUFHRUMsT0FBSyxFQUFFLGVBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLFlBQVYsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsb0JBTFY7QUFNRUMsT0FBSyxFQUFFLG9CQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBVnNCLENBQWpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljg1ZmQxOGMzZmUwMzIxMDVjNmFkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcHJvamVjdHMgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6ICdNb3ZpZSBSZWNvbW1lbmRhdGlvbiBFbmdpbmUnLFxyXG4gICAgZGVzY3JpcHRpb246IFwiVGhpbmsgb2YgTmV0ZmxpeCwgWW91VHViZS4gSG93IGRvIHRoZXkga25vdyB5b3Ugd291bGQgZW5qb3kgd2F0Y2hpbmcgdmlkZW8gQiBhZnRlciB3YXRjaGluZyB2aWRlbyBBID8gT2ggeWVzISB5b3UgZ3Vlc3QgaXQgcmlnaHQsIHRocm91Z2ggYSByZWNvbW1lbmRhdGlvbiBhbGdvcml0aG0uIFRoZSBrZXkgY29tcG9uZW50IGJlaGluZCB0aGlzIGNvbnRlbnQgYmFzZWQgZmlsdGVyaW5nIHRlY2huaXF1ZSBpcyB0aGUgdXNlIG9mIGNvc2luZSBzaW1pbGFyaXR5IHdoaWNoIGlzICB0aGUgbWVhc3VyZSBvZiB0aGUgc2ltaWxhcml0eSBiZXR3ZWVuIHR3byB2ZWN0b3JzIGluIGEgdmVjdG9ycyBvZiBhbiBpbm5lciBwcm9kdWN0IHNwYWNlXCIsXHJcbiAgICAgIGltYWdlOiAnL2ltYWdlcy9yZWNvbW1lbmRhdGlvbi1lbmdpbmUuZHJhd2lvLnBuZycsXHJcbiAgICAgIHRhZ3M6IFsnUHl0aG9uJywgJ0p1cHl0ZXInLCAnTWF0aHMnLCAnR2l0J10sXHJcbiAgICBzb3VyY2U6ICcnLFxyXG4gICAgdmlzaXQ6ICdodHRwczovL2dpdGh1Yi5jb20vQWxwaG9uc2VCcmFuZG9uL3JlY29tbWVuZGF0aW9uLWVuZ2luZScsXHJcbiAgICBpZDogMCxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnU2VudGltZW50IEFuYWx5c2lzIEJhc2VkIG9uIFVzZXIgUmV2aWV3cycsXHJcbiAgICBkZXNjcmlwdGlvbjpcIkluIHRoaXMgcHJvamVjdCwgSSB1c2UgTkxQIHRvIGNsYXNzaWZ5IHVzZXIgY29tbWVudHMgb24gbW92aWVzIHRoZXkgaGF2ZSB3YXRjaCBieSBzY3JhcHBpbmcgdGhlIGNvbW1lbnRzIGZyb20gVE1EQiB3ZWJzaXRlIGFuZCBwYXNzaW5nIGl0IHRvIG15IG1vZGVsIHdoaWNoIGNsYXNzaWZpZXMgdGhlIGNvbW1lbnQgYXMgZWl0aGVyIGEgJ0dvb2QnIG9yICdCYWQnIGNvbW1lbnQgYWZ0ZXIgYW5hbHlzaW5nIHRoZSBzZW50aW1lbnQgaW4gdGhlIGNvbW1lbnQuXCIsXHJcbiAgICBpbWFnZTogJy9pbWFnZXMvc2VudGltZW50LWFuYWx5c2lzLmRyYXdpby5wbmcnLFxyXG4gICAgdGFnczogWydQeXRob24nLCAnTWFjaGluZSBMZWFybmluZycsICdOTFAnXSxcclxuICAgIHNvdXJjZTogJycsXHJcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9BbHBob25zZUJyYW5kb24vc2VudGltZW50LWFuYWx5c2lzLWJhc2VkLW9uLXVzZXJzLWNvbW1lbnRzJyxcclxuICAgIGlkOiAxLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdNb3ZpZSBBUEknLFxyXG4gICAgZGVzY3JpcHRpb246IFwiQVBJcyBtYWtlIGEgZ3JlYXQgZGVhbCBpbiB0aGUgZGF0YXNjaWVuY2UgaW5kdXN0cmllcyB0b2RheSwgYW5kIGJlaW5nIGFibGUgdG8gcmVuZGVyIG1hY2hpbmUgbGVhcm5pbmcgbW9kZWxzIGFzIGEgbWljcm9zZXJ2aWNlIHRocm91Z2ggUkVTVEZVTCBBUElzIGlkIG5vIGRvdWJ0IGFuIGludmFsdWFibGUgc2tpbGxzZXQgdG8gaGF2ZSEgVGhpcyBwcm9qZWN0IGlzIGEgZnVsbCBpbXBsZW1lbnRhdGlvbiBvZiBhIGZsYXNrIFJFU1QgdGhhdCBhY2NlcHRzIHRoZSBtb3ZpZSB0aXRsZSBvZiBhIG1vdmllIGFuZCByZXR1cm5zIGluIEpTT04gbW92aWUgcHJvcGVydGllcyBvZiB0aGUgc2VhcmNoZWQgbW92aWVcIixcclxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzL21vdmllLWFwaS5kcmF3aW8ucG5nJyxcclxuICAgICAgdGFnczogWydQeXRob24nLCAnRmxhc2snLCAnUkVTVEZVTCBhcGknLCAnUG9zdG1hbiddLFxyXG4gICAgc291cmNlOiAnJyxcclxuICAgIHZpc2l0OiAnaHR0cHM6Ly9naXRodWIuY29tL0FscGhvbnNlQnJhbmRvbi9tb3ZpZS1hcGknLFxyXG4gICAgaWQ6IDIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ1VuaWNoYXQnLFxyXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIGNvZGUgcmVwb3NpdG9yeSBmb3IgdGhlIGNvcnJlc3BvbmRpbmcgdmlkZW8gdHV0b3JpYWwuIEluIHRoaXMgdmlkZW8sIHdlIHdpbGwgY3JlYXRlIGEgZnVsbCBSZWFsdGltZSBDaGF0IEFwcGxpY2F0aW9uXCIsXHJcbiAgICBpbWFnZTogJy9pbWFnZXMvNC5qcGcnLFxyXG4gICAgdGFnczogWydSZWFjdCcsICdDaGF0RW5naW5lJywgJ0ZpcmViYXNlJ10sXHJcbiAgICBzb3VyY2U6ICdodHRwczovL2dvb2dsZS5jb20nLFxyXG4gICAgdmlzaXQ6ICdodHRwczovL2dvb2dsZS5jb20nLFxyXG4gICAgaWQ6IDMsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBUaW1lTGluZURhdGEgPSBbXHJcbiAgeyB5ZWFyOiAyMDE4LCB0ZXh0OiAnU3RhcnRlZCBteSBqb3VybmV5JywgfSxcclxuICB7IHllYXI6IDIwMTksIHRleHQ6ICdBcHBvaW50ZWQgcHJvZ3JhbXMgY29vcmRpbmF0b3IgYXQgTmVydnRlaycsIH0sXHJcbiAgeyB5ZWFyOiAyMDIwLCB0ZXh0OiAnQmVjYW1lIEdvb2dsZSBEZXZlbG9wZXJzIFN0dWRlbnQgQ2x1YiBMZWFkJywgfSxcclxuICB7IHllYXI6IDIwMjEsIHRleHQ6ICdCZWNhbWUgRXhwbG9yZSBNTCBGYXNjaWxpdGF0b3IgZm9yIEdvb2dsZSBDcm93ZHNvdXJjZScsIH0sXHJcbiAgeyB5ZWFyOiAyMDIyLCB0ZXh0OiAnV29ya2VkIHdpdGggRGVsb2l0dGUnLCB9LFxyXG5dO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBhcnRpY2xlcyA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogJ01FUk4gTWVtb3JpZXMnLFxyXG4gICAgZGVzY3JpcHRpb246IFwiVXNpbmcgUmVhY3QsIE5vZGUuanMsIEV4cHJlc3MgJiBNb25nb0RCIHlvdSdsbCBsZWFybiBob3cgdG8gYnVpbGQgYSBGdWxsIFN0YWNrIE1FUk4gQXBwbGljYXRpb24gLSBmcm9tIHN0YXJ0IHRvIGZpbmlzaC4gVGhlIEFwcCBpcyBjYWxsZWQgTWVtb3JpZXMgYW5kIGl0IGlzIGEgc2ltcGxlIHNvY2lhbCBtZWRpYSBhcHAgdGhhdCBhbGxvd3MgdXNlcnMgdG8gcG9zdCBpbnRlcmVzdGluZyBldmVudHMgdGhhdCBoYXBwZW5lZCBpbiB0aGVpciBsaXZlcy5cIixcclxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzLzEucG5nJyxcclxuICAgICAgdGFnczogWydNb25nbycsICdFeHByZXNzJywgJ1JlYWN0JywgJ05vZGUnXSxcclxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXHJcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXHJcbiAgICBpZDogMCxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnRS1Db21tZXJjZScsXHJcbiAgICBkZXNjcmlwdGlvbjpcIldoaWxlIGJ1aWxkaW5nIGl0IHlvdSdyZSBnb2luZyB0byBsZWFybiBtYW55IGFkdmFuY2VkIFJlYWN0ICYgSmF2YVNjcmlwdCB0b3BpY3MsIGFzIHdlbGwgYXMgaG93IHRvIHVzZSBTdHJpcGUgZm9yIGNhcmQgdHJhbnNhY3Rpb25zLiBPbiB0b3Agb2YgdGhhdCwgYXQgdGhlIGVuZCBvZiB0aGUgdmlkZW8sIHlvdSB3aWxsIGhhdmUgdGhpcyB1bmlxdWUgYW5kIGNvbXBsZXggd2Vic2hvcCBhcHAgdGhhdCB5b3Ugd2lsbCBiZSBhYmxlIHRvIGFkZCB0byB5b3VyIHBvcnRmb2xpby4gQW5kIHRydXN0IG1lLCBlLWNvbW1lcmNlIGFwcGxpY2F0aW9ucyBhcmUgaW1wcmVzc2l2ZS5cIixcclxuICAgIGltYWdlOiAnL2ltYWdlcy8yLnBuZycsXHJcbiAgICB0YWdzOiBbJ1JlYWN0JywgJ0phdmFTY3JpcHQnXSxcclxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXHJcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXHJcbiAgICBpZDogMSxcclxuICB9LFxyXG4gIFxyXG5dOyJdLCJzb3VyY2VSb290IjoiIn0=