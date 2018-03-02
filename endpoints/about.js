const AboutModel = require('../models/about');

let about= {};

about.GetAbout =  (req, res) => {
    AboutModel.getAbout(function (error, result) {
        if(error)
        // throw new Error(error) ;
            throw error;

        res.json({
            success:true,
            message:"Getting data Successfully.",
            data:result
        });
    })
};

about.AddAbout = (req, res) => {

    let about = req.body;
    AboutModel.addAbout(about,function (error, result) {
        if(error)
        // throw new Error(error) ;
            throw error;

        res.json({
            success:true,
            message:"Getting data Successfully.",
            data:result
        });
    })
};

about.UpdateAbout = (req, res) => {

    let id= req.params.id;
    let data = req.body;
    AboutModel.updateAbout(id,data,function (error, result) {
        if(error)
        // throw new Error(error) ;
            throw error;

        res.json({
            success:true,
            message:"About Updated Successfully.",
            data:result
        });
    })
};

about.DeleteAbout = (req, res) => {

    let id= req.params.id;
    AboutModel.deleteAbout(id,function (error, result) {
        if(error)
        // throw new Error(error) ;
            throw error;

        res.json({
            success:true,
            message:"Delete about Successfully.",
            data:result
        });
    })
};

module.exports = about;