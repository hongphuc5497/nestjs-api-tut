import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
	signin() {
		return { msg: 'This is obj' };
	}

	signup() {
		return { msg: 'This is signup obj' };
	}
}
