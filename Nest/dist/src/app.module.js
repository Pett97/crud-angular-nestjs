"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const courses_module_1 = require("./courses/courses.module");
const typeorm_1 = require("@nestjs/typeorm");
const configBanco_1 = require("../configBanco");
const categorys_module_1 = require("./categorys/categorys.module");
const course_entity_1 = require("./courses/entities/course.entity");
const category_1 = require("./categorys/entities/category");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            courses_module_1.CoursesModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: configBanco_1.default.HOST,
                port: +configBanco_1.default.DB_PORT,
                username: configBanco_1.default.DB_USER,
                password: configBanco_1.default.DB_PASSWORD,
                database: configBanco_1.default.DB_NAME,
                entities: [course_entity_1.Course, category_1.Category],
                synchronize: true,
            }),
            categorys_module_1.CategorysModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map