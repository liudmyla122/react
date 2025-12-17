import dotenv from 'dotenv'
import { Publisher } from './models/Publisher'
import { Magazine } from './models/Magazine'
import { Article } from './models/Article'
import { Tag } from './models/Tag'

dotenv.config()

import app from './app'
import { connectDB } from './config/db'

const PORT = process.env.PORT || 3000

const startServer = async () => {
  await connectDB()

  // === TEST ONE-TO-MANY ===
  const publisher = await Publisher.create({
    name: 'Science Press',
    location: 'Berlin',
  })

  await Magazine.create({
    title: 'Quantum Monthly',
    issueNumber: 42,
    publisher: publisher._id,
  })

  const magazines = await Magazine.find().populate('publisher')

  console.log(JSON.stringify(magazines, null, 2))

  // === TEST MANY-TO-MANY ===
  const article = await Article.create({
    title: 'Why MongoDB is not SQL',
    content: 'Long philosophical text about documents...',
  })

  const tag1 = await Tag.create({ name: 'database' })
  const tag2 = await Tag.create({ name: 'mongodb' })

  // связываем статью с тегами
  article.tags.push(tag1._id, tag2._id)
  await article.save()

  // связываем теги со статьёй
  tag1.articles.push(article._id)
  tag2.articles.push(article._id)

  await tag1.save()
  await tag2.save()

  const fullArticle = await Article.findById(article._id).populate('tags')

  console.log(JSON.stringify(fullArticle, null, 2))

  const fullTag = await Tag.findOne({ name: 'mongodb' }).populate('articles')

  console.log(JSON.stringify(fullTag, null, 2))

  app.listen(PORT, () => {
    console.log(`🚀 Server started on port ${PORT}`)
  })
}

startServer()
