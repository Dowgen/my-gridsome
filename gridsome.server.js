// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    const Page1 = require('./src/data/page1.json');
    const projects = addCollection({
      typeName: 'projects'
    })
    for (const node of Page1.projects) {
      projects.addNode(node)
    }
    const journals = addCollection({
      typeName: 'journals'
    })
    for (const node of Page1.journals) {
      journals.addNode(node)
    }
  })

  api.createPages(({ createPage }) => {
    createPage({
      path: '/project/:id',
      component: './src/components/Project.vue'
    })
    createPage({
      path: '/journal/:id',
      component: './src/components/Journal.vue'
    })
  })
}
