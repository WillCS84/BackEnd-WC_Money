const Releases = require("../models/releaseModel")
class ReleasesInstant {
  async create(request, response) {
    try {
      const release = request.body
      await Releases.create({
        title: release.title,
        amount: release.amount,
        type: release.type,
        category: release.category
      })
      response.status(200).json({ "Cadastro realizado": release })
    } catch (error) {
      console.error(error)
      response.status(400).send("Error a method create")
    }
  }
  async read(request, response) {
    try {
      const releases = await Releases.findAll()
      response.status(200).json(releases)
    } catch (error) {
      console.error(error)
      return response.status(400).send("Error a method create")
    }
  }
}

module.exports = new ReleasesInstant()
