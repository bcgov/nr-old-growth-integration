import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubmissionController } from './controllers/submission.controller';
import { SubmissionEntity } from './entities/submission.entity';
import { SubmissionService } from './services/submission.service';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([SubmissionEntity])],
  controllers: [SubmissionController],
  providers: [SubmissionService]
})
export class SubmissionModule {}
