# Portfolio Page Redesign Prompt

Please use the following prompt in your antigravity tool to update your portfolio page. 

***

**Prompt for Antigravity:**

Refactor the current portfolio page to transition from the horizontal testimonial-based layout to a responsive, visual 3-column project grid layout. 

**Current State:** The page uses a dark theme with full-width rows containing client stats (Site visits, Client retention, Satisfaction) on the left and a testimonial quote on the right.

**Desired State:**
Implement a modern project gallery grid (similar to standard Next.js/Tailwind portfolio templates). Keep the existing dark color palette (navy backgrounds, blue accents, white/slate text) but restructure the components.

**Please make the following specific changes:**

1. **Top Filter Bar:** Add a horizontal filter bar above the grid with pill-shaped buttons (e.g., "All", "Web Dev", "Pharmacy", "Paving").

2. **Grid Layout:**
   Create a responsive CSS grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3` with an appropriate gap).

3. **Project Card Component:**
   Build a new card component for each client (e.g., Health Guard Pharmacy, Woolfolk Paving) containing:
   * **Thumbnail Container:** A top section dedicated to an image of the website. Give it a subtle rounded border and include placeholder images for now. Include small circular icon buttons overlaid in the top right corner (e.g., an external link icon for the live site).
   * **Tags:** Below the image, display the category tag (e.g., "Pharmacy", "Paving") in a small, stylized pill.
   * **Title & Description:** Add the client name as a bold `h3` heading. Convert the current testimonial quote into a brief 2-3 line project description.
   * **Stats Footer:** Keep the valuable metrics (850+ Site Visits, 95% Retention, etc.) but format them as a compact horizontal flex row at the bottom of the card. 

4. **Styling (Tailwind CSS preferred):**
   Ensure the cards have a subtle background color that stands out slightly from the main dark background (e.g., `bg-slate-800/50` or similar dark glassmorphism effect), with a hover state that slightly scales the card or brightens the border to make it interactive. Ensure all code is modular and clean.
