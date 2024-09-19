import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
   name: {
      type: "string",
      require: true
   },
   price: {
      type: Number,
      require: true
   },
   image: {
      type: "string",
      require: true
   },

}, {
   timestamps: true
});

const product = mongoose.model('Product', productSchema);

export default Product;