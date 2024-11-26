const contentParser = (content) => {
  const data = []

  content.data.forEach(e => {
    data.push({
      name: e.name,
      description: e.description,
      avatar_url: e.owner.avatar_url,
      language: e.language
    })
  })

  return data
}

export default contentParser