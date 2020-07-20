exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  // Create image field in query from src in data file
  if (node.internal.type === 'TeamJson') {
    createNodeField({
      node, 
      name: `teamImage`, 
      value: `../images/team/${node.image.src}`,
    });
  }
};
