/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// Links image src to correct folder 
exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  // Create image field in query with correct
  if (node.internal.type === 'TeamJson') {
    createNodeField({
      node,
      name: `image`,
      value: `../images/team/${node.image.src}`,
    });
  }
};
