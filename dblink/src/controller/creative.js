const { creative, link, user } = require('../../models')


exports.postCreative = async (req, res) => {
    try {
        let alfabet = "asDSrdILnsaKO"
        let d = Math.floor((Math.random() * 5).toString());
        let c = Math.floor((Math.random() * 4)).toString();

        const paper = alfabet.slice(d).replace("LnsaKO", c);

        const data = {
            title: req.body.title,
            description: req.body.description,
            uniquelink: paper,
            viewcount: 0,
            // idLink: req.link.id
        }

        const linkI = await creative.create({
            ...data,
            image : req.file.filename
        })

        linkI = JSON.parse(JSON.stringify(linkI))

        linkI = {
            linkI,
            image : process.env.FILE_PATH + image.name
        }
        // const creative = {
        //     title: req.body.title,
        //     url: req.body.url,
        //     image: image.file.filname
        // }

        res.send({
            status: 'Success',
            info: {
                creative: linkI
            }
        })

    } catch (error) {
        console.log(error)
    }
}
exports.creatives = async (req, res) =>{
    try {
        let done = await creative.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
            include: [{
                model: link,
                as: "link",
                attributes: {
                    exclude: ['createdAt', 'updatedAt', 'uniquelink']
                },
                include: [{
                    model: user,
                    as: "user",
                    attributes: {
                        exclude: ['createdAt', 'updatedAt', 'phone', 'password']
                    }
                }]
            }]
        })

        done = JSON.parse(JSON.stringify(done))

        done = done.map((item) => {
            return { ...item, image: process.env.FILE_PATH + item.image}
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
exports.creative = async (req, res) =>{
    try {
        const {id} = req.params

        let done = await creative.findOne({
            where: { 
                id
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
            include: [{
                model: link,
                as: "link",
                attributes: {
                    exclude: ['createdAt', 'updatedAt', 'uniquelink']
                },
                include: [{
                    model: user,
                    as: "user",
                    attributes: {
                        exclude: ['createdAt', 'updatedAt', 'phone', 'password']
                    }
                }]
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
exports.updateCreative = async (req, res) =>{
    try {
        const {id} = req.params

        await creative.update(req.body, {
            where: { 
                id
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        })

        const dont = await creative.findOne({
            where: { 
                id
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
            include: [{
                model: link,
                as: "link",
                attributes: {
                    exclude: ['createdAt', 'updatedAt', 'uniquelink']
                },
                include: [{
                    model: user,
                    as: "user",
                    attributes: {
                        exclude: ['createdAt', 'updatedAt', 'phone', 'password']
                    }
                }]
            }]
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
exports.deleteCreative = async (req, res) =>{
    try {
        const { id } = req.params
    
        await creative.destroy({
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