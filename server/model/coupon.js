const { Schema, model } = require('mongoose');

const CouponSchema = new Schema({
  name: { type: String, required: true },
  code: { type: String, required: true },
  date: { type: Date, default: Date.now() },
  expired: { type: Date, required: true },
});

CouponSchema.pre('save', function (next) {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 3);
  this.expired = currentDate;
  next();
});

module.exports = model('Coupon', CouponSchema);
