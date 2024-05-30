import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes the ConfigModule available globally
    }),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@mongo-nest-project.znnpqyb.mongodb.net/?retryWrites=true&w=majority&appName=Mongo-nest-project`,
    ),
    UsersModule,
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
