const SEGMENT_COUNT = 24;
const GOAL_AMOUNT = 5_000_000;
const ACHIEVEMENT_RATE = 143;
const gauge = document.getElementById("gauge");
for (let index = 0; index < SEGMENT_COUNT; index += 1) {
  const segment = document.createElement("span");
  gauge.appendChild(segment);
}
const segments = [...gauge.children];
const percentEl = document.getElementById("percent");
const amountEl = document.getElementById("amount");
const backersEl = document.getElementById("backers");
const avgEl = document.getElementById("avg");
const reduceFundingMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;
function formatNumber(number) {
  return Math.round(number).toLocaleString("ko-KR");
}
const fundingData = { rate: 0, backers: 0 };

function renderFunding(rate, backers) {
  percentEl.textContent = Math.round(rate) + "%";
  const currentAmount = (GOAL_AMOUNT * rate) / 100;
  amountEl.textContent = formatNumber(currentAmount);
  backersEl.textContent = formatNumber(backers);
  avgEl.textContent = backers > 1 ? formatNumber(currentAmount / backers) : "0";

  const limitedRate = Math.min(rate, 100);
  const activeCount = Math.round((limitedRate / 100) * SEGMENT_COUNT);
  segments.forEach((segment, index) => {
    segment.classList.toggle("on", index < activeCount);
  });

  const isOverGoal = rate > 100;
  gauge.classList.toggle("is-over", isOverGoal);
  percentEl.classList.toggle("is-over", isOverGoal);
  gauge.setAttribute("aria-valuenow", String(Math.round(limitedRate)));
  gauge.setAttribute("aria-valuetext", `목표의 ${Math.round(rate)}% 달성`);
}

if (typeof gsap !== "undefined") {
  gsap.to(fundingData, {
  rate: ACHIEVEMENT_RATE,
  backers: 231,
  duration: reduceFundingMotion ? 0 : 2,
  ease: "power2.out",
  scrollTrigger: { trigger: "#funding", start: "top 72%" },
  onUpdate() {
    renderFunding(fundingData.rate, fundingData.backers);
  },
  });
  gsap.to(".gauge span", {
  scaleY: 1,
  duration: reduceFundingMotion ? 0 : 0.5,
  ease: "power2.out",
  stagger: { each: 0.02, from: "start" },
  scrollTrigger: { trigger: "#funding", start: "top 72%" },
  });
} else {
  renderFunding(ACHIEVEMENT_RATE, 231);
}
