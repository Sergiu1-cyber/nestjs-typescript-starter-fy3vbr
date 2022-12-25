import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InfoModule } from './info/info.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    InfoModule,
    MongooseModule.forRoot('mongodb+srv://sergiu1:01superman@cluster0.qwpf1.mongodb.net/?retryWrites=true&w=majority')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
