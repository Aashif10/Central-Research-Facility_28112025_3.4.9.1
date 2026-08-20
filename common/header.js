/**
 * CRF Header Injection Script
 * Dynamically loads and injects the common header across the project.
 * Handles path normalization for images and links.
 */

document.addEventListener("DOMContentLoaded", function() {
    // 1. Path Resolution Logic
    let scriptSrc = document.currentScript ? document.currentScript.src : null;
    
    // Fallback for older browsers
    if (!scriptSrc) {
        const scripts = document.getElementsByTagName("script");
        for (let i = 0; i < scripts.length; i++) {
            if (scripts[i].src && scripts[i].src.includes("common/header.js")) {
                scriptSrc = scripts[i].src;
                break;
            }
        }
    }
    
    // Determine base path (the folder containing index.html)
    const basePath = scriptSrc ? scriptSrc.split("common/header.js")[0] : "./";
    const headerHtmlPath = basePath + "common/header.html";

    // 2. Fetch and Inject Header
    fetch(headerHtmlPath)
        .then(response => {
            if (!response.ok) throw new Error("Header template not found: " + response.statusText);
            return response.text();
        })
        .then(html => {
            // Rewrite local paths (images/ and internal links)
            // Fixes paths if the page is in a subdirectory (e.g., /All-Facilities-/)
            html = html.replace(/src="(?:\.\.\/)*images\//g, 'src="' + basePath + 'images/');
            html = html.replace(/href="(?:\.\.\/)*internal\//g, 'href="' + basePath + 'internal/');
            html = html.replace(/href="(?:\.\.\/)*files\//g, 'href="' + basePath + 'files/');
            
            // Rewrite local page links
            const localPages = ["Home.html", "Contact.html", "FAQ.html", "Outreach/Outreach.html", "Booking-System/Booking.html", "All-Facilities-/CRF_Facilities.html"];
            localPages.forEach(page => {
                const regex = new RegExp('href="' + page + '"', 'g');
                html = html.replace(regex, 'href="' + basePath + page + '"');
            });

            // Specific fix for "./" link (Home)
            html = html.replace(/href="\.\/"/g, 'href="' + basePath + '"');

            const container = document.getElementById("common-header-container");
            if (container) {
                container.innerHTML = html;
                initializeHeaderBehavior();
            }
        })
        .catch(error => {
            console.error("CRF Header Injection Error: ", error);
        });

    /**
     * Set up interactive behaviors for the newly injected header
     */
    function initializeHeaderBehavior() {
        // Custom Header Mobile Toggle Behavior
        const crfToggleBtn = document.getElementById("crf-mobile-menu-toggle");
        const crfNavRow = document.getElementById("crf-nav-row");
        
        if (crfToggleBtn && crfNavRow) {
            crfToggleBtn.addEventListener("click", function(e) {
                e.preventDefault();
                crfNavRow.classList.toggle("open");
            });
        }

        // Mobile Toggle Behavior (Nicepage structure)
        const toggleBtn = document.querySelector(".u-hamburger-link");
        const navCollapse = document.querySelector(".u-nav-container-collapse");
        const menuClose = document.querySelector(".u-menu-close");
        const overlay = document.querySelector(".u-menu-overlay");
        
        if (toggleBtn && navCollapse) {
            toggleBtn.addEventListener("click", function(e) {
                e.preventDefault();
                navCollapse.classList.add("u-menu-open");
                if (overlay) overlay.style.display = "block";
            });
        }

        if (menuClose && navCollapse) {
            menuClose.addEventListener("click", function() {
                navCollapse.classList.remove("u-menu-open");
                if (overlay) overlay.style.display = "none";
            });
        }

        if (overlay && navCollapse) {
            overlay.addEventListener("click", function() {
                navCollapse.classList.remove("u-menu-open");
                overlay.style.display = "none";
            });
        }

        // Active State Logic
        const currentPath = window.location.pathname;
        const currentPage = currentPath.split("/").pop() || "index.html";

        const navLinks = document.querySelectorAll(".crf-nav-link");
        // Strip .html extension so "Booking" and "Booking.html" both match
        const currentPageClean = currentPage.toLowerCase().replace(/\.html$/, "");

        navLinks.forEach(link => {
            const linkHref = link.getAttribute("href");
            if (!linkHref) return;

            let isActive = false;
            try {
                // Parse the href relative to current page so both relative and
                // rewritten absolute URLs (http://localhost/...) are handled uniformly
                const url = new URL(linkHref, window.location.href);

                // Only match links on the same host — skip truly external domains
                // (e.g. crfbooking.iitd.ac.in, mpragati.in, sathi.iitd.ac.in)
                if (url.hostname === window.location.hostname) {
                    // Extract the last path segment without .html extension
                    const hrefFilename = url.pathname.split("/").pop()
                        .toLowerCase()
                        .replace(/\.html$/, "");

                    // Exact filename match — only ONE button can ever be active
                    if (hrefFilename !== "" && hrefFilename === currentPageClean) {
                        isActive = true;
                    }

                    // Home: match the root "./" or "/index.html" when on root page
                    if (!isActive && (currentPageClean === "" || currentPageClean === "index")) {
                        isActive = url.pathname === "/" || url.pathname.endsWith("/index.html");
                    }
                }
            } catch (e) {
                // Malformed href — ignore
            }

            if (isActive) {
                link.classList.add("active");
                let parent = link.parentElement;
                while (parent && parent.tagName !== "NAV") {
                    if (parent.classList.contains("crf-nav-item")) {
                        parent.classList.add("active");
                    }
                    parent = parent.parentElement;
                }
            }
        });
        // Dialog/Modal Link Behavior (Nicepage support for injected content)
        const dialogLinks = document.querySelectorAll(".u-dialog-link");
        dialogLinks.forEach(link => {
            link.addEventListener("click", function(e) {
                const targetId = this.getAttribute("href") || this.getAttribute("data-href");
                if (targetId && targetId.startsWith("#")) {
                    const modal = document.querySelector(targetId);
                    if (modal) {
                        e.preventDefault();
                        // Nicepage uses 'u-dialog-open' class to show modals
                        modal.classList.add("u-dialog-open");
                        // Also handle the overlay if necessary, though Nicepage usually handles it via class on body or the section
                        document.body.classList.add("u-items-open");
                    }
                }
            });
        });
    }
});
