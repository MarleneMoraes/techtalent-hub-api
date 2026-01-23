import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CandidatesModule } from './candidates/candidates.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, CandidatesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
