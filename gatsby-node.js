/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// Create image field to use with gatsby-image
exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  try {
    if (node.internal.type.includes('Json')) {
      createNodeField({
        node,
        name: `image`,
        value: `../images/${node.image.src}`,
      });
    }
  } catch (err) {
    if (err.message.includes(`Cannot read property 'src'`)) {
      //No image field found, skip
    } else {
      throw err;
    }
  }
};
