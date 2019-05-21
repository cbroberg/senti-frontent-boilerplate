import {create} from 'apisauce'
import crypto from 'crypto'

const { REACT_APP_ENCRYPTION_KEY } = process.env
const IV_LENGTH = 16 
console.log(REACT_APP_ENCRYPTION_KEY)
const encrypt = (text) => {
	let iv = crypto.randomBytes(IV_LENGTH)
	let cipher = crypto.createCipheriv('aes-256-cbc', new Buffer.from(REACT_APP_ENCRYPTION_KEY), iv)
	let encrypted = cipher.update(text)

	encrypted = Buffer.concat([encrypted, cipher.final()])

	return iv.toString('hex') + ':' + encrypted.toString('hex')
}

export const engineAPI = create({
	baseURL: 'http://127.0.0.1:3011/',
	headers: {
		'auth': encrypt(process.env.REACT_APP_ENCRYPTION_KEY), 
		'Accept': 'application/json', 
		'Content-Type': 'application/json',
	 }
})

