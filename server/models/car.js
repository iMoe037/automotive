import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const carSchema = new Schema({
  model: { type: String, required: true },
  make: { type: String, required: true },
  images: { type: [String], default: ['http://placehold.it/800x500?text=No+Image'] },
  city_epa: { type: Number },
  dimensions: { type: Object },
  displacement: { type: [String] },
  engine: { type: [String] },
  highway_epa: { type: Number },
  hp: { type: Number },
  ln_type: { type: String },
  msrp: { type: String },
  overview: { type: String },
  price: { type: Number },
  rating: { type: Number },
  summary: { type: String },
  top_speed: { type: Number },
  transmission: { type: String },
  vehicle_type: { type: String },
  vehicle_type_more: { type: [String] },
  zero_sixty: { type: Number },
});

export default mongoose.model('Car', carSchema);
