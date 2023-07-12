import { LLMChat } from '../../../05-chat/chat.js'
import { PROMPT_TEMPLATE } from '../../../05-chat/prompt.js'

import { join } from 'path'

export default defineEventHandler(async event => {
  const { text } = await readBody(event)

  const base = join(process.cwd(), '../../../')
  const target = join(base, 'static/data')
  const dest = join(base, 'static/data_venctor')

  const llmChat = new LLMChat({
    target,
    dest,
    prompt: PROMPT_TEMPLATE
  })

  const fiels = await llmChat.getLocalDocs()
  const vectorStore = await llmChat.initVectorStore(fiels)
  const answer = await llmChat.chat(vectorStore, text)

  return answer.text
})