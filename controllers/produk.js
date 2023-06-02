const { Produk } = require('../db/models');
// const bcryp = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = process.env;
const oauth2 = require('../utils/oauth2');

module.exports = {
    index: async (req, res) => {
        try {
            const produk = await Produk.findAll();

            return res.status(200).json({
                status: true,
                message: 'fetch produk success!',
                data: produk
            });
        } catch (error) {
            throw error;
        }
    },

    show: async (req, res) => {
        try {
            const { id } = req.params;

            const produk = await Produk.findByPk(id);

            if (!produk) {
                return res.status(404).json({
                    status: false,
                    message: 'produk not found!',
                    data: null
                });
            }

            return res.status(200).json({
                status: true,
                message: 'fetch produk success!',
                data: produk
            });
        } catch (error) {
            throw error;
        }
    },

    store: async (req, res) => {
        try {
            const { nama_produk, produk_id } = req.body;

            const exist = await Produk.findOne({ where: { produk_id } });
            if (exist) {
                return res.status(400).json({
                    status: false,
                    message: 'produk_id already used!',
                    data: null
                });
            }

            const produk = await Produk.create({
                nama_produk,
                produk_id
            });

            return res.status(201).json({
                status: true,
                message: 'produk created!',
                data: {
                    id: produk.id,
                    nama_produk: produk.nama_produk,
                    produk_id: produk.produk_id
                }
            });
        } catch (error) {
            throw error;
        }
    },

    update: async (req, res) => {
        try {
            const { id } = req.params;
            const { nama_produk, produk_id } = req.body;

            const produk = await Produk.findByPk(id);

            if (!produk) {
                return res.status(404).json({
                    status: false,
                    message: 'produk not found!',
                    data: null
                });
            }

            await produk.update({
                nama_produk,
                produk_id
            });

            return res.status(200).json({
                status: true,
                message: 'produk updated!',
                data: {
                    id: produk.id,
                    nama_produk: produk.nama_produk,
                    produk_id: produk.produk_id
                }
            });
        } catch (error) {
            throw error;
        }
    },

    destroy: async (req, res) => {
        try {
            const { id } = req.params;

            const produk = await Produk.findByPk(id);

            if (!produk) {
                return res.status(404).json({
                    status: false,
                    message: 'produk not found!',
                    data: null
                });
            }

            await produk.destroy();

            return res.status(200).json({
                status: true,
                message: 'produk deleted!',
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

    //     let produk = await Produk.findOne({ where: { produk_id: data.produk_id } });
    //     if (!produk) {
    //         produk = await Produk.create({
    //             nama_produk: data.nama_produk,
    //             produk_id: data.produk_id,
    //             user_type: 'google'
    //         });
    //     }

    //     const payload = {
    //         id: produk.id,
    //         nama_produk: produk.nama_produk,
    //         produk_id: produk.produk_id
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
