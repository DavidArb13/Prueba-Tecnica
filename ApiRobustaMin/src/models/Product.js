import { Schema, model } from 'mongoose';

const productSchema = new Schema({
    ImageProduct:{
        type: String,
        require: [true, "Image is required"]
    },
    NameProduct:{
        type: String,
        require: [true, "Name is required"]
    },
    PriceProduct:{
        type: Number,
        require: [true, "Price is required"]
    },
    CatagoryProduct:{
        type: String,
        require: [true, "Categorie is required"]
    },
    Qualification:{
        type: Number,
        require: [true, "Qualification"]
    }
},  {
    timestamps: true,
    versionKey: false
});


export default model('Product', productSchema);