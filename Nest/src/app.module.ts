import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import configBanco from 'configBanco'; // Importa as configurações
import { CategorysModule } from './categorys/categorys.module';
import { Course } from './courses/entities/course.entity';
import { Category } from './categorys/entities/category';

@Module({
  imports: [
    CoursesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: configBanco.HOST,
      port: +configBanco.DB_PORT,
      username: configBanco.DB_USER,
      password: configBanco.DB_PASSWORD,
      database: configBanco.DB_NAME,
      entities: [Course, Category],
      synchronize: true,
    }),
    CategorysModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
