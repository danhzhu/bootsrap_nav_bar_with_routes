async function loadPage(page) {
  // Fetch the page using an HTTP request
  const res = await fetch(page); // Assuming page is a valid URL

  if (res.ok) {
    // If the response is successful, proceed
    try {
      // Get the text content from the response
      const content = await res.text();

      // Get the element with id 'content'
      const element = document.getElementById('content');

      if (element) {
        // Set the innerHTML of the element with the fetched content
        element.innerHTML = content;
      } else {
        console.error("Element with id 'content' not found.");
      }
    } catch (error) {
      console.error("Error loading page content:", error);
    }
  } else {
    console.error('Failed to fetch page:', res.status, res.statusText);
  }
}
