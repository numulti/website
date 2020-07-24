/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  // Create image field in query from src in data file
  if (node.internal.type === 'TeamJson') {
    createNodeField({
      node,
      name: `image`,
      value: `../images/team/${node.image.src}`,
    });
  }
};
