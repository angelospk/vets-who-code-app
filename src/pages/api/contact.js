import axios from 'axios'
import { checkParams } from './api-helpers'

export default async function handler(req, res) {
  const parsedBody = JSON.parse(req.body)
  const { name, email, phone, message } = parsedBody
  const requiredParams = ['email', 'message']
  const hasErrors = checkParams(parsedBody, requiredParams)

  if (hasErrors) {
    return res.status(422).json({
      error: 'Missing or incorrect required property',
    })
  }

  const text = [
    `Name: \`${name || 'Sent from footer form.'}\``,
    `\nEmail: \`${email}\``,
    `\nPhone: \`${phone || 'Sent from footer form.'}\``,
    `\nMessage: \n\`\`\`${message}\`\`\``,
  ].join()

  const payload = JSON.stringify({ text })

  try {
    await axios({
      method: 'POST',
      baseURL: 'https://hooks.slack.com',
      url: `/services/${process.env.CONTACT_WEBHOOK_ID}`,
      data: payload,
    }).catch(err => {
      throw new Error(err.message)
    })

    return res.status(200).json({ message: 'SUCCESS' })
  } catch (err) {
    return res.status(500).json({ message: 'Failed post to #contact channel' })
  }
}
