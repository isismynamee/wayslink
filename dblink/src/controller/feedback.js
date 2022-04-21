const { feedback } = require('../../models')


exports.postFeedback = async (req, res) => {
    try {
        const data = {
            feedback: req.body.feedback,
            name: req.body.name
        }
        
        const done = await feedback.create(data)
        
        res.send({
            status: 'Success',
            info: {
                Feedback: data
            }
        })

    } catch (error) {
        console.log(error.message)
    }
}
exports.Feedbacks = async (req, res) =>{
    try {
        const done = await feedback.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        })
        
        res.send({
            status: 'Success',
            data: done
        })
    } catch (error) {
        res.send({
            status: 'Error',
            message: (error.message)
        })
    }
}
exports.Feedback = async (req, res) =>{
    try {
        const {id} = req.params

        const done = await feedback.findOne({
            where: { 
                id
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        })
        
        res.send({
            status: 'Success',
            data: done
        })
    } catch (error) {
        res.send({
            status: 'Error',
            message: (error.message)
        })
        
    }
}