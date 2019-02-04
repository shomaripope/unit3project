const Location = require('../models/Location')
const Member = require('../models/Member')

const locationController = {
    index: (req, res) => {
        Location.find({})
            .then((locations) => {
                res.send(locations)
            })
    },
    show: (req, res) => {
        Location.findById(req.params.locationId).populate('locations')
            .then((location) => {
                res.send(location)
            })
    },
    update: (req, res) => {
        Location.findByIdAndUpdate(req.params.locationId, req.body)
            .then((updatedlocation) => {
                updatedlocation.save()
                res.send(updatedlocation)
            })
    },
    delete: (req, res) => {
        Location.findByIdAndDelete(req.params.locationId)
            .then(() => {
                res.send(200)
            })
    },
    create: (req, res) => {
        const memberId = req.params.memberId
        Member.findById(memberId).then((member) => {
            Location.create(req.body)
          .then((newLocation) => {
            console.log(newLocation)
            member.locations.push(newLocation)
            member.save()
            res.send(newLocation)
          })
      })
        
    }
}
    module.exports = locationController;