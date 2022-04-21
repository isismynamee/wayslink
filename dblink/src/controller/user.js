const {user} = require('../../models')


exports.users = async (req, res)=>{
    try {
        const users = await user.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'password']
            }
        })

        res.status(200).send({
            status: 'Success',
            data:{
                users
            }
        })
    } catch (error) {
        res.send({
            status: "Error",
            message: (error.message)
        })
    }
}
exports.getuser = async (req, res)=>{
    try {
        const {id} = req.params;

        const profile = await user.findOne({
            where:{
                id
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'password', 'role']
            }
        })

        res.send({
            status: 'Success',
            data: {
                profile
            }
        })
    } catch (error) {
        res.send({
            status: 'Failed',
            message: (error.message)
        })
    }
}
exports.updateU = async (req, res)=>{
    try {
        const {id} = req.params

        await user.update(req.body, {
            where: { 
                id
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        })

        const dont = await user.findOne({
            where: { 
                id
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'password', 'id']
            }
        })

        res.send({
            status: 'Success',
            data: dont
        })
    } catch (error) {
        res.send({
            status: 'Error',
            message: (error.message)
        })
        
    }
}
exports.deleteuser = async (req, res)=>{
    try {
        const {id} = req.params;

        await user.destroy({
            where:{
                id
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        })

        res.send({
            status: 'Success',
            data: `Delete User id ${id} Success`
        })
    } catch (error) {
        res.send({
            status: 'Failed',
            message: (error.message)
        })
    }
}