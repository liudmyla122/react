import { Schema, model, Types } from 'mongoose'

const tagSchema = new Schema({
  name: { type: String, required: true },
  articles: [
    {
      type: Types.ObjectId,
      ref: 'Article',
    },
  ],
})

export const Tag = model('Tag', tagSchema)
