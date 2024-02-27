import { Module } from '@nestjs/common';
import { Category } from './entities/category';
import { CategorysService } from './categorys.service';
import { CategorysController } from './categorys.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Category])],
  providers: [CategorysService],
  controllers: [CategorysController]
})
export class CategorysModule {}
