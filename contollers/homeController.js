const NoteModel = require('../models/NoteModel');

const homeController = async(req, res)=>{
        try {
            const allNote = await NoteModel.find()
            res.status(200).render('home', {allNote})
        } catch (error) {
            res.status(500).json({message: `Fail ${error}`})
        }
}

module.exports = homeController;