import { DataSourceOptions } from 'typeorm';

export const config: DataSourceOptions = {
	type: 'postgres',
	host: 'localhost',
	port: 5432,
	username: 'mediumclone',
	password: '123',
	database: 'mediumclone'
}

export default config;