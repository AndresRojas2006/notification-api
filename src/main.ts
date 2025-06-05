import * as dotenv from 'dotenv';
dotenv.config(); // 🟢 Cargar variables antes de todo

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true }); // 👈 CORS habilitado aquí
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
