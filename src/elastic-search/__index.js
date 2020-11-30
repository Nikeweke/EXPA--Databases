const title = 'Elastic Search'
const collapsable = true

const dirName = '/elastic-search/'
const children = [
  'introduction.md',
  'dsl.md',
  'api.md',
 ]


module.exports = {
  title,
  collapsable,
  children: children.map((item) => dirName + item)
}


