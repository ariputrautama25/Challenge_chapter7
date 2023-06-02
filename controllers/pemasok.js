const { Pemasok } = require('../db/models');
// const bcryp = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = process.env;
const oauth2 = require('../utils/oauth2');

module.exports = {
    index: async (req, res) => {
        try {
            const pemasok = await Pemasok.findAll();

            return res.status(200).json({
                status: true,
                message: 'fetch pemasok success!',
                data: pemasok
            });
        } catch (error) {
            throw error;
        }
    },

    show: async (req, res) => {
        try {
            const { id } = req.params;

            const pemasok = await Pemasok.findByPk(id);

            if (!pemasok) {
                return res.status(404).json({
                    status: false,
                    message: 'pemasok not found!',
                    data: null
                });
            }

            return res.status(200).json({
                status: true,
                message: 'fetch pemasok success!',
                data: pemasok
            });
        } catch (error) {
            throw error;
        }
    },

    store: async (req, res) => {
        try {
            const { nama, pemasok_id } = req.body;

            const exist = await Pemasok.findOne({ where: { pemasok_id } });
            if (exist) {
                return res.status(400).json({
                    status: false,
                    message: 'pemasok_id already used!',
                    data: null
                });
            }

            const pemasok = await Pemasok.create({
                nama,
                pemasok_id
            });

            return res.status(201).json({
                status: true,
                message: 'pemasok created!',
                data: {
                    id: pemasok.id,
                    nama: pemasok.nama,
                    pemasok_id: pemasok.pemasok_id
                }
            });
        } catch (error) {
            throw error;
        }
    },

    update: async (req, res) => {
        try {
            const { id } = req.params;
            const { nama, pemasok_id } = req.body;

            const pemasok = await Pemasok.findByPk(id);

            if (!pemasok) {
                return res.status(404).json({
                    status: false,
                    message: 'pemasok not found!',
                    data: null
                });
            }

            await pemasok.update({
                nama,
                pemasok_id
            });

            return res.status(200).json({
                status: true,
                message: 'pemasok updated!',
                data: {
                    id: pemasok.id,
                    nama: pemasok.nama,
                    pemasok_id: pemasok.pemasok_id
                }
            });
        } catch (error) {
            throw error;
        }
    },

    destroy: async (req, res) => {
        try {
            const { id } = req.params;

            const pemasok = await Pemasok.findByPk(id);

            if (!pemasok) {
                return res.status(404).json({
                    status: false,
                    message: 'pemasok not found!',
                    data: null
                });
            }

            await pemasok.destroy();

            return res.status(200).json({
                status: true,
                message: 'pemasok deleted!',
                data: null
            });
        } catch (error) {
            throw error;
        }
    },

    // googleOauth2: async (req, res) => {
    //     const { code } = req.query;
    //     if (!code) {
    //         const googleLoginUrl = oauth2.generateAuthUrl();
    //         return res.redirect(googleLoginUrl);
    //     }

    //     await oauth2.setCreadentials(code);
    //     const { data } = await oauth2.getUserData();

    //     let pemasok = await Pemasok.findOne({ where: { pemasok_id: data.pemasok_id } });
    //     if (!pemasok) {
    //         pemasok = await Pemasok.create({
    //             nama: data.nama,
    //             pemasok_id: data.pemasok_id,
    //             user_type: 'google'
    //         });
    //     }

    //     const payload = {
    //         id: pemasok.id,
    //         nama: pemasok.nama,
    //         pemasok_id: pemasok.pemasok_id
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
