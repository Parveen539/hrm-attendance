/**
 * @function filterData
 * @description Sanitizes input data by trimming whitespace, removing backslashes, 
 * stripping HTML tags, and converting special characters to HTML entities to prevent XSS attacks.
 *
 * @param {string} formData - The input data to be sanitized.
 * @returns {string} The sanitized input data. If input is null or undefined, it returns the original input.
 *
 * @example
 * // Usage Example:
 * import { filterData } from './utils.js';  // Replace with the actual path
 *
 * let sanitizedData = filterData("<script>alert('XSS');</script> Hello World!");
 * console.log(sanitizedData);  // Output: "alert('XSS'); Hello World!"
 */
export const filterData = (formData) => {
    // Check if the input data is neither null nor undefined
    if (formData !== null && formData !== undefined) {
        formData = formData.trim();  // Remove whitespace from both sides
        
        // Remove backslashes
        formData = formData.replace(/\\/g, "");  
        
        // Strip HTML tags to prevent XSS
        formData = formData.replace(/<[^>]*>?/gm, "");  
        
        // Convert special characters to HTML entities
        formData = formData.replace(/&/g, "&amp;")
                           .replace(/</g, "&lt;")
                           .replace(/>/g, "&gt;")
                           .replace(/"/g, "&quot;")
                           .replace(/'/g, "&#039;");  
    }
    return formData;  // Return the sanitized input data
};

/*
git config --global user.email "you@example.com"
  git config --global user.name "Your Name"
*/