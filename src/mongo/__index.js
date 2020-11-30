const title = 'Mongo'
const collapsable = true

const dirName = '/mongo/'
const children = [
  'intro.md',
  'lookups_nested_$in.md',
 ]


module.exports = {
  title,
  collapsable,
  children: children.map((item) => dirName + item)
}


