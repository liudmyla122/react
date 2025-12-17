import { Schema, model, Types } from 'mongoose'

const articleSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  tags: [
    {
      type: Types.ObjectId,
      ref: 'Tag',
    },
  ],
})

export const Article = model('Article', articleSchema)
