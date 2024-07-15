"use strict";
const workCard = document.querySelector(".work-card");
const playCard = document.querySelector(".play-card");
const studyCard = document.querySelector(".study-card");
const exerciseCard = document.querySelector(".exercise-card");
const socialCard = document.querySelector(".social-card");
const selfCareCard = document.querySelector(".self-care-card");
const dailyLink = document.querySelector(".daily");
const weeklyLink = document.querySelector(".weekly");
const monthlyLink = document.querySelector(".monthly");
const JSON = "./data.json";

const showDailyStats = (card, activityReport) => {
  card.querySelector(
    ".current-duration"
  ).textContent = `${activityReport.daily.current}hrs`;
  card.querySelector(
    ".previous-duration"
  ).textContent = `Last Week- ${activityReport.daily.previous}hrs`;
};
const showWeeklyStats = (card, activityReport) => {
  card.querySelector(
    ".current-duration"
  ).textContent = `${activityReport.weekly.current}hrs`;
  card.querySelector(
    ".previous-duration"
  ).textContent = `Last Week- ${activityReport.weekly.previous}hrs`;
};
const showMonthlyStats = (card, activityReport) => {
  card.querySelector(
    ".current-duration"
  ).textContent = `${activityReport.monthly.current}hrs`;
  card.querySelector(
    ".previous-duration"
  ).textContent = `Last Week- ${activityReport.monthly.previous}hrs`;
};

document.addEventListener("DOMContentLoaded", () => {
  fetch(JSON)
    .then((res) => res.json())
    .then((reportData) => {
      const workReport = reportData[0].timeframes;
      const playReport = reportData[1].timeframes;
      const studyReport = reportData[2].timeframes;
      const exerciseReport = reportData[3].timeframes;
      const socialReport = reportData[4].timeframes;
      const selfCareReport = reportData[5].timeframes;
      dailyLink.addEventListener("click", () => {
        showDailyStats(workCard, workReport);
        showDailyStats(playCard, playReport);
        showDailyStats(studyCard, studyReport);
        showDailyStats(exerciseCard, exerciseReport);
        showDailyStats(socialCard, socialReport);
        showDailyStats(selfCareCard, selfCareReport);
      });
      weeklyLink.addEventListener("click", () => {
        showWeeklyStats(workCard, workReport);
        showWeeklyStats(playCard, playReport);
        showWeeklyStats(studyCard, studyReport);
        showWeeklyStats(exerciseCard, exerciseReport);
        showWeeklyStats(socialCard, socialReport);
        showWeeklyStats(selfCareCard, selfCareReport);
      });
      monthlyLink.addEventListener("click", () => {
        showMonthlyStats(workCard, workReport);
        showMonthlyStats(playCard, playReport);
        showMonthlyStats(studyCard, studyReport);
        showMonthlyStats(exerciseCard, exerciseReport);
        showMonthlyStats(socialCard, socialReport);
        showMonthlyStats(selfCareCard, selfCareReport);
      });
    });
});



