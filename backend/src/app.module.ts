import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseService } from './database/database.service';
import { ConfigModule } from '@nestjs/config';
import { TodoService } from './todo/todo.service';
import { TodoController } from './todo/todo.controller';
import { CacheInterceptor, CacheModule } from '@nestjs/cache-manager';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot() /**https://docs.nestjs.com/techniques/configuration */,
    CacheModule.register({
      ttl: 5_000, // 5 sec
      max: 50, // maximum number of items in cache
    }) /**https://docs.nestjs.com/techniques/caching */,
  ],
  controllers: [AppController, TodoController],
  providers: [
    AppService,
    DatabaseService,
    TodoService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class AppModule {}
