const mongoose = require("mongoose");

//Declare schema mongoose model

let productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    reference: {
        type: String,
        required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      default: 0,
    },
    category: {
        type: String,
        required: true,
    },
    image: {
      type: String,
      required: true, 
    },
    stock: {
      type: Number,
      default: 0
    },
    status:{
      type: Boolean,
      default: true,
    }
  },
  {
    timestamps:true
  },
  {
    toJSON: {
      transform: function (doc, ret) {
        // remove the  __v field from the output
        delete ret.__v;
      },
    },
  }
);

// Mongoose method to increment quantity (stock) by a specified value
productSchema.methods.incrementQuantity = async function (value) {
  this.stock += value;
  await this.save();
};

productSchema.methods.decrementQuantity = async function (value) {
  this.stock -= value;
  await this.save();
};

//Export the model
module.exports = mongoose.model("Product", productSchema);
