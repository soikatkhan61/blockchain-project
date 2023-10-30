const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
    {
        basicDetails: {
            productName: { type: String },
            description: { type: String },
            category: { type: String },
            brand: { type: String },
            price: { type: Number },
            weight: { type: String },
            productImg: { type: String },
            origin: { type: String }
        },
        tracking: {
            barcode: { type: String },
            serialNumber: { type: String },
        },
        vendorDetails: {
            vendorName: { type: String },
            vendorCode: { type: String },
            vendorContactInfo: {
                address: { type: String },
                phone: { type: String }
            }
        },
        expiration: {
            manufacturingDate: { type: String },
            expirationDate: { type: String }
        },
        compilanceInfo: {
            compilanceCertificate: { type: String },
            safetyInfo: { type: String }
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);