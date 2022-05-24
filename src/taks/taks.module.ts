import { Module } from '@nestjs/common';
import { TaskService } from './shared/task.service';

@Module({
  providers: [TaskService]
})
export class TaksModule {}
