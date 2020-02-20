// const path = require("path")
// const experiencePage = path.resolve(`./src/templates/Experience/experience.js`)

// exports.createPages = async ({ graphql, actions, reporter }) => {
//   const { createPage } = actions
//   const result = await graphql(`
//     {
//       allTravellersJson {
//         edges {
//           node {
//             slug
//           }
//         }
//       }
//     }
//   `)
//   if (result.errors) {
//     reporter.panicOnBuild(`Error while running GraphQL query.`)
//     return
//   }
//   result.data.allTravellersJson.edges.forEach(({ node }) => {
//     console.log(JSON.stringify(node, null, 4));
//     createPage({
//       path: node.slug,
//       component: experiencePage,
//       context: {
//         slug: node.slug,
//         node,
//       },
//     })
//   })
// }

// exports.onCreateWebpackConfig = ({
//   stage,
//   actions,
//   getConfig
// }) => {
//   if (stage === 'build-html') {
//     actions.setWebpackConfig({
//       externals: getConfig().externals.concat(function(context, request, callback) {
//         const regex = /^@?firebase(\/(.+))?/;
//         // exclude firebase products from being bundled, so they will be loaded using require() at runtime.
//         if (regex.test(request)) {
//           return callback(null, 'umd ' + request);
//         }
//         callback();
//       })
//     });
//   }
// };