// schemas/FormStateSchema.ts
import { Schema, model } from 'mongoose';

const FormStateSchema = new Schema({
  state: {
    type: String,
    required: true
  }
});

export default model('FormState', FormStateSchema);
