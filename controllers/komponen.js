const {Komponen} = require('../db/models');
// const bcryp = require('bcrypt');
const jwt = require('jsonwebtoken');
const {JWT_SECRET_KEY} = process.env;
const oauth2 = require('../utils/oauth2');

module.exports = {
    index: async (req, res) => {
        try {
            const komponen = await Komponen.findAll();

            return res.status(200).json({
                status: true,
                message: 'fetch komponen success!',
                data: komponen
            });
        } catch (error) {
            throw error;
        }
    },

    show: async (req, res) => {
        try {
            const {id} = req.params;
            
            const komponen = await Komponen.findByPk(id);

            if (!komponen) {
                return res.status(404).json({
                    status: false,
                    message: 'komponen not found!',
                    data: null
                });
            }

            return res.status(200).json({
                status: true,
                message: 'fetch komponen success!',
                data: komponen
            });
        } catch (error) {
            throw error;
        }
    },

    store: async (req, res) => {
        try {
            const {nama_komponen, komponen_id} = req.body;

            const exist = await Komponen.findOne({where: {komponen_id}});
            if (exist) {
                return res.status(400).json({
                    status: false,
                    message: 'komponen_id already used!',
                    data: null
                });
            }

            const komponen = await Komponen.create({
                nama_komponen, komponen_id
            });

            return res.status(201).json({
                status: true,
                message: 'komponen created!',
                data: {
                    id: komponen.id,
                    nama_komponen: komponen.nama_komponen,
                    komponen_id: komponen.komponen_id
                }
            });
        } catch (error) {
            throw error;
        }
    },

    update: async (req, res) => {
        try {
            const {id} = req.params;
            const {nama_komponen, komponen_id} = req.body;

            const komponen = await Komponen.findByPk(id);

            if (!komponen) {
                return res.status(404).json({
                    status: false,
                    message: 'komponen not found!',
                    data: null
                });
            }

            await komponen.update({
                nama_komponen, komponen_id
            });

            return res.status(200).json({
                status: true,
                message: 'komponen updated!',
                data: {
                    id: komponen.id,
                    nama_komponen: komponen.nama_komponen,
                    komponen_id: komponen.komponen_id
                }
            });
        } catch (error) {
            throw error;
        }
    },

    destroy: async (req, res) => {
        try {
            const {id} = req.params;

            const komponen = await Komponen.findByPk(id);

            if (!komponen) {
                return res.status(404).json({
                    status: false,
                    message: 'komponen not found!',
                    data: null
                });
            }

            await komponen.destroy();

            return res.status(200).json({
                status: true,
                message: 'komponen deleted!',
                data: null
            });
        } catch (error) {
            throw error;
        }
    },

    // googleOauth2: async (req, res) => {
    //     const {code} = req.query;
    //     if (!code) {
    //         const googleLoginUrl = oauth2.generateAuthUrl();
    //         return res.redirect(googleLoginUrl);
    //     }

    //     await oauth2.setCreadentials(code);
    //     const {data} = await oauth2.getUserData();

    //     let komponen = await Komponen.findOne({where: {email: data.email}});
    //     if (!komponen) {
    //         komponen = await Komponen.create({
    //             name: data.name,
    //             email: data.email,
    //             user_type: 'google'
    //         });
    //     }

    //     const payload = {
    //         id: komponen.id,
    //         name: komponen.name,
    //         email: komponen.email
    //     };

    //     const token = await jwt.sign(payload, JWT_SECRET_KEY);
    //     return res.status(200).json({
    //         status: true,
    //         message: 'login success!',
    //         data: {
    //             token: token
    //         }
    //     });
    // }
};
