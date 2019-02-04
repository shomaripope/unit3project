const Member = require('../models/Member')

const memberController = {
    index: (req, res) => {
        Member.find({})
            .then((members) => {
                res.send(members)
            })
    },
    show: (req, res) => {
        Member.findById(req.params.memberId).populate('locations')
            .then((member) => {
                res.send(member)
            })
    },
    update: (req, res) => {
        Member.findByIdAndUpdate(req.params.memberId, req.body)
            .then((updatedmember) => {
                updatedmember.save()
                res.send(updatedmember)
            })
    },
    delete: (req, res) => {
        Member.findByIdAndDelete(req.params.memberId)
            .then(() => {
                res.send(200)
            })
    },
    create: (req, res) => {
        Member.create(req.body)
            .then((member) => {
                res.send(member)
            })
    }
}
    module.exports = memberController;