document.addEventListener("DOMContentLoaded", function() {
    // Determine the base path of the project by checking where footer.js was loaded from
    let scriptSrc = document.currentScript ? document.currentScript.src : null;
    
    // Fallback for older browsers
    if (!scriptSrc) {
        const scripts = document.getElementsByTagName("script");
        for (let i = 0; i < scripts.length; i++) {
            if (scripts[i].src && scripts[i].src.includes("common/footer.js")) {
                scriptSrc = scripts[i].src;
                break;
            }
        }
    }
    
    // If we confidently know the path, get the domain/folder base path
    const basePath = scriptSrc ? scriptSrc.split("common/footer.js")[0] : "/";
    const footerHtmlPath = basePath + "common/footer.html";

    // Fetch the common footer HTML template
    fetch(footerHtmlPath)
        .then(response => {
            if (!response.ok) throw new Error("Could not find common footer template: " + response.statusText);
            return response.text();
        })
        .then(html => {
            // Because the footer may be loaded from various nesting depths (like 
            // the root /index.html or /Booking-System/Booking.html), we need to rewrite
            // image paths so they dynamically adapt and stay absolute to the project root.
            html = html.replace(/src="(?:\.\.\/)*images\//g, 'src="' + basePath + 'images/');
            html = html.replace(/this\.src='(?:\.\.\/)*images\//g, "this.src='" + basePath + 'images/');

            const container = document.getElementById("common-footer-container");
            if (container) {
                container.innerHTML = html;
            }
        })
        .catch(error => {
            console.error("CRF Footer Injection Error: ", error);
        });
});
