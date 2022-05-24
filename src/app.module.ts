import { TaskService } from './taks/shared/task.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaksModule } from './taks/taks.module';
import { TasksController } from './tasks/tasks.controller';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [TaksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
