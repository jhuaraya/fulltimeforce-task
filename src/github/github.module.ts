import { Module } from '@nestjs/common';
import { GithubService } from './github.service';
import { GithubController } from './github.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [GithubController],
  providers: [GithubService],
  imports:[HttpModule]
})
export class GithubModule {}
