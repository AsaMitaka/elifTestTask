const { Schema, model } = require('mongoose');

const UserOrderSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  orderItems: [
    {
      name: { type: String, required: true },
      qty: { type: String, required: true },
      price: { type: String, required: true },
      product: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Product',
      },
    },
  ],
  totalPrice: {
    type: Number,
    required: true,
    default: 0.0,
  },
  date: { type: Date, default: Date.now() },
});

module.exports = model('UserOrder', UserOrderSchema);
