import { IsString, IsNumber, } from "class-validator";

export class CreateCourseDto {

  @IsString()
  readonly name: string;
  @IsNumber()
  readonly id_category:number;
}
