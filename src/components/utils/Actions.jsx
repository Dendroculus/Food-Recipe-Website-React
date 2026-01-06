import './Actions.css';

/**
 * Prints a specific recipe section.
 * Adds a temporary `print-active` class to the recipe container,
 * triggers the browser print dialog, then cleans up the class.
 *
 * @param {Object} recipe
 * @param {string|number} recipe.id - DOM id of the recipe section to print
 * @returns {void}
 */
export function printRecipe(recipe) {
  const section = document.getElementById(recipe.id);

  if (!section) return;

  section.classList.add('print-active');
  window.print();
  section.classList.remove('print-active');
}

/**
 * Saves a recipe as a downloadable plain text (.txt) file.
 * Builds a formatted text output including meta info,
 * description, ingredients, and instructions.
 *
 * @param {Object} recipe
 * @param {string} recipe.title
 * @param {Object} [recipe.meta]
 * @param {string} [recipe.meta.prepTime]
 * @param {string} [recipe.meta.cookTime]
 * @param {string} [recipe.meta.totalTime]
 * @param {string} [recipe.meta.difficulty]
 * @param {string} recipe.description
 * @param {string[]} [recipe.ingredients]
 * @param {Array<{ section?: string, steps: string[] }>} [recipe.instructions]
 * @returns {void}
 */
export function saveRecipe(recipe) {
  const content = `
Recipe: ${recipe.title}
------------------------------------------------------------
Prep Time: ${recipe.meta?.prepTime || ''}
Cook Time: ${recipe.meta?.cookTime || ''}
Total Time: ${recipe.meta?.totalTime || ''}
Difficulty: ${recipe.meta?.difficulty || ''}
------------------------------------------------------------
DESCRIPTION:
${recipe.description}
------------------------------------------------------------
INGREDIENTS:
${recipe.ingredients?.map(i => `- ${i}`).join('\n') || ''}
------------------------------------------------------------
INSTRUCTIONS:
${recipe.instructions?.map(section =>
  `\n[${section.section || 'Steps'}]\n` +
  section.steps.map((step, i) => `${i + 1}. ${step}`).join('\n')
).join('\n') || ''}
------------------------------------------------------------
  `;

  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = `${recipe.title.replace(/\s+/g, '_')}.txt`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
}

/**
 * Shares the current recipe using the Web Share API when available.
 * Falls back to copying the current page URL to the clipboard.
 *
 * @param {Object} recipe
 * @param {string} recipe.title
 * @returns {void}
 */
export function shareRecipe(recipe) {
  const shareData = {
    title: recipe.title,
    text: `Check out this recipe ${recipe.title}`,
    url: window.location.href,
  };

  if (navigator.share) {
    navigator.share(shareData);
  } else {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  }
}
