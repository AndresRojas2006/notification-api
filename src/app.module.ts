import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { NotificationsModule } from './notifications/notifications.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // ✅ habilita variables de entorno
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL, // ✅ se toma desde .env
      autoLoadEntities: true,
      synchronize: true,
    }),
    NotificationsModule,
  ],
})
export class AppModule {}