const AboutModel = require('../models/about');

let about= {};

about.GetAbout =  (req, res) => {
    AboutModel.getAbout(function (error, result) {
        if(error)
            res.json({
                success:false,
                data:error
            });
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
            res.json({
                success:false,
                data:error
            });
        res.json({
            success:true,
            message:"Add about data Successfully.",
            data:result
        });
    })
};

about.UpdateAbout = (req, res) => {

    let id= req.params.id;
    let data = req.body;
    delete data.id;
    AboutModel.updateAbout(id,data,function (error, result) {
        if(error)
            res.json({
                success:false,
                data:error
            });
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
        res.json({
            success:false,
            data:error
        });
        res.json({
            success:true,
            message:"Delete about Successfully.",
            data:result
        });
    })
};

module.exports = about;