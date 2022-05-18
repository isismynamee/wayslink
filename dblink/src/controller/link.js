const { link, user, creative } = require('../../models')


exports.postLink = async (req, res) => {
    try {
        // const sleep = () => {
        //     while (done < 5){
        //         done;
        //         done++
        //     }
        // }
        
        // const data = {
        //     title: req.body.title,
        //     url: req.body.url
        // }
        const data = {
            title: req.body.title,
            url: req.body.url,
            idUser: req.user.id
        }

        let final = await link.create({
            ...data,
            image: req.file.filename
        })

        final = JSON.parse(JSON.stringify(final))

        final = {
            ...final,
            image: process.env.FILE_PATH + final.image
        }
        // const done = await final.bulkCreate({
            
        // })

        res.send({
            status: 'Success',
            info: {
                Link: final
            }
        })

    } catch (error) {
        console.log(error.message)
    }
}
exports.links = async (req, res) =>{
    try {
        let done = await link.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
            include: [{
                model: user,
                as: "user",
                attributes: {
                    exclude: ['updatedAt', 'createdAt', 'password', 'phone']
                }
            }]
        })
        
        done = JSON.parse(JSON.stringify(done))

        done = done.map((item) => {
            return{ ...item, image: process.env.FILE_PATH + item.image}
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
exports.link = async (req, res) =>{
    try {
        const {id} = req.params

        let done = await link.findOne({
            where: { 
                id
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
            include: [{
                model: user,
                as: "user",
                attributes: {
                    exclude: ['updatedAt', 'createdAt', 'password', 'phone']
                }
            }]
        })

        done = JSON.parse(JSON.stringify(done))

        done = {
            ...done,
            image: process.env.FILE_PATH + done.image
        }

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
exports.updatelink = async (req, res) =>{
    try {
        const {id} = req.params

        const data = {
            title: req?.body?.title,
            url: req?.body?.url,
            image: req?.file?.filename
        }

        await link.update(data, {
            where: { 
                id
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        })

        res.send({
            status: 'Success',
            data: {
                id,
                data,
                image: req?.file?.filename
            }
        })
    } catch (error) {
        res.send({
            status: 'Error',
            message: (error.message)
        })
        
    }
}
exports.deletelink = async (req, res) =>{
    try {
        const { id } = req.params
    
        await link.destroy({
            where: { 
                id
            }
        })
        
        res.send({
            status: 'Success',
            data: `Data ${id} is deleted`
        })
    } catch (error) {
        res.send({
            status: 'Error',
            message: (error.message)
        })
    }
}